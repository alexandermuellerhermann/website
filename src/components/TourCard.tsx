import Image from "next/image";
import { mailtoLink } from "@/lib/contact";

type Props = {
  title: string;
  duration: string;
  description: string;
  image: string;
  durationLabel: string;
  inquireLabel: string;
  inquireSubject: string;
  index: number;
};

export function TourCard({
  title,
  duration,
  description,
  image,
  durationLabel,
  inquireLabel,
  inquireSubject,
  index,
}: Props) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl bg-cream-warm/60 ring-1 ring-navy/5 transition hover:ring-gold/40">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          className="object-cover transition duration-700 group-hover:scale-[1.04]"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-navy-deep/45 via-transparent to-transparent"
          aria-hidden
        />
        <span
          className="absolute left-4 top-4 rounded-full bg-cream/90 px-3 py-1 font-serif text-sm text-navy"
          aria-hidden
        >
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-7">
        <h3 className="font-serif text-2xl text-navy">{title}</h3>
        <p className="mt-2 text-xs uppercase tracking-[0.18em] text-gold">
          {durationLabel} · {duration}
        </p>
        <p className="mt-4 flex-1 text-[15px] leading-relaxed text-navy/75">
          {description}
        </p>

        <a
          href={mailtoLink(inquireSubject)}
          className="mt-6 inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.18em] text-navy transition hover:text-gold"
        >
          {inquireLabel}
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            aria-hidden
            className="transition group-hover:translate-x-1"
          >
            <path
              d="M3 9h12M11 5l4 4-4 4"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </div>
    </article>
  );
}
