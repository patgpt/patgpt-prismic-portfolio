/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdcx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdcx}",
    "./src/slices/**/*.{js,ts,jsx,tsx,mdcx}",
  ],

  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-dm-sans)'], 
      },
    },
  },
  plugins: [
    // add Typography plugin
    require('@tailwindcss/typography'),  


  ],
}
 