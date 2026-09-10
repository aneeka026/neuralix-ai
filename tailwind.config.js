/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          0: '#ffffff',
          900: '#0f0f17',
          950: '#07070b',
        },
        mist: {
          100: '#f1f1f6',
          200: '#d6d6e2',
          300: '#a9a9bd',
          400: '#82829a',
          500: '#63637a',
          600: '#484858',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 60px rgba(124, 92, 255, 0.25)',
      },
    },
  },
  plugins: [],
}
