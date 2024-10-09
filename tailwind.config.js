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
        "close": "url('../imgs/icons/close.png')"
      },

    },
  },
  plugins: [],
}

