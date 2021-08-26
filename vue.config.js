const appConfig = require('./src/app.config')

/** @type import('@vue/cli-service').ProjectOptions */
module.exports = {
  configureWebpack: {
    name: appConfig.title,
    resolve: {
      alias: require('./aliases.config').webpack,
    },
    performance: {
      hints:
        process.env.NODE_ENV === 'production' &&
        !process.env.VUE_APP_TEST &&
        'warning',
    },
  },
  css: {
    sourceMap: true,
  },
}
