/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif']
    },
    extend: {
      "colors": {
       "black": "#141414",
       "blue": "#3356ae",
       "white": "#ffffff",
       "red": "#bb2649"
      },
      "fontSize": {
       "xs": "1.125rem",
       "sm": "1.25rem",
       "base": "1.5rem",
       "lg": "3rem",
       "xl": "4rem"
      },
      "fontFamily": {
       "futura-bdcn-bt": "Futura BdCn BT",
       "mulish": "Mulish"
      },
      "borderRadius": {
       "none": "0",
       "xs": "0.3125rem",
       "sm": "0.5625rem",
       "default": "1.612831950187683rem",
       "lg": "2.125rem",
       "xl": "2.3072457313537598rem",
       "2xl": "5.394068241119385rem",
       "full": "9999px"
      }
      
     }
  },
  
  plugins: []
}
