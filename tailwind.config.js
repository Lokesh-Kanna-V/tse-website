/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
    "./node_modules/flowbite-react/**/*.js",
  ],
  safelist: [
    {
      pattern: /(from|via|to)-(amber|stone)-(100|200|300|400|500|600)/,
    },
  ],
  theme: {
    extend: {},
  },
  plugins: [require("flowbite/plugin")],
};
