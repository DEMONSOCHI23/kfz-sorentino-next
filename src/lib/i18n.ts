export type Lang = "de" | "en";
export const DEFAULT_LANG: Lang = "de";

export const TEXT = {
  de: {
    nav_services: "Leistungen",
    nav_benefits: "Vorteile",
    nav_reviews: "Bewertungen",
    nav_contact: "Kontakt",
    cta_call: "Anrufen",
    cta_route: "Route",
    hero_kicker: "KFZ‑Werkstatt in Frankfurt am Main",
    hero_title: "KFZ Sorentino",
    hero_subtitle: "Schnell erreichbar, einfach zu buchen.",
    hero_lead: "DE/EN One‑Page mit Leistungen, Öffnungszeiten und einem Klick auf Anrufen oder Route.",
    rating: "4,9 • 133 Google Bewertungen",
    address: "Adresse",
    phone: "Telefon",
    hours: "Öffnungszeiten",
    hours_value: "laut Google Maps",
    services_title: "Leistungen",
    services_lead: "Kurzer Überblick über typische Werkstatt‑Services.",
    benefits_title: "Vorteile",
    benefits_lead: "Klare Struktur, premium Look, Fokus auf Anruf und Route.",
    reviews_title: "Bewertungen",
    reviews_lead: "Bewertungen bleiben bei Google, wir verlinken nur.",
    contact_title: "Kontakt",
    footer_note: "Demo‑Entwurf. Keine offizielle Website des Unternehmens.",
  },
  en: {
    nav_services: "Services",
    nav_benefits: "Benefits",
    nav_reviews: "Reviews",
    nav_contact: "Contact",
    cta_call: "Call",
    cta_route: "Directions",
    hero_kicker: "Car service in Frankfurt am Main",
    hero_title: "KFZ Sorentino",
    hero_subtitle: "Easy to reach, simple to book.",
    hero_lead: "DE/EN one‑page with services, opening hours, and one‑click Call or Directions.",
    rating: "4.9 • 133 Google reviews",
    address: "Address",
    phone: "Phone",
    hours: "Opening hours",
    hours_value: "per Google Maps",
    services_title: "Services",
    services_lead: "A quick overview of common workshop services.",
    benefits_title: "Benefits",
    benefits_lead: "Clean structure, premium look, focused on call and directions.",
    reviews_title: "Reviews",
    reviews_lead: "Reviews stay on Google, we only link.",
    contact_title: "Contact",
    footer_note: "Demo draft. Not the official company website.",
  },
} as const;

export type TextKey = keyof typeof TEXT.de;

export function t(lang: Lang, key: TextKey): string {
  return TEXT[lang][key] ?? TEXT.de[key];
}
