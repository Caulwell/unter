module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bodyBackground: "#fff",
        modalBackground: "rgba(0, 0, 0, 0.2)",
        uiElementBg: "rgb(32, 42, 58)",
        textDark: "rgb(32, 42, 58)",
        textLighter: "rgb(8, 145, 178)"
      },
      width: {
        "128": "48rem"
      }
    },
  },
  plugins: [],
}