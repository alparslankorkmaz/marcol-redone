/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        services: "url('/images/our_services/services_bg.jpg')",
        colin: "url('/images/our_team/1.jpg')",
        mark: "url('/images/our_team/2.jpg')",
        richard: "url('/images/our_team/3.jpg')",
      },
      aspectRatio: {
        "3/2": "3 / 2",
      },
      colors: {
        "marcol-blue": "#0052A3",
      },
      fontFamily: {
        archivo: ["var(--font-archivo)"],
        black: ["var(--font-archivo_black)"],
      },
    },
  },
  plugins: [],
};
