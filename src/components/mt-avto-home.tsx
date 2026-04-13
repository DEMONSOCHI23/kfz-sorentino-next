"use client";

import { useMemo, useState } from "react";
import { RouteFlagIcon, ShieldBadgeIcon, StarRowIcon, WrenchWheelIcon } from "@/components/icons";
import { DEFAULT_LANG, type Lang, t } from "@/lib/i18n";

const PHONE = "+4915730025895";
const ADDRESS = "Hartmannsweilerstraße 101, 65933 Frankfurt am Main";
const MAPS_URL = "https://maps.app.goo.gl/2vwegNA7Y3w8tvCw6";
const DIRECTIONS_URL = "https://www.google.com/maps/dir/?api=1&destination=" + encodeURIComponent(ADDRESS);

const brands = ["BMW", "Mercedes", "Audi", "Volkswagen", "Opel", "Ford", "Toyota", "Hyundai"];

const services = [
  { badge: "01", de: "Inspektion & Ölwechsel", en: "Inspection & oil change" },
  { badge: "02", de: "Diagnose (OBD)", en: "Diagnostics (OBD)" },
  { badge: "03", de: "Bremsen", en: "Brakes" },
  { badge: "04", de: "Reifenservice", en: "Tire service" },
  { badge: "05", de: "Fahrwerk", en: "Suspension" },
  { badge: "06", de: "Elektrik", en: "Electrical" },
  { badge: "07", de: "Klimaservice", en: "A/C service" },
  { badge: "08", de: "Wartung", en: "Maintenance" },
];

export function MtAvtoHome() {
  const [lang, setLang] = useState<Lang>(DEFAULT_LANG);
  const telHref = useMemo(() => `tel:${PHONE}` as const, []);

  return (
    <main className="pb-8">
      <header className="sticky top-0 z-30 border-b border-white/10 bg-[#181512]/85 backdrop-blur-md">
        <div className="site-shell flex items-center justify-between gap-4 py-4 text-white">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--site-red)] text-white shadow-lg shadow-red-950/30">
              <WrenchWheelIcon className="h-6 w-6" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-white/60">DE/EN demo</p>
              <p className="text-lg font-semibold tracking-[0.06em]">{t(lang, "hero_title")}</p>
            </div>
          </div>

          <nav className="hidden items-center gap-7 text-sm text-white/76 lg:flex">
            <a href="#services" className="hover:text-white">{t(lang, "nav_services")}</a>
            <a href="#benefits" className="hover:text-white">{t(lang, "nav_benefits")}</a>
            <a href="#reviews" className="hover:text-white">{t(lang, "nav_reviews")}</a>
            <a href="#contact" className="hover:text-white">{t(lang, "nav_contact")}</a>
          </nav>

          <div className="flex items-center gap-3">
            <div className="flex rounded-full bg-white/10 p-1 text-xs">
              <button
                onClick={() => setLang("de")}
                className={`rounded-full px-3 py-2 font-semibold ${lang === "de" ? "bg-white text-[#181512]" : "text-white/80"}`}
              >
                DE
              </button>
              <button
                onClick={() => setLang("en")}
                className={`rounded-full px-3 py-2 font-semibold ${lang === "en" ? "bg-white text-[#181512]" : "text-white/80"}`}
              >
                EN
              </button>
            </div>
            <a
              href={telHref}
              className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#181512] transition-transform hover:-translate-y-0.5"
            >
              {t(lang, "cta_call")}
            </a>
          </div>
        </div>
      </header>

      <section className="site-shell pt-6 sm:pt-8">
        <div className="grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="relative overflow-hidden rounded-[36px] bg-[#171412] p-6 text-white sm:p-8 lg:p-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(188,45,35,0.42),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.08),transparent_24%)]" />
            <div className="relative flex h-full flex-col">
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-white/15 bg-white/8 px-4 py-2 text-xs uppercase tracking-[0.25em] text-white/80"
                >
                  {t(lang, "rating")}
                </a>
                <span className="rounded-full border border-[var(--site-gold)]/40 bg-[var(--site-gold)]/10 px-4 py-2 text-xs uppercase tracking-[0.22em] text-[var(--site-gold)]">
                  One‑Page
                </span>
              </div>

              <div className="mt-8 max-w-2xl">
                <p className="text-sm uppercase tracking-[0.34em] text-white/55">{t(lang, "hero_kicker")}</p>
                <h1 className="mt-4 text-4xl font-semibold leading-none tracking-[-0.05em] sm:text-6xl lg:text-[5rem]">
                  {t(lang, "hero_title")}
                  <span className="block text-[var(--site-gold)]">{t(lang, "hero_subtitle")}</span>
                </h1>
                <p className="mt-6 max-w-xl text-base leading-7 text-white/72 sm:text-lg">{t(lang, "hero_lead")}</p>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={telHref}
                  className="inline-flex rounded-full bg-[var(--site-red)] px-5 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
                >
                  {t(lang, "cta_call")}
                </a>
                <a
                  href={DIRECTIONS_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#171412] transition-transform hover:-translate-y-0.5"
                >
                  {t(lang, "cta_route")}
                </a>
              </div>

              <div className="mt-8 grid gap-3 text-sm text-white/78">
                <div className="flex items-start gap-3">
                  <ShieldBadgeIcon className="mt-0.5 h-5 w-5 text-[var(--site-gold)]" />
                  <div>
                    <div className="text-white">{t(lang, "address")}</div>
                    <div className="text-white/70">{ADDRESS}</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <ShieldBadgeIcon className="mt-0.5 h-5 w-5 text-[var(--site-gold)]" />
                  <div>
                    <div className="text-white">{t(lang, "phone")}</div>
                    <a className="text-white/70 hover:text-white" href={telHref}>
                      {PHONE}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <ShieldBadgeIcon className="mt-0.5 h-5 w-5 text-[var(--site-gold)]" />
                  <div>
                    <div className="text-white">{t(lang, "hours")}</div>
                    <div className="text-white/70">{t(lang, "hours_value")}</div>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-2">
                {brands.map((b) => (
                  <span
                    key={b}
                    className="rounded-full border border-white/10 bg-white/6 px-4 py-2 text-xs font-semibold text-white/85"
                  >
                    {b}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="grid gap-5">
            <div className="site-card overflow-hidden bg-[linear-gradient(180deg,#ffffff_0%,#f4ede4_100%)] p-5 sm:p-6">
              <p className="text-xs uppercase tracking-[0.28em] text-[var(--site-red)]">{t(lang, "services_title")}</p>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">{t(lang, "services_lead")}</p>
              <div className="mt-6 grid gap-3">
                {services.slice(0, 4).map((s) => (
                  <div
                    key={s.badge}
                    className="flex items-center justify-between rounded-[26px] border border-[var(--site-outline)] bg-white px-5 py-4"
                  >
                    <div className="text-sm font-semibold">{lang === "de" ? s.de : s.en}</div>
                    <div className="text-sm font-semibold text-[var(--site-red)]">{s.badge}</div>
                  </div>
                ))}
              </div>
              <div className="mt-6 flex gap-3">
                <a
                  href="#services"
                  className="inline-flex rounded-full bg-[var(--site-red)] px-5 py-3 text-sm font-semibold text-white"
                >
                  {t(lang, "nav_services")}
                </a>
                <a
                  href={DIRECTIONS_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex rounded-full bg-[#171412] px-5 py-3 text-sm font-semibold text-white"
                >
                  {t(lang, "cta_route")}
                </a>
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2" id="benefits">
              <div className="site-card bg-[#bc2d23] p-6 text-white">
                <p className="text-xs uppercase tracking-[0.28em] text-white/70">{t(lang, "benefits_title")}</p>
                <p className="mt-4 text-2xl font-semibold tracking-[-0.04em]">{t(lang, "benefits_lead")}</p>
              </div>
              <div className="site-card p-6">
                <p className="text-xs uppercase tracking-[0.28em] text-[var(--site-red)]">{t(lang, "hours")}</p>
                <p className="mt-4 text-2xl font-semibold tracking-[-0.04em]">{t(lang, "hours_value")}</p>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{ADDRESS}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="site-shell mt-18">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="site-eyebrow">{t(lang, "services_title")}</p>
            <h2 className="site-section-title mt-3">{t(lang, "services_title")}</h2>
          </div>
          <p className="max-w-md text-sm leading-6 text-muted-foreground">{t(lang, "services_lead")}</p>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => (
            <article
              key={service.badge}
              className="site-card group flex min-h-[220px] flex-col justify-between p-6 transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">{t(lang, "services_title")}</span>
                <span className="text-sm font-semibold text-[var(--site-red)]">{service.badge}</span>
              </div>
              <div>
                <h3 className="mt-8 text-2xl font-semibold tracking-[-0.04em] text-foreground">{lang === "de" ? service.de : service.en}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{t(lang, "services_lead")}</p>
              </div>
              <div className="mt-8 flex items-center justify-between border-t border-[var(--site-outline)] pt-5 text-sm font-medium">
                <span>Details</span>
                <RouteFlagIcon className="h-5 w-5 text-[var(--site-red)] transition-transform group-hover:translate-x-1" />
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="reviews" className="site-shell mt-18">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="site-eyebrow">{t(lang, "reviews_title")}</p>
            <h2 className="site-section-title mt-3">{t(lang, "reviews_title")}</h2>
          </div>
          <p className="max-w-md text-sm leading-6 text-muted-foreground">{t(lang, "reviews_lead")}</p>
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {[0, 1, 2].map((i) => (
            <article key={i} className="site-card p-6 sm:p-7">
              <StarRowIcon className="h-4 w-[72px] text-[var(--site-red)]" />
              <p className="mt-5 text-base leading-7 text-foreground">{t(lang, "rating")}</p>
              <div className="mt-8 border-t border-[var(--site-outline)] pt-5">
                <a className="text-sm font-semibold text-[var(--site-red)]" href={MAPS_URL} target="_blank" rel="noreferrer">
                  {lang === "de" ? "Bewertungen ansehen" : "See reviews"}
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="site-shell mt-18">
        <div className="grid gap-5 lg:grid-cols-[0.82fr_1.18fr]">
          <div className="rounded-[36px] bg-[var(--site-red)] p-7 text-white sm:p-9">
            <p className="text-xs uppercase tracking-[0.28em] text-white/72">{t(lang, "contact_title")}</p>
            <h2 className="mt-4 text-4xl font-semibold leading-none tracking-[-0.05em]">{t(lang, "contact_title")}</h2>
            <div className="mt-8 space-y-4 text-sm text-white/88">
              <p>{ADDRESS}</p>
              <p>
                <a className="underline" href={telHref}>
                  {PHONE}
                </a>
              </p>
              <p>
                {t(lang, "hours")}: {t(lang, "hours_value")}
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={telHref} className="inline-flex rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#171412]">
                {t(lang, "cta_call")}
              </a>
              <a href={DIRECTIONS_URL} target="_blank" rel="noreferrer" className="inline-flex rounded-full bg-[#171412] px-5 py-3 text-sm font-semibold text-white">
                {t(lang, "cta_route")}
              </a>
            </div>
          </div>

          <div className="site-card overflow-hidden">
            <div className="grid min-h-[420px] lg:grid-cols-[0.7fr_1.3fr]">
              <div className="flex flex-col justify-between bg-[#171412] p-6 text-white sm:p-7">
                <div>
                  <p className="text-xs uppercase tracking-[0.28em] text-white/52">Google Maps</p>
                  <h3 className="mt-4 text-3xl font-semibold tracking-[-0.04em]">{lang === "de" ? "Einfach zu finden" : "Easy to find"}</h3>
                  <p className="mt-4 text-sm leading-6 text-white/68">{ADDRESS}</p>
                </div>
                <a href={DIRECTIONS_URL} target="_blank" rel="noreferrer" className="inline-flex w-fit rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#171412] transition-transform hover:-translate-y-0.5">
                  {t(lang, "cta_route")}
                </a>
              </div>

              <div className="relative overflow-hidden bg-[linear-gradient(135deg,#f1e6d6_0%,#fff_100%)] p-6 sm:p-7">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(188,45,35,0.18),transparent_22%),radial-gradient(circle_at_76%_34%,rgba(0,0,0,0.06),transparent_18%),linear-gradient(transparent_95%,rgba(0,0,0,0.04)_95%),linear-gradient(90deg,transparent_95%,rgba(0,0,0,0.04)_95%)] bg-[length:auto,auto,56px_56px,56px_56px]" />
                <div className="relative h-full min-h-[280px] rounded-[28px] border border-white/60 bg-white/72 p-5 shadow-[0_18px_50px_rgba(23,20,18,0.08)] backdrop-blur">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs uppercase tracking-[0.28em] text-[var(--site-red)]">{t(lang, "hero_title")}</p>
                      <p className="mt-2 text-lg font-semibold">Frankfurt am Main</p>
                    </div>
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[var(--site-red)] text-white">
                      <RouteFlagIcon className="h-6 w-6" />
                    </div>
                  </div>

                  <div className="mt-8 space-y-4">
                    {[t(lang, "phone"), t(lang, "address"), t(lang, "hours")].map((item) => (
                      <div key={item} className="rounded-2xl border border-[var(--site-outline)] bg-white/80 px-4 py-3 text-sm text-[#403830]">
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="site-shell mt-14 border-t border-[var(--site-outline)] py-10 text-sm text-muted-foreground">
        {t(lang, "footer_note")} •{" "}
        <a className="text-[var(--site-red)]" href={MAPS_URL} target="_blank" rel="noreferrer">
          Google Maps
        </a>
      </footer>
    </main>
  );
}
