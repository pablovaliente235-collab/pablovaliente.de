/* ═══════════════════════════════════════════════
   i18n.js — Shared bilingual logic (DE / EN)
   pablovaliente.de
   ═══════════════════════════════════════════════ */
'use strict';

const i18n = {
  de: {
    /* ── Navigation ── */
    nav_hospitality:  'HOTELLERIE',
    nav_architecture: 'ARCHITEKTUR',
    nav_realestate:   'IMMOBILIEN',
    nav_contact:      'KONTAKT',

    /* ── Cursor (home) ── */
    cur_open: 'ÖFFNEN',

    /* ── Home accordion labels ── */
    card_label_0: 'HOTELLERIE',
    card_label_1: 'ARCHITEKTUR',
    card_label_2: 'IMMOBILIEN',

    /* ── Hospitality sub-nav ── */
    subnav_bellamar:         'BELLAMAR HOTEL',
    subnav_marvell:          'MARVELL CLUB HOTEL',
    subnav_winterlandschaft: 'WINTERLANDSCHAFT',

    /* ── Architecture sub-nav ── */
    subnav_monasterio:       'MONASTERIO DE SAN MIGUEL',
    subnav_nature_tradition: 'NATUR &amp; TRADITION',
    subnav_japanese:         'JAPANISCHES HEILIGTUM',
    subnav_iglesia:          'IGLESIA DE YAGUARÓN',

    /* ── Slide subtitles ── */
    slide_sub_hospitality:  'Hotel & Gastgewerbe',
    slide_sub_marvell:      'Hotel & Gastgewerbe',
    slide_sub_winter:       'Landschaftsfotografie',
    slide_sub_architecture: 'Architekturfotografie',
    slide_sub_iglesia:      'Sakrale Architekturfotografie',
    slide_sub_realestate:   'Immobilienfotografie',

    /* ── Contact page ── */
    label_get_in_touch: 'KONTAKT',
    heading:            'Lass uns\nzusammenarbeiten.',
    label_about:        'ÜBER MICH',
    about_text:         'Ich biete visuelle End-to-End-Lösungen für die Immobilien- und Hotelleriebranche. Ich habe einen Abschluss in Fotografie und audiovisueller Kreation der EASD Valencia und bin offiziell von Blackmagic Design als Editor und Colorist (DaVinci Resolve 20) zertifiziert. Als in Deutschland registrierter Freiberufler und lizenzierter EASA A1/A3 Drohnenpilot garantiere ich eine reibungslose Produktion und höchste technische Qualität – von der Vorproduktion bis zum finalen Color Grading.',
    about_cta:          'Projekt anfragen →',
    intro_1:            'Lassen Sie uns gemeinsam außergewöhnliche visuelle Erlebnisse schaffen. Von High-End-Architektur bis hin zu exklusiver Hotellerie und Immobilien – ich helfe Ihnen, Ihre Projekte ins beste Licht zu rücken. Als professioneller Fotograf, Videograf und zertifizierter DaVinci Resolve Colorist mit Sitz in Berlin stehe ich Ihnen für lokale und weltweite Projekte zur Verfügung.',
    intro_2:            'Kontaktieren Sie mich gerne für Buchungen oder Projektanfragen auf Deutsch, Englisch oder Spanisch.',
    label_services:     'LEISTUNGEN',
    services_text:      'Photography  |  Cinematography  |  Aerial Visuals  |  Post-Production & Color Grading',
    label_germany:      'Deutschland',
    label_spain:        'Spanien',
    label_worldwide:    'Weltweit für spezifische Projekte verfügbar',
    label_credentials:  'Zertifizierungen',
    label_email:        'E-MAIL',
    btn_send:           'ANFRAGE SENDEN',
    msg_sent:           'Nachricht gesendet — ich melde mich bald.',
    msg_error:          'Etwas ist schiefgelaufen. Bitte direkt per E-Mail schreiben.',
    btn_sending:        'WIRD GESENDET...',
    btn_sent:           'GESENDET ✓',
    btn_retry:          'ERNEUT VERSUCHEN',

    /* ── Real Estate — Urban Living ── */
    re_urban_meta_desc: 'Innenraumfotografie und Videoproduktion für Wohnimmobilien. Beispielprojekt Berlin — Pablo Valiente, Fotograf und Videograf.',
    re_urban_title:     'Innenraumfotografie & Video — Wohnimmobilien Berlin',
    re_urban_desc_1:    'Fotografie und Video für eine Berliner Mietwohnung. Gezeigt werden Wohn- und Schlafbereich, Küche und Details — aufgenommen mit natürlichem Licht und einer einzigen Kamera.',
    re_urban_desc_2:    'Ein Beispielprojekt für die fotografische und filmische Dokumentation von Wohnräumen: klar, ehrlich und auf den Punkt.',
    next_project_arrow: 'Nächstes Projekt',

    /* ── Homepage card categories ── */
    card_1_category: 'Architectural Photography',
    card_2_category: 'Architectural Photography',
    card_3_category: 'Hospitality Brand Production',
    card_4_category: 'Interior Media Production',

    /* ── Hero subtitle ── */
    hero_subtitle: 'Premium Visual Production für Architektur & Hospitality-Marken',

    /* ── Video modal ── */
    modal_close:      'Schließen',
    modal_fullscreen: 'Vollbild',

    /* ── 404 ── */
    err_label: 'Seite nicht gefunden',
    err_msg:   'Die gesuchte Seite existiert nicht oder wurde verschoben.',
    err_back:  'Zurück zur Startseite',

    /* ── Hamburger menu ── */
    menu_contact:   'Kontakt',
    menu_about:     'Über mich',
    menu_impressum: 'Impressum',
    /* ── Spec labels (shared) ── */
    label_work:        'Arbeit',
    label_description: 'Beschreibung',
    label_camera:      'Kamera',
    label_software:    'Software',
    label_location:    'Standort',
    label_next_work:   'Nächstes Projekt',

    /* ── Monasterio de San Miguel ── */
    monasterio_desc:   'Architekturfotografie des Monasterio de San Miguel de los Reyes — ein Renaissancekloster aus dem 16. Jahrhundert in Valencia, heute Sitz der Valencianischen Bibliothek. Die Serie dokumentiert Außenfassaden, Kreuzgangarkaden und formale Gärten mit besonderer Beachtung von Licht und architektonischer Geometrie.',

    /* ── Japanisches Heiligtum ── */
    japanese_desc:     'Stille Symmetrie und traditionelle Holzarchitektur. Dokumentation eines japanischen Schreins — Licht, Schatten und die Sprache der Form.',

    /* ── Iglesia de Yaguarón ── */
    iglesia_desc:      'Eine der bedeutendsten Barockkirchen Lateinamerikas. Farben, Holzschnitzereien und die Stille eines einzigartigen Sakralbaus in Paraguay.',

    /* ── Bellamar Hotel ── */
    bellamar_desc:     'Umfassende audiovisuelle Produktion für Markenidentität und Buchungsplattformen. Ein kinematografischer Hero-Film mit Drohnenaufnahmen über Es Vedrá, ergänzt durch Außenaufnahmen der Fassade und detaillierte Innenaufnahmen der Suiten.',
    bellamar_work_label: 'Bellamar Hotel Beach & Spa',

    /* ── Marvell Club ── */
    marvell_desc:      'Branded-Videoproduktion für Marvell Club & Apartments. Ein kinematografischer Markenfilm, der den architektonischen Charakter, die Ausstattung und die umgebende Landschaft des Hotels durch sorgfältig komponierte Luftaufnahmen und bodennahe Kinematografie präsentiert.',

    /* ── Urban Living Berlin ── */
    urban_desc:        'Eine visuelle Erkundung zeitgenössischer Wohnräume mit Fokus auf architektonische Geometrie und natürliches Licht. Minimalistisches Hero-Video mit präziser statischer Kadrierung sowie geradlinige Immobilienfotografie, die Layout und Raumstruktur klar zeigt.',
  },
  en: {
    /* ── Navigation ── */
    nav_hospitality:  'HOSPITALITY',
    nav_architecture: 'ARCHITECTURE',
    nav_realestate:   'REAL ESTATE',
    nav_contact:      'CONTACT',

    /* ── Cursor (home) ── */
    cur_open: 'OPEN',

    /* ── Home accordion labels ── */
    card_label_0: 'HOSPITALITY',
    card_label_1: 'ARCHITECTURE',
    card_label_2: 'REAL ESTATE',

    /* ── Hospitality sub-nav ── */
    subnav_bellamar:         'BELLAMAR HOTEL',
    subnav_marvell:          'MARVELL CLUB HOTEL',
    subnav_winterlandschaft: 'WINTERLANDSCHAFT',

    /* ── Architecture sub-nav ── */
    subnav_monasterio:       'MONASTERIO DE SAN MIGUEL',
    subnav_nature_tradition: 'NATURE &amp; TRADITION',
    subnav_japanese:         'JAPANESE SANCTUARY',
    subnav_iglesia:          'IGLESIA DE YAGUARÓN',

    /* ── Slide subtitles ── */
    slide_sub_hospitality:  'Hotel & Hospitality',
    slide_sub_marvell:      'Hotel & Hospitality',
    slide_sub_winter:       'Landscape Photography',
    slide_sub_architecture: 'Architectural Photography',
    slide_sub_iglesia:      'Sacred Architecture Photography',
    slide_sub_realestate:   'Real Estate Photography',

    /* ── Contact page ── */
    label_get_in_touch: 'GET IN TOUCH',
    heading:            "Let's work\ntogether.",
    label_about:        'ABOUT ME',
    about_text:         'I provide end-to-end visual solutions for the real estate and hospitality sectors. I hold a degree in Photography and Audiovisual Creation from EASD Valencia, and I am officially certified as an Editor and Colorist by Blackmagic Design (DaVinci Resolve 20). As a registered freelancer in Germany and an EASA A1/A3 licensed drone pilot, I guarantee seamless productions and premium technical quality—from pre-production planning to the final color grade.',
    about_cta:          'Request a project →',
    intro_1:            "Let's create something exceptional. Whether you are looking to showcase premium real estate, elevate a hospitality brand, or need specialized architectural visual content, I am here to bring your vision to life. As a professional photographer, videographer, and certified DaVinci Resolve colorist based in Berlin, I am available for projects locally and worldwide.",
    intro_2:            'Feel free to reach out for bookings or project inquiries in English, German, or Spanish.',
    label_services:     'SERVICES',
    services_text:      'Photography  |  Cinematography  |  Aerial Visuals  |  Post-Production & Color Grading',
    label_germany:      'Germany',
    label_spain:        'Spain',
    label_worldwide:    'Available worldwide for specific projects',
    label_credentials:  'Credentials',
    label_email:        'EMAIL',
    btn_send:           'SEND INQUIRY',
    msg_sent:           "Message sent — I'll be in touch soon.",
    msg_error:          'Something went wrong. Please email directly.',
    btn_sending:        'SENDING...',
    btn_sent:           'SENT ✓',
    btn_retry:          'TRY AGAIN',

    /* ── Real Estate — Urban Living ── */
    re_urban_meta_desc: 'Interior photography and video production for residential properties. Sample project Berlin — Pablo Valiente, photographer and videographer.',
    re_urban_title:     'Interior Photography & Video — Residential Berlin',
    re_urban_desc_1:    'Photography and video for a Berlin rental apartment. Covers living and sleeping areas, kitchen and details — shot in natural light with a single camera.',
    re_urban_desc_2:    'A sample project for the photographic and film documentation of residential spaces: straightforward, honest and to the point.',
    next_project_arrow: 'Next Project',

    /* ── Homepage card categories ── */
    card_1_category: 'Architectural Photography',
    card_2_category: 'Architectural Photography',
    card_3_category: 'Hospitality Brand Production',
    card_4_category: 'Interior Media Production',

    /* ── Hero subtitle ── */
    hero_subtitle: 'Premium Visual Production for Architecture & Hospitality Brands',

    /* ── Video modal ── */
    modal_close:      'Close',
    modal_fullscreen: 'Full screen',

    /* ── 404 ── */
    err_label: 'Seite nicht gefunden',
    err_msg:   'Die gesuchte Seite existiert nicht oder wurde verschoben.',
    err_back:  'Zurück zur Startseite',

    /* ── 404 ── */
    err_label: 'Page not found',
    err_msg:   'The page you are looking for does not exist or has been moved.',
    err_back:  'Back to homepage',

    /* ── Hamburger menu ── */
    menu_contact:   'Contact',
    menu_about:     'About',
    menu_impressum: 'Impressum',
    /* ── Spec labels (shared) ── */
    label_work:        'Work',
    label_description: 'Description',
    label_camera:      'Camera',
    label_software:    'Software',
    label_location:    'Location',
    label_next_work:   'Next Project',

    /* ── Monasterio de San Miguel ── */
    monasterio_desc:   'Architectural photography of the Monasterio de San Miguel de los Reyes — a 16th-century Renaissance monastery in Valencia, now home to the Valencian Library. The series documents the exterior facades, arcade corridors and formal gardens through careful attention to light and architectural geometry.',

    /* ── Japanisches Heiligtum ── */
    japanese_desc:     'Silent symmetry and traditional wooden architecture. Documentation of a Japanese shrine — light, shadow and the language of form.',

    /* ── Iglesia de Yaguarón ── */
    iglesia_desc:      'One of the most significant Baroque churches in Latin America. Colours, wood carvings and the silence of a unique sacred building in Paraguay.',

    /* ── Bellamar Hotel ── */
    bellamar_desc:     'Comprehensive audiovisual production for brand identity and booking platforms. It features a cinematic hero film with Es Vedrá aerials, alongside exterior drone photography of the facade and detailed interior shots of the suites and en-suite bathrooms.',
    bellamar_work_label: 'Bellamar Hotel Beach & Spa',

    /* ── Marvell Club ── */
    marvell_desc:      'Branded video production for Marvell Club & Apartments. A cinematic brand film showcasing the hotel\'s architectural character, amenities, and surrounding landscape through carefully composed aerial and ground-level cinematography.',

    /* ── Urban Living Berlin ── */
    urban_desc:        'A visual exploration of contemporary residential spaces focusing on architectural geometry and natural light. It features a minimalist hero video with precise static framing, paired with straightforward real estate interior photography that clearly showcases the layout and structural design.',
  }
};

/* ── Lang state ── */
let currentLang = localStorage.getItem('pv_lang')
               || (navigator.language.startsWith('en') ? 'en' : 'de');

/* ── Core apply function ── */
function applyLang(lang) {
  currentLang = lang;
  localStorage.setItem('pv_lang', lang);

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (i18n[lang] && i18n[lang][key] !== undefined) {
      el.textContent = i18n[lang][key];
    }
  });

  document.querySelectorAll('[data-i18n-aria]').forEach(el => {
    const key = el.dataset.i18nAria;
    if (i18n[lang] && i18n[lang][key] !== undefined) {
      el.setAttribute('aria-label', i18n[lang][key]);
    }
  });

  /* Form placeholders */
  document.querySelectorAll('[data-placeholder-de]').forEach(el => {
    el.placeholder = lang === 'de' ? el.dataset.placeholderDe : el.dataset.placeholderEn;
  });

  /* Toggle button labels */
  document.querySelectorAll('#langToggle, #langToggleMobile, #langToggleOverlay').forEach(btn => {
    btn.textContent = lang === 'de' ? 'EN' : 'DE';
  });

  /* Page-specific hook */
  if (typeof onLangChange === 'function') onLangChange(lang);
}

/* ── Center mobile lang toggle between logo and MENU ── */
function positionMobileLangToggle() {
  var t = document.getElementById('langToggleMobile');
  var logo = document.querySelector('nav > a');
  var menu = document.getElementById('mobile-menu-btn');
  if (!t || !logo || !menu) return;
  var nav = t.closest('nav');
  if (!nav) return;
  nav.style.position = 'relative';
  t.style.position = 'absolute';
  t.style.left = '';
  t.style.transform = '';
  var navRect = nav.getBoundingClientRect();
  var logoRect = logo.getBoundingClientRect();
  var menuRect = menu.getBoundingClientRect();
  var logoPadRight = parseFloat(getComputedStyle(logo).paddingRight) || 0;
  var menuPadLeft  = parseFloat(getComputedStyle(menu).paddingLeft)  || 0;
  var logoTextRight = logoRect.right  - logoPadRight;
  var menuTextLeft  = menuRect.left   + menuPadLeft;
  var mid = (logoTextRight + menuTextLeft) / 2;
  t.style.left = (mid - navRect.left) + 'px';
  t.style.transform = 'translateX(-50%)';
}

/* ── Init (call once DOM is ready) ── */
function initLang() {
  applyLang(currentLang);
  document.querySelectorAll('#langToggle, #langToggleMobile, #langToggleOverlay').forEach(btn => {
    btn.addEventListener('click', (e) => { e.preventDefault(); e.stopPropagation(); applyLang(currentLang === 'de' ? 'en' : 'de'); });
  });
  positionMobileLangToggle();
  window.addEventListener('resize', positionMobileLangToggle);
}
