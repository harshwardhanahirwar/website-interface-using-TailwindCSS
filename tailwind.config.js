/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*","./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      colors: {
        white: '#fafafa',
        clgPink:{                    
          100: '#fe4b89',  //collegites logo theme-color
          900: '#a12f56'
        },
        clgBlue: {
          100: '#2196f3',   //collegites logo theme-color
          900: '#185485'
        }
      },
    },
    // screens: {
    //   'tablate': {'max': '1200px'},
    // },
    // columns: {
    //   middle: '34rem',
    // },
  },
  plugins: [ require('flowbite/plugin') ],
}

