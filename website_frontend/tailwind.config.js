module.exports = {
  content: [
    "./pages/**/*.{vue,js,ts,jsx,tsx}",
    "./components/**/*.{vue,js,ts,jsx,tsx}",
    "./layouts/**/*.{vue,js,ts,jsx,tsx}",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors: {
        bgcanvas: "#231e1f",
        headerbg: "#232021",
        footerbg: "#231e1f",
        primarytext: "#efe7dc",
        headlinetext: "#fff",
        accent: "#ff851b",
        cardbg: "#191516",
        cardhover: "#241d1b",
        divider: "#2d292b",
      },
      borderRadius: {
        main: "22px",
        card: "14px",
        button: "8px",
      },
      fontFamily: {
        sans: ['"Helvetica Neue"', "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};
