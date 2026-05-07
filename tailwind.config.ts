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
        surface: {
          DEFAULT: "#07090f",
          elevated: "#0c101a",
          glass: "rgba(255,255,255,0.04)",
        },
        accent: {
          blue: "#38bdf8",
          violet: "#a78bfa",
          cyan: "#22d3ee",
          /** Picks up yellow from brand mascot without overwhelming UI */
          amber: "#fbbf24",
          gold: "#eab308",
        },
      },
      fontFamily: {
        sans: ["var(--font-dm)", "system-ui", "sans-serif"],
        display: ["var(--font-outfit)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "mesh-gradient":
          "radial-gradient(at 40% 18%, rgba(56,189,248,0.2) 0px, transparent 52%), radial-gradient(at 82% 8%, rgba(167,139,250,0.16) 0px, transparent 46%), radial-gradient(at 8% 55%, rgba(34,211,238,0.11) 0px, transparent 42%), radial-gradient(at 18% 92%, rgba(251,191,36,0.09) 0px, transparent 38%), radial-gradient(at 78% 78%, rgba(56,189,248,0.09) 0px, transparent 46%)",
        "hero-glow":
          "conic-gradient(from 210deg at 50% 50%, rgba(56,189,248,0.34), rgba(251,191,36,0.12), rgba(167,139,250,0.26), rgba(34,211,238,0.22), rgba(56,189,248,0.34))",
      },
      animation: {
        "pulse-slow": "pulse-slow 8s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        "pulse-slow": {
          "0%, 100%": { opacity: "0.5", transform: "scale(1)" },
          "50%": { opacity: "0.85", transform: "scale(1.05)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
      },
      boxShadow: {
        glow: "0 0 60px -12px rgba(56,189,248,0.45)",
        "glow-lg": "0 0 100px -20px rgba(167,139,250,0.35)",
      },
    },
  },
  plugins: [],
};

export default config;
