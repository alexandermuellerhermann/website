"use client";

import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { Link } from "@/i18n/routing";
import { ParthenonMark } from "@/components/ui/ParthenonMark";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

export function Navbar() {
  const t = useTranslations("nav");
  const tHero = useTranslations("hero");
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const sections = [
    { id: "about", label: t("about") },
    { id: "tours", label: t("tours") },
    { id: "languages", label: t("languages") },
    { id: "contact", label: t("contact") },
  ];

  return (
    <>
      <a
        href="#main"
        className="sr-only focus-visible:not-sr-only focus-visible:fixed focus-visible:left-4 focus-visible:top-4 focus-visible:z-50 focus-visible:rounded-full focus-visible:bg-navy focus-visible:px-4 focus-visible:py-2 focus-visible:text-cream"
      >
        {t("skipToContent")}
      </a>
      <header
        className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
          scrolled || open
            ? "bg-cream/95 shadow-[0_1px_0_rgba(27,42,71,0.08)] backdrop-blur"
            : "bg-transparent"
        }`}
      >
        <div className="container-page flex h-20 items-center justify-between gap-6">
          <Link
            href="/"
            className="flex items-center gap-3 text-navy"
            onClick={() => setOpen(false)}
          >
            <ParthenonMark className="text-gold" size={36} />
            <span className="hidden sm:flex flex-col leading-none">
              <span className="font-serif text-base text-navy">Alexander M. H.</span>
              <span className="eyebrow text-[9px] text-gold">
                {tHero("location")}
              </span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8" aria-label="Primary">
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="text-sm uppercase tracking-[0.18em] text-navy/70 transition hover:text-navy"
              >
                {s.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <LanguageSwitcher />
            <button
              type="button"
              className="md:hidden rounded-full border border-navy/15 bg-cream/70 p-2 text-navy"
              aria-label={open ? t("menuClose") : t("menuOpen")}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                {open ? (
                  <path d="M5 5l10 10M15 5L5 15" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                ) : (
                  <>
                    <path d="M3 6h14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                    <path d="M3 10h14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                    <path d="M3 14h14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>

        {open && (
          <nav
            className="md:hidden border-t border-navy/10 bg-cream/95 backdrop-blur"
            aria-label="Mobile"
          >
            <div className="container-page flex flex-col py-4">
              {sections.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  onClick={() => setOpen(false)}
                  className="border-b border-navy/5 py-3 text-sm uppercase tracking-[0.18em] text-navy/80 last:border-b-0"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </nav>
        )}
      </header>
    </>
  );
}
