/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './screens/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
    './App.tsx',
  ],
  theme: {
    extend: {
      colors: {
        mainBg: '#1b1b1b',
        lightBg: '#28282B',
        mainlightBg: '#ffffff',
        sidelightBg: '#e2e8f0',
      },
      fontFamily: {
        poppins: ['./assets/Poppins'],
      },
    },
  },
  plugins: [],
};
