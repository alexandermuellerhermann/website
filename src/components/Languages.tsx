import { useTranslations } from "next-intl";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { FadeUp } from "@/components/motion/FadeUp";

const LANG_KEYS = ["de", "en", "el"] as const;

const LANG_GLYPHS: Record<(typeof LANG_KEYS)[number], string> = {
  de: "DE",
  en: "EN",
  el: "EΛ",
};

export function Languages() {
  const t = useTranslations("languages");

  return (
    <section
      id="languages"
      className="relative bg-cream py-24 md:py-32"
      aria-labelledby="languages-heading"
    >
      <div className="container-page">
        <FadeUp className="max-w-2xl">
          <SectionEyebrow>{t("eyebrow")}</SectionEyebrow>
          <h2
            id="languages-heading"
            className="mt-6 font-serif text-4xl leading-tight text-navy text-balance md:text-5xl"
          >
            {t("heading")}
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-navy/75">
            {t("subheading")}
          </p>
        </FadeUp>

        <ul className="mt-14 grid gap-6 md:grid-cols-3">
          {LANG_KEYS.map((key, i) => (
            <FadeUp key={key} delay={i * 0.08} as="li">
              <div className="relative flex h-full flex-col gap-4 rounded-2xl border border-gold/30 bg-cream-warm/40 p-8 transition hover:border-gold/70">
                <div className="flex items-center justify-between">
                  <span
                    aria-hidden
                    className="font-serif text-5xl leading-none text-gold"
                  >
                    {LANG_GLYPHS[key]}
                  </span>
                  <span className="eyebrow">{t(`items.${key}.level`)}</span>
                </div>
                <h3 className="font-serif text-3xl text-navy">
                  {t(`items.${key}.name`)}
                </h3>
                <p className="text-navy/75">{t(`items.${key}.note`)}</p>
              </div>
            </FadeUp>
          ))}
        </ul>
      </div>
    </section>
  );
}
