/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Technor-Regular',
          'sans-serif',
        ],
        'sans-light': [
          'Technor-Light',
          'sans-serif',
        ],
        'sans-medium': [
          'Technor-Medium',
          'sans-serif',
        ],
        'sans-extralight': [
          'Technor-Extralight',
          'sans-serif',
        ],
        'technor': ["var(--font-technor)"],
      },
    },
  },
  plugins: [],
}