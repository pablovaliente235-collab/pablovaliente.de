/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pablovaliente.de/**/*.html"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "tertiary-container": "#747474",
        "on-primary-fixed-variant": "#e2e2e2",
        "tertiary-fixed-dim": "#464747",
        "primary": "#000000",
        "on-tertiary-fixed": "#ffffff",
        "outline-variant": "#c6c6c6",
        "on-secondary-fixed": "#1b1c1c",
        "primary-container": "#3b3b3b",
        "secondary": "#5e5e5e",
        "primary-fixed-dim": "#474747",
        "on-tertiary-fixed-variant": "#e3e2e2",
        "on-secondary": "#ffffff",
        "inverse-primary": "#c6c6c6",
        "on-error-container": "#410002",
        "secondary-fixed-dim": "#acabab",
        "tertiary-fixed": "#5e5e5e",
        "surface-variant": "#e2e2e2",
        "on-tertiary-container": "#ffffff",
        "on-primary-fixed": "#ffffff",
        "on-background": "#1a1c1c",
        "on-secondary-fixed-variant": "#3b3b3b",
        "outline": "#777777",
        "on-surface-variant": "#474747",
        "surface-container-highest": "#e2e2e2",
        "on-primary": "#e2e2e2",
        "surface-container-low": "#f3f3f4",
        "secondary-container": "#d6d4d3",
        "primary-fixed": "#5e5e5e",
        "background": "#f9f9f9",
        "surface-bright": "#f9f9f9",
        "on-secondary-container": "#1b1c1c",
        "surface-container": "#eeeeee",
        "on-tertiary": "#e3e2e2",
        "on-surface": "#1a1c1c",
        "surface-dim": "#dadada",
        "on-error": "#ffffff",
        "error-container": "#ffdad6",
        "surface": "#f9f9f9",
        "surface-container-high": "#e8e8e8",
        "inverse-on-surface": "#f0f1f1",
        "error": "#ba1a1a",
        "tertiary": "#3b3b3c",
        "surface-container-lowest": "#ffffff",
        "on-primary-container": "#ffffff",
        "surface-tint": "#5e5e5e",
        "secondary-fixed": "#c8c6c6",
        "inverse-surface": "#2f3131"
      },
      fontFamily: {
        "headline": ["Syne", "sans-serif"],
        "body": ["Manrope", "sans-serif"],
        "label": ["Manrope", "sans-serif"]
      },
      borderRadius: {
        "DEFAULT": "0.125rem",
        "lg": "0.25rem",
        "xl": "0.5rem",
        "full": "0.75rem"
      }
    }
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/container-queries")
  ]
}
