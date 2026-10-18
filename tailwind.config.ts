import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

/**
 * Page shell: centered max-w-[100rem] with responsive horizontal padding.
 * Long-form copy should use max-w-reading (70ch, inside the 65–75 character range).
 */
const containerPreset = {
  maxWidth: "100rem",
  padding: {
    DEFAULT: "1rem",
    sm: "1.5rem",
    lg: "2rem",
    xl: "2.5rem",
  },
} as const;

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        "brand-primary": {
          DEFAULT: "#12456C",
          50: "#F2F8FB",
          100: "#E3F1F7",
          200: "#C5E2EF",
          300: "#96CCE2",
          400: "#5AADD0",
          500: "#2E8BB8",
          600: "#1A6A96",
          700: "#0E3A58",
          800: "#0A2E48",
          900: "#082743",
          950: "#051828",
        },
        "brand-accent": {
          DEFAULT: "#1AA2A0",
          50: "#E7F7F6",
          100: "#CDEEEC",
          200: "#A3E0DB",
          300: "#6CCCC6",
          400: "#33B3AD",
          500: "#1AA2A0",
          600: "#128E8B",
          700: "#0C5E5C",
          800: "#0E7A74",
          900: "#0A5C58",
        },
        "brand-surface": {
          DEFAULT: "#F4F9FB",
          muted: "#EAF3F7",
          warm: "#E4F1F4",
        },
        "triage-green": {
          DEFAULT: "#047857",
          surface: "#ECFDF5",
          foreground: "#064E3B",
        },
        "triage-yellow": {
          DEFAULT: "#D97706",
          surface: "#FFFBEB",
          foreground: "#92400E",
        },
        "triage-red": {
          DEFAULT: "#DC2626",
          surface: "#FEF2F2",
          foreground: "#991B1B",
        },
      },
      fontSize: {
        body: ["1.125rem", { lineHeight: "1.75" }],
      },
      lineHeight: {
        relaxed: "1.75",
      },
      maxWidth: {
        reading: "70ch",
      },
    },
  },
  plugins: [
    plugin(({ addBase }) => {
      addBase({
        ":root": {
          "--container-max-width": containerPreset.maxWidth,
          "--container-padding": containerPreset.padding.DEFAULT,
          "--container-padding-sm": containerPreset.padding.sm,
          "--container-padding-lg": containerPreset.padding.lg,
          "--container-padding-xl": containerPreset.padding.xl,
        },
      });
    }),
  ],
};

export default config;
