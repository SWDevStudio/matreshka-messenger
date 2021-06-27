module.exports = {
  css: {
    loaderOptions: {
      scss: {
        prependData: '@import "@/assets/system.scss";'
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
    electronBuilder: {
      nodeIntegration: true,
      mainProcessWatch: ['src/data/*.ts']
    }
  }
};
