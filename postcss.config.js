module.exports = {
  plugins: {
    // ...
    "postcss-px-to-viewport": {
      // options
      unitToConvert: "px",
      viewportWidth: 1920,
      unitPrecision: 5,
      propList: ["*"],
      viewportUnit: "vh",
      fontViewportUnit: "vh",
      selectorBlackList: [],
      minPixelValue: 1,
      mediaQuery: false,
      replace: true,
      exclude: undefined,
      include: /\/src\/views\/Echarts\//,
      landscape: false,
      landscapeUnit: "vw",
      landscapeWidth: 568,
    },
  },
};
