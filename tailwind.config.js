/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customGreen: '#1F4B43', 
        customSkyBlue: '#EDF9F9',  
        customDeepBlue: '#002D74',  
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}