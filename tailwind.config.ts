import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--primary)",
        redPrimary: "#ff0000",
      },
      fontFamily: {
        oswald: "var(--font-oswald)",
        assistant: "var(--font-assistant)",
      },
    },
  },
  plugins: [],
};
export default config;
