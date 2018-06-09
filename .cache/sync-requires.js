// prefer default export if available
const preferDefault = m => m && m.default || m


exports.layouts = {
  "layout---index": preferDefault(require("/Users/Vikas/learning/my_github_page/.cache/layouts/index.js"))
}

exports.components = {
  "component---node-modules-gatsby-plugin-offline-app-shell-js": preferDefault(require("/Users/Vikas/learning/my_github_page/node_modules/gatsby-plugin-offline/app-shell.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/Vikas/learning/my_github_page/src/pages/index.js")),
  "component---src-templates-page-template-js": preferDefault(require("/Users/Vikas/learning/my_github_page/src/templates/PageTemplate.js")),
  "component---src-pages-contact-js": preferDefault(require("/Users/Vikas/learning/my_github_page/src/pages/contact.js")),
  "component---src-pages-search-js": preferDefault(require("/Users/Vikas/learning/my_github_page/src/pages/search.js"))
}

exports.json = {
  "layout-index.json": require("/Users/Vikas/learning/my_github_page/.cache/json/layout-index.json"),
  "offline-plugin-app-shell-fallback.json": require("/Users/Vikas/learning/my_github_page/.cache/json/offline-plugin-app-shell-fallback.json"),
  "index.json": require("/Users/Vikas/learning/my_github_page/.cache/json/index.json"),
  "success.json": require("/Users/Vikas/learning/my_github_page/.cache/json/success.json"),
  "about.json": require("/Users/Vikas/learning/my_github_page/.cache/json/about.json"),
  "starters.json": require("/Users/Vikas/learning/my_github_page/.cache/json/starters.json"),
  "contact.json": require("/Users/Vikas/learning/my_github_page/.cache/json/contact.json"),
  "search.json": require("/Users/Vikas/learning/my_github_page/.cache/json/search.json")
}