/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'banner-one': 'url("/bg.jpg")',
        'banner-two': 'url("/bg2.jpg")',
        'estatistica': 'url("/estatistica.jpg")',
        'fixed': 'url("/bgfixed.jpg")',
      },
    },
  },
  plugins: [],
}
