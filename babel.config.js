// Removes 'console.log' on production builds
//'vue-cli-service build' runs production build
// Note: Running 'vue-cli-service serve' will not remove console.log which is intended
const removeConsolePlugin = []
if (process.env.NODE_ENV === 'production') {
  removeConsolePlugin.push("transform-remove-console")
}
module.exports = {
  presets: [
    '@vue/app'
  ],
  plugins: removeConsolePlugin
}
