import type { Config } from "tailwindcss";

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
        fitGrey: "#F6F6F6",
        fitViolet: "#857CED",
        fitBlue: "#091B35",
        fitGreen: "#D3F076",
        fitRed: "#FD6131",
      },
    },
  },
  plugins: [],
} satisfies Config;
