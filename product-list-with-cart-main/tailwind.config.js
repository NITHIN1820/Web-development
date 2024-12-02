/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      colors: {
        'custom-color': '#ff6347',
        'red':'hsl(14, 86%, 42%)',
       ' Rose 50': 'hsl(20, 50%, 98%)',
        'Rose 100': 'hsl(13, 31%, 94%)',
       ' Rose 300': 'hsl(14, 25%, 72%)',
       ' Rose 400': 'hsl(7, 20%, 60%)',
       ' Rose 500': 'hsl(12, 20%, 44%)',
       ' Rose 900': 'hsl(14, 65%, 9%)',
       'green':' hsl(159, 69%, 38%)'
        
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        custom: ['"Custom Font"', 'serif'],
        Family: ['"Red Hat Text"']
      },
    },
  },
  plugins: [],
}
