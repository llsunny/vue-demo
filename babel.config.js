/*
 * @Author: z_ly
 * @Description:
 * @FilePath: \mobile-office\babel.config.js
 *
 */
module.exports = {
  presets: ['@vue/app'],
  plugins: [
    [
      'component',
      {
        libraryName: 'element-ui',
        styleLibraryName: 'theme-chalk'
      }
    ]
    // ['transform-vue-jsx']
    // // [
    // //   '@win-design/babel-plugin-import',
    // //   {
    // //     libraryName: 'win-design', // 组件库名称
    // //     componentsPath: 'lib', // 插件路径
    // //     stylePath: 'lib/themes', // 样式路径
    // //     suffix: 'css' // 样式后缀
    // //   }
    // ]
  ]
}
