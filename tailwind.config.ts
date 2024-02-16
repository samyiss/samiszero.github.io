/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    colors: {
      'midnights': '#edece8',
      'text-font': '#625548',
      'TPD': '#9e958b',
      'TEXT-TPD': '#72665b',
      'hover': '#594e42',
      'fearless': '#a68249',
      'red': '#94242c',
      'midnight': '#26236b',
      'TS1989': '#87adcc',
      'reputation': '#000000',
      'evermore': '#523211',
      'folklore': '#abaaaa',
      'speaknow': "#6d396f"
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
