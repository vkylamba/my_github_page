// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-templates-post-template-js": require("gatsby-module-loader?name=component---src-templates-post-template-js!/Users/Vikas/learning/my_github_page/src/templates/PostTemplate.js"),
  "component---src-templates-page-template-js": require("gatsby-module-loader?name=component---src-templates-page-template-js!/Users/Vikas/learning/my_github_page/src/templates/PageTemplate.js"),
  "component---cache-dev-404-page-js": require("gatsby-module-loader?name=component---cache-dev-404-page-js!/Users/Vikas/learning/my_github_page/.cache/dev-404-page.js"),
  "component---src-pages-contact-js": require("gatsby-module-loader?name=component---src-pages-contact-js!/Users/Vikas/learning/my_github_page/src/pages/contact.js"),
  "component---src-pages-index-js": require("gatsby-module-loader?name=component---src-pages-index-js!/Users/Vikas/learning/my_github_page/src/pages/index.js"),
  "component---src-pages-search-js": require("gatsby-module-loader?name=component---src-pages-search-js!/Users/Vikas/learning/my_github_page/src/pages/search.js")
}

exports.json = {
  "layout-index.json": require("gatsby-module-loader?name=path---!/Users/Vikas/learning/my_github_page/.cache/json/layout-index.json"),
  "customize-personal-blog-starter.json": require("gatsby-module-loader?name=path---customize-personal-blog-starter!/Users/Vikas/learning/my_github_page/.cache/json/customize-personal-blog-starter.json"),
  "about.json": require("gatsby-module-loader?name=path---about!/Users/Vikas/learning/my_github_page/.cache/json/about.json"),
  "starters.json": require("gatsby-module-loader?name=path---starters!/Users/Vikas/learning/my_github_page/.cache/json/starters.json"),
  "success.json": require("gatsby-module-loader?name=path---success!/Users/Vikas/learning/my_github_page/.cache/json/success.json"),
  "dev-404-page.json": require("gatsby-module-loader?name=path---dev-404-page!/Users/Vikas/learning/my_github_page/.cache/json/dev-404-page.json"),
  "contact.json": require("gatsby-module-loader?name=path---contact!/Users/Vikas/learning/my_github_page/.cache/json/contact.json"),
  "index.json": require("gatsby-module-loader?name=path---index!/Users/Vikas/learning/my_github_page/.cache/json/index.json"),
  "search.json": require("gatsby-module-loader?name=path---search!/Users/Vikas/learning/my_github_page/.cache/json/search.json")
}

exports.layouts = {
  "layout---index": require("gatsby-module-loader?name=component---src-layouts-index-js!/Users/Vikas/learning/my_github_page/.cache/layouts/index.js")
}