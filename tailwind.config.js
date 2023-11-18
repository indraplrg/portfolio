/** @type {import('tailwindcss').Config} */
export default {
   content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
   theme: {
      extend: {
         colors: {
            color: {
               main: "#415a77",
               primary: "#0d1b2a",
               secondary: "#1b263b",
               accent: "#e0e1dd",
               text: "#fcbf49",
            },
         },
         fontFamily: {
            Poppins: ["Poppins", "sans-serif"],
            Oswald: ["Oswald", "sans-serif"],
         },
      },
   },
   plugins: [],
};
