/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '640px',
      md: '960px',
    },
    extend: {
      spacing: {
        'header-height': 'var(--header-height)',
      },
      fontFamily: {
        fira: 'var(--font-fira-code)',
      },
      colors: {
        dark: '#282C33',
        teal: '#55B6C2',
        blue: '#62AEEF',
        stone: '#98C379',
        gray: '#ABB2BF',
        primary: '#C778DD',
        red: '#E06B74',
        orange: '#E5C07A',
      },
    },
  },
  plugins: [require('@headlessui/tailwindcss')({ prefix: 'ui' })],
}
