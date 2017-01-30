window.Modernizr=function(a,b,c){function d(a){r.cssText=a}function e(a,b){return d(v.join(a+";")+(b||""))}function f(a,b){return typeof a===b}function g(a,b){return!!~(""+a).indexOf(b)}function h(a,b){for(var d in a){var e=a[d];if(!g(e,"-")&&r[e]!==c)return"pfx"!=b||e}return!1}function i(a,b,d){for(var e in a){var g=b[a[e]];if(g!==c)return d===!1?a[e]:f(g,"function")?g.bind(d||b):g}return!1}function j(a,b,c){var d=a.charAt(0).toUpperCase()+a.slice(1),e=(a+" "+x.join(d+" ")+d).split(" ");return f(b,"string")||f(b,"undefined")?h(e,b):(e=(a+" "+y.join(d+" ")+d).split(" "),i(e,b,c))}function k(){m.input=function(c){for(var d=0,e=c.length;d<e;d++)C[c[d]]=c[d]in s;return C.list&&(C.list=!!b.createElement("datalist")&&!!a.HTMLDataListElement),C}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),m.inputtypes=function(a){for(var e,f,g,d=0,h=a.length;d<h;d++)s.setAttribute("type",f=a[d]),e="text"!==s.type,e&&(s.value=t,s.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(f)&&s.style.WebkitAppearance!==c?(o.appendChild(s),g=b.defaultView,e=g.getComputedStyle&&"textfield"!==g.getComputedStyle(s,null).WebkitAppearance&&0!==s.offsetHeight,o.removeChild(s)):/^(search|tel)$/.test(f)||(e=/^(url|email)$/.test(f)?s.checkValidity&&s.checkValidity()===!1:s.value!=t)),B[a[d]]=!!e;return B}("search tel url email datetime date month week time datetime-local number range color".split(" "))}var F,J,l="2.8.3",m={},n=!0,o=b.documentElement,p="modernizr",q=b.createElement(p),r=q.style,s=b.createElement("input"),t=":)",u={}.toString,v=" -webkit- -moz- -o- -ms- ".split(" "),w="Webkit Moz O ms",x=w.split(" "),y=w.toLowerCase().split(" "),z={svg:"http://www.w3.org/2000/svg"},A={},B={},C={},D=[],E=D.slice,G=function(a,c,d,e){var f,g,h,i,j=b.createElement("div"),k=b.body,l=k||b.createElement("body");if(parseInt(d,10))for(;d--;)h=b.createElement("div"),h.id=e?e[d]:p+(d+1),j.appendChild(h);return f=["&#173;",'<style id="s',p,'">',a,"</style>"].join(""),j.id=p,(k?j:l).innerHTML+=f,l.appendChild(j),k||(l.style.background="",l.style.overflow="hidden",i=o.style.overflow,o.style.overflow="hidden",o.appendChild(l)),g=c(j,a),k?j.parentNode.removeChild(j):(l.parentNode.removeChild(l),o.style.overflow=i),!!g},H=function(){function a(a,e){e=e||b.createElement(d[a]||"div"),a="on"+a;var g=a in e;return g||(e.setAttribute||(e=b.createElement("div")),e.setAttribute&&e.removeAttribute&&(e.setAttribute(a,""),g=f(e[a],"function"),f(e[a],"undefined")||(e[a]=c),e.removeAttribute(a))),e=null,g}var d={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return a}(),I={}.hasOwnProperty;J=f(I,"undefined")||f(I.call,"undefined")?function(a,b){return b in a&&f(a.constructor.prototype[b],"undefined")}:function(a,b){return I.call(a,b)},Function.prototype.bind||(Function.prototype.bind=function(a){var b=this;if("function"!=typeof b)throw new TypeError;var c=E.call(arguments,1),d=function(){if(this instanceof d){var e=function(){};e.prototype=b.prototype;var f=new e,g=b.apply(f,c.concat(E.call(arguments)));return Object(g)===g?g:f}return b.apply(a,c.concat(E.call(arguments)))};return d}),A.flexbox=function(){return j("flexWrap")},A.canvas=function(){var a=b.createElement("canvas");return!!a.getContext&&!!a.getContext("2d")},A.canvastext=function(){return!!m.canvas&&!!f(b.createElement("canvas").getContext("2d").fillText,"function")},A.webgl=function(){return!!a.WebGLRenderingContext},A.touch=function(){var c;return"ontouchstart"in a||a.DocumentTouch&&b instanceof DocumentTouch?c=!0:G(["@media (",v.join("touch-enabled),("),p,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(a){c=9===a.offsetTop}),c},A.geolocation=function(){return"geolocation"in navigator},A.postmessage=function(){return!!a.postMessage},A.websqldatabase=function(){return!!a.openDatabase},A.indexedDB=function(){return!!j("indexedDB",a)},A.hashchange=function(){return H("hashchange",a)&&(b.documentMode===c||b.documentMode>7)},A.history=function(){return!!a.history&&!!history.pushState},A.draganddrop=function(){var a=b.createElement("div");return"draggable"in a||"ondragstart"in a&&"ondrop"in a},A.websockets=function(){return"WebSocket"in a||"MozWebSocket"in a},A.rgba=function(){return d("background-color:rgba(150,255,150,.5)"),g(r.backgroundColor,"rgba")},A.hsla=function(){return d("background-color:hsla(120,40%,100%,.5)"),g(r.backgroundColor,"rgba")||g(r.backgroundColor,"hsla")},A.multiplebgs=function(){return d("background:url(https://),url(https://),red url(https://)"),/(url\s*\(.*?){3}/.test(r.background)},A.backgroundsize=function(){return j("backgroundSize")},A.borderimage=function(){return j("borderImage")},A.borderradius=function(){return j("borderRadius")},A.boxshadow=function(){return j("boxShadow")},A.textshadow=function(){return""===b.createElement("div").style.textShadow},A.opacity=function(){return e("opacity:.55"),/^0.55$/.test(r.opacity)},A.cssanimations=function(){return j("animationName")},A.csscolumns=function(){return j("columnCount")},A.cssgradients=function(){var a="background-image:",b="gradient(linear,left top,right bottom,from(#9f9),to(white));",c="linear-gradient(left top,#9f9, white);";return d((a+"-webkit- ".split(" ").join(b+a)+v.join(c+a)).slice(0,-a.length)),g(r.backgroundImage,"gradient")},A.cssreflections=function(){return j("boxReflect")},A.csstransforms=function(){return!!j("transform")},A.csstransforms3d=function(){var a=!!j("perspective");return a&&"webkitPerspective"in o.style&&G("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(b,c){a=9===b.offsetLeft&&3===b.offsetHeight}),a},A.csstransitions=function(){return j("transition")},A.fontface=function(){var a;return G('@font-face {font-family:"font";src:url("https://")}',function(c,d){var e=b.getElementById("smodernizr"),f=e.sheet||e.styleSheet,g=f?f.cssRules&&f.cssRules[0]?f.cssRules[0].cssText:f.cssText||"":"";a=/src/i.test(g)&&0===g.indexOf(d.split(" ")[0])}),a},A.generatedcontent=function(){var a;return G(["#",p,"{font:0/0 a}#",p,':after{content:"',t,'";visibility:hidden;font:3px/1 a}'].join(""),function(b){a=b.offsetHeight>=3}),a},A.video=function(){var a=b.createElement("video"),c=!1;try{(c=!!a.canPlayType)&&(c=new Boolean(c),c.ogg=a.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),c.h264=a.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),c.webm=a.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,""))}catch(a){}return c},A.audio=function(){var a=b.createElement("audio"),c=!1;try{(c=!!a.canPlayType)&&(c=new Boolean(c),c.ogg=a.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),c.mp3=a.canPlayType("audio/mpeg;").replace(/^no$/,""),c.wav=a.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),c.m4a=(a.canPlayType("audio/x-m4a;")||a.canPlayType("audio/aac;")).replace(/^no$/,""))}catch(a){}return c},A.localstorage=function(){try{return localStorage.setItem(p,p),localStorage.removeItem(p),!0}catch(a){return!1}},A.sessionstorage=function(){try{return sessionStorage.setItem(p,p),sessionStorage.removeItem(p),!0}catch(a){return!1}},A.webworkers=function(){return!!a.Worker},A.applicationcache=function(){return!!a.applicationCache},A.svg=function(){return!!b.createElementNS&&!!b.createElementNS(z.svg,"svg").createSVGRect},A.inlinesvg=function(){var a=b.createElement("div");return a.innerHTML="<svg/>",(a.firstChild&&a.firstChild.namespaceURI)==z.svg},A.smil=function(){return!!b.createElementNS&&/SVGAnimate/.test(u.call(b.createElementNS(z.svg,"animate")))},A.svgclippaths=function(){return!!b.createElementNS&&/SVGClipPath/.test(u.call(b.createElementNS(z.svg,"clipPath")))};for(var K in A)J(A,K)&&(F=K.toLowerCase(),m[F]=A[K](),D.push((m[F]?"":"no-")+F));return m.input||k(),m.addTest=function(a,b){if("object"==typeof a)for(var d in a)J(a,d)&&m.addTest(d,a[d]);else{if(a=a.toLowerCase(),m[a]!==c)return m;b="function"==typeof b?b():b,"undefined"!=typeof n&&n&&(o.className+=" "+(b?"":"no-")+a),m[a]=b}return m},d(""),q=s=null,function(a,b){function c(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function d(){var a=s.elements;return"string"==typeof a?a.split(" "):a}function e(a){var b=q[a[o]];return b||(b={},p++,a[o]=p,q[p]=b),b}function f(a,c,d){if(c||(c=b),r)return c.createElement(a);d||(d=e(c));var f;return f=d.cache[a]?d.cache[a].cloneNode():m.test(a)?(d.cache[a]=d.createElem(a)).cloneNode():d.createElem(a),!f.canHaveChildren||l.test(a)||f.tagUrn?f:d.frag.appendChild(f)}function g(a,c){if(a||(a=b),r)return a.createDocumentFragment();c=c||e(a);for(var f=c.frag.cloneNode(),g=0,h=d(),i=h.length;g<i;g++)f.createElement(h[g]);return f}function h(a,b){b.cache||(b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag()),a.createElement=function(c){return s.shivMethods?f(c,a,b):b.createElem(c)},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+d().join().replace(/[\w\-]+/g,function(a){return b.createElem(a),b.frag.createElement(a),'c("'+a+'")'})+");return n}")(s,b.frag)}function i(a){a||(a=b);var d=e(a);return s.shivCSS&&!n&&!d.hasCSS&&(d.hasCSS=!!c(a,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),r||h(a,d),a}var n,r,j="3.7.0",k=a.html5||{},l=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,m=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,o="_html5shiv",p=0,q={};!function(){try{var a=b.createElement("a");a.innerHTML="<xyz></xyz>",n="hidden"in a,r=1==a.childNodes.length||function(){b.createElement("a");var a=b.createDocumentFragment();return"undefined"==typeof a.cloneNode||"undefined"==typeof a.createDocumentFragment||"undefined"==typeof a.createElement}()}catch(a){n=!0,r=!0}}();var s={elements:k.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",version:j,shivCSS:k.shivCSS!==!1,supportsUnknownElements:r,shivMethods:k.shivMethods!==!1,type:"default",shivDocument:i,createElement:f,createDocumentFragment:g};a.html5=s,i(b)}(this,b),m._version=l,m._prefixes=v,m._domPrefixes=y,m._cssomPrefixes=x,m.hasEvent=H,m.testProp=function(a){return h([a])},m.testAllProps=j,m.testStyles=G,m.prefixed=function(a,b,c){return b?j(a,b,c):j(a,"pfx")},o.className=o.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(n?" js "+D.join(" "):""),m}(this,this.document),function(a,b,c){function d(a){return"[object Function]"==o.call(a)}function e(a){return"string"==typeof a}function f(){}function g(a){return!a||"loaded"==a||"complete"==a||"uninitialized"==a}function h(){var a=p.shift();q=1,a?a.t?m(function(){("c"==a.t?B.injectCss:B.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),h()):q=0}function i(a,c,d,e,f,i,j){function k(b){if(!o&&g(l.readyState)&&(u.r=o=1,!q&&h(),l.onload=l.onreadystatechange=null,b)){"img"!=a&&m(function(){t.removeChild(l)},50);for(var d in y[c])y[c].hasOwnProperty(d)&&y[c][d].onload()}}var j=j||B.errorTimeout,l=b.createElement(a),o=0,r=0,u={t:d,s:c,e:f,a:i,x:j};1===y[c]&&(r=1,y[c]=[]),"object"==a?l.data=c:(l.src=c,l.type=a),l.width=l.height="0",l.onerror=l.onload=l.onreadystatechange=function(){k.call(this,r)},p.splice(e,0,u),"img"!=a&&(r||2===y[c]?(t.insertBefore(l,s?null:n),m(k,j)):y[c].push(l))}function j(a,b,c,d,f){return q=0,b=b||"j",e(a)?i("c"==b?v:u,a,b,this.i++,c,d,f):(p.splice(this.i++,0,a),1==p.length&&h()),this}function k(){var a=B;return a.loader={load:j,i:0},a}var A,B,l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&&!!b.createRange().compareNode,t=s?l:n.parentNode,l=a.opera&&"[object Opera]"==o.call(a.opera),l=!!b.attachEvent&&!l,u=r?"object":l?"script":"img",v=l?"script":u,w=Array.isArray||function(a){return"[object Array]"==o.call(a)},x=[],y={},z={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a}};B=function(a){function b(a){var e,f,g,a=a.split("!"),b=x.length,c=a.pop(),d=a.length,c={url:c,origUrl:c,prefixes:a};for(f=0;f<d;f++)g=a[f].split("="),(e=z[g.shift()])&&(c=e(c,g));for(f=0;f<b;f++)c=x[f](c);return c}function g(a,e,f,g,h){var i=b(a),j=i.autoCallback;i.url.split(".").pop().split("?").shift(),i.bypass||(e&&(e=d(e)?e:e[a]||e[g]||e[a.split("/").pop().split("?")[0]]),i.instead?i.instead(a,e,f,g,h):(y[i.url]?i.noexec=!0:y[i.url]=1,f.load(i.url,i.forceCSS||!i.forceJS&&"css"==i.url.split(".").pop().split("?").shift()?"c":c,i.noexec,i.attrs,i.timeout),(d(e)||d(j))&&f.load(function(){k(),e&&e(i.origUrl,h,g),j&&j(i.origUrl,h,g),y[i.url]=2})))}function h(a,b){function c(a,c){if(a){if(e(a))c||(j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}),g(a,j,b,0,h);else if(Object(a)===a)for(n in m=function(){var c,b=0;for(c in a)a.hasOwnProperty(c)&&b++;return b}(),a)a.hasOwnProperty(n)&&(!c&&!--m&&(d(j)?j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}:j[n]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b),l()}}(k[n])),g(a[n],j,b,n,h))}else!c&&l()}var m,n,h=!!a.test,i=a.load||a.both,j=a.callback||f,k=j,l=a.complete||f;c(h?a.yep:a.nope,!!i),i&&c(i)}var i,j,l=this.yepnope.loader;if(e(a))g(a,0,l,0);else if(w(a))for(i=0;i<a.length;i++)j=a[i],e(j)?g(j,0,l,0):w(j)?B(j):Object(j)===j&&h(j,l);else Object(a)===a&&h(a,l)},B.addPrefix=function(a,b){z[a]=b},B.addFilter=function(a){x.push(a)},B.errorTimeout=1e4,null==b.readyState&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",A=function(){b.removeEventListener("DOMContentLoaded",A,0),b.readyState="complete"},0)),a.yepnope=k(),a.yepnope.executeStack=h,a.yepnope.injectJs=function(a,c,d,e,i,j){var l,o,k=b.createElement("script"),e=e||B.errorTimeout;k.src=a;for(o in d)k.setAttribute(o,d[o]);c=j?h:c||f,k.onreadystatechange=k.onload=function(){!l&&g(k.readyState)&&(l=1,c(),k.onload=k.onreadystatechange=null)},m(function(){l||(l=1,c(1))},e),i?k.onload():n.parentNode.insertBefore(k,n)},a.yepnope.injectCss=function(a,c,d,e,g,i){var j,e=b.createElement("link"),c=i?h:c||f;e.href=a,e.rel="stylesheet",e.type="text/css";for(j in d)e.setAttribute(j,d[j]);g||(n.parentNode.insertBefore(e,n),m(c,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};