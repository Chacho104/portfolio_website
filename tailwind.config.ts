import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)"],
        mono: ["var(--font-geist-mono)"],
      },
      colors: {
        background: "#2d2f3a",
        "container-bg": "#1A1E24",
        "card-bg": "#2d343f",
        headings: "#F5F6F7",
        par: "#d1d5db",
        links: "#d1d5db",
        "btn-bg": "#0760E5",
      },
    },
  },
  plugins: [],
} satisfies Config;
