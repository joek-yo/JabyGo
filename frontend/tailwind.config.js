/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#007BFF',
        secondary: '#28A745',
        accent: '#FFC107',
        neutral: '#F8F9FA',
        dark: '#343A40',
      },
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        body: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
