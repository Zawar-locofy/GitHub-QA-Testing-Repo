/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        darkgray: "#a6a6a6",
        gray: "#242331",
        headings: "#14342b",
        black: "#000",
        darkslategray: { "100": "#424242", "200": "#263238" },
        whitesmoke: "#f2f2f2",
        yellowgreen: "#80c904",
        color: "#626262",
      },
      fontFamily: {
        poppins: "Poppins",
        paragraph: "Montserrat",
        inter: "Inter",
      },
      borderRadius: { base: "20px" },
    },
    fontSize: { sm: "15px", base: "16px", lg: "24px", xl: "50px" },
  },
  corePlugins: { preflight: false },
};
