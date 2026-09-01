/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "selector",
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',

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
        // ── "Clinical Editorial" theme ───────────────────────────────────
        // The unmistakable medical-trust language of Azerbaijani clinics
        // (MediClub, Bona Dea, Central Clinic): a confident medical blue with
        // a fresh cyan-teal accent on clean, cool white — but applied over the
        // distinctive editorial layout so it reads modern, not generic.
        //
        // Legacy + semantic tokens are REDEFINED (not renamed) so every
        // existing reference across the app inherits the palette. Names like
        // `forest`/`sage`/`clay` are kept as stable aliases; their *values*
        // are now clinical (blue / soft-sky / teal).
        primary: '#0a5cc4',        // medical blue — CTAs, links, chips
        'primary-dark': '#08498f', // pressed / hover blue
        secondary: '#26374a',      // cool slate for body copy
        primary_bold: "#5b7186",   // muted slate for secondary copy
        accent: '#0fb5c9',         // fresh cyan-teal pop
        navy: '#0a2540',           // deep medical navy (footer / topbar)
        surface: '#eef4fb',        // cool light-blue section wash

        // Semantic aliases used across the editorial surfaces
        cream: '#f5f8fc',          // clean cool page canvas
        paper: '#ffffff',          // white raised cards
        ink: '#0f2438',            // deep navy headline text
        clay: '#0fb5c9',           // accent alias (cyan-teal)
        'clay-soft': '#7fd6e0',
        sand: '#dce7f3',           // cool hairline borders / soft fills
        sage: '#d3ecef',           // soft teal tint (frames / glows)
        forest: '#0a5cc4',         // primary alias (medical blue)
        moss: '#2f7fd6',           // lighter blue
      },
      screens: {
        'sm-custom': '576px',
      },
      boxShadow: {
        'custom-gray': '0 0 25px 0 hsla(0,0%,87%,0.749)',
      },
      fontFamily: {
        sans: ['var(--font-body)', 'sans-serif'],
        base: ['var(--font-body)', 'sans-serif'],
        heading: ['var(--font-heading)', 'sans-serif'],
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
        'heart-pulse': {
          '0%, 100%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.15)', opacity: '0.9' },
        },
        'ecg-line': {
          '0%': { strokeDashoffset: '250' },
          '100%': { strokeDashoffset: '0' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(28px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        'blob': {
          '0%, 100%': { borderRadius: '42% 58% 63% 37% / 42% 42% 58% 58%' },
          '50%': { borderRadius: '58% 42% 37% 63% / 58% 58% 42% 42%' },
        },
        'spin-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        'a-one': 'a-one 5s linear infinite',
        'a-two': 'a-two 5s linear infinite',
        'a-seven': 'a-seven 10s linear infinite',
        'heart-pulse': 'heart-pulse 1s ease-in-out infinite',
        'ecg-line': 'ecg-line 2s ease-in-out infinite',
        'fade-up': 'fade-up 0.9s cubic-bezier(0.16, 1, 0.3, 1) both',
        'float-slow': 'float-slow 6s ease-in-out infinite',
        'blob': 'blob 12s ease-in-out infinite',
        'spin-slow': 'spin-slow 40s linear infinite',
      },
    },
  },
  plugins: [],
}