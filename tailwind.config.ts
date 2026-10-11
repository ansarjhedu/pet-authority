import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

/**
 * Page shell: centered max-w-7xl (80rem) with responsive horizontal padding.
 * Long-form copy should use max-w-reading (70ch, inside the 65–75 character range).
 */
const containerPreset = {
  maxWidth: "80rem",
  padding: {
    DEFAULT: "1rem",
    sm: "1.5rem",
    lg: "2rem",
  },
} as const;

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        "brand-primary": {
          DEFAULT: "#0F5132",
          50: "#F0FDF4",
          100: "#DCFCE7",
          200: "#BBF7D0",
          300: "#86EFAC",
          400: "#34D399",
          500: "#059669",
          600: "#047857",
          700: "#0F5132",
          800: "#0A3A24",
          900: "#052E1C",
          950: "#022C16",
        },
        "brand-accent": {
          DEFAULT: "#C2410C",
          50: "#FFF7ED",
          100: "#FFEDD5",
          200: "#FED7AA",
          300: "#FDBA74",
          400: "#FB923C",
          500: "#D97706",
          600: "#C2410C",
          700: "#9A3412",
          800: "#7C2D12",
          900: "#431407",
        },
        "brand-surface": {
          DEFAULT: "#FAF9F6",
          muted: "#F8FAFC",
          warm: "#F3EFE7",
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
        },
      });
    }),
  ],
};

export default config;
