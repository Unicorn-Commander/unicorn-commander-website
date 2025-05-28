/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'unicorn-purple': '#b66eff',
        'unicorn-blue': '#00d4ff',
      },
    },
  },
  plugins: [],
}
