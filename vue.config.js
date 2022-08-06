module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: '@import \'~@/assets/scss/main.scss\';'

      },
      scss: {
        prependData: '@import \'~@/assets/scss/main.scss\';'
      }
    }
  }
}
