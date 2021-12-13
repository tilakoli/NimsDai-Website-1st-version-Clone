module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./component/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          default: "#CFB173",
        },
        secBlack: {
          default: "#404040",
        },
        optWhite: {
          default: "#F8F8F8",
        },
        secWhite: {
          default: "#EAEAEA",
        },
        footerBlack: {
          default: "#262626",
        },
        test: {
          default: "#eaeaea",
        },
      },
      zIndex: {
        "-10": "-10",
      },
      spacing: {
        customspace: "77%",
        customheight: "90%",
        customheightsec: "60%",
      },
      backgroundImage: {
        hero: "url('/assets/climbing.jpg')",
        first: "url('/assets/first.jpg')",
        second: "url('/assets/second.jpeg')",
        third: "url('/assets/third.jpg')",
        mountain: "url('/assets/mountain.jpg')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
