/** @type {import('tailwindcss').Config} */
export default {
  content:[
   "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme:{
    fontFamily:{
      display:["poppins", "sans-serif"]
    },
    extend: {
      colors:{
        primary:"#05B6D3",
        secondary:"#EF863E",
      },
      backgroundImage:{
        'login-bg-img':"url('./src/assets/images/10-mont-saint-michel-getty.jpg')",
        'signup-bg-img':"url('./src/assets/images/machu-picchu-stock.jpg')"
      },
    },
  },
  plugins: [],
}

