// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-templates-page-template-js": require("gatsby-module-loader?name=component---src-templates-page-template-js!/Users/Vikas/learning/vkylamba.github.io/src/templates/PageTemplate.js"),
  "component---src-pages-index-js": require("gatsby-module-loader?name=component---src-pages-index-js!/Users/Vikas/learning/vkylamba.github.io/src/pages/index.js"),
  "component---cache-dev-404-page-js": require("gatsby-module-loader?name=component---cache-dev-404-page-js!/Users/Vikas/learning/vkylamba.github.io/.cache/dev-404-page.js"),
  "component---src-pages-contact-js": require("gatsby-module-loader?name=component---src-pages-contact-js!/Users/Vikas/learning/vkylamba.github.io/src/pages/contact.js"),
  "component---src-pages-search-js": require("gatsby-module-loader?name=component---src-pages-search-js!/Users/Vikas/learning/vkylamba.github.io/src/pages/search.js")
}

exports.json = {
  "layout-index.json": require("gatsby-module-loader?name=path---!/Users/Vikas/learning/vkylamba.github.io/.cache/json/layout-index.json"),
  "about.json": require("gatsby-module-loader?name=path---about!/Users/Vikas/learning/vkylamba.github.io/.cache/json/about.json"),
  "starters.json": require("gatsby-module-loader?name=path---starters!/Users/Vikas/learning/vkylamba.github.io/.cache/json/starters.json"),
  "success.json": require("gatsby-module-loader?name=path---success!/Users/Vikas/learning/vkylamba.github.io/.cache/json/success.json"),
  "index.json": require("gatsby-module-loader?name=path---index!/Users/Vikas/learning/vkylamba.github.io/.cache/json/index.json"),
  "dev-404-page.json": require("gatsby-module-loader?name=path---dev-404-page!/Users/Vikas/learning/vkylamba.github.io/.cache/json/dev-404-page.json"),
  "contact.json": require("gatsby-module-loader?name=path---contact!/Users/Vikas/learning/vkylamba.github.io/.cache/json/contact.json"),
  "search.json": require("gatsby-module-loader?name=path---search!/Users/Vikas/learning/vkylamba.github.io/.cache/json/search.json")
}

exports.layouts = {
  "layout---index": require("gatsby-module-loader?name=component---src-layouts-index-js!/Users/Vikas/learning/vkylamba.github.io/.cache/layouts/index.js")
}