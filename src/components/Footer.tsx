import { useTranslations } from "next-intl";
import { ParthenonMark } from "@/components/ui/ParthenonMark";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { CONTACT } from "@/lib/contact";

export function Footer() {
  const t = useTranslations("footer");
  const tNav = useTranslations("nav");
  const tHero = useTranslations("hero");
  const year = new Date().getFullYear();

  const sections = [
    { id: "about", label: tNav("about") },
    { id: "tours", label: tNav("tours") },
    { id: "languages", label: tNav("languages") },
    { id: "contact", label: tNav("contact") },
  ];

  return (
    <footer className="bg-navy-deep text-cream">
      <div className="container-page py-14">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div>
            <div className="flex items-center gap-3">
              <ParthenonMark className="text-gold" size={36} />
              <div className="flex flex-col leading-tight">
                <span className="font-serif text-lg text-cream">
                  {CONTACT.fullName}
                </span>
                <span className="eyebrow text-[9px] text-gold">
                  {tHero("location")}
                </span>
              </div>
            </div>
            <p className="mt-4 max-w-sm text-sm text-cream/70">
              {t("tagline")}
            </p>
          </div>

          <nav aria-label="Footer">
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {sections.map((s) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    className="text-xs uppercase tracking-[0.18em] text-cream/70 transition hover:text-gold"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <LanguageSwitcher variant="footer" />
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-cream/10 pt-6 text-xs text-cream/50 md:flex-row md:items-center md:justify-between">
          <p>
            © {year} {CONTACT.fullName}. {t("rights")}
          </p>
        </div>
      </div>
    </footer>
  );
}
