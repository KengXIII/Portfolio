/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      //for gradient hover effect
      backgroundSize: {
        "size-200": "200% 200%",
      },
    },
    plugins: [],
  }
}