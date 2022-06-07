module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bodyBackground: "#fff",
        modalBg: "rgba(0,0,0,0.6)",
        primaryBg: "#64748b",
        primary2Bg: "#64748b",
        primaryMuted: "#e2e8f0",
      },
      width: {
        "128": "48rem"
      }
    },
  },
  plugins: [],
}