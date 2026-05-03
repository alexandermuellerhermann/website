import { ImageResponse } from "next/og";
import { getTranslations } from "next-intl/server";
import { routing, type Locale } from "@/i18n/routing";

export const alt = "Alexander Müller-Hermann — Licensed Tour Guide";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

const NAVY = "#1B2A47";
const NAVY_DEEP = "#0E1A2E";
const GOLD = "#C4A263";
const CREAM = "#F5F1EA";

export default async function OpenGraphImage({
  params,
}: {
  params: { locale: string };
}) {
  const { locale } = params;
  const safeLocale = (routing.locales as readonly string[]).includes(locale)
    ? (locale as Locale)
    : routing.defaultLocale;

  const tHero = await getTranslations({ locale: safeLocale, namespace: "hero" });

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          backgroundColor: CREAM,
          padding: "80px 96px",
          position: "relative",
          fontFamily: "serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 8,
            backgroundColor: GOLD,
          }}
        />

        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <svg width="72" height="48" viewBox="0 0 60 40" fill="none">
            <path
              d="M30 2 L4 14 L56 14 Z"
              stroke={GOLD}
              strokeWidth="1.6"
              strokeLinejoin="round"
            />
            <rect x="6" y="14" width="48" height="3" fill={GOLD} />
            {[0, 1, 2, 3, 4, 5].map((i) => (
              <line
                key={i}
                x1={10 + i * 8}
                y1={17}
                x2={10 + i * 8}
                y2={34}
                stroke={GOLD}
                strokeWidth="1.6"
              />
            ))}
            <rect x="4" y="34" width="52" height="2.5" fill={GOLD} />
            <rect x="2" y="36.5" width="56" height="2" fill={GOLD} />
          </svg>
          <div
            style={{
              display: "flex",
              fontSize: 18,
              letterSpacing: "0.32em",
              textTransform: "uppercase",
              color: GOLD,
            }}
          >
            {tHero("eyebrow")}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: "auto",
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 88,
              lineHeight: 1.05,
              color: NAVY,
              letterSpacing: "-0.01em",
            }}
          >
            {tHero("name")}
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 16,
              marginTop: 28,
            }}
          >
            <div style={{ display: "flex", width: 48, height: 2, backgroundColor: GOLD }} />
            <div
              style={{
                display: "flex",
                fontSize: 22,
                letterSpacing: "0.28em",
                textTransform: "uppercase",
                color: NAVY_DEEP,
              }}
            >
              {tHero("location")}
            </div>
          </div>

          <div
            style={{
              display: "flex",
              fontSize: 32,
              lineHeight: 1.35,
              color: NAVY_DEEP,
              opacity: 0.78,
              marginTop: 36,
              maxWidth: 980,
            }}
          >
            {tHero("tagline")}
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
