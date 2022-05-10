/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {}
  },
  corePlugins: {
    aspectRatio: false
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/line-clamp')
  ]
}
