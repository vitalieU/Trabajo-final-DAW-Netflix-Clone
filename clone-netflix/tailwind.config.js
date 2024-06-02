/** @type {import('tailwindcss').Config} */
import tailwindScrollbar from 'tailwind-scrollbar';
import tailwindScrollbarHide from 'tailwind-scrollbar-hide'
import taildwindcssTextshadow from 'tailwindcss-textshadow'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {},
  },
  plugins: [

    tailwindScrollbar,
    tailwindScrollbarHide,
    taildwindcssTextshadow,
  ],
}

