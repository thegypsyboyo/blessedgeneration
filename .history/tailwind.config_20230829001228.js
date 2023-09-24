/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        "man": "var(--font-man)",
        "nun": "var(--font-nun)",
        "cav": "var(--font-cav)",
      },
      colors: {
        dark: "#1b1b1b",
        light: "#f5f5f5",
        primaryText: "#6f7775;",
        redDark: "#ff2303", 
        redLight: "#FF6C08",
        orangeDefault: "#f74c25",
        yellowColor: "#ffa740",
        borderColor: "#f7f7f7",
        darkBlue: "#0e2258",
        lightBlue: "#ecf6fa"
      },
      screens: {
        'sm': '576px',
        'md': '768px',
        'lg': '992px',
        'xl': '1200px',
        '2xl': '1400px',
      },
      boxShadow: {
        'custom': '0 10px 30px 0 rgb(44 130 237 / 40%)',
      },
    },
  },
  plugins: [],
}
