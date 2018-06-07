var plugins = [{
      plugin: require('/Users/Vikas/learning/vkylamba.github.io/node_modules/gatsby-plugin-react-helmet/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/Users/Vikas/learning/vkylamba.github.io/node_modules/gatsby-plugin-manifest/gatsby-ssr'),
      options: {"plugins":[],"name":"PersonalBlog - a blog starter for GatsbyJS","short_name":"PersonalBlog","start_url":"/","background_color":"#ffffff","theme_color":"#ffffff","display":"standalone","icons":[{"src":"/icons/icon-48x48.png","sizes":"48x48","type":"image/png"},{"src":"/icons/icon-96x96.png","sizes":"96x96","type":"image/png"},{"src":"/icons/icon-144x144.png","sizes":"144x144","type":"image/png"},{"src":"/icons/icon-192x192.png","sizes":"192x192","type":"image/png"},{"src":"/icons/icon-256x256.png","sizes":"256x256","type":"image/png"},{"src":"/icons/icon-384x384.png","sizes":"384x384","type":"image/png"},{"src":"/icons/icon-512x512.png","sizes":"512x512","type":"image/png"}]},
    },{
      plugin: require('/Users/Vikas/learning/vkylamba.github.io/node_modules/gatsby-plugin-google-analytics/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/Users/Vikas/learning/vkylamba.github.io/node_modules/gatsby-plugin-feed/gatsby-ssr'),
      options: {"plugins":[],"query":"\n          {\n            site {\n              siteMetadata {\n                title\n                description\n                siteUrl\n                site_url: siteUrl\n              }\n            }\n          }\n        ","feeds":[{"query":"\n              {\n                allMarkdownRemark(\n                  limit: 1000,\n                  sort: { order: DESC, fields: [fields___prefix] },\n                  filter: { id: { regex: \"//posts//\" } }\n                ) {\n                  edges {\n                    node {\n                      excerpt\n                      html\n                      fields { \n                        slug\n                        prefix \n                      }\n                      frontmatter {\n                        title\n                      }\n                    }\n                  }\n                }\n              }\n            ","output":"/rss.xml"}]},
    },{
      plugin: require('/Users/Vikas/learning/vkylamba.github.io/node_modules/gatsby-plugin-sitemap/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/Users/Vikas/learning/vkylamba.github.io/gatsby-ssr'),
      options: {"plugins":[]},
    }]
// During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]

const apis = require(`./api-ssr-docs`)

// Run the specified API in any plugins that have implemented it
module.exports = (api, args, defaultReturn) => {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api)
  }

  // Run each plugin in series.
  let results = plugins.map(plugin => {
    if (plugin.plugin[api]) {
      const result = plugin.plugin[api](args, plugin.options)
      return result
    }
  })

  // Filter out undefined results.
  results = results.filter(result => typeof result !== `undefined`)

  if (results.length > 0) {
    return results
  } else {
    return [defaultReturn]
  }
}
