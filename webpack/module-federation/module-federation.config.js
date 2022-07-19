const { dependencies } = require('../../package.json')

module.exports = {
  name: 'module-federation-with-cra',
  remotes: {},
  exposes: {},
  filename: 'remoteEntry.js',
  shared: {
    ...dependencies,
    react: {
      singleton: true,
      requiredVersion: dependencies.react,
    },
    'react-dom': {
      singleton: true,
      requiredVersion: dependencies['react-dom'],
    },
  },
}
