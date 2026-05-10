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
    label_services:     'LEISTUNGEN',
    services_text:      'Photography  |  Cinematography  |  Aerial Visuals  |  Post-Production & Color Grading',
    label_location:     'STANDORT',
    label_germany:      'Deutschland',
    label_spain:        'Spanien',
    label_worldwide:    'Weltweit für spezifische Projekte verfügbar',
    label_email:        'E-MAIL',
    btn_send:           'ANFRAGE SENDEN',
    msg_sent:           'Nachricht gesendet — ich melde mich bald.',
    msg_error:          'Etwas ist schiefgelaufen. Bitte direkt per E-Mail schreiben.',
    btn_sending:        'WIRD GESENDET...',
    btn_sent:           'GESENDET ✓',
    btn_retry:          'ERNEUT VERSUCHEN',
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
    about_text:         'I provide end-to-end visual solutions for the real estate and hospitality sectors. Graduated in Photography and Audiovisual Creation from EASD Valencia, and officially certified as an Editor and Colorist by Blackmagic Design (DaVinci Resolve 20). As a registered freelancer in Germany and an EASA A1/A3 licensed drone pilot, I guarantee seamless production and premium technical quality—from pre-production to the final color grade.',
    label_services:     'SERVICES',
    services_text:      'Photography  |  Cinematography  |  Aerial Visuals  |  Post-Production & Color Grading',
    label_location:     'LOCATION',
    label_germany:      'Germany',
    label_spain:        'Spain',
    label_worldwide:    'Available worldwide for specific projects',
    label_email:        'EMAIL',
    btn_send:           'SEND INQUIRY',
    msg_sent:           "Message sent — I'll be in touch soon.",
    msg_error:          'Something went wrong. Please email directly.',
    btn_sending:        'SENDING...',
    btn_sent:           'SENT ✓',
    btn_retry:          'TRY AGAIN',
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

/* ── Init (call once DOM is ready) ── */
function initLang() {
  applyLang(currentLang);
  document.querySelectorAll('#langToggle, #langToggleMobile, #langToggleOverlay').forEach(btn => {
    btn.addEventListener('click', () => applyLang(currentLang === 'de' ? 'en' : 'de'));
  });
}
