/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {

    screens: {
      "744": "744px",
      "1000": "1000px",
      "1600": "1600px",
    },

    extend: {

      colors: {
        "yellow-gym": "#FAFF00",
        "cards-color": "#222222",
      },

      fontFamily: {
        "bruno": '"Bruno Ace SC", sans-serif',
        "mos-bold": '"Made Outer Sans Bold", sans-serif',
        "mos-light": '"Made Outer Sans Light", sans-serif',
        "mos-thin": '"Made Outer Sans Thin", sans-serif',
      },

      backgroundImage: {
        "menu": "url('../imgs/icons/menu.png')",
        "close": "url('../imgs/icons/close.png')",
        "home-400": "linear-gradient(to top, #00000000 90%, #000000 100%), linear-gradient(to bottom, #00000000 0%, #000000 90%), url('../imgs/photos/home-400.jpg')",
        "home-800": "url('../imgs/photos/home-800.jpg')",
        "home-1000": "url('../imgs/photos/home-1000.jpg')",
        "home-1600": "url('../imgs/photos/home-1600.jpg')",
      },

    },
  },
  plugins: [],
}

