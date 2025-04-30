/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
      },
      spacing: {
        'base': 'var(--spacing-unit)',
      },
      fontFamily: {
        sans: ['var(--font-base)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

