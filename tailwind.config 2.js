/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: '#FBF8F1',
          dark: '#F3EEE2',
        },
        green: {
          DEFAULT: '#3D7A4A',
          light: '#5A9E68',
          lighter: '#E8F0EA',
          pale: '#F0F6F1',
          dark: '#2D5C38',
        },
        amber: {
          DEFAULT: '#E8961A',
          light: '#F5B940',
          pale: '#FEF6E4',
          dark: '#C47D0E',
        },
        charcoal: {
          DEFAULT: '#2C2C28',
          light: '#4A4A44',
        },
        stone: {
          DEFAULT: '#8A8A80',
          light: '#B5B5AA',
        },
        border: {
          DEFAULT: '#E5E0D4',
          light: '#EDE9DF',
        },
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      borderRadius: {
        'brand': '12px',
        'brand-lg': '16px',
        'brand-xl': '20px',
      },
      boxShadow: {
        'brand': '0 2px 12px rgba(44, 44, 40, 0.06)',
        'brand-lg': '0 4px 20px rgba(44, 44, 40, 0.08)',
        'green': '0 2px 8px rgba(61, 122, 74, 0.25)',
        'amber': '0 2px 8px rgba(232, 150, 26, 0.25)',
      },
    },
  },
  plugins: [],
};
