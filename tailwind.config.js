/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "background-base": "#222C33",
        "background-panel": "#202C33",
        "background-surface": "#222E35",
        "Background-base2": "#0B141A",

        "text-primary": "#ffffff",
        "text-secondary": "#9ca3af",
        "text-tertiary": "#d1d5db",

        "brand-primary": "#005C4B",
        "brand-accent": "#00A884",
      },
    },
  },
  plugins: [],
};
