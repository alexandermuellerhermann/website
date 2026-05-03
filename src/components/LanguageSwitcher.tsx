"use client";

import { useLocale } from "next-intl";
import { useParams } from "next/navigation";
import { usePathname, useRouter, type Locale } from "@/i18n/routing";
import { routing } from "@/i18n/routing";
import { useTransition } from "react";

const LABELS: Record<Locale, string> = {
  en: "EN",
  de: "DE",
  el: "EL",
};

const FULL: Record<Locale, string> = {
  en: "English",
  de: "Deutsch",
  el: "Ελληνικά",
};

export function LanguageSwitcher({ variant = "navbar" }: { variant?: "navbar" | "footer" }) {
  const current = useLocale() as Locale;
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();
  const [isPending, startTransition] = useTransition();

  function switchTo(locale: Locale) {
    if (locale === current) return;
    startTransition(() => {
      router.replace(
        // @ts-expect-error params type is loose; pathname is the same string for all locales
        { pathname, params },
        { locale }
      );
    });
  }

  const isFooter = variant === "footer";

  return (
    <div
      className={`inline-flex items-center gap-1 rounded-full border ${
        isFooter
          ? "self-start border-cream/20 bg-transparent"
          : "border-navy/15 bg-cream/70 backdrop-blur-sm"
      } p-1`}
      role="group"
      aria-label="Language"
    >
      {routing.locales.map((loc) => {
        const active = loc === current;
        return (
          <button
            key={loc}
            type="button"
            onClick={() => switchTo(loc)}
            disabled={isPending && active}
            aria-label={FULL[loc]}
            aria-current={active ? "true" : undefined}
            className={`min-w-[2.5rem] rounded-full px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] transition focus:outline-none focus-visible:ring-2 focus-visible:ring-gold ${
              active
                ? isFooter
                  ? "bg-gold text-navy-deep"
                  : "bg-navy text-cream"
                : isFooter
                ? "text-cream/70 hover:text-cream"
                : "text-navy/60 hover:text-navy"
            }`}
          >
            {LABELS[loc]}
          </button>
        );
      })}
    </div>
  );
}
