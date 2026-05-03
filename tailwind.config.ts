import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/**/*.{ts,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#1B2A47",
          deep: "#0E1A2E",
          soft: "#2A3A5A",
        },
        gold: {
          DEFAULT: "#C4A263",
          soft: "#D4B87D",
          dark: "#A88748",
        },
        cream: {
          DEFAULT: "#F5F1EA",
          warm: "#EBE4D6",
        },
      },
      fontFamily: {
        serif: ["var(--font-display)", "Source Serif 4", "Georgia", "serif"],
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        eyebrow: "0.28em",
      },
      maxWidth: {
        prose: "62ch",
      },
      animation: {
        "fade-up": "fadeUp 0.7s ease-out forwards",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
