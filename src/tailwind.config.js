module.exports = {
    future: {
      removeDeprecatedGapUtilities: true,
      purgeLayersByDefault: true,
    },
    purge: {
          layers: ['components', 'utilities'],
        content:['./src/**/*.tsx']
      },
    theme: {
      extend: {},
    },
    variants: {},
    plugins: [],
  }