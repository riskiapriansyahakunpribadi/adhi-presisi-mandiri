/*
PANDUAN EDIT
File: src/i18n/en.ts
Fungsi: Menyimpan seluruh teks tampilan situs dalam bahasa Inggris yang selaras dengan struktur src/i18n/id.ts.
Boleh diedit: Seluruh isi teks berbahasa Inggris.
Jangan diubah: Nama kunci objek agar selalu sama persis dengan src/i18n/id.ts.
Cara mengedit: Ubah kalimat di dalam tanda kutip. Hindari emoji, tanda pisah panjang, dan istilah pemasaran kosong.
*/

import type { SiteCopy } from './id';

export const enCopy: SiteCopy = {
  locale: 'en-US',
  langLabel: 'English',
  skipToContent: 'Skip to main content',
  siteTagline: 'Precision machining and engineering from Cikarang',

  nav: {
    ariaLabel: 'Primary navigation',
    menuButton: 'Menu',
    closeMenu: 'Close menu',
    languageSwitchAria: 'Switch language to Bahasa Indonesia',
    items: [
      { key: 'about', label: 'About' },
      { key: 'services', label: 'Services' },
      { key: 'capabilities', label: 'Capabilities' },
      { key: 'industries', label: 'Industries' },
      { key: 'projects', label: 'Projects' },
      { key: 'insights', label: 'Insights' },
      { key: 'faq', label: 'FAQ' },
    ],
    cta: 'Send engineering drawing',
  },

  common: {
    backToList: 'Back to overview',
    viewServiceDetail: 'View service scope',
    viewCapabilityDetail: 'View capability details',
    readArticle: 'Read article',
    requestQuote: 'Send engineering drawing',
    viewCapabilities: 'View capabilities',
    viewAllServices: 'View all services',
    viewAllCapabilities: 'View all capabilities',
    viewAllProjects: 'View work examples',
    viewAllInsights: 'View all insights',
    viewFaq: 'Read technical FAQ',
    whatsappFallbackLabel: 'Contact via WhatsApp',
    whatsappUnavailableNote:
      'WhatsApp number is not configured yet. Update whatsappNumber in src/data/company.ts to enable the direct link.',
    placeholderImagePrefix: 'IMAGE',
    placeholderSizePrefix: 'Recommended size',
    illustrativeBadge: 'Illustrative work sample',
    emptyListTitle: 'No entries available yet',
    emptyListBody:
      'This list is currently being updated. Reach out to our engineering team directly if you need details on this scope.',
  },

  hero: {
    // EDIT: Main hero copy aligned with the approved Indonesian headline.
    titleLines: [
      'Precision components,',
      'machined to your engineering drawings.',
    ],
    subtitle:
      'PT Adhi Presisi Mandiri handles CNC machining, jigs and fixtures, and machine spare parts from Cikarang for factories across West Java and nearby industrial estates.',
    primaryCta: 'Send engineering drawing',
    secondaryCta: 'View capabilities',
    infoCardHeading: 'Initial quotation notes',
    infoCardItems: [
      {
        label: 'Accepted drawing formats',
        value: 'STEP, DWG, DXF, and dimensioned PDF',
      },
      {
        label: 'Order scope',
        value: 'One-off parts, prototypes, jigs, and spare parts',
      },
      {
        label: 'Workshop location',
        value: 'Cikarang Industrial Estate, Bekasi',
      },
    ],
  },

  home: {
    aboutSection: {
      heading: 'Built in Cikarang for daily factory production needs',
      lead: 'We focus on mechanical components that require consistent dimensional fit, repeatable setup, and direct technical communication from the first drawing review.',
      body: 'Our engineering team reviews every drawing before cutting metal, aligning material selection, machining sequence, and inspection checkpoints with your purchasing and production engineers.',
      cta: 'Read how our workshop operates',
    },
    qualitySection: {
      statement:
        'Every metal cut starts with a careful drawing review and finishes with dimensional verification before leaving our bench.',
      body: 'We do not rely on paper claims. Our team logs raw stock, machining steps, and final measurement checks so your plant QC and maintenance crews receive parts ready for installation.',
      points: [
        'Manufacturability review before issuing a quotation',
        'Documented setup notes for consistent repeat orders',
        'Verification of critical dimensions marked on your drawing',
      ],
    },
    capabilitiesSection: {
      heading: 'Four core workshop capabilities',
      intro:
        'Our scope covers new components machined from CAD drawings as well as replacement parts reconstructed from worn physical samples.',
    },
    servicesSection: {
      heading: 'Support from drawing review to plant delivery',
      intro:
        'Each stage runs under one roof so buyers and plant engineers do not have to coordinate multiple separate workshops.',
    },
    advantagesSection: {
      heading: 'Why plant teams work with us',
      items: [
        {
          icon: 'blueprint',
          title: 'Machined to drawing',
          description:
            'Our machinists follow the dimensions, projections, and surface notes specified on your drawing. When a geometry creates tooling risk, our engineers flag it before production starts.',
        },
        {
          icon: 'document',
          title: 'Documented process',
          description:
            'We keep structured records of material grade, machining sequence, and inspection points so repeat orders match previous deliveries.',
        },
        {
          icon: 'caliper',
          title: 'Pre-delivery inspection',
          description:
            'Our QC team measures critical features on every part before packing so installation on your production line is not delayed.',
        },
        {
          icon: 'wrench',
          title: 'Direct engineering communication',
          description:
            'You talk directly with the engineers reviewing your drawing and planning the machine setup, keeping minor adjustments and material questions moving without layers of handoff.',
        },
      ],
    },
    workflowSection: {
      heading: 'Workflow from drawing to finished part',
      intro:
        'Five clear checkpoints followed on every quotation request through final delivery to your facility.',
      steps: [
        {
          code: '01',
          mark: '0 mm',
          title: 'Send drawing or sample',
          description:
            'Share STEP, DWG, DXF, or dimensioned PDF files, or provide a worn physical sample when no drawing exists.',
        },
        {
          code: '02',
          mark: '25 mm',
          title: 'Technical review and quote',
          description:
            'Our engineering team evaluates material, geometry, and setup requirements, then sends a written quotation.',
        },
        {
          code: '03',
          mark: '50 mm',
          title: 'Workshop machining',
          description:
            'Once your purchase order is confirmed, our operators prepare raw stock, CAM programs, and machining operations.',
        },
        {
          code: '04',
          mark: '75 mm',
          title: 'Quality inspection',
          description:
            'Our QC staff verifies critical dimensions against the engineering drawing and checks edge deburring before packing.',
        },
        {
          code: '05',
          mark: '100 mm',
          title: 'Delivery to your plant',
          description:
            'Finished parts are packed with protective wrapping and delivered to your facility or prepared for pickup in Cikarang.',
        },
      ],
    },
    insightsSection: {
      heading: 'Technical notes for buyers and production engineers',
      intro:
        'Practical guidance on preparing drawings, choosing materials, and handling replacement parts to keep quotation turnaround straightforward.',
    },
    quoteBanner: {
      heading: 'Ready to review your engineering drawing',
      body: 'Send your component details through our quotation form. Our engineering team reviews your requirements and responds during business hours.',
      cta: 'Open quotation form',
    },
  },

  pages: {
    home: {
      title: 'PT Adhi Presisi Mandiri | CNC Machining and Precision Parts in Cikarang',
      description:
        'PT Adhi Presisi Mandiri provides CNC machining, jigs and fixtures, machine spare parts, and reverse engineering from Cikarang for factories across West Java.',
    },
    about: {
      title: 'About Us | PT Adhi Presisi Mandiri',
      description:
        'Workshop profile of PT Adhi Presisi Mandiri, a precision machining and engineering supplier in Cikarang Industrial Estate, Bekasi.',
      heading: 'A precision workshop built around careful drawing interpretation',
      intro:
        'PT Adhi Presisi Mandiri supplies machined mechanical components, assembly jigs and fixtures, and replacement machine parts to factories across Cikarang, Bekasi, Karawang, and West Java.',
      principlesHeading: 'How we operate on the shop floor',
      principles: [
        {
          title: 'Straightforward from initial review',
          body: 'When a drawing feature needs special tooling or an alternative setup, our engineers state it clearly before you approve the quotation.',
        },
        {
          title: 'Structured for one-off parts and repeat batches',
          body: 'Factory needs often start with a single urgent spare part or fixture. We handle prototypes, single units, and small to medium production batches.',
        },
        {
          title: 'Located inside the West Java industrial corridor',
          body: 'Operating in Cikarang simplifies physical sample pickup for reverse engineering and direct delivery to neighboring manufacturing plants.',
        },
      ],
      facilityHeading: 'Workshop scope',
      facilityBody:
        'Our work centers on four practical areas: CNC milling and turning, custom assembly and checking jigs, production machine spare parts, and reverse engineering for legacy components without original drawings.',
      ctaHeading: 'Have a component requirement to discuss?',
      ctaButton: 'Send engineering drawing',
    },
    services: {
      title: 'Services | PT Adhi Presisi Mandiri',
      description:
        'Four core services at PT Adhi Presisi Mandiri: design and engineering, production and machining, quality inspection, and maintenance spare parts support.',
      heading: 'Machining services and technical support',
      intro:
        'Every service is structured to help maintenance, engineering, and purchasing teams source mechanical parts without unnecessary coordination overhead.',
    },
    capabilities: {
      title: 'Capabilities | PT Adhi Presisi Mandiri',
      description:
        'Machining capabilities at PT Adhi Presisi Mandiri: CNC milling and turning, jigs and fixtures, machine spare parts, and reverse engineering.',
      heading: 'Metal machining and tooling capabilities',
      intro:
        'Select a category below to review our practical scope, typical part types, and what information helps us quote accurately.',
    },
    industries: {
      title: 'Industries Served | PT Adhi Presisi Mandiri',
      description:
        'Precision components and fixtures for automotive, electronics, plastic molding, and food and beverage packaging plants in Cikarang and West Java.',
      heading: 'Supporting four industrial sectors across West Java',
      intro:
        'Factories along the Cikarang, Bekasi, and Karawang corridor operate under distinct mechanical demands. Our engineers match material selection and surface finish to your equipment environment.',
      sectors: [
        {
          id: 'otomotif',
          imageSlot: 'industri-otomotif',
          name: 'Automotive and vehicle components',
          summary:
            'Custom assembly jigs, checking fixtures, bushings, brackets, and line spare parts for two-wheeler and four-wheeler tier suppliers.',
          examples: [
            'Welding jigs and mechanical workholding fixtures',
            'Locating pins, stoppers, and assembly line wear components',
            'Carbon steel and aluminum sensor brackets and mounts',
          ],
        },
        {
          id: 'elektronik',
          imageSlot: 'industri-elektronik',
          name: 'Electronics and electrical equipment',
          summary:
            'Cleanly machined aluminum and engineering plastic parts for testing fixtures, component housings, and burr-free assembly trays.',
          examples: [
            'Circuit board test fixtures and precision assembly nests',
            'Milled aluminum housings, heatsink plates, and perforated panels',
            'Insulating components machined from POM, PTFE, or technical acrylic',
          ],
        },
        {
          id: 'plastik',
          imageSlot: 'industri-plastik',
          name: 'Plastics and injection molding',
          summary:
            'Support components for injection molds, mounting plates, straightforward core inserts, and replacement wear parts for molding machines.',
          examples: [
            'Mold inserts, backing plates, and sliding blocks',
            'Guide pins, mold bushings, and cooling manifold blocks',
            'Reverse engineered replacement parts from worn mechanical samples',
          ],
        },
        {
          id: 'makanan',
          imageSlot: 'industri-makanan',
          name: 'Food and beverage packaging machinery',
          summary:
            'Replacement parts for packaging machines and conveyor lines machined from stainless steel and washdown-friendly engineering plastics.',
          examples: [
            'Stainless steel drive shafts, rollers, and bearing housings',
            'Guide rails, starwheels, and wear strips in HDPE or POM',
            'Local replacement of hard-to-source imported packaging parts',
          ],
        },
      ],
      ctaHeading: 'Operating in another manufacturing sector?',
      ctaBody:
        'If your part requires metal or engineering plastic machining from a drawing or physical sample, our engineering team will review it.',
      ctaButton: 'Discuss your component needs',
    },
    projects: {
      title: 'Work Examples | PT Adhi Presisi Mandiri',
      description:
        'Illustrative work examples showing CNC milled brackets, assembly jigs, stainless packaging shafts, and reverse engineered gears.',
      heading: 'Illustrative work examples',
      intro:
        'This page shows representative types of machining jobs within our workshop scope. All entries below are illustrative examples without client names or third-party production numbers.',
      noticeTitle: 'Portfolio transparency note',
      noticeBody:
        'PT Adhi Presisi Mandiri is a fictional company created for a website design demonstration. These examples illustrate typical precision machining jobs and do not claim real client engagements.',
    },
    insights: {
      title: 'Technical Insights | PT Adhi Presisi Mandiri',
      description:
        'Practical engineering articles on preparing CNC drawings, choosing metal materials, and deciding when to use reverse engineering.',
      heading: 'Technical insights',
      intro:
        'Practical notes written for production engineers, maintenance leads, and buyers to speed up drawing review and avoid preventable revisions.',
    },
    faq: {
      title: 'Technical FAQ | PT Adhi Presisi Mandiri',
      description:
        'Direct answers on accepted drawing formats, workable materials, prototype orders, quotation inputs, and delivery options.',
      heading: 'Questions plant teams ask most often',
      intro:
        'These answers cover the technical details buyers and engineers typically confirm before sending a drawing. Send specific part questions through our quotation form.',
      items: [
        {
          question: 'Which engineering drawing formats do you accept?',
          answer:
            'Our engineering team accepts 3D STEP (.stp or .step) and IGES files alongside 2D DWG, DXF, and dimensioned PDF drawings. For parts with tight fits, threads, or surface finish callouts, please include a 2D PDF with your 3D model so every note is clear.',
        },
        {
          question: 'Which materials can your workshop machine?',
          answer:
            'We machine aluminum alloys (such as 6061 and 5052), carbon steel (such as S45C and SS400), tool steel, stainless steel (such as SUS304 and SUS316), brass, copper, and engineering plastics including POM (Delrin), nylon, HDPE, and PTFE. Our team confirms specialty material availability during drawing review.',
        },
        {
          question: 'Do you accept single-piece orders or prototypes?',
          answer:
            'Yes. We machine single units for prototypes, custom fixtures, and urgent machine spare parts, as well as small and medium repeat batches. Unit pricing is calculated per project based on geometry, material, and order quantity.',
        },
        {
          question: 'What tolerances and lead times can you guarantee?',
          answer:
            'Achievable tolerances and lead times depend on part geometry, material, secondary processes (such as heat treatment or surface coating), and current shop schedule. Our engineering team confirms both tolerance feasibility and delivery schedule in writing when reviewing your drawing.',
        },
        {
          question: 'What details should we include when requesting a quote?',
          answer:
            'Include your engineering drawing (or clear reference photos during initial inquiry), preferred material grade, estimated quantity, factory location, and functional notes if the part mates with an existing assembly. If no drawing exists, let us know whether a physical sample is available for measurement.',
        },
        {
          question: 'How are finished parts delivered?',
          answer:
            'For plants in Cikarang, Bekasi, Karawang, and surrounding areas, parts can be delivered by our delivery vehicle, shipped via your preferred courier, or collected directly at our Cikarang workshop once inspection is complete. Delivery terms are confirmed with your order.',
        },
      ],
      ctaHeading: 'Have a technical question about a specific part?',
      ctaButton: 'Send your question via quote form',
    },
    quote: {
      title: 'Request a Quotation | PT Adhi Presisi Mandiri',
      description:
        'Send your CNC machining, jig and fixture, machine spare part, or reverse engineering details to the PT Adhi Presisi Mandiri engineering team.',
      heading: 'Request a quotation',
      intro:
        'Machining costs are calculated per project based on drawing geometry, material grade, and quantity. Share your requirements below so our engineering team can prepare an initial review.',
    },
    notFound: {
      title: 'Page Not Found | PT Adhi Presisi Mandiri',
      description: 'The requested page is unavailable or has been moved.',
      code: '404',
      heading: 'Page not found',
      body: 'The URL you opened does not exist on this site. Return to the home page or go directly to the quotation request form.',
      homeCta: 'Return to home',
      quoteCta: 'Open quotation form',
    },
  },

  quoteForm: {
    formAriaLabel: 'Quotation request form',
    fields: {
      fullName: {
        label: 'Full name',
        placeholder: 'Point of contact name',
        errorRequired: 'Enter your full name.',
      },
      company: {
        label: 'Company name',
        placeholder: 'Plant or company name',
        errorRequired: 'Enter your company or plant name.',
      },
      email: {
        label: 'Work email',
        placeholder: 'name@company.com',
        errorRequired: 'Enter an active work email address.',
        errorInvalid: 'Enter a valid email address format.',
      },
      phone: {
        label: 'Phone or WhatsApp number',
        placeholder: '+62 8xx xxxx xxxx',
        errorRequired: 'Enter a reachable phone number.',
      },
      plantLocation: {
        label: 'Factory location',
        placeholder: 'Example: MM2100 Cikarang, Jababeka, or Karawang',
        errorRequired: 'Specify your industrial estate or city.',
      },
      needType: {
        label: 'Type of requirement',
        hint: 'Select one or more matching categories.',
        errorRequired: 'Select at least one requirement category.',
        options: [
          { value: 'permesinan-cnc', label: 'CNC machining' },
          { value: 'jig-dan-fixture', label: 'Jigs and fixtures' },
          { value: 'suku-cadang', label: 'Machine spare parts' },
          { value: 'pembuatan-ulang', label: 'Reverse engineering' },
          { value: 'lainnya', label: 'Other' },
        ],
      },
      quantity: {
        label: 'Estimated quantity',
        placeholder: 'Example: 1 prototype unit or 25 pcs per month',
      },
      details: {
        label: 'Requirement details and drawing notes',
        placeholder:
          'Describe preferred material, available drawing format (STEP/DWG/PDF), or whether a physical sample is ready for measurement.',
        errorRequired: 'Provide a brief summary of your component requirement.',
      },
      honeypotLabel: 'Leave this field empty',
    },
    drawingNote:
      'For large engineering drawing files (STEP, DWG, DXF, or PDF), mention the file format in the details field or share the file directly through WhatsApp once connected with our engineers.',
    submitButton: 'Send quotation request',
    submittingButton: 'Sending request...',
    status: {
      submitting: 'Submitting your quotation request...',
      successTitle: 'Quotation request sent',
      successBody:
        'Thank you. Our engineering team reviews your details and will reply by email or phone during business hours.',
      errorNoEndpointTitle: 'Form endpoint is not connected yet',
      errorNoEndpointBody:
        'This form still uses the "isi_endpoint_form" placeholder in src/data/company.ts. Connect your form service endpoint or use the WhatsApp channel as backup.',
      errorNetworkTitle: 'Unable to send request',
      errorNetworkBody:
        'A connection error prevented the form from submitting. Check your connection and try again, or contact our team using the alternative details beside this form.',
      validationSummary: 'Review the highlighted fields before submitting.',
    },
    sidebar: {
      heading: 'Alternative contact and workshop info',
      whatsappHeading: 'Send a quick summary on WhatsApp',
      whatsappBody:
        'Useful when you want to share photos of a worn sample or coordinate quickly with our engineering desk.',
      whatsappButton: 'Open WhatsApp',
      contactHeading: 'Workshop contact',
      hoursLabel: 'Working hours',
      addressLabel: 'Workshop address',
      phoneLabel: 'Phone',
      emailLabel: 'Email',
      checklistHeading: 'To speed up drawing review',
      checklist: [
        'Prepare STEP, DWG, DXF, or dimensioned PDF drawings',
        'Specify preferred material grade if already decided',
        'State estimated order quantity (single piece or batch)',
        'Note if a physical sample is available for measurement',
      ],
    },
  },

  footer: {
    navigationHeading: 'Navigation',
    capabilitiesHeading: 'Capabilities',
    contactHeading: 'Cikarang Workshop',
    ctaHeading: 'Need a machining quotation?',
    ctaBody:
      'Send your engineering drawing or spare part details for our engineering team to review.',
    ctaButton: 'Send engineering drawing',
    hoursLabel: 'Working hours',
    phoneLabel: 'Phone',
    emailLabel: 'Email',
    demoNotice:
      'Website design demonstration project. The company and its data are fictional.',
    copyrightPrefix: 'PT Adhi Presisi Mandiri',
  },
};