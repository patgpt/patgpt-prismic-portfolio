import { Config } from 'tailwindcss';

const config: Config = {
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
    require('@tailwindcss/typography'),  
  ],
};

export default config;