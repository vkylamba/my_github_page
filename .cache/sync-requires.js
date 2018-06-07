// prefer default export if available
const preferDefault = m => m && m.default || m


exports.layouts = {
  "layout---index": preferDefault(require("/Users/Vikas/learning/vkylamba.github.io/.cache/layouts/index.js"))
}

exports.components = {
  "component---node-modules-gatsby-plugin-offline-app-shell-js": preferDefault(require("/Users/Vikas/learning/vkylamba.github.io/node_modules/gatsby-plugin-offline/app-shell.js")),
  "component---src-templates-page-template-js": preferDefault(require("/Users/Vikas/learning/vkylamba.github.io/src/templates/PageTemplate.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/Vikas/learning/vkylamba.github.io/src/pages/index.js")),
  "component---src-pages-contact-js": preferDefault(require("/Users/Vikas/learning/vkylamba.github.io/src/pages/contact.js")),
  "component---src-pages-search-js": preferDefault(require("/Users/Vikas/learning/vkylamba.github.io/src/pages/search.js"))
}

exports.json = {
  "layout-index.json": require("/Users/Vikas/learning/vkylamba.github.io/.cache/json/layout-index.json"),
  "offline-plugin-app-shell-fallback.json": require("/Users/Vikas/learning/vkylamba.github.io/.cache/json/offline-plugin-app-shell-fallback.json"),
  "about.json": require("/Users/Vikas/learning/vkylamba.github.io/.cache/json/about.json"),
  "starters.json": require("/Users/Vikas/learning/vkylamba.github.io/.cache/json/starters.json"),
  "success.json": require("/Users/Vikas/learning/vkylamba.github.io/.cache/json/success.json"),
  "index.json": require("/Users/Vikas/learning/vkylamba.github.io/.cache/json/index.json"),
  "contact.json": require("/Users/Vikas/learning/vkylamba.github.io/.cache/json/contact.json"),
  "search.json": require("/Users/Vikas/learning/vkylamba.github.io/.cache/json/search.json")
}