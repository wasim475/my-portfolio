/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        blink: {
          "0%, 50%": { borderColor: "black" },
          "100%": { borderColor: "transparent" },
        },
      },
      animation: {
        blink: "blink 0.8s step-end infinite", 
      },
    },
  },
  plugins: [require('daisyui'),],
}

