import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '475px',
        '3xl': '1600px',
      },
      colors: {
        brand: {
          900: "#0B2239",
          700: "#123A5A",
          500: "#15B887",
          400: "#2FD3A1",
          300: "#9AE6C9",
        },
      },
      borderRadius: {
        xs: "6px",
        sm: "10px",
        md: "14px",
        lg: "18px",
      },
      boxShadow: {
        sm: "0 2px 8px rgba(14,17,22,0.06)",
        md: "0 8px 24px rgba(14,17,22,0.08)",
        lg: "0 16px 40px rgba(14,17,22,0.10)",
      },
      container: {
        center: true,
        screens: { '2xl': '1440px' },
        padding: {
          DEFAULT: '1rem',
          md: '1.5rem',
          lg: '2rem',
        },
      },
      fontFamily: {
        heading: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
