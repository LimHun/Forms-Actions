import type { Config } from "tailwindcss"

const config: Config = {
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
      },
      keyframes: {
        "morphing-gradient": {
          "0%": { "background-position": "0% 50%" },
          "25%": { "background-position": "50% 100%" },
          "50%": { "background-position": "100% 50%" },
          "75%": { "background-position": "50% 0%" },
          "100%": { "background-position": "0% 50%" },
        },
      },
      animation: {
        "morphing-gradient": "morphing-gradient 15s ease infinite",
      },
      backgroundSize: {
        "400%": "400% 400%",
      },
    },
  },
  plugins: [],
}
export default config
