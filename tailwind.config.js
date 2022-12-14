/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js,ejs,css}", "./assets/**/*.{html,js,ejs,css}"],
  theme: {
    spacing: {
      '1': '8px',
      '2': '12px',
      '3': '16px',
      '4': '24px',
      '5': '32px',
      '6': '48px',
    },
    container: {
      center: true,
    },
    extend: {
      colors: {
        tblack: '#222831',
      },
      corePlugins: {
        preflight: false,
      },
      borderRadius: {
        'none': '0',
        DEFAULT: '3px',
      },
      boxShadow: {
        'itp': '1px 10px 30px 0 rgb(0 0 0 / 10%)',
      }
    }
  }
}
