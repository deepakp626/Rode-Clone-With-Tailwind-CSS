/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      color:{
        'lightBlack':"#FFFFFF",
      },
      backgroundimage:{
        'streamerx':"url('public/image/StreamerX-Header.png')",
        
      },
      backgroundSize:{
          // Custom background size value
      'custom': '150% 110%',   //width , height
      'custom-lg': '130% 110%',   //width , height
      'custom-full': '100% 110%',   //width , height
      },
      float:{
        'float-b': 'bottom',
      }
    },
  },
  plugins: [],
}

