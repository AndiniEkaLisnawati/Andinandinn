// eslint-disable-next-line no-undef
const flowbite = require("flowbite-react/tailwind");



/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
      flowbite.content()
  ],
  theme: {
    extend: {},
  },
  plugins: [
    // eslint-disable-next-line no-undef
   flowbite.plugin
  ],
}


