module.exports = {
  css: {
    loaderOptions: {
      scss: {
        prependData: '@import "@/assets/index.scss";'
      }
    }
  },
  pluginOptions: {
    // 'style-resources-loader': {
    //   preProcessor: 'scss',
    //   patterns: [
    //     './src/assets/*.scss'
    //   ]
    // }
    // electronBuilder: {
    //   nodeIntegration: true,
    //   mainProcessWatch: ['src/scripts/server/*.ts']
    // }
  }
};