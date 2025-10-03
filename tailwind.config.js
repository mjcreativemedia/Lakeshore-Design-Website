/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html", "./public/**/*.js"],
  theme: {
    extend: {
      colors: {
        snow: "#FCFCFC",
        mist: "#EEF0F4",
        hairline: "#E6EAF1",
        "deep-lake": "#3552A3",
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'Apple Color Emoji', 'Segoe UI Emoji', 'Noto Color Emoji'],
        tight: ['Inter Tight', 'Inter', 'ui-sans-serif', 'system-ui'],
      },
      boxShadow: {
        card: "0 1px 1px rgba(0,0,0,0.03), 0 2px 6px rgba(0,0,0,0.04)",
      },
      maxWidth: {
        prose: "68ch",
      }
    },
  },
  plugins: [],
}
