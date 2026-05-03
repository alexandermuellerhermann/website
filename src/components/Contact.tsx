import { useTranslations } from "next-intl";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { FadeUp } from "@/components/motion/FadeUp";
import { CONTACT, mailtoLink } from "@/lib/contact";

export function Contact() {
  const t = useTranslations("contact");

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-navy py-24 text-cream md:py-32"
      aria-labelledby="contact-heading"
    >
      <div className="container-page grid gap-14 md:grid-cols-[1.2fr_1fr] md:items-start md:gap-20">
        <FadeUp>
          <SectionEyebrow>
            <span className="text-gold">{t("eyebrow")}</span>
          </SectionEyebrow>
          <h2
            id="contact-heading"
            className="mt-6 font-serif text-4xl leading-tight text-cream text-balance md:text-6xl"
          >
            {t("heading")}
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-cream/80">
            {t("subheading")}
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href={mailtoLink(t("emailSubject"), t("emailBody"))}
              className="btn-gold"
            >
              {t("ctaEmail")}
            </a>
            <a
              href={`tel:${CONTACT.phoneTel}`}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-cream/30 px-7 py-3 text-sm font-medium uppercase tracking-[0.18em] text-cream transition hover:border-gold hover:text-gold focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
            >
              {t("ctaCall")}
            </a>
            <a
              href="/alexander-mueller.vcf"
              download
              className="inline-flex items-center justify-center gap-2 rounded-full border border-cream/15 px-5 py-3 text-xs font-medium uppercase tracking-[0.18em] text-cream/70 transition hover:text-cream focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
            >
              {t("ctaVcard")}
            </a>
          </div>
        </FadeUp>

        <FadeUp delay={0.1}>
          <ul className="space-y-6 border-l border-gold/40 pl-8">
            <ContactRow
              label={t("phoneLabel")}
              value={CONTACT.phone}
              href={`tel:${CONTACT.phoneTel}`}
              icon={<PhoneIcon />}
            />
            <ContactRow
              label={t("emailLabel")}
              value={CONTACT.email}
              href={mailtoLink(t("emailSubject"))}
              icon={<MailIcon />}
            />
            <ContactRow
              label={t("locationLabel")}
              value={t("location")}
              icon={<PinIcon />}
            />
          </ul>
        </FadeUp>
      </div>
    </section>
  );
}

function ContactRow({
  label,
  value,
  href,
  icon,
}: {
  label: string;
  value: string;
  href?: string;
  icon: React.ReactNode;
}) {
  const inner = (
    <>
      <span className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-gold text-navy-deep">
        {icon}
      </span>
      <span className="flex flex-col">
        <span className="eyebrow text-cream/60">{label}</span>
        <span className="mt-1 font-serif text-base text-cream [overflow-wrap:anywhere] sm:text-xl">{value}</span>
      </span>
    </>
  );

  return (
    <li>
      {href ? (
        <a
          href={href}
          className="group flex items-center gap-4 transition hover:text-gold"
        >
          {inner}
        </a>
      ) : (
        <div className="flex items-center gap-4">{inner}</div>
      )}
    </li>
  );
}

function PhoneIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
      <path
        d="M5.5 2.5h2l1 3-1.5 1a8 8 0 004 4l1-1.5 3 1v2c0 1-1 2-2 2A11 11 0 013.5 4.5c0-1 1-2 2-2z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
      <rect x="2" y="4" width="14" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.4" />
      <path d="M2.5 5l6.5 5 6.5-5" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
      <path
        d="M9 16s5-4.5 5-9a5 5 0 10-10 0c0 4.5 5 9 5 9z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <circle cx="9" cy="7" r="2" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}
