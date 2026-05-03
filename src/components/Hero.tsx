import Image from "next/image";
import { useTranslations } from "next-intl";
import { ParthenonMark } from "@/components/ui/ParthenonMark";
import { CONTACT, mailtoLink } from "@/lib/contact";

export function Hero() {
  const t = useTranslations("hero");
  const tContact = useTranslations("contact");

  return (
    <section
      className="relative min-h-[100svh] overflow-hidden bg-cream pt-20"
      aria-label={t("eyebrow")}
    >
      <div className="container-page relative grid items-start gap-10 py-2 md:grid-cols-[1.1fr_1fr] md:gap-12 md:py-6">
        {/* Left: text */}
        <div className="relative z-10 flex flex-col items-start md:pt-6">
          <h1 className="font-serif text-[2.5rem] leading-[1.05] text-navy md:text-[3.75rem] md:leading-[1.05] lg:text-[4.25rem]">
            {t("name")}
          </h1>

          <p className="mt-5 eyebrow flex items-center gap-3">
            <span aria-hidden className="h-px w-6 bg-gold" />
            {t("eyebrow")}
            <span aria-hidden className="h-px w-6 bg-gold" />
          </p>

          <p className="mt-8 max-w-prose text-lg leading-relaxed text-navy/80">
            {t("tagline")}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href={mailtoLink(tContact("emailSubject"), tContact("emailBody"))}
              className="btn-primary"
            >
              {t("ctaPrimary")}
            </a>
            <a href={`tel:${CONTACT.phoneTel}`} className="btn-secondary">
              {t("ctaSecondary")}
            </a>
          </div>

          <ul className="mt-10 flex flex-wrap items-center gap-3 text-xs text-navy/70">
            <li className="credential-pill">
              <span className="h-1.5 w-1.5 rounded-full bg-gold" aria-hidden />
              {t("credentials.license")}
            </li>
            <li className="credential-pill">
              <span className="h-1.5 w-1.5 rounded-full bg-gold" aria-hidden />
              {t("credentials.education")}
            </li>
            <li className="credential-pill">
              <span className="h-1.5 w-1.5 rounded-full bg-gold" aria-hidden />
              {t("credentials.languages")}
            </li>
          </ul>
        </div>

        {/* Right: Acropolis image with half-circle mask, echo of the business card */}
        <div className="relative h-[58vh] min-h-[420px] md:h-[78vh]">
          <div className="absolute inset-0 overflow-hidden rounded-l-[40vh] md:rounded-l-[50vh]">
            <Image
              src="/images/hero-acropolis.png"
              alt="The Acropolis of Athens at golden hour"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 55vw"
              className="object-cover"
            />
            <div
              className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-cream/30"
              aria-hidden
            />
          </div>

          {/* Floating column medallion, echoing the card's "EXPERIENCE HISTORY" badge */}
          <div className="absolute -left-6 top-1/2 hidden -translate-y-1/2 md:block">
            <div className="flex h-32 w-32 flex-col items-center justify-center rounded-full bg-navy text-cream shadow-2xl ring-4 ring-cream">
              <ParthenonMark className="text-gold" size={44} />
              <span className="mt-1 text-[9px] uppercase tracking-[0.22em] text-cream">
                Experience
              </span>
              <span className="text-[9px] uppercase tracking-[0.22em] text-cream/80">
                History
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
