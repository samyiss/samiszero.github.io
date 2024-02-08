/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    colors: {
      'midnights': '#d8d5ce',
      'text-font': '#625548',
      'TPD': '#9e958b',
      'TEXT-TPD': '#72665b',
    },
  },
  plugins: [
    require('tailwind-typewriter')({
      wordsets: {
        fruit: {
          words: ['Well that was supposed to be a serious portfolio but it turns out to be a what i stan in life. P.S: If you keep scrolling you will find the ATWTMVTVFTV music video.'],
          delay: 2
        }
      }
    })
  ],
}
