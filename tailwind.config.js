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
  darkMode: true, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
