import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

export default function NotFound() {
  const t = useTranslations("nav");

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-cream px-6 text-center">
      <p className="eyebrow">404</p>
      <h1 className="mt-4 font-serif text-5xl text-navy">Not found</h1>
      <Link
        href="/"
        className="btn-secondary mt-10"
        aria-label={t("about")}
      >
        ←
      </Link>
    </main>
  );
}
