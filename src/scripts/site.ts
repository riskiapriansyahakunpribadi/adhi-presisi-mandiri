/*
PANDUAN EDIT
File: src/scripts/site.ts
Fungsi: Mengatur header melayang, panel menu HP, animasi muncul saat digulir, cadangan gambar gagal muat, dan video hero opsional yang otomatis aktif ulang saat pindah halaman.
Boleh diedit: Nilai ambang gulir SCROLL_COMPACT_PX dan SCROLL_HIDE_PX bila ingin mengubah sensitivitas header.
Jangan diubah: Pola AbortController dan pendengar astro:page-load agar tidak terjadi duplikasi event saat transisi halaman Astro.
Cara mengedit: Ubah angka pada konstanta di bagian atas file.
*/

// EDIT: Jarak gulir (dalam piksel) sebelum header mengecil dan mulai bersembunyi saat menggulir ke bawah.
const SCROLL_COMPACT_PX = 36;
const SCROLL_HIDE_PX = 140;
const SCROLL_DELTA_PX = 8;

interface NavigatorWithConnection extends Navigator {
  connection?: {
    saveData?: boolean;
    effectiveType?: string;
  };
}

// JANGAN UBAH: Menyimpan controller agar seluruh listener lama dibersihkan sebelum pindah halaman.
let activeController: AbortController | null = null;
let revealObserver: IntersectionObserver | null = null;

function prefersReducedMotion(): boolean {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

function initHeader(signal: AbortSignal): void {
  const header = document.querySelector<HTMLElement>('[data-site-header]');
  const menuToggle = document.querySelector<HTMLButtonElement>('[data-menu-toggle]');
  const menuPanel = document.querySelector<HTMLElement>('[data-menu-panel]');
  const menuClose = document.querySelector<HTMLButtonElement>('[data-menu-close]');

  if (!header) {
    return;
  }

  let lastY = window.scrollY;
  let ticking = false;
  let isMenuOpen = false;

  const setMenuState = (open: boolean, returnFocus: boolean): void => {
    if (!menuToggle || !menuPanel) {
      return;
    }
    isMenuOpen = open;
    menuToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    menuPanel.hidden = !open;
    menuPanel.classList.toggle('is-open', open);
    document.body.classList.toggle('menu-open', open);

    if (open) {
      header.classList.remove('is-hidden');
      const firstInteractive = menuPanel.querySelector<HTMLElement>(
        'a[href], button:not([disabled])'
      );
      if (firstInteractive) {
        firstInteractive.focus();
      }
    } else if (returnFocus) {
      menuToggle.focus();
    }
  };

  if (menuToggle && menuPanel) {
    menuToggle.addEventListener(
      'click',
      () => {
        setMenuState(!isMenuOpen, false);
      },
      { signal }
    );

    if (menuClose) {
      menuClose.addEventListener(
        'click',
        () => {
          setMenuState(false, true);
        },
        { signal }
      );
    }

    menuPanel.querySelectorAll<HTMLAnchorElement>('a[href]').forEach((link) => {
      link.addEventListener(
        'click',
        () => {
          setMenuState(false, false);
        },
        { signal }
      );
    });

    // JANGAN UBAH: Dukungan keyboard Escape dan jebakan fokus saat panel menu HP terbuka.
    document.addEventListener(
      'keydown',
      (event: KeyboardEvent) => {
        if (!isMenuOpen) {
          return;
        }
        if (event.key === 'Escape') {
          event.preventDefault();
          setMenuState(false, true);
          return;
        }
        if (event.key === 'Tab') {
          const focusables = Array.from(
            menuPanel.querySelectorAll<HTMLElement>(
              'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
            )
          ).filter((el) => el.offsetParent !== null);

          if (focusables.length === 0) {
            return;
          }
          const first = focusables[0];
          const last = focusables[focusables.length - 1];
          if (event.shiftKey && document.activeElement === first) {
            event.preventDefault();
            last.focus();
          } else if (!event.shiftKey && document.activeElement === last) {
            event.preventDefault();
            first.focus();
          }
        }
      },
      { signal }
    );

    const desktopMedia = window.matchMedia('(min-width: 1080px)');
    const handleBreakpointChange = (event: MediaQueryListEvent): void => {
      if (event.matches && isMenuOpen) {
        setMenuState(false, false);
      }
    };
    desktopMedia.addEventListener('change', handleBreakpointChange, { signal });
  }

  const updateHeaderOnScroll = (): void => {
    const currentY = window.scrollY;
    header.classList.toggle('is-scrolled', currentY > SCROLL_COMPACT_PX);

    const focusInsideHeader = header.contains(document.activeElement);
    if (isMenuOpen || focusInsideHeader || currentY <= SCROLL_HIDE_PX) {
      header.classList.remove('is-hidden');
      lastY = currentY;
      ticking = false;
      return;
    }

    const delta = currentY - lastY;
    if (delta > SCROLL_DELTA_PX) {
      header.classList.add('is-hidden');
      lastY = currentY;
    } else if (delta < -SCROLL_DELTA_PX) {
      header.classList.remove('is-hidden');
      lastY = currentY;
    }
    ticking = false;
  };

  window.addEventListener(
    'scroll',
    () => {
      if (!ticking) {
        window.requestAnimationFrame(updateHeaderOnScroll);
        ticking = true;
      }
    },
    { passive: true, signal }
  );

  updateHeaderOnScroll();
}

function initRevealAnimations(): void {
  if (revealObserver) {
    revealObserver.disconnect();
    revealObserver = null;
  }

  const items = document.querySelectorAll<HTMLElement>('.reveal-item');
  if (items.length === 0) {
    return;
  }

  if (prefersReducedMotion() || !('IntersectionObserver' in window)) {
    items.forEach((item) => item.classList.add('is-visible'));
    return;
  }

  revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    {
      rootMargin: '0px 0px -8% 0px',
      threshold: 0.08,
    }
  );

  items.forEach((item) => {
    revealObserver?.observe(item);
  });
}

// JANGAN UBAH: Menampilkan cadangan kotak grafit tanpa inline script jika foto eksternal gagal dimuat saat offline.
function initRemoteImageFallbacks(signal: AbortSignal): void {
  const images = document.querySelectorAll<HTMLImageElement>('[data-remote-img]');
  images.forEach((img) => {
    const showFallback = (): void => {
      const fallback = img.parentElement?.querySelector<HTMLElement>('[data-img-fallback]');
      img.hidden = true;
      if (fallback) {
        fallback.hidden = false;
      }
    };

    if (img.complete && img.naturalWidth === 0) {
      showFallback();
      return;
    }

    img.addEventListener('error', showFallback, { once: true, signal });
  });
}

function initOptionalHeroVideo(): void {
  const video = document.querySelector<HTMLVideoElement>('[data-hero-video]');
  if (!video) {
    return;
  }

  const src = video.dataset.videoSrc;
  if (!src) {
    return;
  }

  const isWideScreen = window.matchMedia('(min-width: 1024px)').matches;
  const nav = navigator as NavigatorWithConnection;
  const saveData = Boolean(nav.connection?.saveData);
  const slowConnection =
    nav.connection?.effectiveType === '2g' ||
    nav.connection?.effectiveType === 'slow-2g';

  if (!isWideScreen || saveData || slowConnection || prefersReducedMotion()) {
    return;
  }

  video.src = src;
  video.hidden = false;
  video.play().catch(() => {
    video.hidden = true;
  });
}

function cleanupSite(): void {
  if (activeController) {
    activeController.abort();
    activeController = null;
  }
  if (revealObserver) {
    revealObserver.disconnect();
    revealObserver = null;
  }
  document.body.classList.remove('menu-open');
}

function bootSite(): void {
  cleanupSite();
  document.documentElement.classList.add('js-ready');
  activeController = new AbortController();

  initHeader(activeController.signal);
  initRevealAnimations();
  initRemoteImageFallbacks(activeController.signal);
  initOptionalHeroVideo();
}

// JANGAN UBAH: Menjalankan ulang skrip setiap selesai navigasi ClientRouter Astro.
document.addEventListener('astro:before-swap', cleanupSite);
document.addEventListener('astro:page-load', bootSite);