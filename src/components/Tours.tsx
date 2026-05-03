import { useTranslations } from "next-intl";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { TourCard } from "@/components/TourCard";
import { FadeUp } from "@/components/motion/FadeUp";

const TOUR_KEYS = [
  "acropolis",
  "museum",
  "agora",
  "delphi",
  "sounion",
  "custom",
] as const;

const TOUR_IMAGES: Record<(typeof TOUR_KEYS)[number], string> = {
  acropolis: "/images/tours/acropolis.png",
  museum: "/images/tours/museum.png",
  agora: "/images/tours/agora.png",
  delphi: "/images/tours/delphi.png",
  sounion: "/images/tours/sounion.png",
  custom: "/images/tours/custom.png",
};

export function Tours() {
  const t = useTranslations("tours");

  return (
    <section
      id="tours"
      className="relative bg-cream-warm py-24 md:py-32"
      aria-labelledby="tours-heading"
    >
      <div className="container-page">
        <FadeUp className="max-w-2xl">
          <SectionEyebrow>{t("eyebrow")}</SectionEyebrow>
          <h2
            id="tours-heading"
            className="mt-6 font-serif text-4xl leading-tight text-navy text-balance md:text-5xl"
          >
            {t("heading")}
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-navy/75">
            {t("subheading")}
          </p>
        </FadeUp>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {TOUR_KEYS.map((key, i) => {
            const title = t(`items.${key}.title`);
            return (
              <FadeUp key={key} delay={i * 0.05}>
                <TourCard
                  index={i}
                  title={title}
                  duration={t(`items.${key}.duration`)}
                  description={t(`items.${key}.description`)}
                  image={TOUR_IMAGES[key]}
                  durationLabel={t("duration")}
                  inquireLabel={t("inquire")}
                  inquireSubject={t("inquireSubject", { tour: title })}
                />
              </FadeUp>
            );
          })}
        </div>
      </div>
    </section>
  );
}
