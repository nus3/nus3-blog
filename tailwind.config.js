module.exports = {
  mode: 'jit',
  purge: {
    content: [
      './src/components/**/*.tsx',
      './src/pages/**/*.tsx',
      './src/templates/**/*.tsx',
    ],
    options: {
      // https://purgecss.com/safelisting.html#patterns
      safelist: {
        standard: [/^bg-/, /^text-/, /^border-/],
      },
    },
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      DEFAULT: ['Lato', 'Noto Sans JP', 'san-serif'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
