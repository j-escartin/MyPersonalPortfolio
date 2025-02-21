import type { Config } from "tailwindcss";
import tailwindScrollbarHide from "tailwind-scrollbar-hide";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        darkGrey: '#363737',
      },
    },
  },
  plugins: [
    tailwindScrollbarHide,
  ],
} satisfies Config;
