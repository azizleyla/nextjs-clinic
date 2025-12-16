/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
      },
    },
    extend: {
      colors: {
        primary: '#0046c0',
        secondary: '#344c5d',
        primary_bold: "#4a6f8a",
        accent: '#f0ad4e',
      },
      screens: {
        'sm-custom': '576px',
      },
      boxShadow: {
        'custom-gray': '0 0 25px 0 hsla(0,0%,87%,0.749)',
      },
      fontFamily: {
        base: ['Inter', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      },
      fontSize: {
        xs: '0.75rem',
        sm: '0.9rem',
        base: '1rem',
        md: '1.2rem',
        lg: "1.5rem",
        xl: '2rem',
      },
      keyframes: {
        'a-one': {
          '0%': { transform: 'translate(0)' },
          '50%': { transform: 'translate(-20px, -20px)' },
          '100%': { transform: 'translate(0)' },
        },
        'a-two': {
          '0%': { transform: 'translate(0)' },
          '50%': { transform: 'translate(20px, 20px)' },
          '100%': { transform: 'translate(0)' },
        },
        'a-seven': {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.1)' },
        },
      },
      animation: {
        'a-one': 'a-one 5s linear infinite',
        'a-two': 'a-two 5s linear infinite',
        'a-seven': 'a-seven 10s linear infinite',
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],

}