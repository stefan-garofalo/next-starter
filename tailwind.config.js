/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      spacing: {
        '34': '8.5rem',
      },
    },
  },
  corePlugins: {
    container: false,
  },
  plugins: [
    require('tailwindcss-typography-shorthand'),
  ],
}
