!function(){"use strict";var a=window.document,b={STYLES:"https://c.disquscdn.com/next/embed/styles/lounge.eceee602870fc4ed49dc5f89e270689e.css",RTL_STYLES:"https://c.disquscdn.com/next/embed/styles/lounge_rtl.436673511f026741f77db08e6403c61e.css","lounge/main":"https://c.disquscdn.com/next/embed/lounge.bundle.aafec1a2f3fa1e486216be04908b0e3a.js","discovery/main":"https://c.disquscdn.com/next/embed/discovery.bundle.dd74556cf657ab1e8f3235a63e5b93a7.js","remote/config":"https://disqus.com/next/config.js","common/vendor_extensions/highlight":"https://c.disquscdn.com/next/embed/highlight.6fbf348532f299e045c254c49c4dbedf.js"};window.require={baseUrl:"https://c.disquscdn.com/next/current/embed",paths:["lounge/main","discovery/main","remote/config","common/vendor_extensions/highlight"].reduce(function(a,c){return a[c]=b[c].slice(0,-3),a},{})};var c=a.createElement("script");c.onload=function(){require(["common/main"],function(a){a.init("lounge",b)})},c.src="https://c.disquscdn.com/next/embed/common.bundle.9fcff11af667507b1757062f0192b821.js",a.body.appendChild(c)}();