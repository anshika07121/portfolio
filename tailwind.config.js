/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "node_modules/preline/dist/*.js"],
  theme: {
    screens: {
      'x': '380',
      'sm': '580px',
      

      'md': '780px',
      'mx': '890',
      'ml': '820',
      

      'lg': '1024px',
      

      'xl': '1280px',
      

      '2xl': '1536px',
     
    },
    extend: {
      backgroundImage: {
        bannerimg : "url('/Contactus.jpg')",
        banner : "url('/Banner.jsx')",
        homebg : "url('/Homebanner.jsx')"
      }
    }
    
  },
  plugins: [],
}

