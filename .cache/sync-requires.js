// prefer default export if available
const preferDefault = m => m && m.default || m


exports.layouts = {
  "layout---index": preferDefault(require("/Users/Vikas/learning/my_github_page/.cache/layouts/index.js"))
}

exports.components = {
  "component---src-templates-post-template-js": preferDefault(require("/Users/Vikas/learning/my_github_page/src/templates/PostTemplate.js")),
  "component---src-templates-page-template-js": preferDefault(require("/Users/Vikas/learning/my_github_page/src/templates/PageTemplate.js")),
  "component---cache-dev-404-page-js": preferDefault(require("/Users/Vikas/learning/my_github_page/.cache/dev-404-page.js")),
  "component---src-pages-contact-js": preferDefault(require("/Users/Vikas/learning/my_github_page/src/pages/contact.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/Vikas/learning/my_github_page/src/pages/index.js")),
  "component---src-pages-search-js": preferDefault(require("/Users/Vikas/learning/my_github_page/src/pages/search.js"))
}

exports.json = {
  "layout-index.json": require("/Users/Vikas/learning/my_github_page/.cache/json/layout-index.json"),
  "customize-personal-blog-starter.json": require("/Users/Vikas/learning/my_github_page/.cache/json/customize-personal-blog-starter.json"),
  "about.json": require("/Users/Vikas/learning/my_github_page/.cache/json/about.json"),
  "starters.json": require("/Users/Vikas/learning/my_github_page/.cache/json/starters.json"),
  "success.json": require("/Users/Vikas/learning/my_github_page/.cache/json/success.json"),
  "dev-404-page.json": require("/Users/Vikas/learning/my_github_page/.cache/json/dev-404-page.json"),
  "contact.json": require("/Users/Vikas/learning/my_github_page/.cache/json/contact.json"),
  "index.json": require("/Users/Vikas/learning/my_github_page/.cache/json/index.json"),
  "search.json": require("/Users/Vikas/learning/my_github_page/.cache/json/search.json")
}