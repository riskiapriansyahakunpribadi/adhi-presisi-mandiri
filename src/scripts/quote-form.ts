/*
PANDUAN EDIT
File: src/scripts/quote-form.ts
Fungsi: Menangani validasi formulir permintaan penawaran, pengisian otomatis chip dari parameter URL (?need=), perlindungan honeypot, dan pengiriman data ke endpoint form.
Boleh diedit: Tidak perlu diubah untuk mengganti endpoint form atau teks pesan.
Jangan diubah: Pola AbortController, pembersihan astro:before-swap, dan pengecekan honeypot agar formulir tetap aman dan berfungsi setelah pindah halaman.
Cara mengedit: Ganti alamat endpoint form melalui src/data/company.ts; ubah teks pesan validasi dan status melalui src/i18n/id.ts dan src/i18n/en.ts.
*/

let formController: AbortController | null = null;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

interface StatusConfig {
  type: 'info' | 'success' | 'error';
  title: string;
  body: string;
}

function setStatusBox(
  box: HTMLElement | null,
  titleEl: HTMLElement | null,
  bodyEl: HTMLElement | null,
  config: StatusConfig | null
): void {
  if (!box || !titleEl || !bodyEl) {
    return;
  }

  if (!config) {
    box.hidden = true;
    box.removeAttribute('data-state');
    titleEl.textContent = '';
    bodyEl.textContent = '';
    return;
  }

  box.hidden = false;
  box.setAttribute('data-state', config.type);
  titleEl.textContent = config.title;
  bodyEl.textContent = config.body;
}

function setFieldError(
  form: HTMLFormElement,
  fieldName: string,
  message: string
): void {
  const errorEl = form.querySelector<HTMLElement>(`[data-error-for="${fieldName}"]`);
  const control = form.querySelector<HTMLElement>(`[name="${fieldName}"]`);

  if (errorEl) {
    errorEl.textContent = message;
    errorEl.hidden = message.length === 0;
  }

  if (control) {
    if (message.length > 0) {
      control.setAttribute('aria-invalid', 'true');
    } else {
      control.removeAttribute('aria-invalid');
    }
  }
}

function preselectNeedFromUrl(form: HTMLFormElement): void {
  const params = new URLSearchParams(window.location.search);
  const needParam = params.get('need');
  if (!needParam) {
    return;
  }

  const checkboxes = form.querySelectorAll<HTMLInputElement>('input[name="needType"]');
  checkboxes.forEach((box) => {
    if (box.value === needParam) {
      box.checked = true;
    }
  });
}

function validateForm(form: HTMLFormElement): HTMLElement | null {
  let firstInvalid: HTMLElement | null = null;

  const requiredTextFields = [
    'fullName',
    'company',
    'email',
    'phone',
    'plantLocation',
    'details',
  ];

  for (const fieldName of requiredTextFields) {
    const input = form.querySelector<HTMLInputElement | HTMLTextAreaElement>(
      `[name="${fieldName}"]`
    );
    if (!input) {
      continue;
    }

    const value = input.value.trim();
    const requiredMsg = input.dataset.errRequired ?? '';
    const invalidMsg = input.dataset.errInvalid ?? '';

    if (value.length === 0) {
      setFieldError(form, fieldName, requiredMsg);
      if (!firstInvalid) {
        firstInvalid = input;
      }
      continue;
    }

    if (fieldName === 'email' && !EMAIL_PATTERN.test(value)) {
      setFieldError(form, fieldName, invalidMsg || requiredMsg);
      if (!firstInvalid) {
        firstInvalid = input;
      }
      continue;
    }

    setFieldError(form, fieldName, '');
  }

  const needGroup = form.querySelector<HTMLElement>('[data-need-group]');
  const needChecks = Array.from(
    form.querySelectorAll<HTMLInputElement>('input[name="needType"]')
  );
  const selectedNeeds = needChecks.filter((item) => item.checked);

  if (selectedNeeds.length === 0) {
    const needErrorMsg = needGroup?.dataset.errRequired ?? '';
    setFieldError(form, 'needType', needErrorMsg);
    if (!firstInvalid && needChecks[0]) {
      firstInvalid = needChecks[0];
    }
  } else {
    setFieldError(form, 'needType', '');
  }

  return firstInvalid;
}

function initQuoteForm(): void {
  if (formController) {
    formController.abort();
    formController = null;
  }

  const form = document.querySelector<HTMLFormElement>('[data-quote-form]');
  if (!form) {
    return;
  }

  formController = new AbortController();
  const { signal } = formController;

  const statusBox = form.querySelector<HTMLElement>('[data-form-status]');
  const statusTitle = form.querySelector<HTMLElement>('[data-form-status-title]');
  const statusBody = form.querySelector<HTMLElement>('[data-form-status-body]');
  const submitBtn = form.querySelector<HTMLButtonElement>('[data-submit-btn]');
  const submitLabel = form.querySelector<HTMLElement>('[data-submit-label]');

  const defaultSubmitText = form.dataset.submitText ?? '';
  const submittingText = form.dataset.submittingText ?? '';

  preselectNeedFromUrl(form);

  // Bersihkan pesan galat bidang segera saat pengguna memperbaiki isian.
  form.addEventListener(
    'input',
    (event: Event) => {
      const target = event.target as HTMLElement | null;
      const name = target?.getAttribute('name');
      if (name && name !== 'website') {
        setFieldError(form, name, '');
      }
    },
    { signal }
  );

  form.addEventListener(
    'change',
    (event: Event) => {
      const target = event.target as HTMLElement | null;
      if (target?.getAttribute('name') === 'needType') {
        setFieldError(form, 'needType', '');
      }
    },
    { signal }
  );

  form.addEventListener(
    'submit',
    async (event: SubmitEvent) => {
      event.preventDefault();

      // JANGAN UBAH: Jika kolom honeypot terisi oleh bot otomatis, hentikan pengiriman secara diam.
      const honeypot = form.querySelector<HTMLInputElement>('input[name="website"]');
      if (honeypot && honeypot.value.trim().length > 0) {
        setStatusBox(statusBox, statusTitle, statusBody, {
          type: 'success',
          title: form.dataset.successTitle ?? '',
          body: form.dataset.successBody ?? '',
        });
        form.reset();
        return;
      }

      const firstInvalid = validateForm(form);
      if (firstInvalid) {
        setStatusBox(statusBox, statusTitle, statusBody, {
          type: 'error',
          title: form.dataset.validationSummary ?? '',
          body: '',
        });
        firstInvalid.focus();
        return;
      }

      const endpoint = (form.dataset.endpoint ?? '').trim();
      if (!endpoint) {
        setStatusBox(statusBox, statusTitle, statusBody, {
          type: 'error',
          title: form.dataset.noEndpointTitle ?? '',
          body: form.dataset.noEndpointBody ?? '',
        });
        statusBox?.focus();
        return;
      }

      const formData = new FormData(form);
      const selectedNeeds = formData
        .getAll('needType')
        .map((entry) => String(entry));

      const payload = {
        fullName: String(formData.get('fullName') ?? '').trim(),
        company: String(formData.get('company') ?? '').trim(),
        email: String(formData.get('email') ?? '').trim(),
        phone: String(formData.get('phone') ?? '').trim(),
        plantLocation: String(formData.get('plantLocation') ?? '').trim(),
        needType: selectedNeeds.join(', '),
        quantity: String(formData.get('quantity') ?? '').trim(),
        details: String(formData.get('details') ?? '').trim(),
        language: form.dataset.lang ?? 'id',
      };

      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.setAttribute('aria-busy', 'true');
      }
      if (submitLabel && submittingText) {
        submitLabel.textContent = submittingText;
      }

      setStatusBox(statusBox, statusTitle, statusBody, {
        type: 'info',
        title: form.dataset.submittingStatus ?? '',
        body: '',
      });

      try {
        const response = await fetch(endpoint, {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
        });

        if (!response.ok) {
          throw new Error(`HTTP ${response.status}`);
        }

        setStatusBox(statusBox, statusTitle, statusBody, {
          type: 'success',
          title: form.dataset.successTitle ?? '',
          body: form.dataset.successBody ?? '',
        });
        form.reset();
        statusBox?.focus();
      } catch {
        setStatusBox(statusBox, statusTitle, statusBody, {
          type: 'error',
          title: form.dataset.networkErrorTitle ?? '',
          body: form.dataset.networkErrorBody ?? '',
        });
        statusBox?.focus();
      } finally {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.removeAttribute('aria-busy');
        }
        if (submitLabel && defaultSubmitText) {
          submitLabel.textContent = defaultSubmitText;
        }
      }
    },
    { signal }
  );
}

function cleanupQuoteForm(): void {
  if (formController) {
    formController.abort();
    formController = null;
  }
}

// JANGAN UBAH: Inisialisasi ulang skrip formulir setiap kali halaman selesai dimuat lewat ClientRouter Astro.
document.addEventListener('astro:before-swap', cleanupQuoteForm);
document.addEventListener('astro:page-load', initQuoteForm);