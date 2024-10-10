/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/slices/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "new-black": "#070815", // Custom color
      },
      fontFamily: {
        sans: ["var(--font-dm-sans)"], // Custom font family
      },
    },
  },
  plugins: [require("@tailwindcss/typography")], // Typography plugin
};
