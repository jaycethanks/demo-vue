module.exports = {
  chainWebpack: (config) => {
    ["vue-modules", "vue", "normal-modules", "normal"].forEach((rule) => {
      config.module
        .rule("scss")
        .oneOf(rule)
        .use("resolve-url-loader")
        .loader("resolve-url-loader")
        .before("sass-loader")
        .end()
        .use("sass-loader")
        .loader("sass-loader")
        .tap((options) => ({ ...options, sourceMap: true }));
    });
  },
  devServer: {
    disableHostCheck: true,
    port: 3000,
    proxy: {
      /* '/api': {
        target: 'https://mock.ihx.me/mock/5baf3052f7da7e07e04a5116/antd-pro', //mock API接口系统
        ws: false,
        changeOrigin: true,
        pathRewrite: {
          '/jeecg-boot': ''  //默认所有请求都加了jeecg-boot前缀，需要去掉192.168.1.71:9999
        }
      }, */
      "/api": {
        target: "http://127.0.0.1:12345", // 请求本地 需要jeecg-boot后台项目
        ws: false,
        changeOrigin: true,
        pathRewrite: {
          // '': '' //默认所有请求都加了jeecg-boot前缀，需要去掉
          // '^/api': '/api' // 这种接口配置出来     http://XX.XX.XX.XX:8083/api/login
          "^/api": "/", // 这种接口配置出来     http://XX.XX.XX.XX:8083/login
        },
      },
      "/file": {
        target: "http://127.0.0.1:2456", // 请求本地 需要jeecg-boot后台项目
        ws: false,
        changeOrigin: true,
        pathRewrite: {
          "^/file": "/", // 这种接口配置出来     http://XX.XX.XX.XX:8083/login
        },
      },
    },
  },
};
