import Image from "next/image";
import { useTranslations } from "next-intl";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { FadeUp } from "@/components/motion/FadeUp";

export function About() {
  const t = useTranslations("about");
  const paragraphs = t.raw("paragraphs") as string[];

  return (
    <section
      id="about"
      className="relative bg-cream py-24 md:py-32"
      aria-labelledby="about-heading"
    >
      <div className="container-page grid items-center gap-12 md:grid-cols-[auto_1fr] md:gap-20">
        <FadeUp className="mx-auto md:mx-0">
          <div className="relative h-72 w-72 md:h-96 md:w-96">
            <div
              className="absolute inset-0 rounded-full ring-1 ring-gold/40"
              aria-hidden
            />
            <div
              className="absolute -inset-3 rounded-full border border-gold/30"
              aria-hidden
            />
            <div className="absolute inset-2 overflow-hidden rounded-full">
              <Image
                src="/images/alexander-portrait.png"
                alt={t("heading")}
                fill
                sizes="(max-width: 768px) 18rem, 24rem"
                className="object-cover"
              />
            </div>
          </div>
        </FadeUp>

        <FadeUp delay={0.1} className="max-w-2xl">
          <SectionEyebrow>{t("eyebrow")}</SectionEyebrow>
          <h2
            id="about-heading"
            className="mt-6 font-serif text-4xl leading-tight text-navy text-balance md:text-5xl"
          >
            {t("heading")}
          </h2>

          <div className="mt-8 space-y-5 text-lg leading-relaxed text-navy/80">
            {paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <ul className="mt-10 flex flex-wrap gap-3">
            <li className="credential-pill">{t("credentials.education")}</li>
            <li className="credential-pill">{t("credentials.license")}</li>
            <li className="credential-pill">{t("credentials.languages")}</li>
          </ul>
        </FadeUp>
      </div>
    </section>
  );
}
