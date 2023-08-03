/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        "spotify-green": "#1db954",
        "spotify-background": "#18191a",
        "spotify-card": "#232324",
      }
    },
  },
  plugins: [],
}

