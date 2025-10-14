/** @type {import('tailwindcss').Config} */
import { theme } from './src/config/theme';
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: theme.colors.primary,
        primary_focus: theme.colors.primary_focus,
        primary_transparent: theme.colors.primary_transparent,
        secondary: theme.colors.secondary,
        detail: theme.colors.detail,
        black: theme.colors.black,
        white: theme.colors.white,
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
}