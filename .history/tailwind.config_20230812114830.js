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
        teal:" #20c997", 
        primaryBase: "#00715d",
        primaryDark: "#283734",
        primaryText: "#6f7775;",
        redDark: "#ff2303", 
        redLight: "#FF6C08",
        orangeDefault: "#f74c25",
        yellowColor: "#fbd45a",
        borderColor: "#f9f4e8",
        darkBlue: "#0e2258"
      },
      width: {
        '90p': '90%',
      },
      screens: {
        'sm': '576px',
        'md': '768px',
        'lg': '992px',
        'xl': '1200px',
        '2xl': '1400px',
      },
      maxWidth: {
        "440": "440px",
        '540': '540px',
        '720': '720px',
        '960': '960px',
        '1140': '1140px',
        '1320': '1320px',
      },
      backgroundImage: {
        'grad': 'linear-gradient(90deg, rgb(251, 212, 90) 0%, rgb(0, 113, 93) 100%)',
        'background': 'linear-gradient(90deg, rgb(251, 212, 90) 0%, rgb(0, 113, 93) 100%)',
        // 'overlay': 'linear-gradient(90deg, #000, transparent)',
      },

      animation: {
        'spin-slow': 'spin 8s linear infinite',
      },
      boxShadow: {
        'custom': '0px 0px 30px 0px rgba(0, 0, 0, 0.05)',
      },
    },
  },
  plugins: [],
}
