webpackJsonp([0xd5d9d741ef0b],{601:function(e,t,o){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var n=o(1),a=r(n),i=o(2),u=r(i),l=o(17),s=r(l),f=o(602),d=r(f),c=function(e){var t;return{footer:(t={color:e.main.colors.footer,padding:"1.5rem 1.5rem  calc("+e.bars.sizes.actionsBar+"px + 1.5rem) 1.5rem","& p":{margin:0}},t["@media (min-width: "+e.mediaQueryTresholds.M+"px)"]={padding:"2rem 2.5rem  calc("+e.bars.sizes.actionsBar+"px + 2rem) 2.5rem"},t["@media (min-width: "+e.mediaQueryTresholds.L+"px)"]={padding:"2rem 3rem 2rem 3rem"},t)}},p=function(e){var t=e.classes,o=e.footnote,r=o.html;return a.default.createElement("footer",{className:t.footer},a.default.createElement(d.default,{content:r}))};p.propTypes={classes:u.default.object.isRequired,footnote:u.default.object.isRequired},t.default=(0,s.default)(c)(p),e.exports=t.default},602:function(e,t,o){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var n=o(1),a=r(n),i=o(2),u=r(i),l=o(17),s=r(l),f=function(e){return{container:{fontSize:e.footer.fonts.footnote.size+"em",lineHeight:e.footer.fonts.footnote.lineHeight,color:e.footer.colors.text,"& a":{color:e.footer.colors.link,fontWeight:"normal",textShadow:"none"},"& a:hover":{color:e.footer.colors.linkHover},"& ul":{listStyle:"none",margin:0,padding:0,textAlign:"center"},"& li":{display:"inline-block",margin:"0 .3em"}}}},d=function(e){var t=e.classes,o=e.content;return a.default.createElement("div",{className:t.container,dangerouslySetInnerHTML:{__html:o}})};d.propTypes={classes:u.default.object.isRequired,content:u.default.string.isRequired},t.default=(0,s.default)(f)(d),e.exports=t.default},603:function(e,t,o){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var n=o(601);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r(n).default}}),e.exports=t.default},620:function(e,t,o){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var n=o(1),a=r(n),i=o(2),u=r(i),l=o(231),s=r(l),f=o(233),d=r(f),c=o(387),p=r(c),m=function(e){var t=e.page,o=(t||{}).html;return a.default.createElement(s.default,null,a.default.createElement(d.default,t.frontmatter),a.default.createElement(p.default,{html:o}))};m.propTypes={page:u.default.object.isRequired},t.default=m,e.exports=t.default},621:function(e,t,o){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var n=o(620);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r(n).default}}),e.exports=t.default},636:function(e,t,o){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.pageQuery=void 0;var u=o(1),l=r(u),s=o(2),f=r(s),d=o(54),c=o(45),p=o(88),m=o(232),g=r(m),v=o(621),h=r(v),_=o(603),b=r(_),y=o(388),M=r(y),x=function(e){function t(){var o,r,i;n(this,t);for(var u=arguments.length,l=Array(u),s=0;s<u;s++)l[s]=arguments[s];return o=r=a(this,e.call.apply(e,[this].concat(l))),r.moveNavigatorAside=p.moveNavigatorAside.bind(r),i=o,a(r,i)}return i(t,e),t.prototype.componentDidMount=function(){"is-featured"===this.props.navigatorPosition&&this.moveNavigatorAside()},t.prototype.render=function(){var e=this.props.data,t=(((e||{}).site||{}).siteMetadata||{}).facebook;return l.default.createElement(g.default,null,l.default.createElement(h.default,{page:e.page}),l.default.createElement(b.default,{footnote:e.footnote}),l.default.createElement(M.default,{data:e.post,facebook:t}))},t}(l.default.Component);x.propTypes={data:f.default.object.isRequired,navigatorPosition:f.default.string.isRequired,setNavigatorPosition:f.default.func.isRequired,isWideScreen:f.default.bool.isRequired};var E=function(e,t){return{navigatorPosition:e.navigatorPosition,isWideScreen:e.isWideScreen}},j={setNavigatorPosition:c.setNavigatorPosition,setNavigatorShape:c.setNavigatorShape};t.default=(0,d.connect)(E,j)(x);t.pageQuery="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-templates-page-template-js-3c6044363dba50e476ff.js.map