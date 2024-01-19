/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    colors: {
      'midnights': '#364e58',
      'midnights-light': '#343f51',
    },
  },
  plugins: [
    require('tailwind-typewriter')({
      wordsets: {
        fruit: {
          words: ['Well that was supposed to be a serious portfolio but it turns out to be a what i stan in life. P.S: If you keep scrolling you will find the ATWTMVTVFTV.'],
          delay: 2
        }
      }
    })
  ],
}
