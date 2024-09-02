/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  // 兼容小程序，将 : 替换成 __
  separator: '__',
  theme: {
    // 
    extend: {
      fontSize: {
        base: `${getRootFontSize()}rem`, // 动态设置根 font-size  解决经典 “1px” 在不同设备的显示问题
      },
    },
  },
  variants: {},
  plugins: [],
  corePlugins: {
    // 兼容小程序，将带有 * 选择器的插件禁用
    preflight: false,
    space: false,
    divideColor: false,
    divideOpacity: false,
    divideStyle: false,
    divideWidth: false
  },
  //由于tailwind默认是rem单位，有需要可以转到rpx或者使用8
  // presets: [
  //   require('tailwindcss-rem2px-preset').createPreset({
  //     // 32 意味着 1rem = 32rpx
  //     fontSize: 32,
  //     // 转化的单位,可以变成 px / rpx
  //     unit: 'upx'
  //   })
  // ],

};

function getRootFontSize() {
  const dpr = process.env.DEVICE_PIXEL_RATIO || 1;
  console.log("RootFontSize", dpr)
  return 1 * dpr; // 根据 DPR 动态设置 rem 基准值
}
