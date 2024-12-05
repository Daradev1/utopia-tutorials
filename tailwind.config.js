/** @type {import('tailwindcss').Config} */
export default{
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryPurple: '#6A0DAD', // Main purple
        darkPurple: '#4B0082', // Darker purple for hover states and emphasis
        backgroundWhite: '#F5F5F5', // Soft white for the background
        accentGray: '#E0E0E0', // Neutral gray for borders, cards
        textPrimary: '#2E2E2E', // Deep gray for main text
        textSecondary: '#595959', // Softer gray for secondary text
        textLight: '#FFFFFF', // White for text on purple buttons or dark backgrounds
      },
    },
  },
  plugins: [],
};
