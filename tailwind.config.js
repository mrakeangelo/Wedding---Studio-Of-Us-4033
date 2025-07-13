/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        canvas: '#fefcf9',
        cobalt: '#4a5d7a',
        charcoal: '#2c2c2c',
        clay: '#b8956a',
        ochre: '#d4a574',
        'cobalt-light': '#6b7c94',
        'canvas-dark': '#1a1a1a',
        'charcoal-light': '#404040',
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
        sketch: ['Caveat', 'cursive'],
      },
      animation: {
        'brush-fade': 'brushFade 0.8s ease-out forwards',
        'sketch-draw': 'sketchDraw 1.5s ease-in-out forwards',
        'paint-drip': 'paintDrip 2s ease-out forwards',
        'frame-reveal': 'frameReveal 1s ease-out forwards',
      },
      keyframes: {
        brushFade: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        sketchDraw: {
          '0%': { strokeDasharray: '0 100' },
          '100%': { strokeDasharray: '100 0' },
        },
        paintDrip: {
          '0%': { transform: 'translateY(-100%) scaleY(0)' },
          '100%': { transform: 'translateY(0) scaleY(1)' },
        },
        frameReveal: {
          '0%': { clipPath: 'inset(0 100% 0 0)' },
          '100%': { clipPath: 'inset(0 0 0 0)' },
        },
      },
    },
  },
  plugins: [],
}