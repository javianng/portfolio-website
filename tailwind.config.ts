import type { Config } from "tailwindcss";

const config = {
  darkMode: ["selector"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        brand: {
          50: "#E7F6F2",
          100: "#A5C9CA",
          200: "#395B64",
          300: "#2C3333",
        },
        LFG: {
          50: "#E50171",
        },
        ABYA: {
          50: "#F6F2AE",
        },
        ComputingClub: {
          0: "#FFFFFF",
          50: "#ADABD5",
          100: "#2A378A",
        },
        AStar: {
          50: "#102F82",
        },
        Parametriks: {
          50: "#201E28",
        },
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
