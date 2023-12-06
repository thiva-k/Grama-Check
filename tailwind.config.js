/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        none: "0",
        DEFAULT: "4px",
        large: "16px",
      },
    },
  },
  plugins: [],
};
