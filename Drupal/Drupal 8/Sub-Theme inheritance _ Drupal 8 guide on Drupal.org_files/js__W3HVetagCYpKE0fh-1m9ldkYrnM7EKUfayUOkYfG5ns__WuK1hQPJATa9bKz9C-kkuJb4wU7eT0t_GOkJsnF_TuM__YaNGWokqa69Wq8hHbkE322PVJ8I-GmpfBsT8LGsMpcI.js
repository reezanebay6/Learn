/* http://prismjs.com/download.html?themes=prism-okaidia&languages=markup+css+clike+javascript+apacheconf+bash+diff+git+ini+json+less+nginx+php+php-extras+sass+scss+sql+twig+yaml&plugins=highlight-keywords+previewer-base+previewer-color */
var _self="undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{},Prism=function(){var e=/\blang(?:uage)?-(\w+)\b/i,t=0,n=_self.Prism={util:{encode:function(e){return e instanceof a?new a(e.type,n.util.encode(e.content),e.alias):"Array"===n.util.type(e)?e.map(n.util.encode):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).match(/\[object (\w+)\]/)[1]},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++t}),e.__id},clone:function(e){var t=n.util.type(e);switch(t){case"Object":var a={};for(var r in e)e.hasOwnProperty(r)&&(a[r]=n.util.clone(e[r]));return a;case"Array":return e.map&&e.map(function(e){return n.util.clone(e)})}return e}},languages:{extend:function(e,t){var a=n.util.clone(n.languages[e]);for(var r in t)a[r]=t[r];return a},insertBefore:function(e,t,a,r){r=r||n.languages;var l=r[e];if(2==arguments.length){a=arguments[1];for(var i in a)a.hasOwnProperty(i)&&(l[i]=a[i]);return l}var o={};for(var s in l)if(l.hasOwnProperty(s)){if(s==t)for(var i in a)a.hasOwnProperty(i)&&(o[i]=a[i]);o[s]=l[s]}return n.languages.DFS(n.languages,function(t,n){n===r[e]&&t!=e&&(this[t]=o)}),r[e]=o},DFS:function(e,t,a,r){r=r||{};for(var l in e)e.hasOwnProperty(l)&&(t.call(e,l,e[l],a||l),"Object"!==n.util.type(e[l])||r[n.util.objId(e[l])]?"Array"!==n.util.type(e[l])||r[n.util.objId(e[l])]||(r[n.util.objId(e[l])]=!0,n.languages.DFS(e[l],t,l,r)):(r[n.util.objId(e[l])]=!0,n.languages.DFS(e[l],t,null,r)))}},plugins:{},highlightAll:function(e,t){var a={callback:t,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};n.hooks.run("before-highlightall",a);for(var r,l=a.elements||document.querySelectorAll(a.selector),i=0;r=l[i++];)n.highlightElement(r,e===!0,a.callback)},highlightElement:function(t,a,r){for(var l,i,o=t;o&&!e.test(o.className);)o=o.parentNode;o&&(l=(o.className.match(e)||[,""])[1],i=n.languages[l]),t.className=t.className.replace(e,"").replace(/\s+/g," ")+" language-"+l,o=t.parentNode,/pre/i.test(o.nodeName)&&(o.className=o.className.replace(e,"").replace(/\s+/g," ")+" language-"+l);var s=t.textContent,u={element:t,language:l,grammar:i,code:s};if(!s||!i)return n.hooks.run("complete",u),void 0;if(n.hooks.run("before-highlight",u),a&&_self.Worker){var c=new Worker(n.filename);c.onmessage=function(e){u.highlightedCode=e.data,n.hooks.run("before-insert",u),u.element.innerHTML=u.highlightedCode,r&&r.call(u.element),n.hooks.run("after-highlight",u),n.hooks.run("complete",u)},c.postMessage(JSON.stringify({language:u.language,code:u.code,immediateClose:!0}))}else u.highlightedCode=n.highlight(u.code,u.grammar,u.language),n.hooks.run("before-insert",u),u.element.innerHTML=u.highlightedCode,r&&r.call(t),n.hooks.run("after-highlight",u),n.hooks.run("complete",u)},highlight:function(e,t,r){var l=n.tokenize(e,t);return a.stringify(n.util.encode(l),r)},tokenize:function(e,t){var a=n.Token,r=[e],l=t.rest;if(l){for(var i in l)t[i]=l[i];delete t.rest}e:for(var i in t)if(t.hasOwnProperty(i)&&t[i]){var o=t[i];o="Array"===n.util.type(o)?o:[o];for(var s=0;s<o.length;++s){var u=o[s],c=u.inside,g=!!u.lookbehind,h=!!u.greedy,f=0,d=u.alias;u=u.pattern||u;for(var p=0;p<r.length;p++){var m=r[p];if(r.length>e.length)break e;if(!(m instanceof a)){u.lastIndex=0;var y=u.exec(m),v=1;if(!y&&h&&p!=r.length-1){var b=r[p+1].matchedStr||r[p+1],k=m+b;if(p<r.length-2&&(k+=r[p+2].matchedStr||r[p+2]),u.lastIndex=0,y=u.exec(k),!y)continue;var w=y.index+(g?y[1].length:0);if(w>=m.length)continue;var _=y.index+y[0].length,P=m.length+b.length;if(v=3,P>=_){if(r[p+1].greedy)continue;v=2,k=k.slice(0,P)}m=k}if(y){g&&(f=y[1].length);var w=y.index+f,y=y[0].slice(f),_=w+y.length,S=m.slice(0,w),O=m.slice(_),j=[p,v];S&&j.push(S);var A=new a(i,c?n.tokenize(y,c):y,d,y,h);j.push(A),O&&j.push(O),Array.prototype.splice.apply(r,j)}}}}}return r},hooks:{all:{},add:function(e,t){var a=n.hooks.all;a[e]=a[e]||[],a[e].push(t)},run:function(e,t){var a=n.hooks.all[e];if(a&&a.length)for(var r,l=0;r=a[l++];)r(t)}}},a=n.Token=function(e,t,n,a,r){this.type=e,this.content=t,this.alias=n,this.matchedStr=a||null,this.greedy=!!r};if(a.stringify=function(e,t,r){if("string"==typeof e)return e;if("Array"===n.util.type(e))return e.map(function(n){return a.stringify(n,t,e)}).join("");var l={type:e.type,content:a.stringify(e.content,t,r),tag:"span",classes:["token",e.type],attributes:{},language:t,parent:r};if("comment"==l.type&&(l.attributes.spellcheck="true"),e.alias){var i="Array"===n.util.type(e.alias)?e.alias:[e.alias];Array.prototype.push.apply(l.classes,i)}n.hooks.run("wrap",l);var o="";for(var s in l.attributes)o+=(o?" ":"")+s+'="'+(l.attributes[s]||"")+'"';return"<"+l.tag+' class="'+l.classes.join(" ")+'" '+o+">"+l.content+"</"+l.tag+">"},!_self.document)return _self.addEventListener?(_self.addEventListener("message",function(e){var t=JSON.parse(e.data),a=t.language,r=t.code,l=t.immediateClose;_self.postMessage(n.highlight(r,n.languages[a],a)),l&&_self.close()},!1),_self.Prism):_self.Prism;var r=document.currentScript||[].slice.call(document.getElementsByTagName("script")).pop();return r&&(n.filename=r.src,document.addEventListener&&!r.hasAttribute("data-manual")&&document.addEventListener("DOMContentLoaded",n.highlightAll)),_self.Prism}();"undefined"!=typeof module&&module.exports&&(module.exports=Prism),"undefined"!=typeof global&&(global.Prism=Prism);
Prism.languages.markup={comment:/<!--[\w\W]*?-->/,prolog:/<\?[\w\W]+?\?>/,doctype:/<!DOCTYPE[\w\W]+?>/,cdata:/<!\[CDATA\[[\w\W]*?]]>/i,tag:{pattern:/<\/?(?!\d)[^\s>\/=.$<]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\\1|\\?(?!\1)[\w\W])*\1|[^\s'">=]+))?)*\s*\/?>/i,inside:{tag:{pattern:/^<\/?[^\s>\/]+/i,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"attr-value":{pattern:/=(?:('|")[\w\W]*?(\1)|[^\s>]+)/i,inside:{punctuation:/[=>"']/}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:/&#?[\da-z]{1,8};/i},Prism.hooks.add("wrap",function(a){"entity"===a.type&&(a.attributes.title=a.content.replace(/&amp;/,"&"))}),Prism.languages.xml=Prism.languages.markup,Prism.languages.html=Prism.languages.markup,Prism.languages.mathml=Prism.languages.markup,Prism.languages.svg=Prism.languages.markup;
Prism.languages.css={comment:/\/\*[\w\W]*?\*\//,atrule:{pattern:/@[\w-]+?.*?(;|(?=\s*\{))/i,inside:{rule:/@[\w-]+/}},url:/url\((?:(["'])(\\(?:\r\n|[\w\W])|(?!\1)[^\\\r\n])*\1|.*?)\)/i,selector:/[^\{\}\s][^\{\};]*?(?=\s*\{)/,string:/("|')(\\(?:\r\n|[\w\W])|(?!\1)[^\\\r\n])*\1/,property:/(\b|\B)[\w-]+(?=\s*:)/i,important:/\B!important\b/i,"function":/[-a-z0-9]+(?=\()/i,punctuation:/[(){};:]/},Prism.languages.css.atrule.inside.rest=Prism.util.clone(Prism.languages.css),Prism.languages.markup&&(Prism.languages.insertBefore("markup","tag",{style:{pattern:/(<style[\w\W]*?>)[\w\W]*?(?=<\/style>)/i,lookbehind:!0,inside:Prism.languages.css,alias:"language-css"}}),Prism.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/\s*style=("|').*?\1/i,inside:{"attr-name":{pattern:/^\s*style/i,inside:Prism.languages.markup.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$/,"attr-value":{pattern:/.+/i,inside:Prism.languages.css}},alias:"language-css"}},Prism.languages.markup.tag));
Prism.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\w\W]*?\*\//,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0}],string:{pattern:/(["'])(\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[a-z0-9_\.\\]+/i,lookbehind:!0,inside:{punctuation:/(\.|\\)/}},keyword:/\b(if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,"boolean":/\b(true|false)\b/,"function":/[a-z0-9_]+(?=\()/i,number:/\b-?(?:0x[\da-f]+|\d*\.?\d+(?:e[+-]?\d+)?)\b/i,operator:/--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,punctuation:/[{}[\];(),.:]/};
Prism.languages.javascript=Prism.languages.extend("clike",{keyword:/\b(as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield)\b/,number:/\b-?(0x[\dA-Fa-f]+|0b[01]+|0o[0-7]+|\d*\.?\d+([Ee][+-]?\d+)?|NaN|Infinity)\b/,"function":/[_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*(?=\()/i}),Prism.languages.insertBefore("javascript","keyword",{regex:{pattern:/(^|[^\/])\/(?!\/)(\[.+?]|\\.|[^\/\\\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})]))/,lookbehind:!0,greedy:!0}}),Prism.languages.insertBefore("javascript","class-name",{"template-string":{pattern:/`(?:\\\\|\\?[^\\])*?`/,greedy:!0,inside:{interpolation:{pattern:/\$\{[^}]+\}/,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:Prism.languages.javascript}},string:/[\s\S]+/}}}),Prism.languages.markup&&Prism.languages.insertBefore("markup","tag",{script:{pattern:/(<script[\w\W]*?>)[\w\W]*?(?=<\/script>)/i,lookbehind:!0,inside:Prism.languages.javascript,alias:"language-javascript"}}),Prism.languages.js=Prism.languages.javascript;
Prism.languages.apacheconf={comment:/#.*/,"directive-inline":{pattern:/^(\s*)\b(AcceptFilter|AcceptPathInfo|AccessFileName|Action|AddAlt|AddAltByEncoding|AddAltByType|AddCharset|AddDefaultCharset|AddDescription|AddEncoding|AddHandler|AddIcon|AddIconByEncoding|AddIconByType|AddInputFilter|AddLanguage|AddModuleInfo|AddOutputFilter|AddOutputFilterByType|AddType|Alias|AliasMatch|Allow|AllowCONNECT|AllowEncodedSlashes|AllowMethods|AllowOverride|AllowOverrideList|Anonymous|Anonymous_LogEmail|Anonymous_MustGiveEmail|Anonymous_NoUserID|Anonymous_VerifyEmail|AsyncRequestWorkerFactor|AuthBasicAuthoritative|AuthBasicFake|AuthBasicProvider|AuthBasicUseDigestAlgorithm|AuthDBDUserPWQuery|AuthDBDUserRealmQuery|AuthDBMGroupFile|AuthDBMType|AuthDBMUserFile|AuthDigestAlgorithm|AuthDigestDomain|AuthDigestNonceLifetime|AuthDigestProvider|AuthDigestQop|AuthDigestShmemSize|AuthFormAuthoritative|AuthFormBody|AuthFormDisableNoStore|AuthFormFakeBasicAuth|AuthFormLocation|AuthFormLoginRequiredLocation|AuthFormLoginSuccessLocation|AuthFormLogoutLocation|AuthFormMethod|AuthFormMimetype|AuthFormPassword|AuthFormProvider|AuthFormSitePassphrase|AuthFormSize|AuthFormUsername|AuthGroupFile|AuthLDAPAuthorizePrefix|AuthLDAPBindAuthoritative|AuthLDAPBindDN|AuthLDAPBindPassword|AuthLDAPCharsetConfig|AuthLDAPCompareAsUser|AuthLDAPCompareDNOnServer|AuthLDAPDereferenceAliases|AuthLDAPGroupAttribute|AuthLDAPGroupAttributeIsDN|AuthLDAPInitialBindAsUser|AuthLDAPInitialBindPattern|AuthLDAPMaxSubGroupDepth|AuthLDAPRemoteUserAttribute|AuthLDAPRemoteUserIsDN|AuthLDAPSearchAsUser|AuthLDAPSubGroupAttribute|AuthLDAPSubGroupClass|AuthLDAPUrl|AuthMerging|AuthName|AuthnCacheContext|AuthnCacheEnable|AuthnCacheProvideFor|AuthnCacheSOCache|AuthnCacheTimeout|AuthnzFcgiCheckAuthnProvider|AuthnzFcgiDefineProvider|AuthType|AuthUserFile|AuthzDBDLoginToReferer|AuthzDBDQuery|AuthzDBDRedirectQuery|AuthzDBMType|AuthzSendForbiddenOnFailure|BalancerGrowth|BalancerInherit|BalancerMember|BalancerPersist|BrowserMatch|BrowserMatchNoCase|BufferedLogs|BufferSize|CacheDefaultExpire|CacheDetailHeader|CacheDirLength|CacheDirLevels|CacheDisable|CacheEnable|CacheFile|CacheHeader|CacheIgnoreCacheControl|CacheIgnoreHeaders|CacheIgnoreNoLastMod|CacheIgnoreQueryString|CacheIgnoreURLSessionIdentifiers|CacheKeyBaseURL|CacheLastModifiedFactor|CacheLock|CacheLockMaxAge|CacheLockPath|CacheMaxExpire|CacheMaxFileSize|CacheMinExpire|CacheMinFileSize|CacheNegotiatedDocs|CacheQuickHandler|CacheReadSize|CacheReadTime|CacheRoot|CacheSocache|CacheSocacheMaxSize|CacheSocacheMaxTime|CacheSocacheMinTime|CacheSocacheReadSize|CacheSocacheReadTime|CacheStaleOnError|CacheStoreExpired|CacheStoreNoStore|CacheStorePrivate|CGIDScriptTimeout|CGIMapExtension|CharsetDefault|CharsetOptions|CharsetSourceEnc|CheckCaseOnly|CheckSpelling|ChrootDir|ContentDigest|CookieDomain|CookieExpires|CookieName|CookieStyle|CookieTracking|CoreDumpDirectory|CustomLog|Dav|DavDepthInfinity|DavGenericLockDB|DavLockDB|DavMinTimeout|DBDExptime|DBDInitSQL|DBDKeep|DBDMax|DBDMin|DBDParams|DBDPersist|DBDPrepareSQL|DBDriver|DefaultIcon|DefaultLanguage|DefaultRuntimeDir|DefaultType|Define|DeflateBufferSize|DeflateCompressionLevel|DeflateFilterNote|DeflateInflateLimitRequestBody|DeflateInflateRatioBurst|DeflateInflateRatioLimit|DeflateMemLevel|DeflateWindowSize|Deny|DirectoryCheckHandler|DirectoryIndex|DirectoryIndexRedirect|DirectorySlash|DocumentRoot|DTracePrivileges|DumpIOInput|DumpIOOutput|EnableExceptionHook|EnableMMAP|EnableSendfile|Error|ErrorDocument|ErrorLog|ErrorLogFormat|Example|ExpiresActive|ExpiresByType|ExpiresDefault|ExtendedStatus|ExtFilterDefine|ExtFilterOptions|FallbackResource|FileETag|FilterChain|FilterDeclare|FilterProtocol|FilterProvider|FilterTrace|ForceLanguagePriority|ForceType|ForensicLog|GprofDir|GracefulShutdownTimeout|Group|Header|HeaderName|HeartbeatAddress|HeartbeatListen|HeartbeatMaxServers|HeartbeatStorage|HeartbeatStorage|HostnameLookups|IdentityCheck|IdentityCheckTimeout|ImapBase|ImapDefault|ImapMenu|Include|IncludeOptional|IndexHeadInsert|IndexIgnore|IndexIgnoreReset|IndexOptions|IndexOrderDefault|IndexStyleSheet|InputSed|ISAPIAppendLogToErrors|ISAPIAppendLogToQuery|ISAPICacheFile|ISAPIFakeAsync|ISAPILogNotSupported|ISAPIReadAheadBuffer|KeepAlive|KeepAliveTimeout|KeptBodySize|LanguagePriority|LDAPCacheEntries|LDAPCacheTTL|LDAPConnectionPoolTTL|LDAPConnectionTimeout|LDAPLibraryDebug|LDAPOpCacheEntries|LDAPOpCacheTTL|LDAPReferralHopLimit|LDAPReferrals|LDAPRetries|LDAPRetryDelay|LDAPSharedCacheFile|LDAPSharedCacheSize|LDAPTimeout|LDAPTrustedClientCert|LDAPTrustedGlobalCert|LDAPTrustedMode|LDAPVerifyServerCert|LimitInternalRecursion|LimitRequestBody|LimitRequestFields|LimitRequestFieldSize|LimitRequestLine|LimitXMLRequestBody|Listen|ListenBackLog|LoadFile|LoadModule|LogFormat|LogLevel|LogMessage|LuaAuthzProvider|LuaCodeCache|LuaHookAccessChecker|LuaHookAuthChecker|LuaHookCheckUserID|LuaHookFixups|LuaHookInsertFilter|LuaHookLog|LuaHookMapToStorage|LuaHookTranslateName|LuaHookTypeChecker|LuaInherit|LuaInputFilter|LuaMapHandler|LuaOutputFilter|LuaPackageCPath|LuaPackagePath|LuaQuickHandler|LuaRoot|LuaScope|MaxConnectionsPerChild|MaxKeepAliveRequests|MaxMemFree|MaxRangeOverlaps|MaxRangeReversals|MaxRanges|MaxRequestWorkers|MaxSpareServers|MaxSpareThreads|MaxThreads|MergeTrailers|MetaDir|MetaFiles|MetaSuffix|MimeMagicFile|MinSpareServers|MinSpareThreads|MMapFile|ModemStandard|ModMimeUsePathInfo|MultiviewsMatch|Mutex|NameVirtualHost|NoProxy|NWSSLTrustedCerts|NWSSLUpgradeable|Options|Order|OutputSed|PassEnv|PidFile|PrivilegesMode|Protocol|ProtocolEcho|ProxyAddHeaders|ProxyBadHeader|ProxyBlock|ProxyDomain|ProxyErrorOverride|ProxyExpressDBMFile|ProxyExpressDBMType|ProxyExpressEnable|ProxyFtpDirCharset|ProxyFtpEscapeWildcards|ProxyFtpListOnWildcard|ProxyHTMLBufSize|ProxyHTMLCharsetOut|ProxyHTMLDocType|ProxyHTMLEnable|ProxyHTMLEvents|ProxyHTMLExtended|ProxyHTMLFixups|ProxyHTMLInterp|ProxyHTMLLinks|ProxyHTMLMeta|ProxyHTMLStripComments|ProxyHTMLURLMap|ProxyIOBufferSize|ProxyMaxForwards|ProxyPass|ProxyPassInherit|ProxyPassInterpolateEnv|ProxyPassMatch|ProxyPassReverse|ProxyPassReverseCookieDomain|ProxyPassReverseCookiePath|ProxyPreserveHost|ProxyReceiveBufferSize|ProxyRemote|ProxyRemoteMatch|ProxyRequests|ProxySCGIInternalRedirect|ProxySCGISendfile|ProxySet|ProxySourceAddress|ProxyStatus|ProxyTimeout|ProxyVia|ReadmeName|ReceiveBufferSize|Redirect|RedirectMatch|RedirectPermanent|RedirectTemp|ReflectorHeader|RemoteIPHeader|RemoteIPInternalProxy|RemoteIPInternalProxyList|RemoteIPProxiesHeader|RemoteIPTrustedProxy|RemoteIPTrustedProxyList|RemoveCharset|RemoveEncoding|RemoveHandler|RemoveInputFilter|RemoveLanguage|RemoveOutputFilter|RemoveType|RequestHeader|RequestReadTimeout|Require|RewriteBase|RewriteCond|RewriteEngine|RewriteMap|RewriteOptions|RewriteRule|RLimitCPU|RLimitMEM|RLimitNPROC|Satisfy|ScoreBoardFile|Script|ScriptAlias|ScriptAliasMatch|ScriptInterpreterSource|ScriptLog|ScriptLogBuffer|ScriptLogLength|ScriptSock|SecureListen|SeeRequestTail|SendBufferSize|ServerAdmin|ServerAlias|ServerLimit|ServerName|ServerPath|ServerRoot|ServerSignature|ServerTokens|Session|SessionCookieName|SessionCookieName2|SessionCookieRemove|SessionCryptoCipher|SessionCryptoDriver|SessionCryptoPassphrase|SessionCryptoPassphraseFile|SessionDBDCookieName|SessionDBDCookieName2|SessionDBDCookieRemove|SessionDBDDeleteLabel|SessionDBDInsertLabel|SessionDBDPerUser|SessionDBDSelectLabel|SessionDBDUpdateLabel|SessionEnv|SessionExclude|SessionHeader|SessionInclude|SessionMaxAge|SetEnv|SetEnvIf|SetEnvIfExpr|SetEnvIfNoCase|SetHandler|SetInputFilter|SetOutputFilter|SSIEndTag|SSIErrorMsg|SSIETag|SSILastModified|SSILegacyExprParser|SSIStartTag|SSITimeFormat|SSIUndefinedEcho|SSLCACertificateFile|SSLCACertificatePath|SSLCADNRequestFile|SSLCADNRequestPath|SSLCARevocationCheck|SSLCARevocationFile|SSLCARevocationPath|SSLCertificateChainFile|SSLCertificateFile|SSLCertificateKeyFile|SSLCipherSuite|SSLCompression|SSLCryptoDevice|SSLEngine|SSLFIPS|SSLHonorCipherOrder|SSLInsecureRenegotiation|SSLOCSPDefaultResponder|SSLOCSPEnable|SSLOCSPOverrideResponder|SSLOCSPResponderTimeout|SSLOCSPResponseMaxAge|SSLOCSPResponseTimeSkew|SSLOCSPUseRequestNonce|SSLOpenSSLConfCmd|SSLOptions|SSLPassPhraseDialog|SSLProtocol|SSLProxyCACertificateFile|SSLProxyCACertificatePath|SSLProxyCARevocationCheck|SSLProxyCARevocationFile|SSLProxyCARevocationPath|SSLProxyCheckPeerCN|SSLProxyCheckPeerExpire|SSLProxyCheckPeerName|SSLProxyCipherSuite|SSLProxyEngine|SSLProxyMachineCertificateChainFile|SSLProxyMachineCertificateFile|SSLProxyMachineCertificatePath|SSLProxyProtocol|SSLProxyVerify|SSLProxyVerifyDepth|SSLRandomSeed|SSLRenegBufferSize|SSLRequire|SSLRequireSSL|SSLSessionCache|SSLSessionCacheTimeout|SSLSessionTicketKeyFile|SSLSRPUnknownUserSeed|SSLSRPVerifierFile|SSLStaplingCache|SSLStaplingErrorCacheTimeout|SSLStaplingFakeTryLater|SSLStaplingForceURL|SSLStaplingResponderTimeout|SSLStaplingResponseMaxAge|SSLStaplingResponseTimeSkew|SSLStaplingReturnResponderErrors|SSLStaplingStandardCacheTimeout|SSLStrictSNIVHostCheck|SSLUserName|SSLUseStapling|SSLVerifyClient|SSLVerifyDepth|StartServers|StartThreads|Substitute|Suexec|SuexecUserGroup|ThreadLimit|ThreadsPerChild|ThreadStackSize|TimeOut|TraceEnable|TransferLog|TypesConfig|UnDefine|UndefMacro|UnsetEnv|Use|UseCanonicalName|UseCanonicalPhysicalPort|User|UserDir|VHostCGIMode|VHostCGIPrivs|VHostGroup|VHostPrivs|VHostSecure|VHostUser|VirtualDocumentRoot|VirtualDocumentRootIP|VirtualScriptAlias|VirtualScriptAliasIP|WatchdogInterval|XBitHack|xml2EncAlias|xml2EncDefault|xml2StartParse)\b/im,lookbehind:!0,alias:"property"},"directive-block":{pattern:/<\/?\b(AuthnProviderAlias|AuthzProviderAlias|Directory|DirectoryMatch|Else|ElseIf|Files|FilesMatch|If|IfDefine|IfModule|IfVersion|Limit|LimitExcept|Location|LocationMatch|Macro|Proxy|RequireAll|RequireAny|RequireNone|VirtualHost)\b *.*>/i,inside:{"directive-block":{pattern:/^<\/?\w+/,inside:{punctuation:/^<\/?/},alias:"tag"},"directive-block-parameter":{pattern:/.*[^>]/,inside:{punctuation:/:/,string:{pattern:/("|').*\1/,inside:{variable:/(\$|%)\{?(\w\.?(\+|\-|:)?)+\}?/}}},alias:"attr-value"},punctuation:/>/},alias:"tag"},"directive-flags":{pattern:/\[(\w,?)+\]/,alias:"keyword"},string:{pattern:/("|').*\1/,inside:{variable:/(\$|%)\{?(\w\.?(\+|\-|:)?)+\}?/}},variable:/(\$|%)\{?(\w\.?(\+|\-|:)?)+\}?/,regex:/\^?.*\$|\^.*\$?/};
!function(e){var t={variable:[{pattern:/\$?\(\([\w\W]+?\)\)/,inside:{variable:[{pattern:/(^\$\(\([\w\W]+)\)\)/,lookbehind:!0},/^\$\(\(/],number:/\b-?(?:0x[\dA-Fa-f]+|\d*\.?\d+(?:[Ee]-?\d+)?)\b/,operator:/--?|-=|\+\+?|\+=|!=?|~|\*\*?|\*=|\/=?|%=?|<<=?|>>=?|<=?|>=?|==?|&&?|&=|\^=?|\|\|?|\|=|\?|:/,punctuation:/\(\(?|\)\)?|,|;/}},{pattern:/\$\([^)]+\)|`[^`]+`/,inside:{variable:/^\$\(|^`|\)$|`$/}},/\$(?:[a-z0-9_#\?\*!@]+|\{[^}]+\})/i]};e.languages.bash={shebang:{pattern:/^#!\s*\/bin\/bash|^#!\s*\/bin\/sh/,alias:"important"},comment:{pattern:/(^|[^"{\\])#.*/,lookbehind:!0},string:[{pattern:/((?:^|[^<])<<\s*)(?:"|')?(\w+?)(?:"|')?\s*\r?\n(?:[\s\S])*?\r?\n\2/g,lookbehind:!0,inside:t},{pattern:/(["'])(?:\\\\|\\?[^\\])*?\1/g,inside:t}],variable:t.variable,"function":{pattern:/(^|\s|;|\||&)(?:alias|apropos|apt-get|aptitude|aspell|awk|basename|bash|bc|bg|builtin|bzip2|cal|cat|cd|cfdisk|chgrp|chmod|chown|chroot|chkconfig|cksum|clear|cmp|comm|command|cp|cron|crontab|csplit|cut|date|dc|dd|ddrescue|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|du|egrep|eject|enable|env|ethtool|eval|exec|expand|expect|export|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|getopts|git|grep|groupadd|groupdel|groupmod|groups|gzip|hash|head|help|hg|history|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|jobs|join|kill|killall|less|link|ln|locate|logname|logout|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|make|man|mkdir|mkfifo|mkisofs|mknod|more|most|mount|mtools|mtr|mv|mmv|nano|netstat|nice|nl|nohup|notify-send|nslookup|open|op|passwd|paste|pathchk|ping|pkill|popd|pr|printcap|printenv|printf|ps|pushd|pv|pwd|quota|quotacheck|quotactl|ram|rar|rcp|read|readarray|readonly|reboot|rename|renice|remsync|rev|rm|rmdir|rsync|screen|scp|sdiff|sed|seq|service|sftp|shift|shopt|shutdown|sleep|slocate|sort|source|split|ssh|stat|strace|su|sudo|sum|suspend|sync|tail|tar|tee|test|time|timeout|times|touch|top|traceroute|trap|tr|tsort|tty|type|ulimit|umask|umount|unalias|uname|unexpand|uniq|units|unrar|unshar|uptime|useradd|userdel|usermod|users|uuencode|uudecode|v|vdir|vi|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yes|zip)(?=$|\s|;|\||&)/,lookbehind:!0},keyword:{pattern:/(^|\s|;|\||&)(?:let|:|\.|if|then|else|elif|fi|for|break|continue|while|in|case|function|select|do|done|until|echo|exit|return|set|declare)(?=$|\s|;|\||&)/,lookbehind:!0},"boolean":{pattern:/(^|\s|;|\||&)(?:true|false)(?=$|\s|;|\||&)/,lookbehind:!0},operator:/&&?|\|\|?|==?|!=?|<<<?|>>|<=?|>=?|=~/,punctuation:/\$?\(\(?|\)\)?|\.\.|[{}[\];]/};var a=t.variable[1].inside;a["function"]=e.languages.bash["function"],a.keyword=e.languages.bash.keyword,a.boolean=e.languages.bash.boolean,a.operator=e.languages.bash.operator,a.punctuation=e.languages.bash.punctuation}(Prism);
Prism.languages.diff={coord:[/^(?:\*{3}|-{3}|\+{3}).*$/m,/^@@.*@@$/m,/^\d+.*$/m],deleted:/^[-<].+$/m,inserted:/^[+>].+$/m,diff:{pattern:/^!(?!!).+$/m,alias:"important"}};
Prism.languages.git={comment:/^#.*/m,deleted:/^[-–].*/m,inserted:/^\+.*/m,string:/("|')(\\?.)*?\1/m,command:{pattern:/^.*\$ git .*$/m,inside:{parameter:/\s(--|-)\w+/m}},coord:/^@@.*@@$/m,commit_sha1:/^commit \w{40}$/m};
Prism.languages.ini={comment:/^[ \t]*;.*$/m,important:/\[.*?\]/,constant:/^[ \t]*[^\s=]+?(?=[ \t]*=)/m,"attr-value":{pattern:/=.*/,inside:{punctuation:/^[=]/}}};
Prism.languages.json={property:/".*?"(?=\s*:)/gi,string:/"(?!:)(\\?[^"])*?"(?!:)/g,number:/\b-?(0x[\dA-Fa-f]+|\d*\.?\d+([Ee]-?\d+)?)\b/g,punctuation:/[{}[\]);,]/g,operator:/:/g,"boolean":/\b(true|false)\b/gi,"null":/\bnull\b/gi},Prism.languages.jsonp=Prism.languages.json;
Prism.languages.less=Prism.languages.extend("css",{comment:[/\/\*[\w\W]*?\*\//,{pattern:/(^|[^\\])\/\/.*/,lookbehind:!0}],atrule:{pattern:/@[\w-]+?(?:\([^{}]+\)|[^(){};])*?(?=\s*\{)/i,inside:{punctuation:/[:()]/}},selector:{pattern:/(?:@\{[\w-]+\}|[^{};\s@])(?:@\{[\w-]+\}|\([^{}]*\)|[^{};@])*?(?=\s*\{)/,inside:{variable:/@+[\w-]+/}},property:/(?:@\{[\w-]+\}|[\w-])+(?:\+_?)?(?=\s*:)/i,punctuation:/[{}();:,]/,operator:/[+\-*\/]/}),Prism.languages.insertBefore("less","punctuation",{"function":Prism.languages.less.function}),Prism.languages.insertBefore("less","property",{variable:[{pattern:/@[\w-]+\s*:/,inside:{punctuation:/:/}},/@@?[\w-]+/],"mixin-usage":{pattern:/([{;]\s*)[.#](?!\d)[\w-]+.*?(?=[(;])/,lookbehind:!0,alias:"function"}});
Prism.languages.nginx=Prism.languages.extend("clike",{comment:{pattern:/(^|[^"{\\])#.*/,lookbehind:!0},keyword:/\b(?:CONTENT_|DOCUMENT_|GATEWAY_|HTTP_|HTTPS|if_not_empty|PATH_|QUERY_|REDIRECT_|REMOTE_|REQUEST_|SCGI|SCRIPT_|SERVER_|http|server|events|location|include|accept_mutex|accept_mutex_delay|access_log|add_after_body|add_before_body|add_header|addition_types|aio|alias|allow|ancient_browser|ancient_browser_value|auth|auth_basic|auth_basic_user_file|auth_http|auth_http_header|auth_http_timeout|autoindex|autoindex_exact_size|autoindex_localtime|break|charset|charset_map|charset_types|chunked_transfer_encoding|client_body_buffer_size|client_body_in_file_only|client_body_in_single_buffer|client_body_temp_path|client_body_timeout|client_header_buffer_size|client_header_timeout|client_max_body_size|connection_pool_size|create_full_put_path|daemon|dav_access|dav_methods|debug_connection|debug_points|default_type|deny|devpoll_changes|devpoll_events|directio|directio_alignment|disable_symlinks|empty_gif|env|epoll_events|error_log|error_page|expires|fastcgi_buffer_size|fastcgi_buffers|fastcgi_busy_buffers_size|fastcgi_cache|fastcgi_cache_bypass|fastcgi_cache_key|fastcgi_cache_lock|fastcgi_cache_lock_timeout|fastcgi_cache_methods|fastcgi_cache_min_uses|fastcgi_cache_path|fastcgi_cache_purge|fastcgi_cache_use_stale|fastcgi_cache_valid|fastcgi_connect_timeout|fastcgi_hide_header|fastcgi_ignore_client_abort|fastcgi_ignore_headers|fastcgi_index|fastcgi_intercept_errors|fastcgi_keep_conn|fastcgi_max_temp_file_size|fastcgi_next_upstream|fastcgi_no_cache|fastcgi_param|fastcgi_pass|fastcgi_pass_header|fastcgi_read_timeout|fastcgi_redirect_errors|fastcgi_send_timeout|fastcgi_split_path_info|fastcgi_store|fastcgi_store_access|fastcgi_temp_file_write_size|fastcgi_temp_path|flv|geo|geoip_city|geoip_country|google_perftools_profiles|gzip|gzip_buffers|gzip_comp_level|gzip_disable|gzip_http_version|gzip_min_length|gzip_proxied|gzip_static|gzip_types|gzip_vary|if|if_modified_since|ignore_invalid_headers|image_filter|image_filter_buffer|image_filter_jpeg_quality|image_filter_sharpen|image_filter_transparency|imap_capabilities|imap_client_buffer|include|index|internal|ip_hash|keepalive|keepalive_disable|keepalive_requests|keepalive_timeout|kqueue_changes|kqueue_events|large_client_header_buffers|limit_conn|limit_conn_log_level|limit_conn_zone|limit_except|limit_rate|limit_rate_after|limit_req|limit_req_log_level|limit_req_zone|limit_zone|lingering_close|lingering_time|lingering_timeout|listen|location|lock_file|log_format|log_format_combined|log_not_found|log_subrequest|map|map_hash_bucket_size|map_hash_max_size|master_process|max_ranges|memcached_buffer_size|memcached_connect_timeout|memcached_next_upstream|memcached_pass|memcached_read_timeout|memcached_send_timeout|merge_slashes|min_delete_depth|modern_browser|modern_browser_value|mp4|mp4_buffer_size|mp4_max_buffer_size|msie_padding|msie_refresh|multi_accept|open_file_cache|open_file_cache_errors|open_file_cache_min_uses|open_file_cache_valid|open_log_file_cache|optimize_server_names|override_charset|pcre_jit|perl|perl_modules|perl_require|perl_set|pid|pop3_auth|pop3_capabilities|port_in_redirect|post_action|postpone_output|protocol|proxy|proxy_buffer|proxy_buffer_size|proxy_buffering|proxy_buffers|proxy_busy_buffers_size|proxy_cache|proxy_cache_bypass|proxy_cache_key|proxy_cache_lock|proxy_cache_lock_timeout|proxy_cache_methods|proxy_cache_min_uses|proxy_cache_path|proxy_cache_use_stale|proxy_cache_valid|proxy_connect_timeout|proxy_cookie_domain|proxy_cookie_path|proxy_headers_hash_bucket_size|proxy_headers_hash_max_size|proxy_hide_header|proxy_http_version|proxy_ignore_client_abort|proxy_ignore_headers|proxy_intercept_errors|proxy_max_temp_file_size|proxy_method|proxy_next_upstream|proxy_no_cache|proxy_pass|proxy_pass_error_message|proxy_pass_header|proxy_pass_request_body|proxy_pass_request_headers|proxy_read_timeout|proxy_redirect|proxy_redirect_errors|proxy_send_lowat|proxy_send_timeout|proxy_set_body|proxy_set_header|proxy_ssl_session_reuse|proxy_store|proxy_store_access|proxy_temp_file_write_size|proxy_temp_path|proxy_timeout|proxy_upstream_fail_timeout|proxy_upstream_max_fails|random_index|read_ahead|real_ip_header|recursive_error_pages|request_pool_size|reset_timedout_connection|resolver|resolver_timeout|return|rewrite|root|rtsig_overflow_events|rtsig_overflow_test|rtsig_overflow_threshold|rtsig_signo|satisfy|satisfy_any|secure_link_secret|send_lowat|send_timeout|sendfile|sendfile_max_chunk|server|server_name|server_name_in_redirect|server_names_hash_bucket_size|server_names_hash_max_size|server_tokens|set|set_real_ip_from|smtp_auth|smtp_capabilities|so_keepalive|source_charset|split_clients|ssi|ssi_silent_errors|ssi_types|ssi_value_length|ssl|ssl_certificate|ssl_certificate_key|ssl_ciphers|ssl_client_certificate|ssl_crl|ssl_dhparam|ssl_engine|ssl_prefer_server_ciphers|ssl_protocols|ssl_session_cache|ssl_session_timeout|ssl_verify_client|ssl_verify_depth|starttls|stub_status|sub_filter|sub_filter_once|sub_filter_types|tcp_nodelay|tcp_nopush|timeout|timer_resolution|try_files|types|types_hash_bucket_size|types_hash_max_size|underscores_in_headers|uninitialized_variable_warn|upstream|use|user|userid|userid_domain|userid_expires|userid_name|userid_p3p|userid_path|userid_service|valid_referers|variables_hash_bucket_size|variables_hash_max_size|worker_connections|worker_cpu_affinity|worker_priority|worker_processes|worker_rlimit_core|worker_rlimit_nofile|worker_rlimit_sigpending|working_directory|xclient|xml_entities|xslt_entities|xslt_stylesheet|xslt_types)\b/i}),Prism.languages.insertBefore("nginx","keyword",{variable:/\$[a-z_]+/i});
Prism.languages.php=Prism.languages.extend("clike",{keyword:/\b(and|or|xor|array|as|break|case|cfunction|class|const|continue|declare|default|die|do|else|elseif|enddeclare|endfor|endforeach|endif|endswitch|endwhile|extends|for|foreach|function|include|include_once|global|if|new|return|static|switch|use|require|require_once|var|while|abstract|interface|public|implements|private|protected|parent|throw|null|echo|print|trait|namespace|final|yield|goto|instanceof|finally|try|catch)\b/i,constant:/\b[A-Z0-9_]{2,}\b/,comment:{pattern:/(^|[^\\])(?:\/\*[\w\W]*?\*\/|\/\/.*)/,lookbehind:!0}}),Prism.languages.insertBefore("php","class-name",{"shell-comment":{pattern:/(^|[^\\])#.*/,lookbehind:!0,alias:"comment"}}),Prism.languages.insertBefore("php","keyword",{delimiter:/\?>|<\?(?:php)?/i,variable:/\$\w+\b/i,"package":{pattern:/(\\|namespace\s+|use\s+)[\w\\]+/,lookbehind:!0,inside:{punctuation:/\\/}}}),Prism.languages.insertBefore("php","operator",{property:{pattern:/(->)[\w]+/,lookbehind:!0}}),Prism.languages.markup&&(Prism.hooks.add("before-highlight",function(e){"php"===e.language&&(e.tokenStack=[],e.backupCode=e.code,e.code=e.code.replace(/(?:<\?php|<\?)[\w\W]*?(?:\?>)/gi,function(a){return e.tokenStack.push(a),"{{{PHP"+e.tokenStack.length+"}}}"}))}),Prism.hooks.add("before-insert",function(e){"php"===e.language&&(e.code=e.backupCode,delete e.backupCode)}),Prism.hooks.add("after-highlight",function(e){if("php"===e.language){for(var a,n=0;a=e.tokenStack[n];n++)e.highlightedCode=e.highlightedCode.replace("{{{PHP"+(n+1)+"}}}",Prism.highlight(a,e.grammar,"php").replace(/\$/g,"$$$$"));e.element.innerHTML=e.highlightedCode}}),Prism.hooks.add("wrap",function(e){"php"===e.language&&"markup"===e.type&&(e.content=e.content.replace(/(\{\{\{PHP[0-9]+\}\}\})/g,'<span class="token php">$1</span>'))}),Prism.languages.insertBefore("php","comment",{markup:{pattern:/<[^?]\/?(.*?)>/,inside:Prism.languages.markup},php:/\{\{\{PHP[0-9]+\}\}\}/}));
Prism.languages.insertBefore("php","variable",{"this":/\$this\b/,global:/\$(?:_(?:SERVER|GET|POST|FILES|REQUEST|SESSION|ENV|COOKIE)|GLOBALS|HTTP_RAW_POST_DATA|argc|argv|php_errormsg|http_response_header)/,scope:{pattern:/\b[\w\\]+::/,inside:{keyword:/(static|self|parent)/,punctuation:/(::|\\)/}}});
!function(e){e.languages.sass=e.languages.extend("css",{comment:{pattern:/^([ \t]*)\/[\/*].*(?:(?:\r?\n|\r)\1[ \t]+.+)*/m,lookbehind:!0}}),e.languages.insertBefore("sass","atrule",{"atrule-line":{pattern:/^(?:[ \t]*)[@+=].+/m,inside:{atrule:/(?:@[\w-]+|[+=])/m}}}),delete e.languages.sass.atrule;var a=/((\$[-_\w]+)|(#\{\$[-_\w]+\}))/i,t=[/[+*\/%]|[=!]=|<=?|>=?|\b(?:and|or|not)\b/,{pattern:/(\s+)-(?=\s)/,lookbehind:!0}];e.languages.insertBefore("sass","property",{"variable-line":{pattern:/^[ \t]*\$.+/m,inside:{punctuation:/:/,variable:a,operator:t}},"property-line":{pattern:/^[ \t]*(?:[^:\s]+ *:.*|:[^:\s]+.*)/m,inside:{property:[/[^:\s]+(?=\s*:)/,{pattern:/(:)[^:\s]+/,lookbehind:!0}],punctuation:/:/,variable:a,operator:t,important:e.languages.sass.important}}}),delete e.languages.sass.property,delete e.languages.sass.important,delete e.languages.sass.selector,e.languages.insertBefore("sass","punctuation",{selector:{pattern:/([ \t]*)\S(?:,?[^,\r\n]+)*(?:,(?:\r?\n|\r)\1[ \t]+\S(?:,?[^,\r\n]+)*)*/,lookbehind:!0}})}(Prism);
Prism.languages.scss=Prism.languages.extend("css",{comment:{pattern:/(^|[^\\])(?:\/\*[\w\W]*?\*\/|\/\/.*)/,lookbehind:!0},atrule:{pattern:/@[\w-]+(?:\([^()]+\)|[^(])*?(?=\s+[{;])/,inside:{rule:/@[\w-]+/}},url:/(?:[-a-z]+-)*url(?=\()/i,selector:{pattern:/(?=\S)[^@;\{\}\(\)]?([^@;\{\}\(\)]|&|#\{\$[-_\w]+\})+(?=\s*\{(\}|\s|[^\}]+(:|\{)[^\}]+))/m,inside:{placeholder:/%[-_\w]+/}}}),Prism.languages.insertBefore("scss","atrule",{keyword:[/@(?:if|else(?: if)?|for|each|while|import|extend|debug|warn|mixin|include|function|return|content)/i,{pattern:/( +)(?:from|through)(?= )/,lookbehind:!0}]}),Prism.languages.insertBefore("scss","property",{variable:/\$[-_\w]+|#\{\$[-_\w]+\}/}),Prism.languages.insertBefore("scss","function",{placeholder:{pattern:/%[-_\w]+/,alias:"selector"},statement:/\B!(?:default|optional)\b/i,"boolean":/\b(?:true|false)\b/,"null":/\bnull\b/,operator:{pattern:/(\s)(?:[-+*\/%]|[=!]=|<=?|>=?|and|or|not)(?=\s)/,lookbehind:!0}}),Prism.languages.scss.atrule.inside.rest=Prism.util.clone(Prism.languages.scss);
Prism.languages.sql={comment:{pattern:/(^|[^\\])(?:\/\*[\w\W]*?\*\/|(?:--|\/\/|#).*)/,lookbehind:!0},string:{pattern:/(^|[^@\\])("|')(?:\\?[\s\S])*?\2/,lookbehind:!0},variable:/@[\w.$]+|@("|'|`)(?:\\?[\s\S])+?\1/,"function":/\b(?:COUNT|SUM|AVG|MIN|MAX|FIRST|LAST|UCASE|LCASE|MID|LEN|ROUND|NOW|FORMAT)(?=\s*\()/i,keyword:/\b(?:ACTION|ADD|AFTER|ALGORITHM|ALL|ALTER|ANALYZE|ANY|APPLY|AS|ASC|AUTHORIZATION|BACKUP|BDB|BEGIN|BERKELEYDB|BIGINT|BINARY|BIT|BLOB|BOOL|BOOLEAN|BREAK|BROWSE|BTREE|BULK|BY|CALL|CASCADED?|CASE|CHAIN|CHAR VARYING|CHARACTER (?:SET|VARYING)|CHARSET|CHECK|CHECKPOINT|CLOSE|CLUSTERED|COALESCE|COLLATE|COLUMN|COLUMNS|COMMENT|COMMIT|COMMITTED|COMPUTE|CONNECT|CONSISTENT|CONSTRAINT|CONTAINS|CONTAINSTABLE|CONTINUE|CONVERT|CREATE|CROSS|CURRENT(?:_DATE|_TIME|_TIMESTAMP|_USER)?|CURSOR|DATA(?:BASES?)?|DATETIME|DBCC|DEALLOCATE|DEC|DECIMAL|DECLARE|DEFAULT|DEFINER|DELAYED|DELETE|DENY|DESC|DESCRIBE|DETERMINISTIC|DISABLE|DISCARD|DISK|DISTINCT|DISTINCTROW|DISTRIBUTED|DO|DOUBLE(?: PRECISION)?|DROP|DUMMY|DUMP(?:FILE)?|DUPLICATE KEY|ELSE|ENABLE|ENCLOSED BY|END|ENGINE|ENUM|ERRLVL|ERRORS|ESCAPE(?:D BY)?|EXCEPT|EXEC(?:UTE)?|EXISTS|EXIT|EXPLAIN|EXTENDED|FETCH|FIELDS|FILE|FILLFACTOR|FIRST|FIXED|FLOAT|FOLLOWING|FOR(?: EACH ROW)?|FORCE|FOREIGN|FREETEXT(?:TABLE)?|FROM|FULL|FUNCTION|GEOMETRY(?:COLLECTION)?|GLOBAL|GOTO|GRANT|GROUP|HANDLER|HASH|HAVING|HOLDLOCK|IDENTITY(?:_INSERT|COL)?|IF|IGNORE|IMPORT|INDEX|INFILE|INNER|INNODB|INOUT|INSERT|INT|INTEGER|INTERSECT|INTO|INVOKER|ISOLATION LEVEL|JOIN|KEYS?|KILL|LANGUAGE SQL|LAST|LEFT|LIMIT|LINENO|LINES|LINESTRING|LOAD|LOCAL|LOCK|LONG(?:BLOB|TEXT)|MATCH(?:ED)?|MEDIUM(?:BLOB|INT|TEXT)|MERGE|MIDDLEINT|MODIFIES SQL DATA|MODIFY|MULTI(?:LINESTRING|POINT|POLYGON)|NATIONAL(?: CHAR VARYING| CHARACTER(?: VARYING)?| VARCHAR)?|NATURAL|NCHAR(?: VARCHAR)?|NEXT|NO(?: SQL|CHECK|CYCLE)?|NONCLUSTERED|NULLIF|NUMERIC|OFF?|OFFSETS?|ON|OPEN(?:DATASOURCE|QUERY|ROWSET)?|OPTIMIZE|OPTION(?:ALLY)?|ORDER|OUT(?:ER|FILE)?|OVER|PARTIAL|PARTITION|PERCENT|PIVOT|PLAN|POINT|POLYGON|PRECEDING|PRECISION|PREV|PRIMARY|PRINT|PRIVILEGES|PROC(?:EDURE)?|PUBLIC|PURGE|QUICK|RAISERROR|READ(?:S SQL DATA|TEXT)?|REAL|RECONFIGURE|REFERENCES|RELEASE|RENAME|REPEATABLE|REPLICATION|REQUIRE|RESTORE|RESTRICT|RETURNS?|REVOKE|RIGHT|ROLLBACK|ROUTINE|ROW(?:COUNT|GUIDCOL|S)?|RTREE|RULE|SAVE(?:POINT)?|SCHEMA|SELECT|SERIAL(?:IZABLE)?|SESSION(?:_USER)?|SET(?:USER)?|SHARE MODE|SHOW|SHUTDOWN|SIMPLE|SMALLINT|SNAPSHOT|SOME|SONAME|START(?:ING BY)?|STATISTICS|STATUS|STRIPED|SYSTEM_USER|TABLES?|TABLESPACE|TEMP(?:ORARY|TABLE)?|TERMINATED BY|TEXT(?:SIZE)?|THEN|TIMESTAMP|TINY(?:BLOB|INT|TEXT)|TOP?|TRAN(?:SACTIONS?)?|TRIGGER|TRUNCATE|TSEQUAL|TYPES?|UNBOUNDED|UNCOMMITTED|UNDEFINED|UNION|UNIQUE|UNPIVOT|UPDATE(?:TEXT)?|USAGE|USE|USER|USING|VALUES?|VAR(?:BINARY|CHAR|CHARACTER|YING)|VIEW|WAITFOR|WARNINGS|WHEN|WHERE|WHILE|WITH(?: ROLLUP|IN)?|WORK|WRITE(?:TEXT)?)\b/i,"boolean":/\b(?:TRUE|FALSE|NULL)\b/i,number:/\b-?(?:0x)?\d*\.?[\da-f]+\b/,operator:/[-+*\/=%^~]|&&?|\|?\||!=?|<(?:=>?|<|>)?|>[>=]?|\b(?:AND|BETWEEN|IN|LIKE|NOT|OR|IS|DIV|REGEXP|RLIKE|SOUNDS LIKE|XOR)\b/i,punctuation:/[;[\]()`,.]/};
Prism.languages.twig={comment:/\{#[\s\S]*?#\}/,tag:{pattern:/\{\{[\s\S]*?\}\}|\{%[\s\S]*?%\}/,inside:{ld:{pattern:/^(?:\{\{\-?|\{%\-?\s*\w+)/,inside:{punctuation:/^(?:\{\{|\{%)\-?/,keyword:/\w+/}},rd:{pattern:/\-?(?:%\}|\}\})$/,inside:{punctuation:/.*/}},string:{pattern:/("|')(?:\\?.)*?\1/,inside:{punctuation:/^['"]|['"]$/}},keyword:/\b(?:even|if|odd)\b/,"boolean":/\b(?:true|false|null)\b/,number:/\b-?(?:0x[\dA-Fa-f]+|\d*\.?\d+([Ee][-+]?\d+)?)\b/,operator:[{pattern:/(\s)(?:and|b\-and|b\-xor|b\-or|ends with|in|is|matches|not|or|same as|starts with)(?=\s)/,lookbehind:!0},/[=<>]=?|!=|\*\*?|\/\/?|\?:?|[-+~%|]/],property:/\b[a-zA-Z_][a-zA-Z0-9_]*\b/,punctuation:/[()\[\]{}:.,]/}},other:{pattern:/\S(?:[\s\S]*\S)?/,inside:Prism.languages.markup}};
Prism.languages.yaml={scalar:{pattern:/([\-:]\s*(![^\s]+)?[ \t]*[|>])[ \t]*(?:((?:\r?\n|\r)[ \t]+)[^\r\n]+(?:\3[^\r\n]+)*)/,lookbehind:!0,alias:"string"},comment:/#.*/,key:{pattern:/(\s*[:\-,[{\r\n?][ \t]*(![^\s]+)?[ \t]*)[^\r\n{[\]},#]+?(?=\s*:\s)/,lookbehind:!0,alias:"atrule"},directive:{pattern:/(^[ \t]*)%.+/m,lookbehind:!0,alias:"important"},datetime:{pattern:/([:\-,[{]\s*(![^\s]+)?[ \t]*)(\d{4}-\d\d?-\d\d?([tT]|[ \t]+)\d\d?:\d{2}:\d{2}(\.\d*)?[ \t]*(Z|[-+]\d\d?(:\d{2})?)?|\d{4}-\d{2}-\d{2}|\d\d?:\d{2}(:\d{2}(\.\d*)?)?)(?=[ \t]*($|,|]|}))/m,lookbehind:!0,alias:"number"},"boolean":{pattern:/([:\-,[{]\s*(![^\s]+)?[ \t]*)(true|false)[ \t]*(?=$|,|]|})/im,lookbehind:!0,alias:"important"},"null":{pattern:/([:\-,[{]\s*(![^\s]+)?[ \t]*)(null|~)[ \t]*(?=$|,|]|})/im,lookbehind:!0,alias:"important"},string:{pattern:/([:\-,[{]\s*(![^\s]+)?[ \t]*)("(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*')(?=[ \t]*($|,|]|}))/m,lookbehind:!0},number:{pattern:/([:\-,[{]\s*(![^\s]+)?[ \t]*)[+\-]?(0x[\da-f]+|0o[0-7]+|(\d+\.?\d*|\.?\d+)(e[\+\-]?\d+)?|\.inf|\.nan)[ \t]*(?=$|,|]|})/im,lookbehind:!0},tag:/![^\s]+/,important:/[&*][\w]+/,punctuation:/---|[:[\]{}\-,|>?]|\.\.\./};
!function(){"undefined"!=typeof self&&!self.Prism||"undefined"!=typeof global&&!global.Prism||Prism.hooks.add("wrap",function(e){"keyword"===e.type&&e.classes.push("keyword-"+e.content)})}();
!function(){if("undefined"!=typeof self&&self.Prism&&self.document&&Function.prototype.bind){var t=function(t){var e=0,s=0,i=t;if(i.parentNode){do e+=i.offsetLeft,s+=i.offsetTop;while((i=i.offsetParent)&&i.nodeType<9);i=t;do e-=i.scrollLeft,s-=i.scrollTop;while((i=i.parentNode)&&!/body/i.test(i.nodeName))}return{top:s,right:innerWidth-e-t.offsetWidth,bottom:innerHeight-s-t.offsetHeight,left:e}},e=/(?:^|\s)token(?=$|\s)/,s=/(?:^|\s)active(?=$|\s)/g,i=/(?:^|\s)flipped(?=$|\s)/g,o=function(t,e,s,i){this._elt=null,this._type=t,this._clsRegexp=RegExp("(?:^|\\s)"+t+"(?=$|\\s)"),this._token=null,this.updater=e,this._mouseout=this.mouseout.bind(this),this.initializer=i;var n=this;s||(s=["*"]),"Array"!==Prism.util.type(s)&&(s=[s]),s.forEach(function(t){"string"!=typeof t&&(t=t.lang),o.byLanguages[t]||(o.byLanguages[t]=[]),o.byLanguages[t].indexOf(n)<0&&o.byLanguages[t].push(n)}),o.byType[t]=this};o.prototype.init=function(){this._elt||(this._elt=document.createElement("div"),this._elt.className="prism-previewer prism-previewer-"+this._type,document.body.appendChild(this._elt),this.initializer&&this.initializer())},o.prototype.check=function(t){do if(e.test(t.className)&&this._clsRegexp.test(t.className))break;while(t=t.parentNode);t&&t!==this._token&&(this._token=t,this.show())},o.prototype.mouseout=function(){this._token.removeEventListener("mouseout",this._mouseout,!1),this._token=null,this.hide()},o.prototype.show=function(){if(this._elt||this.init(),this._token)if(this.updater.call(this._elt,this._token.textContent)){this._token.addEventListener("mouseout",this._mouseout,!1);var e=t(this._token);this._elt.className+=" active",e.top-this._elt.offsetHeight>0?(this._elt.className=this._elt.className.replace(i,""),this._elt.style.top=e.top+"px",this._elt.style.bottom=""):(this._elt.className+=" flipped",this._elt.style.bottom=e.bottom+"px",this._elt.style.top=""),this._elt.style.left=e.left+Math.min(200,this._token.offsetWidth/2)+"px"}else this.hide()},o.prototype.hide=function(){this._elt.className=this._elt.className.replace(s,"")},o.byLanguages={},o.byType={},o.initEvents=function(t,e){var s=[];o.byLanguages[e]&&(s=s.concat(o.byLanguages[e])),o.byLanguages["*"]&&(s=s.concat(o.byLanguages["*"])),t.addEventListener("mouseover",function(t){var e=t.target;s.forEach(function(t){t.check(e)})},!1)},Prism.plugins.Previewer=o,Prism.hooks.add("after-highlight",function(t){(o.byLanguages["*"]||o.byLanguages[t.language])&&o.initEvents(t.element,t.language)})}}();
!function(){if(("undefined"==typeof self||self.Prism)&&("undefined"==typeof global||global.Prism)){var e={css:!0,less:!0,markup:{lang:"markup",before:"punctuation",inside:"inside",root:Prism.languages.markup&&Prism.languages.markup.tag.inside["attr-value"]},sass:[{lang:"sass",before:"punctuation",inside:"inside",root:Prism.languages.sass&&Prism.languages.sass["variable-line"]},{lang:"sass",inside:"inside",root:Prism.languages.sass&&Prism.languages.sass["property-line"]}],scss:!0,stylus:[{lang:"stylus",before:"hexcode",inside:"rest",root:Prism.languages.stylus&&Prism.languages.stylus["property-declaration"].inside},{lang:"stylus",before:"hexcode",inside:"rest",root:Prism.languages.stylus&&Prism.languages.stylus["variable-declaration"].inside}]};Prism.hooks.add("before-highlight",function(a){if(a.language&&e[a.language]&&!e[a.language].initialized){var i=e[a.language];"Array"!==Prism.util.type(i)&&(i=[i]),i.forEach(function(i){var r,l,n,s;i===!0?(r="important",l=a.language,i=a.language):(r=i.before||"important",l=i.inside||i.lang,n=i.root||Prism.languages,s=i.skip,i=a.language),!s&&Prism.languages[i]&&(Prism.languages.insertBefore(l,r,{color:/\B#(?:[0-9a-f]{3}){1,2}\b|\b(?:rgb|hsl)\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*\)\B|\b(?:rgb|hsl)a\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*,\s*(?:0|0?\.\d+|1)\s*\)\B|\b(?:AliceBlue|AntiqueWhite|Aqua|Aquamarine|Azure|Beige|Bisque|Black|BlanchedAlmond|Blue|BlueViolet|Brown|BurlyWood|CadetBlue|Chartreuse|Chocolate|Coral|CornflowerBlue|Cornsilk|Crimson|Cyan|DarkBlue|DarkCyan|DarkGoldenRod|DarkGray|DarkGreen|DarkKhaki|DarkMagenta|DarkOliveGreen|DarkOrange|DarkOrchid|DarkRed|DarkSalmon|DarkSeaGreen|DarkSlateBlue|DarkSlateGray|DarkTurquoise|DarkViolet|DeepPink|DeepSkyBlue|DimGray|DodgerBlue|FireBrick|FloralWhite|ForestGreen|Fuchsia|Gainsboro|GhostWhite|Gold|GoldenRod|Gray|Green|GreenYellow|HoneyDew|HotPink|IndianRed|Indigo|Ivory|Khaki|Lavender|LavenderBlush|LawnGreen|LemonChiffon|LightBlue|LightCoral|LightCyan|LightGoldenRodYellow|LightGray|LightGreen|LightPink|LightSalmon|LightSeaGreen|LightSkyBlue|LightSlateGray|LightSteelBlue|LightYellow|Lime|LimeGreen|Linen|Magenta|Maroon|MediumAquaMarine|MediumBlue|MediumOrchid|MediumPurple|MediumSeaGreen|MediumSlateBlue|MediumSpringGreen|MediumTurquoise|MediumVioletRed|MidnightBlue|MintCream|MistyRose|Moccasin|NavajoWhite|Navy|OldLace|Olive|OliveDrab|Orange|OrangeRed|Orchid|PaleGoldenRod|PaleGreen|PaleTurquoise|PaleVioletRed|PapayaWhip|PeachPuff|Peru|Pink|Plum|PowderBlue|Purple|Red|RosyBrown|RoyalBlue|SaddleBrown|Salmon|SandyBrown|SeaGreen|SeaShell|Sienna|Silver|SkyBlue|SlateBlue|SlateGray|Snow|SpringGreen|SteelBlue|Tan|Teal|Thistle|Tomato|Turquoise|Violet|Wheat|White|WhiteSmoke|Yellow|YellowGreen)\b/i},n),a.grammar=Prism.languages[i],e[a.language]={initialized:!0})})}}),Prism.plugins.Previewer&&new Prism.plugins.Previewer("color",function(e){return this.style.backgroundColor="",this.style.backgroundColor=e,!!this.style.backgroundColor})}}();

;/*})'"*/
;/*})'"*/
/**
 * @file
 * Contains UX enchancements for codefilter.module.
 */

(function ($) {

  Drupal.behaviors.codefilter = {
    attach: function (context) {
      // Provide expanding text boxes when code blocks are too long.
      $(".codeblock.nowrap-expand", context).each(function () {
        var contents_width = $('code', this).width();
        var width = $(this).width();
        if (contents_width > width) {
          $(this).hover(
            function () {
              // Add a small right margin to width.
              $(this).animate({width: (contents_width + 20) + "px"}, 250, function () {
                $(this).css('overflow-x', 'visible');
              });
            },
            function () {
              $(this).css('overflow-x', 'hidden').animate({width: width + "px"}, 250);
            }
          );
        }
      });
    }
  }

})(jQuery);

;/*})'"*/
;/*})'"*/
/**
 * Timeago is a jQuery plugin that makes it easy to support automatically
 * updating fuzzy timestamps (e.g. "4 minutes ago" or "about 1 day ago").
 *
 * @name timeago
 * @version 1.4.1
 * @requires jQuery v1.2.3+
 * @author Ryan McGeary
 * @license MIT License - http://www.opensource.org/licenses/mit-license.php
 *
 * For usage and examples, visit:
 * http://timeago.yarp.com/
 *
 * Copyright (c) 2008-2013, Ryan McGeary (ryan -[at]- mcgeary [*dot*] org)
 */

(function (factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['jquery'], factory);
  } else {
    // Browser globals
    factory(jQuery);
  }
}(function ($) {
  $.timeago = function(timestamp) {
    if (timestamp instanceof Date) {
      return inWords(timestamp);
    } else if (typeof timestamp === "string") {
      return inWords($.timeago.parse(timestamp));
    } else if (typeof timestamp === "number") {
      return inWords(new Date(timestamp));
    } else {
      return inWords($.timeago.datetime(timestamp));
    }
  };
  var $t = $.timeago;

  $.extend($.timeago, {
    settings: {
      refreshMillis: 60000,
      allowPast: true,
      allowFuture: false,
      localeTitle: false,
      cutoff: 0,
      strings: {
        prefixAgo: null,
        prefixFromNow: null,
        suffixAgo: "ago",
        suffixFromNow: "from now",
        inPast: 'any moment now',
        seconds: "less than a minute",
        minute: "about a minute",
        minutes: "%d minutes",
        hour: "about an hour",
        hours: "about %d hours",
        day: "a day",
        days: "%d days",
        month: "about a month",
        months: "%d months",
        year: "about a year",
        years: "%d years",
        wordSeparator: " ",
        numbers: []
      }
    },

    inWords: function(distanceMillis) {
      if(!this.settings.allowPast && ! this.settings.allowFuture) {
          throw 'timeago allowPast and allowFuture settings can not both be set to false.';
      }

      var $l = this.settings.strings;
      var prefix = $l.prefixAgo;
      var suffix = $l.suffixAgo;
      if (this.settings.allowFuture) {
        if (distanceMillis < 0) {
          prefix = $l.prefixFromNow;
          suffix = $l.suffixFromNow;
        }
      }

      if(!this.settings.allowPast && distanceMillis >= 0) {
        return this.settings.strings.inPast;
      }

      var seconds = Math.abs(distanceMillis) / 1000;
      var minutes = seconds / 60;
      var hours = minutes / 60;
      var days = hours / 24;
      var years = days / 365;

      function substitute(stringOrFunction, number) {
        var string = $.isFunction(stringOrFunction) ? stringOrFunction(number, distanceMillis) : stringOrFunction;
        var value = ($l.numbers && $l.numbers[number]) || number;
        return string.replace(/%d/i, value);
      }

      var words = seconds < 45 && substitute($l.seconds, Math.round(seconds)) ||
        seconds < 90 && substitute($l.minute, 1) ||
        minutes < 45 && substitute($l.minutes, Math.round(minutes)) ||
        minutes < 90 && substitute($l.hour, 1) ||
        hours < 24 && substitute($l.hours, Math.round(hours)) ||
        hours < 42 && substitute($l.day, 1) ||
        days < 30 && substitute($l.days, Math.round(days)) ||
        days < 45 && substitute($l.month, 1) ||
        days < 365 && substitute($l.months, Math.round(days / 30)) ||
        years < 1.5 && substitute($l.year, 1) ||
        substitute($l.years, Math.round(years));

      var separator = $l.wordSeparator || "";
      if ($l.wordSeparator === undefined) { separator = " "; }
      return $.trim([prefix, words, suffix].join(separator));
    },

    parse: function(iso8601) {
      var s = $.trim(iso8601);
      s = s.replace(/\.\d+/,""); // remove milliseconds
      s = s.replace(/-/,"/").replace(/-/,"/");
      s = s.replace(/T/," ").replace(/Z/," UTC");
      s = s.replace(/([\+\-]\d\d)\:?(\d\d)/," $1$2"); // -04:00 -> -0400
      s = s.replace(/([\+\-]\d\d)$/," $100"); // +09 -> +0900
      return new Date(s);
    },
    datetime: function(elem) {
      var iso8601 = $t.isTime(elem) ? $(elem).attr("datetime") : $(elem).attr("title");
      return $t.parse(iso8601);
    },
    isTime: function(elem) {
      // jQuery's `is()` doesn't play well with HTML5 in IE
      return $(elem).get(0).tagName.toLowerCase() === "time"; // $(elem).is("time");
    }
  });

  // functions that can be called via $(el).timeago('action')
  // init is default when no action is given
  // functions are called with context of a single element
  var functions = {
    init: function(){
      var refresh_el = $.proxy(refresh, this);
      refresh_el();
      var $s = $t.settings;
      if ($s.refreshMillis > 0) {
        this._timeagoInterval = setInterval(refresh_el, $s.refreshMillis);
      }
    },
    update: function(time){
      var parsedTime = $t.parse(time);
      $(this).data('timeago', { datetime: parsedTime });
      if($t.settings.localeTitle) $(this).attr("title", parsedTime.toLocaleString());
      refresh.apply(this);
    },
    updateFromDOM: function(){
      $(this).data('timeago', { datetime: $t.parse( $t.isTime(this) ? $(this).attr("datetime") : $(this).attr("title") ) });
      refresh.apply(this);
    },
    dispose: function () {
      if (this._timeagoInterval) {
        window.clearInterval(this._timeagoInterval);
        this._timeagoInterval = null;
      }
    }
  };

  $.fn.timeago = function(action, options) {
    var fn = action ? functions[action] : functions.init;
    if(!fn){
      throw new Error("Unknown function name '"+ action +"' for timeago");
    }
    // each over objects here and call the requested function
    this.each(function(){
      fn.call(this, options);
    });
    return this;
  };

  function refresh() {
    var data = prepareData(this);
    var $s = $t.settings;

    if (!isNaN(data.datetime)) {
      if ( $s.cutoff == 0 || Math.abs(distance(data.datetime)) < $s.cutoff) {
        $(this).text(inWords(data.datetime));
      }
    }
    return this;
  }

  function prepareData(element) {
    element = $(element);
    if (!element.data("timeago")) {
      element.data("timeago", { datetime: $t.datetime(element) });
      var text = $.trim(element.text());
      if ($t.settings.localeTitle) {
        element.attr("title", element.data('timeago').datetime.toLocaleString());
      } else if (text.length > 0 && !($t.isTime(element) && element.attr("title"))) {
        element.attr("title", text);
      }
    }
    return element.data("timeago");
  }

  function inWords(date) {
    return $t.inWords(distance(date));
  }

  function distance(date) {
    return (new Date().getTime() - date.getTime());
  }

  // fix for IE6 suckage
  document.createElement("abbr");
  document.createElement("time");
}));

;/*})'"*/
;/*})'"*/
(function ($) {

  // Enable Timago only if a user's browser has localStorage support.
  // They must be able to double click it to enable/disable at will.
  var localStorage = 'localStorage' in window && typeof window.localStorage !== 'undefined' && window['localStorage'] !== null;
  var timeagoEnabled = localStorage ? (typeof window.localStorage['drupalorgCommentTimeago'] !== 'undefined' && window.localStorage['drupalorgCommentTimeago'] === 'false' ? false : true) : false;

  // Callback for toggling timestamps between set dates and relative time.
  function toggleTimes () {
    var $element = $(this);

    // Retrieve the original created date.
    var createdDate = $element.attr('data-created-date');
    if (!createdDate) {
      createdDate = $element.text();
      $element.attr('data-created-date', createdDate);
    }

    // Determine which title to use.
    var title = timeagoEnabled ? Drupal.t('!created_date (click to toggle)', {
      '!created_date': createdDate
    }) : Drupal.t('Click to show time ago');

    // Configure the timestamp accordingly.
    $element
      .attr('title', title)
      .timeago(timeagoEnabled ? undefined : 'dispose')
      .text(!timeagoEnabled ? createdDate : undefined);
  }

  Drupal.behaviors.drupalorgCrosssite = {
    attach: function (context) {
      $(context).find('.comments').once('timeago', function () {
        var $times = $(this).find('.comment .submitted time');
        $times
          // Initialize all timestamps.
          .each(toggleTimes)
          // Click to toggle all timestamps at the same time.
          .bind('click', function () {
            timeagoEnabled = !timeagoEnabled;
            if (localStorage) {
              window.localStorage['drupalorgCommentTimeago'] = timeagoEnabled;
            }
            $times.each(toggleTimes);
          });
      });
    }
  };

  Drupal.behaviors.drupalorgCrosssiteCookieConsent = {
    attach: function (context) {
      var gdpr, gdprEdit;

      if (!(context instanceof HTMLDocument)) {
        return;
      }

      if (Drupal.drupalorgCrosssite.doNotTrack()) {
        return;
      }

      // Above header.
      if ((gdpr = context.getElementById('drupalorg-crosssite-gdpr')) && !gdpr.classList.contains('processed')) {
        gdpr.classList.add('processed');

        if (Drupal.drupalorgCrosssite.consentStatus() === null) {
          gdpr.classList.add('prompt');
          gdpr.addEventListener('click', function (e) {
            if (e.target.classList.contains('yes')) {
              Drupal.drupalorgCrosssite.setConsent(true);
            }
            else if (e.target.classList.contains('no')) {
              Drupal.drupalorgCrosssite.setConsent(false);
            }
            else {
              return;
            }
            gdpr.classList.remove('prompt');
          });
        }
      }
      // Edit on /terms.
      if ((gdprEdit = context.getElementById('drupalorg-crosssite-gdpr-edit')) && !gdprEdit.classList.contains('processed')) {
        gdprEdit.classList.add('processed');

        if (Drupal.drupalorgCrosssite.consentStatus() !== null) {
          gdprEdit.classList.add('prompt');
          gdprEdit.classList.add(Drupal.drupalorgCrosssite.consentStatus());
          gdprEdit.addEventListener('click', function (e) {
            if (e.target.classList.contains('yes')) {
              Drupal.drupalorgCrosssite.setConsent(true);
            }
            else if (e.target.classList.contains('no')) {
              Drupal.drupalorgCrosssite.setConsent(false);
            }
            else {
              return;
            }
            gdprEdit.classList.remove('optin', 'optout');
            gdprEdit.classList.add(Drupal.drupalorgCrosssite.consentStatus());
          });
        }
      }
    }
  };

  Drupal.drupalorgCrosssite = {
    doNotTrack: function () {
      return navigator.doNotTrack == "yes" || navigator.doNotTrack == "1" || navigator.msDoNotTrack == "1" || window.doNotTrack == "1";
    },
    consentStatus: function () {
      return $.cookie('cookieConsent');
    },
    canTrack: function () {
      return !this.doNotTrack() && (!Drupal.settings.drupalorgCrosssiteConsentNeeded || this.consentStatus() === 'optin');
    },
    setConsent: function (consent) {
      $.cookie('cookieConsent', consent ? 'optin' : 'optout', {
        expires: consent ? 365 : 0,
        path: '/',
        domain: document.domain.replace(/^.*((\.[^.]+){2})$/, '$1'),
        secure: true
      });
    }
  };

})(jQuery)

;/*})'"*/
;/*})'"*/
(function ($) {
  var issueForm = document.getElementById('project-issue-ajax-form');

  /**
   * A placeholder to save the currently focused input between AJAX requests.
   */
  Drupal.projectIssueFocusedInput = false;

  /**
   * Persistent input focus (retains the proper focus after AJAX replacements).
   */
  Drupal.behaviors.projectIssueFocusedInput = {
    attach: function (context) {
      var $context = $(context);
      var inputs = ':input:not([type="hidden"],:submit)';
      // Only bind a top level click event once to remove the stored focus if
      // element is not an input.
      $('body').once('project-issue-focused-input', function () {
        $(this).bind('mousedown', function (e) {
          if (!$(e.target).is(inputs)) {
            Drupal.projectIssueFocusedInput = false;
          }
        });
      });
      if (Drupal.projectIssueFocusedInput) {
        // Do not use $context here, focused input could not be part of it.
        $(':input[name="' + Drupal.projectIssueFocusedInput + '"]').focus();
      }
      // Bind various events on input elements to ensure we save the
      // proper currently focused element.
      var $inputs = $context.find(inputs)
        .bind({
          'keydown': function (e) {
            var code = (e.keyCode ? e.keyCode : e.which);
            // Detect tab keystroke.
            if (code === 9) {
              // Obtain the name of the next input element in the DOM
              // structure.
              Drupal.projectIssueFocusedInput = $inputs.eq(parseInt($inputs.index($(this)), 10) + 1).attr('name');
            }
          },
          'mousedown': function () {
            Drupal.projectIssueFocusedInput = $(this).attr('name');
          },
          'focus': function () {
            Drupal.projectIssueFocusedInput = $(this).attr('name');
          }
        });
    }
  };

  /**
   * Persistent issue fieldsets (keeps them open/closed between HTTP requests).
   */
  Drupal.behaviors.projectIssuePersistentFieldsets = {
    attach: function () {
      // Only continue if localStorage is supported in the browser.
      if ('localStorage' in window && typeof window.localStorage !== 'undefined' && window['localStorage'] !== null) {
        // Only bind once.
        $('#project-issue-ajax-form').once('issue-form', function () {
          var prefix = $(this).parents('[id]').attr('id');
          $('fieldset.collapsible', this).each(function() {
            var $fieldset = $(this);
            var id = prefix + '.' + $fieldset.attr('id');
            // If the ID of the fieldset is present in localStorage, change open status.
            if (typeof window.localStorage[id] !== 'undefined') {
              if (window.localStorage[id] == 'true') { // localStorage casts to string.
                $fieldset.removeClass('collapsed');
              }
              else {
                $fieldset.addClass('collapsed');
              }
            }
            // Bind the "collapsed" event to change the localStorage value.
            $fieldset.bind('collapsed', function(e) {
              window.localStorage[id] = !e.value;
            });
          });
        });
      }
    }
  };

  /**
   * Jump to the actual preview and the form.
   */
  if (issueForm !== null && issueForm.querySelector('.preview, table.diff') !== null) {
    window.location.hash = issueForm.id;
  }

  /**
   * Toggle issue tag descriptions.
   */
  Drupal.behaviors.projectIssueTagDescriptionToggle = {
    attach: function () {
      var link = document.querySelector('#about-tags-link:not(.project-issue-processed)'),
        descriptions;

      if (link) {
        link.classList.add('project-issue-processed');

        descriptions = link.parentElement.querySelector('#about-tags');
        descriptions.classList.toggle('element-invisible');
        link.addEventListener('click', function (e) {
          descriptions.classList.toggle('element-invisible');
          e.stopPropagation();
        });
        // Hide on click outside.
        document.addEventListener('click', function (e) {
          if (!descriptions.classList.contains('element-invisible') && !descriptions.contains(e.target)) {
            descriptions.classList.add('element-invisible');
          }
        });
      }
    }
  };

})(jQuery);

;/*})'"*/
;/*})'"*/
(function ($) {
  // Toggle Failing classes / All.
  Drupal.behaviors.piftToggle = {
    attach: function (context, settings) {
      var $checkstyleToggle = $('.pift-checkstyle-toggle:not(.pift-checkstyle-toggle-processed)', context).addClass('pift-checkstyle-toggle-processed').click(function (e) {
        $('.pift-ci-checkstyle').toggle();
        e.preventDefault();
      });
      if (location.hash && location.hash.match(/^#cs-/)) {
        $checkstyleToggle.click();
      }

      $('.pift-ci-toggle:not(.pift-ci-toggle-processed) a', context).click(function (e) {
        if (!this.classList.contains('active')) {
          var $parent = $(this).parent();
          $parent.find('a').toggleClass('active');
          $parent.siblings('.pift-ci-results').toggleClass('pift-ci-hide-all-pass');
        }
        e.preventDefault();
      }).parent().addClass('pift-ci-toggle-processed');
    }
  };

  Drupal.behaviors.piftUpload = {
    attach: function (context, settings) {
      if (settings.file && settings.file.elements) {
        $.each(settings.file.elements, function(selector) {
          var extensions = settings.file.elements[selector];
          $(selector, context).bind('change', {extensions: extensions}, Drupal.pift.fileSelected);
        });
      }
    },
    detach: function (context, settings) {
      if (settings.file && settings.file.elements) {
        $.each(settings.file.elements, function(selector) {
          $(selector, context).unbind('change', Drupal.pift.fileSelected);
        });
      }
    }
  };

  Drupal.pift = Drupal.pift || {
    fileSelected: function (event) {
      if (Drupal.settings.piftRegex) {
        // Enable “Test with” field if the file matches piftRegex.
        $(this).parent().find("select[name*='[pift]']").attr('disabled', !(new RegExp(Drupal.settings.piftRegex)).test(this.value));
        // Select Do not test if filename matches.
        if (/do[-_]not[-_]test/.test(this.value)) {
          $(this).parent().find("select[name*='[pift]']").val(0);
        }
      }
    }
  };
})(jQuery);

;/*})'"*/
;/*})'"*/
(function ($) {
  Drupal.behaviors.drupalorgSearch = {
    attach: function (context, settings) {
      $('body.page-search #content-top-region form:not(.drupalorgSearch-processed)', context).addClass('drupalorgSearch-processed').each(function () {
        var $this = $(this);
        $this.find('select').change(function () {
          $this.submit();
        });
      });
    }
  };

  /**
   * Marketplace listing pages.
   */
  Drupal.behaviors.drupalorgMarketplace = {
    attach: function () {
      $('.view-drupalorg-organizations:not(.drupalorgMarketplace-processed)').addClass('drupalorgMarketplace-processed')
        .find('ul').each(function () {
          var $showMore = $('.show-more', this).hide(),
            $showLink = $('.show-link', this),
            $hideLink = $('.hide-link', this);

          $showLink.show().click(function (e) {
            $showMore.show();
            $showLink.hide();
            $hideLink.show();
            e.preventDefault();
          });
          $hideLink.click(function (e) {
            $showMore.hide();
            $showLink.show();
            $hideLink.hide();
            e.preventDefault();
          });
        });
    }
  };

  /**
   * Randomize children, used on Hosting PaaS and Enterprise pages.
   */
  Drupal.behaviors.drupalorgRandom = {
    attach: function (context) {
      $('.drupalorg-random:not(.drupalorg-random-processed)', context).addClass('drupalorg-random-processed').each(function () {
        var $this = $(this),
          elements = $this.children().get();
        for (var j, x, i = elements.length; i; j = Math.floor(Math.random() * i), x = elements[--i], elements[i] = elements[j], elements[j] = x);
        $this.html(elements);
      });
    }
  };

  /**
   * Load block content from other sites.
   */
  Drupal.behaviors.drupalorgBlockLoad = {
    attach: function () {
      var $block = $('#drupalorg-security-issues-placeholder');
      if ($block.length > 0) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://security.drupal.org/dofeed', true);
        xhr.withCredentials = true;
        xhr.onload = function () {
          $block.parent().html(this.responseText);
        };
        xhr.send();
      }
    }
  };

  /**
   * Code to run after the document is ready.
   */
  $(document).ready(function () {
    var $body = $('body');

    // Comment attribution display. This is a global bind and must only be ran
    // once.
    $body.bind('click', function (e) {
      var $clicked = $('.attribution', $(e.target).filter('.attribution-label')).toggleClass('element-invisible');
      $('.attribution-label .attribution').not($clicked).addClass('element-invisible');
    })
    .bind('touchstart', function (e) {
      $('.attribution-label .attribution').not($('.attribution', $(e.target).filter('.attribution-label'))).addClass('element-invisible');
    })
    .bind('state:visible', function (e) {
      // Focus the newly-visible element, if the focus-on-visible class is set.
      // Wait a millisecond because the clicked element may want the focus.
      if (e.target.classList.contains('focus-on-visible')) {
        window.setTimeout(function () {e.target.focus();}, 1);
      }
    });
    // For potential link GA event tracking. Attach mousedown, keyup,
    // touchstart events to document only and catch clicks on all elements.
    // Based on googleanalytics.js.
    if (typeof Drupal.googleanalytics !== 'undefined') {
      $body.bind('mousedown keyup touchstart', function(event) {
        // Catch the closest surrounding link of a clicked element.
        $(event.target).closest('a,area').each(function() {
          var $this = $(this);

          // Is the clicked URL internal?
          if (Drupal.googleanalytics.isInternal(this.href)) {
            // Look for interesting classes.
            for (var c in {'page-up':0, 'page-previous':0, 'page-next':0, 'upload-button':0, 'issue-button':0}) {
              if (this.classList.contains(c)) {
                ga('send', 'event', 'Navigation', 'Click on ' + c, $this.text());
                return;
              }
            }
            // Look for parents with interesting classes.
            for (var c in {
              '.book-navigation':0, '#block-book-navigation':0, // Book navigation
              '#nav-content':0, '.breadcrumb':0, '.tabs.primary':0, // General navigation
              '#project-issue-jumplinks':0, // Issue pages
              '#block-versioncontrol-project-project-maintainers':0, '#block-project-issue-issue-cockpit':0, // Project pages
              '#block-drupalorg-project-resources':0, '#block-drupalorg-project-development':0,
              '.project-info':0, '.view_all_releases':0, '.add_new_release':0, '.administer_releases':0
            }) {
              if ($this.parents(c).length) {
                ga('send', 'event', 'Navigation', 'Click on ' + c, $this.text());
                return;
              }
            }
          }
          else { // External link.
            // Look for interesting classes.
            for (var c in {'cke_button':0}) {
              if (this.classList.contains(c)) {
                ga('send', 'event', 'Navigation', 'Click on ' + c, $this.text());
                return;
              }
            }
            // Look for parents with interesting classes.
            for (var c in {
              // Membership campaign.
              '#block-drupalorg-membership-campaign':0
            }) {
              if ($this.parents(c).length) {
                ga('send', 'event', 'Navigation', 'Click on ' + c, $this.text());
                return;
              }
            }
          }
        });
      });
    }
  });

  /**
   * Issue comment attribution. See drupalorg_form_node_form_alter();
   */
  Drupal.behaviors.drupalorgIssueCommentAttribution = {
    attach: function (context) {
      // Comment attribution form.
      $('.group-issue-attribution', context).once('drupalorg-issue-comment-attribution', function () {
        var $fieldset = $(this),
          $summary = $(Drupal.settings.drupalOrg.defaultCommentAttribution),
          $notVolunteer = $('.field-name-field-attribute-as-volunteer .form-checkbox[value=0]', $fieldset),
          $attributeContributionTo = $('.field-name-field-attribute-contribution-to', $fieldset).attr('tabindex', 0).hide(),
          $attributeContributionToFields = $('input', $attributeContributionTo).change(function (e) {
            if (e.target.checked) {
              $notVolunteer.attr('checked', 'checked');
            }
          }),
          $summaryOrganization = $('.organization', $summary).click(function (e) {
            // Position & show bubble.
            $attributeContributionTo.css({
              'left': Math.max(0, $summaryOrganization.position().left + ($summaryOrganization.outerWidth() - $attributeContributionTo.outerWidth()) / 2) + 'px',
              'top': $summaryOrganization.position().top + $summaryOrganization.outerHeight() + 'px'
            }).show();
            $('.field-name-field-attribute-contribution-to button').focus();
            e.preventDefault();
          }),
          $forCustomer = $('.field-name-field-for-customer', $fieldset).attr('tabindex', 0).hide(),
          $forCustomerField = $('.form-text', $forCustomer).change(function (e) {
            if (e.target.value !== '') {
              $notVolunteer.attr('checked', 'checked');
            }
          }),
          $customerSuggestions = $('.customer-suggestion', $forCustomer).click(function (e) {
            // Add clicked suggestion.
            var newValue = $forCustomerField.val();
            if (newValue.length) {
              newValue += ', ';
            }
            $forCustomerField.val(newValue + $(e.target).data('string')).trigger('change');
            e.preventDefault();
          }),
          $summaryCustomer = $('.customer', $summary).click(function (e) {
            // Position & show bubble.
            $forCustomer.css({
              'left': Math.max(0, $summaryCustomer.position().left + ($summaryCustomer.outerWidth() - $forCustomer.outerWidth()) / 2) + 'px',
              'top': $summaryCustomer.position().top + $summaryCustomer.outerHeight() + 'px'
            }).show();
            $('.field-name-field-for-customer button').focus();
            e.preventDefault();
          });

        // Hide bubbles on clicks outside.
        $('body').click(function (e) {
          if ($summaryOrganization.get(0) !== e.target) {
            $attributeContributionTo.hide();
            // If an element in the bubble was the target, return focus to summary.
            if ($(e.target).parents().get().indexOf($attributeContributionTo.get(0)) !== -1) {
              $summaryOrganization.focus();
            }
          }
          if ($summaryCustomer.get(0) !== e.target && $forCustomerField.get(0) !== e.target) {
            $forCustomer.hide();
            // If an element in the bubble was the target, return focus to summary.
            if ($customerSuggestions.get().indexOf(e.target) !== -1) {
              $summaryCustomer.focus();
            }
          }
        });
        // … and focuses.
        $('input, textarea').focus(function (e) {
          if ($attributeContributionToFields.get().indexOf(e.target) === -1 && $forCustomerField.get(0) !== e.target) {
            $attributeContributionTo.hide();
            $forCustomer.hide();
          }
        });
        // … and close buttons.
        $('button', $fieldset).click(function (e) {
          $attributeContributionTo.hide();
          $forCustomer.hide();
          e.preventDefault();
        });

        // Summary text.
        $notVolunteer.siblings('label').empty().prepend($summary);
        $fieldset.drupalSetSummary(function () {}).bind('summaryUpdated', function () {
          var $organizations = $('input:checked + label', $attributeContributionTo),
            customers = $forCustomerField.val();
          if ($organizations.length) {
            $summaryOrganization.text($organizations.map(function () {
              return $.trim($(this).text());
            }).get().join(', '));
          }
          else {
            $summaryOrganization.text(Drupal.t('not applicable'));
          }
          $customerSuggestions.show();
          if (customers.length) {
            $summaryCustomer.text(customers.replace(/ \(\d+\)/g, ''));
            // Hide taken suggestions.
            $.each(customers.split(','), function (index, value) {
              if (value.match(/.*\(\d+\)\s*/)) {
                $customerSuggestions.filter('[data-string*="' + value.replace(/.*\((\d+)\)[\s"]*/, '$1') + '"]').hide();
              }
            });
          }
          else {
            $summaryCustomer.text(Drupal.t('not applicable'));
          }
        });
      });
    }
  };

  /**
   * Issue credit helping. See drupalorg_issue_credit_form().
   */
  Drupal.behaviors.drupalorgIssueCredit = {
    attach: function (context) {
      $('#drupalorg-issue-credit-form', context).once('drupalorg-issue-credit', function () {
        $('>legend', this).after('<div class="credit-summary"></div>');

        // Store command template.
        Drupal.settings.drupalorgIssueCreditTemplate = $('textarea[name=command]', this).val();
        Drupal.settings.drupalorgIssueCreditMessageTemplate = $('textarea[name=command-message]', this).val();

        // Attach event handlers.
        $('input[name=message]', this).keyup(Drupal.drupalorgUpdateIssueCredit);
        $('input[type=checkbox][id^=by-]', this).change(Drupal.drupalorgUpdateIssueCredit);
        $('input[name=author]', this).change(Drupal.drupalorgUpdateIssueCredit);
        $('input[name=add_credit]', this).change(Drupal.drupalorgUpdateIssueCredit);
        $('textarea[name=command], textarea[name=command-message]', this).click(function () {
          $(this).select();
        });

        // Initially fill out field.
        Drupal.drupalorgUpdateIssueCredit();
      });
    }
  };

  Drupal.drupalorgUpdateIssueCredit = function () {
    var $author = $('#drupalorg-issue-credit-form input[name=author]:checked'),
      addCredit = $('#drupalorg-issue-credit-form input[name=add_credit]').val(),
      message = $('#drupalorg-issue-credit-form input[name=message]').val(),
      byHtml = [];

    $('#drupalorg-issue-credit-form #by-' + $author.val()).attr('checked', 'checked');

    // Collect names for 'by …'
    var by = [];
    $('#drupalorg-issue-credit-form input[type=checkbox][id^=by-]' + (Drupal.settings.drupalOrg.isMaintainer ? ':checked' : '.saved-by-maintainer')).each(function () {
      var $this = $(this);
      if (by.indexOf($this.data('by')) === -1) {
        by.push($this.data('by'));
      }
      byHtml.push($.trim($this.next('label').html()));
    });
    if (typeof addCredit !== 'undefined' && addCredit !== '') {
      by = by.concat(addCredit.split(',').map($.trim));
    }

    // Fill out template. It has already been translated server-side.
    $('#drupalorg-issue-credit-form textarea[name=command]').val(Drupal.formatString(Drupal.settings.drupalorgIssueCreditTemplate, {
      '!message': message.replace(/'/g, "'\\''"),
      '!by': (by.length > 0 ? ' by ' + by.join(', ') : '').replace(/'/g, "'\\''"),
      '!author': $author.data('author').replace(/'/g, "'\\''")
    }));
    $('#drupalorg-issue-credit-form textarea[name=command-message]').val(Drupal.formatString(Drupal.settings.drupalorgIssueCreditMessageTemplate, {
      '!message': message,
      '!by': (by.length > 0 ? ' by ' + by.join(', ') : '')
    }));

    // Fill out credit summary.
    if (Drupal.settings.drupalOrg.isMaintainer) {
      if (byHtml.length) {
        $('#drupalorg-issue-credit-form .credit-summary').html(Drupal.t('<strong>Giving credit to</strong> !credits', {'!credits': byHtml.join(', ')}));
      }
      else {
        $('#drupalorg-issue-credit-form .credit-summary').html(Drupal.t('Expand and select contributors to give credit.'));
      }
    }
    else {
      if (byHtml.length) {
        if (Drupal.settings.drupalOrg.isFixed) {
          $('#drupalorg-issue-credit-form .credit-summary').html(Drupal.t('<strong>Credit given to</strong> !credits', {'!credits': byHtml.join(', ')}));
        }
        else {
          $('#drupalorg-issue-credit-form .credit-summary').html(Drupal.t('<strong>Draft credit given to</strong> !credits<br><small><em>Credit is assigned when maintainers comment, and granted when the issue is fixed.</em></small>', {'!credits': byHtml.join(', ')}));
        }
      }
      else {
        $('#drupalorg-issue-credit-form .credit-summary').html(Drupal.t('A maintainer has not commented and given credit yet.'));
      }
    }
  };

  Drupal.behaviors.drupalorgConfirm = {
    attach: function() {
      if (typeof(ga) !== 'function') {
        // Wait for GA load.
        setTimeout(Drupal.behaviors.drupalorgConfirm.attach, 1000);
        return;
      }

      $('.confirm-button-form').each(function () {
        // Send GA event if confirm form shown.
        ga('send', 'event', 'User confirm', 'Form shown');
      })
      .find('.form-submit').bind('mousedown keyup touchstart', function(event) {
        // Send GA event on click.
        ga('send', 'event', 'User confirm', 'Click', event.target.getAttribute('value'));
      });
    }
  };

  Drupal.behaviors.drupalorgSurveyBlock = {
    attach: function(context) {
      $('#block-drupalorg-documentation-survey', context).once('drupalorg-documentation-survey', function () {
        var $container = $(this),
          $frame = $('iframe', this).hide();
        $('.action-button', this).show().click(function () {
          $(this).hide();
          $frame.show();
          var interval = setInterval(function () {
            if (/thanks/.exec($frame.get(0).contentWindow.location.href)) {
              clearInterval(interval);
              $container.hide();
            }
          }, 5000);
        });
      });
    }
  };

  /**
   * Prevent multiple submits.
   */
  Drupal.behaviors.drupalorgPreventMultipleSubmit = {
    attach: function(context, settings) {
      if ($('form.prevent-multiple-submit-form').length) {
        $('body').once('multisub').delegate('form.prevent-multiple-submit-form', 'submit.formSubmitSingle', $.onFormSubmitSingle);
      }
    }
  };

  /**
   * “View file hashes” toggles on release pages.
   */
  Drupal.behaviors.drupalorgReleaseHashes = {
    attach: function (context) {
      $('.view-display-id-release_files_pane', context).once('drupalorgReleaseHashes', function () {
        var hashes = {},
          $filesPane = $(this);

        // Find hash types.
        $('.hash', this).parent().each(function () {
          var label = $('.views-label', this).text().replace(/: $/, '');
          $.each(this.classList, function () {
            if (this.match(/^views-field-field/)) {
              hashes[this] = label;
            }
          });
        });

        if (!$.isEmptyObject(hashes)) {
          var links = [],
            localStorage = 'localStorage' in window && typeof window.localStorage !== 'undefined' && window['localStorage'] !== null,
            $links;

          // Add “View file hashes” toggles.
          $.each(hashes, function (key, value) {
            links.push('<a href="javascript:void(0)" class="show-' + key + '">' + value + '</a>');
          });
          $links = $filesPane.parents('.panel-layout').find('.view-display-id-release_info_pane .views-row-last')
          .append('<div class="release-hash-links"><span class="views-label">' + Drupal.t('View file hashes: ') + '</span><span>' + links.join(', ') + '</span></div>')
          .find('a').click(function () {
            var $this = $(this);

            // Clear any existing classes.
            $.each(hashes, function (key, value) {
              $filesPane.removeClass('show-' + key);
            });
            $this.parents('.release-hash-links').find('.active').not($this).removeClass('active');

            // Toggle this link and update classes.
            if ($this.toggleClass('active').hasClass('active')) {
              $filesPane.removeClass('no-hashes').addClass(this.classList[0]);
              if (localStorage) {
                window.localStorage['drupalorgReleaseHashes'] = this.classList[0];
              }
            }
            else {
              $filesPane.addClass('no-hashes');
              if (localStorage) {
                window.localStorage.removeItem('drupalorgReleaseHashes');
              }
            }
          });
          if (localStorage && (typeof window.localStorage['drupalorgReleaseHashes'] !== 'undefined')) {
            $links.filter('.' + window.localStorage['drupalorgReleaseHashes']).click();
          }
        }
      });
    }
  };

  Drupal.behaviors.drupalorgMenu = {
    attach: function (context) {
      $('fieldset.menu-link-form', context).each(function () {
        var $link_title = $('.form-item-menu-link-title input', context);
        var $title = $(this).closest('form').find('.form-item-title input');
        // Bail out if we do not have all required fields.
        if (!($link_title.length && $title.length)) {
          return;
        }
        // More-agressively keep the titles consistent.
        $title.focus(function () {
          $link_title.removeData('menuLinkAutomaticTitleOveridden');
        });
      });
    }
  };

  Drupal.behaviors.projectPage = {
    attach: function (context) {
      // Hide all but the first download table headers.
      var list = document.querySelectorAll('.view-project-release-download-table thead');
      for (var i = 1; i < list.length; i++) {
        list[i].style.display = 'none';
      }
    }
  };

  Drupal.behaviors.hosting = {
    attach: function (context) {
      var block = document.getElementById('block-drupalorg-hosting-filter');
      if (block === null || block.classList.contains('drupalorg-processed')) {
        return;
      }
      block.classList.add('drupalorg-processed');
      // Hide non-present terms.
      var listings = document.querySelectorAll('.view-id-hosting li'),
        classes = [],
        links = block.querySelectorAll('.filter a');
      for (var i = 0; i < listings.length; i += 1) {
        for (var j = 0; j < listings[i].classList.length; j += 1) {
          classes.push(listings[i].classList.item(j));
        }
      }
      for (var i = 0; i < links.length; i += 1) {
        for (var j = 0; j < links[i].classList.length; j += 1) {
          if (/^term-/.test(links[i].classList.item(j))) {
            if (classes.indexOf(links[i].classList.item(j)) < 0) {
              links[i].parentElement.classList.add('element-invisible');
            }
            break;
          }
        }
      }
      // Override links.
      block.addEventListener('click', function (e) {
        var match, reallyActive, classes = [], show, matched, remaining = [];
        for (var i = 0; i < e.target.classList.length; i += 1) {
          if (/^term-/.test(e.target.classList.item(i))) {
            e.target.classList.toggle('really-active');
            // Find all active classes.
            reallyActive = block.querySelectorAll('.really-active');
            for (var j = 0; j < reallyActive.length; j += 1) {
              for (var k = 0; k < reallyActive[j].classList.length; k += 1) {
                if (/^term-/.test(reallyActive[j].classList.item(k))) {
                  classes.push(reallyActive[j].classList.item(k));
                  break;
                }
              }
            }
            for (var j = 0; j < listings.length; j += 1) {
              if (classes.length > 0) {
                // Filter list.
                matched = 0;
                for (var k = 0; k < listings[j].classList.length; k += 1) {
                  matched += classes.indexOf(listings[j].classList.item(k)) >= 0;
                }
                show = matched === classes.length;
              }
              else {
                // Show all.
                show = true;
              }
              if (show) {
                listings[j].classList.remove('element-invisible');
                for (var k = 0; k < listings[j].classList.length; k += 1) {
                  if (classes.indexOf(listings[j].classList.item(k)) === -1 && remaining.indexOf(listings[j].classList.item(k)) === -1) {
                    remaining.push(listings[j].classList.item(k))
                  }
                }
              }
              else {
                listings[j].classList.add('element-invisible');
              }
            }
            // Disable checkboxes that would diminish the remaining hosts to zero.
            for (var i = 0; i < links.length; i += 1) {
              if (links[i].parentElement.classList.contains('element-invisible')) {
                continue;
              }
              for (var j = 0; j < links[i].classList.length; j += 1) {
                if (/^term-/.test(links[i].classList.item(j))) {
                  if (remaining.indexOf(links[i].classList.item(j)) >= 0) {
                    links[i].classList.remove('disabled');
                  }
                  else {
                    links[i].classList.add('disabled');
                  }
                  break;
                }
              }
            }
            e.preventDefault();
            return;
          }
        }
      });
    }
  };

  Drupal.behaviors.editProfileShowOnComments = {
    attach: function(context) {
      if (body = document.querySelector('.page-user-edit:not(editProfileShowOnComments-processed)')) {
        body.classList.add('editProfileShowOnComments-processed');
        body.addEventListener('click', function (e) {
          if (e.target.classList.contains('show-comment-tab')) {
            e.preventDefault();
            $('#edit-group_user_comments').data('verticalTab').focus();
          }
        });
      }
    }
  };

  /**
   * Display a warning message if an organization name does not match exactly.
   */
  Drupal.behaviors.orgName = {
    attach: function (context, settings) {
      var orgs;

      if ((orgs = document.getElementById('edit-field-organizations')) && !orgs.classList.contains('processed')) {
        orgs.classList.add('processed');
        orgs.addEventListener('focusout', function (e) {
          if (e.target.attributes['name'] !== undefined && /\[field_organization_name]/.test(e.target.attributes['name'].value)) {
            $.ajax({
              url: Drupal.settings.basePath + 'api-d7/node.json',
              data: {
                type: 'organization',
                title: e.target.value
              },
              success: function (result) {
                e.target.parentNode.parentNode.parentNode.parentNode.getElementsByClassName('warning')[0].classList.toggle('element-hidden', result.list.length !== 0);
              }
            });
          }
        });
      }
    }
  };
})(jQuery);

;/*})'"*/
;/*})'"*/
