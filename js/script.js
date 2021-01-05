/*! jQuery v3.5.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(C,e){"use strict";var t=[],r=Object.getPrototypeOf,s=t.slice,g=t.flat?function(e){return t.flat.call(e)}:function(e){return t.concat.apply([],e)},u=t.push,i=t.indexOf,n={},o=n.toString,v=n.hasOwnProperty,a=v.toString,l=a.call(Object),y={},m=function(e){return"function"==typeof e&&"number"!=typeof e.nodeType},x=function(e){return null!=e&&e===e.window},E=C.document,c={type:!0,src:!0,nonce:!0,noModule:!0};function b(e,t,n){var r,i,o=(n=n||E).createElement("script");if(o.text=e,t)for(r in c)(i=t[r]||t.getAttribute&&t.getAttribute(r))&&o.setAttribute(r,i);n.head.appendChild(o).parentNode.removeChild(o)}function w(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?n[o.call(e)]||"object":typeof e}var f="3.5.1",S=function(e,t){return new S.fn.init(e,t)};function p(e){var t=!!e&&"length"in e&&e.length,n=w(e);return!m(e)&&!x(e)&&("array"===n||0===t||"number"==typeof t&&0<t&&t-1 in e)}S.fn=S.prototype={jquery:f,constructor:S,length:0,toArray:function(){return s.call(this)},get:function(e){return null==e?s.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=S.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return S.each(this,e)},map:function(n){return this.pushStack(S.map(this,function(e,t){return n.call(e,t,e)}))},slice:function(){return this.pushStack(s.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(S.grep(this,function(e,t){return(t+1)%2}))},odd:function(){return this.pushStack(S.grep(this,function(e,t){return t%2}))},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(0<=n&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:u,sort:t.sort,splice:t.splice},S.extend=S.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||m(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)r=e[t],"__proto__"!==t&&a!==r&&(l&&r&&(S.isPlainObject(r)||(i=Array.isArray(r)))?(n=a[t],o=i&&!Array.isArray(n)?[]:i||S.isPlainObject(n)?n:{},i=!1,a[t]=S.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},S.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==o.call(e))&&(!(t=r(e))||"function"==typeof(n=v.call(t,"constructor")&&t.constructor)&&a.call(n)===l)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e,t,n){b(e,{nonce:t&&t.nonce},n)},each:function(e,t){var n,r=0;if(p(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},makeArray:function(e,t){var n=t||[];return null!=e&&(p(Object(e))?S.merge(n,"string"==typeof e?[e]:e):u.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:i.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r=[],i=0,o=e.length,a=!n;i<o;i++)!t(e[i],i)!==a&&r.push(e[i]);return r},map:function(e,t,n){var r,i,o=0,a=[];if(p(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&a.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&a.push(i);return g(a)},guid:1,support:y}),"function"==typeof Symbol&&(S.fn[Symbol.iterator]=t[Symbol.iterator]),S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){n["[object "+t+"]"]=t.toLowerCase()});var d=function(n){var e,d,b,o,i,h,f,g,w,u,l,T,C,a,E,v,s,c,y,S="sizzle"+1*new Date,p=n.document,k=0,r=0,m=ue(),x=ue(),A=ue(),N=ue(),D=function(e,t){return e===t&&(l=!0),0},j={}.hasOwnProperty,t=[],q=t.pop,L=t.push,H=t.push,O=t.slice,P=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},R="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",I="(?:\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",W="\\["+M+"*("+I+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+I+"))|)"+M+"*\\]",F=":("+I+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+W+")*)|.*)\\)|)",B=new RegExp(M+"+","g"),$=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),_=new RegExp("^"+M+"*,"+M+"*"),z=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp(M+"|>"),X=new RegExp(F),V=new RegExp("^"+I+"$"),G={ID:new RegExp("^#("+I+")"),CLASS:new RegExp("^\\.("+I+")"),TAG:new RegExp("^("+I+"|[*])"),ATTR:new RegExp("^"+W),PSEUDO:new RegExp("^"+F),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+R+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/HTML$/i,Q=/^(?:input|select|textarea|button)$/i,J=/^h\d$/i,K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ee=/[+~]/,te=new RegExp("\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\([^\\r\\n\\f])","g"),ne=function(e,t){var n="0x"+e.slice(1)-65536;return t||(n<0?String.fromCharCode(n+65536):String.fromCharCode(n>>10|55296,1023&n|56320))},re=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ie=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},oe=function(){T()},ae=be(function(e){return!0===e.disabled&&"fieldset"===e.nodeName.toLowerCase()},{dir:"parentNode",next:"legend"});try{H.apply(t=O.call(p.childNodes),p.childNodes),t[p.childNodes.length].nodeType}catch(e){H={apply:t.length?function(e,t){L.apply(e,O.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function se(t,e,n,r){var i,o,a,s,u,l,c,f=e&&e.ownerDocument,p=e?e.nodeType:9;if(n=n||[],"string"!=typeof t||!t||1!==p&&9!==p&&11!==p)return n;if(!r&&(T(e),e=e||C,E)){if(11!==p&&(u=Z.exec(t)))if(i=u[1]){if(9===p){if(!(a=e.getElementById(i)))return n;if(a.id===i)return n.push(a),n}else if(f&&(a=f.getElementById(i))&&y(e,a)&&a.id===i)return n.push(a),n}else{if(u[2])return H.apply(n,e.getElementsByTagName(t)),n;if((i=u[3])&&d.getElementsByClassName&&e.getElementsByClassName)return H.apply(n,e.getElementsByClassName(i)),n}if(d.qsa&&!N[t+" "]&&(!v||!v.test(t))&&(1!==p||"object"!==e.nodeName.toLowerCase())){if(c=t,f=e,1===p&&(U.test(t)||z.test(t))){(f=ee.test(t)&&ye(e.parentNode)||e)===e&&d.scope||((s=e.getAttribute("id"))?s=s.replace(re,ie):e.setAttribute("id",s=S)),o=(l=h(t)).length;while(o--)l[o]=(s?"#"+s:":scope")+" "+xe(l[o]);c=l.join(",")}try{return H.apply(n,f.querySelectorAll(c)),n}catch(e){N(t,!0)}finally{s===S&&e.removeAttribute("id")}}}return g(t.replace($,"$1"),e,n,r)}function ue(){var r=[];return function e(t,n){return r.push(t+" ")>b.cacheLength&&delete e[r.shift()],e[t+" "]=n}}function le(e){return e[S]=!0,e}function ce(e){var t=C.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function fe(e,t){var n=e.split("|"),r=n.length;while(r--)b.attrHandle[n[r]]=t}function pe(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function de(t){return function(e){return"input"===e.nodeName.toLowerCase()&&e.type===t}}function he(n){return function(e){var t=e.nodeName.toLowerCase();return("input"===t||"button"===t)&&e.type===n}}function ge(t){return function(e){return"form"in e?e.parentNode&&!1===e.disabled?"label"in e?"label"in e.parentNode?e.parentNode.disabled===t:e.disabled===t:e.isDisabled===t||e.isDisabled!==!t&&ae(e)===t:e.disabled===t:"label"in e&&e.disabled===t}}function ve(a){return le(function(o){return o=+o,le(function(e,t){var n,r=a([],e.length,o),i=r.length;while(i--)e[n=r[i]]&&(e[n]=!(t[n]=e[n]))})})}function ye(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}for(e in d=se.support={},i=se.isXML=function(e){var t=e.namespaceURI,n=(e.ownerDocument||e).documentElement;return!Y.test(t||n&&n.nodeName||"HTML")},T=se.setDocument=function(e){var t,n,r=e?e.ownerDocument||e:p;return r!=C&&9===r.nodeType&&r.documentElement&&(a=(C=r).documentElement,E=!i(C),p!=C&&(n=C.defaultView)&&n.top!==n&&(n.addEventListener?n.addEventListener("unload",oe,!1):n.attachEvent&&n.attachEvent("onunload",oe)),d.scope=ce(function(e){return a.appendChild(e).appendChild(C.createElement("div")),"undefined"!=typeof e.querySelectorAll&&!e.querySelectorAll(":scope fieldset div").length}),d.attributes=ce(function(e){return e.className="i",!e.getAttribute("className")}),d.getElementsByTagName=ce(function(e){return e.appendChild(C.createComment("")),!e.getElementsByTagName("*").length}),d.getElementsByClassName=K.test(C.getElementsByClassName),d.getById=ce(function(e){return a.appendChild(e).id=S,!C.getElementsByName||!C.getElementsByName(S).length}),d.getById?(b.filter.ID=function(e){var t=e.replace(te,ne);return function(e){return e.getAttribute("id")===t}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n=t.getElementById(e);return n?[n]:[]}}):(b.filter.ID=function(e){var n=e.replace(te,ne);return function(e){var t="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return t&&t.value===n}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),b.find.TAG=d.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):d.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},b.find.CLASS=d.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&E)return t.getElementsByClassName(e)},s=[],v=[],(d.qsa=K.test(C.querySelectorAll))&&(ce(function(e){var t;a.appendChild(e).innerHTML="<a id='"+S+"'></a><select id='"+S+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&v.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||v.push("\\["+M+"*(?:value|"+R+")"),e.querySelectorAll("[id~="+S+"-]").length||v.push("~="),(t=C.createElement("input")).setAttribute("name",""),e.appendChild(t),e.querySelectorAll("[name='']").length||v.push("\\["+M+"*name"+M+"*="+M+"*(?:''|\"\")"),e.querySelectorAll(":checked").length||v.push(":checked"),e.querySelectorAll("a#"+S+"+*").length||v.push(".#.+[+~]"),e.querySelectorAll("\\\f"),v.push("[\\r\\n\\f]")}),ce(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=C.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&v.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&v.push(":enabled",":disabled"),a.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&v.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),v.push(",.*:")})),(d.matchesSelector=K.test(c=a.matches||a.webkitMatchesSelector||a.mozMatchesSelector||a.oMatchesSelector||a.msMatchesSelector))&&ce(function(e){d.disconnectedMatch=c.call(e,"*"),c.call(e,"[s!='']:x"),s.push("!=",F)}),v=v.length&&new RegExp(v.join("|")),s=s.length&&new RegExp(s.join("|")),t=K.test(a.compareDocumentPosition),y=t||K.test(a.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},D=t?function(e,t){if(e===t)return l=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n||(1&(n=(e.ownerDocument||e)==(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!d.sortDetached&&t.compareDocumentPosition(e)===n?e==C||e.ownerDocument==p&&y(p,e)?-1:t==C||t.ownerDocument==p&&y(p,t)?1:u?P(u,e)-P(u,t):0:4&n?-1:1)}:function(e,t){if(e===t)return l=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e==C?-1:t==C?1:i?-1:o?1:u?P(u,e)-P(u,t):0;if(i===o)return pe(e,t);n=e;while(n=n.parentNode)a.unshift(n);n=t;while(n=n.parentNode)s.unshift(n);while(a[r]===s[r])r++;return r?pe(a[r],s[r]):a[r]==p?-1:s[r]==p?1:0}),C},se.matches=function(e,t){return se(e,null,null,t)},se.matchesSelector=function(e,t){if(T(e),d.matchesSelector&&E&&!N[t+" "]&&(!s||!s.test(t))&&(!v||!v.test(t)))try{var n=c.call(e,t);if(n||d.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(e){N(t,!0)}return 0<se(t,C,null,[e]).length},se.contains=function(e,t){return(e.ownerDocument||e)!=C&&T(e),y(e,t)},se.attr=function(e,t){(e.ownerDocument||e)!=C&&T(e);var n=b.attrHandle[t.toLowerCase()],r=n&&j.call(b.attrHandle,t.toLowerCase())?n(e,t,!E):void 0;return void 0!==r?r:d.attributes||!E?e.getAttribute(t):(r=e.getAttributeNode(t))&&r.specified?r.value:null},se.escape=function(e){return(e+"").replace(re,ie)},se.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},se.uniqueSort=function(e){var t,n=[],r=0,i=0;if(l=!d.detectDuplicates,u=!d.sortStable&&e.slice(0),e.sort(D),l){while(t=e[i++])t===e[i]&&(r=n.push(i));while(r--)e.splice(n[r],1)}return u=null,e},o=se.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else while(t=e[r++])n+=o(t);return n},(b=se.selectors={cacheLength:50,createPseudo:le,match:G,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(te,ne),e[3]=(e[3]||e[4]||e[5]||"").replace(te,ne),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||se.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&se.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return G.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&(t=h(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(te,ne).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=m[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&m(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(n,r,i){return function(e){var t=se.attr(e,n);return null==t?"!="===r:!r||(t+="","="===r?t===i:"!="===r?t!==i:"^="===r?i&&0===t.indexOf(i):"*="===r?i&&-1<t.indexOf(i):"$="===r?i&&t.slice(-i.length)===i:"~="===r?-1<(" "+t.replace(B," ")+" ").indexOf(i):"|="===r&&(t===i||t.slice(0,i.length+1)===i+"-"))}},CHILD:function(h,e,t,g,v){var y="nth"!==h.slice(0,3),m="last"!==h.slice(-4),x="of-type"===e;return 1===g&&0===v?function(e){return!!e.parentNode}:function(e,t,n){var r,i,o,a,s,u,l=y!==m?"nextSibling":"previousSibling",c=e.parentNode,f=x&&e.nodeName.toLowerCase(),p=!n&&!x,d=!1;if(c){if(y){while(l){a=e;while(a=a[l])if(x?a.nodeName.toLowerCase()===f:1===a.nodeType)return!1;u=l="only"===h&&!u&&"nextSibling"}return!0}if(u=[m?c.firstChild:c.lastChild],m&&p){d=(s=(r=(i=(o=(a=c)[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1])&&r[2],a=s&&c.childNodes[s];while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if(1===a.nodeType&&++d&&a===e){i[h]=[k,s,d];break}}else if(p&&(d=s=(r=(i=(o=(a=e)[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1]),!1===d)while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if((x?a.nodeName.toLowerCase()===f:1===a.nodeType)&&++d&&(p&&((i=(o=a[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]=[k,d]),a===e))break;return(d-=v)===g||d%g==0&&0<=d/g}}},PSEUDO:function(e,o){var t,a=b.pseudos[e]||b.setFilters[e.toLowerCase()]||se.error("unsupported pseudo: "+e);return a[S]?a(o):1<a.length?(t=[e,e,"",o],b.setFilters.hasOwnProperty(e.toLowerCase())?le(function(e,t){var n,r=a(e,o),i=r.length;while(i--)e[n=P(e,r[i])]=!(t[n]=r[i])}):function(e){return a(e,0,t)}):a}},pseudos:{not:le(function(e){var r=[],i=[],s=f(e.replace($,"$1"));return s[S]?le(function(e,t,n,r){var i,o=s(e,null,r,[]),a=e.length;while(a--)(i=o[a])&&(e[a]=!(t[a]=i))}):function(e,t,n){return r[0]=e,s(r,null,n,i),r[0]=null,!i.pop()}}),has:le(function(t){return function(e){return 0<se(t,e).length}}),contains:le(function(t){return t=t.replace(te,ne),function(e){return-1<(e.textContent||o(e)).indexOf(t)}}),lang:le(function(n){return V.test(n||"")||se.error("unsupported lang: "+n),n=n.replace(te,ne).toLowerCase(),function(e){var t;do{if(t=E?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return(t=t.toLowerCase())===n||0===t.indexOf(n+"-")}while((e=e.parentNode)&&1===e.nodeType);return!1}}),target:function(e){var t=n.location&&n.location.hash;return t&&t.slice(1)===e.id},root:function(e){return e===a},focus:function(e){return e===C.activeElement&&(!C.hasFocus||C.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:ge(!1),disabled:ge(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!b.pseudos.empty(e)},header:function(e){return J.test(e.nodeName)},input:function(e){return Q.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:ve(function(){return[0]}),last:ve(function(e,t){return[t-1]}),eq:ve(function(e,t,n){return[n<0?n+t:n]}),even:ve(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:ve(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:ve(function(e,t,n){for(var r=n<0?n+t:t<n?t:n;0<=--r;)e.push(r);return e}),gt:ve(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=b.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})b.pseudos[e]=de(e);for(e in{submit:!0,reset:!0})b.pseudos[e]=he(e);function me(){}function xe(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function be(s,e,t){var u=e.dir,l=e.next,c=l||u,f=t&&"parentNode"===c,p=r++;return e.first?function(e,t,n){while(e=e[u])if(1===e.nodeType||f)return s(e,t,n);return!1}:function(e,t,n){var r,i,o,a=[k,p];if(n){while(e=e[u])if((1===e.nodeType||f)&&s(e,t,n))return!0}else while(e=e[u])if(1===e.nodeType||f)if(i=(o=e[S]||(e[S]={}))[e.uniqueID]||(o[e.uniqueID]={}),l&&l===e.nodeName.toLowerCase())e=e[u]||e;else{if((r=i[c])&&r[0]===k&&r[1]===p)return a[2]=r[2];if((i[c]=a)[2]=s(e,t,n))return!0}return!1}}function we(i){return 1<i.length?function(e,t,n){var r=i.length;while(r--)if(!i[r](e,t,n))return!1;return!0}:i[0]}function Te(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function Ce(d,h,g,v,y,e){return v&&!v[S]&&(v=Ce(v)),y&&!y[S]&&(y=Ce(y,e)),le(function(e,t,n,r){var i,o,a,s=[],u=[],l=t.length,c=e||function(e,t,n){for(var r=0,i=t.length;r<i;r++)se(e,t[r],n);return n}(h||"*",n.nodeType?[n]:n,[]),f=!d||!e&&h?c:Te(c,s,d,n,r),p=g?y||(e?d:l||v)?[]:t:f;if(g&&g(f,p,n,r),v){i=Te(p,u),v(i,[],n,r),o=i.length;while(o--)(a=i[o])&&(p[u[o]]=!(f[u[o]]=a))}if(e){if(y||d){if(y){i=[],o=p.length;while(o--)(a=p[o])&&i.push(f[o]=a);y(null,p=[],i,r)}o=p.length;while(o--)(a=p[o])&&-1<(i=y?P(e,a):s[o])&&(e[i]=!(t[i]=a))}}else p=Te(p===t?p.splice(l,p.length):p),y?y(null,t,p,r):H.apply(t,p)})}function Ee(e){for(var i,t,n,r=e.length,o=b.relative[e[0].type],a=o||b.relative[" "],s=o?1:0,u=be(function(e){return e===i},a,!0),l=be(function(e){return-1<P(i,e)},a,!0),c=[function(e,t,n){var r=!o&&(n||t!==w)||((i=t).nodeType?u(e,t,n):l(e,t,n));return i=null,r}];s<r;s++)if(t=b.relative[e[s].type])c=[be(we(c),t)];else{if((t=b.filter[e[s].type].apply(null,e[s].matches))[S]){for(n=++s;n<r;n++)if(b.relative[e[n].type])break;return Ce(1<s&&we(c),1<s&&xe(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace($,"$1"),t,s<n&&Ee(e.slice(s,n)),n<r&&Ee(e=e.slice(n)),n<r&&xe(e))}c.push(t)}return we(c)}return me.prototype=b.filters=b.pseudos,b.setFilters=new me,h=se.tokenize=function(e,t){var n,r,i,o,a,s,u,l=x[e+" "];if(l)return t?0:l.slice(0);a=e,s=[],u=b.preFilter;while(a){for(o in n&&!(r=_.exec(a))||(r&&(a=a.slice(r[0].length)||a),s.push(i=[])),n=!1,(r=z.exec(a))&&(n=r.shift(),i.push({value:n,type:r[0].replace($," ")}),a=a.slice(n.length)),b.filter)!(r=G[o].exec(a))||u[o]&&!(r=u[o](r))||(n=r.shift(),i.push({value:n,type:o,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?se.error(e):x(e,s).slice(0)},f=se.compile=function(e,t){var n,v,y,m,x,r,i=[],o=[],a=A[e+" "];if(!a){t||(t=h(e)),n=t.length;while(n--)(a=Ee(t[n]))[S]?i.push(a):o.push(a);(a=A(e,(v=o,m=0<(y=i).length,x=0<v.length,r=function(e,t,n,r,i){var o,a,s,u=0,l="0",c=e&&[],f=[],p=w,d=e||x&&b.find.TAG("*",i),h=k+=null==p?1:Math.random()||.1,g=d.length;for(i&&(w=t==C||t||i);l!==g&&null!=(o=d[l]);l++){if(x&&o){a=0,t||o.ownerDocument==C||(T(o),n=!E);while(s=v[a++])if(s(o,t||C,n)){r.push(o);break}i&&(k=h)}m&&((o=!s&&o)&&u--,e&&c.push(o))}if(u+=l,m&&l!==u){a=0;while(s=y[a++])s(c,f,t,n);if(e){if(0<u)while(l--)c[l]||f[l]||(f[l]=q.call(r));f=Te(f)}H.apply(r,f),i&&!e&&0<f.length&&1<u+y.length&&se.uniqueSort(r)}return i&&(k=h,w=p),c},m?le(r):r))).selector=e}return a},g=se.select=function(e,t,n,r){var i,o,a,s,u,l="function"==typeof e&&e,c=!r&&h(e=l.selector||e);if(n=n||[],1===c.length){if(2<(o=c[0]=c[0].slice(0)).length&&"ID"===(a=o[0]).type&&9===t.nodeType&&E&&b.relative[o[1].type]){if(!(t=(b.find.ID(a.matches[0].replace(te,ne),t)||[])[0]))return n;l&&(t=t.parentNode),e=e.slice(o.shift().value.length)}i=G.needsContext.test(e)?0:o.length;while(i--){if(a=o[i],b.relative[s=a.type])break;if((u=b.find[s])&&(r=u(a.matches[0].replace(te,ne),ee.test(o[0].type)&&ye(t.parentNode)||t))){if(o.splice(i,1),!(e=r.length&&xe(o)))return H.apply(n,r),n;break}}}return(l||f(e,c))(r,t,!E,n,!t||ee.test(e)&&ye(t.parentNode)||t),n},d.sortStable=S.split("").sort(D).join("")===S,d.detectDuplicates=!!l,T(),d.sortDetached=ce(function(e){return 1&e.compareDocumentPosition(C.createElement("fieldset"))}),ce(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||fe("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),d.attributes&&ce(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||fe("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ce(function(e){return null==e.getAttribute("disabled")})||fe(R,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),se}(C);S.find=d,S.expr=d.selectors,S.expr[":"]=S.expr.pseudos,S.uniqueSort=S.unique=d.uniqueSort,S.text=d.getText,S.isXMLDoc=d.isXML,S.contains=d.contains,S.escapeSelector=d.escape;var h=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&S(e).is(n))break;r.push(e)}return r},T=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},k=S.expr.match.needsContext;function A(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var N=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function D(e,n,r){return m(n)?S.grep(e,function(e,t){return!!n.call(e,t,e)!==r}):n.nodeType?S.grep(e,function(e){return e===n!==r}):"string"!=typeof n?S.grep(e,function(e){return-1<i.call(n,e)!==r}):S.filter(n,e,r)}S.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?S.find.matchesSelector(r,e)?[r]:[]:S.find.matches(e,S.grep(t,function(e){return 1===e.nodeType}))},S.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(S(e).filter(function(){for(t=0;t<r;t++)if(S.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)S.find(e,i[t],n);return 1<r?S.uniqueSort(n):n},filter:function(e){return this.pushStack(D(this,e||[],!1))},not:function(e){return this.pushStack(D(this,e||[],!0))},is:function(e){return!!D(this,"string"==typeof e&&k.test(e)?S(e):e||[],!1).length}});var j,q=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(S.fn.init=function(e,t,n){var r,i;if(!e)return this;if(n=n||j,"string"==typeof e){if(!(r="<"===e[0]&&">"===e[e.length-1]&&3<=e.length?[null,e,null]:q.exec(e))||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof S?t[0]:t,S.merge(this,S.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:E,!0)),N.test(r[1])&&S.isPlainObject(t))for(r in t)m(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return(i=E.getElementById(r[2]))&&(this[0]=i,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):m(e)?void 0!==n.ready?n.ready(e):e(S):S.makeArray(e,this)}).prototype=S.fn,j=S(E);var L=/^(?:parents|prev(?:Until|All))/,H={children:!0,contents:!0,next:!0,prev:!0};function O(e,t){while((e=e[t])&&1!==e.nodeType);return e}S.fn.extend({has:function(e){var t=S(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(S.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&S(e);if(!k.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?-1<a.index(n):1===n.nodeType&&S.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(1<o.length?S.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?i.call(S(e),this[0]):i.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(S.uniqueSort(S.merge(this.get(),S(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),S.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return h(e,"parentNode")},parentsUntil:function(e,t,n){return h(e,"parentNode",n)},next:function(e){return O(e,"nextSibling")},prev:function(e){return O(e,"previousSibling")},nextAll:function(e){return h(e,"nextSibling")},prevAll:function(e){return h(e,"previousSibling")},nextUntil:function(e,t,n){return h(e,"nextSibling",n)},prevUntil:function(e,t,n){return h(e,"previousSibling",n)},siblings:function(e){return T((e.parentNode||{}).firstChild,e)},children:function(e){return T(e.firstChild)},contents:function(e){return null!=e.contentDocument&&r(e.contentDocument)?e.contentDocument:(A(e,"template")&&(e=e.content||e),S.merge([],e.childNodes))}},function(r,i){S.fn[r]=function(e,t){var n=S.map(this,i,e);return"Until"!==r.slice(-5)&&(t=e),t&&"string"==typeof t&&(n=S.filter(t,n)),1<this.length&&(H[r]||S.uniqueSort(n),L.test(r)&&n.reverse()),this.pushStack(n)}});var P=/[^\x20\t\r\n\f]+/g;function R(e){return e}function M(e){throw e}function I(e,t,n,r){var i;try{e&&m(i=e.promise)?i.call(e).done(t).fail(n):e&&m(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}S.Callbacks=function(r){var e,n;r="string"==typeof r?(e=r,n={},S.each(e.match(P)||[],function(e,t){n[t]=!0}),n):S.extend({},r);var i,t,o,a,s=[],u=[],l=-1,c=function(){for(a=a||r.once,o=i=!0;u.length;l=-1){t=u.shift();while(++l<s.length)!1===s[l].apply(t[0],t[1])&&r.stopOnFalse&&(l=s.length,t=!1)}r.memory||(t=!1),i=!1,a&&(s=t?[]:"")},f={add:function(){return s&&(t&&!i&&(l=s.length-1,u.push(t)),function n(e){S.each(e,function(e,t){m(t)?r.unique&&f.has(t)||s.push(t):t&&t.length&&"string"!==w(t)&&n(t)})}(arguments),t&&!i&&c()),this},remove:function(){return S.each(arguments,function(e,t){var n;while(-1<(n=S.inArray(t,s,n)))s.splice(n,1),n<=l&&l--}),this},has:function(e){return e?-1<S.inArray(e,s):0<s.length},empty:function(){return s&&(s=[]),this},disable:function(){return a=u=[],s=t="",this},disabled:function(){return!s},lock:function(){return a=u=[],t||i||(s=t=""),this},locked:function(){return!!a},fireWith:function(e,t){return a||(t=[e,(t=t||[]).slice?t.slice():t],u.push(t),i||c()),this},fire:function(){return f.fireWith(this,arguments),this},fired:function(){return!!o}};return f},S.extend({Deferred:function(e){var o=[["notify","progress",S.Callbacks("memory"),S.Callbacks("memory"),2],["resolve","done",S.Callbacks("once memory"),S.Callbacks("once memory"),0,"resolved"],["reject","fail",S.Callbacks("once memory"),S.Callbacks("once memory"),1,"rejected"]],i="pending",a={state:function(){return i},always:function(){return s.done(arguments).fail(arguments),this},"catch":function(e){return a.then(null,e)},pipe:function(){var i=arguments;return S.Deferred(function(r){S.each(o,function(e,t){var n=m(i[t[4]])&&i[t[4]];s[t[1]](function(){var e=n&&n.apply(this,arguments);e&&m(e.promise)?e.promise().progress(r.notify).done(r.resolve).fail(r.reject):r[t[0]+"With"](this,n?[e]:arguments)})}),i=null}).promise()},then:function(t,n,r){var u=0;function l(i,o,a,s){return function(){var n=this,r=arguments,e=function(){var e,t;if(!(i<u)){if((e=a.apply(n,r))===o.promise())throw new TypeError("Thenable self-resolution");t=e&&("object"==typeof e||"function"==typeof e)&&e.then,m(t)?s?t.call(e,l(u,o,R,s),l(u,o,M,s)):(u++,t.call(e,l(u,o,R,s),l(u,o,M,s),l(u,o,R,o.notifyWith))):(a!==R&&(n=void 0,r=[e]),(s||o.resolveWith)(n,r))}},t=s?e:function(){try{e()}catch(e){S.Deferred.exceptionHook&&S.Deferred.exceptionHook(e,t.stackTrace),u<=i+1&&(a!==M&&(n=void 0,r=[e]),o.rejectWith(n,r))}};i?t():(S.Deferred.getStackHook&&(t.stackTrace=S.Deferred.getStackHook()),C.setTimeout(t))}}return S.Deferred(function(e){o[0][3].add(l(0,e,m(r)?r:R,e.notifyWith)),o[1][3].add(l(0,e,m(t)?t:R)),o[2][3].add(l(0,e,m(n)?n:M))}).promise()},promise:function(e){return null!=e?S.extend(e,a):a}},s={};return S.each(o,function(e,t){var n=t[2],r=t[5];a[t[1]]=n.add,r&&n.add(function(){i=r},o[3-e][2].disable,o[3-e][3].disable,o[0][2].lock,o[0][3].lock),n.add(t[3].fire),s[t[0]]=function(){return s[t[0]+"With"](this===s?void 0:this,arguments),this},s[t[0]+"With"]=n.fireWith}),a.promise(s),e&&e.call(s,s),s},when:function(e){var n=arguments.length,t=n,r=Array(t),i=s.call(arguments),o=S.Deferred(),a=function(t){return function(e){r[t]=this,i[t]=1<arguments.length?s.call(arguments):e,--n||o.resolveWith(r,i)}};if(n<=1&&(I(e,o.done(a(t)).resolve,o.reject,!n),"pending"===o.state()||m(i[t]&&i[t].then)))return o.then();while(t--)I(i[t],a(t),o.reject);return o.promise()}});var W=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;S.Deferred.exceptionHook=function(e,t){C.console&&C.console.warn&&e&&W.test(e.name)&&C.console.warn("jQuery.Deferred exception: "+e.message,e.stack,t)},S.readyException=function(e){C.setTimeout(function(){throw e})};var F=S.Deferred();function B(){E.removeEventListener("DOMContentLoaded",B),C.removeEventListener("load",B),S.ready()}S.fn.ready=function(e){return F.then(e)["catch"](function(e){S.readyException(e)}),this},S.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--S.readyWait:S.isReady)||(S.isReady=!0)!==e&&0<--S.readyWait||F.resolveWith(E,[S])}}),S.ready.then=F.then,"complete"===E.readyState||"loading"!==E.readyState&&!E.documentElement.doScroll?C.setTimeout(S.ready):(E.addEventListener("DOMContentLoaded",B),C.addEventListener("load",B));var $=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===w(n))for(s in i=!0,n)$(e,t,s,n[s],!0,o,a);else if(void 0!==r&&(i=!0,m(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(S(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},_=/^-ms-/,z=/-([a-z])/g;function U(e,t){return t.toUpperCase()}function X(e){return e.replace(_,"ms-").replace(z,U)}var V=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function G(){this.expando=S.expando+G.uid++}G.uid=1,G.prototype={cache:function(e){var t=e[this.expando];return t||(t={},V(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[X(t)]=n;else for(r in t)i[X(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][X(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(X):(t=X(t))in r?[t]:t.match(P)||[]).length;while(n--)delete r[t[n]]}(void 0===t||S.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!S.isEmptyObject(t)}};var Y=new G,Q=new G,J=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,K=/[A-Z]/g;function Z(e,t,n){var r,i;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(K,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n="true"===(i=n)||"false"!==i&&("null"===i?null:i===+i+""?+i:J.test(i)?JSON.parse(i):i)}catch(e){}Q.set(e,t,n)}else n=void 0;return n}S.extend({hasData:function(e){return Q.hasData(e)||Y.hasData(e)},data:function(e,t,n){return Q.access(e,t,n)},removeData:function(e,t){Q.remove(e,t)},_data:function(e,t,n){return Y.access(e,t,n)},_removeData:function(e,t){Y.remove(e,t)}}),S.fn.extend({data:function(n,e){var t,r,i,o=this[0],a=o&&o.attributes;if(void 0===n){if(this.length&&(i=Q.get(o),1===o.nodeType&&!Y.get(o,"hasDataAttrs"))){t=a.length;while(t--)a[t]&&0===(r=a[t].name).indexOf("data-")&&(r=X(r.slice(5)),Z(o,r,i[r]));Y.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof n?this.each(function(){Q.set(this,n)}):$(this,function(e){var t;if(o&&void 0===e)return void 0!==(t=Q.get(o,n))?t:void 0!==(t=Z(o,n))?t:void 0;this.each(function(){Q.set(this,n,e)})},null,e,1<arguments.length,null,!0)},removeData:function(e){return this.each(function(){Q.remove(this,e)})}}),S.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=Y.get(e,t),n&&(!r||Array.isArray(n)?r=Y.access(e,t,S.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=S.queue(e,t),r=n.length,i=n.shift(),o=S._queueHooks(e,t);"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,function(){S.dequeue(e,t)},o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return Y.get(e,n)||Y.access(e,n,{empty:S.Callbacks("once memory").add(function(){Y.remove(e,[t+"queue",n])})})}}),S.fn.extend({queue:function(t,n){var e=2;return"string"!=typeof t&&(n=t,t="fx",e--),arguments.length<e?S.queue(this[0],t):void 0===n?this:this.each(function(){var e=S.queue(this,t,n);S._queueHooks(this,t),"fx"===t&&"inprogress"!==e[0]&&S.dequeue(this,t)})},dequeue:function(e){return this.each(function(){S.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=S.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=Y.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var ee=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,te=new RegExp("^(?:([+-])=|)("+ee+")([a-z%]*)$","i"),ne=["Top","Right","Bottom","Left"],re=E.documentElement,ie=function(e){return S.contains(e.ownerDocument,e)},oe={composed:!0};re.getRootNode&&(ie=function(e){return S.contains(e.ownerDocument,e)||e.getRootNode(oe)===e.ownerDocument});var ae=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&ie(e)&&"none"===S.css(e,"display")};function se(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return S.css(e,t,"")},u=s(),l=n&&n[3]||(S.cssNumber[t]?"":"px"),c=e.nodeType&&(S.cssNumber[t]||"px"!==l&&+u)&&te.exec(S.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)S.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,S.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var ue={};function le(e,t){for(var n,r,i,o,a,s,u,l=[],c=0,f=e.length;c<f;c++)(r=e[c]).style&&(n=r.style.display,t?("none"===n&&(l[c]=Y.get(r,"display")||null,l[c]||(r.style.display="")),""===r.style.display&&ae(r)&&(l[c]=(u=a=o=void 0,a=(i=r).ownerDocument,s=i.nodeName,(u=ue[s])||(o=a.body.appendChild(a.createElement(s)),u=S.css(o,"display"),o.parentNode.removeChild(o),"none"===u&&(u="block"),ue[s]=u)))):"none"!==n&&(l[c]="none",Y.set(r,"display",n)));for(c=0;c<f;c++)null!=l[c]&&(e[c].style.display=l[c]);return e}S.fn.extend({show:function(){return le(this,!0)},hide:function(){return le(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){ae(this)?S(this).show():S(this).hide()})}});var ce,fe,pe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,he=/^$|^module$|\/(?:java|ecma)script/i;ce=E.createDocumentFragment().appendChild(E.createElement("div")),(fe=E.createElement("input")).setAttribute("type","radio"),fe.setAttribute("checked","checked"),fe.setAttribute("name","t"),ce.appendChild(fe),y.checkClone=ce.cloneNode(!0).cloneNode(!0).lastChild.checked,ce.innerHTML="<textarea>x</textarea>",y.noCloneChecked=!!ce.cloneNode(!0).lastChild.defaultValue,ce.innerHTML="<option></option>",y.option=!!ce.lastChild;var ge={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function ve(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&A(e,t)?S.merge([e],n):n}function ye(e,t){for(var n=0,r=e.length;n<r;n++)Y.set(e[n],"globalEval",!t||Y.get(t[n],"globalEval"))}ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td,y.option||(ge.optgroup=ge.option=[1,"<select multiple='multiple'>","</select>"]);var me=/<|&#?\w+;/;function xe(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===w(o))S.merge(p,o.nodeType?[o]:o);else if(me.test(o)){a=a||f.appendChild(t.createElement("div")),s=(de.exec(o)||["",""])[1].toLowerCase(),u=ge[s]||ge._default,a.innerHTML=u[1]+S.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;S.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&-1<S.inArray(o,r))i&&i.push(o);else if(l=ie(o),a=ve(f.appendChild(o),"script"),l&&ye(a),n){c=0;while(o=a[c++])he.test(o.type||"")&&n.push(o)}return f}var be=/^key/,we=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,Te=/^([^.]*)(?:\.(.+)|)/;function Ce(){return!0}function Ee(){return!1}function Se(e,t){return e===function(){try{return E.activeElement}catch(e){}}()==("focus"===t)}function ke(e,t,n,r,i,o){var a,s;if("object"==typeof t){for(s in"string"!=typeof n&&(r=r||n,n=void 0),t)ke(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=Ee;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return S().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=S.guid++)),e.each(function(){S.event.add(this,t,i,r,n)})}function Ae(e,i,o){o?(Y.set(e,i,!1),S.event.add(e,i,{namespace:!1,handler:function(e){var t,n,r=Y.get(this,i);if(1&e.isTrigger&&this[i]){if(r.length)(S.event.special[i]||{}).delegateType&&e.stopPropagation();else if(r=s.call(arguments),Y.set(this,i,r),t=o(this,i),this[i](),r!==(n=Y.get(this,i))||t?Y.set(this,i,!1):n={},r!==n)return e.stopImmediatePropagation(),e.preventDefault(),n.value}else r.length&&(Y.set(this,i,{value:S.event.trigger(S.extend(r[0],S.Event.prototype),r.slice(1),this)}),e.stopImmediatePropagation())}})):void 0===Y.get(e,i)&&S.event.add(e,i,Ce)}S.event={global:{},add:function(t,e,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Y.get(t);if(V(t)){n.handler&&(n=(o=n).handler,i=o.selector),i&&S.find.matchesSelector(re,i),n.guid||(n.guid=S.guid++),(u=v.events)||(u=v.events=Object.create(null)),(a=v.handle)||(a=v.handle=function(e){return"undefined"!=typeof S&&S.event.triggered!==e.type?S.event.dispatch.apply(t,arguments):void 0}),l=(e=(e||"").match(P)||[""]).length;while(l--)d=g=(s=Te.exec(e[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=S.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=S.event.special[d]||{},c=S.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&S.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(t,r,h,a)||t.addEventListener&&t.addEventListener(d,a)),f.add&&(f.add.call(t,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),S.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Y.hasData(e)&&Y.get(e);if(v&&(u=v.events)){l=(t=(t||"").match(P)||[""]).length;while(l--)if(d=g=(s=Te.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d){f=S.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,v.handle)||S.removeEvent(e,d,v.handle),delete u[d])}else for(d in u)S.event.remove(e,d+t[l],n,r,!0);S.isEmptyObject(u)&&Y.remove(e,"handle events")}},dispatch:function(e){var t,n,r,i,o,a,s=new Array(arguments.length),u=S.event.fix(e),l=(Y.get(this,"events")||Object.create(null))[u.type]||[],c=S.event.special[u.type]||{};for(s[0]=u,t=1;t<arguments.length;t++)s[t]=arguments[t];if(u.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,u)){a=S.event.handlers.call(this,u,l),t=0;while((i=a[t++])&&!u.isPropagationStopped()){u.currentTarget=i.elem,n=0;while((o=i.handlers[n++])&&!u.isImmediatePropagationStopped())u.rnamespace&&!1!==o.namespace&&!u.rnamespace.test(o.namespace)||(u.handleObj=o,u.data=o.data,void 0!==(r=((S.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,s))&&!1===(u.result=r)&&(u.preventDefault(),u.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,u),u.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&1<=e.button))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?-1<S(i,this).index(l):S.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(t,e){Object.defineProperty(S.Event.prototype,t,{enumerable:!0,configurable:!0,get:m(e)?function(){if(this.originalEvent)return e(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[t]},set:function(e){Object.defineProperty(this,t,{enumerable:!0,configurable:!0,writable:!0,value:e})}})},fix:function(e){return e[S.expando]?e:new S.Event(e)},special:{load:{noBubble:!0},click:{setup:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Ae(t,"click",Ce),!1},trigger:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Ae(t,"click"),!0},_default:function(e){var t=e.target;return pe.test(t.type)&&t.click&&A(t,"input")&&Y.get(t,"click")||A(t,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},S.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},S.Event=function(e,t){if(!(this instanceof S.Event))return new S.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?Ce:Ee,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&S.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[S.expando]=!0},S.Event.prototype={constructor:S.Event,isDefaultPrevented:Ee,isPropagationStopped:Ee,isImmediatePropagationStopped:Ee,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=Ce,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=Ce,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=Ce,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},S.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(e){var t=e.button;return null==e.which&&be.test(e.type)?null!=e.charCode?e.charCode:e.keyCode:!e.which&&void 0!==t&&we.test(e.type)?1&t?1:2&t?3:4&t?2:0:e.which}},S.event.addProp),S.each({focus:"focusin",blur:"focusout"},function(e,t){S.event.special[e]={setup:function(){return Ae(this,e,Se),!1},trigger:function(){return Ae(this,e),!0},delegateType:t}}),S.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,i){S.event.special[e]={delegateType:i,bindType:i,handle:function(e){var t,n=e.relatedTarget,r=e.handleObj;return n&&(n===this||S.contains(this,n))||(e.type=r.origType,t=r.handler.apply(this,arguments),e.type=i),t}}}),S.fn.extend({on:function(e,t,n,r){return ke(this,e,t,n,r)},one:function(e,t,n,r){return ke(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,S(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=Ee),this.each(function(){S.event.remove(this,e,n,t)})}});var Ne=/<script|<style|<link/i,De=/checked\s*(?:[^=]|=\s*.checked.)/i,je=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function qe(e,t){return A(e,"table")&&A(11!==t.nodeType?t:t.firstChild,"tr")&&S(e).children("tbody")[0]||e}function Le(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function He(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Oe(e,t){var n,r,i,o,a,s;if(1===t.nodeType){if(Y.hasData(e)&&(s=Y.get(e).events))for(i in Y.remove(t,"handle events"),s)for(n=0,r=s[i].length;n<r;n++)S.event.add(t,i,s[i][n]);Q.hasData(e)&&(o=Q.access(e),a=S.extend({},o),Q.set(t,a))}}function Pe(n,r,i,o){r=g(r);var e,t,a,s,u,l,c=0,f=n.length,p=f-1,d=r[0],h=m(d);if(h||1<f&&"string"==typeof d&&!y.checkClone&&De.test(d))return n.each(function(e){var t=n.eq(e);h&&(r[0]=d.call(this,e,t.html())),Pe(t,r,i,o)});if(f&&(t=(e=xe(r,n[0].ownerDocument,!1,n,o)).firstChild,1===e.childNodes.length&&(e=t),t||o)){for(s=(a=S.map(ve(e,"script"),Le)).length;c<f;c++)u=e,c!==p&&(u=S.clone(u,!0,!0),s&&S.merge(a,ve(u,"script"))),i.call(n[c],u,c);if(s)for(l=a[a.length-1].ownerDocument,S.map(a,He),c=0;c<s;c++)u=a[c],he.test(u.type||"")&&!Y.access(u,"globalEval")&&S.contains(l,u)&&(u.src&&"module"!==(u.type||"").toLowerCase()?S._evalUrl&&!u.noModule&&S._evalUrl(u.src,{nonce:u.nonce||u.getAttribute("nonce")},l):b(u.textContent.replace(je,""),u,l))}return n}function Re(e,t,n){for(var r,i=t?S.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||S.cleanData(ve(r)),r.parentNode&&(n&&ie(r)&&ye(ve(r,"script")),r.parentNode.removeChild(r));return e}S.extend({htmlPrefilter:function(e){return e},clone:function(e,t,n){var r,i,o,a,s,u,l,c=e.cloneNode(!0),f=ie(e);if(!(y.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||S.isXMLDoc(e)))for(a=ve(c),r=0,i=(o=ve(e)).length;r<i;r++)s=o[r],u=a[r],void 0,"input"===(l=u.nodeName.toLowerCase())&&pe.test(s.type)?u.checked=s.checked:"input"!==l&&"textarea"!==l||(u.defaultValue=s.defaultValue);if(t)if(n)for(o=o||ve(e),a=a||ve(c),r=0,i=o.length;r<i;r++)Oe(o[r],a[r]);else Oe(e,c);return 0<(a=ve(c,"script")).length&&ye(a,!f&&ve(e,"script")),c},cleanData:function(e){for(var t,n,r,i=S.event.special,o=0;void 0!==(n=e[o]);o++)if(V(n)){if(t=n[Y.expando]){if(t.events)for(r in t.events)i[r]?S.event.remove(n,r):S.removeEvent(n,r,t.handle);n[Y.expando]=void 0}n[Q.expando]&&(n[Q.expando]=void 0)}}}),S.fn.extend({detach:function(e){return Re(this,e,!0)},remove:function(e){return Re(this,e)},text:function(e){return $(this,function(e){return void 0===e?S.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return Pe(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||qe(this,e).appendChild(e)})},prepend:function(){return Pe(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=qe(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return Pe(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return Pe(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(S.cleanData(ve(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return S.clone(this,e,t)})},html:function(e){return $(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!Ne.test(e)&&!ge[(de.exec(e)||["",""])[1].toLowerCase()]){e=S.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(S.cleanData(ve(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var n=[];return Pe(this,arguments,function(e){var t=this.parentNode;S.inArray(this,n)<0&&(S.cleanData(ve(this)),t&&t.replaceChild(e,this))},n)}}),S.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,a){S.fn[e]=function(e){for(var t,n=[],r=S(e),i=r.length-1,o=0;o<=i;o++)t=o===i?this:this.clone(!0),S(r[o])[a](t),u.apply(n,t.get());return this.pushStack(n)}});var Me=new RegExp("^("+ee+")(?!px)[a-z%]+$","i"),Ie=function(e){var t=e.ownerDocument.defaultView;return t&&t.opener||(t=C),t.getComputedStyle(e)},We=function(e,t,n){var r,i,o={};for(i in t)o[i]=e.style[i],e.style[i]=t[i];for(i in r=n.call(e),t)e.style[i]=o[i];return r},Fe=new RegExp(ne.join("|"),"i");function Be(e,t,n){var r,i,o,a,s=e.style;return(n=n||Ie(e))&&(""!==(a=n.getPropertyValue(t)||n[t])||ie(e)||(a=S.style(e,t)),!y.pixelBoxStyles()&&Me.test(a)&&Fe.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0!==a?a+"":a}function $e(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}!function(){function e(){if(l){u.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",l.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",re.appendChild(u).appendChild(l);var e=C.getComputedStyle(l);n="1%"!==e.top,s=12===t(e.marginLeft),l.style.right="60%",o=36===t(e.right),r=36===t(e.width),l.style.position="absolute",i=12===t(l.offsetWidth/3),re.removeChild(u),l=null}}function t(e){return Math.round(parseFloat(e))}var n,r,i,o,a,s,u=E.createElement("div"),l=E.createElement("div");l.style&&(l.style.backgroundClip="content-box",l.cloneNode(!0).style.backgroundClip="",y.clearCloneStyle="content-box"===l.style.backgroundClip,S.extend(y,{boxSizingReliable:function(){return e(),r},pixelBoxStyles:function(){return e(),o},pixelPosition:function(){return e(),n},reliableMarginLeft:function(){return e(),s},scrollboxSize:function(){return e(),i},reliableTrDimensions:function(){var e,t,n,r;return null==a&&(e=E.createElement("table"),t=E.createElement("tr"),n=E.createElement("div"),e.style.cssText="position:absolute;left:-11111px",t.style.height="1px",n.style.height="9px",re.appendChild(e).appendChild(t).appendChild(n),r=C.getComputedStyle(t),a=3<parseInt(r.height),re.removeChild(e)),a}}))}();var _e=["Webkit","Moz","ms"],ze=E.createElement("div").style,Ue={};function Xe(e){var t=S.cssProps[e]||Ue[e];return t||(e in ze?e:Ue[e]=function(e){var t=e[0].toUpperCase()+e.slice(1),n=_e.length;while(n--)if((e=_e[n]+t)in ze)return e}(e)||e)}var Ve=/^(none|table(?!-c[ea]).+)/,Ge=/^--/,Ye={position:"absolute",visibility:"hidden",display:"block"},Qe={letterSpacing:"0",fontWeight:"400"};function Je(e,t,n){var r=te.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function Ke(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=S.css(e,n+ne[a],!0,i)),r?("content"===n&&(u-=S.css(e,"padding"+ne[a],!0,i)),"margin"!==n&&(u-=S.css(e,"border"+ne[a]+"Width",!0,i))):(u+=S.css(e,"padding"+ne[a],!0,i),"padding"!==n?u+=S.css(e,"border"+ne[a]+"Width",!0,i):s+=S.css(e,"border"+ne[a]+"Width",!0,i));return!r&&0<=o&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))||0),u}function Ze(e,t,n){var r=Ie(e),i=(!y.boxSizingReliable()||n)&&"border-box"===S.css(e,"boxSizing",!1,r),o=i,a=Be(e,t,r),s="offset"+t[0].toUpperCase()+t.slice(1);if(Me.test(a)){if(!n)return a;a="auto"}return(!y.boxSizingReliable()&&i||!y.reliableTrDimensions()&&A(e,"tr")||"auto"===a||!parseFloat(a)&&"inline"===S.css(e,"display",!1,r))&&e.getClientRects().length&&(i="border-box"===S.css(e,"boxSizing",!1,r),(o=s in e)&&(a=e[s])),(a=parseFloat(a)||0)+Ke(e,t,n||(i?"border":"content"),o,r,a)+"px"}function et(e,t,n,r,i){return new et.prototype.init(e,t,n,r,i)}S.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Be(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=X(t),u=Ge.test(t),l=e.style;if(u||(t=Xe(s)),a=S.cssHooks[t]||S.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"===(o=typeof n)&&(i=te.exec(n))&&i[1]&&(n=se(e,t,i),o="number"),null!=n&&n==n&&("number"!==o||u||(n+=i&&i[3]||(S.cssNumber[s]?"":"px")),y.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=X(t);return Ge.test(t)||(t=Xe(s)),(a=S.cssHooks[t]||S.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=Be(e,t,r)),"normal"===i&&t in Qe&&(i=Qe[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),S.each(["height","width"],function(e,u){S.cssHooks[u]={get:function(e,t,n){if(t)return!Ve.test(S.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?Ze(e,u,n):We(e,Ye,function(){return Ze(e,u,n)})},set:function(e,t,n){var r,i=Ie(e),o=!y.scrollboxSize()&&"absolute"===i.position,a=(o||n)&&"border-box"===S.css(e,"boxSizing",!1,i),s=n?Ke(e,u,n,a,i):0;return a&&o&&(s-=Math.ceil(e["offset"+u[0].toUpperCase()+u.slice(1)]-parseFloat(i[u])-Ke(e,u,"border",!1,i)-.5)),s&&(r=te.exec(t))&&"px"!==(r[3]||"px")&&(e.style[u]=t,t=S.css(e,u)),Je(0,t,s)}}}),S.cssHooks.marginLeft=$e(y.reliableMarginLeft,function(e,t){if(t)return(parseFloat(Be(e,"marginLeft"))||e.getBoundingClientRect().left-We(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),S.each({margin:"",padding:"",border:"Width"},function(i,o){S.cssHooks[i+o]={expand:function(e){for(var t=0,n={},r="string"==typeof e?e.split(" "):[e];t<4;t++)n[i+ne[t]+o]=r[t]||r[t-2]||r[0];return n}},"margin"!==i&&(S.cssHooks[i+o].set=Je)}),S.fn.extend({css:function(e,t){return $(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=Ie(e),i=t.length;a<i;a++)o[t[a]]=S.css(e,t[a],!1,r);return o}return void 0!==n?S.style(e,t,n):S.css(e,t)},e,t,1<arguments.length)}}),((S.Tween=et).prototype={constructor:et,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||S.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(S.cssNumber[n]?"":"px")},cur:function(){var e=et.propHooks[this.prop];return e&&e.get?e.get(this):et.propHooks._default.get(this)},run:function(e){var t,n=et.propHooks[this.prop];return this.options.duration?this.pos=t=S.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):et.propHooks._default.set(this),this}}).init.prototype=et.prototype,(et.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=S.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){S.fx.step[e.prop]?S.fx.step[e.prop](e):1!==e.elem.nodeType||!S.cssHooks[e.prop]&&null==e.elem.style[Xe(e.prop)]?e.elem[e.prop]=e.now:S.style(e.elem,e.prop,e.now+e.unit)}}}).scrollTop=et.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},S.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},S.fx=et.prototype.init,S.fx.step={};var tt,nt,rt,it,ot=/^(?:toggle|show|hide)$/,at=/queueHooks$/;function st(){nt&&(!1===E.hidden&&C.requestAnimationFrame?C.requestAnimationFrame(st):C.setTimeout(st,S.fx.interval),S.fx.tick())}function ut(){return C.setTimeout(function(){tt=void 0}),tt=Date.now()}function lt(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=ne[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function ct(e,t,n){for(var r,i=(ft.tweeners[t]||[]).concat(ft.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function ft(o,e,t){var n,a,r=0,i=ft.prefilters.length,s=S.Deferred().always(function(){delete u.elem}),u=function(){if(a)return!1;for(var e=tt||ut(),t=Math.max(0,l.startTime+l.duration-e),n=1-(t/l.duration||0),r=0,i=l.tweens.length;r<i;r++)l.tweens[r].run(n);return s.notifyWith(o,[l,n,t]),n<1&&i?t:(i||s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l]),!1)},l=s.promise({elem:o,props:S.extend({},e),opts:S.extend(!0,{specialEasing:{},easing:S.easing._default},t),originalProperties:e,originalOptions:t,startTime:tt||ut(),duration:t.duration,tweens:[],createTween:function(e,t){var n=S.Tween(o,l.opts,e,t,l.opts.specialEasing[e]||l.opts.easing);return l.tweens.push(n),n},stop:function(e){var t=0,n=e?l.tweens.length:0;if(a)return this;for(a=!0;t<n;t++)l.tweens[t].run(1);return e?(s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l,e])):s.rejectWith(o,[l,e]),this}}),c=l.props;for(!function(e,t){var n,r,i,o,a;for(n in e)if(i=t[r=X(n)],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=S.cssHooks[r])&&"expand"in a)for(n in o=a.expand(o),delete e[r],o)n in e||(e[n]=o[n],t[n]=i);else t[r]=i}(c,l.opts.specialEasing);r<i;r++)if(n=ft.prefilters[r].call(l,o,c,l.opts))return m(n.stop)&&(S._queueHooks(l.elem,l.opts.queue).stop=n.stop.bind(n)),n;return S.map(c,ct,l),m(l.opts.start)&&l.opts.start.call(o,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),S.fx.timer(S.extend(u,{elem:o,anim:l,queue:l.opts.queue})),l}S.Animation=S.extend(ft,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return se(n.elem,e,te.exec(t),n),n}]},tweener:function(e,t){m(e)?(t=e,e=["*"]):e=e.match(P);for(var n,r=0,i=e.length;r<i;r++)n=e[r],ft.tweeners[n]=ft.tweeners[n]||[],ft.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&ae(e),v=Y.get(e,"fxshow");for(r in n.queue||(null==(a=S._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,S.queue(e,"fx").length||a.empty.fire()})})),t)if(i=t[r],ot.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!v||void 0===v[r])continue;g=!0}d[r]=v&&v[r]||S.style(e,r)}if((u=!S.isEmptyObject(t))||!S.isEmptyObject(d))for(r in f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=v&&v.display)&&(l=Y.get(e,"display")),"none"===(c=S.css(e,"display"))&&(l?c=l:(le([e],!0),l=e.style.display||l,c=S.css(e,"display"),le([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===S.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1,d)u||(v?"hidden"in v&&(g=v.hidden):v=Y.access(e,"fxshow",{display:l}),o&&(v.hidden=!g),g&&le([e],!0),p.done(function(){for(r in g||le([e]),Y.remove(e,"fxshow"),d)S.style(e,r,d[r])})),u=ct(g?v[r]:0,r,p),r in v||(v[r]=u.start,g&&(u.end=u.start,u.start=0))}],prefilter:function(e,t){t?ft.prefilters.unshift(e):ft.prefilters.push(e)}}),S.speed=function(e,t,n){var r=e&&"object"==typeof e?S.extend({},e):{complete:n||!n&&t||m(e)&&e,duration:e,easing:n&&t||t&&!m(t)&&t};return S.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in S.fx.speeds?r.duration=S.fx.speeds[r.duration]:r.duration=S.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){m(r.old)&&r.old.call(this),r.queue&&S.dequeue(this,r.queue)},r},S.fn.extend({fadeTo:function(e,t,n,r){return this.filter(ae).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(t,e,n,r){var i=S.isEmptyObject(t),o=S.speed(e,n,r),a=function(){var e=ft(this,S.extend({},t),o);(i||Y.get(this,"finish"))&&e.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(i,e,o){var a=function(e){var t=e.stop;delete e.stop,t(o)};return"string"!=typeof i&&(o=e,e=i,i=void 0),e&&this.queue(i||"fx",[]),this.each(function(){var e=!0,t=null!=i&&i+"queueHooks",n=S.timers,r=Y.get(this);if(t)r[t]&&r[t].stop&&a(r[t]);else for(t in r)r[t]&&r[t].stop&&at.test(t)&&a(r[t]);for(t=n.length;t--;)n[t].elem!==this||null!=i&&n[t].queue!==i||(n[t].anim.stop(o),e=!1,n.splice(t,1));!e&&o||S.dequeue(this,i)})},finish:function(a){return!1!==a&&(a=a||"fx"),this.each(function(){var e,t=Y.get(this),n=t[a+"queue"],r=t[a+"queueHooks"],i=S.timers,o=n?n.length:0;for(t.finish=!0,S.queue(this,a,[]),r&&r.stop&&r.stop.call(this,!0),e=i.length;e--;)i[e].elem===this&&i[e].queue===a&&(i[e].anim.stop(!0),i.splice(e,1));for(e=0;e<o;e++)n[e]&&n[e].finish&&n[e].finish.call(this);delete t.finish})}}),S.each(["toggle","show","hide"],function(e,r){var i=S.fn[r];S.fn[r]=function(e,t,n){return null==e||"boolean"==typeof e?i.apply(this,arguments):this.animate(lt(r,!0),e,t,n)}}),S.each({slideDown:lt("show"),slideUp:lt("hide"),slideToggle:lt("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,r){S.fn[e]=function(e,t,n){return this.animate(r,e,t,n)}}),S.timers=[],S.fx.tick=function(){var e,t=0,n=S.timers;for(tt=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||S.fx.stop(),tt=void 0},S.fx.timer=function(e){S.timers.push(e),S.fx.start()},S.fx.interval=13,S.fx.start=function(){nt||(nt=!0,st())},S.fx.stop=function(){nt=null},S.fx.speeds={slow:600,fast:200,_default:400},S.fn.delay=function(r,e){return r=S.fx&&S.fx.speeds[r]||r,e=e||"fx",this.queue(e,function(e,t){var n=C.setTimeout(e,r);t.stop=function(){C.clearTimeout(n)}})},rt=E.createElement("input"),it=E.createElement("select").appendChild(E.createElement("option")),rt.type="checkbox",y.checkOn=""!==rt.value,y.optSelected=it.selected,(rt=E.createElement("input")).value="t",rt.type="radio",y.radioValue="t"===rt.value;var pt,dt=S.expr.attrHandle;S.fn.extend({attr:function(e,t){return $(this,S.attr,e,t,1<arguments.length)},removeAttr:function(e){return this.each(function(){S.removeAttr(this,e)})}}),S.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?S.prop(e,t,n):(1===o&&S.isXMLDoc(e)||(i=S.attrHooks[t.toLowerCase()]||(S.expr.match.bool.test(t)?pt:void 0)),void 0!==n?null===n?void S.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=S.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!y.radioValue&&"radio"===t&&A(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(P);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),pt={set:function(e,t,n){return!1===t?S.removeAttr(e,n):e.setAttribute(n,n),n}},S.each(S.expr.match.bool.source.match(/\w+/g),function(e,t){var a=dt[t]||S.find.attr;dt[t]=function(e,t,n){var r,i,o=t.toLowerCase();return n||(i=dt[o],dt[o]=r,r=null!=a(e,t,n)?o:null,dt[o]=i),r}});var ht=/^(?:input|select|textarea|button)$/i,gt=/^(?:a|area)$/i;function vt(e){return(e.match(P)||[]).join(" ")}function yt(e){return e.getAttribute&&e.getAttribute("class")||""}function mt(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(P)||[]}S.fn.extend({prop:function(e,t){return $(this,S.prop,e,t,1<arguments.length)},removeProp:function(e){return this.each(function(){delete this[S.propFix[e]||e]})}}),S.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&S.isXMLDoc(e)||(t=S.propFix[t]||t,i=S.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=S.find.attr(e,"tabindex");return t?parseInt(t,10):ht.test(e.nodeName)||gt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),y.optSelected||(S.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),S.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){S.propFix[this.toLowerCase()]=this}),S.fn.extend({addClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){S(this).addClass(t.call(this,e,yt(this)))});if((e=mt(t)).length)while(n=this[u++])if(i=yt(n),r=1===n.nodeType&&" "+vt(i)+" "){a=0;while(o=e[a++])r.indexOf(" "+o+" ")<0&&(r+=o+" ");i!==(s=vt(r))&&n.setAttribute("class",s)}return this},removeClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){S(this).removeClass(t.call(this,e,yt(this)))});if(!arguments.length)return this.attr("class","");if((e=mt(t)).length)while(n=this[u++])if(i=yt(n),r=1===n.nodeType&&" "+vt(i)+" "){a=0;while(o=e[a++])while(-1<r.indexOf(" "+o+" "))r=r.replace(" "+o+" "," ");i!==(s=vt(r))&&n.setAttribute("class",s)}return this},toggleClass:function(i,t){var o=typeof i,a="string"===o||Array.isArray(i);return"boolean"==typeof t&&a?t?this.addClass(i):this.removeClass(i):m(i)?this.each(function(e){S(this).toggleClass(i.call(this,e,yt(this),t),t)}):this.each(function(){var e,t,n,r;if(a){t=0,n=S(this),r=mt(i);while(e=r[t++])n.hasClass(e)?n.removeClass(e):n.addClass(e)}else void 0!==i&&"boolean"!==o||((e=yt(this))&&Y.set(this,"__className__",e),this.setAttribute&&this.setAttribute("class",e||!1===i?"":Y.get(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&-1<(" "+vt(yt(n))+" ").indexOf(t))return!0;return!1}});var xt=/\r/g;S.fn.extend({val:function(n){var r,e,i,t=this[0];return arguments.length?(i=m(n),this.each(function(e){var t;1===this.nodeType&&(null==(t=i?n.call(this,e,S(this).val()):n)?t="":"number"==typeof t?t+="":Array.isArray(t)&&(t=S.map(t,function(e){return null==e?"":e+""})),(r=S.valHooks[this.type]||S.valHooks[this.nodeName.toLowerCase()])&&"set"in r&&void 0!==r.set(this,t,"value")||(this.value=t))})):t?(r=S.valHooks[t.type]||S.valHooks[t.nodeName.toLowerCase()])&&"get"in r&&void 0!==(e=r.get(t,"value"))?e:"string"==typeof(e=t.value)?e.replace(xt,""):null==e?"":e:void 0}}),S.extend({valHooks:{option:{get:function(e){var t=S.find.attr(e,"value");return null!=t?t:vt(S.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!A(n.parentNode,"optgroup"))){if(t=S(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=S.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=-1<S.inArray(S.valHooks.option.get(r),o))&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),S.each(["radio","checkbox"],function(){S.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=-1<S.inArray(S(e).val(),t)}},y.checkOn||(S.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),y.focusin="onfocusin"in C;var bt=/^(?:focusinfocus|focusoutblur)$/,wt=function(e){e.stopPropagation()};S.extend(S.event,{trigger:function(e,t,n,r){var i,o,a,s,u,l,c,f,p=[n||E],d=v.call(e,"type")?e.type:e,h=v.call(e,"namespace")?e.namespace.split("."):[];if(o=f=a=n=n||E,3!==n.nodeType&&8!==n.nodeType&&!bt.test(d+S.event.triggered)&&(-1<d.indexOf(".")&&(d=(h=d.split(".")).shift(),h.sort()),u=d.indexOf(":")<0&&"on"+d,(e=e[S.expando]?e:new S.Event(d,"object"==typeof e&&e)).isTrigger=r?2:3,e.namespace=h.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=n),t=null==t?[e]:S.makeArray(t,[e]),c=S.event.special[d]||{},r||!c.trigger||!1!==c.trigger.apply(n,t))){if(!r&&!c.noBubble&&!x(n)){for(s=c.delegateType||d,bt.test(s+d)||(o=o.parentNode);o;o=o.parentNode)p.push(o),a=o;a===(n.ownerDocument||E)&&p.push(a.defaultView||a.parentWindow||C)}i=0;while((o=p[i++])&&!e.isPropagationStopped())f=o,e.type=1<i?s:c.bindType||d,(l=(Y.get(o,"events")||Object.create(null))[e.type]&&Y.get(o,"handle"))&&l.apply(o,t),(l=u&&o[u])&&l.apply&&V(o)&&(e.result=l.apply(o,t),!1===e.result&&e.preventDefault());return e.type=d,r||e.isDefaultPrevented()||c._default&&!1!==c._default.apply(p.pop(),t)||!V(n)||u&&m(n[d])&&!x(n)&&((a=n[u])&&(n[u]=null),S.event.triggered=d,e.isPropagationStopped()&&f.addEventListener(d,wt),n[d](),e.isPropagationStopped()&&f.removeEventListener(d,wt),S.event.triggered=void 0,a&&(n[u]=a)),e.result}},simulate:function(e,t,n){var r=S.extend(new S.Event,n,{type:e,isSimulated:!0});S.event.trigger(r,null,t)}}),S.fn.extend({trigger:function(e,t){return this.each(function(){S.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return S.event.trigger(e,t,n,!0)}}),y.focusin||S.each({focus:"focusin",blur:"focusout"},function(n,r){var i=function(e){S.event.simulate(r,e.target,S.event.fix(e))};S.event.special[r]={setup:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r);t||e.addEventListener(n,i,!0),Y.access(e,r,(t||0)+1)},teardown:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r)-1;t?Y.access(e,r,t):(e.removeEventListener(n,i,!0),Y.remove(e,r))}}});var Tt=C.location,Ct={guid:Date.now()},Et=/\?/;S.parseXML=function(e){var t;if(!e||"string"!=typeof e)return null;try{t=(new C.DOMParser).parseFromString(e,"text/xml")}catch(e){t=void 0}return t&&!t.getElementsByTagName("parsererror").length||S.error("Invalid XML: "+e),t};var St=/\[\]$/,kt=/\r?\n/g,At=/^(?:submit|button|image|reset|file)$/i,Nt=/^(?:input|select|textarea|keygen)/i;function Dt(n,e,r,i){var t;if(Array.isArray(e))S.each(e,function(e,t){r||St.test(n)?i(n,t):Dt(n+"["+("object"==typeof t&&null!=t?e:"")+"]",t,r,i)});else if(r||"object"!==w(e))i(n,e);else for(t in e)Dt(n+"["+t+"]",e[t],r,i)}S.param=function(e,t){var n,r=[],i=function(e,t){var n=m(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(null==e)return"";if(Array.isArray(e)||e.jquery&&!S.isPlainObject(e))S.each(e,function(){i(this.name,this.value)});else for(n in e)Dt(n,e[n],t,i);return r.join("&")},S.fn.extend({serialize:function(){return S.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=S.prop(this,"elements");return e?S.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!S(this).is(":disabled")&&Nt.test(this.nodeName)&&!At.test(e)&&(this.checked||!pe.test(e))}).map(function(e,t){var n=S(this).val();return null==n?null:Array.isArray(n)?S.map(n,function(e){return{name:t.name,value:e.replace(kt,"\r\n")}}):{name:t.name,value:n.replace(kt,"\r\n")}}).get()}});var jt=/%20/g,qt=/#.*$/,Lt=/([?&])_=[^&]*/,Ht=/^(.*?):[ \t]*([^\r\n]*)$/gm,Ot=/^(?:GET|HEAD)$/,Pt=/^\/\//,Rt={},Mt={},It="*/".concat("*"),Wt=E.createElement("a");function Ft(o){return function(e,t){"string"!=typeof e&&(t=e,e="*");var n,r=0,i=e.toLowerCase().match(P)||[];if(m(t))while(n=i[r++])"+"===n[0]?(n=n.slice(1)||"*",(o[n]=o[n]||[]).unshift(t)):(o[n]=o[n]||[]).push(t)}}function Bt(t,i,o,a){var s={},u=t===Mt;function l(e){var r;return s[e]=!0,S.each(t[e]||[],function(e,t){var n=t(i,o,a);return"string"!=typeof n||u||s[n]?u?!(r=n):void 0:(i.dataTypes.unshift(n),l(n),!1)}),r}return l(i.dataTypes[0])||!s["*"]&&l("*")}function $t(e,t){var n,r,i=S.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&S.extend(!0,e,r),e}Wt.href=Tt.href,S.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Tt.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Tt.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":It,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":S.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?$t($t(e,S.ajaxSettings),t):$t(S.ajaxSettings,e)},ajaxPrefilter:Ft(Rt),ajaxTransport:Ft(Mt),ajax:function(e,t){"object"==typeof e&&(t=e,e=void 0),t=t||{};var c,f,p,n,d,r,h,g,i,o,v=S.ajaxSetup({},t),y=v.context||v,m=v.context&&(y.nodeType||y.jquery)?S(y):S.event,x=S.Deferred(),b=S.Callbacks("once memory"),w=v.statusCode||{},a={},s={},u="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(h){if(!n){n={};while(t=Ht.exec(p))n[t[1].toLowerCase()+" "]=(n[t[1].toLowerCase()+" "]||[]).concat(t[2])}t=n[e.toLowerCase()+" "]}return null==t?null:t.join(", ")},getAllResponseHeaders:function(){return h?p:null},setRequestHeader:function(e,t){return null==h&&(e=s[e.toLowerCase()]=s[e.toLowerCase()]||e,a[e]=t),this},overrideMimeType:function(e){return null==h&&(v.mimeType=e),this},statusCode:function(e){var t;if(e)if(h)T.always(e[T.status]);else for(t in e)w[t]=[w[t],e[t]];return this},abort:function(e){var t=e||u;return c&&c.abort(t),l(0,t),this}};if(x.promise(T),v.url=((e||v.url||Tt.href)+"").replace(Pt,Tt.protocol+"//"),v.type=t.method||t.type||v.method||v.type,v.dataTypes=(v.dataType||"*").toLowerCase().match(P)||[""],null==v.crossDomain){r=E.createElement("a");try{r.href=v.url,r.href=r.href,v.crossDomain=Wt.protocol+"//"+Wt.host!=r.protocol+"//"+r.host}catch(e){v.crossDomain=!0}}if(v.data&&v.processData&&"string"!=typeof v.data&&(v.data=S.param(v.data,v.traditional)),Bt(Rt,v,t,T),h)return T;for(i in(g=S.event&&v.global)&&0==S.active++&&S.event.trigger("ajaxStart"),v.type=v.type.toUpperCase(),v.hasContent=!Ot.test(v.type),f=v.url.replace(qt,""),v.hasContent?v.data&&v.processData&&0===(v.contentType||"").indexOf("application/x-www-form-urlencoded")&&(v.data=v.data.replace(jt,"+")):(o=v.url.slice(f.length),v.data&&(v.processData||"string"==typeof v.data)&&(f+=(Et.test(f)?"&":"?")+v.data,delete v.data),!1===v.cache&&(f=f.replace(Lt,"$1"),o=(Et.test(f)?"&":"?")+"_="+Ct.guid+++o),v.url=f+o),v.ifModified&&(S.lastModified[f]&&T.setRequestHeader("If-Modified-Since",S.lastModified[f]),S.etag[f]&&T.setRequestHeader("If-None-Match",S.etag[f])),(v.data&&v.hasContent&&!1!==v.contentType||t.contentType)&&T.setRequestHeader("Content-Type",v.contentType),T.setRequestHeader("Accept",v.dataTypes[0]&&v.accepts[v.dataTypes[0]]?v.accepts[v.dataTypes[0]]+("*"!==v.dataTypes[0]?", "+It+"; q=0.01":""):v.accepts["*"]),v.headers)T.setRequestHeader(i,v.headers[i]);if(v.beforeSend&&(!1===v.beforeSend.call(y,T,v)||h))return T.abort();if(u="abort",b.add(v.complete),T.done(v.success),T.fail(v.error),c=Bt(Mt,v,t,T)){if(T.readyState=1,g&&m.trigger("ajaxSend",[T,v]),h)return T;v.async&&0<v.timeout&&(d=C.setTimeout(function(){T.abort("timeout")},v.timeout));try{h=!1,c.send(a,l)}catch(e){if(h)throw e;l(-1,e)}}else l(-1,"No Transport");function l(e,t,n,r){var i,o,a,s,u,l=t;h||(h=!0,d&&C.clearTimeout(d),c=void 0,p=r||"",T.readyState=0<e?4:0,i=200<=e&&e<300||304===e,n&&(s=function(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}(v,T,n)),!i&&-1<S.inArray("script",v.dataTypes)&&(v.converters["text script"]=function(){}),s=function(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}(v,s,T,i),i?(v.ifModified&&((u=T.getResponseHeader("Last-Modified"))&&(S.lastModified[f]=u),(u=T.getResponseHeader("etag"))&&(S.etag[f]=u)),204===e||"HEAD"===v.type?l="nocontent":304===e?l="notmodified":(l=s.state,o=s.data,i=!(a=s.error))):(a=l,!e&&l||(l="error",e<0&&(e=0))),T.status=e,T.statusText=(t||l)+"",i?x.resolveWith(y,[o,l,T]):x.rejectWith(y,[T,l,a]),T.statusCode(w),w=void 0,g&&m.trigger(i?"ajaxSuccess":"ajaxError",[T,v,i?o:a]),b.fireWith(y,[T,l]),g&&(m.trigger("ajaxComplete",[T,v]),--S.active||S.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return S.get(e,t,n,"json")},getScript:function(e,t){return S.get(e,void 0,t,"script")}}),S.each(["get","post"],function(e,i){S[i]=function(e,t,n,r){return m(t)&&(r=r||n,n=t,t=void 0),S.ajax(S.extend({url:e,type:i,dataType:r,data:t,success:n},S.isPlainObject(e)&&e))}}),S.ajaxPrefilter(function(e){var t;for(t in e.headers)"content-type"===t.toLowerCase()&&(e.contentType=e.headers[t]||"")}),S._evalUrl=function(e,t,n){return S.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(e){S.globalEval(e,t,n)}})},S.fn.extend({wrapAll:function(e){var t;return this[0]&&(m(e)&&(e=e.call(this[0])),t=S(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(n){return m(n)?this.each(function(e){S(this).wrapInner(n.call(this,e))}):this.each(function(){var e=S(this),t=e.contents();t.length?t.wrapAll(n):e.append(n)})},wrap:function(t){var n=m(t);return this.each(function(e){S(this).wrapAll(n?t.call(this,e):t)})},unwrap:function(e){return this.parent(e).not("body").each(function(){S(this).replaceWith(this.childNodes)}),this}}),S.expr.pseudos.hidden=function(e){return!S.expr.pseudos.visible(e)},S.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},S.ajaxSettings.xhr=function(){try{return new C.XMLHttpRequest}catch(e){}};var _t={0:200,1223:204},zt=S.ajaxSettings.xhr();y.cors=!!zt&&"withCredentials"in zt,y.ajax=zt=!!zt,S.ajaxTransport(function(i){var o,a;if(y.cors||zt&&!i.crossDomain)return{send:function(e,t){var n,r=i.xhr();if(r.open(i.type,i.url,i.async,i.username,i.password),i.xhrFields)for(n in i.xhrFields)r[n]=i.xhrFields[n];for(n in i.mimeType&&r.overrideMimeType&&r.overrideMimeType(i.mimeType),i.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest"),e)r.setRequestHeader(n,e[n]);o=function(e){return function(){o&&(o=a=r.onload=r.onerror=r.onabort=r.ontimeout=r.onreadystatechange=null,"abort"===e?r.abort():"error"===e?"number"!=typeof r.status?t(0,"error"):t(r.status,r.statusText):t(_t[r.status]||r.status,r.statusText,"text"!==(r.responseType||"text")||"string"!=typeof r.responseText?{binary:r.response}:{text:r.responseText},r.getAllResponseHeaders()))}},r.onload=o(),a=r.onerror=r.ontimeout=o("error"),void 0!==r.onabort?r.onabort=a:r.onreadystatechange=function(){4===r.readyState&&C.setTimeout(function(){o&&a()})},o=o("abort");try{r.send(i.hasContent&&i.data||null)}catch(e){if(o)throw e}},abort:function(){o&&o()}}}),S.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),S.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return S.globalEval(e),e}}}),S.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),S.ajaxTransport("script",function(n){var r,i;if(n.crossDomain||n.scriptAttrs)return{send:function(e,t){r=S("<script>").attr(n.scriptAttrs||{}).prop({charset:n.scriptCharset,src:n.url}).on("load error",i=function(e){r.remove(),i=null,e&&t("error"===e.type?404:200,e.type)}),E.head.appendChild(r[0])},abort:function(){i&&i()}}});var Ut,Xt=[],Vt=/(=)\?(?=&|$)|\?\?/;S.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Xt.pop()||S.expando+"_"+Ct.guid++;return this[e]=!0,e}}),S.ajaxPrefilter("json jsonp",function(e,t,n){var r,i,o,a=!1!==e.jsonp&&(Vt.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&Vt.test(e.data)&&"data");if(a||"jsonp"===e.dataTypes[0])return r=e.jsonpCallback=m(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,a?e[a]=e[a].replace(Vt,"$1"+r):!1!==e.jsonp&&(e.url+=(Et.test(e.url)?"&":"?")+e.jsonp+"="+r),e.converters["script json"]=function(){return o||S.error(r+" was not called"),o[0]},e.dataTypes[0]="json",i=C[r],C[r]=function(){o=arguments},n.always(function(){void 0===i?S(C).removeProp(r):C[r]=i,e[r]&&(e.jsonpCallback=t.jsonpCallback,Xt.push(r)),o&&m(i)&&i(o[0]),o=i=void 0}),"script"}),y.createHTMLDocument=((Ut=E.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===Ut.childNodes.length),S.parseHTML=function(e,t,n){return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(y.createHTMLDocument?((r=(t=E.implementation.createHTMLDocument("")).createElement("base")).href=E.location.href,t.head.appendChild(r)):t=E),o=!n&&[],(i=N.exec(e))?[t.createElement(i[1])]:(i=xe([e],t,o),o&&o.length&&S(o).remove(),S.merge([],i.childNodes)));var r,i,o},S.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return-1<s&&(r=vt(e.slice(s)),e=e.slice(0,s)),m(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),0<a.length&&S.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?S("<div>").append(S.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},S.expr.pseudos.animated=function(t){return S.grep(S.timers,function(e){return t===e.elem}).length},S.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l=S.css(e,"position"),c=S(e),f={};"static"===l&&(e.style.position="relative"),s=c.offset(),o=S.css(e,"top"),u=S.css(e,"left"),("absolute"===l||"fixed"===l)&&-1<(o+u).indexOf("auto")?(a=(r=c.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),m(t)&&(t=t.call(e,n,S.extend({},s))),null!=t.top&&(f.top=t.top-s.top+a),null!=t.left&&(f.left=t.left-s.left+i),"using"in t?t.using.call(e,f):("number"==typeof f.top&&(f.top+="px"),"number"==typeof f.left&&(f.left+="px"),c.css(f))}},S.fn.extend({offset:function(t){if(arguments.length)return void 0===t?this:this.each(function(e){S.offset.setOffset(this,t,e)});var e,n,r=this[0];return r?r.getClientRects().length?(e=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:e.top+n.pageYOffset,left:e.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===S.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===S.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=S(e).offset()).top+=S.css(e,"borderTopWidth",!0),i.left+=S.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-S.css(r,"marginTop",!0),left:t.left-i.left-S.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===S.css(e,"position"))e=e.offsetParent;return e||re})}}),S.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,i){var o="pageYOffset"===i;S.fn[t]=function(e){return $(this,function(e,t,n){var r;if(x(e)?r=e:9===e.nodeType&&(r=e.defaultView),void 0===n)return r?r[i]:e[t];r?r.scrollTo(o?r.pageXOffset:n,o?n:r.pageYOffset):e[t]=n},t,e,arguments.length)}}),S.each(["top","left"],function(e,n){S.cssHooks[n]=$e(y.pixelPosition,function(e,t){if(t)return t=Be(e,n),Me.test(t)?S(e).position()[n]+"px":t})}),S.each({Height:"height",Width:"width"},function(a,s){S.each({padding:"inner"+a,content:s,"":"outer"+a},function(r,o){S.fn[o]=function(e,t){var n=arguments.length&&(r||"boolean"!=typeof e),i=r||(!0===e||!0===t?"margin":"border");return $(this,function(e,t,n){var r;return x(e)?0===o.indexOf("outer")?e["inner"+a]:e.document.documentElement["client"+a]:9===e.nodeType?(r=e.documentElement,Math.max(e.body["scroll"+a],r["scroll"+a],e.body["offset"+a],r["offset"+a],r["client"+a])):void 0===n?S.css(e,t,i):S.style(e,t,n,i)},s,n?e:void 0,n)}})}),S.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){S.fn[t]=function(e){return this.on(t,e)}}),S.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),S.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,n){S.fn[n]=function(e,t){return 0<arguments.length?this.on(n,null,e,t):this.trigger(n)}});var Gt=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;S.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),m(e))return r=s.call(arguments,2),(i=function(){return e.apply(t||this,r.concat(s.call(arguments)))}).guid=e.guid=e.guid||S.guid++,i},S.holdReady=function(e){e?S.readyWait++:S.ready(!0)},S.isArray=Array.isArray,S.parseJSON=JSON.parse,S.nodeName=A,S.isFunction=m,S.isWindow=x,S.camelCase=X,S.type=w,S.now=Date.now,S.isNumeric=function(e){var t=S.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},S.trim=function(e){return null==e?"":(e+"").replace(Gt,"")},"function"==typeof define&&define.amd&&define("jquery",[],function(){return S});var Yt=C.jQuery,Qt=C.$;return S.noConflict=function(e){return C.$===S&&(C.$=Qt),e&&C.jQuery===S&&(C.jQuery=Yt),S},"undefined"==typeof e&&(C.jQuery=C.$=S),S});
;
!function(t,e,i){!function(){var s,a,n,h="2.2.3",o="datepicker",r=".datepicker-here",c=!1,d='<div class="datepicker"><i class="datepicker--pointer"></i><nav class="datepicker--nav"></nav><div class="datepicker--content"></div></div>',l={classes:"",inline:!1,language:"ru",startDate:new Date,firstDay:"",weekends:[6,0],dateFormat:"",altField:"",altFieldDateFormat:"@",toggleSelected:!0,keyboardNav:!0,position:"bottom left",offset:12,view:"days",minView:"days",showOtherMonths:!0,selectOtherMonths:!0,moveToOtherMonthsOnSelect:!0,showOtherYears:!0,selectOtherYears:!0,moveToOtherYearsOnSelect:!0,minDate:"",maxDate:"",disableNavWhenOutOfRange:!0,multipleDates:!1,multipleDatesSeparator:",",range:!1,todayButton:!1,clearButton:!1,showEvent:"focus",autoClose:!1,monthsField:"monthsShort",prevHtml:'<svg><path d="M 17,12 l -5,5 l 5,5"></path></svg>',nextHtml:'<svg><path d="M 14,12 l 5,5 l -5,5"></path></svg>',navTitles:{days:"MM, <i>yyyy</i>",months:"yyyy",years:"yyyy1 - yyyy2"},timepicker:!1,onlyTimepicker:!1,dateTimeSeparator:" ",timeFormat:"",minHours:0,maxHours:24,minMinutes:0,maxMinutes:59,hoursStep:1,minutesStep:1,onSelect:"",onShow:"",onHide:"",onChangeMonth:"",onChangeYear:"",onChangeDecade:"",onChangeView:"",onRenderCell:""},u={ctrlRight:[17,39],ctrlUp:[17,38],ctrlLeft:[17,37],ctrlDown:[17,40],shiftRight:[16,39],shiftUp:[16,38],shiftLeft:[16,37],shiftDown:[16,40],altUp:[18,38],altRight:[18,39],altLeft:[18,37],altDown:[18,40],ctrlShiftUp:[16,17,38]},m=function(t,a){this.el=t,this.$el=e(t),this.opts=e.extend(!0,{},l,a,this.$el.data()),s==i&&(s=e("body")),this.opts.startDate||(this.opts.startDate=new Date),"INPUT"==this.el.nodeName&&(this.elIsInput=!0),this.opts.altField&&(this.$altField="string"==typeof this.opts.altField?e(this.opts.altField):this.opts.altField),this.inited=!1,this.visible=!1,this.silent=!1,this.currentDate=this.opts.startDate,this.currentView=this.opts.view,this._createShortCuts(),this.selectedDates=[],this.views={},this.keys=[],this.minRange="",this.maxRange="",this._prevOnSelectValue="",this.init()};n=m,n.prototype={VERSION:h,viewIndexes:["days","months","years"],init:function(){c||this.opts.inline||!this.elIsInput||this._buildDatepickersContainer(),this._buildBaseHtml(),this._defineLocale(this.opts.language),this._syncWithMinMaxDates(),this.elIsInput&&(this.opts.inline||(this._setPositionClasses(this.opts.position),this._bindEvents()),this.opts.keyboardNav&&!this.opts.onlyTimepicker&&this._bindKeyboardEvents(),this.$datepicker.on("mousedown",this._onMouseDownDatepicker.bind(this)),this.$datepicker.on("mouseup",this._onMouseUpDatepicker.bind(this))),this.opts.classes&&this.$datepicker.addClass(this.opts.classes),this.opts.timepicker&&(this.timepicker=new e.fn.datepicker.Timepicker(this,this.opts),this._bindTimepickerEvents()),this.opts.onlyTimepicker&&this.$datepicker.addClass("-only-timepicker-"),this.views[this.currentView]=new e.fn.datepicker.Body(this,this.currentView,this.opts),this.views[this.currentView].show(),this.nav=new e.fn.datepicker.Navigation(this,this.opts),this.view=this.currentView,this.$el.on("clickCell.adp",this._onClickCell.bind(this)),this.$datepicker.on("mouseenter",".datepicker--cell",this._onMouseEnterCell.bind(this)),this.$datepicker.on("mouseleave",".datepicker--cell",this._onMouseLeaveCell.bind(this)),this.inited=!0},_createShortCuts:function(){this.minDate=this.opts.minDate?this.opts.minDate:new Date(-86399999136e5),this.maxDate=this.opts.maxDate?this.opts.maxDate:new Date(86399999136e5)},_bindEvents:function(){this.$el.on(this.opts.showEvent+".adp",this._onShowEvent.bind(this)),this.$el.on("mouseup.adp",this._onMouseUpEl.bind(this)),this.$el.on("blur.adp",this._onBlur.bind(this)),this.$el.on("keyup.adp",this._onKeyUpGeneral.bind(this)),e(t).on("resize.adp",this._onResize.bind(this)),e("body").on("mouseup.adp",this._onMouseUpBody.bind(this))},_bindKeyboardEvents:function(){this.$el.on("keydown.adp",this._onKeyDown.bind(this)),this.$el.on("keyup.adp",this._onKeyUp.bind(this)),this.$el.on("hotKey.adp",this._onHotKey.bind(this))},_bindTimepickerEvents:function(){this.$el.on("timeChange.adp",this._onTimeChange.bind(this))},isWeekend:function(t){return-1!==this.opts.weekends.indexOf(t)},_defineLocale:function(t){"string"==typeof t?(this.loc=e.fn.datepicker.language[t],this.loc||(console.warn("Can't find language \""+t+'" in Datepicker.language, will use "ru" instead'),this.loc=e.extend(!0,{},e.fn.datepicker.language.ru)),this.loc=e.extend(!0,{},e.fn.datepicker.language.ru,e.fn.datepicker.language[t])):this.loc=e.extend(!0,{},e.fn.datepicker.language.ru,t),this.opts.dateFormat&&(this.loc.dateFormat=this.opts.dateFormat),this.opts.timeFormat&&(this.loc.timeFormat=this.opts.timeFormat),""!==this.opts.firstDay&&(this.loc.firstDay=this.opts.firstDay),this.opts.timepicker&&(this.loc.dateFormat=[this.loc.dateFormat,this.loc.timeFormat].join(this.opts.dateTimeSeparator)),this.opts.onlyTimepicker&&(this.loc.dateFormat=this.loc.timeFormat);var i=this._getWordBoundaryRegExp;(this.loc.timeFormat.match(i("aa"))||this.loc.timeFormat.match(i("AA")))&&(this.ampm=!0)},_buildDatepickersContainer:function(){c=!0,s.append('<div class="datepickers-container" id="datepickers-container"></div>'),a=e("#datepickers-container")},_buildBaseHtml:function(){var t,i=e('<div class="datepicker-inline">');t="INPUT"==this.el.nodeName?this.opts.inline?i.insertAfter(this.$el):a:i.appendTo(this.$el),this.$datepicker=e(d).appendTo(t),this.$content=e(".datepicker--content",this.$datepicker),this.$nav=e(".datepicker--nav",this.$datepicker)},_triggerOnChange:function(){if(!this.selectedDates.length){if(""===this._prevOnSelectValue)return;return this._prevOnSelectValue="",this.opts.onSelect("","",this)}var t,e=this.selectedDates,i=n.getParsedDate(e[0]),s=this,a=new Date(i.year,i.month,i.date,i.hours,i.minutes);t=e.map(function(t){return s.formatDate(s.loc.dateFormat,t)}).join(this.opts.multipleDatesSeparator),(this.opts.multipleDates||this.opts.range)&&(a=e.map(function(t){var e=n.getParsedDate(t);return new Date(e.year,e.month,e.date,e.hours,e.minutes)})),this._prevOnSelectValue=t,this.opts.onSelect(t,a,this)},next:function(){var t=this.parsedDate,e=this.opts;switch(this.view){case"days":this.date=new Date(t.year,t.month+1,1),e.onChangeMonth&&e.onChangeMonth(this.parsedDate.month,this.parsedDate.year);break;case"months":this.date=new Date(t.year+1,t.month,1),e.onChangeYear&&e.onChangeYear(this.parsedDate.year);break;case"years":this.date=new Date(t.year+10,0,1),e.onChangeDecade&&e.onChangeDecade(this.curDecade)}},prev:function(){var t=this.parsedDate,e=this.opts;switch(this.view){case"days":this.date=new Date(t.year,t.month-1,1),e.onChangeMonth&&e.onChangeMonth(this.parsedDate.month,this.parsedDate.year);break;case"months":this.date=new Date(t.year-1,t.month,1),e.onChangeYear&&e.onChangeYear(this.parsedDate.year);break;case"years":this.date=new Date(t.year-10,0,1),e.onChangeDecade&&e.onChangeDecade(this.curDecade)}},formatDate:function(t,e){e=e||this.date;var i,s=t,a=this._getWordBoundaryRegExp,h=this.loc,o=n.getLeadingZeroNum,r=n.getDecade(e),c=n.getParsedDate(e),d=c.fullHours,l=c.hours,u=t.match(a("aa"))||t.match(a("AA")),m="am",p=this._replacer;switch(this.opts.timepicker&&this.timepicker&&u&&(i=this.timepicker._getValidHoursFromDate(e,u),d=o(i.hours),l=i.hours,m=i.dayPeriod),!0){case/@/.test(s):s=s.replace(/@/,e.getTime());case/aa/.test(s):s=p(s,a("aa"),m);case/AA/.test(s):s=p(s,a("AA"),m.toUpperCase());case/dd/.test(s):s=p(s,a("dd"),c.fullDate);case/d/.test(s):s=p(s,a("d"),c.date);case/DD/.test(s):s=p(s,a("DD"),h.days[c.day]);case/D/.test(s):s=p(s,a("D"),h.daysShort[c.day]);case/mm/.test(s):s=p(s,a("mm"),c.fullMonth);case/m/.test(s):s=p(s,a("m"),c.month+1);case/MM/.test(s):s=p(s,a("MM"),this.loc.months[c.month]);case/M/.test(s):s=p(s,a("M"),h.monthsShort[c.month]);case/ii/.test(s):s=p(s,a("ii"),c.fullMinutes);case/i/.test(s):s=p(s,a("i"),c.minutes);case/hh/.test(s):s=p(s,a("hh"),d);case/h/.test(s):s=p(s,a("h"),l);case/yyyy/.test(s):s=p(s,a("yyyy"),c.year);case/yyyy1/.test(s):s=p(s,a("yyyy1"),r[0]);case/yyyy2/.test(s):s=p(s,a("yyyy2"),r[1]);case/yy/.test(s):s=p(s,a("yy"),c.year.toString().slice(-2))}return s},_replacer:function(t,e,i){return t.replace(e,function(t,e,s,a){return e+i+a})},_getWordBoundaryRegExp:function(t){var e="\\s|\\.|-|/|\\\\|,|\\$|\\!|\\?|:|;";return new RegExp("(^|>|"+e+")("+t+")($|<|"+e+")","g")},selectDate:function(t){var e=this,i=e.opts,s=e.parsedDate,a=e.selectedDates,h=a.length,o="";if(Array.isArray(t))return void t.forEach(function(t){e.selectDate(t)});if(t instanceof Date){if(this.lastSelectedDate=t,this.timepicker&&this.timepicker._setTime(t),e._trigger("selectDate",t),this.timepicker&&(t.setHours(this.timepicker.hours),t.setMinutes(this.timepicker.minutes)),"days"==e.view&&t.getMonth()!=s.month&&i.moveToOtherMonthsOnSelect&&(o=new Date(t.getFullYear(),t.getMonth(),1)),"years"==e.view&&t.getFullYear()!=s.year&&i.moveToOtherYearsOnSelect&&(o=new Date(t.getFullYear(),0,1)),o&&(e.silent=!0,e.date=o,e.silent=!1,e.nav._render()),i.multipleDates&&!i.range){if(h===i.multipleDates)return;e._isSelected(t)||e.selectedDates.push(t)}else i.range?2==h?(e.selectedDates=[t],e.minRange=t,e.maxRange=""):1==h?(e.selectedDates.push(t),e.maxRange?e.minRange=t:e.maxRange=t,n.bigger(e.maxRange,e.minRange)&&(e.maxRange=e.minRange,e.minRange=t),e.selectedDates=[e.minRange,e.maxRange]):(e.selectedDates=[t],e.minRange=t):e.selectedDates=[t];e._setInputValue(),i.onSelect&&e._triggerOnChange(),i.autoClose&&!this.timepickerIsActive&&(i.multipleDates||i.range?i.range&&2==e.selectedDates.length&&e.hide():e.hide()),e.views[this.currentView]._render()}},removeDate:function(t){var e=this.selectedDates,i=this;if(t instanceof Date)return e.some(function(s,a){return n.isSame(s,t)?(e.splice(a,1),i.selectedDates.length?i.lastSelectedDate=i.selectedDates[i.selectedDates.length-1]:(i.minRange="",i.maxRange="",i.lastSelectedDate=""),i.views[i.currentView]._render(),i._setInputValue(),i.opts.onSelect&&i._triggerOnChange(),!0):void 0})},today:function(){this.silent=!0,this.view=this.opts.minView,this.silent=!1,this.date=new Date,this.opts.todayButton instanceof Date&&this.selectDate(this.opts.todayButton)},clear:function(){this.selectedDates=[],this.minRange="",this.maxRange="",this.views[this.currentView]._render(),this._setInputValue(),this.opts.onSelect&&this._triggerOnChange()},update:function(t,i){var s=arguments.length,a=this.lastSelectedDate;return 2==s?this.opts[t]=i:1==s&&"object"==typeof t&&(this.opts=e.extend(!0,this.opts,t)),this._createShortCuts(),this._syncWithMinMaxDates(),this._defineLocale(this.opts.language),this.nav._addButtonsIfNeed(),this.opts.onlyTimepicker||this.nav._render(),this.views[this.currentView]._render(),this.elIsInput&&!this.opts.inline&&(this._setPositionClasses(this.opts.position),this.visible&&this.setPosition(this.opts.position)),this.opts.classes&&this.$datepicker.addClass(this.opts.classes),this.opts.onlyTimepicker&&this.$datepicker.addClass("-only-timepicker-"),this.opts.timepicker&&(a&&this.timepicker._handleDate(a),this.timepicker._updateRanges(),this.timepicker._updateCurrentTime(),a&&(a.setHours(this.timepicker.hours),a.setMinutes(this.timepicker.minutes))),this._setInputValue(),this},_syncWithMinMaxDates:function(){var t=this.date.getTime();this.silent=!0,this.minTime>t&&(this.date=this.minDate),this.maxTime<t&&(this.date=this.maxDate),this.silent=!1},_isSelected:function(t,e){var i=!1;return this.selectedDates.some(function(s){return n.isSame(s,t,e)?(i=s,!0):void 0}),i},_setInputValue:function(){var t,e=this,i=e.opts,s=e.loc.dateFormat,a=i.altFieldDateFormat,n=e.selectedDates.map(function(t){return e.formatDate(s,t)});i.altField&&e.$altField.length&&(t=this.selectedDates.map(function(t){return e.formatDate(a,t)}),t=t.join(this.opts.multipleDatesSeparator),this.$altField.val(t)),n=n.join(this.opts.multipleDatesSeparator),this.$el.val(n)},_isInRange:function(t,e){var i=t.getTime(),s=n.getParsedDate(t),a=n.getParsedDate(this.minDate),h=n.getParsedDate(this.maxDate),o=new Date(s.year,s.month,a.date).getTime(),r=new Date(s.year,s.month,h.date).getTime(),c={day:i>=this.minTime&&i<=this.maxTime,month:o>=this.minTime&&r<=this.maxTime,year:s.year>=a.year&&s.year<=h.year};return e?c[e]:c.day},_getDimensions:function(t){var e=t.offset();return{width:t.outerWidth(),height:t.outerHeight(),left:e.left,top:e.top}},_getDateFromCell:function(t){var e=this.parsedDate,s=t.data("year")||e.year,a=t.data("month")==i?e.month:t.data("month"),n=t.data("date")||1;return new Date(s,a,n)},_setPositionClasses:function(t){t=t.split(" ");var e=t[0],i=t[1],s="datepicker -"+e+"-"+i+"- -from-"+e+"-";this.visible&&(s+=" active"),this.$datepicker.removeAttr("class").addClass(s)},setPosition:function(t){t=t||this.opts.position;var e,i,s=this._getDimensions(this.$el),a=this._getDimensions(this.$datepicker),n=t.split(" "),h=this.opts.offset,o=n[0],r=n[1];switch(o){case"top":e=s.top-a.height-h;break;case"right":i=s.left+s.width+h;break;case"bottom":e=s.top+s.height+h;break;case"left":i=s.left-a.width-h}switch(r){case"top":e=s.top;break;case"right":i=s.left+s.width-a.width;break;case"bottom":e=s.top+s.height-a.height;break;case"left":i=s.left;break;case"center":/left|right/.test(o)?e=s.top+s.height/2-a.height/2:i=s.left+s.width/2-a.width/2}this.$datepicker.css({left:i,top:e})},show:function(){var t=this.opts.onShow;this.setPosition(this.opts.position),this.$datepicker.addClass("active"),this.visible=!0,t&&this._bindVisionEvents(t)},hide:function(){var t=this.opts.onHide;this.$datepicker.removeClass("active").css({left:"-100000px"}),this.focused="",this.keys=[],this.inFocus=!1,this.visible=!1,this.$el.blur(),t&&this._bindVisionEvents(t)},down:function(t){this._changeView(t,"down")},up:function(t){this._changeView(t,"up")},_bindVisionEvents:function(t){this.$datepicker.off("transitionend.dp"),t(this,!1),this.$datepicker.one("transitionend.dp",t.bind(this,this,!0))},_changeView:function(t,e){t=t||this.focused||this.date;var i="up"==e?this.viewIndex+1:this.viewIndex-1;i>2&&(i=2),0>i&&(i=0),this.silent=!0,this.date=new Date(t.getFullYear(),t.getMonth(),1),this.silent=!1,this.view=this.viewIndexes[i]},_handleHotKey:function(t){var e,i,s,a=n.getParsedDate(this._getFocusedDate()),h=this.opts,o=!1,r=!1,c=!1,d=a.year,l=a.month,u=a.date;switch(t){case"ctrlRight":case"ctrlUp":l+=1,o=!0;break;case"ctrlLeft":case"ctrlDown":l-=1,o=!0;break;case"shiftRight":case"shiftUp":r=!0,d+=1;break;case"shiftLeft":case"shiftDown":r=!0,d-=1;break;case"altRight":case"altUp":c=!0,d+=10;break;case"altLeft":case"altDown":c=!0,d-=10;break;case"ctrlShiftUp":this.up()}s=n.getDaysCount(new Date(d,l)),i=new Date(d,l,u),u>s&&(u=s),i.getTime()<this.minTime?i=this.minDate:i.getTime()>this.maxTime&&(i=this.maxDate),this.focused=i,e=n.getParsedDate(i),o&&h.onChangeMonth&&h.onChangeMonth(e.month,e.year),r&&h.onChangeYear&&h.onChangeYear(e.year),c&&h.onChangeDecade&&h.onChangeDecade(this.curDecade)},_registerKey:function(t){var e=this.keys.some(function(e){return e==t});e||this.keys.push(t)},_unRegisterKey:function(t){var e=this.keys.indexOf(t);this.keys.splice(e,1)},_isHotKeyPressed:function(){var t,e=!1,i=this,s=this.keys.sort();for(var a in u)t=u[a],s.length==t.length&&t.every(function(t,e){return t==s[e]})&&(i._trigger("hotKey",a),e=!0);return e},_trigger:function(t,e){this.$el.trigger(t,e)},_focusNextCell:function(t,e){e=e||this.cellType;var i=n.getParsedDate(this._getFocusedDate()),s=i.year,a=i.month,h=i.date;if(!this._isHotKeyPressed()){switch(t){case 37:"day"==e?h-=1:"","month"==e?a-=1:"","year"==e?s-=1:"";break;case 38:"day"==e?h-=7:"","month"==e?a-=3:"","year"==e?s-=4:"";break;case 39:"day"==e?h+=1:"","month"==e?a+=1:"","year"==e?s+=1:"";break;case 40:"day"==e?h+=7:"","month"==e?a+=3:"","year"==e?s+=4:""}var o=new Date(s,a,h);o.getTime()<this.minTime?o=this.minDate:o.getTime()>this.maxTime&&(o=this.maxDate),this.focused=o}},_getFocusedDate:function(){var t=this.focused||this.selectedDates[this.selectedDates.length-1],e=this.parsedDate;if(!t)switch(this.view){case"days":t=new Date(e.year,e.month,(new Date).getDate());break;case"months":t=new Date(e.year,e.month,1);break;case"years":t=new Date(e.year,0,1)}return t},_getCell:function(t,i){i=i||this.cellType;var s,a=n.getParsedDate(t),h='.datepicker--cell[data-year="'+a.year+'"]';switch(i){case"month":h='[data-month="'+a.month+'"]';break;case"day":h+='[data-month="'+a.month+'"][data-date="'+a.date+'"]'}return s=this.views[this.currentView].$el.find(h),s.length?s:e("")},destroy:function(){var t=this;t.$el.off(".adp").data("datepicker",""),t.selectedDates=[],t.focused="",t.views={},t.keys=[],t.minRange="",t.maxRange="",t.opts.inline||!t.elIsInput?t.$datepicker.closest(".datepicker-inline").remove():t.$datepicker.remove()},_handleAlreadySelectedDates:function(t,e){this.opts.range?this.opts.toggleSelected?this.removeDate(e):2!=this.selectedDates.length&&this._trigger("clickCell",e):this.opts.toggleSelected&&this.removeDate(e),this.opts.toggleSelected||(this.lastSelectedDate=t,this.opts.timepicker&&(this.timepicker._setTime(t),this.timepicker.update()))},_onShowEvent:function(t){this.visible||this.show()},_onBlur:function(){!this.inFocus&&this.visible&&this.hide()},_onMouseDownDatepicker:function(t){this.inFocus=!0},_onMouseUpDatepicker:function(t){this.inFocus=!1,t.originalEvent.inFocus=!0,t.originalEvent.timepickerFocus||this.$el.focus()},_onKeyUpGeneral:function(t){var e=this.$el.val();e||this.clear()},_onResize:function(){this.visible&&this.setPosition()},_onMouseUpBody:function(t){t.originalEvent.inFocus||this.visible&&!this.inFocus&&this.hide()},_onMouseUpEl:function(t){t.originalEvent.inFocus=!0,setTimeout(this._onKeyUpGeneral.bind(this),4)},_onKeyDown:function(t){var e=t.which;if(this._registerKey(e),e>=37&&40>=e&&(t.preventDefault(),this._focusNextCell(e)),13==e&&this.focused){if(this._getCell(this.focused).hasClass("-disabled-"))return;if(this.view!=this.opts.minView)this.down();else{var i=this._isSelected(this.focused,this.cellType);if(!i)return this.timepicker&&(this.focused.setHours(this.timepicker.hours),this.focused.setMinutes(this.timepicker.minutes)),void this.selectDate(this.focused);this._handleAlreadySelectedDates(i,this.focused)}}27==e&&this.hide()},_onKeyUp:function(t){var e=t.which;this._unRegisterKey(e)},_onHotKey:function(t,e){this._handleHotKey(e)},_onMouseEnterCell:function(t){var i=e(t.target).closest(".datepicker--cell"),s=this._getDateFromCell(i);this.silent=!0,this.focused&&(this.focused=""),i.addClass("-focus-"),this.focused=s,this.silent=!1,this.opts.range&&1==this.selectedDates.length&&(this.minRange=this.selectedDates[0],this.maxRange="",n.less(this.minRange,this.focused)&&(this.maxRange=this.minRange,this.minRange=""),this.views[this.currentView]._update())},_onMouseLeaveCell:function(t){var i=e(t.target).closest(".datepicker--cell");i.removeClass("-focus-"),this.silent=!0,this.focused="",this.silent=!1},_onTimeChange:function(t,e,i){var s=new Date,a=this.selectedDates,n=!1;a.length&&(n=!0,s=this.lastSelectedDate),s.setHours(e),s.setMinutes(i),n||this._getCell(s).hasClass("-disabled-")?(this._setInputValue(),this.opts.onSelect&&this._triggerOnChange()):this.selectDate(s)},_onClickCell:function(t,e){this.timepicker&&(e.setHours(this.timepicker.hours),e.setMinutes(this.timepicker.minutes)),this.selectDate(e)},set focused(t){if(!t&&this.focused){var e=this._getCell(this.focused);e.length&&e.removeClass("-focus-")}this._focused=t,this.opts.range&&1==this.selectedDates.length&&(this.minRange=this.selectedDates[0],this.maxRange="",n.less(this.minRange,this._focused)&&(this.maxRange=this.minRange,this.minRange="")),this.silent||(this.date=t)},get focused(){return this._focused},get parsedDate(){return n.getParsedDate(this.date)},set date(t){return t instanceof Date?(this.currentDate=t,this.inited&&!this.silent&&(this.views[this.view]._render(),this.nav._render(),this.visible&&this.elIsInput&&this.setPosition()),t):void 0},get date(){return this.currentDate},set view(t){return this.viewIndex=this.viewIndexes.indexOf(t),this.viewIndex<0?void 0:(this.prevView=this.currentView,this.currentView=t,this.inited&&(this.views[t]?this.views[t]._render():this.views[t]=new e.fn.datepicker.Body(this,t,this.opts),this.views[this.prevView].hide(),this.views[t].show(),this.nav._render(),this.opts.onChangeView&&this.opts.onChangeView(t),this.elIsInput&&this.visible&&this.setPosition()),t)},get view(){return this.currentView},get cellType(){return this.view.substring(0,this.view.length-1)},get minTime(){var t=n.getParsedDate(this.minDate);return new Date(t.year,t.month,t.date).getTime()},get maxTime(){var t=n.getParsedDate(this.maxDate);return new Date(t.year,t.month,t.date).getTime()},get curDecade(){return n.getDecade(this.date)}},n.getDaysCount=function(t){return new Date(t.getFullYear(),t.getMonth()+1,0).getDate()},n.getParsedDate=function(t){return{year:t.getFullYear(),month:t.getMonth(),fullMonth:t.getMonth()+1<10?"0"+(t.getMonth()+1):t.getMonth()+1,date:t.getDate(),fullDate:t.getDate()<10?"0"+t.getDate():t.getDate(),day:t.getDay(),hours:t.getHours(),fullHours:t.getHours()<10?"0"+t.getHours():t.getHours(),minutes:t.getMinutes(),fullMinutes:t.getMinutes()<10?"0"+t.getMinutes():t.getMinutes()}},n.getDecade=function(t){var e=10*Math.floor(t.getFullYear()/10);return[e,e+9]},n.template=function(t,e){return t.replace(/#\{([\w]+)\}/g,function(t,i){return e[i]||0===e[i]?e[i]:void 0})},n.isSame=function(t,e,i){if(!t||!e)return!1;var s=n.getParsedDate(t),a=n.getParsedDate(e),h=i?i:"day",o={day:s.date==a.date&&s.month==a.month&&s.year==a.year,month:s.month==a.month&&s.year==a.year,year:s.year==a.year};return o[h]},n.less=function(t,e,i){return t&&e?e.getTime()<t.getTime():!1},n.bigger=function(t,e,i){return t&&e?e.getTime()>t.getTime():!1},n.getLeadingZeroNum=function(t){return parseInt(t)<10?"0"+t:t},n.resetTime=function(t){return"object"==typeof t?(t=n.getParsedDate(t),new Date(t.year,t.month,t.date)):void 0},e.fn.datepicker=function(t){return this.each(function(){if(e.data(this,o)){var i=e.data(this,o);i.opts=e.extend(!0,i.opts,t),i.update()}else e.data(this,o,new m(this,t))})},e.fn.datepicker.Constructor=m,e.fn.datepicker.language={ru:{days:["Воскресенье","Понедельник","Вторник","Среда","Четверг","Пятница","Суббота"],daysShort:["Вос","Пон","Вто","Сре","Чет","Пят","Суб"],daysMin:["Вс","Пн","Вт","Ср","Чт","Пт","Сб"],months:["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"],monthsShort:["Янв","Фев","Мар","Апр","Май","Июн","Июл","Авг","Сен","Окт","Ноя","Дек"],today:"Сегодня",clear:"Очистить",dateFormat:"dd.mm.yyyy",timeFormat:"hh:ii",firstDay:1}},e(function(){e(r).datepicker()})}(),function(){var t={days:'<div class="datepicker--days datepicker--body"><div class="datepicker--days-names"></div><div class="datepicker--cells datepicker--cells-days"></div></div>',months:'<div class="datepicker--months datepicker--body"><div class="datepicker--cells datepicker--cells-months"></div></div>',years:'<div class="datepicker--years datepicker--body"><div class="datepicker--cells datepicker--cells-years"></div></div>'},s=e.fn.datepicker,a=s.Constructor;s.Body=function(t,i,s){this.d=t,this.type=i,this.opts=s,this.$el=e(""),this.opts.onlyTimepicker||this.init()},s.Body.prototype={init:function(){this._buildBaseHtml(),this._render(),this._bindEvents()},_bindEvents:function(){this.$el.on("click",".datepicker--cell",e.proxy(this._onClickCell,this))},_buildBaseHtml:function(){this.$el=e(t[this.type]).appendTo(this.d.$content),this.$names=e(".datepicker--days-names",this.$el),this.$cells=e(".datepicker--cells",this.$el)},_getDayNamesHtml:function(t,e,s,a){return e=e!=i?e:t,s=s?s:"",a=a!=i?a:0,a>7?s:7==e?this._getDayNamesHtml(t,0,s,++a):(s+='<div class="datepicker--day-name'+(this.d.isWeekend(e)?" -weekend-":"")+'">'+this.d.loc.daysMin[e]+"</div>",this._getDayNamesHtml(t,++e,s,++a))},_getCellContents:function(t,e){var i="datepicker--cell datepicker--cell-"+e,s=new Date,n=this.d,h=a.resetTime(n.minRange),o=a.resetTime(n.maxRange),r=n.opts,c=a.getParsedDate(t),d={},l=c.date;switch(e){case"day":n.isWeekend(c.day)&&(i+=" -weekend-"),c.month!=this.d.parsedDate.month&&(i+=" -other-month-",r.selectOtherMonths||(i+=" -disabled-"),r.showOtherMonths||(l=""));break;case"month":l=n.loc[n.opts.monthsField][c.month];break;case"year":var u=n.curDecade;l=c.year,(c.year<u[0]||c.year>u[1])&&(i+=" -other-decade-",r.selectOtherYears||(i+=" -disabled-"),r.showOtherYears||(l=""))}return r.onRenderCell&&(d=r.onRenderCell(t,e)||{},l=d.html?d.html:l,i+=d.classes?" "+d.classes:""),r.range&&(a.isSame(h,t,e)&&(i+=" -range-from-"),a.isSame(o,t,e)&&(i+=" -range-to-"),1==n.selectedDates.length&&n.focused?((a.bigger(h,t)&&a.less(n.focused,t)||a.less(o,t)&&a.bigger(n.focused,t))&&(i+=" -in-range-"),a.less(o,t)&&a.isSame(n.focused,t)&&(i+=" -range-from-"),a.bigger(h,t)&&a.isSame(n.focused,t)&&(i+=" -range-to-")):2==n.selectedDates.length&&a.bigger(h,t)&&a.less(o,t)&&(i+=" -in-range-")),a.isSame(s,t,e)&&(i+=" -current-"),n.focused&&a.isSame(t,n.focused,e)&&(i+=" -focus-"),n._isSelected(t,e)&&(i+=" -selected-"),(!n._isInRange(t,e)||d.disabled)&&(i+=" -disabled-"),{html:l,classes:i}},_getDaysHtml:function(t){var e=a.getDaysCount(t),i=new Date(t.getFullYear(),t.getMonth(),1).getDay(),s=new Date(t.getFullYear(),t.getMonth(),e).getDay(),n=i-this.d.loc.firstDay,h=6-s+this.d.loc.firstDay;n=0>n?n+7:n,h=h>6?h-7:h;for(var o,r,c=-n+1,d="",l=c,u=e+h;u>=l;l++)r=t.getFullYear(),o=t.getMonth(),d+=this._getDayHtml(new Date(r,o,l));return d},_getDayHtml:function(t){var e=this._getCellContents(t,"day");return'<div class="'+e.classes+'" data-date="'+t.getDate()+'" data-month="'+t.getMonth()+'" data-year="'+t.getFullYear()+'">'+e.html+"</div>"},_getMonthsHtml:function(t){for(var e="",i=a.getParsedDate(t),s=0;12>s;)e+=this._getMonthHtml(new Date(i.year,s)),s++;return e},_getMonthHtml:function(t){var e=this._getCellContents(t,"month");return'<div class="'+e.classes+'" data-month="'+t.getMonth()+'">'+e.html+"</div>"},_getYearsHtml:function(t){var e=(a.getParsedDate(t),a.getDecade(t)),i=e[0]-1,s="",n=i;for(n;n<=e[1]+1;n++)s+=this._getYearHtml(new Date(n,0));return s},_getYearHtml:function(t){var e=this._getCellContents(t,"year");return'<div class="'+e.classes+'" data-year="'+t.getFullYear()+'">'+e.html+"</div>"},_renderTypes:{days:function(){var t=this._getDayNamesHtml(this.d.loc.firstDay),e=this._getDaysHtml(this.d.currentDate);this.$cells.html(e),this.$names.html(t)},months:function(){var t=this._getMonthsHtml(this.d.currentDate);this.$cells.html(t)},years:function(){var t=this._getYearsHtml(this.d.currentDate);this.$cells.html(t)}},_render:function(){this.opts.onlyTimepicker||this._renderTypes[this.type].bind(this)()},_update:function(){var t,i,s,a=e(".datepicker--cell",this.$cells),n=this;a.each(function(a,h){i=e(this),s=n.d._getDateFromCell(e(this)),t=n._getCellContents(s,n.d.cellType),i.attr("class",t.classes)})},show:function(){this.opts.onlyTimepicker||(this.$el.addClass("active"),this.acitve=!0)},hide:function(){this.$el.removeClass("active"),this.active=!1},_handleClick:function(t){var e=t.data("date")||1,i=t.data("month")||0,s=t.data("year")||this.d.parsedDate.year,a=this.d;if(a.view!=this.opts.minView)return void a.down(new Date(s,i,e));var n=new Date(s,i,e),h=this.d._isSelected(n,this.d.cellType);return h?void a._handleAlreadySelectedDates.bind(a,h,n)():void a._trigger("clickCell",n)},_onClickCell:function(t){var i=e(t.target).closest(".datepicker--cell");i.hasClass("-disabled-")||this._handleClick.bind(this)(i)}}}(),function(){var t='<div class="datepicker--nav-action" data-action="prev">#{prevHtml}</div><div class="datepicker--nav-title">#{title}</div><div class="datepicker--nav-action" data-action="next">#{nextHtml}</div>',i='<div class="datepicker--buttons"></div>',s='<span class="datepicker--button" data-action="#{action}">#{label}</span>',a=e.fn.datepicker,n=a.Constructor;a.Navigation=function(t,e){this.d=t,this.opts=e,this.$buttonsContainer="",this.init()},a.Navigation.prototype={init:function(){this._buildBaseHtml(),this._bindEvents()},_bindEvents:function(){this.d.$nav.on("click",".datepicker--nav-action",e.proxy(this._onClickNavButton,this)),this.d.$nav.on("click",".datepicker--nav-title",e.proxy(this._onClickNavTitle,this)),this.d.$datepicker.on("click",".datepicker--button",e.proxy(this._onClickNavButton,this))},_buildBaseHtml:function(){this.opts.onlyTimepicker||this._render(),this._addButtonsIfNeed()},_addButtonsIfNeed:function(){this.opts.todayButton&&this._addButton("today"),this.opts.clearButton&&this._addButton("clear")},_render:function(){var i=this._getTitle(this.d.currentDate),s=n.template(t,e.extend({title:i},this.opts));this.d.$nav.html(s),"years"==this.d.view&&e(".datepicker--nav-title",this.d.$nav).addClass("-disabled-"),this.setNavStatus()},_getTitle:function(t){return this.d.formatDate(this.opts.navTitles[this.d.view],t)},_addButton:function(t){this.$buttonsContainer.length||this._addButtonsContainer();var i={action:t,label:this.d.loc[t]},a=n.template(s,i);e("[data-action="+t+"]",this.$buttonsContainer).length||this.$buttonsContainer.append(a)},_addButtonsContainer:function(){this.d.$datepicker.append(i),this.$buttonsContainer=e(".datepicker--buttons",this.d.$datepicker)},setNavStatus:function(){if((this.opts.minDate||this.opts.maxDate)&&this.opts.disableNavWhenOutOfRange){var t=this.d.parsedDate,e=t.month,i=t.year,s=t.date;switch(this.d.view){case"days":this.d._isInRange(new Date(i,e-1,1),"month")||this._disableNav("prev"),this.d._isInRange(new Date(i,e+1,1),"month")||this._disableNav("next");break;case"months":this.d._isInRange(new Date(i-1,e,s),"year")||this._disableNav("prev"),this.d._isInRange(new Date(i+1,e,s),"year")||this._disableNav("next");break;case"years":var a=n.getDecade(this.d.date);this.d._isInRange(new Date(a[0]-1,0,1),"year")||this._disableNav("prev"),this.d._isInRange(new Date(a[1]+1,0,1),"year")||this._disableNav("next")}}},_disableNav:function(t){e('[data-action="'+t+'"]',this.d.$nav).addClass("-disabled-")},_activateNav:function(t){e('[data-action="'+t+'"]',this.d.$nav).removeClass("-disabled-")},_onClickNavButton:function(t){var i=e(t.target).closest("[data-action]"),s=i.data("action");this.d[s]()},_onClickNavTitle:function(t){return e(t.target).hasClass("-disabled-")?void 0:"days"==this.d.view?this.d.view="months":void(this.d.view="years")}}}(),function(){var t='<div class="datepicker--time"><div class="datepicker--time-current">   <span class="datepicker--time-current-hours">#{hourVisible}</span>   <span class="datepicker--time-current-colon">:</span>   <span class="datepicker--time-current-minutes">#{minValue}</span></div><div class="datepicker--time-sliders">   <div class="datepicker--time-row">      <input type="range" name="hours" value="#{hourValue}" min="#{hourMin}" max="#{hourMax}" step="#{hourStep}"/>   </div>   <div class="datepicker--time-row">      <input type="range" name="minutes" value="#{minValue}" min="#{minMin}" max="#{minMax}" step="#{minStep}"/>   </div></div></div>',i=e.fn.datepicker,s=i.Constructor;i.Timepicker=function(t,e){this.d=t,this.opts=e,this.init()},i.Timepicker.prototype={init:function(){var t="input";this._setTime(this.d.date),this._buildHTML(),navigator.userAgent.match(/trident/gi)&&(t="change"),this.d.$el.on("selectDate",this._onSelectDate.bind(this)),this.$ranges.on(t,this._onChangeRange.bind(this)),this.$ranges.on("mouseup",this._onMouseUpRange.bind(this)),this.$ranges.on("mousemove focus ",this._onMouseEnterRange.bind(this)),this.$ranges.on("mouseout blur",this._onMouseOutRange.bind(this))},_setTime:function(t){var e=s.getParsedDate(t);this._handleDate(t),this.hours=e.hours<this.minHours?this.minHours:e.hours,this.minutes=e.minutes<this.minMinutes?this.minMinutes:e.minutes},_setMinTimeFromDate:function(t){this.minHours=t.getHours(),this.minMinutes=t.getMinutes(),this.d.lastSelectedDate&&this.d.lastSelectedDate.getHours()>t.getHours()&&(this.minMinutes=this.opts.minMinutes)},_setMaxTimeFromDate:function(t){
this.maxHours=t.getHours(),this.maxMinutes=t.getMinutes(),this.d.lastSelectedDate&&this.d.lastSelectedDate.getHours()<t.getHours()&&(this.maxMinutes=this.opts.maxMinutes)},_setDefaultMinMaxTime:function(){var t=23,e=59,i=this.opts;this.minHours=i.minHours<0||i.minHours>t?0:i.minHours,this.minMinutes=i.minMinutes<0||i.minMinutes>e?0:i.minMinutes,this.maxHours=i.maxHours<0||i.maxHours>t?t:i.maxHours,this.maxMinutes=i.maxMinutes<0||i.maxMinutes>e?e:i.maxMinutes},_validateHoursMinutes:function(t){this.hours<this.minHours?this.hours=this.minHours:this.hours>this.maxHours&&(this.hours=this.maxHours),this.minutes<this.minMinutes?this.minutes=this.minMinutes:this.minutes>this.maxMinutes&&(this.minutes=this.maxMinutes)},_buildHTML:function(){var i=s.getLeadingZeroNum,a={hourMin:this.minHours,hourMax:i(this.maxHours),hourStep:this.opts.hoursStep,hourValue:this.hours,hourVisible:i(this.displayHours),minMin:this.minMinutes,minMax:i(this.maxMinutes),minStep:this.opts.minutesStep,minValue:i(this.minutes)},n=s.template(t,a);this.$timepicker=e(n).appendTo(this.d.$datepicker),this.$ranges=e('[type="range"]',this.$timepicker),this.$hours=e('[name="hours"]',this.$timepicker),this.$minutes=e('[name="minutes"]',this.$timepicker),this.$hoursText=e(".datepicker--time-current-hours",this.$timepicker),this.$minutesText=e(".datepicker--time-current-minutes",this.$timepicker),this.d.ampm&&(this.$ampm=e('<span class="datepicker--time-current-ampm">').appendTo(e(".datepicker--time-current",this.$timepicker)).html(this.dayPeriod),this.$timepicker.addClass("-am-pm-"))},_updateCurrentTime:function(){var t=s.getLeadingZeroNum(this.displayHours),e=s.getLeadingZeroNum(this.minutes);this.$hoursText.html(t),this.$minutesText.html(e),this.d.ampm&&this.$ampm.html(this.dayPeriod)},_updateRanges:function(){this.$hours.attr({min:this.minHours,max:this.maxHours}).val(this.hours),this.$minutes.attr({min:this.minMinutes,max:this.maxMinutes}).val(this.minutes)},_handleDate:function(t){this._setDefaultMinMaxTime(),t&&(s.isSame(t,this.d.opts.minDate)?this._setMinTimeFromDate(this.d.opts.minDate):s.isSame(t,this.d.opts.maxDate)&&this._setMaxTimeFromDate(this.d.opts.maxDate)),this._validateHoursMinutes(t)},update:function(){this._updateRanges(),this._updateCurrentTime()},_getValidHoursFromDate:function(t,e){var i=t,a=t;t instanceof Date&&(i=s.getParsedDate(t),a=i.hours);var n=e||this.d.ampm,h="am";if(n)switch(!0){case 0==a:a=12;break;case 12==a:h="pm";break;case a>11:a-=12,h="pm"}return{hours:a,dayPeriod:h}},set hours(t){this._hours=t;var e=this._getValidHoursFromDate(t);this.displayHours=e.hours,this.dayPeriod=e.dayPeriod},get hours(){return this._hours},_onChangeRange:function(t){var i=e(t.target),s=i.attr("name");this.d.timepickerIsActive=!0,this[s]=i.val(),this._updateCurrentTime(),this.d._trigger("timeChange",[this.hours,this.minutes]),this._handleDate(this.d.lastSelectedDate),this.update()},_onSelectDate:function(t,e){this._handleDate(e),this.update()},_onMouseEnterRange:function(t){var i=e(t.target).attr("name");e(".datepicker--time-current-"+i,this.$timepicker).addClass("-focus-")},_onMouseOutRange:function(t){var i=e(t.target).attr("name");this.d.inFocus||e(".datepicker--time-current-"+i,this.$timepicker).removeClass("-focus-")},_onMouseUpRange:function(t){this.d.timepickerIsActive=!1}}}()}(window,jQuery);;
/**
 * Swiper 6.4.1
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * https://swiperjs.com
 *
 * Copyright 2014-2020 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: December 9, 2020
 */

(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
        typeof define === 'function' && define.amd ? define(factory) :
            (global = global || self, global.Swiper = factory());
}(this, (function () {
    'use strict';

    function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
        }
    }

    function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps) _defineProperties(Constructor.prototype, protoProps);
        if (staticProps) _defineProperties(Constructor, staticProps);
        return Constructor;
    }

    function _extends() {
        _extends = Object.assign || function (target) {
            for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i];

                for (var key in source) {
                    if (Object.prototype.hasOwnProperty.call(source, key)) {
                        target[key] = source[key];
                    }
                }
            }

            return target;
        };

        return _extends.apply(this, arguments);
    }

    /**
     * SSR Window 3.0.0
     * Better handling for window object in SSR environment
     * https://github.com/nolimits4web/ssr-window
     *
     * Copyright 2020, Vladimir Kharlampidi
     *
     * Licensed under MIT
     *
     * Released on: November 9, 2020
     */

    /* eslint-disable no-param-reassign */
    function isObject(obj) {
        return obj !== null && typeof obj === 'object' && 'constructor' in obj && obj.constructor === Object;
    }

    function extend(target, src) {
        if (target === void 0) {
            target = {};
        }

        if (src === void 0) {
            src = {};
        }

        Object.keys(src).forEach(function (key) {
            if (typeof target[key] === 'undefined') target[key] = src[key]; else if (isObject(src[key]) && isObject(target[key]) && Object.keys(src[key]).length > 0) {
                extend(target[key], src[key]);
            }
        });
    }

    var ssrDocument = {
        body: {},
        addEventListener: function addEventListener() { },
        removeEventListener: function removeEventListener() { },
        activeElement: {
            blur: function blur() { },
            nodeName: ''
        },
        querySelector: function querySelector() {
            return null;
        },
        querySelectorAll: function querySelectorAll() {
            return [];
        },
        getElementById: function getElementById() {
            return null;
        },
        createEvent: function createEvent() {
            return {
                initEvent: function initEvent() { }
            };
        },
        createElement: function createElement() {
            return {
                children: [],
                childNodes: [],
                style: {},
                setAttribute: function setAttribute() { },
                getElementsByTagName: function getElementsByTagName() {
                    return [];
                }
            };
        },
        createElementNS: function createElementNS() {
            return {};
        },
        importNode: function importNode() {
            return null;
        },
        location: {
            hash: '',
            host: '',
            hostname: '',
            href: '',
            origin: '',
            pathname: '',
            protocol: '',
            search: ''
        }
    };

    function getDocument() {
        var doc = typeof document !== 'undefined' ? document : {};
        extend(doc, ssrDocument);
        return doc;
    }

    var ssrWindow = {
        document: ssrDocument,
        navigator: {
            userAgent: ''
        },
        location: {
            hash: '',
            host: '',
            hostname: '',
            href: '',
            origin: '',
            pathname: '',
            protocol: '',
            search: ''
        },
        history: {
            replaceState: function replaceState() { },
            pushState: function pushState() { },
            go: function go() { },
            back: function back() { }
        },
        CustomEvent: function CustomEvent() {
            return this;
        },
        addEventListener: function addEventListener() { },
        removeEventListener: function removeEventListener() { },
        getComputedStyle: function getComputedStyle() {
            return {
                getPropertyValue: function getPropertyValue() {
                    return '';
                }
            };
        },
        Image: function Image() { },
        Date: function Date() { },
        screen: {},
        setTimeout: function setTimeout() { },
        clearTimeout: function clearTimeout() { },
        matchMedia: function matchMedia() {
            return {};
        },
        requestAnimationFrame: function requestAnimationFrame(callback) {
            if (typeof setTimeout === 'undefined') {
                callback();
                return null;
            }

            return setTimeout(callback, 0);
        },
        cancelAnimationFrame: function cancelAnimationFrame(id) {
            if (typeof setTimeout === 'undefined') {
                return;
            }

            clearTimeout(id);
        }
    };

    function getWindow() {
        var win = typeof window !== 'undefined' ? window : {};
        extend(win, ssrWindow);
        return win;
    }

    /**
     * Dom7 3.0.0
     * Minimalistic JavaScript library for DOM manipulation, with a jQuery-compatible API
     * https://framework7.io/docs/dom7.html
     *
     * Copyright 2020, Vladimir Kharlampidi
     *
     * Licensed under MIT
     *
     * Released on: November 9, 2020
     */

    function _inheritsLoose(subClass, superClass) {
        subClass.prototype = Object.create(superClass.prototype);
        subClass.prototype.constructor = subClass;
        subClass.__proto__ = superClass;
    }

    function _getPrototypeOf(o) {
        _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
            return o.__proto__ || Object.getPrototypeOf(o);
        };
        return _getPrototypeOf(o);
    }

    function _setPrototypeOf(o, p) {
        _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
            o.__proto__ = p;
            return o;
        };

        return _setPrototypeOf(o, p);
    }

    function _isNativeReflectConstruct() {
        if (typeof Reflect === "undefined" || !Reflect.construct) return false;
        if (Reflect.construct.sham) return false;
        if (typeof Proxy === "function") return true;

        try {
            Date.prototype.toString.call(Reflect.construct(Date, [], function () { }));
            return true;
        } catch (e) {
            return false;
        }
    }

    function _construct(Parent, args, Class) {
        if (_isNativeReflectConstruct()) {
            _construct = Reflect.construct;
        } else {
            _construct = function _construct(Parent, args, Class) {
                var a = [null];
                a.push.apply(a, args);
                var Constructor = Function.bind.apply(Parent, a);
                var instance = new Constructor();
                if (Class) _setPrototypeOf(instance, Class.prototype);
                return instance;
            };
        }

        return _construct.apply(null, arguments);
    }

    function _isNativeFunction(fn) {
        return Function.toString.call(fn).indexOf("[native code]") !== -1;
    }

    function _wrapNativeSuper(Class) {
        var _cache = typeof Map === "function" ? new Map() : undefined;

        _wrapNativeSuper = function _wrapNativeSuper(Class) {
            if (Class === null || !_isNativeFunction(Class)) return Class;

            if (typeof Class !== "function") {
                throw new TypeError("Super expression must either be null or a function");
            }

            if (typeof _cache !== "undefined") {
                if (_cache.has(Class)) return _cache.get(Class);

                _cache.set(Class, Wrapper);
            }

            function Wrapper() {
                return _construct(Class, arguments, _getPrototypeOf(this).constructor);
            }

            Wrapper.prototype = Object.create(Class.prototype, {
                constructor: {
                    value: Wrapper,
                    enumerable: false,
                    writable: true,
                    configurable: true
                }
            });
            return _setPrototypeOf(Wrapper, Class);
        };

        return _wrapNativeSuper(Class);
    }

    function _assertThisInitialized(self) {
        if (self === void 0) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }

        return self;
    }
    /* eslint-disable no-proto */


    function makeReactive(obj) {
        var proto = obj.__proto__;
        Object.defineProperty(obj, '__proto__', {
            get: function get() {
                return proto;
            },
            set: function set(value) {
                proto.__proto__ = value;
            }
        });
    }

    var Dom7 = /*#__PURE__*/function (_Array) {
        _inheritsLoose(Dom7, _Array);

        function Dom7(items) {
            var _this;

            _this = _Array.call.apply(_Array, [this].concat(items)) || this;
            makeReactive(_assertThisInitialized(_this));
            return _this;
        }

        return Dom7;
    }( /*#__PURE__*/_wrapNativeSuper(Array));

    function arrayFlat(arr) {
        if (arr === void 0) {
            arr = [];
        }

        var res = [];
        arr.forEach(function (el) {
            if (Array.isArray(el)) {
                res.push.apply(res, arrayFlat(el));
            } else {
                res.push(el);
            }
        });
        return res;
    }

    function arrayFilter(arr, callback) {
        return Array.prototype.filter.call(arr, callback);
    }

    function arrayUnique(arr) {
        var uniqueArray = [];

        for (var i = 0; i < arr.length; i += 1) {
            if (uniqueArray.indexOf(arr[i]) === -1) uniqueArray.push(arr[i]);
        }

        return uniqueArray;
    }

    function qsa(selector, context) {
        if (typeof selector !== 'string') {
            return [selector];
        }

        var a = [];
        var res = context.querySelectorAll(selector);

        for (var i = 0; i < res.length; i += 1) {
            a.push(res[i]);
        }

        return a;
    }

    function $(selector, context) {
        var window = getWindow();
        var document = getDocument();
        var arr = [];

        if (!context && selector instanceof Dom7) {
            return selector;
        }

        if (!selector) {
            return new Dom7(arr);
        }

        if (typeof selector === 'string') {
            var html = selector.trim();

            if (html.indexOf('<') >= 0 && html.indexOf('>') >= 0) {
                var toCreate = 'div';
                if (html.indexOf('<li') === 0) toCreate = 'ul';
                if (html.indexOf('<tr') === 0) toCreate = 'tbody';
                if (html.indexOf('<td') === 0 || html.indexOf('<th') === 0) toCreate = 'tr';
                if (html.indexOf('<tbody') === 0) toCreate = 'table';
                if (html.indexOf('<option') === 0) toCreate = 'select';
                var tempParent = document.createElement(toCreate);
                tempParent.innerHTML = html;

                for (var i = 0; i < tempParent.childNodes.length; i += 1) {
                    arr.push(tempParent.childNodes[i]);
                }
            } else {
                arr = qsa(selector.trim(), context || document);
            } // arr = qsa(selector, document);

        } else if (selector.nodeType || selector === window || selector === document) {
            arr.push(selector);
        } else if (Array.isArray(selector)) {
            if (selector instanceof Dom7) return selector;
            arr = selector;
        }

        return new Dom7(arrayUnique(arr));
    }

    $.fn = Dom7.prototype;

    function addClass() {
        for (var _len = arguments.length, classes = new Array(_len), _key = 0; _key < _len; _key++) {
            classes[_key] = arguments[_key];
        }

        var classNames = arrayFlat(classes.map(function (c) {
            return c.split(' ');
        }));
        this.forEach(function (el) {
            var _el$classList;

            (_el$classList = el.classList).add.apply(_el$classList, classNames);
        });
        return this;
    }

    function removeClass() {
        for (var _len2 = arguments.length, classes = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            classes[_key2] = arguments[_key2];
        }

        var classNames = arrayFlat(classes.map(function (c) {
            return c.split(' ');
        }));
        this.forEach(function (el) {
            var _el$classList2;

            (_el$classList2 = el.classList).remove.apply(_el$classList2, classNames);
        });
        return this;
    }

    function toggleClass() {
        for (var _len3 = arguments.length, classes = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
            classes[_key3] = arguments[_key3];
        }

        var classNames = arrayFlat(classes.map(function (c) {
            return c.split(' ');
        }));
        this.forEach(function (el) {
            classNames.forEach(function (className) {
                el.classList.toggle(className);
            });
        });
    }

    function hasClass() {
        for (var _len4 = arguments.length, classes = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
            classes[_key4] = arguments[_key4];
        }

        var classNames = arrayFlat(classes.map(function (c) {
            return c.split(' ');
        }));
        return arrayFilter(this, function (el) {
            return classNames.filter(function (className) {
                return el.classList.contains(className);
            }).length > 0;
        }).length > 0;
    }

    function attr(attrs, value) {
        if (arguments.length === 1 && typeof attrs === 'string') {
            // Get attr
            if (this[0]) return this[0].getAttribute(attrs);
            return undefined;
        } // Set attrs


        for (var i = 0; i < this.length; i += 1) {
            if (arguments.length === 2) {
                // String
                this[i].setAttribute(attrs, value);
            } else {
                // Object
                for (var attrName in attrs) {
                    this[i][attrName] = attrs[attrName];
                    this[i].setAttribute(attrName, attrs[attrName]);
                }
            }
        }

        return this;
    }

    function removeAttr(attr) {
        for (var i = 0; i < this.length; i += 1) {
            this[i].removeAttribute(attr);
        }

        return this;
    }

    function transform(transform) {
        for (var i = 0; i < this.length; i += 1) {
            this[i].style.transform = transform;
        }

        return this;
    }

    function transition(duration) {
        for (var i = 0; i < this.length; i += 1) {
            this[i].style.transitionDuration = typeof duration !== 'string' ? duration + "ms" : duration;
        }

        return this;
    }

    function on() {
        for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
            args[_key5] = arguments[_key5];
        }

        var eventType = args[0],
            targetSelector = args[1],
            listener = args[2],
            capture = args[3];

        if (typeof args[1] === 'function') {
            eventType = args[0];
            listener = args[1];
            capture = args[2];
            targetSelector = undefined;
        }

        if (!capture) capture = false;

        function handleLiveEvent(e) {
            var target = e.target;
            if (!target) return;
            var eventData = e.target.dom7EventData || [];

            if (eventData.indexOf(e) < 0) {
                eventData.unshift(e);
            }

            if ($(target).is(targetSelector)) listener.apply(target, eventData); else {
                var _parents = $(target).parents(); // eslint-disable-line


                for (var k = 0; k < _parents.length; k += 1) {
                    if ($(_parents[k]).is(targetSelector)) listener.apply(_parents[k], eventData);
                }
            }
        }

        function handleEvent(e) {
            var eventData = e && e.target ? e.target.dom7EventData || [] : [];

            if (eventData.indexOf(e) < 0) {
                eventData.unshift(e);
            }

            listener.apply(this, eventData);
        }

        var events = eventType.split(' ');
        var j;

        for (var i = 0; i < this.length; i += 1) {
            var el = this[i];

            if (!targetSelector) {
                for (j = 0; j < events.length; j += 1) {
                    var event = events[j];
                    if (!el.dom7Listeners) el.dom7Listeners = {};
                    if (!el.dom7Listeners[event]) el.dom7Listeners[event] = [];
                    el.dom7Listeners[event].push({
                        listener: listener,
                        proxyListener: handleEvent
                    });
                    el.addEventListener(event, handleEvent, capture);
                }
            } else {
                // Live events
                for (j = 0; j < events.length; j += 1) {
                    var _event = events[j];
                    if (!el.dom7LiveListeners) el.dom7LiveListeners = {};
                    if (!el.dom7LiveListeners[_event]) el.dom7LiveListeners[_event] = [];

                    el.dom7LiveListeners[_event].push({
                        listener: listener,
                        proxyListener: handleLiveEvent
                    });

                    el.addEventListener(_event, handleLiveEvent, capture);
                }
            }
        }

        return this;
    }

    function off() {
        for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
            args[_key6] = arguments[_key6];
        }

        var eventType = args[0],
            targetSelector = args[1],
            listener = args[2],
            capture = args[3];

        if (typeof args[1] === 'function') {
            eventType = args[0];
            listener = args[1];
            capture = args[2];
            targetSelector = undefined;
        }

        if (!capture) capture = false;
        var events = eventType.split(' ');

        for (var i = 0; i < events.length; i += 1) {
            var event = events[i];

            for (var j = 0; j < this.length; j += 1) {
                var el = this[j];
                var handlers = void 0;

                if (!targetSelector && el.dom7Listeners) {
                    handlers = el.dom7Listeners[event];
                } else if (targetSelector && el.dom7LiveListeners) {
                    handlers = el.dom7LiveListeners[event];
                }

                if (handlers && handlers.length) {
                    for (var k = handlers.length - 1; k >= 0; k -= 1) {
                        var handler = handlers[k];

                        if (listener && handler.listener === listener) {
                            el.removeEventListener(event, handler.proxyListener, capture);
                            handlers.splice(k, 1);
                        } else if (listener && handler.listener && handler.listener.dom7proxy && handler.listener.dom7proxy === listener) {
                            el.removeEventListener(event, handler.proxyListener, capture);
                            handlers.splice(k, 1);
                        } else if (!listener) {
                            el.removeEventListener(event, handler.proxyListener, capture);
                            handlers.splice(k, 1);
                        }
                    }
                }
            }
        }

        return this;
    }

    function trigger() {
        var window = getWindow();

        for (var _len9 = arguments.length, args = new Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
            args[_key9] = arguments[_key9];
        }

        var events = args[0].split(' ');
        var eventData = args[1];

        for (var i = 0; i < events.length; i += 1) {
            var event = events[i];

            for (var j = 0; j < this.length; j += 1) {
                var el = this[j];

                if (window.CustomEvent) {
                    var evt = new window.CustomEvent(event, {
                        detail: eventData,
                        bubbles: true,
                        cancelable: true
                    });
                    el.dom7EventData = args.filter(function (data, dataIndex) {
                        return dataIndex > 0;
                    });
                    el.dispatchEvent(evt);
                    el.dom7EventData = [];
                    delete el.dom7EventData;
                }
            }
        }

        return this;
    }

    function transitionEnd(callback) {
        var dom = this;

        function fireCallBack(e) {
            if (e.target !== this) return;
            callback.call(this, e);
            dom.off('transitionend', fireCallBack);
        }

        if (callback) {
            dom.on('transitionend', fireCallBack);
        }

        return this;
    }

    function outerWidth(includeMargins) {
        if (this.length > 0) {
            if (includeMargins) {
                var _styles = this.styles();

                return this[0].offsetWidth + parseFloat(_styles.getPropertyValue('margin-right')) + parseFloat(_styles.getPropertyValue('margin-left'));
            }

            return this[0].offsetWidth;
        }

        return null;
    }

    function outerHeight(includeMargins) {
        if (this.length > 0) {
            if (includeMargins) {
                var _styles2 = this.styles();

                return this[0].offsetHeight + parseFloat(_styles2.getPropertyValue('margin-top')) + parseFloat(_styles2.getPropertyValue('margin-bottom'));
            }

            return this[0].offsetHeight;
        }

        return null;
    }

    function offset() {
        if (this.length > 0) {
            var window = getWindow();
            var document = getDocument();
            var el = this[0];
            var box = el.getBoundingClientRect();
            var body = document.body;
            var clientTop = el.clientTop || body.clientTop || 0;
            var clientLeft = el.clientLeft || body.clientLeft || 0;
            var scrollTop = el === window ? window.scrollY : el.scrollTop;
            var scrollLeft = el === window ? window.scrollX : el.scrollLeft;
            return {
                top: box.top + scrollTop - clientTop,
                left: box.left + scrollLeft - clientLeft
            };
        }

        return null;
    }

    function styles() {
        var window = getWindow();
        if (this[0]) return window.getComputedStyle(this[0], null);
        return {};
    }

    function css(props, value) {
        var window = getWindow();
        var i;

        if (arguments.length === 1) {
            if (typeof props === 'string') {
                // .css('width')
                if (this[0]) return window.getComputedStyle(this[0], null).getPropertyValue(props);
            } else {
                // .css({ width: '100px' })
                for (i = 0; i < this.length; i += 1) {
                    for (var _prop in props) {
                        this[i].style[_prop] = props[_prop];
                    }
                }

                return this;
            }
        }

        if (arguments.length === 2 && typeof props === 'string') {
            // .css('width', '100px')
            for (i = 0; i < this.length; i += 1) {
                this[i].style[props] = value;
            }

            return this;
        }

        return this;
    }

    function each(callback) {
        if (!callback) return this;
        this.forEach(function (el, index) {
            callback.apply(el, [el, index]);
        });
        return this;
    }

    function filter(callback) {
        var result = arrayFilter(this, callback);
        return $(result);
    }

    function html(html) {
        if (typeof html === 'undefined') {
            return this[0] ? this[0].innerHTML : null;
        }

        for (var i = 0; i < this.length; i += 1) {
            this[i].innerHTML = html;
        }

        return this;
    }

    function text(text) {
        if (typeof text === 'undefined') {
            return this[0] ? this[0].textContent.trim() : null;
        }

        for (var i = 0; i < this.length; i += 1) {
            this[i].textContent = text;
        }

        return this;
    }

    function is(selector) {
        var window = getWindow();
        var document = getDocument();
        var el = this[0];
        var compareWith;
        var i;
        if (!el || typeof selector === 'undefined') return false;

        if (typeof selector === 'string') {
            if (el.matches) return el.matches(selector);
            if (el.webkitMatchesSelector) return el.webkitMatchesSelector(selector);
            if (el.msMatchesSelector) return el.msMatchesSelector(selector);
            compareWith = $(selector);

            for (i = 0; i < compareWith.length; i += 1) {
                if (compareWith[i] === el) return true;
            }

            return false;
        }

        if (selector === document) {
            return el === document;
        }

        if (selector === window) {
            return el === window;
        }

        if (selector.nodeType || selector instanceof Dom7) {
            compareWith = selector.nodeType ? [selector] : selector;

            for (i = 0; i < compareWith.length; i += 1) {
                if (compareWith[i] === el) return true;
            }

            return false;
        }

        return false;
    }

    function index() {
        var child = this[0];
        var i;

        if (child) {
            i = 0; // eslint-disable-next-line

            while ((child = child.previousSibling) !== null) {
                if (child.nodeType === 1) i += 1;
            }

            return i;
        }

        return undefined;
    }

    function eq(index) {
        if (typeof index === 'undefined') return this;
        var length = this.length;

        if (index > length - 1) {
            return $([]);
        }

        if (index < 0) {
            var returnIndex = length + index;
            if (returnIndex < 0) return $([]);
            return $([this[returnIndex]]);
        }

        return $([this[index]]);
    }

    function append() {
        var newChild;
        var document = getDocument();

        for (var k = 0; k < arguments.length; k += 1) {
            newChild = k < 0 || arguments.length <= k ? undefined : arguments[k];

            for (var i = 0; i < this.length; i += 1) {
                if (typeof newChild === 'string') {
                    var tempDiv = document.createElement('div');
                    tempDiv.innerHTML = newChild;

                    while (tempDiv.firstChild) {
                        this[i].appendChild(tempDiv.firstChild);
                    }
                } else if (newChild instanceof Dom7) {
                    for (var j = 0; j < newChild.length; j += 1) {
                        this[i].appendChild(newChild[j]);
                    }
                } else {
                    this[i].appendChild(newChild);
                }
            }
        }

        return this;
    }

    function prepend(newChild) {
        var document = getDocument();
        var i;
        var j;

        for (i = 0; i < this.length; i += 1) {
            if (typeof newChild === 'string') {
                var tempDiv = document.createElement('div');
                tempDiv.innerHTML = newChild;

                for (j = tempDiv.childNodes.length - 1; j >= 0; j -= 1) {
                    this[i].insertBefore(tempDiv.childNodes[j], this[i].childNodes[0]);
                }
            } else if (newChild instanceof Dom7) {
                for (j = 0; j < newChild.length; j += 1) {
                    this[i].insertBefore(newChild[j], this[i].childNodes[0]);
                }
            } else {
                this[i].insertBefore(newChild, this[i].childNodes[0]);
            }
        }

        return this;
    }

    function next(selector) {
        if (this.length > 0) {
            if (selector) {
                if (this[0].nextElementSibling && $(this[0].nextElementSibling).is(selector)) {
                    return $([this[0].nextElementSibling]);
                }

                return $([]);
            }

            if (this[0].nextElementSibling) return $([this[0].nextElementSibling]);
            return $([]);
        }

        return $([]);
    }

    function nextAll(selector) {
        var nextEls = [];
        var el = this[0];
        if (!el) return $([]);

        while (el.nextElementSibling) {
            var _next = el.nextElementSibling; // eslint-disable-line

            if (selector) {
                if ($(_next).is(selector)) nextEls.push(_next);
            } else nextEls.push(_next);

            el = _next;
        }

        return $(nextEls);
    }

    function prev(selector) {
        if (this.length > 0) {
            var el = this[0];

            if (selector) {
                if (el.previousElementSibling && $(el.previousElementSibling).is(selector)) {
                    return $([el.previousElementSibling]);
                }

                return $([]);
            }

            if (el.previousElementSibling) return $([el.previousElementSibling]);
            return $([]);
        }

        return $([]);
    }

    function prevAll(selector) {
        var prevEls = [];
        var el = this[0];
        if (!el) return $([]);

        while (el.previousElementSibling) {
            var _prev = el.previousElementSibling; // eslint-disable-line

            if (selector) {
                if ($(_prev).is(selector)) prevEls.push(_prev);
            } else prevEls.push(_prev);

            el = _prev;
        }

        return $(prevEls);
    }

    function parent(selector) {
        var parents = []; // eslint-disable-line

        for (var i = 0; i < this.length; i += 1) {
            if (this[i].parentNode !== null) {
                if (selector) {
                    if ($(this[i].parentNode).is(selector)) parents.push(this[i].parentNode);
                } else {
                    parents.push(this[i].parentNode);
                }
            }
        }

        return $(parents);
    }

    function parents(selector) {
        var parents = []; // eslint-disable-line

        for (var i = 0; i < this.length; i += 1) {
            var _parent = this[i].parentNode; // eslint-disable-line

            while (_parent) {
                if (selector) {
                    if ($(_parent).is(selector)) parents.push(_parent);
                } else {
                    parents.push(_parent);
                }

                _parent = _parent.parentNode;
            }
        }

        return $(parents);
    }

    function closest(selector) {
        var closest = this; // eslint-disable-line

        if (typeof selector === 'undefined') {
            return $([]);
        }

        if (!closest.is(selector)) {
            closest = closest.parents(selector).eq(0);
        }

        return closest;
    }

    function find(selector) {
        var foundElements = [];

        for (var i = 0; i < this.length; i += 1) {
            var found = this[i].querySelectorAll(selector);

            for (var j = 0; j < found.length; j += 1) {
                foundElements.push(found[j]);
            }
        }

        return $(foundElements);
    }

    function children(selector) {
        var children = []; // eslint-disable-line

        for (var i = 0; i < this.length; i += 1) {
            var childNodes = this[i].children;

            for (var j = 0; j < childNodes.length; j += 1) {
                if (!selector || $(childNodes[j]).is(selector)) {
                    children.push(childNodes[j]);
                }
            }
        }

        return $(children);
    }

    function remove() {
        for (var i = 0; i < this.length; i += 1) {
            if (this[i].parentNode) this[i].parentNode.removeChild(this[i]);
        }

        return this;
    }

    var Methods = {
        addClass: addClass,
        removeClass: removeClass,
        hasClass: hasClass,
        toggleClass: toggleClass,
        attr: attr,
        removeAttr: removeAttr,
        transform: transform,
        transition: transition,
        on: on,
        off: off,
        trigger: trigger,
        transitionEnd: transitionEnd,
        outerWidth: outerWidth,
        outerHeight: outerHeight,
        styles: styles,
        offset: offset,
        css: css,
        each: each,
        html: html,
        text: text,
        is: is,
        index: index,
        eq: eq,
        append: append,
        prepend: prepend,
        next: next,
        nextAll: nextAll,
        prev: prev,
        prevAll: prevAll,
        parent: parent,
        parents: parents,
        closest: closest,
        find: find,
        children: children,
        filter: filter,
        remove: remove
    };
    Object.keys(Methods).forEach(function (methodName) {
        $.fn[methodName] = Methods[methodName];
    });

    function deleteProps(obj) {
        var object = obj;
        Object.keys(object).forEach(function (key) {
            try {
                object[key] = null;
            } catch (e) {// no getter for object
            }

            try {
                delete object[key];
            } catch (e) {// something got wrong
            }
        });
    }

    function nextTick(callback, delay) {
        if (delay === void 0) {
            delay = 0;
        }

        return setTimeout(callback, delay);
    }

    function now() {
        return Date.now();
    }

    function getTranslate(el, axis) {
        if (axis === void 0) {
            axis = 'x';
        }

        var window = getWindow();
        var matrix;
        var curTransform;
        var transformMatrix;
        var curStyle = window.getComputedStyle(el, null);

        if (window.WebKitCSSMatrix) {
            curTransform = curStyle.transform || curStyle.webkitTransform;

            if (curTransform.split(',').length > 6) {
                curTransform = curTransform.split(', ').map(function (a) {
                    return a.replace(',', '.');
                }).join(', ');
            } // Some old versions of Webkit choke when 'none' is passed; pass
            // empty string instead in this case


            transformMatrix = new window.WebKitCSSMatrix(curTransform === 'none' ? '' : curTransform);
        } else {
            transformMatrix = curStyle.MozTransform || curStyle.OTransform || curStyle.MsTransform || curStyle.msTransform || curStyle.transform || curStyle.getPropertyValue('transform').replace('translate(', 'matrix(1, 0, 0, 1,');
            matrix = transformMatrix.toString().split(',');
        }

        if (axis === 'x') {
            // Latest Chrome and webkits Fix
            if (window.WebKitCSSMatrix) curTransform = transformMatrix.m41; // Crazy IE10 Matrix
            else if (matrix.length === 16) curTransform = parseFloat(matrix[12]); // Normal Browsers
            else curTransform = parseFloat(matrix[4]);
        }

        if (axis === 'y') {
            // Latest Chrome and webkits Fix
            if (window.WebKitCSSMatrix) curTransform = transformMatrix.m42; // Crazy IE10 Matrix
            else if (matrix.length === 16) curTransform = parseFloat(matrix[13]); // Normal Browsers
            else curTransform = parseFloat(matrix[5]);
        }

        return curTransform || 0;
    }

    function isObject$1(o) {
        return typeof o === 'object' && o !== null && o.constructor && o.constructor === Object;
    }

    function extend$1() {
        var to = Object(arguments.length <= 0 ? undefined : arguments[0]);

        for (var i = 1; i < arguments.length; i += 1) {
            var nextSource = i < 0 || arguments.length <= i ? undefined : arguments[i];

            if (nextSource !== undefined && nextSource !== null) {
                var keysArray = Object.keys(Object(nextSource));

                for (var nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex += 1) {
                    var nextKey = keysArray[nextIndex];
                    var desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);

                    if (desc !== undefined && desc.enumerable) {
                        if (isObject$1(to[nextKey]) && isObject$1(nextSource[nextKey])) {
                            extend$1(to[nextKey], nextSource[nextKey]);
                        } else if (!isObject$1(to[nextKey]) && isObject$1(nextSource[nextKey])) {
                            to[nextKey] = {};
                            extend$1(to[nextKey], nextSource[nextKey]);
                        } else {
                            to[nextKey] = nextSource[nextKey];
                        }
                    }
                }
            }
        }

        return to;
    }

    function bindModuleMethods(instance, obj) {
        Object.keys(obj).forEach(function (key) {
            if (isObject$1(obj[key])) {
                Object.keys(obj[key]).forEach(function (subKey) {
                    if (typeof obj[key][subKey] === 'function') {
                        obj[key][subKey] = obj[key][subKey].bind(instance);
                    }
                });
            }

            instance[key] = obj[key];
        });
    }

    var support;

    function calcSupport() {
        var window = getWindow();
        var document = getDocument();
        return {
            touch: !!('ontouchstart' in window || window.DocumentTouch && document instanceof window.DocumentTouch),
            pointerEvents: !!window.PointerEvent && 'maxTouchPoints' in window.navigator && window.navigator.maxTouchPoints >= 0,
            observer: function checkObserver() {
                return 'MutationObserver' in window || 'WebkitMutationObserver' in window;
            }(),
            passiveListener: function checkPassiveListener() {
                var supportsPassive = false;

                try {
                    var opts = Object.defineProperty({}, 'passive', {
                        // eslint-disable-next-line
                        get: function get() {
                            supportsPassive = true;
                        }
                    });
                    window.addEventListener('testPassiveListener', null, opts);
                } catch (e) {// No support
                }

                return supportsPassive;
            }(),
            gestures: function checkGestures() {
                return 'ongesturestart' in window;
            }()
        };
    }

    function getSupport() {
        if (!support) {
            support = calcSupport();
        }

        return support;
    }

    var device;

    function calcDevice(_temp) {
        var _ref = _temp === void 0 ? {} : _temp,
            userAgent = _ref.userAgent;

        var support = getSupport();
        var window = getWindow();
        var platform = window.navigator.platform;
        var ua = userAgent || window.navigator.userAgent;
        var device = {
            ios: false,
            android: false
        };
        var screenWidth = window.screen.width;
        var screenHeight = window.screen.height;
        var android = ua.match(/(Android);?[\s\/]+([\d.]+)?/); // eslint-disable-line

        var ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
        var ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
        var iphone = !ipad && ua.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
        var windows = platform === 'Win32';
        var macos = platform === 'MacIntel'; // iPadOs 13 fix

        var iPadScreens = ['1024x1366', '1366x1024', '834x1194', '1194x834', '834x1112', '1112x834', '768x1024', '1024x768', '820x1180', '1180x820', '810x1080', '1080x810'];

        if (!ipad && macos && support.touch && iPadScreens.indexOf(screenWidth + "x" + screenHeight) >= 0) {
            ipad = ua.match(/(Version)\/([\d.]+)/);
            if (!ipad) ipad = [0, 1, '13_0_0'];
            macos = false;
        } // Android


        if (android && !windows) {
            device.os = 'android';
            device.android = true;
        }

        if (ipad || iphone || ipod) {
            device.os = 'ios';
            device.ios = true;
        } // Export object


        return device;
    }

    function getDevice(overrides) {
        if (overrides === void 0) {
            overrides = {};
        }

        if (!device) {
            device = calcDevice(overrides);
        }

        return device;
    }

    var browser;

    function calcBrowser() {
        var window = getWindow();

        function isSafari() {
            var ua = window.navigator.userAgent.toLowerCase();
            return ua.indexOf('safari') >= 0 && ua.indexOf('chrome') < 0 && ua.indexOf('android') < 0;
        }

        return {
            isEdge: !!window.navigator.userAgent.match(/Edge/g),
            isSafari: isSafari(),
            isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(window.navigator.userAgent)
        };
    }

    function getBrowser() {
        if (!browser) {
            browser = calcBrowser();
        }

        return browser;
    }

    var Resize = {
        name: 'resize',
        create: function create() {
            var swiper = this;
            extend$1(swiper, {
                resize: {
                    resizeHandler: function resizeHandler() {
                        if (!swiper || swiper.destroyed || !swiper.initialized) return;
                        swiper.emit('beforeResize');
                        swiper.emit('resize');
                    },
                    orientationChangeHandler: function orientationChangeHandler() {
                        if (!swiper || swiper.destroyed || !swiper.initialized) return;
                        swiper.emit('orientationchange');
                    }
                }
            });
        },
        on: {
            init: function init(swiper) {
                var window = getWindow(); // Emit resize

                window.addEventListener('resize', swiper.resize.resizeHandler); // Emit orientationchange

                window.addEventListener('orientationchange', swiper.resize.orientationChangeHandler);
            },
            destroy: function destroy(swiper) {
                var window = getWindow();
                window.removeEventListener('resize', swiper.resize.resizeHandler);
                window.removeEventListener('orientationchange', swiper.resize.orientationChangeHandler);
            }
        }
    };

    var Observer = {
        attach: function attach(target, options) {
            if (options === void 0) {
                options = {};
            }

            var window = getWindow();
            var swiper = this;
            var ObserverFunc = window.MutationObserver || window.WebkitMutationObserver;
            var observer = new ObserverFunc(function (mutations) {
                // The observerUpdate event should only be triggered
                // once despite the number of mutations.  Additional
                // triggers are redundant and are very costly
                if (mutations.length === 1) {
                    swiper.emit('observerUpdate', mutations[0]);
                    return;
                }

                var observerUpdate = function observerUpdate() {
                    swiper.emit('observerUpdate', mutations[0]);
                };

                if (window.requestAnimationFrame) {
                    window.requestAnimationFrame(observerUpdate);
                } else {
                    window.setTimeout(observerUpdate, 0);
                }
            });
            observer.observe(target, {
                attributes: typeof options.attributes === 'undefined' ? true : options.attributes,
                childList: typeof options.childList === 'undefined' ? true : options.childList,
                characterData: typeof options.characterData === 'undefined' ? true : options.characterData
            });
            swiper.observer.observers.push(observer);
        },
        init: function init() {
            var swiper = this;
            if (!swiper.support.observer || !swiper.params.observer) return;

            if (swiper.params.observeParents) {
                var containerParents = swiper.$el.parents();

                for (var i = 0; i < containerParents.length; i += 1) {
                    swiper.observer.attach(containerParents[i]);
                }
            } // Observe container


            swiper.observer.attach(swiper.$el[0], {
                childList: swiper.params.observeSlideChildren
            }); // Observe wrapper

            swiper.observer.attach(swiper.$wrapperEl[0], {
                attributes: false
            });
        },
        destroy: function destroy() {
            var swiper = this;
            swiper.observer.observers.forEach(function (observer) {
                observer.disconnect();
            });
            swiper.observer.observers = [];
        }
    };
    var Observer$1 = {
        name: 'observer',
        params: {
            observer: false,
            observeParents: false,
            observeSlideChildren: false
        },
        create: function create() {
            var swiper = this;
            bindModuleMethods(swiper, {
                observer: _extends(_extends({}, Observer), {}, {
                    observers: []
                })
            });
        },
        on: {
            init: function init(swiper) {
                swiper.observer.init();
            },
            destroy: function destroy(swiper) {
                swiper.observer.destroy();
            }
        }
    };

    var modular = {
        useParams: function useParams(instanceParams) {
            var instance = this;
            if (!instance.modules) return;
            Object.keys(instance.modules).forEach(function (moduleName) {
                var module = instance.modules[moduleName]; // Extend params

                if (module.params) {
                    extend$1(instanceParams, module.params);
                }
            });
        },
        useModules: function useModules(modulesParams) {
            if (modulesParams === void 0) {
                modulesParams = {};
            }

            var instance = this;
            if (!instance.modules) return;
            Object.keys(instance.modules).forEach(function (moduleName) {
                var module = instance.modules[moduleName];
                var moduleParams = modulesParams[moduleName] || {}; // Add event listeners

                if (module.on && instance.on) {
                    Object.keys(module.on).forEach(function (moduleEventName) {
                        instance.on(moduleEventName, module.on[moduleEventName]);
                    });
                } // Module create callback


                if (module.create) {
                    module.create.bind(instance)(moduleParams);
                }
            });
        }
    };

    /* eslint-disable no-underscore-dangle */
    var eventsEmitter = {
        on: function on(events, handler, priority) {
            var self = this;
            if (typeof handler !== 'function') return self;
            var method = priority ? 'unshift' : 'push';
            events.split(' ').forEach(function (event) {
                if (!self.eventsListeners[event]) self.eventsListeners[event] = [];
                self.eventsListeners[event][method](handler);
            });
            return self;
        },
        once: function once(events, handler, priority) {
            var self = this;
            if (typeof handler !== 'function') return self;

            function onceHandler() {
                self.off(events, onceHandler);

                if (onceHandler.__emitterProxy) {
                    delete onceHandler.__emitterProxy;
                }

                for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                    args[_key] = arguments[_key];
                }

                handler.apply(self, args);
            }

            onceHandler.__emitterProxy = handler;
            return self.on(events, onceHandler, priority);
        },
        onAny: function onAny(handler, priority) {
            var self = this;
            if (typeof handler !== 'function') return self;
            var method = priority ? 'unshift' : 'push';

            if (self.eventsAnyListeners.indexOf(handler) < 0) {
                self.eventsAnyListeners[method](handler);
            }

            return self;
        },
        offAny: function offAny(handler) {
            var self = this;
            if (!self.eventsAnyListeners) return self;
            var index = self.eventsAnyListeners.indexOf(handler);

            if (index >= 0) {
                self.eventsAnyListeners.splice(index, 1);
            }

            return self;
        },
        off: function off(events, handler) {
            var self = this;
            if (!self.eventsListeners) return self;
            events.split(' ').forEach(function (event) {
                if (typeof handler === 'undefined') {
                    self.eventsListeners[event] = [];
                } else if (self.eventsListeners[event]) {
                    self.eventsListeners[event].forEach(function (eventHandler, index) {
                        if (eventHandler === handler || eventHandler.__emitterProxy && eventHandler.__emitterProxy === handler) {
                            self.eventsListeners[event].splice(index, 1);
                        }
                    });
                }
            });
            return self;
        },
        emit: function emit() {
            var self = this;
            if (!self.eventsListeners) return self;
            var events;
            var data;
            var context;

            for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                args[_key2] = arguments[_key2];
            }

            if (typeof args[0] === 'string' || Array.isArray(args[0])) {
                events = args[0];
                data = args.slice(1, args.length);
                context = self;
            } else {
                events = args[0].events;
                data = args[0].data;
                context = args[0].context || self;
            }

            data.unshift(context);
            var eventsArray = Array.isArray(events) ? events : events.split(' ');
            eventsArray.forEach(function (event) {
                if (self.eventsAnyListeners && self.eventsAnyListeners.length) {
                    self.eventsAnyListeners.forEach(function (eventHandler) {
                        eventHandler.apply(context, [event].concat(data));
                    });
                }

                if (self.eventsListeners && self.eventsListeners[event]) {
                    self.eventsListeners[event].forEach(function (eventHandler) {
                        eventHandler.apply(context, data);
                    });
                }
            });
            return self;
        }
    };

    function updateSize() {
        var swiper = this;
        var width;
        var height;
        var $el = swiper.$el;

        if (typeof swiper.params.width !== 'undefined' && swiper.params.width !== null) {
            width = swiper.params.width;
        } else {
            width = $el[0].clientWidth;
        }

        if (typeof swiper.params.height !== 'undefined' && swiper.params.height !== null) {
            height = swiper.params.height;
        } else {
            height = $el[0].clientHeight;
        }

        if (width === 0 && swiper.isHorizontal() || height === 0 && swiper.isVertical()) {
            return;
        } // Subtract paddings


        width = width - parseInt($el.css('padding-left') || 0, 10) - parseInt($el.css('padding-right') || 0, 10);
        height = height - parseInt($el.css('padding-top') || 0, 10) - parseInt($el.css('padding-bottom') || 0, 10);
        if (Number.isNaN(width)) width = 0;
        if (Number.isNaN(height)) height = 0;
        extend$1(swiper, {
            width: width,
            height: height,
            size: swiper.isHorizontal() ? width : height
        });
    }

    function updateSlides() {
        var swiper = this;
        var window = getWindow();
        var params = swiper.params;
        var $wrapperEl = swiper.$wrapperEl,
            swiperSize = swiper.size,
            rtl = swiper.rtlTranslate,
            wrongRTL = swiper.wrongRTL;
        var isVirtual = swiper.virtual && params.virtual.enabled;
        var previousSlidesLength = isVirtual ? swiper.virtual.slides.length : swiper.slides.length;
        var slides = $wrapperEl.children("." + swiper.params.slideClass);
        var slidesLength = isVirtual ? swiper.virtual.slides.length : slides.length;
        var snapGrid = [];
        var slidesGrid = [];
        var slidesSizesGrid = [];

        function slidesForMargin(slideEl, slideIndex) {
            if (!params.cssMode) return true;

            if (slideIndex === slides.length - 1) {
                return false;
            }

            return true;
        }

        var offsetBefore = params.slidesOffsetBefore;

        if (typeof offsetBefore === 'function') {
            offsetBefore = params.slidesOffsetBefore.call(swiper);
        }

        var offsetAfter = params.slidesOffsetAfter;

        if (typeof offsetAfter === 'function') {
            offsetAfter = params.slidesOffsetAfter.call(swiper);
        }

        var previousSnapGridLength = swiper.snapGrid.length;
        var previousSlidesGridLength = swiper.snapGrid.length;
        var spaceBetween = params.spaceBetween;
        var slidePosition = -offsetBefore;
        var prevSlideSize = 0;
        var index = 0;

        if (typeof swiperSize === 'undefined') {
            return;
        }

        if (typeof spaceBetween === 'string' && spaceBetween.indexOf('%') >= 0) {
            spaceBetween = parseFloat(spaceBetween.replace('%', '')) / 100 * swiperSize;
        }

        swiper.virtualSize = -spaceBetween; // reset margins

        if (rtl) slides.css({
            marginLeft: '',
            marginTop: ''
        }); else slides.css({
            marginRight: '',
            marginBottom: ''
        });
        var slidesNumberEvenToRows;

        if (params.slidesPerColumn > 1) {
            if (Math.floor(slidesLength / params.slidesPerColumn) === slidesLength / swiper.params.slidesPerColumn) {
                slidesNumberEvenToRows = slidesLength;
            } else {
                slidesNumberEvenToRows = Math.ceil(slidesLength / params.slidesPerColumn) * params.slidesPerColumn;
            }

            if (params.slidesPerView !== 'auto' && params.slidesPerColumnFill === 'row') {
                slidesNumberEvenToRows = Math.max(slidesNumberEvenToRows, params.slidesPerView * params.slidesPerColumn);
            }
        } // Calc slides


        var slideSize;
        var slidesPerColumn = params.slidesPerColumn;
        var slidesPerRow = slidesNumberEvenToRows / slidesPerColumn;
        var numFullColumns = Math.floor(slidesLength / params.slidesPerColumn);

        for (var i = 0; i < slidesLength; i += 1) {
            slideSize = 0;
            var slide = slides.eq(i);

            if (params.slidesPerColumn > 1) {
                // Set slides order
                var newSlideOrderIndex = void 0;
                var column = void 0;
                var row = void 0;

                if (params.slidesPerColumnFill === 'row' && params.slidesPerGroup > 1) {
                    var groupIndex = Math.floor(i / (params.slidesPerGroup * params.slidesPerColumn));
                    var slideIndexInGroup = i - params.slidesPerColumn * params.slidesPerGroup * groupIndex;
                    var columnsInGroup = groupIndex === 0 ? params.slidesPerGroup : Math.min(Math.ceil((slidesLength - groupIndex * slidesPerColumn * params.slidesPerGroup) / slidesPerColumn), params.slidesPerGroup);
                    row = Math.floor(slideIndexInGroup / columnsInGroup);
                    column = slideIndexInGroup - row * columnsInGroup + groupIndex * params.slidesPerGroup;
                    newSlideOrderIndex = column + row * slidesNumberEvenToRows / slidesPerColumn;
                    slide.css({
                        '-webkit-box-ordinal-group': newSlideOrderIndex,
                        '-moz-box-ordinal-group': newSlideOrderIndex,
                        '-ms-flex-order': newSlideOrderIndex,
                        '-webkit-order': newSlideOrderIndex,
                        order: newSlideOrderIndex
                    });
                } else if (params.slidesPerColumnFill === 'column') {
                    column = Math.floor(i / slidesPerColumn);
                    row = i - column * slidesPerColumn;

                    if (column > numFullColumns || column === numFullColumns && row === slidesPerColumn - 1) {
                        row += 1;

                        if (row >= slidesPerColumn) {
                            row = 0;
                            column += 1;
                        }
                    }
                } else {
                    row = Math.floor(i / slidesPerRow);
                    column = i - row * slidesPerRow;
                }

                slide.css("margin-" + (swiper.isHorizontal() ? 'top' : 'left'), row !== 0 && params.spaceBetween && params.spaceBetween + "px");
            }

            if (slide.css('display') === 'none') continue; // eslint-disable-line

            if (params.slidesPerView === 'auto') {
                var slideStyles = window.getComputedStyle(slide[0], null);
                var currentTransform = slide[0].style.transform;
                var currentWebKitTransform = slide[0].style.webkitTransform;

                if (currentTransform) {
                    slide[0].style.transform = 'none';
                }

                if (currentWebKitTransform) {
                    slide[0].style.webkitTransform = 'none';
                }

                if (params.roundLengths) {
                    slideSize = swiper.isHorizontal() ? slide.outerWidth(true) : slide.outerHeight(true);
                } else {
                    // eslint-disable-next-line
                    if (swiper.isHorizontal()) {
                        var width = parseFloat(slideStyles.getPropertyValue('width') || 0);
                        var paddingLeft = parseFloat(slideStyles.getPropertyValue('padding-left') || 0);
                        var paddingRight = parseFloat(slideStyles.getPropertyValue('padding-right') || 0);
                        var marginLeft = parseFloat(slideStyles.getPropertyValue('margin-left') || 0);
                        var marginRight = parseFloat(slideStyles.getPropertyValue('margin-right') || 0);
                        var boxSizing = slideStyles.getPropertyValue('box-sizing');

                        if (boxSizing && boxSizing === 'border-box') {
                            slideSize = width + marginLeft + marginRight;
                        } else {
                            var _slide$ = slide[0],
                                clientWidth = _slide$.clientWidth,
                                offsetWidth = _slide$.offsetWidth;
                            slideSize = width + paddingLeft + paddingRight + marginLeft + marginRight + (offsetWidth - clientWidth);
                        }
                    } else {
                        var height = parseFloat(slideStyles.getPropertyValue('height') || 0);
                        var paddingTop = parseFloat(slideStyles.getPropertyValue('padding-top') || 0);
                        var paddingBottom = parseFloat(slideStyles.getPropertyValue('padding-bottom') || 0);
                        var marginTop = parseFloat(slideStyles.getPropertyValue('margin-top') || 0);
                        var marginBottom = parseFloat(slideStyles.getPropertyValue('margin-bottom') || 0);

                        var _boxSizing = slideStyles.getPropertyValue('box-sizing');

                        if (_boxSizing && _boxSizing === 'border-box') {
                            slideSize = height + marginTop + marginBottom;
                        } else {
                            var _slide$2 = slide[0],
                                clientHeight = _slide$2.clientHeight,
                                offsetHeight = _slide$2.offsetHeight;
                            slideSize = height + paddingTop + paddingBottom + marginTop + marginBottom + (offsetHeight - clientHeight);
                        }
                    }
                }

                if (currentTransform) {
                    slide[0].style.transform = currentTransform;
                }

                if (currentWebKitTransform) {
                    slide[0].style.webkitTransform = currentWebKitTransform;
                }

                if (params.roundLengths) slideSize = Math.floor(slideSize);
            } else {
                slideSize = (swiperSize - (params.slidesPerView - 1) * spaceBetween) / params.slidesPerView;
                if (params.roundLengths) slideSize = Math.floor(slideSize);

                if (slides[i]) {
                    if (swiper.isHorizontal()) {
                        slides[i].style.width = slideSize + "px";
                    } else {
                        slides[i].style.height = slideSize + "px";
                    }
                }
            }

            if (slides[i]) {
                slides[i].swiperSlideSize = slideSize;
            }

            slidesSizesGrid.push(slideSize);

            if (params.centeredSlides) {
                slidePosition = slidePosition + slideSize / 2 + prevSlideSize / 2 + spaceBetween;
                if (prevSlideSize === 0 && i !== 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
                if (i === 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
                if (Math.abs(slidePosition) < 1 / 1000) slidePosition = 0;
                if (params.roundLengths) slidePosition = Math.floor(slidePosition);
                if (index % params.slidesPerGroup === 0) snapGrid.push(slidePosition);
                slidesGrid.push(slidePosition);
            } else {
                if (params.roundLengths) slidePosition = Math.floor(slidePosition);
                if ((index - Math.min(swiper.params.slidesPerGroupSkip, index)) % swiper.params.slidesPerGroup === 0) snapGrid.push(slidePosition);
                slidesGrid.push(slidePosition);
                slidePosition = slidePosition + slideSize + spaceBetween;
            }

            swiper.virtualSize += slideSize + spaceBetween;
            prevSlideSize = slideSize;
            index += 1;
        }

        swiper.virtualSize = Math.max(swiper.virtualSize, swiperSize) + offsetAfter;
        var newSlidesGrid;

        if (rtl && wrongRTL && (params.effect === 'slide' || params.effect === 'coverflow')) {
            $wrapperEl.css({
                width: swiper.virtualSize + params.spaceBetween + "px"
            });
        }

        if (params.setWrapperSize) {
            if (swiper.isHorizontal()) $wrapperEl.css({
                width: swiper.virtualSize + params.spaceBetween + "px"
            }); else $wrapperEl.css({
                height: swiper.virtualSize + params.spaceBetween + "px"
            });
        }

        if (params.slidesPerColumn > 1) {
            swiper.virtualSize = (slideSize + params.spaceBetween) * slidesNumberEvenToRows;
            swiper.virtualSize = Math.ceil(swiper.virtualSize / params.slidesPerColumn) - params.spaceBetween;
            if (swiper.isHorizontal()) $wrapperEl.css({
                width: swiper.virtualSize + params.spaceBetween + "px"
            }); else $wrapperEl.css({
                height: swiper.virtualSize + params.spaceBetween + "px"
            });

            if (params.centeredSlides) {
                newSlidesGrid = [];

                for (var _i = 0; _i < snapGrid.length; _i += 1) {
                    var slidesGridItem = snapGrid[_i];
                    if (params.roundLengths) slidesGridItem = Math.floor(slidesGridItem);
                    if (snapGrid[_i] < swiper.virtualSize + snapGrid[0]) newSlidesGrid.push(slidesGridItem);
                }

                snapGrid = newSlidesGrid;
            }
        } // Remove last grid elements depending on width


        if (!params.centeredSlides) {
            newSlidesGrid = [];

            for (var _i2 = 0; _i2 < snapGrid.length; _i2 += 1) {
                var _slidesGridItem = snapGrid[_i2];
                if (params.roundLengths) _slidesGridItem = Math.floor(_slidesGridItem);

                if (snapGrid[_i2] <= swiper.virtualSize - swiperSize) {
                    newSlidesGrid.push(_slidesGridItem);
                }
            }

            snapGrid = newSlidesGrid;

            if (Math.floor(swiper.virtualSize - swiperSize) - Math.floor(snapGrid[snapGrid.length - 1]) > 1) {
                snapGrid.push(swiper.virtualSize - swiperSize);
            }
        }

        if (snapGrid.length === 0) snapGrid = [0];

        if (params.spaceBetween !== 0) {
            if (swiper.isHorizontal()) {
                if (rtl) slides.filter(slidesForMargin).css({
                    marginLeft: spaceBetween + "px"
                }); else slides.filter(slidesForMargin).css({
                    marginRight: spaceBetween + "px"
                });
            } else slides.filter(slidesForMargin).css({
                marginBottom: spaceBetween + "px"
            });
        }

        if (params.centeredSlides && params.centeredSlidesBounds) {
            var allSlidesSize = 0;
            slidesSizesGrid.forEach(function (slideSizeValue) {
                allSlidesSize += slideSizeValue + (params.spaceBetween ? params.spaceBetween : 0);
            });
            allSlidesSize -= params.spaceBetween;
            var maxSnap = allSlidesSize - swiperSize;
            snapGrid = snapGrid.map(function (snap) {
                if (snap < 0) return -offsetBefore;
                if (snap > maxSnap) return maxSnap + offsetAfter;
                return snap;
            });
        }

        if (params.centerInsufficientSlides) {
            var _allSlidesSize = 0;
            slidesSizesGrid.forEach(function (slideSizeValue) {
                _allSlidesSize += slideSizeValue + (params.spaceBetween ? params.spaceBetween : 0);
            });
            _allSlidesSize -= params.spaceBetween;

            if (_allSlidesSize < swiperSize) {
                var allSlidesOffset = (swiperSize - _allSlidesSize) / 2;
                snapGrid.forEach(function (snap, snapIndex) {
                    snapGrid[snapIndex] = snap - allSlidesOffset;
                });
                slidesGrid.forEach(function (snap, snapIndex) {
                    slidesGrid[snapIndex] = snap + allSlidesOffset;
                });
            }
        }

        extend$1(swiper, {
            slides: slides,
            snapGrid: snapGrid,
            slidesGrid: slidesGrid,
            slidesSizesGrid: slidesSizesGrid
        });

        if (slidesLength !== previousSlidesLength) {
            swiper.emit('slidesLengthChange');
        }

        if (snapGrid.length !== previousSnapGridLength) {
            if (swiper.params.watchOverflow) swiper.checkOverflow();
            swiper.emit('snapGridLengthChange');
        }

        if (slidesGrid.length !== previousSlidesGridLength) {
            swiper.emit('slidesGridLengthChange');
        }

        if (params.watchSlidesProgress || params.watchSlidesVisibility) {
            swiper.updateSlidesOffset();
        }
    }

    function updateAutoHeight(speed) {
        var swiper = this;
        var activeSlides = [];
        var newHeight = 0;
        var i;

        if (typeof speed === 'number') {
            swiper.setTransition(speed);
        } else if (speed === true) {
            swiper.setTransition(swiper.params.speed);
        } // Find slides currently in view


        if (swiper.params.slidesPerView !== 'auto' && swiper.params.slidesPerView > 1) {
            if (swiper.params.centeredSlides) {
                swiper.visibleSlides.each(function (slide) {
                    activeSlides.push(slide);
                });
            } else {
                for (i = 0; i < Math.ceil(swiper.params.slidesPerView); i += 1) {
                    var index = swiper.activeIndex + i;
                    if (index > swiper.slides.length) break;
                    activeSlides.push(swiper.slides.eq(index)[0]);
                }
            }
        } else {
            activeSlides.push(swiper.slides.eq(swiper.activeIndex)[0]);
        } // Find new height from highest slide in view


        for (i = 0; i < activeSlides.length; i += 1) {
            if (typeof activeSlides[i] !== 'undefined') {
                var height = activeSlides[i].offsetHeight;
                newHeight = height > newHeight ? height : newHeight;
            }
        } // Update Height


        if (newHeight) swiper.$wrapperEl.css('height', newHeight + "px");
    }

    function updateSlidesOffset() {
        var swiper = this;
        var slides = swiper.slides;

        for (var i = 0; i < slides.length; i += 1) {
            slides[i].swiperSlideOffset = swiper.isHorizontal() ? slides[i].offsetLeft : slides[i].offsetTop;
        }
    }

    function updateSlidesProgress(translate) {
        if (translate === void 0) {
            translate = this && this.translate || 0;
        }

        var swiper = this;
        var params = swiper.params;
        var slides = swiper.slides,
            rtl = swiper.rtlTranslate;
        if (slides.length === 0) return;
        if (typeof slides[0].swiperSlideOffset === 'undefined') swiper.updateSlidesOffset();
        var offsetCenter = -translate;
        if (rtl) offsetCenter = translate; // Visible Slides

        slides.removeClass(params.slideVisibleClass);
        swiper.visibleSlidesIndexes = [];
        swiper.visibleSlides = [];

        for (var i = 0; i < slides.length; i += 1) {
            var slide = slides[i];
            var slideProgress = (offsetCenter + (params.centeredSlides ? swiper.minTranslate() : 0) - slide.swiperSlideOffset) / (slide.swiperSlideSize + params.spaceBetween);

            if (params.watchSlidesVisibility || params.centeredSlides && params.autoHeight) {
                var slideBefore = -(offsetCenter - slide.swiperSlideOffset);
                var slideAfter = slideBefore + swiper.slidesSizesGrid[i];
                var isVisible = slideBefore >= 0 && slideBefore < swiper.size - 1 || slideAfter > 1 && slideAfter <= swiper.size || slideBefore <= 0 && slideAfter >= swiper.size;

                if (isVisible) {
                    swiper.visibleSlides.push(slide);
                    swiper.visibleSlidesIndexes.push(i);
                    slides.eq(i).addClass(params.slideVisibleClass);
                }
            }

            slide.progress = rtl ? -slideProgress : slideProgress;
        }

        swiper.visibleSlides = $(swiper.visibleSlides);
    }

    function updateProgress(translate) {
        var swiper = this;

        if (typeof translate === 'undefined') {
            var multiplier = swiper.rtlTranslate ? -1 : 1; // eslint-disable-next-line

            translate = swiper && swiper.translate && swiper.translate * multiplier || 0;
        }

        var params = swiper.params;
        var translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
        var progress = swiper.progress,
            isBeginning = swiper.isBeginning,
            isEnd = swiper.isEnd;
        var wasBeginning = isBeginning;
        var wasEnd = isEnd;

        if (translatesDiff === 0) {
            progress = 0;
            isBeginning = true;
            isEnd = true;
        } else {
            progress = (translate - swiper.minTranslate()) / translatesDiff;
            isBeginning = progress <= 0;
            isEnd = progress >= 1;
        }

        extend$1(swiper, {
            progress: progress,
            isBeginning: isBeginning,
            isEnd: isEnd
        });
        if (params.watchSlidesProgress || params.watchSlidesVisibility || params.centeredSlides && params.autoHeight) swiper.updateSlidesProgress(translate);

        if (isBeginning && !wasBeginning) {
            swiper.emit('reachBeginning toEdge');
        }

        if (isEnd && !wasEnd) {
            swiper.emit('reachEnd toEdge');
        }

        if (wasBeginning && !isBeginning || wasEnd && !isEnd) {
            swiper.emit('fromEdge');
        }

        swiper.emit('progress', progress);
    }

    function updateSlidesClasses() {
        var swiper = this;
        var slides = swiper.slides,
            params = swiper.params,
            $wrapperEl = swiper.$wrapperEl,
            activeIndex = swiper.activeIndex,
            realIndex = swiper.realIndex;
        var isVirtual = swiper.virtual && params.virtual.enabled;
        slides.removeClass(params.slideActiveClass + " " + params.slideNextClass + " " + params.slidePrevClass + " " + params.slideDuplicateActiveClass + " " + params.slideDuplicateNextClass + " " + params.slideDuplicatePrevClass);
        var activeSlide;

        if (isVirtual) {
            activeSlide = swiper.$wrapperEl.find("." + params.slideClass + "[data-swiper-slide-index=\"" + activeIndex + "\"]");
        } else {
            activeSlide = slides.eq(activeIndex);
        } // Active classes


        activeSlide.addClass(params.slideActiveClass);

        if (params.loop) {
            // Duplicate to all looped slides
            if (activeSlide.hasClass(params.slideDuplicateClass)) {
                $wrapperEl.children("." + params.slideClass + ":not(." + params.slideDuplicateClass + ")[data-swiper-slide-index=\"" + realIndex + "\"]").addClass(params.slideDuplicateActiveClass);
            } else {
                $wrapperEl.children("." + params.slideClass + "." + params.slideDuplicateClass + "[data-swiper-slide-index=\"" + realIndex + "\"]").addClass(params.slideDuplicateActiveClass);
            }
        } // Next Slide


        var nextSlide = activeSlide.nextAll("." + params.slideClass).eq(0).addClass(params.slideNextClass);

        if (params.loop && nextSlide.length === 0) {
            nextSlide = slides.eq(0);
            nextSlide.addClass(params.slideNextClass);
        } // Prev Slide


        var prevSlide = activeSlide.prevAll("." + params.slideClass).eq(0).addClass(params.slidePrevClass);

        if (params.loop && prevSlide.length === 0) {
            prevSlide = slides.eq(-1);
            prevSlide.addClass(params.slidePrevClass);
        }

        if (params.loop) {
            // Duplicate to all looped slides
            if (nextSlide.hasClass(params.slideDuplicateClass)) {
                $wrapperEl.children("." + params.slideClass + ":not(." + params.slideDuplicateClass + ")[data-swiper-slide-index=\"" + nextSlide.attr('data-swiper-slide-index') + "\"]").addClass(params.slideDuplicateNextClass);
            } else {
                $wrapperEl.children("." + params.slideClass + "." + params.slideDuplicateClass + "[data-swiper-slide-index=\"" + nextSlide.attr('data-swiper-slide-index') + "\"]").addClass(params.slideDuplicateNextClass);
            }

            if (prevSlide.hasClass(params.slideDuplicateClass)) {
                $wrapperEl.children("." + params.slideClass + ":not(." + params.slideDuplicateClass + ")[data-swiper-slide-index=\"" + prevSlide.attr('data-swiper-slide-index') + "\"]").addClass(params.slideDuplicatePrevClass);
            } else {
                $wrapperEl.children("." + params.slideClass + "." + params.slideDuplicateClass + "[data-swiper-slide-index=\"" + prevSlide.attr('data-swiper-slide-index') + "\"]").addClass(params.slideDuplicatePrevClass);
            }
        }

        swiper.emitSlidesClasses();
    }

    function updateActiveIndex(newActiveIndex) {
        var swiper = this;
        var translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
        var slidesGrid = swiper.slidesGrid,
            snapGrid = swiper.snapGrid,
            params = swiper.params,
            previousIndex = swiper.activeIndex,
            previousRealIndex = swiper.realIndex,
            previousSnapIndex = swiper.snapIndex;
        var activeIndex = newActiveIndex;
        var snapIndex;

        if (typeof activeIndex === 'undefined') {
            for (var i = 0; i < slidesGrid.length; i += 1) {
                if (typeof slidesGrid[i + 1] !== 'undefined') {
                    if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1] - (slidesGrid[i + 1] - slidesGrid[i]) / 2) {
                        activeIndex = i;
                    } else if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1]) {
                        activeIndex = i + 1;
                    }
                } else if (translate >= slidesGrid[i]) {
                    activeIndex = i;
                }
            } // Normalize slideIndex


            if (params.normalizeSlideIndex) {
                if (activeIndex < 0 || typeof activeIndex === 'undefined') activeIndex = 0;
            }
        }

        if (snapGrid.indexOf(translate) >= 0) {
            snapIndex = snapGrid.indexOf(translate);
        } else {
            var skip = Math.min(params.slidesPerGroupSkip, activeIndex);
            snapIndex = skip + Math.floor((activeIndex - skip) / params.slidesPerGroup);
        }

        if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;

        if (activeIndex === previousIndex) {
            if (snapIndex !== previousSnapIndex) {
                swiper.snapIndex = snapIndex;
                swiper.emit('snapIndexChange');
            }

            return;
        } // Get real index


        var realIndex = parseInt(swiper.slides.eq(activeIndex).attr('data-swiper-slide-index') || activeIndex, 10);
        extend$1(swiper, {
            snapIndex: snapIndex,
            realIndex: realIndex,
            previousIndex: previousIndex,
            activeIndex: activeIndex
        });
        swiper.emit('activeIndexChange');
        swiper.emit('snapIndexChange');

        if (previousRealIndex !== realIndex) {
            swiper.emit('realIndexChange');
        }

        if (swiper.initialized || swiper.params.runCallbacksOnInit) {
            swiper.emit('slideChange');
        }
    }

    function updateClickedSlide(e) {
        var swiper = this;
        var params = swiper.params;
        var slide = $(e.target).closest("." + params.slideClass)[0];
        var slideFound = false;

        if (slide) {
            for (var i = 0; i < swiper.slides.length; i += 1) {
                if (swiper.slides[i] === slide) slideFound = true;
            }
        }

        if (slide && slideFound) {
            swiper.clickedSlide = slide;

            if (swiper.virtual && swiper.params.virtual.enabled) {
                swiper.clickedIndex = parseInt($(slide).attr('data-swiper-slide-index'), 10);
            } else {
                swiper.clickedIndex = $(slide).index();
            }
        } else {
            swiper.clickedSlide = undefined;
            swiper.clickedIndex = undefined;
            return;
        }

        if (params.slideToClickedSlide && swiper.clickedIndex !== undefined && swiper.clickedIndex !== swiper.activeIndex) {
            swiper.slideToClickedSlide();
        }
    }

    var update = {
        updateSize: updateSize,
        updateSlides: updateSlides,
        updateAutoHeight: updateAutoHeight,
        updateSlidesOffset: updateSlidesOffset,
        updateSlidesProgress: updateSlidesProgress,
        updateProgress: updateProgress,
        updateSlidesClasses: updateSlidesClasses,
        updateActiveIndex: updateActiveIndex,
        updateClickedSlide: updateClickedSlide
    };

    function getSwiperTranslate(axis) {
        if (axis === void 0) {
            axis = this.isHorizontal() ? 'x' : 'y';
        }

        var swiper = this;
        var params = swiper.params,
            rtl = swiper.rtlTranslate,
            translate = swiper.translate,
            $wrapperEl = swiper.$wrapperEl;

        if (params.virtualTranslate) {
            return rtl ? -translate : translate;
        }

        if (params.cssMode) {
            return translate;
        }

        var currentTranslate = getTranslate($wrapperEl[0], axis);
        if (rtl) currentTranslate = -currentTranslate;
        return currentTranslate || 0;
    }

    function setTranslate(translate, byController) {
        var swiper = this;
        var rtl = swiper.rtlTranslate,
            params = swiper.params,
            $wrapperEl = swiper.$wrapperEl,
            wrapperEl = swiper.wrapperEl,
            progress = swiper.progress;
        var x = 0;
        var y = 0;
        var z = 0;

        if (swiper.isHorizontal()) {
            x = rtl ? -translate : translate;
        } else {
            y = translate;
        }

        if (params.roundLengths) {
            x = Math.floor(x);
            y = Math.floor(y);
        }

        if (params.cssMode) {
            wrapperEl[swiper.isHorizontal() ? 'scrollLeft' : 'scrollTop'] = swiper.isHorizontal() ? -x : -y;
        } else if (!params.virtualTranslate) {
            $wrapperEl.transform("translate3d(" + x + "px, " + y + "px, " + z + "px)");
        }

        swiper.previousTranslate = swiper.translate;
        swiper.translate = swiper.isHorizontal() ? x : y; // Check if we need to update progress

        var newProgress;
        var translatesDiff = swiper.maxTranslate() - swiper.minTranslate();

        if (translatesDiff === 0) {
            newProgress = 0;
        } else {
            newProgress = (translate - swiper.minTranslate()) / translatesDiff;
        }

        if (newProgress !== progress) {
            swiper.updateProgress(translate);
        }

        swiper.emit('setTranslate', swiper.translate, byController);
    }

    function minTranslate() {
        return -this.snapGrid[0];
    }

    function maxTranslate() {
        return -this.snapGrid[this.snapGrid.length - 1];
    }

    function translateTo(translate, speed, runCallbacks, translateBounds, internal) {
        if (translate === void 0) {
            translate = 0;
        }

        if (speed === void 0) {
            speed = this.params.speed;
        }

        if (runCallbacks === void 0) {
            runCallbacks = true;
        }

        if (translateBounds === void 0) {
            translateBounds = true;
        }

        var swiper = this;
        var params = swiper.params,
            wrapperEl = swiper.wrapperEl;

        if (swiper.animating && params.preventInteractionOnTransition) {
            return false;
        }

        var minTranslate = swiper.minTranslate();
        var maxTranslate = swiper.maxTranslate();
        var newTranslate;
        if (translateBounds && translate > minTranslate) newTranslate = minTranslate; else if (translateBounds && translate < maxTranslate) newTranslate = maxTranslate; else newTranslate = translate; // Update progress

        swiper.updateProgress(newTranslate);

        if (params.cssMode) {
            var isH = swiper.isHorizontal();

            if (speed === 0) {
                wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = -newTranslate;
            } else {
                // eslint-disable-next-line
                if (wrapperEl.scrollTo) {
                    var _wrapperEl$scrollTo;

                    wrapperEl.scrollTo((_wrapperEl$scrollTo = {}, _wrapperEl$scrollTo[isH ? 'left' : 'top'] = -newTranslate, _wrapperEl$scrollTo.behavior = 'smooth', _wrapperEl$scrollTo));
                } else {
                    wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = -newTranslate;
                }
            }

            return true;
        }

        if (speed === 0) {
            swiper.setTransition(0);
            swiper.setTranslate(newTranslate);

            if (runCallbacks) {
                swiper.emit('beforeTransitionStart', speed, internal);
                swiper.emit('transitionEnd');
            }
        } else {
            swiper.setTransition(speed);
            swiper.setTranslate(newTranslate);

            if (runCallbacks) {
                swiper.emit('beforeTransitionStart', speed, internal);
                swiper.emit('transitionStart');
            }

            if (!swiper.animating) {
                swiper.animating = true;

                if (!swiper.onTranslateToWrapperTransitionEnd) {
                    swiper.onTranslateToWrapperTransitionEnd = function transitionEnd(e) {
                        if (!swiper || swiper.destroyed) return;
                        if (e.target !== this) return;
                        swiper.$wrapperEl[0].removeEventListener('transitionend', swiper.onTranslateToWrapperTransitionEnd);
                        swiper.$wrapperEl[0].removeEventListener('webkitTransitionEnd', swiper.onTranslateToWrapperTransitionEnd);
                        swiper.onTranslateToWrapperTransitionEnd = null;
                        delete swiper.onTranslateToWrapperTransitionEnd;

                        if (runCallbacks) {
                            swiper.emit('transitionEnd');
                        }
                    };
                }

                swiper.$wrapperEl[0].addEventListener('transitionend', swiper.onTranslateToWrapperTransitionEnd);
                swiper.$wrapperEl[0].addEventListener('webkitTransitionEnd', swiper.onTranslateToWrapperTransitionEnd);
            }
        }

        return true;
    }

    var translate = {
        getTranslate: getSwiperTranslate,
        setTranslate: setTranslate,
        minTranslate: minTranslate,
        maxTranslate: maxTranslate,
        translateTo: translateTo
    };

    function setTransition(duration, byController) {
        var swiper = this;

        if (!swiper.params.cssMode) {
            swiper.$wrapperEl.transition(duration);
        }

        swiper.emit('setTransition', duration, byController);
    }

    function transitionStart(runCallbacks, direction) {
        if (runCallbacks === void 0) {
            runCallbacks = true;
        }

        var swiper = this;
        var activeIndex = swiper.activeIndex,
            params = swiper.params,
            previousIndex = swiper.previousIndex;
        if (params.cssMode) return;

        if (params.autoHeight) {
            swiper.updateAutoHeight();
        }

        var dir = direction;

        if (!dir) {
            if (activeIndex > previousIndex) dir = 'next'; else if (activeIndex < previousIndex) dir = 'prev'; else dir = 'reset';
        }

        swiper.emit('transitionStart');

        if (runCallbacks && activeIndex !== previousIndex) {
            if (dir === 'reset') {
                swiper.emit('slideResetTransitionStart');
                return;
            }

            swiper.emit('slideChangeTransitionStart');

            if (dir === 'next') {
                swiper.emit('slideNextTransitionStart');
            } else {
                swiper.emit('slidePrevTransitionStart');
            }
        }
    }

    function transitionEnd$1(runCallbacks, direction) {
        if (runCallbacks === void 0) {
            runCallbacks = true;
        }

        var swiper = this;
        var activeIndex = swiper.activeIndex,
            previousIndex = swiper.previousIndex,
            params = swiper.params;
        swiper.animating = false;
        if (params.cssMode) return;
        swiper.setTransition(0);
        var dir = direction;

        if (!dir) {
            if (activeIndex > previousIndex) dir = 'next'; else if (activeIndex < previousIndex) dir = 'prev'; else dir = 'reset';
        }

        swiper.emit('transitionEnd');

        if (runCallbacks && activeIndex !== previousIndex) {
            if (dir === 'reset') {
                swiper.emit('slideResetTransitionEnd');
                return;
            }

            swiper.emit('slideChangeTransitionEnd');

            if (dir === 'next') {
                swiper.emit('slideNextTransitionEnd');
            } else {
                swiper.emit('slidePrevTransitionEnd');
            }
        }
    }

    var transition$1 = {
        setTransition: setTransition,
        transitionStart: transitionStart,
        transitionEnd: transitionEnd$1
    };

    function slideTo(index, speed, runCallbacks, internal) {
        if (index === void 0) {
            index = 0;
        }

        if (speed === void 0) {
            speed = this.params.speed;
        }

        if (runCallbacks === void 0) {
            runCallbacks = true;
        }

        if (typeof index !== 'number' && typeof index !== 'string') {
            throw new Error("The 'index' argument cannot have type other than 'number' or 'string'. [" + typeof index + "] given.");
        }

        if (typeof index === 'string') {
            /**
             * The `index` argument converted from `string` to `number`.
             * @type {number}
             */
            var indexAsNumber = parseInt(index, 10);
            /**
             * Determines whether the `index` argument is a valid `number`
             * after being converted from the `string` type.
             * @type {boolean}
             */

            var isValidNumber = isFinite(indexAsNumber);

            if (!isValidNumber) {
                throw new Error("The passed-in 'index' (string) couldn't be converted to 'number'. [" + index + "] given.");
            } // Knowing that the converted `index` is a valid number,
            // we can update the original argument's value.


            index = indexAsNumber;
        }

        var swiper = this;
        var slideIndex = index;
        if (slideIndex < 0) slideIndex = 0;
        var params = swiper.params,
            snapGrid = swiper.snapGrid,
            slidesGrid = swiper.slidesGrid,
            previousIndex = swiper.previousIndex,
            activeIndex = swiper.activeIndex,
            rtl = swiper.rtlTranslate,
            wrapperEl = swiper.wrapperEl;

        if (swiper.animating && params.preventInteractionOnTransition) {
            return false;
        }

        var skip = Math.min(swiper.params.slidesPerGroupSkip, slideIndex);
        var snapIndex = skip + Math.floor((slideIndex - skip) / swiper.params.slidesPerGroup);
        if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;

        if ((activeIndex || params.initialSlide || 0) === (previousIndex || 0) && runCallbacks) {
            swiper.emit('beforeSlideChangeStart');
        }

        var translate = -snapGrid[snapIndex]; // Update progress

        swiper.updateProgress(translate); // Normalize slideIndex

        if (params.normalizeSlideIndex) {
            for (var i = 0; i < slidesGrid.length; i += 1) {
                if (-Math.floor(translate * 100) >= Math.floor(slidesGrid[i] * 100)) {
                    slideIndex = i;
                }
            }
        } // Directions locks


        if (swiper.initialized && slideIndex !== activeIndex) {
            if (!swiper.allowSlideNext && translate < swiper.translate && translate < swiper.minTranslate()) {
                return false;
            }

            if (!swiper.allowSlidePrev && translate > swiper.translate && translate > swiper.maxTranslate()) {
                if ((activeIndex || 0) !== slideIndex) return false;
            }
        }

        var direction;
        if (slideIndex > activeIndex) direction = 'next'; else if (slideIndex < activeIndex) direction = 'prev'; else direction = 'reset'; // Update Index

        if (rtl && -translate === swiper.translate || !rtl && translate === swiper.translate) {
            swiper.updateActiveIndex(slideIndex); // Update Height

            if (params.autoHeight) {
                swiper.updateAutoHeight();
            }

            swiper.updateSlidesClasses();

            if (params.effect !== 'slide') {
                swiper.setTranslate(translate);
            }

            if (direction !== 'reset') {
                swiper.transitionStart(runCallbacks, direction);
                swiper.transitionEnd(runCallbacks, direction);
            }

            return false;
        }

        if (params.cssMode) {
            var isH = swiper.isHorizontal();
            var t = -translate;

            if (rtl) {
                t = wrapperEl.scrollWidth - wrapperEl.offsetWidth - t;
            }

            if (speed === 0) {
                wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = t;
            } else {
                // eslint-disable-next-line
                if (wrapperEl.scrollTo) {
                    var _wrapperEl$scrollTo;

                    wrapperEl.scrollTo((_wrapperEl$scrollTo = {}, _wrapperEl$scrollTo[isH ? 'left' : 'top'] = t, _wrapperEl$scrollTo.behavior = 'smooth', _wrapperEl$scrollTo));
                } else {
                    wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = t;
                }
            }

            return true;
        }

        if (speed === 0) {
            swiper.setTransition(0);
            swiper.setTranslate(translate);
            swiper.updateActiveIndex(slideIndex);
            swiper.updateSlidesClasses();
            swiper.emit('beforeTransitionStart', speed, internal);
            swiper.transitionStart(runCallbacks, direction);
            swiper.transitionEnd(runCallbacks, direction);
        } else {
            swiper.setTransition(speed);
            swiper.setTranslate(translate);
            swiper.updateActiveIndex(slideIndex);
            swiper.updateSlidesClasses();
            swiper.emit('beforeTransitionStart', speed, internal);
            swiper.transitionStart(runCallbacks, direction);

            if (!swiper.animating) {
                swiper.animating = true;

                if (!swiper.onSlideToWrapperTransitionEnd) {
                    swiper.onSlideToWrapperTransitionEnd = function transitionEnd(e) {
                        if (!swiper || swiper.destroyed) return;
                        if (e.target !== this) return;
                        swiper.$wrapperEl[0].removeEventListener('transitionend', swiper.onSlideToWrapperTransitionEnd);
                        swiper.$wrapperEl[0].removeEventListener('webkitTransitionEnd', swiper.onSlideToWrapperTransitionEnd);
                        swiper.onSlideToWrapperTransitionEnd = null;
                        delete swiper.onSlideToWrapperTransitionEnd;
                        swiper.transitionEnd(runCallbacks, direction);
                    };
                }

                swiper.$wrapperEl[0].addEventListener('transitionend', swiper.onSlideToWrapperTransitionEnd);
                swiper.$wrapperEl[0].addEventListener('webkitTransitionEnd', swiper.onSlideToWrapperTransitionEnd);
            }
        }

        return true;
    }

    function slideToLoop(index, speed, runCallbacks, internal) {
        if (index === void 0) {
            index = 0;
        }

        if (speed === void 0) {
            speed = this.params.speed;
        }

        if (runCallbacks === void 0) {
            runCallbacks = true;
        }

        var swiper = this;
        var newIndex = index;

        if (swiper.params.loop) {
            newIndex += swiper.loopedSlides;
        }

        return swiper.slideTo(newIndex, speed, runCallbacks, internal);
    }

    /* eslint no-unused-vars: "off" */
    function slideNext(speed, runCallbacks, internal) {
        if (speed === void 0) {
            speed = this.params.speed;
        }

        if (runCallbacks === void 0) {
            runCallbacks = true;
        }

        var swiper = this;
        var params = swiper.params,
            animating = swiper.animating;
        var increment = swiper.activeIndex < params.slidesPerGroupSkip ? 1 : params.slidesPerGroup;

        if (params.loop) {
            if (animating && params.loopPreventsSlide) return false;
            swiper.loopFix(); // eslint-disable-next-line

            swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
        }

        return swiper.slideTo(swiper.activeIndex + increment, speed, runCallbacks, internal);
    }

    /* eslint no-unused-vars: "off" */
    function slidePrev(speed, runCallbacks, internal) {
        if (speed === void 0) {
            speed = this.params.speed;
        }

        if (runCallbacks === void 0) {
            runCallbacks = true;
        }

        var swiper = this;
        var params = swiper.params,
            animating = swiper.animating,
            snapGrid = swiper.snapGrid,
            slidesGrid = swiper.slidesGrid,
            rtlTranslate = swiper.rtlTranslate;

        if (params.loop) {
            if (animating && params.loopPreventsSlide) return false;
            swiper.loopFix(); // eslint-disable-next-line

            swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
        }

        var translate = rtlTranslate ? swiper.translate : -swiper.translate;

        function normalize(val) {
            if (val < 0) return -Math.floor(Math.abs(val));
            return Math.floor(val);
        }

        var normalizedTranslate = normalize(translate);
        var normalizedSnapGrid = snapGrid.map(function (val) {
            return normalize(val);
        });
        var currentSnap = snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate)];
        var prevSnap = snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate) - 1];

        if (typeof prevSnap === 'undefined' && params.cssMode) {
            snapGrid.forEach(function (snap) {
                if (!prevSnap && normalizedTranslate >= snap) prevSnap = snap;
            });
        }

        var prevIndex;

        if (typeof prevSnap !== 'undefined') {
            prevIndex = slidesGrid.indexOf(prevSnap);
            if (prevIndex < 0) prevIndex = swiper.activeIndex - 1;
        }

        return swiper.slideTo(prevIndex, speed, runCallbacks, internal);
    }

    /* eslint no-unused-vars: "off" */
    function slideReset(speed, runCallbacks, internal) {
        if (speed === void 0) {
            speed = this.params.speed;
        }

        if (runCallbacks === void 0) {
            runCallbacks = true;
        }

        var swiper = this;
        return swiper.slideTo(swiper.activeIndex, speed, runCallbacks, internal);
    }

    /* eslint no-unused-vars: "off" */
    function slideToClosest(speed, runCallbacks, internal, threshold) {
        if (speed === void 0) {
            speed = this.params.speed;
        }

        if (runCallbacks === void 0) {
            runCallbacks = true;
        }

        if (threshold === void 0) {
            threshold = 0.5;
        }

        var swiper = this;
        var index = swiper.activeIndex;
        var skip = Math.min(swiper.params.slidesPerGroupSkip, index);
        var snapIndex = skip + Math.floor((index - skip) / swiper.params.slidesPerGroup);
        var translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;

        if (translate >= swiper.snapGrid[snapIndex]) {
            // The current translate is on or after the current snap index, so the choice
            // is between the current index and the one after it.
            var currentSnap = swiper.snapGrid[snapIndex];
            var nextSnap = swiper.snapGrid[snapIndex + 1];

            if (translate - currentSnap > (nextSnap - currentSnap) * threshold) {
                index += swiper.params.slidesPerGroup;
            }
        } else {
            // The current translate is before the current snap index, so the choice
            // is between the current index and the one before it.
            var prevSnap = swiper.snapGrid[snapIndex - 1];
            var _currentSnap = swiper.snapGrid[snapIndex];

            if (translate - prevSnap <= (_currentSnap - prevSnap) * threshold) {
                index -= swiper.params.slidesPerGroup;
            }
        }

        index = Math.max(index, 0);
        index = Math.min(index, swiper.slidesGrid.length - 1);
        return swiper.slideTo(index, speed, runCallbacks, internal);
    }

    function slideToClickedSlide() {
        var swiper = this;
        var params = swiper.params,
            $wrapperEl = swiper.$wrapperEl;
        var slidesPerView = params.slidesPerView === 'auto' ? swiper.slidesPerViewDynamic() : params.slidesPerView;
        var slideToIndex = swiper.clickedIndex;
        var realIndex;

        if (params.loop) {
            if (swiper.animating) return;
            realIndex = parseInt($(swiper.clickedSlide).attr('data-swiper-slide-index'), 10);

            if (params.centeredSlides) {
                if (slideToIndex < swiper.loopedSlides - slidesPerView / 2 || slideToIndex > swiper.slides.length - swiper.loopedSlides + slidesPerView / 2) {
                    swiper.loopFix();
                    slideToIndex = $wrapperEl.children("." + params.slideClass + "[data-swiper-slide-index=\"" + realIndex + "\"]:not(." + params.slideDuplicateClass + ")").eq(0).index();
                    nextTick(function () {
                        swiper.slideTo(slideToIndex);
                    });
                } else {
                    swiper.slideTo(slideToIndex);
                }
            } else if (slideToIndex > swiper.slides.length - slidesPerView) {
                swiper.loopFix();
                slideToIndex = $wrapperEl.children("." + params.slideClass + "[data-swiper-slide-index=\"" + realIndex + "\"]:not(." + params.slideDuplicateClass + ")").eq(0).index();
                nextTick(function () {
                    swiper.slideTo(slideToIndex);
                });
            } else {
                swiper.slideTo(slideToIndex);
            }
        } else {
            swiper.slideTo(slideToIndex);
        }
    }

    var slide = {
        slideTo: slideTo,
        slideToLoop: slideToLoop,
        slideNext: slideNext,
        slidePrev: slidePrev,
        slideReset: slideReset,
        slideToClosest: slideToClosest,
        slideToClickedSlide: slideToClickedSlide
    };

    function loopCreate() {
        var swiper = this;
        var document = getDocument();
        var params = swiper.params,
            $wrapperEl = swiper.$wrapperEl; // Remove duplicated slides

        $wrapperEl.children("." + params.slideClass + "." + params.slideDuplicateClass).remove();
        var slides = $wrapperEl.children("." + params.slideClass);

        if (params.loopFillGroupWithBlank) {
            var blankSlidesNum = params.slidesPerGroup - slides.length % params.slidesPerGroup;

            if (blankSlidesNum !== params.slidesPerGroup) {
                for (var i = 0; i < blankSlidesNum; i += 1) {
                    var blankNode = $(document.createElement('div')).addClass(params.slideClass + " " + params.slideBlankClass);
                    $wrapperEl.append(blankNode);
                }

                slides = $wrapperEl.children("." + params.slideClass);
            }
        }

        if (params.slidesPerView === 'auto' && !params.loopedSlides) params.loopedSlides = slides.length;
        swiper.loopedSlides = Math.ceil(parseFloat(params.loopedSlides || params.slidesPerView, 10));
        swiper.loopedSlides += params.loopAdditionalSlides;

        if (swiper.loopedSlides > slides.length) {
            swiper.loopedSlides = slides.length;
        }

        var prependSlides = [];
        var appendSlides = [];
        slides.each(function (el, index) {
            var slide = $(el);

            if (index < swiper.loopedSlides) {
                appendSlides.push(el);
            }

            if (index < slides.length && index >= slides.length - swiper.loopedSlides) {
                prependSlides.push(el);
            }

            slide.attr('data-swiper-slide-index', index);
        });

        for (var _i = 0; _i < appendSlides.length; _i += 1) {
            $wrapperEl.append($(appendSlides[_i].cloneNode(true)).addClass(params.slideDuplicateClass));
        }

        for (var _i2 = prependSlides.length - 1; _i2 >= 0; _i2 -= 1) {
            $wrapperEl.prepend($(prependSlides[_i2].cloneNode(true)).addClass(params.slideDuplicateClass));
        }
    }

    function loopFix() {
        var swiper = this;
        swiper.emit('beforeLoopFix');
        var activeIndex = swiper.activeIndex,
            slides = swiper.slides,
            loopedSlides = swiper.loopedSlides,
            allowSlidePrev = swiper.allowSlidePrev,
            allowSlideNext = swiper.allowSlideNext,
            snapGrid = swiper.snapGrid,
            rtl = swiper.rtlTranslate;
        var newIndex;
        swiper.allowSlidePrev = true;
        swiper.allowSlideNext = true;
        var snapTranslate = -snapGrid[activeIndex];
        var diff = snapTranslate - swiper.getTranslate(); // Fix For Negative Oversliding

        if (activeIndex < loopedSlides) {
            newIndex = slides.length - loopedSlides * 3 + activeIndex;
            newIndex += loopedSlides;
            var slideChanged = swiper.slideTo(newIndex, 0, false, true);

            if (slideChanged && diff !== 0) {
                swiper.setTranslate((rtl ? -swiper.translate : swiper.translate) - diff);
            }
        } else if (activeIndex >= slides.length - loopedSlides) {
            // Fix For Positive Oversliding
            newIndex = -slides.length + activeIndex + loopedSlides;
            newIndex += loopedSlides;

            var _slideChanged = swiper.slideTo(newIndex, 0, false, true);

            if (_slideChanged && diff !== 0) {
                swiper.setTranslate((rtl ? -swiper.translate : swiper.translate) - diff);
            }
        }

        swiper.allowSlidePrev = allowSlidePrev;
        swiper.allowSlideNext = allowSlideNext;
        swiper.emit('loopFix');
    }

    function loopDestroy() {
        var swiper = this;
        var $wrapperEl = swiper.$wrapperEl,
            params = swiper.params,
            slides = swiper.slides;
        $wrapperEl.children("." + params.slideClass + "." + params.slideDuplicateClass + ",." + params.slideClass + "." + params.slideBlankClass).remove();
        slides.removeAttr('data-swiper-slide-index');
    }

    var loop = {
        loopCreate: loopCreate,
        loopFix: loopFix,
        loopDestroy: loopDestroy
    };

    function setGrabCursor(moving) {
        var swiper = this;
        if (swiper.support.touch || !swiper.params.simulateTouch || swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) return;
        var el = swiper.el;
        el.style.cursor = 'move';
        el.style.cursor = moving ? '-webkit-grabbing' : '-webkit-grab';
        el.style.cursor = moving ? '-moz-grabbin' : '-moz-grab';
        el.style.cursor = moving ? 'grabbing' : 'grab';
    }

    function unsetGrabCursor() {
        var swiper = this;

        if (swiper.support.touch || swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) {
            return;
        }

        swiper.el.style.cursor = '';
    }

    var grabCursor = {
        setGrabCursor: setGrabCursor,
        unsetGrabCursor: unsetGrabCursor
    };

    function appendSlide(slides) {
        var swiper = this;
        var $wrapperEl = swiper.$wrapperEl,
            params = swiper.params;

        if (params.loop) {
            swiper.loopDestroy();
        }

        if (typeof slides === 'object' && 'length' in slides) {
            for (var i = 0; i < slides.length; i += 1) {
                if (slides[i]) $wrapperEl.append(slides[i]);
            }
        } else {
            $wrapperEl.append(slides);
        }

        if (params.loop) {
            swiper.loopCreate();
        }

        if (!(params.observer && swiper.support.observer)) {
            swiper.update();
        }
    }

    function prependSlide(slides) {
        var swiper = this;
        var params = swiper.params,
            $wrapperEl = swiper.$wrapperEl,
            activeIndex = swiper.activeIndex;

        if (params.loop) {
            swiper.loopDestroy();
        }

        var newActiveIndex = activeIndex + 1;

        if (typeof slides === 'object' && 'length' in slides) {
            for (var i = 0; i < slides.length; i += 1) {
                if (slides[i]) $wrapperEl.prepend(slides[i]);
            }

            newActiveIndex = activeIndex + slides.length;
        } else {
            $wrapperEl.prepend(slides);
        }

        if (params.loop) {
            swiper.loopCreate();
        }

        if (!(params.observer && swiper.support.observer)) {
            swiper.update();
        }

        swiper.slideTo(newActiveIndex, 0, false);
    }

    function addSlide(index, slides) {
        var swiper = this;
        var $wrapperEl = swiper.$wrapperEl,
            params = swiper.params,
            activeIndex = swiper.activeIndex;
        var activeIndexBuffer = activeIndex;

        if (params.loop) {
            activeIndexBuffer -= swiper.loopedSlides;
            swiper.loopDestroy();
            swiper.slides = $wrapperEl.children("." + params.slideClass);
        }

        var baseLength = swiper.slides.length;

        if (index <= 0) {
            swiper.prependSlide(slides);
            return;
        }

        if (index >= baseLength) {
            swiper.appendSlide(slides);
            return;
        }

        var newActiveIndex = activeIndexBuffer > index ? activeIndexBuffer + 1 : activeIndexBuffer;
        var slidesBuffer = [];

        for (var i = baseLength - 1; i >= index; i -= 1) {
            var currentSlide = swiper.slides.eq(i);
            currentSlide.remove();
            slidesBuffer.unshift(currentSlide);
        }

        if (typeof slides === 'object' && 'length' in slides) {
            for (var _i = 0; _i < slides.length; _i += 1) {
                if (slides[_i]) $wrapperEl.append(slides[_i]);
            }

            newActiveIndex = activeIndexBuffer > index ? activeIndexBuffer + slides.length : activeIndexBuffer;
        } else {
            $wrapperEl.append(slides);
        }

        for (var _i2 = 0; _i2 < slidesBuffer.length; _i2 += 1) {
            $wrapperEl.append(slidesBuffer[_i2]);
        }

        if (params.loop) {
            swiper.loopCreate();
        }

        if (!(params.observer && swiper.support.observer)) {
            swiper.update();
        }

        if (params.loop) {
            swiper.slideTo(newActiveIndex + swiper.loopedSlides, 0, false);
        } else {
            swiper.slideTo(newActiveIndex, 0, false);
        }
    }

    function removeSlide(slidesIndexes) {
        var swiper = this;
        var params = swiper.params,
            $wrapperEl = swiper.$wrapperEl,
            activeIndex = swiper.activeIndex;
        var activeIndexBuffer = activeIndex;

        if (params.loop) {
            activeIndexBuffer -= swiper.loopedSlides;
            swiper.loopDestroy();
            swiper.slides = $wrapperEl.children("." + params.slideClass);
        }

        var newActiveIndex = activeIndexBuffer;
        var indexToRemove;

        if (typeof slidesIndexes === 'object' && 'length' in slidesIndexes) {
            for (var i = 0; i < slidesIndexes.length; i += 1) {
                indexToRemove = slidesIndexes[i];
                if (swiper.slides[indexToRemove]) swiper.slides.eq(indexToRemove).remove();
                if (indexToRemove < newActiveIndex) newActiveIndex -= 1;
            }

            newActiveIndex = Math.max(newActiveIndex, 0);
        } else {
            indexToRemove = slidesIndexes;
            if (swiper.slides[indexToRemove]) swiper.slides.eq(indexToRemove).remove();
            if (indexToRemove < newActiveIndex) newActiveIndex -= 1;
            newActiveIndex = Math.max(newActiveIndex, 0);
        }

        if (params.loop) {
            swiper.loopCreate();
        }

        if (!(params.observer && swiper.support.observer)) {
            swiper.update();
        }

        if (params.loop) {
            swiper.slideTo(newActiveIndex + swiper.loopedSlides, 0, false);
        } else {
            swiper.slideTo(newActiveIndex, 0, false);
        }
    }

    function removeAllSlides() {
        var swiper = this;
        var slidesIndexes = [];

        for (var i = 0; i < swiper.slides.length; i += 1) {
            slidesIndexes.push(i);
        }

        swiper.removeSlide(slidesIndexes);
    }

    var manipulation = {
        appendSlide: appendSlide,
        prependSlide: prependSlide,
        addSlide: addSlide,
        removeSlide: removeSlide,
        removeAllSlides: removeAllSlides
    };

    function onTouchStart(event) {
        var swiper = this;
        var document = getDocument();
        var window = getWindow();
        var data = swiper.touchEventsData;
        var params = swiper.params,
            touches = swiper.touches;

        if (swiper.animating && params.preventInteractionOnTransition) {
            return;
        }

        var e = event;
        if (e.originalEvent) e = e.originalEvent;
        var $targetEl = $(e.target);

        if (params.touchEventsTarget === 'wrapper') {
            if (!$targetEl.closest(swiper.wrapperEl).length) return;
        }

        data.isTouchEvent = e.type === 'touchstart';
        if (!data.isTouchEvent && 'which' in e && e.which === 3) return;
        if (!data.isTouchEvent && 'button' in e && e.button > 0) return;
        if (data.isTouched && data.isMoved) return; // change target el for shadow root componenet

        var swipingClassHasValue = !!params.noSwipingClass && params.noSwipingClass !== '';

        if (swipingClassHasValue && e.target && e.target.shadowRoot && event.path && event.path[0]) {
            $targetEl = $(event.path[0]);
        }

        if (params.noSwiping && $targetEl.closest(params.noSwipingSelector ? params.noSwipingSelector : "." + params.noSwipingClass)[0]) {
            swiper.allowClick = true;
            return;
        }

        if (params.swipeHandler) {
            if (!$targetEl.closest(params.swipeHandler)[0]) return;
        }

        touches.currentX = e.type === 'touchstart' ? e.targetTouches[0].pageX : e.pageX;
        touches.currentY = e.type === 'touchstart' ? e.targetTouches[0].pageY : e.pageY;
        var startX = touches.currentX;
        var startY = touches.currentY; // Do NOT start if iOS edge swipe is detected. Otherwise iOS app cannot swipe-to-go-back anymore

        var edgeSwipeDetection = params.edgeSwipeDetection || params.iOSEdgeSwipeDetection;
        var edgeSwipeThreshold = params.edgeSwipeThreshold || params.iOSEdgeSwipeThreshold;

        if (edgeSwipeDetection && (startX <= edgeSwipeThreshold || startX >= window.innerWidth - edgeSwipeThreshold)) {
            return;
        }

        extend$1(data, {
            isTouched: true,
            isMoved: false,
            allowTouchCallbacks: true,
            isScrolling: undefined,
            startMoving: undefined
        });
        touches.startX = startX;
        touches.startY = startY;
        data.touchStartTime = now();
        swiper.allowClick = true;
        swiper.updateSize();
        swiper.swipeDirection = undefined;
        if (params.threshold > 0) data.allowThresholdMove = false;

        if (e.type !== 'touchstart') {
            var preventDefault = true;
            if ($targetEl.is(data.formElements)) preventDefault = false;

            if (document.activeElement && $(document.activeElement).is(data.formElements) && document.activeElement !== $targetEl[0]) {
                document.activeElement.blur();
            }

            var shouldPreventDefault = preventDefault && swiper.allowTouchMove && params.touchStartPreventDefault;

            if ((params.touchStartForcePreventDefault || shouldPreventDefault) && !$targetEl[0].isContentEditable) {
                e.preventDefault();
            }
        }

        swiper.emit('touchStart', e);
    }

    function onTouchMove(event) {
        var document = getDocument();
        var swiper = this;
        var data = swiper.touchEventsData;
        var params = swiper.params,
            touches = swiper.touches,
            rtl = swiper.rtlTranslate;
        var e = event;
        if (e.originalEvent) e = e.originalEvent;

        if (!data.isTouched) {
            if (data.startMoving && data.isScrolling) {
                swiper.emit('touchMoveOpposite', e);
            }

            return;
        }

        if (data.isTouchEvent && e.type !== 'touchmove') return;
        var targetTouch = e.type === 'touchmove' && e.targetTouches && (e.targetTouches[0] || e.changedTouches[0]);
        var pageX = e.type === 'touchmove' ? targetTouch.pageX : e.pageX;
        var pageY = e.type === 'touchmove' ? targetTouch.pageY : e.pageY;

        if (e.preventedByNestedSwiper) {
            touches.startX = pageX;
            touches.startY = pageY;
            return;
        }

        if (!swiper.allowTouchMove) {
            // isMoved = true;
            swiper.allowClick = false;

            if (data.isTouched) {
                extend$1(touches, {
                    startX: pageX,
                    startY: pageY,
                    currentX: pageX,
                    currentY: pageY
                });
                data.touchStartTime = now();
            }

            return;
        }

        if (data.isTouchEvent && params.touchReleaseOnEdges && !params.loop) {
            if (swiper.isVertical()) {
                // Vertical
                if (pageY < touches.startY && swiper.translate <= swiper.maxTranslate() || pageY > touches.startY && swiper.translate >= swiper.minTranslate()) {
                    data.isTouched = false;
                    data.isMoved = false;
                    return;
                }
            } else if (pageX < touches.startX && swiper.translate <= swiper.maxTranslate() || pageX > touches.startX && swiper.translate >= swiper.minTranslate()) {
                return;
            }
        }

        if (data.isTouchEvent && document.activeElement) {
            if (e.target === document.activeElement && $(e.target).is(data.formElements)) {
                data.isMoved = true;
                swiper.allowClick = false;
                return;
            }
        }

        if (data.allowTouchCallbacks) {
            swiper.emit('touchMove', e);
        }

        if (e.targetTouches && e.targetTouches.length > 1) return;
        touches.currentX = pageX;
        touches.currentY = pageY;
        var diffX = touches.currentX - touches.startX;
        var diffY = touches.currentY - touches.startY;
        if (swiper.params.threshold && Math.sqrt(Math.pow(diffX, 2) + Math.pow(diffY, 2)) < swiper.params.threshold) return;

        if (typeof data.isScrolling === 'undefined') {
            var touchAngle;

            if (swiper.isHorizontal() && touches.currentY === touches.startY || swiper.isVertical() && touches.currentX === touches.startX) {
                data.isScrolling = false;
            } else {
                // eslint-disable-next-line
                if (diffX * diffX + diffY * diffY >= 25) {
                    touchAngle = Math.atan2(Math.abs(diffY), Math.abs(diffX)) * 180 / Math.PI;
                    data.isScrolling = swiper.isHorizontal() ? touchAngle > params.touchAngle : 90 - touchAngle > params.touchAngle;
                }
            }
        }

        if (data.isScrolling) {
            swiper.emit('touchMoveOpposite', e);
        }

        if (typeof data.startMoving === 'undefined') {
            if (touches.currentX !== touches.startX || touches.currentY !== touches.startY) {
                data.startMoving = true;
            }
        }

        if (data.isScrolling) {
            data.isTouched = false;
            return;
        }

        if (!data.startMoving) {
            return;
        }

        swiper.allowClick = false;

        if (!params.cssMode && e.cancelable) {
            e.preventDefault();
        }

        if (params.touchMoveStopPropagation && !params.nested) {
            e.stopPropagation();
        }

        if (!data.isMoved) {
            if (params.loop) {
                swiper.loopFix();
            }

            data.startTranslate = swiper.getTranslate();
            swiper.setTransition(0);

            if (swiper.animating) {
                swiper.$wrapperEl.trigger('webkitTransitionEnd transitionend');
            }

            data.allowMomentumBounce = false; // Grab Cursor

            if (params.grabCursor && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {
                swiper.setGrabCursor(true);
            }

            swiper.emit('sliderFirstMove', e);
        }

        swiper.emit('sliderMove', e);
        data.isMoved = true;
        var diff = swiper.isHorizontal() ? diffX : diffY;
        touches.diff = diff;
        diff *= params.touchRatio;
        if (rtl) diff = -diff;
        swiper.swipeDirection = diff > 0 ? 'prev' : 'next';
        data.currentTranslate = diff + data.startTranslate;
        var disableParentSwiper = true;
        var resistanceRatio = params.resistanceRatio;

        if (params.touchReleaseOnEdges) {
            resistanceRatio = 0;
        }

        if (diff > 0 && data.currentTranslate > swiper.minTranslate()) {
            disableParentSwiper = false;
            if (params.resistance) data.currentTranslate = swiper.minTranslate() - 1 + Math.pow(-swiper.minTranslate() + data.startTranslate + diff, resistanceRatio);
        } else if (diff < 0 && data.currentTranslate < swiper.maxTranslate()) {
            disableParentSwiper = false;
            if (params.resistance) data.currentTranslate = swiper.maxTranslate() + 1 - Math.pow(swiper.maxTranslate() - data.startTranslate - diff, resistanceRatio);
        }

        if (disableParentSwiper) {
            e.preventedByNestedSwiper = true;
        } // Directions locks


        if (!swiper.allowSlideNext && swiper.swipeDirection === 'next' && data.currentTranslate < data.startTranslate) {
            data.currentTranslate = data.startTranslate;
        }

        if (!swiper.allowSlidePrev && swiper.swipeDirection === 'prev' && data.currentTranslate > data.startTranslate) {
            data.currentTranslate = data.startTranslate;
        } // Threshold


        if (params.threshold > 0) {
            if (Math.abs(diff) > params.threshold || data.allowThresholdMove) {
                if (!data.allowThresholdMove) {
                    data.allowThresholdMove = true;
                    touches.startX = touches.currentX;
                    touches.startY = touches.currentY;
                    data.currentTranslate = data.startTranslate;
                    touches.diff = swiper.isHorizontal() ? touches.currentX - touches.startX : touches.currentY - touches.startY;
                    return;
                }
            } else {
                data.currentTranslate = data.startTranslate;
                return;
            }
        }

        if (!params.followFinger || params.cssMode) return; // Update active index in free mode

        if (params.freeMode || params.watchSlidesProgress || params.watchSlidesVisibility) {
            swiper.updateActiveIndex();
            swiper.updateSlidesClasses();
        }

        if (params.freeMode) {
            // Velocity
            if (data.velocities.length === 0) {
                data.velocities.push({
                    position: touches[swiper.isHorizontal() ? 'startX' : 'startY'],
                    time: data.touchStartTime
                });
            }

            data.velocities.push({
                position: touches[swiper.isHorizontal() ? 'currentX' : 'currentY'],
                time: now()
            });
        } // Update progress


        swiper.updateProgress(data.currentTranslate); // Update translate

        swiper.setTranslate(data.currentTranslate);
    }

    function onTouchEnd(event) {
        var swiper = this;
        var data = swiper.touchEventsData;
        var params = swiper.params,
            touches = swiper.touches,
            rtl = swiper.rtlTranslate,
            $wrapperEl = swiper.$wrapperEl,
            slidesGrid = swiper.slidesGrid,
            snapGrid = swiper.snapGrid;
        var e = event;
        if (e.originalEvent) e = e.originalEvent;

        if (data.allowTouchCallbacks) {
            swiper.emit('touchEnd', e);
        }

        data.allowTouchCallbacks = false;

        if (!data.isTouched) {
            if (data.isMoved && params.grabCursor) {
                swiper.setGrabCursor(false);
            }

            data.isMoved = false;
            data.startMoving = false;
            return;
        } // Return Grab Cursor


        if (params.grabCursor && data.isMoved && data.isTouched && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {
            swiper.setGrabCursor(false);
        } // Time diff


        var touchEndTime = now();
        var timeDiff = touchEndTime - data.touchStartTime; // Tap, doubleTap, Click

        if (swiper.allowClick) {
            swiper.updateClickedSlide(e);
            swiper.emit('tap click', e);

            if (timeDiff < 300 && touchEndTime - data.lastClickTime < 300) {
                swiper.emit('doubleTap doubleClick', e);
            }
        }

        data.lastClickTime = now();
        nextTick(function () {
            if (!swiper.destroyed) swiper.allowClick = true;
        });

        if (!data.isTouched || !data.isMoved || !swiper.swipeDirection || touches.diff === 0 || data.currentTranslate === data.startTranslate) {
            data.isTouched = false;
            data.isMoved = false;
            data.startMoving = false;
            return;
        }

        data.isTouched = false;
        data.isMoved = false;
        data.startMoving = false;
        var currentPos;

        if (params.followFinger) {
            currentPos = rtl ? swiper.translate : -swiper.translate;
        } else {
            currentPos = -data.currentTranslate;
        }

        if (params.cssMode) {
            return;
        }

        if (params.freeMode) {
            if (currentPos < -swiper.minTranslate()) {
                swiper.slideTo(swiper.activeIndex);
                return;
            }

            if (currentPos > -swiper.maxTranslate()) {
                if (swiper.slides.length < snapGrid.length) {
                    swiper.slideTo(snapGrid.length - 1);
                } else {
                    swiper.slideTo(swiper.slides.length - 1);
                }

                return;
            }

            if (params.freeModeMomentum) {
                if (data.velocities.length > 1) {
                    var lastMoveEvent = data.velocities.pop();
                    var velocityEvent = data.velocities.pop();
                    var distance = lastMoveEvent.position - velocityEvent.position;
                    var time = lastMoveEvent.time - velocityEvent.time;
                    swiper.velocity = distance / time;
                    swiper.velocity /= 2;

                    if (Math.abs(swiper.velocity) < params.freeModeMinimumVelocity) {
                        swiper.velocity = 0;
                    } // this implies that the user stopped moving a finger then released.
                    // There would be no events with distance zero, so the last event is stale.


                    if (time > 150 || now() - lastMoveEvent.time > 300) {
                        swiper.velocity = 0;
                    }
                } else {
                    swiper.velocity = 0;
                }

                swiper.velocity *= params.freeModeMomentumVelocityRatio;
                data.velocities.length = 0;
                var momentumDuration = 1000 * params.freeModeMomentumRatio;
                var momentumDistance = swiper.velocity * momentumDuration;
                var newPosition = swiper.translate + momentumDistance;
                if (rtl) newPosition = -newPosition;
                var doBounce = false;
                var afterBouncePosition;
                var bounceAmount = Math.abs(swiper.velocity) * 20 * params.freeModeMomentumBounceRatio;
                var needsLoopFix;

                if (newPosition < swiper.maxTranslate()) {
                    if (params.freeModeMomentumBounce) {
                        if (newPosition + swiper.maxTranslate() < -bounceAmount) {
                            newPosition = swiper.maxTranslate() - bounceAmount;
                        }

                        afterBouncePosition = swiper.maxTranslate();
                        doBounce = true;
                        data.allowMomentumBounce = true;
                    } else {
                        newPosition = swiper.maxTranslate();
                    }

                    if (params.loop && params.centeredSlides) needsLoopFix = true;
                } else if (newPosition > swiper.minTranslate()) {
                    if (params.freeModeMomentumBounce) {
                        if (newPosition - swiper.minTranslate() > bounceAmount) {
                            newPosition = swiper.minTranslate() + bounceAmount;
                        }

                        afterBouncePosition = swiper.minTranslate();
                        doBounce = true;
                        data.allowMomentumBounce = true;
                    } else {
                        newPosition = swiper.minTranslate();
                    }

                    if (params.loop && params.centeredSlides) needsLoopFix = true;
                } else if (params.freeModeSticky) {
                    var nextSlide;

                    for (var j = 0; j < snapGrid.length; j += 1) {
                        if (snapGrid[j] > -newPosition) {
                            nextSlide = j;
                            break;
                        }
                    }

                    if (Math.abs(snapGrid[nextSlide] - newPosition) < Math.abs(snapGrid[nextSlide - 1] - newPosition) || swiper.swipeDirection === 'next') {
                        newPosition = snapGrid[nextSlide];
                    } else {
                        newPosition = snapGrid[nextSlide - 1];
                    }

                    newPosition = -newPosition;
                }

                if (needsLoopFix) {
                    swiper.once('transitionEnd', function () {
                        swiper.loopFix();
                    });
                } // Fix duration


                if (swiper.velocity !== 0) {
                    if (rtl) {
                        momentumDuration = Math.abs((-newPosition - swiper.translate) / swiper.velocity);
                    } else {
                        momentumDuration = Math.abs((newPosition - swiper.translate) / swiper.velocity);
                    }

                    if (params.freeModeSticky) {
                        // If freeModeSticky is active and the user ends a swipe with a slow-velocity
                        // event, then durations can be 20+ seconds to slide one (or zero!) slides.
                        // It's easy to see this when simulating touch with mouse events. To fix this,
                        // limit single-slide swipes to the default slide duration. This also has the
                        // nice side effect of matching slide speed if the user stopped moving before
                        // lifting finger or mouse vs. moving slowly before lifting the finger/mouse.
                        // For faster swipes, also apply limits (albeit higher ones).
                        var moveDistance = Math.abs((rtl ? -newPosition : newPosition) - swiper.translate);
                        var currentSlideSize = swiper.slidesSizesGrid[swiper.activeIndex];

                        if (moveDistance < currentSlideSize) {
                            momentumDuration = params.speed;
                        } else if (moveDistance < 2 * currentSlideSize) {
                            momentumDuration = params.speed * 1.5;
                        } else {
                            momentumDuration = params.speed * 2.5;
                        }
                    }
                } else if (params.freeModeSticky) {
                    swiper.slideToClosest();
                    return;
                }

                if (params.freeModeMomentumBounce && doBounce) {
                    swiper.updateProgress(afterBouncePosition);
                    swiper.setTransition(momentumDuration);
                    swiper.setTranslate(newPosition);
                    swiper.transitionStart(true, swiper.swipeDirection);
                    swiper.animating = true;
                    $wrapperEl.transitionEnd(function () {
                        if (!swiper || swiper.destroyed || !data.allowMomentumBounce) return;
                        swiper.emit('momentumBounce');
                        swiper.setTransition(params.speed);
                        setTimeout(function () {
                            swiper.setTranslate(afterBouncePosition);
                            $wrapperEl.transitionEnd(function () {
                                if (!swiper || swiper.destroyed) return;
                                swiper.transitionEnd();
                            });
                        }, 0);
                    });
                } else if (swiper.velocity) {
                    swiper.updateProgress(newPosition);
                    swiper.setTransition(momentumDuration);
                    swiper.setTranslate(newPosition);
                    swiper.transitionStart(true, swiper.swipeDirection);

                    if (!swiper.animating) {
                        swiper.animating = true;
                        $wrapperEl.transitionEnd(function () {
                            if (!swiper || swiper.destroyed) return;
                            swiper.transitionEnd();
                        });
                    }
                } else {
                    swiper.updateProgress(newPosition);
                }

                swiper.updateActiveIndex();
                swiper.updateSlidesClasses();
            } else if (params.freeModeSticky) {
                swiper.slideToClosest();
                return;
            }

            if (!params.freeModeMomentum || timeDiff >= params.longSwipesMs) {
                swiper.updateProgress();
                swiper.updateActiveIndex();
                swiper.updateSlidesClasses();
            }

            return;
        } // Find current slide


        var stopIndex = 0;
        var groupSize = swiper.slidesSizesGrid[0];

        for (var i = 0; i < slidesGrid.length; i += i < params.slidesPerGroupSkip ? 1 : params.slidesPerGroup) {
            var _increment = i < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;

            if (typeof slidesGrid[i + _increment] !== 'undefined') {
                if (currentPos >= slidesGrid[i] && currentPos < slidesGrid[i + _increment]) {
                    stopIndex = i;
                    groupSize = slidesGrid[i + _increment] - slidesGrid[i];
                }
            } else if (currentPos >= slidesGrid[i]) {
                stopIndex = i;
                groupSize = slidesGrid[slidesGrid.length - 1] - slidesGrid[slidesGrid.length - 2];
            }
        } // Find current slide size


        var ratio = (currentPos - slidesGrid[stopIndex]) / groupSize;
        var increment = stopIndex < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;

        if (timeDiff > params.longSwipesMs) {
            // Long touches
            if (!params.longSwipes) {
                swiper.slideTo(swiper.activeIndex);
                return;
            }

            if (swiper.swipeDirection === 'next') {
                if (ratio >= params.longSwipesRatio) swiper.slideTo(stopIndex + increment); else swiper.slideTo(stopIndex);
            }

            if (swiper.swipeDirection === 'prev') {
                if (ratio > 1 - params.longSwipesRatio) swiper.slideTo(stopIndex + increment); else swiper.slideTo(stopIndex);
            }
        } else {
            // Short swipes
            if (!params.shortSwipes) {
                swiper.slideTo(swiper.activeIndex);
                return;
            }

            var isNavButtonTarget = swiper.navigation && (e.target === swiper.navigation.nextEl || e.target === swiper.navigation.prevEl);

            if (!isNavButtonTarget) {
                if (swiper.swipeDirection === 'next') {
                    swiper.slideTo(stopIndex + increment);
                }

                if (swiper.swipeDirection === 'prev') {
                    swiper.slideTo(stopIndex);
                }
            } else if (e.target === swiper.navigation.nextEl) {
                swiper.slideTo(stopIndex + increment);
            } else {
                swiper.slideTo(stopIndex);
            }
        }
    }

    function onResize() {
        var swiper = this;
        var params = swiper.params,
            el = swiper.el;
        if (el && el.offsetWidth === 0) return; // Breakpoints

        if (params.breakpoints) {
            swiper.setBreakpoint();
        } // Save locks


        var allowSlideNext = swiper.allowSlideNext,
            allowSlidePrev = swiper.allowSlidePrev,
            snapGrid = swiper.snapGrid; // Disable locks on resize

        swiper.allowSlideNext = true;
        swiper.allowSlidePrev = true;
        swiper.updateSize();
        swiper.updateSlides();
        swiper.updateSlidesClasses();

        if ((params.slidesPerView === 'auto' || params.slidesPerView > 1) && swiper.isEnd && !swiper.isBeginning && !swiper.params.centeredSlides) {
            swiper.slideTo(swiper.slides.length - 1, 0, false, true);
        } else {
            swiper.slideTo(swiper.activeIndex, 0, false, true);
        }

        if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) {
            swiper.autoplay.run();
        } // Return locks after resize


        swiper.allowSlidePrev = allowSlidePrev;
        swiper.allowSlideNext = allowSlideNext;

        if (swiper.params.watchOverflow && snapGrid !== swiper.snapGrid) {
            swiper.checkOverflow();
        }
    }

    function onClick(e) {
        var swiper = this;

        if (!swiper.allowClick) {
            if (swiper.params.preventClicks) e.preventDefault();

            if (swiper.params.preventClicksPropagation && swiper.animating) {
                e.stopPropagation();
                e.stopImmediatePropagation();
            }
        }
    }

    function onScroll() {
        var swiper = this;
        var wrapperEl = swiper.wrapperEl,
            rtlTranslate = swiper.rtlTranslate;
        swiper.previousTranslate = swiper.translate;

        if (swiper.isHorizontal()) {
            if (rtlTranslate) {
                swiper.translate = wrapperEl.scrollWidth - wrapperEl.offsetWidth - wrapperEl.scrollLeft;
            } else {
                swiper.translate = -wrapperEl.scrollLeft;
            }
        } else {
            swiper.translate = -wrapperEl.scrollTop;
        } // eslint-disable-next-line


        if (swiper.translate === -0) swiper.translate = 0;
        swiper.updateActiveIndex();
        swiper.updateSlidesClasses();
        var newProgress;
        var translatesDiff = swiper.maxTranslate() - swiper.minTranslate();

        if (translatesDiff === 0) {
            newProgress = 0;
        } else {
            newProgress = (swiper.translate - swiper.minTranslate()) / translatesDiff;
        }

        if (newProgress !== swiper.progress) {
            swiper.updateProgress(rtlTranslate ? -swiper.translate : swiper.translate);
        }

        swiper.emit('setTranslate', swiper.translate, false);
    }

    var dummyEventAttached = false;

    function dummyEventListener() { }

    function attachEvents() {
        var swiper = this;
        var document = getDocument();
        var params = swiper.params,
            touchEvents = swiper.touchEvents,
            el = swiper.el,
            wrapperEl = swiper.wrapperEl,
            device = swiper.device,
            support = swiper.support;
        swiper.onTouchStart = onTouchStart.bind(swiper);
        swiper.onTouchMove = onTouchMove.bind(swiper);
        swiper.onTouchEnd = onTouchEnd.bind(swiper);

        if (params.cssMode) {
            swiper.onScroll = onScroll.bind(swiper);
        }

        swiper.onClick = onClick.bind(swiper);
        var capture = !!params.nested; // Touch Events

        if (!support.touch && support.pointerEvents) {
            el.addEventListener(touchEvents.start, swiper.onTouchStart, false);
            document.addEventListener(touchEvents.move, swiper.onTouchMove, capture);
            document.addEventListener(touchEvents.end, swiper.onTouchEnd, false);
        } else {
            if (support.touch) {
                var passiveListener = touchEvents.start === 'touchstart' && support.passiveListener && params.passiveListeners ? {
                    passive: true,
                    capture: false
                } : false;
                el.addEventListener(touchEvents.start, swiper.onTouchStart, passiveListener);
                el.addEventListener(touchEvents.move, swiper.onTouchMove, support.passiveListener ? {
                    passive: false,
                    capture: capture
                } : capture);
                el.addEventListener(touchEvents.end, swiper.onTouchEnd, passiveListener);

                if (touchEvents.cancel) {
                    el.addEventListener(touchEvents.cancel, swiper.onTouchEnd, passiveListener);
                }

                if (!dummyEventAttached) {
                    document.addEventListener('touchstart', dummyEventListener);
                    dummyEventAttached = true;
                }
            }

            if (params.simulateTouch && !device.ios && !device.android || params.simulateTouch && !support.touch && device.ios) {
                el.addEventListener('mousedown', swiper.onTouchStart, false);
                document.addEventListener('mousemove', swiper.onTouchMove, capture);
                document.addEventListener('mouseup', swiper.onTouchEnd, false);
            }
        } // Prevent Links Clicks


        if (params.preventClicks || params.preventClicksPropagation) {
            el.addEventListener('click', swiper.onClick, true);
        }

        if (params.cssMode) {
            wrapperEl.addEventListener('scroll', swiper.onScroll);
        } // Resize handler


        if (params.updateOnWindowResize) {
            swiper.on(device.ios || device.android ? 'resize orientationchange observerUpdate' : 'resize observerUpdate', onResize, true);
        } else {
            swiper.on('observerUpdate', onResize, true);
        }
    }

    function detachEvents() {
        var swiper = this;
        var document = getDocument();
        var params = swiper.params,
            touchEvents = swiper.touchEvents,
            el = swiper.el,
            wrapperEl = swiper.wrapperEl,
            device = swiper.device,
            support = swiper.support;
        var capture = !!params.nested; // Touch Events

        if (!support.touch && support.pointerEvents) {
            el.removeEventListener(touchEvents.start, swiper.onTouchStart, false);
            document.removeEventListener(touchEvents.move, swiper.onTouchMove, capture);
            document.removeEventListener(touchEvents.end, swiper.onTouchEnd, false);
        } else {
            if (support.touch) {
                var passiveListener = touchEvents.start === 'onTouchStart' && support.passiveListener && params.passiveListeners ? {
                    passive: true,
                    capture: false
                } : false;
                el.removeEventListener(touchEvents.start, swiper.onTouchStart, passiveListener);
                el.removeEventListener(touchEvents.move, swiper.onTouchMove, capture);
                el.removeEventListener(touchEvents.end, swiper.onTouchEnd, passiveListener);

                if (touchEvents.cancel) {
                    el.removeEventListener(touchEvents.cancel, swiper.onTouchEnd, passiveListener);
                }
            }

            if (params.simulateTouch && !device.ios && !device.android || params.simulateTouch && !support.touch && device.ios) {
                el.removeEventListener('mousedown', swiper.onTouchStart, false);
                document.removeEventListener('mousemove', swiper.onTouchMove, capture);
                document.removeEventListener('mouseup', swiper.onTouchEnd, false);
            }
        } // Prevent Links Clicks


        if (params.preventClicks || params.preventClicksPropagation) {
            el.removeEventListener('click', swiper.onClick, true);
        }

        if (params.cssMode) {
            wrapperEl.removeEventListener('scroll', swiper.onScroll);
        } // Resize handler


        swiper.off(device.ios || device.android ? 'resize orientationchange observerUpdate' : 'resize observerUpdate', onResize);
    }

    var events = {
        attachEvents: attachEvents,
        detachEvents: detachEvents
    };

    function setBreakpoint() {
        var swiper = this;
        var activeIndex = swiper.activeIndex,
            initialized = swiper.initialized,
            _swiper$loopedSlides = swiper.loopedSlides,
            loopedSlides = _swiper$loopedSlides === void 0 ? 0 : _swiper$loopedSlides,
            params = swiper.params,
            $el = swiper.$el;
        var breakpoints = params.breakpoints;
        if (!breakpoints || breakpoints && Object.keys(breakpoints).length === 0) return; // Get breakpoint for window width and update parameters

        var breakpoint = swiper.getBreakpoint(breakpoints);

        if (breakpoint && swiper.currentBreakpoint !== breakpoint) {
            var breakpointOnlyParams = breakpoint in breakpoints ? breakpoints[breakpoint] : undefined;

            if (breakpointOnlyParams) {
                ['slidesPerView', 'spaceBetween', 'slidesPerGroup', 'slidesPerGroupSkip', 'slidesPerColumn'].forEach(function (param) {
                    var paramValue = breakpointOnlyParams[param];
                    if (typeof paramValue === 'undefined') return;

                    if (param === 'slidesPerView' && (paramValue === 'AUTO' || paramValue === 'auto')) {
                        breakpointOnlyParams[param] = 'auto';
                    } else if (param === 'slidesPerView') {
                        breakpointOnlyParams[param] = parseFloat(paramValue);
                    } else {
                        breakpointOnlyParams[param] = parseInt(paramValue, 10);
                    }
                });
            }

            var breakpointParams = breakpointOnlyParams || swiper.originalParams;
            var wasMultiRow = params.slidesPerColumn > 1;
            var isMultiRow = breakpointParams.slidesPerColumn > 1;

            if (wasMultiRow && !isMultiRow) {
                $el.removeClass(params.containerModifierClass + "multirow " + params.containerModifierClass + "multirow-column");
                swiper.emitContainerClasses();
            } else if (!wasMultiRow && isMultiRow) {
                $el.addClass(params.containerModifierClass + "multirow");

                if (breakpointParams.slidesPerColumnFill === 'column') {
                    $el.addClass(params.containerModifierClass + "multirow-column");
                }

                swiper.emitContainerClasses();
            }

            var directionChanged = breakpointParams.direction && breakpointParams.direction !== params.direction;
            var needsReLoop = params.loop && (breakpointParams.slidesPerView !== params.slidesPerView || directionChanged);

            if (directionChanged && initialized) {
                swiper.changeDirection();
            }

            extend$1(swiper.params, breakpointParams);
            extend$1(swiper, {
                allowTouchMove: swiper.params.allowTouchMove,
                allowSlideNext: swiper.params.allowSlideNext,
                allowSlidePrev: swiper.params.allowSlidePrev
            });
            swiper.currentBreakpoint = breakpoint;
            swiper.emit('_beforeBreakpoint', breakpointParams);

            if (needsReLoop && initialized) {
                swiper.loopDestroy();
                swiper.loopCreate();
                swiper.updateSlides();
                swiper.slideTo(activeIndex - loopedSlides + swiper.loopedSlides, 0, false);
            }

            swiper.emit('breakpoint', breakpointParams);
        }
    }

    function getBreakpoints(breakpoints) {
        var window = getWindow(); // Get breakpoint for window width

        if (!breakpoints) return undefined;
        var breakpoint = false;
        var points = Object.keys(breakpoints).map(function (point) {
            if (typeof point === 'string' && point.indexOf('@') === 0) {
                var minRatio = parseFloat(point.substr(1));
                var value = window.innerHeight * minRatio;
                return {
                    value: value,
                    point: point
                };
            }

            return {
                value: point,
                point: point
            };
        });
        points.sort(function (a, b) {
            return parseInt(a.value, 10) - parseInt(b.value, 10);
        });

        for (var i = 0; i < points.length; i += 1) {
            var _points$i = points[i],
                point = _points$i.point,
                value = _points$i.value;

            if (value <= window.innerWidth) {
                breakpoint = point;
            }
        }

        return breakpoint || 'max';
    }

    var breakpoints = {
        setBreakpoint: setBreakpoint,
        getBreakpoint: getBreakpoints
    };

    function addClasses() {
        var swiper = this;
        var classNames = swiper.classNames,
            params = swiper.params,
            rtl = swiper.rtl,
            $el = swiper.$el,
            device = swiper.device;
        var suffixes = [];
        suffixes.push('initialized');
        suffixes.push(params.direction);

        if (params.freeMode) {
            suffixes.push('free-mode');
        }

        if (params.autoHeight) {
            suffixes.push('autoheight');
        }

        if (rtl) {
            suffixes.push('rtl');
        }

        if (params.slidesPerColumn > 1) {
            suffixes.push('multirow');

            if (params.slidesPerColumnFill === 'column') {
                suffixes.push('multirow-column');
            }
        }

        if (device.android) {
            suffixes.push('android');
        }

        if (device.ios) {
            suffixes.push('ios');
        }

        if (params.cssMode) {
            suffixes.push('css-mode');
        }

        suffixes.forEach(function (suffix) {
            classNames.push(params.containerModifierClass + suffix);
        });
        $el.addClass(classNames.join(' '));
        swiper.emitContainerClasses();
    }

    function removeClasses() {
        var swiper = this;
        var $el = swiper.$el,
            classNames = swiper.classNames;
        $el.removeClass(classNames.join(' '));
        swiper.emitContainerClasses();
    }

    var classes = {
        addClasses: addClasses,
        removeClasses: removeClasses
    };

    function loadImage(imageEl, src, srcset, sizes, checkForComplete, callback) {
        var window = getWindow();
        var image;

        function onReady() {
            if (callback) callback();
        }

        var isPicture = $(imageEl).parent('picture')[0];

        if (!isPicture && (!imageEl.complete || !checkForComplete)) {
            if (src) {
                image = new window.Image();
                image.onload = onReady;
                image.onerror = onReady;

                if (sizes) {
                    image.sizes = sizes;
                }

                if (srcset) {
                    image.srcset = srcset;
                }

                if (src) {
                    image.src = src;
                }
            } else {
                onReady();
            }
        } else {
            // image already loaded...
            onReady();
        }
    }

    function preloadImages() {
        var swiper = this;
        swiper.imagesToLoad = swiper.$el.find('img');

        function onReady() {
            if (typeof swiper === 'undefined' || swiper === null || !swiper || swiper.destroyed) return;
            if (swiper.imagesLoaded !== undefined) swiper.imagesLoaded += 1;

            if (swiper.imagesLoaded === swiper.imagesToLoad.length) {
                if (swiper.params.updateOnImagesReady) swiper.update();
                swiper.emit('imagesReady');
            }
        }

        for (var i = 0; i < swiper.imagesToLoad.length; i += 1) {
            var imageEl = swiper.imagesToLoad[i];
            swiper.loadImage(imageEl, imageEl.currentSrc || imageEl.getAttribute('src'), imageEl.srcset || imageEl.getAttribute('srcset'), imageEl.sizes || imageEl.getAttribute('sizes'), true, onReady);
        }
    }

    var images = {
        loadImage: loadImage,
        preloadImages: preloadImages
    };

    function checkOverflow() {
        var swiper = this;
        var params = swiper.params;
        var wasLocked = swiper.isLocked;
        var lastSlidePosition = swiper.slides.length > 0 && params.slidesOffsetBefore + params.spaceBetween * (swiper.slides.length - 1) + swiper.slides[0].offsetWidth * swiper.slides.length;

        if (params.slidesOffsetBefore && params.slidesOffsetAfter && lastSlidePosition) {
            swiper.isLocked = lastSlidePosition <= swiper.size;
        } else {
            swiper.isLocked = swiper.snapGrid.length === 1;
        }

        swiper.allowSlideNext = !swiper.isLocked;
        swiper.allowSlidePrev = !swiper.isLocked; // events

        if (wasLocked !== swiper.isLocked) swiper.emit(swiper.isLocked ? 'lock' : 'unlock');

        if (wasLocked && wasLocked !== swiper.isLocked) {
            swiper.isEnd = false;
            if (swiper.navigation) swiper.navigation.update();
        }
    }

    var checkOverflow$1 = {
        checkOverflow: checkOverflow
    };

    var defaults = {
        init: true,
        direction: 'horizontal',
        touchEventsTarget: 'container',
        initialSlide: 0,
        speed: 300,
        cssMode: false,
        updateOnWindowResize: true,
        nested: false,
        // Overrides
        width: null,
        height: null,
        //
        preventInteractionOnTransition: false,
        // ssr
        userAgent: null,
        url: null,
        // To support iOS's swipe-to-go-back gesture (when being used in-app).
        edgeSwipeDetection: false,
        edgeSwipeThreshold: 20,
        // Free mode
        freeMode: false,
        freeModeMomentum: true,
        freeModeMomentumRatio: 1,
        freeModeMomentumBounce: true,
        freeModeMomentumBounceRatio: 1,
        freeModeMomentumVelocityRatio: 1,
        freeModeSticky: false,
        freeModeMinimumVelocity: 0.02,
        // Autoheight
        autoHeight: false,
        // Set wrapper width
        setWrapperSize: false,
        // Virtual Translate
        virtualTranslate: false,
        // Effects
        effect: 'slide',
        // 'slide' or 'fade' or 'cube' or 'coverflow' or 'flip'
        // Breakpoints
        breakpoints: undefined,
        // Slides grid
        spaceBetween: 0,
        slidesPerView: 1,
        slidesPerColumn: 1,
        slidesPerColumnFill: 'column',
        slidesPerGroup: 1,
        slidesPerGroupSkip: 0,
        centeredSlides: false,
        centeredSlidesBounds: false,
        slidesOffsetBefore: 0,
        // in px
        slidesOffsetAfter: 0,
        // in px
        normalizeSlideIndex: true,
        centerInsufficientSlides: false,
        // Disable swiper and hide navigation when container not overflow
        watchOverflow: false,
        // Round length
        roundLengths: false,
        // Touches
        touchRatio: 1,
        touchAngle: 45,
        simulateTouch: true,
        shortSwipes: true,
        longSwipes: true,
        longSwipesRatio: 0.5,
        longSwipesMs: 300,
        followFinger: true,
        allowTouchMove: true,
        threshold: 0,
        touchMoveStopPropagation: false,
        touchStartPreventDefault: true,
        touchStartForcePreventDefault: false,
        touchReleaseOnEdges: false,
        // Unique Navigation Elements
        uniqueNavElements: true,
        // Resistance
        resistance: true,
        resistanceRatio: 0.85,
        // Progress
        watchSlidesProgress: false,
        watchSlidesVisibility: false,
        // Cursor
        grabCursor: false,
        // Clicks
        preventClicks: true,
        preventClicksPropagation: true,
        slideToClickedSlide: false,
        // Images
        preloadImages: true,
        updateOnImagesReady: true,
        // loop
        loop: false,
        loopAdditionalSlides: 0,
        loopedSlides: null,
        loopFillGroupWithBlank: false,
        loopPreventsSlide: true,
        // Swiping/no swiping
        allowSlidePrev: true,
        allowSlideNext: true,
        swipeHandler: null,
        // '.swipe-handler',
        noSwiping: true,
        noSwipingClass: 'swiper-no-swiping',
        noSwipingSelector: null,
        // Passive Listeners
        passiveListeners: true,
        // NS
        containerModifierClass: 'swiper-container-',
        // NEW
        slideClass: 'swiper-slide',
        slideBlankClass: 'swiper-slide-invisible-blank',
        slideActiveClass: 'swiper-slide-active',
        slideDuplicateActiveClass: 'swiper-slide-duplicate-active',
        slideVisibleClass: 'swiper-slide-visible',
        slideDuplicateClass: 'swiper-slide-duplicate',
        slideNextClass: 'swiper-slide-next',
        slideDuplicateNextClass: 'swiper-slide-duplicate-next',
        slidePrevClass: 'swiper-slide-prev',
        slideDuplicatePrevClass: 'swiper-slide-duplicate-prev',
        wrapperClass: 'swiper-wrapper',
        // Callbacks
        runCallbacksOnInit: true,
        // Internals
        _emitClasses: false
    };

    var prototypes = {
        modular: modular,
        eventsEmitter: eventsEmitter,
        update: update,
        translate: translate,
        transition: transition$1,
        slide: slide,
        loop: loop,
        grabCursor: grabCursor,
        manipulation: manipulation,
        events: events,
        breakpoints: breakpoints,
        checkOverflow: checkOverflow$1,
        classes: classes,
        images: images
    };
    var extendedDefaults = {};

    var Swiper = /*#__PURE__*/function () {
        function Swiper() {
            var el;
            var params;

            for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
            }

            if (args.length === 1 && args[0].constructor && args[0].constructor === Object) {
                params = args[0];
            } else {
                el = args[0];
                params = args[1];
            }

            if (!params) params = {};
            params = extend$1({}, params);
            if (el && !params.el) params.el = el; // Swiper Instance

            var swiper = this;
            swiper.support = getSupport();
            swiper.device = getDevice({
                userAgent: params.userAgent
            });
            swiper.browser = getBrowser();
            swiper.eventsListeners = {};
            swiper.eventsAnyListeners = [];

            if (typeof swiper.modules === 'undefined') {
                swiper.modules = {};
            }

            Object.keys(swiper.modules).forEach(function (moduleName) {
                var module = swiper.modules[moduleName];

                if (module.params) {
                    var moduleParamName = Object.keys(module.params)[0];
                    var moduleParams = module.params[moduleParamName];
                    if (typeof moduleParams !== 'object' || moduleParams === null) return;
                    if (!(moduleParamName in params && 'enabled' in moduleParams)) return;

                    if (params[moduleParamName] === true) {
                        params[moduleParamName] = {
                            enabled: true
                        };
                    }

                    if (typeof params[moduleParamName] === 'object' && !('enabled' in params[moduleParamName])) {
                        params[moduleParamName].enabled = true;
                    }

                    if (!params[moduleParamName]) params[moduleParamName] = {
                        enabled: false
                    };
                }
            }); // Extend defaults with modules params

            var swiperParams = extend$1({}, defaults);
            swiper.useParams(swiperParams); // Extend defaults with passed params

            swiper.params = extend$1({}, swiperParams, extendedDefaults, params);
            swiper.originalParams = extend$1({}, swiper.params);
            swiper.passedParams = extend$1({}, params); // add event listeners

            if (swiper.params && swiper.params.on) {
                Object.keys(swiper.params.on).forEach(function (eventName) {
                    swiper.on(eventName, swiper.params.on[eventName]);
                });
            }

            if (swiper.params && swiper.params.onAny) {
                swiper.onAny(swiper.params.onAny);
            } // Save Dom lib


            swiper.$ = $; // Find el

            var $el = $(swiper.params.el);
            el = $el[0];

            if (!el) {
                return undefined;
            }

            if ($el.length > 1) {
                var swipers = [];
                $el.each(function (containerEl) {
                    var newParams = extend$1({}, params, {
                        el: containerEl
                    });
                    swipers.push(new Swiper(newParams));
                });
                return swipers;
            }

            el.swiper = swiper; // Find Wrapper

            var $wrapperEl;

            if (el && el.shadowRoot && el.shadowRoot.querySelector) {
                $wrapperEl = $(el.shadowRoot.querySelector("." + swiper.params.wrapperClass)); // Children needs to return slot items

                $wrapperEl.children = function (options) {
                    return $el.children(options);
                };
            } else {
                $wrapperEl = $el.children("." + swiper.params.wrapperClass);
            } // Extend Swiper


            extend$1(swiper, {
                $el: $el,
                el: el,
                $wrapperEl: $wrapperEl,
                wrapperEl: $wrapperEl[0],
                // Classes
                classNames: [],
                // Slides
                slides: $(),
                slidesGrid: [],
                snapGrid: [],
                slidesSizesGrid: [],
                // isDirection
                isHorizontal: function isHorizontal() {
                    return swiper.params.direction === 'horizontal';
                },
                isVertical: function isVertical() {
                    return swiper.params.direction === 'vertical';
                },
                // RTL
                rtl: el.dir.toLowerCase() === 'rtl' || $el.css('direction') === 'rtl',
                rtlTranslate: swiper.params.direction === 'horizontal' && (el.dir.toLowerCase() === 'rtl' || $el.css('direction') === 'rtl'),
                wrongRTL: $wrapperEl.css('display') === '-webkit-box',
                // Indexes
                activeIndex: 0,
                realIndex: 0,
                //
                isBeginning: true,
                isEnd: false,
                // Props
                translate: 0,
                previousTranslate: 0,
                progress: 0,
                velocity: 0,
                animating: false,
                // Locks
                allowSlideNext: swiper.params.allowSlideNext,
                allowSlidePrev: swiper.params.allowSlidePrev,
                // Touch Events
                touchEvents: function touchEvents() {
                    var touch = ['touchstart', 'touchmove', 'touchend', 'touchcancel'];
                    var desktop = ['mousedown', 'mousemove', 'mouseup'];

                    if (swiper.support.pointerEvents) {
                        desktop = ['pointerdown', 'pointermove', 'pointerup'];
                    }

                    swiper.touchEventsTouch = {
                        start: touch[0],
                        move: touch[1],
                        end: touch[2],
                        cancel: touch[3]
                    };
                    swiper.touchEventsDesktop = {
                        start: desktop[0],
                        move: desktop[1],
                        end: desktop[2]
                    };
                    return swiper.support.touch || !swiper.params.simulateTouch ? swiper.touchEventsTouch : swiper.touchEventsDesktop;
                }(),
                touchEventsData: {
                    isTouched: undefined,
                    isMoved: undefined,
                    allowTouchCallbacks: undefined,
                    touchStartTime: undefined,
                    isScrolling: undefined,
                    currentTranslate: undefined,
                    startTranslate: undefined,
                    allowThresholdMove: undefined,
                    // Form elements to match
                    formElements: 'input, select, option, textarea, button, video, label',
                    // Last click time
                    lastClickTime: now(),
                    clickTimeout: undefined,
                    // Velocities
                    velocities: [],
                    allowMomentumBounce: undefined,
                    isTouchEvent: undefined,
                    startMoving: undefined
                },
                // Clicks
                allowClick: true,
                // Touches
                allowTouchMove: swiper.params.allowTouchMove,
                touches: {
                    startX: 0,
                    startY: 0,
                    currentX: 0,
                    currentY: 0,
                    diff: 0
                },
                // Images
                imagesToLoad: [],
                imagesLoaded: 0
            }); // Install Modules

            swiper.useModules();
            swiper.emit('_swiper'); // Init

            if (swiper.params.init) {
                swiper.init();
            } // Return app instance


            return swiper;
        }

        var _proto = Swiper.prototype;

        _proto.emitContainerClasses = function emitContainerClasses() {
            var swiper = this;
            if (!swiper.params._emitClasses || !swiper.el) return;
            var classes = swiper.el.className.split(' ').filter(function (className) {
                return className.indexOf('swiper-container') === 0 || className.indexOf(swiper.params.containerModifierClass) === 0;
            });
            swiper.emit('_containerClasses', classes.join(' '));
        };

        _proto.getSlideClasses = function getSlideClasses(slideEl) {
            var swiper = this;
            return slideEl.className.split(' ').filter(function (className) {
                return className.indexOf('swiper-slide') === 0 || className.indexOf(swiper.params.slideClass) === 0;
            }).join(' ');
        };

        _proto.emitSlidesClasses = function emitSlidesClasses() {
            var swiper = this;
            if (!swiper.params._emitClasses || !swiper.el) return;
            swiper.slides.each(function (slideEl) {
                var classNames = swiper.getSlideClasses(slideEl);
                swiper.emit('_slideClass', slideEl, classNames);
            });
        };

        _proto.slidesPerViewDynamic = function slidesPerViewDynamic() {
            var swiper = this;
            var params = swiper.params,
                slides = swiper.slides,
                slidesGrid = swiper.slidesGrid,
                swiperSize = swiper.size,
                activeIndex = swiper.activeIndex;
            var spv = 1;

            if (params.centeredSlides) {
                var slideSize = slides[activeIndex].swiperSlideSize;
                var breakLoop;

                for (var i = activeIndex + 1; i < slides.length; i += 1) {
                    if (slides[i] && !breakLoop) {
                        slideSize += slides[i].swiperSlideSize;
                        spv += 1;
                        if (slideSize > swiperSize) breakLoop = true;
                    }
                }

                for (var _i = activeIndex - 1; _i >= 0; _i -= 1) {
                    if (slides[_i] && !breakLoop) {
                        slideSize += slides[_i].swiperSlideSize;
                        spv += 1;
                        if (slideSize > swiperSize) breakLoop = true;
                    }
                }
            } else {
                for (var _i2 = activeIndex + 1; _i2 < slides.length; _i2 += 1) {
                    if (slidesGrid[_i2] - slidesGrid[activeIndex] < swiperSize) {
                        spv += 1;
                    }
                }
            }

            return spv;
        };

        _proto.update = function update() {
            var swiper = this;
            if (!swiper || swiper.destroyed) return;
            var snapGrid = swiper.snapGrid,
                params = swiper.params; // Breakpoints

            if (params.breakpoints) {
                swiper.setBreakpoint();
            }

            swiper.updateSize();
            swiper.updateSlides();
            swiper.updateProgress();
            swiper.updateSlidesClasses();

            function setTranslate() {
                var translateValue = swiper.rtlTranslate ? swiper.translate * -1 : swiper.translate;
                var newTranslate = Math.min(Math.max(translateValue, swiper.maxTranslate()), swiper.minTranslate());
                swiper.setTranslate(newTranslate);
                swiper.updateActiveIndex();
                swiper.updateSlidesClasses();
            }

            var translated;

            if (swiper.params.freeMode) {
                setTranslate();

                if (swiper.params.autoHeight) {
                    swiper.updateAutoHeight();
                }
            } else {
                if ((swiper.params.slidesPerView === 'auto' || swiper.params.slidesPerView > 1) && swiper.isEnd && !swiper.params.centeredSlides) {
                    translated = swiper.slideTo(swiper.slides.length - 1, 0, false, true);
                } else {
                    translated = swiper.slideTo(swiper.activeIndex, 0, false, true);
                }

                if (!translated) {
                    setTranslate();
                }
            }

            if (params.watchOverflow && snapGrid !== swiper.snapGrid) {
                swiper.checkOverflow();
            }

            swiper.emit('update');
        };

        _proto.changeDirection = function changeDirection(newDirection, needUpdate) {
            if (needUpdate === void 0) {
                needUpdate = true;
            }

            var swiper = this;
            var currentDirection = swiper.params.direction;

            if (!newDirection) {
                // eslint-disable-next-line
                newDirection = currentDirection === 'horizontal' ? 'vertical' : 'horizontal';
            }

            if (newDirection === currentDirection || newDirection !== 'horizontal' && newDirection !== 'vertical') {
                return swiper;
            }

            swiper.$el.removeClass("" + swiper.params.containerModifierClass + currentDirection).addClass("" + swiper.params.containerModifierClass + newDirection);
            swiper.emitContainerClasses();
            swiper.params.direction = newDirection;
            swiper.slides.each(function (slideEl) {
                if (newDirection === 'vertical') {
                    slideEl.style.width = '';
                } else {
                    slideEl.style.height = '';
                }
            });
            swiper.emit('changeDirection');
            if (needUpdate) swiper.update();
            return swiper;
        };

        _proto.init = function init() {
            var swiper = this;
            if (swiper.initialized) return;
            swiper.emit('beforeInit'); // Set breakpoint

            if (swiper.params.breakpoints) {
                swiper.setBreakpoint();
            } // Add Classes


            swiper.addClasses(); // Create loop

            if (swiper.params.loop) {
                swiper.loopCreate();
            } // Update size


            swiper.updateSize(); // Update slides

            swiper.updateSlides();

            if (swiper.params.watchOverflow) {
                swiper.checkOverflow();
            } // Set Grab Cursor


            if (swiper.params.grabCursor) {
                swiper.setGrabCursor();
            }

            if (swiper.params.preloadImages) {
                swiper.preloadImages();
            } // Slide To Initial Slide


            if (swiper.params.loop) {
                swiper.slideTo(swiper.params.initialSlide + swiper.loopedSlides, 0, swiper.params.runCallbacksOnInit);
            } else {
                swiper.slideTo(swiper.params.initialSlide, 0, swiper.params.runCallbacksOnInit);
            } // Attach events


            swiper.attachEvents(); // Init Flag

            swiper.initialized = true; // Emit

            swiper.emit('init');
            swiper.emit('afterInit');
        };

        _proto.destroy = function destroy(deleteInstance, cleanStyles) {
            if (deleteInstance === void 0) {
                deleteInstance = true;
            }

            if (cleanStyles === void 0) {
                cleanStyles = true;
            }

            var swiper = this;
            var params = swiper.params,
                $el = swiper.$el,
                $wrapperEl = swiper.$wrapperEl,
                slides = swiper.slides;

            if (typeof swiper.params === 'undefined' || swiper.destroyed) {
                return null;
            }

            swiper.emit('beforeDestroy'); // Init Flag

            swiper.initialized = false; // Detach events

            swiper.detachEvents(); // Destroy loop

            if (params.loop) {
                swiper.loopDestroy();
            } // Cleanup styles


            if (cleanStyles) {
                swiper.removeClasses();
                $el.removeAttr('style');
                $wrapperEl.removeAttr('style');

                if (slides && slides.length) {
                    slides.removeClass([params.slideVisibleClass, params.slideActiveClass, params.slideNextClass, params.slidePrevClass].join(' ')).removeAttr('style').removeAttr('data-swiper-slide-index');
                }
            }

            swiper.emit('destroy'); // Detach emitter events

            Object.keys(swiper.eventsListeners).forEach(function (eventName) {
                swiper.off(eventName);
            });

            if (deleteInstance !== false) {
                swiper.$el[0].swiper = null;
                deleteProps(swiper);
            }

            swiper.destroyed = true;
            return null;
        };

        Swiper.extendDefaults = function extendDefaults(newDefaults) {
            extend$1(extendedDefaults, newDefaults);
        };

        Swiper.installModule = function installModule(module) {
            if (!Swiper.prototype.modules) Swiper.prototype.modules = {};
            var name = module.name || Object.keys(Swiper.prototype.modules).length + "_" + now();
            Swiper.prototype.modules[name] = module;
        };

        Swiper.use = function use(module) {
            if (Array.isArray(module)) {
                module.forEach(function (m) {
                    return Swiper.installModule(m);
                });
                return Swiper;
            }

            Swiper.installModule(module);
            return Swiper;
        };

        _createClass(Swiper, null, [{
            key: "extendedDefaults",
            get: function get() {
                return extendedDefaults;
            }
        }, {
            key: "defaults",
            get: function get() {
                return defaults;
            }
        }]);

        return Swiper;
    }();

    Object.keys(prototypes).forEach(function (prototypeGroup) {
        Object.keys(prototypes[prototypeGroup]).forEach(function (protoMethod) {
            Swiper.prototype[protoMethod] = prototypes[prototypeGroup][protoMethod];
        });
    });
    Swiper.use([Resize, Observer$1]);

    var Virtual = {
        update: function update(force) {
            var swiper = this;
            var _swiper$params = swiper.params,
                slidesPerView = _swiper$params.slidesPerView,
                slidesPerGroup = _swiper$params.slidesPerGroup,
                centeredSlides = _swiper$params.centeredSlides;
            var _swiper$params$virtua = swiper.params.virtual,
                addSlidesBefore = _swiper$params$virtua.addSlidesBefore,
                addSlidesAfter = _swiper$params$virtua.addSlidesAfter;
            var _swiper$virtual = swiper.virtual,
                previousFrom = _swiper$virtual.from,
                previousTo = _swiper$virtual.to,
                slides = _swiper$virtual.slides,
                previousSlidesGrid = _swiper$virtual.slidesGrid,
                renderSlide = _swiper$virtual.renderSlide,
                previousOffset = _swiper$virtual.offset;
            swiper.updateActiveIndex();
            var activeIndex = swiper.activeIndex || 0;
            var offsetProp;
            if (swiper.rtlTranslate) offsetProp = 'right'; else offsetProp = swiper.isHorizontal() ? 'left' : 'top';
            var slidesAfter;
            var slidesBefore;

            if (centeredSlides) {
                slidesAfter = Math.floor(slidesPerView / 2) + slidesPerGroup + addSlidesAfter;
                slidesBefore = Math.floor(slidesPerView / 2) + slidesPerGroup + addSlidesBefore;
            } else {
                slidesAfter = slidesPerView + (slidesPerGroup - 1) + addSlidesAfter;
                slidesBefore = slidesPerGroup + addSlidesBefore;
            }

            var from = Math.max((activeIndex || 0) - slidesBefore, 0);
            var to = Math.min((activeIndex || 0) + slidesAfter, slides.length - 1);
            var offset = (swiper.slidesGrid[from] || 0) - (swiper.slidesGrid[0] || 0);
            extend$1(swiper.virtual, {
                from: from,
                to: to,
                offset: offset,
                slidesGrid: swiper.slidesGrid
            });

            function onRendered() {
                swiper.updateSlides();
                swiper.updateProgress();
                swiper.updateSlidesClasses();

                if (swiper.lazy && swiper.params.lazy.enabled) {
                    swiper.lazy.load();
                }
            }

            if (previousFrom === from && previousTo === to && !force) {
                if (swiper.slidesGrid !== previousSlidesGrid && offset !== previousOffset) {
                    swiper.slides.css(offsetProp, offset + "px");
                }

                swiper.updateProgress();
                return;
            }

            if (swiper.params.virtual.renderExternal) {
                swiper.params.virtual.renderExternal.call(swiper, {
                    offset: offset,
                    from: from,
                    to: to,
                    slides: function getSlides() {
                        var slidesToRender = [];

                        for (var i = from; i <= to; i += 1) {
                            slidesToRender.push(slides[i]);
                        }

                        return slidesToRender;
                    }()
                });

                if (swiper.params.virtual.renderExternalUpdate) {
                    onRendered();
                }

                return;
            }

            var prependIndexes = [];
            var appendIndexes = [];

            if (force) {
                swiper.$wrapperEl.find("." + swiper.params.slideClass).remove();
            } else {
                for (var i = previousFrom; i <= previousTo; i += 1) {
                    if (i < from || i > to) {
                        swiper.$wrapperEl.find("." + swiper.params.slideClass + "[data-swiper-slide-index=\"" + i + "\"]").remove();
                    }
                }
            }

            for (var _i = 0; _i < slides.length; _i += 1) {
                if (_i >= from && _i <= to) {
                    if (typeof previousTo === 'undefined' || force) {
                        appendIndexes.push(_i);
                    } else {
                        if (_i > previousTo) appendIndexes.push(_i);
                        if (_i < previousFrom) prependIndexes.push(_i);
                    }
                }
            }

            appendIndexes.forEach(function (index) {
                swiper.$wrapperEl.append(renderSlide(slides[index], index));
            });
            prependIndexes.sort(function (a, b) {
                return b - a;
            }).forEach(function (index) {
                swiper.$wrapperEl.prepend(renderSlide(slides[index], index));
            });
            swiper.$wrapperEl.children('.swiper-slide').css(offsetProp, offset + "px");
            onRendered();
        },
        renderSlide: function renderSlide(slide, index) {
            var swiper = this;
            var params = swiper.params.virtual;

            if (params.cache && swiper.virtual.cache[index]) {
                return swiper.virtual.cache[index];
            }

            var $slideEl = params.renderSlide ? $(params.renderSlide.call(swiper, slide, index)) : $("<div class=\"" + swiper.params.slideClass + "\" data-swiper-slide-index=\"" + index + "\">" + slide + "</div>");
            if (!$slideEl.attr('data-swiper-slide-index')) $slideEl.attr('data-swiper-slide-index', index);
            if (params.cache) swiper.virtual.cache[index] = $slideEl;
            return $slideEl;
        },
        appendSlide: function appendSlide(slides) {
            var swiper = this;

            if (typeof slides === 'object' && 'length' in slides) {
                for (var i = 0; i < slides.length; i += 1) {
                    if (slides[i]) swiper.virtual.slides.push(slides[i]);
                }
            } else {
                swiper.virtual.slides.push(slides);
            }

            swiper.virtual.update(true);
        },
        prependSlide: function prependSlide(slides) {
            var swiper = this;
            var activeIndex = swiper.activeIndex;
            var newActiveIndex = activeIndex + 1;
            var numberOfNewSlides = 1;

            if (Array.isArray(slides)) {
                for (var i = 0; i < slides.length; i += 1) {
                    if (slides[i]) swiper.virtual.slides.unshift(slides[i]);
                }

                newActiveIndex = activeIndex + slides.length;
                numberOfNewSlides = slides.length;
            } else {
                swiper.virtual.slides.unshift(slides);
            }

            if (swiper.params.virtual.cache) {
                var cache = swiper.virtual.cache;
                var newCache = {};
                Object.keys(cache).forEach(function (cachedIndex) {
                    var $cachedEl = cache[cachedIndex];
                    var cachedElIndex = $cachedEl.attr('data-swiper-slide-index');

                    if (cachedElIndex) {
                        $cachedEl.attr('data-swiper-slide-index', parseInt(cachedElIndex, 10) + 1);
                    }

                    newCache[parseInt(cachedIndex, 10) + numberOfNewSlides] = $cachedEl;
                });
                swiper.virtual.cache = newCache;
            }

            swiper.virtual.update(true);
            swiper.slideTo(newActiveIndex, 0);
        },
        removeSlide: function removeSlide(slidesIndexes) {
            var swiper = this;
            if (typeof slidesIndexes === 'undefined' || slidesIndexes === null) return;
            var activeIndex = swiper.activeIndex;

            if (Array.isArray(slidesIndexes)) {
                for (var i = slidesIndexes.length - 1; i >= 0; i -= 1) {
                    swiper.virtual.slides.splice(slidesIndexes[i], 1);

                    if (swiper.params.virtual.cache) {
                        delete swiper.virtual.cache[slidesIndexes[i]];
                    }

                    if (slidesIndexes[i] < activeIndex) activeIndex -= 1;
                    activeIndex = Math.max(activeIndex, 0);
                }
            } else {
                swiper.virtual.slides.splice(slidesIndexes, 1);

                if (swiper.params.virtual.cache) {
                    delete swiper.virtual.cache[slidesIndexes];
                }

                if (slidesIndexes < activeIndex) activeIndex -= 1;
                activeIndex = Math.max(activeIndex, 0);
            }

            swiper.virtual.update(true);
            swiper.slideTo(activeIndex, 0);
        },
        removeAllSlides: function removeAllSlides() {
            var swiper = this;
            swiper.virtual.slides = [];

            if (swiper.params.virtual.cache) {
                swiper.virtual.cache = {};
            }

            swiper.virtual.update(true);
            swiper.slideTo(0, 0);
        }
    };
    var Virtual$1 = {
        name: 'virtual',
        params: {
            virtual: {
                enabled: false,
                slides: [],
                cache: true,
                renderSlide: null,
                renderExternal: null,
                renderExternalUpdate: true,
                addSlidesBefore: 0,
                addSlidesAfter: 0
            }
        },
        create: function create() {
            var swiper = this;
            bindModuleMethods(swiper, {
                virtual: _extends(_extends({}, Virtual), {}, {
                    slides: swiper.params.virtual.slides,
                    cache: {}
                })
            });
        },
        on: {
            beforeInit: function beforeInit(swiper) {
                if (!swiper.params.virtual.enabled) return;
                swiper.classNames.push(swiper.params.containerModifierClass + "virtual");
                var overwriteParams = {
                    watchSlidesProgress: true
                };
                extend$1(swiper.params, overwriteParams);
                extend$1(swiper.originalParams, overwriteParams);

                if (!swiper.params.initialSlide) {
                    swiper.virtual.update();
                }
            },
            setTranslate: function setTranslate(swiper) {
                if (!swiper.params.virtual.enabled) return;
                swiper.virtual.update();
            }
        }
    };

    var Keyboard = {
        handle: function handle(event) {
            var swiper = this;
            var window = getWindow();
            var document = getDocument();
            var rtl = swiper.rtlTranslate;
            var e = event;
            if (e.originalEvent) e = e.originalEvent; // jquery fix

            var kc = e.keyCode || e.charCode;
            var pageUpDown = swiper.params.keyboard.pageUpDown;
            var isPageUp = pageUpDown && kc === 33;
            var isPageDown = pageUpDown && kc === 34;
            var isArrowLeft = kc === 37;
            var isArrowRight = kc === 39;
            var isArrowUp = kc === 38;
            var isArrowDown = kc === 40; // Directions locks

            if (!swiper.allowSlideNext && (swiper.isHorizontal() && isArrowRight || swiper.isVertical() && isArrowDown || isPageDown)) {
                return false;
            }

            if (!swiper.allowSlidePrev && (swiper.isHorizontal() && isArrowLeft || swiper.isVertical() && isArrowUp || isPageUp)) {
                return false;
            }

            if (e.shiftKey || e.altKey || e.ctrlKey || e.metaKey) {
                return undefined;
            }

            if (document.activeElement && document.activeElement.nodeName && (document.activeElement.nodeName.toLowerCase() === 'input' || document.activeElement.nodeName.toLowerCase() === 'textarea')) {
                return undefined;
            }

            if (swiper.params.keyboard.onlyInViewport && (isPageUp || isPageDown || isArrowLeft || isArrowRight || isArrowUp || isArrowDown)) {
                var inView = false; // Check that swiper should be inside of visible area of window

                if (swiper.$el.parents("." + swiper.params.slideClass).length > 0 && swiper.$el.parents("." + swiper.params.slideActiveClass).length === 0) {
                    return undefined;
                }

                var windowWidth = window.innerWidth;
                var windowHeight = window.innerHeight;
                var swiperOffset = swiper.$el.offset();
                if (rtl) swiperOffset.left -= swiper.$el[0].scrollLeft;
                var swiperCoord = [[swiperOffset.left, swiperOffset.top], [swiperOffset.left + swiper.width, swiperOffset.top], [swiperOffset.left, swiperOffset.top + swiper.height], [swiperOffset.left + swiper.width, swiperOffset.top + swiper.height]];

                for (var i = 0; i < swiperCoord.length; i += 1) {
                    var point = swiperCoord[i];

                    if (point[0] >= 0 && point[0] <= windowWidth && point[1] >= 0 && point[1] <= windowHeight) {
                        if (point[0] === 0 && point[1] === 0) continue; // eslint-disable-line

                        inView = true;
                    }
                }

                if (!inView) return undefined;
            }

            if (swiper.isHorizontal()) {
                if (isPageUp || isPageDown || isArrowLeft || isArrowRight) {
                    if (e.preventDefault) e.preventDefault(); else e.returnValue = false;
                }

                if ((isPageDown || isArrowRight) && !rtl || (isPageUp || isArrowLeft) && rtl) swiper.slideNext();
                if ((isPageUp || isArrowLeft) && !rtl || (isPageDown || isArrowRight) && rtl) swiper.slidePrev();
            } else {
                if (isPageUp || isPageDown || isArrowUp || isArrowDown) {
                    if (e.preventDefault) e.preventDefault(); else e.returnValue = false;
                }

                if (isPageDown || isArrowDown) swiper.slideNext();
                if (isPageUp || isArrowUp) swiper.slidePrev();
            }

            swiper.emit('keyPress', kc);
            return undefined;
        },
        enable: function enable() {
            var swiper = this;
            var document = getDocument();
            if (swiper.keyboard.enabled) return;
            $(document).on('keydown', swiper.keyboard.handle);
            swiper.keyboard.enabled = true;
        },
        disable: function disable() {
            var swiper = this;
            var document = getDocument();
            if (!swiper.keyboard.enabled) return;
            $(document).off('keydown', swiper.keyboard.handle);
            swiper.keyboard.enabled = false;
        }
    };
    var Keyboard$1 = {
        name: 'keyboard',
        params: {
            keyboard: {
                enabled: false,
                onlyInViewport: true,
                pageUpDown: true
            }
        },
        create: function create() {
            var swiper = this;
            bindModuleMethods(swiper, {
                keyboard: _extends({
                    enabled: false
                }, Keyboard)
            });
        },
        on: {
            init: function init(swiper) {
                if (swiper.params.keyboard.enabled) {
                    swiper.keyboard.enable();
                }
            },
            destroy: function destroy(swiper) {
                if (swiper.keyboard.enabled) {
                    swiper.keyboard.disable();
                }
            }
        }
    };

    function isEventSupported() {
        var document = getDocument();
        var eventName = 'onwheel';
        var isSupported = (eventName in document);

        if (!isSupported) {
            var element = document.createElement('div');
            element.setAttribute(eventName, 'return;');
            isSupported = typeof element[eventName] === 'function';
        }

        if (!isSupported && document.implementation && document.implementation.hasFeature && // always returns true in newer browsers as per the standard.
            // @see http://dom.spec.whatwg.org/#dom-domimplementation-hasfeature
            document.implementation.hasFeature('', '') !== true) {
            // This is the only way to test support for the `wheel` event in IE9+.
            isSupported = document.implementation.hasFeature('Events.wheel', '3.0');
        }

        return isSupported;
    }

    var Mousewheel = {
        lastScrollTime: now(),
        lastEventBeforeSnap: undefined,
        recentWheelEvents: [],
        event: function event() {
            var window = getWindow();
            if (window.navigator.userAgent.indexOf('firefox') > -1) return 'DOMMouseScroll';
            return isEventSupported() ? 'wheel' : 'mousewheel';
        },
        normalize: function normalize(e) {
            // Reasonable defaults
            var PIXEL_STEP = 10;
            var LINE_HEIGHT = 40;
            var PAGE_HEIGHT = 800;
            var sX = 0;
            var sY = 0; // spinX, spinY

            var pX = 0;
            var pY = 0; // pixelX, pixelY
            // Legacy

            if ('detail' in e) {
                sY = e.detail;
            }

            if ('wheelDelta' in e) {
                sY = -e.wheelDelta / 120;
            }

            if ('wheelDeltaY' in e) {
                sY = -e.wheelDeltaY / 120;
            }

            if ('wheelDeltaX' in e) {
                sX = -e.wheelDeltaX / 120;
            } // side scrolling on FF with DOMMouseScroll


            if ('axis' in e && e.axis === e.HORIZONTAL_AXIS) {
                sX = sY;
                sY = 0;
            }

            pX = sX * PIXEL_STEP;
            pY = sY * PIXEL_STEP;

            if ('deltaY' in e) {
                pY = e.deltaY;
            }

            if ('deltaX' in e) {
                pX = e.deltaX;
            }

            if (e.shiftKey && !pX) {
                // if user scrolls with shift he wants horizontal scroll
                pX = pY;
                pY = 0;
            }

            if ((pX || pY) && e.deltaMode) {
                if (e.deltaMode === 1) {
                    // delta in LINE units
                    pX *= LINE_HEIGHT;
                    pY *= LINE_HEIGHT;
                } else {
                    // delta in PAGE units
                    pX *= PAGE_HEIGHT;
                    pY *= PAGE_HEIGHT;
                }
            } // Fall-back if spin cannot be determined


            if (pX && !sX) {
                sX = pX < 1 ? -1 : 1;
            }

            if (pY && !sY) {
                sY = pY < 1 ? -1 : 1;
            }

            return {
                spinX: sX,
                spinY: sY,
                pixelX: pX,
                pixelY: pY
            };
        },
        handleMouseEnter: function handleMouseEnter() {
            var swiper = this;
            swiper.mouseEntered = true;
        },
        handleMouseLeave: function handleMouseLeave() {
            var swiper = this;
            swiper.mouseEntered = false;
        },
        handle: function handle(event) {
            var e = event;
            var disableParentSwiper = true;
            var swiper = this;
            var params = swiper.params.mousewheel;

            if (swiper.params.cssMode) {
                e.preventDefault();
            }

            var target = swiper.$el;

            if (swiper.params.mousewheel.eventsTarget !== 'container') {
                target = $(swiper.params.mousewheel.eventsTarget);
            }

            if (!swiper.mouseEntered && !target[0].contains(e.target) && !params.releaseOnEdges) return true;
            if (e.originalEvent) e = e.originalEvent; // jquery fix

            var delta = 0;
            var rtlFactor = swiper.rtlTranslate ? -1 : 1;
            var data = Mousewheel.normalize(e);

            if (params.forceToAxis) {
                if (swiper.isHorizontal()) {
                    if (Math.abs(data.pixelX) > Math.abs(data.pixelY)) delta = -data.pixelX * rtlFactor; else return true;
                } else if (Math.abs(data.pixelY) > Math.abs(data.pixelX)) delta = -data.pixelY; else return true;
            } else {
                delta = Math.abs(data.pixelX) > Math.abs(data.pixelY) ? -data.pixelX * rtlFactor : -data.pixelY;
            }

            if (delta === 0) return true;
            if (params.invert) delta = -delta; // Get the scroll positions

            var positions = swiper.getTranslate() + delta * params.sensitivity;
            if (positions >= swiper.minTranslate()) positions = swiper.minTranslate();
            if (positions <= swiper.maxTranslate()) positions = swiper.maxTranslate(); // When loop is true:
            //     the disableParentSwiper will be true.
            // When loop is false:
            //     if the scroll positions is not on edge,
            //     then the disableParentSwiper will be true.
            //     if the scroll on edge positions,
            //     then the disableParentSwiper will be false.

            disableParentSwiper = swiper.params.loop ? true : !(positions === swiper.minTranslate() || positions === swiper.maxTranslate());
            if (disableParentSwiper && swiper.params.nested) e.stopPropagation();

            if (!swiper.params.freeMode) {
                // Register the new event in a variable which stores the relevant data
                var newEvent = {
                    time: now(),
                    delta: Math.abs(delta),
                    direction: Math.sign(delta),
                    raw: event
                }; // Keep the most recent events

                var recentWheelEvents = swiper.mousewheel.recentWheelEvents;

                if (recentWheelEvents.length >= 2) {
                    recentWheelEvents.shift(); // only store the last N events
                }

                var prevEvent = recentWheelEvents.length ? recentWheelEvents[recentWheelEvents.length - 1] : undefined;
                recentWheelEvents.push(newEvent); // If there is at least one previous recorded event:
                //   If direction has changed or
                //   if the scroll is quicker than the previous one:
                //     Animate the slider.
                // Else (this is the first time the wheel is moved):
                //     Animate the slider.

                if (prevEvent) {
                    if (newEvent.direction !== prevEvent.direction || newEvent.delta > prevEvent.delta || newEvent.time > prevEvent.time + 150) {
                        swiper.mousewheel.animateSlider(newEvent);
                    }
                } else {
                    swiper.mousewheel.animateSlider(newEvent);
                } // If it's time to release the scroll:
                //   Return now so you don't hit the preventDefault.


                if (swiper.mousewheel.releaseScroll(newEvent)) {
                    return true;
                }
            } else {
                // Freemode or scrollContainer:
                // If we recently snapped after a momentum scroll, then ignore wheel events
                // to give time for the deceleration to finish. Stop ignoring after 500 msecs
                // or if it's a new scroll (larger delta or inverse sign as last event before
                // an end-of-momentum snap).
                var _newEvent = {
                    time: now(),
                    delta: Math.abs(delta),
                    direction: Math.sign(delta)
                };
                var lastEventBeforeSnap = swiper.mousewheel.lastEventBeforeSnap;
                var ignoreWheelEvents = lastEventBeforeSnap && _newEvent.time < lastEventBeforeSnap.time + 500 && _newEvent.delta <= lastEventBeforeSnap.delta && _newEvent.direction === lastEventBeforeSnap.direction;

                if (!ignoreWheelEvents) {
                    swiper.mousewheel.lastEventBeforeSnap = undefined;

                    if (swiper.params.loop) {
                        swiper.loopFix();
                    }

                    var position = swiper.getTranslate() + delta * params.sensitivity;
                    var wasBeginning = swiper.isBeginning;
                    var wasEnd = swiper.isEnd;
                    if (position >= swiper.minTranslate()) position = swiper.minTranslate();
                    if (position <= swiper.maxTranslate()) position = swiper.maxTranslate();
                    swiper.setTransition(0);
                    swiper.setTranslate(position);
                    swiper.updateProgress();
                    swiper.updateActiveIndex();
                    swiper.updateSlidesClasses();

                    if (!wasBeginning && swiper.isBeginning || !wasEnd && swiper.isEnd) {
                        swiper.updateSlidesClasses();
                    }

                    if (swiper.params.freeModeSticky) {
                        // When wheel scrolling starts with sticky (aka snap) enabled, then detect
                        // the end of a momentum scroll by storing recent (N=15?) wheel events.
                        // 1. do all N events have decreasing or same (absolute value) delta?
                        // 2. did all N events arrive in the last M (M=500?) msecs?
                        // 3. does the earliest event have an (absolute value) delta that's
                        //    at least P (P=1?) larger than the most recent event's delta?
                        // 4. does the latest event have a delta that's smaller than Q (Q=6?) pixels?
                        // If 1-4 are "yes" then we're near the end of a momentum scroll deceleration.
                        // Snap immediately and ignore remaining wheel events in this scroll.
                        // See comment above for "remaining wheel events in this scroll" determination.
                        // If 1-4 aren't satisfied, then wait to snap until 500ms after the last event.
                        clearTimeout(swiper.mousewheel.timeout);
                        swiper.mousewheel.timeout = undefined;
                        var _recentWheelEvents = swiper.mousewheel.recentWheelEvents;

                        if (_recentWheelEvents.length >= 15) {
                            _recentWheelEvents.shift(); // only store the last N events

                        }

                        var _prevEvent = _recentWheelEvents.length ? _recentWheelEvents[_recentWheelEvents.length - 1] : undefined;

                        var firstEvent = _recentWheelEvents[0];

                        _recentWheelEvents.push(_newEvent);

                        if (_prevEvent && (_newEvent.delta > _prevEvent.delta || _newEvent.direction !== _prevEvent.direction)) {
                            // Increasing or reverse-sign delta means the user started scrolling again. Clear the wheel event log.
                            _recentWheelEvents.splice(0);
                        } else if (_recentWheelEvents.length >= 15 && _newEvent.time - firstEvent.time < 500 && firstEvent.delta - _newEvent.delta >= 1 && _newEvent.delta <= 6) {
                            // We're at the end of the deceleration of a momentum scroll, so there's no need
                            // to wait for more events. Snap ASAP on the next tick.
                            // Also, because there's some remaining momentum we'll bias the snap in the
                            // direction of the ongoing scroll because it's better UX for the scroll to snap
                            // in the same direction as the scroll instead of reversing to snap.  Therefore,
                            // if it's already scrolled more than 20% in the current direction, keep going.
                            var snapToThreshold = delta > 0 ? 0.8 : 0.2;
                            swiper.mousewheel.lastEventBeforeSnap = _newEvent;

                            _recentWheelEvents.splice(0);

                            swiper.mousewheel.timeout = nextTick(function () {
                                swiper.slideToClosest(swiper.params.speed, true, undefined, snapToThreshold);
                            }, 0); // no delay; move on next tick
                        }

                        if (!swiper.mousewheel.timeout) {
                            // if we get here, then we haven't detected the end of a momentum scroll, so
                            // we'll consider a scroll "complete" when there haven't been any wheel events
                            // for 500ms.
                            swiper.mousewheel.timeout = nextTick(function () {
                                var snapToThreshold = 0.5;
                                swiper.mousewheel.lastEventBeforeSnap = _newEvent;

                                _recentWheelEvents.splice(0);

                                swiper.slideToClosest(swiper.params.speed, true, undefined, snapToThreshold);
                            }, 500);
                        }
                    } // Emit event


                    if (!ignoreWheelEvents) swiper.emit('scroll', e); // Stop autoplay

                    if (swiper.params.autoplay && swiper.params.autoplayDisableOnInteraction) swiper.autoplay.stop(); // Return page scroll on edge positions

                    if (position === swiper.minTranslate() || position === swiper.maxTranslate()) return true;
                }
            }

            if (e.preventDefault) e.preventDefault(); else e.returnValue = false;
            return false;
        },
        animateSlider: function animateSlider(newEvent) {
            var swiper = this;
            var window = getWindow();

            if (this.params.mousewheel.thresholdDelta && newEvent.delta < this.params.mousewheel.thresholdDelta) {
                // Prevent if delta of wheel scroll delta is below configured threshold
                return false;
            }

            if (this.params.mousewheel.thresholdTime && now() - swiper.mousewheel.lastScrollTime < this.params.mousewheel.thresholdTime) {
                // Prevent if time between scrolls is below configured threshold
                return false;
            } // If the movement is NOT big enough and
            // if the last time the user scrolled was too close to the current one (avoid continuously triggering the slider):
            //   Don't go any further (avoid insignificant scroll movement).


            if (newEvent.delta >= 6 && now() - swiper.mousewheel.lastScrollTime < 60) {
                // Return false as a default
                return true;
            } // If user is scrolling towards the end:
            //   If the slider hasn't hit the latest slide or
            //   if the slider is a loop and
            //   if the slider isn't moving right now:
            //     Go to next slide and
            //     emit a scroll event.
            // Else (the user is scrolling towards the beginning) and
            // if the slider hasn't hit the first slide or
            // if the slider is a loop and
            // if the slider isn't moving right now:
            //   Go to prev slide and
            //   emit a scroll event.


            if (newEvent.direction < 0) {
                if ((!swiper.isEnd || swiper.params.loop) && !swiper.animating) {
                    swiper.slideNext();
                    swiper.emit('scroll', newEvent.raw);
                }
            } else if ((!swiper.isBeginning || swiper.params.loop) && !swiper.animating) {
                swiper.slidePrev();
                swiper.emit('scroll', newEvent.raw);
            } // If you got here is because an animation has been triggered so store the current time


            swiper.mousewheel.lastScrollTime = new window.Date().getTime(); // Return false as a default

            return false;
        },
        releaseScroll: function releaseScroll(newEvent) {
            var swiper = this;
            var params = swiper.params.mousewheel;

            if (newEvent.direction < 0) {
                if (swiper.isEnd && !swiper.params.loop && params.releaseOnEdges) {
                    // Return true to animate scroll on edges
                    return true;
                }
            } else if (swiper.isBeginning && !swiper.params.loop && params.releaseOnEdges) {
                // Return true to animate scroll on edges
                return true;
            }

            return false;
        },
        enable: function enable() {
            var swiper = this;
            var event = Mousewheel.event();

            if (swiper.params.cssMode) {
                swiper.wrapperEl.removeEventListener(event, swiper.mousewheel.handle);
                return true;
            }

            if (!event) return false;
            if (swiper.mousewheel.enabled) return false;
            var target = swiper.$el;

            if (swiper.params.mousewheel.eventsTarget !== 'container') {
                target = $(swiper.params.mousewheel.eventsTarget);
            }

            target.on('mouseenter', swiper.mousewheel.handleMouseEnter);
            target.on('mouseleave', swiper.mousewheel.handleMouseLeave);
            target.on(event, swiper.mousewheel.handle);
            swiper.mousewheel.enabled = true;
            return true;
        },
        disable: function disable() {
            var swiper = this;
            var event = Mousewheel.event();

            if (swiper.params.cssMode) {
                swiper.wrapperEl.addEventListener(event, swiper.mousewheel.handle);
                return true;
            }

            if (!event) return false;
            if (!swiper.mousewheel.enabled) return false;
            var target = swiper.$el;

            if (swiper.params.mousewheel.eventsTarget !== 'container') {
                target = $(swiper.params.mousewheel.eventsTarget);
            }

            target.off(event, swiper.mousewheel.handle);
            swiper.mousewheel.enabled = false;
            return true;
        }
    };
    var Mousewheel$1 = {
        name: 'mousewheel',
        params: {
            mousewheel: {
                enabled: false,
                releaseOnEdges: false,
                invert: false,
                forceToAxis: false,
                sensitivity: 1,
                eventsTarget: 'container',
                thresholdDelta: null,
                thresholdTime: null
            }
        },
        create: function create() {
            var swiper = this;
            bindModuleMethods(swiper, {
                mousewheel: {
                    enabled: false,
                    lastScrollTime: now(),
                    lastEventBeforeSnap: undefined,
                    recentWheelEvents: [],
                    enable: Mousewheel.enable,
                    disable: Mousewheel.disable,
                    handle: Mousewheel.handle,
                    handleMouseEnter: Mousewheel.handleMouseEnter,
                    handleMouseLeave: Mousewheel.handleMouseLeave,
                    animateSlider: Mousewheel.animateSlider,
                    releaseScroll: Mousewheel.releaseScroll
                }
            });
        },
        on: {
            init: function init(swiper) {
                if (!swiper.params.mousewheel.enabled && swiper.params.cssMode) {
                    swiper.mousewheel.disable();
                }

                if (swiper.params.mousewheel.enabled) swiper.mousewheel.enable();
            },
            destroy: function destroy(swiper) {
                if (swiper.params.cssMode) {
                    swiper.mousewheel.enable();
                }

                if (swiper.mousewheel.enabled) swiper.mousewheel.disable();
            }
        }
    };

    var Navigation = {
        update: function update() {
            // Update Navigation Buttons
            var swiper = this;
            var params = swiper.params.navigation;
            if (swiper.params.loop) return;
            var _swiper$navigation = swiper.navigation,
                $nextEl = _swiper$navigation.$nextEl,
                $prevEl = _swiper$navigation.$prevEl;

            if ($prevEl && $prevEl.length > 0) {
                if (swiper.isBeginning) {
                    $prevEl.addClass(params.disabledClass);
                } else {
                    $prevEl.removeClass(params.disabledClass);
                }

                $prevEl[swiper.params.watchOverflow && swiper.isLocked ? 'addClass' : 'removeClass'](params.lockClass);
            }

            if ($nextEl && $nextEl.length > 0) {
                if (swiper.isEnd) {
                    $nextEl.addClass(params.disabledClass);
                } else {
                    $nextEl.removeClass(params.disabledClass);
                }

                $nextEl[swiper.params.watchOverflow && swiper.isLocked ? 'addClass' : 'removeClass'](params.lockClass);
            }
        },
        onPrevClick: function onPrevClick(e) {
            var swiper = this;
            e.preventDefault();
            if (swiper.isBeginning && !swiper.params.loop) return;
            swiper.slidePrev();
        },
        onNextClick: function onNextClick(e) {
            var swiper = this;
            e.preventDefault();
            if (swiper.isEnd && !swiper.params.loop) return;
            swiper.slideNext();
        },
        init: function init() {
            var swiper = this;
            var params = swiper.params.navigation;
            if (!(params.nextEl || params.prevEl)) return;
            var $nextEl;
            var $prevEl;

            if (params.nextEl) {
                $nextEl = $(params.nextEl);

                if (swiper.params.uniqueNavElements && typeof params.nextEl === 'string' && $nextEl.length > 1 && swiper.$el.find(params.nextEl).length === 1) {
                    $nextEl = swiper.$el.find(params.nextEl);
                }
            }

            if (params.prevEl) {
                $prevEl = $(params.prevEl);

                if (swiper.params.uniqueNavElements && typeof params.prevEl === 'string' && $prevEl.length > 1 && swiper.$el.find(params.prevEl).length === 1) {
                    $prevEl = swiper.$el.find(params.prevEl);
                }
            }

            if ($nextEl && $nextEl.length > 0) {
                $nextEl.on('click', swiper.navigation.onNextClick);
            }

            if ($prevEl && $prevEl.length > 0) {
                $prevEl.on('click', swiper.navigation.onPrevClick);
            }

            extend$1(swiper.navigation, {
                $nextEl: $nextEl,
                nextEl: $nextEl && $nextEl[0],
                $prevEl: $prevEl,
                prevEl: $prevEl && $prevEl[0]
            });
        },
        destroy: function destroy() {
            var swiper = this;
            var _swiper$navigation2 = swiper.navigation,
                $nextEl = _swiper$navigation2.$nextEl,
                $prevEl = _swiper$navigation2.$prevEl;

            if ($nextEl && $nextEl.length) {
                $nextEl.off('click', swiper.navigation.onNextClick);
                $nextEl.removeClass(swiper.params.navigation.disabledClass);
            }

            if ($prevEl && $prevEl.length) {
                $prevEl.off('click', swiper.navigation.onPrevClick);
                $prevEl.removeClass(swiper.params.navigation.disabledClass);
            }
        }
    };
    var Navigation$1 = {
        name: 'navigation',
        params: {
            navigation: {
                nextEl: null,
                prevEl: null,
                hideOnClick: false,
                disabledClass: 'swiper-button-disabled',
                hiddenClass: 'swiper-button-hidden',
                lockClass: 'swiper-button-lock'
            }
        },
        create: function create() {
            var swiper = this;
            bindModuleMethods(swiper, {
                navigation: _extends({}, Navigation)
            });
        },
        on: {
            init: function init(swiper) {
                swiper.navigation.init();
                swiper.navigation.update();
            },
            toEdge: function toEdge(swiper) {
                swiper.navigation.update();
            },
            fromEdge: function fromEdge(swiper) {
                swiper.navigation.update();
            },
            destroy: function destroy(swiper) {
                swiper.navigation.destroy();
            },
            click: function click(swiper, e) {
                var _swiper$navigation3 = swiper.navigation,
                    $nextEl = _swiper$navigation3.$nextEl,
                    $prevEl = _swiper$navigation3.$prevEl;

                if (swiper.params.navigation.hideOnClick && !$(e.target).is($prevEl) && !$(e.target).is($nextEl)) {
                    var isHidden;

                    if ($nextEl) {
                        isHidden = $nextEl.hasClass(swiper.params.navigation.hiddenClass);
                    } else if ($prevEl) {
                        isHidden = $prevEl.hasClass(swiper.params.navigation.hiddenClass);
                    }

                    if (isHidden === true) {
                        swiper.emit('navigationShow');
                    } else {
                        swiper.emit('navigationHide');
                    }

                    if ($nextEl) {
                        $nextEl.toggleClass(swiper.params.navigation.hiddenClass);
                    }

                    if ($prevEl) {
                        $prevEl.toggleClass(swiper.params.navigation.hiddenClass);
                    }
                }
            }
        }
    };

    var Pagination = {
        update: function update() {
            // Render || Update Pagination bullets/items
            var swiper = this;
            var rtl = swiper.rtl;
            var params = swiper.params.pagination;
            if (!params.el || !swiper.pagination.el || !swiper.pagination.$el || swiper.pagination.$el.length === 0) return;
            var slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;
            var $el = swiper.pagination.$el; // Current/Total

            var current;
            var total = swiper.params.loop ? Math.ceil((slidesLength - swiper.loopedSlides * 2) / swiper.params.slidesPerGroup) : swiper.snapGrid.length;

            if (swiper.params.loop) {
                current = Math.ceil((swiper.activeIndex - swiper.loopedSlides) / swiper.params.slidesPerGroup);

                if (current > slidesLength - 1 - swiper.loopedSlides * 2) {
                    current -= slidesLength - swiper.loopedSlides * 2;
                }

                if (current > total - 1) current -= total;
                if (current < 0 && swiper.params.paginationType !== 'bullets') current = total + current;
            } else if (typeof swiper.snapIndex !== 'undefined') {
                current = swiper.snapIndex;
            } else {
                current = swiper.activeIndex || 0;
            } // Types


            if (params.type === 'bullets' && swiper.pagination.bullets && swiper.pagination.bullets.length > 0) {
                var bullets = swiper.pagination.bullets;
                var firstIndex;
                var lastIndex;
                var midIndex;

                if (params.dynamicBullets) {
                    swiper.pagination.bulletSize = bullets.eq(0)[swiper.isHorizontal() ? 'outerWidth' : 'outerHeight'](true);
                    $el.css(swiper.isHorizontal() ? 'width' : 'height', swiper.pagination.bulletSize * (params.dynamicMainBullets + 4) + "px");

                    if (params.dynamicMainBullets > 1 && swiper.previousIndex !== undefined) {
                        swiper.pagination.dynamicBulletIndex += current - swiper.previousIndex;

                        if (swiper.pagination.dynamicBulletIndex > params.dynamicMainBullets - 1) {
                            swiper.pagination.dynamicBulletIndex = params.dynamicMainBullets - 1;
                        } else if (swiper.pagination.dynamicBulletIndex < 0) {
                            swiper.pagination.dynamicBulletIndex = 0;
                        }
                    }

                    firstIndex = current - swiper.pagination.dynamicBulletIndex;
                    lastIndex = firstIndex + (Math.min(bullets.length, params.dynamicMainBullets) - 1);
                    midIndex = (lastIndex + firstIndex) / 2;
                }

                bullets.removeClass(params.bulletActiveClass + " " + params.bulletActiveClass + "-next " + params.bulletActiveClass + "-next-next " + params.bulletActiveClass + "-prev " + params.bulletActiveClass + "-prev-prev " + params.bulletActiveClass + "-main");

                if ($el.length > 1) {
                    bullets.each(function (bullet) {
                        var $bullet = $(bullet);
                        var bulletIndex = $bullet.index();

                        if (bulletIndex === current) {
                            $bullet.addClass(params.bulletActiveClass);
                        }

                        if (params.dynamicBullets) {
                            if (bulletIndex >= firstIndex && bulletIndex <= lastIndex) {
                                $bullet.addClass(params.bulletActiveClass + "-main");
                            }

                            if (bulletIndex === firstIndex) {
                                $bullet.prev().addClass(params.bulletActiveClass + "-prev").prev().addClass(params.bulletActiveClass + "-prev-prev");
                            }

                            if (bulletIndex === lastIndex) {
                                $bullet.next().addClass(params.bulletActiveClass + "-next").next().addClass(params.bulletActiveClass + "-next-next");
                            }
                        }
                    });
                } else {
                    var $bullet = bullets.eq(current);
                    var bulletIndex = $bullet.index();
                    $bullet.addClass(params.bulletActiveClass);

                    if (params.dynamicBullets) {
                        var $firstDisplayedBullet = bullets.eq(firstIndex);
                        var $lastDisplayedBullet = bullets.eq(lastIndex);

                        for (var i = firstIndex; i <= lastIndex; i += 1) {
                            bullets.eq(i).addClass(params.bulletActiveClass + "-main");
                        }

                        if (swiper.params.loop) {
                            if (bulletIndex >= bullets.length - params.dynamicMainBullets) {
                                for (var _i = params.dynamicMainBullets; _i >= 0; _i -= 1) {
                                    bullets.eq(bullets.length - _i).addClass(params.bulletActiveClass + "-main");
                                }

                                bullets.eq(bullets.length - params.dynamicMainBullets - 1).addClass(params.bulletActiveClass + "-prev");
                            } else {
                                $firstDisplayedBullet.prev().addClass(params.bulletActiveClass + "-prev").prev().addClass(params.bulletActiveClass + "-prev-prev");
                                $lastDisplayedBullet.next().addClass(params.bulletActiveClass + "-next").next().addClass(params.bulletActiveClass + "-next-next");
                            }
                        } else {
                            $firstDisplayedBullet.prev().addClass(params.bulletActiveClass + "-prev").prev().addClass(params.bulletActiveClass + "-prev-prev");
                            $lastDisplayedBullet.next().addClass(params.bulletActiveClass + "-next").next().addClass(params.bulletActiveClass + "-next-next");
                        }
                    }
                }

                if (params.dynamicBullets) {
                    var dynamicBulletsLength = Math.min(bullets.length, params.dynamicMainBullets + 4);
                    var bulletsOffset = (swiper.pagination.bulletSize * dynamicBulletsLength - swiper.pagination.bulletSize) / 2 - midIndex * swiper.pagination.bulletSize;
                    var offsetProp = rtl ? 'right' : 'left';
                    bullets.css(swiper.isHorizontal() ? offsetProp : 'top', bulletsOffset + "px");
                }
            }

            if (params.type === 'fraction') {
                $el.find("." + params.currentClass).text(params.formatFractionCurrent(current + 1));
                $el.find("." + params.totalClass).text(params.formatFractionTotal(total));
            }

            if (params.type === 'progressbar') {
                var progressbarDirection;

                if (params.progressbarOpposite) {
                    progressbarDirection = swiper.isHorizontal() ? 'vertical' : 'horizontal';
                } else {
                    progressbarDirection = swiper.isHorizontal() ? 'horizontal' : 'vertical';
                }

                var scale = (current + 1) / total;
                var scaleX = 1;
                var scaleY = 1;

                if (progressbarDirection === 'horizontal') {
                    scaleX = scale;
                } else {
                    scaleY = scale;
                }

                $el.find("." + params.progressbarFillClass).transform("translate3d(0,0,0) scaleX(" + scaleX + ") scaleY(" + scaleY + ")").transition(swiper.params.speed);
            }

            if (params.type === 'custom' && params.renderCustom) {
                $el.html(params.renderCustom(swiper, current + 1, total));
                swiper.emit('paginationRender', $el[0]);
            } else {
                swiper.emit('paginationUpdate', $el[0]);
            }

            $el[swiper.params.watchOverflow && swiper.isLocked ? 'addClass' : 'removeClass'](params.lockClass);
        },
        render: function render() {
            // Render Container
            var swiper = this;
            var params = swiper.params.pagination;
            if (!params.el || !swiper.pagination.el || !swiper.pagination.$el || swiper.pagination.$el.length === 0) return;
            var slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;
            var $el = swiper.pagination.$el;
            var paginationHTML = '';

            if (params.type === 'bullets') {
                var numberOfBullets = swiper.params.loop ? Math.ceil((slidesLength - swiper.loopedSlides * 2) / swiper.params.slidesPerGroup) : swiper.snapGrid.length;

                for (var i = 0; i < numberOfBullets; i += 1) {
                    if (params.renderBullet) {
                        paginationHTML += params.renderBullet.call(swiper, i, params.bulletClass);
                    } else {
                        paginationHTML += "<" + params.bulletElement + " class=\"" + params.bulletClass + "\"></" + params.bulletElement + ">";
                    }
                }

                $el.html(paginationHTML);
                swiper.pagination.bullets = $el.find("." + params.bulletClass.replace(/ /g, '.'));
            }

            if (params.type === 'fraction') {
                if (params.renderFraction) {
                    paginationHTML = params.renderFraction.call(swiper, params.currentClass, params.totalClass);
                } else {
                    paginationHTML = "<span class=\"" + params.currentClass + "\"></span>" + ' / ' + ("<span class=\"" + params.totalClass + "\"></span>");
                }

                $el.html(paginationHTML);
            }

            if (params.type === 'progressbar') {
                if (params.renderProgressbar) {
                    paginationHTML = params.renderProgressbar.call(swiper, params.progressbarFillClass);
                } else {
                    paginationHTML = "<span class=\"" + params.progressbarFillClass + "\"></span>";
                }

                $el.html(paginationHTML);
            }

            if (params.type !== 'custom') {
                swiper.emit('paginationRender', swiper.pagination.$el[0]);
            }
        },
        init: function init() {
            var swiper = this;
            var params = swiper.params.pagination;
            if (!params.el) return;
            var $el = $(params.el);
            if ($el.length === 0) return;

            if (swiper.params.uniqueNavElements && typeof params.el === 'string' && $el.length > 1) {
                $el = swiper.$el.find(params.el);
            }

            if (params.type === 'bullets' && params.clickable) {
                $el.addClass(params.clickableClass);
            }

            $el.addClass(params.modifierClass + params.type);

            if (params.type === 'bullets' && params.dynamicBullets) {
                $el.addClass("" + params.modifierClass + params.type + "-dynamic");
                swiper.pagination.dynamicBulletIndex = 0;

                if (params.dynamicMainBullets < 1) {
                    params.dynamicMainBullets = 1;
                }
            }

            if (params.type === 'progressbar' && params.progressbarOpposite) {
                $el.addClass(params.progressbarOppositeClass);
            }

            if (params.clickable) {
                $el.on('click', "." + params.bulletClass.replace(/ /g, '.'), function onClick(e) {
                    e.preventDefault();
                    var index = $(this).index() * swiper.params.slidesPerGroup;
                    if (swiper.params.loop) index += swiper.loopedSlides;
                    swiper.slideTo(index);
                });
            }

            extend$1(swiper.pagination, {
                $el: $el,
                el: $el[0]
            });
        },
        destroy: function destroy() {
            var swiper = this;
            var params = swiper.params.pagination;
            if (!params.el || !swiper.pagination.el || !swiper.pagination.$el || swiper.pagination.$el.length === 0) return;
            var $el = swiper.pagination.$el;
            $el.removeClass(params.hiddenClass);
            $el.removeClass(params.modifierClass + params.type);
            if (swiper.pagination.bullets) swiper.pagination.bullets.removeClass(params.bulletActiveClass);

            if (params.clickable) {
                $el.off('click', "." + params.bulletClass.replace(/ /g, '.'));
            }
        }
    };
    var Pagination$1 = {
        name: 'pagination',
        params: {
            pagination: {
                el: null,
                bulletElement: 'span',
                clickable: false,
                hideOnClick: false,
                renderBullet: null,
                renderProgressbar: null,
                renderFraction: null,
                renderCustom: null,
                progressbarOpposite: false,
                type: 'bullets',
                // 'bullets' or 'progressbar' or 'fraction' or 'custom'
                dynamicBullets: false,
                dynamicMainBullets: 1,
                formatFractionCurrent: function formatFractionCurrent(number) {
                    return number;
                },
                formatFractionTotal: function formatFractionTotal(number) {
                    return number;
                },
                bulletClass: 'swiper-pagination-bullet',
                bulletActiveClass: 'swiper-pagination-bullet-active',
                modifierClass: 'swiper-pagination-',
                // NEW
                currentClass: 'swiper-pagination-current',
                totalClass: 'swiper-pagination-total',
                hiddenClass: 'swiper-pagination-hidden',
                progressbarFillClass: 'swiper-pagination-progressbar-fill',
                progressbarOppositeClass: 'swiper-pagination-progressbar-opposite',
                clickableClass: 'swiper-pagination-clickable',
                // NEW
                lockClass: 'swiper-pagination-lock'
            }
        },
        create: function create() {
            var swiper = this;
            bindModuleMethods(swiper, {
                pagination: _extends({
                    dynamicBulletIndex: 0
                }, Pagination)
            });
        },
        on: {
            init: function init(swiper) {
                swiper.pagination.init();
                swiper.pagination.render();
                swiper.pagination.update();
            },
            activeIndexChange: function activeIndexChange(swiper) {
                if (swiper.params.loop) {
                    swiper.pagination.update();
                } else if (typeof swiper.snapIndex === 'undefined') {
                    swiper.pagination.update();
                }
            },
            snapIndexChange: function snapIndexChange(swiper) {
                if (!swiper.params.loop) {
                    swiper.pagination.update();
                }
            },
            slidesLengthChange: function slidesLengthChange(swiper) {
                if (swiper.params.loop) {
                    swiper.pagination.render();
                    swiper.pagination.update();
                }
            },
            snapGridLengthChange: function snapGridLengthChange(swiper) {
                if (!swiper.params.loop) {
                    swiper.pagination.render();
                    swiper.pagination.update();
                }
            },
            destroy: function destroy(swiper) {
                swiper.pagination.destroy();
            },
            click: function click(swiper, e) {
                if (swiper.params.pagination.el && swiper.params.pagination.hideOnClick && swiper.pagination.$el.length > 0 && !$(e.target).hasClass(swiper.params.pagination.bulletClass)) {
                    var isHidden = swiper.pagination.$el.hasClass(swiper.params.pagination.hiddenClass);

                    if (isHidden === true) {
                        swiper.emit('paginationShow');
                    } else {
                        swiper.emit('paginationHide');
                    }

                    swiper.pagination.$el.toggleClass(swiper.params.pagination.hiddenClass);
                }
            }
        }
    };

    var Scrollbar = {
        setTranslate: function setTranslate() {
            var swiper = this;
            if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
            var scrollbar = swiper.scrollbar,
                rtl = swiper.rtlTranslate,
                progress = swiper.progress;
            var dragSize = scrollbar.dragSize,
                trackSize = scrollbar.trackSize,
                $dragEl = scrollbar.$dragEl,
                $el = scrollbar.$el;
            var params = swiper.params.scrollbar;
            var newSize = dragSize;
            var newPos = (trackSize - dragSize) * progress;

            if (rtl) {
                newPos = -newPos;

                if (newPos > 0) {
                    newSize = dragSize - newPos;
                    newPos = 0;
                } else if (-newPos + dragSize > trackSize) {
                    newSize = trackSize + newPos;
                }
            } else if (newPos < 0) {
                newSize = dragSize + newPos;
                newPos = 0;
            } else if (newPos + dragSize > trackSize) {
                newSize = trackSize - newPos;
            }

            if (swiper.isHorizontal()) {
                $dragEl.transform("translate3d(" + newPos + "px, 0, 0)");
                $dragEl[0].style.width = newSize + "px";
            } else {
                $dragEl.transform("translate3d(0px, " + newPos + "px, 0)");
                $dragEl[0].style.height = newSize + "px";
            }

            if (params.hide) {
                clearTimeout(swiper.scrollbar.timeout);
                $el[0].style.opacity = 1;
                swiper.scrollbar.timeout = setTimeout(function () {
                    $el[0].style.opacity = 0;
                    $el.transition(400);
                }, 1000);
            }
        },
        setTransition: function setTransition(duration) {
            var swiper = this;
            if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
            swiper.scrollbar.$dragEl.transition(duration);
        },
        updateSize: function updateSize() {
            var swiper = this;
            if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
            var scrollbar = swiper.scrollbar;
            var $dragEl = scrollbar.$dragEl,
                $el = scrollbar.$el;
            $dragEl[0].style.width = '';
            $dragEl[0].style.height = '';
            var trackSize = swiper.isHorizontal() ? $el[0].offsetWidth : $el[0].offsetHeight;
            var divider = swiper.size / swiper.virtualSize;
            var moveDivider = divider * (trackSize / swiper.size);
            var dragSize;

            if (swiper.params.scrollbar.dragSize === 'auto') {
                dragSize = trackSize * divider;
            } else {
                dragSize = parseInt(swiper.params.scrollbar.dragSize, 10);
            }

            if (swiper.isHorizontal()) {
                $dragEl[0].style.width = dragSize + "px";
            } else {
                $dragEl[0].style.height = dragSize + "px";
            }

            if (divider >= 1) {
                $el[0].style.display = 'none';
            } else {
                $el[0].style.display = '';
            }

            if (swiper.params.scrollbar.hide) {
                $el[0].style.opacity = 0;
            }

            extend$1(scrollbar, {
                trackSize: trackSize,
                divider: divider,
                moveDivider: moveDivider,
                dragSize: dragSize
            });
            scrollbar.$el[swiper.params.watchOverflow && swiper.isLocked ? 'addClass' : 'removeClass'](swiper.params.scrollbar.lockClass);
        },
        getPointerPosition: function getPointerPosition(e) {
            var swiper = this;

            if (swiper.isHorizontal()) {
                return e.type === 'touchstart' || e.type === 'touchmove' ? e.targetTouches[0].clientX : e.clientX;
            }

            return e.type === 'touchstart' || e.type === 'touchmove' ? e.targetTouches[0].clientY : e.clientY;
        },
        setDragPosition: function setDragPosition(e) {
            var swiper = this;
            var scrollbar = swiper.scrollbar,
                rtl = swiper.rtlTranslate;
            var $el = scrollbar.$el,
                dragSize = scrollbar.dragSize,
                trackSize = scrollbar.trackSize,
                dragStartPos = scrollbar.dragStartPos;
            var positionRatio;
            positionRatio = (scrollbar.getPointerPosition(e) - $el.offset()[swiper.isHorizontal() ? 'left' : 'top'] - (dragStartPos !== null ? dragStartPos : dragSize / 2)) / (trackSize - dragSize);
            positionRatio = Math.max(Math.min(positionRatio, 1), 0);

            if (rtl) {
                positionRatio = 1 - positionRatio;
            }

            var position = swiper.minTranslate() + (swiper.maxTranslate() - swiper.minTranslate()) * positionRatio;
            swiper.updateProgress(position);
            swiper.setTranslate(position);
            swiper.updateActiveIndex();
            swiper.updateSlidesClasses();
        },
        onDragStart: function onDragStart(e) {
            var swiper = this;
            var params = swiper.params.scrollbar;
            var scrollbar = swiper.scrollbar,
                $wrapperEl = swiper.$wrapperEl;
            var $el = scrollbar.$el,
                $dragEl = scrollbar.$dragEl;
            swiper.scrollbar.isTouched = true;
            swiper.scrollbar.dragStartPos = e.target === $dragEl[0] || e.target === $dragEl ? scrollbar.getPointerPosition(e) - e.target.getBoundingClientRect()[swiper.isHorizontal() ? 'left' : 'top'] : null;
            e.preventDefault();
            e.stopPropagation();
            $wrapperEl.transition(100);
            $dragEl.transition(100);
            scrollbar.setDragPosition(e);
            clearTimeout(swiper.scrollbar.dragTimeout);
            $el.transition(0);

            if (params.hide) {
                $el.css('opacity', 1);
            }

            if (swiper.params.cssMode) {
                swiper.$wrapperEl.css('scroll-snap-type', 'none');
            }

            swiper.emit('scrollbarDragStart', e);
        },
        onDragMove: function onDragMove(e) {
            var swiper = this;
            var scrollbar = swiper.scrollbar,
                $wrapperEl = swiper.$wrapperEl;
            var $el = scrollbar.$el,
                $dragEl = scrollbar.$dragEl;
            if (!swiper.scrollbar.isTouched) return;
            if (e.preventDefault) e.preventDefault(); else e.returnValue = false;
            scrollbar.setDragPosition(e);
            $wrapperEl.transition(0);
            $el.transition(0);
            $dragEl.transition(0);
            swiper.emit('scrollbarDragMove', e);
        },
        onDragEnd: function onDragEnd(e) {
            var swiper = this;
            var params = swiper.params.scrollbar;
            var scrollbar = swiper.scrollbar,
                $wrapperEl = swiper.$wrapperEl;
            var $el = scrollbar.$el;
            if (!swiper.scrollbar.isTouched) return;
            swiper.scrollbar.isTouched = false;

            if (swiper.params.cssMode) {
                swiper.$wrapperEl.css('scroll-snap-type', '');
                $wrapperEl.transition('');
            }

            if (params.hide) {
                clearTimeout(swiper.scrollbar.dragTimeout);
                swiper.scrollbar.dragTimeout = nextTick(function () {
                    $el.css('opacity', 0);
                    $el.transition(400);
                }, 1000);
            }

            swiper.emit('scrollbarDragEnd', e);

            if (params.snapOnRelease) {
                swiper.slideToClosest();
            }
        },
        enableDraggable: function enableDraggable() {
            var swiper = this;
            if (!swiper.params.scrollbar.el) return;
            var document = getDocument();
            var scrollbar = swiper.scrollbar,
                touchEventsTouch = swiper.touchEventsTouch,
                touchEventsDesktop = swiper.touchEventsDesktop,
                params = swiper.params,
                support = swiper.support;
            var $el = scrollbar.$el;
            var target = $el[0];
            var activeListener = support.passiveListener && params.passiveListeners ? {
                passive: false,
                capture: false
            } : false;
            var passiveListener = support.passiveListener && params.passiveListeners ? {
                passive: true,
                capture: false
            } : false;

            if (!support.touch) {
                target.addEventListener(touchEventsDesktop.start, swiper.scrollbar.onDragStart, activeListener);
                document.addEventListener(touchEventsDesktop.move, swiper.scrollbar.onDragMove, activeListener);
                document.addEventListener(touchEventsDesktop.end, swiper.scrollbar.onDragEnd, passiveListener);
            } else {
                target.addEventListener(touchEventsTouch.start, swiper.scrollbar.onDragStart, activeListener);
                target.addEventListener(touchEventsTouch.move, swiper.scrollbar.onDragMove, activeListener);
                target.addEventListener(touchEventsTouch.end, swiper.scrollbar.onDragEnd, passiveListener);
            }
        },
        disableDraggable: function disableDraggable() {
            var swiper = this;
            if (!swiper.params.scrollbar.el) return;
            var document = getDocument();
            var scrollbar = swiper.scrollbar,
                touchEventsTouch = swiper.touchEventsTouch,
                touchEventsDesktop = swiper.touchEventsDesktop,
                params = swiper.params,
                support = swiper.support;
            var $el = scrollbar.$el;
            var target = $el[0];
            var activeListener = support.passiveListener && params.passiveListeners ? {
                passive: false,
                capture: false
            } : false;
            var passiveListener = support.passiveListener && params.passiveListeners ? {
                passive: true,
                capture: false
            } : false;

            if (!support.touch) {
                target.removeEventListener(touchEventsDesktop.start, swiper.scrollbar.onDragStart, activeListener);
                document.removeEventListener(touchEventsDesktop.move, swiper.scrollbar.onDragMove, activeListener);
                document.removeEventListener(touchEventsDesktop.end, swiper.scrollbar.onDragEnd, passiveListener);
            } else {
                target.removeEventListener(touchEventsTouch.start, swiper.scrollbar.onDragStart, activeListener);
                target.removeEventListener(touchEventsTouch.move, swiper.scrollbar.onDragMove, activeListener);
                target.removeEventListener(touchEventsTouch.end, swiper.scrollbar.onDragEnd, passiveListener);
            }
        },
        init: function init() {
            var swiper = this;
            if (!swiper.params.scrollbar.el) return;
            var scrollbar = swiper.scrollbar,
                $swiperEl = swiper.$el;
            var params = swiper.params.scrollbar;
            var $el = $(params.el);

            if (swiper.params.uniqueNavElements && typeof params.el === 'string' && $el.length > 1 && $swiperEl.find(params.el).length === 1) {
                $el = $swiperEl.find(params.el);
            }

            var $dragEl = $el.find("." + swiper.params.scrollbar.dragClass);

            if ($dragEl.length === 0) {
                $dragEl = $("<div class=\"" + swiper.params.scrollbar.dragClass + "\"></div>");
                $el.append($dragEl);
            }

            extend$1(scrollbar, {
                $el: $el,
                el: $el[0],
                $dragEl: $dragEl,
                dragEl: $dragEl[0]
            });

            if (params.draggable) {
                scrollbar.enableDraggable();
            }
        },
        destroy: function destroy() {
            var swiper = this;
            swiper.scrollbar.disableDraggable();
        }
    };
    var Scrollbar$1 = {
        name: 'scrollbar',
        params: {
            scrollbar: {
                el: null,
                dragSize: 'auto',
                hide: false,
                draggable: false,
                snapOnRelease: true,
                lockClass: 'swiper-scrollbar-lock',
                dragClass: 'swiper-scrollbar-drag'
            }
        },
        create: function create() {
            var swiper = this;
            bindModuleMethods(swiper, {
                scrollbar: _extends({
                    isTouched: false,
                    timeout: null,
                    dragTimeout: null
                }, Scrollbar)
            });
        },
        on: {
            init: function init(swiper) {
                swiper.scrollbar.init();
                swiper.scrollbar.updateSize();
                swiper.scrollbar.setTranslate();
            },
            update: function update(swiper) {
                swiper.scrollbar.updateSize();
            },
            resize: function resize(swiper) {
                swiper.scrollbar.updateSize();
            },
            observerUpdate: function observerUpdate(swiper) {
                swiper.scrollbar.updateSize();
            },
            setTranslate: function setTranslate(swiper) {
                swiper.scrollbar.setTranslate();
            },
            setTransition: function setTransition(swiper, duration) {
                swiper.scrollbar.setTransition(duration);
            },
            destroy: function destroy(swiper) {
                swiper.scrollbar.destroy();
            }
        }
    };

    var Parallax = {
        setTransform: function setTransform(el, progress) {
            var swiper = this;
            var rtl = swiper.rtl;
            var $el = $(el);
            var rtlFactor = rtl ? -1 : 1;
            var p = $el.attr('data-swiper-parallax') || '0';
            var x = $el.attr('data-swiper-parallax-x');
            var y = $el.attr('data-swiper-parallax-y');
            var scale = $el.attr('data-swiper-parallax-scale');
            var opacity = $el.attr('data-swiper-parallax-opacity');

            if (x || y) {
                x = x || '0';
                y = y || '0';
            } else if (swiper.isHorizontal()) {
                x = p;
                y = '0';
            } else {
                y = p;
                x = '0';
            }

            if (x.indexOf('%') >= 0) {
                x = parseInt(x, 10) * progress * rtlFactor + "%";
            } else {
                x = x * progress * rtlFactor + "px";
            }

            if (y.indexOf('%') >= 0) {
                y = parseInt(y, 10) * progress + "%";
            } else {
                y = y * progress + "px";
            }

            if (typeof opacity !== 'undefined' && opacity !== null) {
                var currentOpacity = opacity - (opacity - 1) * (1 - Math.abs(progress));
                $el[0].style.opacity = currentOpacity;
            }

            if (typeof scale === 'undefined' || scale === null) {
                $el.transform("translate3d(" + x + ", " + y + ", 0px)");
            } else {
                var currentScale = scale - (scale - 1) * (1 - Math.abs(progress));
                $el.transform("translate3d(" + x + ", " + y + ", 0px) scale(" + currentScale + ")");
            }
        },
        setTranslate: function setTranslate() {
            var swiper = this;
            var $el = swiper.$el,
                slides = swiper.slides,
                progress = swiper.progress,
                snapGrid = swiper.snapGrid;
            $el.children('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]').each(function (el) {
                swiper.parallax.setTransform(el, progress);
            });
            slides.each(function (slideEl, slideIndex) {
                var slideProgress = slideEl.progress;

                if (swiper.params.slidesPerGroup > 1 && swiper.params.slidesPerView !== 'auto') {
                    slideProgress += Math.ceil(slideIndex / 2) - progress * (snapGrid.length - 1);
                }

                slideProgress = Math.min(Math.max(slideProgress, -1), 1);
                $(slideEl).find('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]').each(function (el) {
                    swiper.parallax.setTransform(el, slideProgress);
                });
            });
        },
        setTransition: function setTransition(duration) {
            if (duration === void 0) {
                duration = this.params.speed;
            }

            var swiper = this;
            var $el = swiper.$el;
            $el.find('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]').each(function (parallaxEl) {
                var $parallaxEl = $(parallaxEl);
                var parallaxDuration = parseInt($parallaxEl.attr('data-swiper-parallax-duration'), 10) || duration;
                if (duration === 0) parallaxDuration = 0;
                $parallaxEl.transition(parallaxDuration);
            });
        }
    };
    var Parallax$1 = {
        name: 'parallax',
        params: {
            parallax: {
                enabled: false
            }
        },
        create: function create() {
            var swiper = this;
            bindModuleMethods(swiper, {
                parallax: _extends({}, Parallax)
            });
        },
        on: {
            beforeInit: function beforeInit(swiper) {
                if (!swiper.params.parallax.enabled) return;
                swiper.params.watchSlidesProgress = true;
                swiper.originalParams.watchSlidesProgress = true;
            },
            init: function init(swiper) {
                if (!swiper.params.parallax.enabled) return;
                swiper.parallax.setTranslate();
            },
            setTranslate: function setTranslate(swiper) {
                if (!swiper.params.parallax.enabled) return;
                swiper.parallax.setTranslate();
            },
            setTransition: function setTransition(swiper, duration) {
                if (!swiper.params.parallax.enabled) return;
                swiper.parallax.setTransition(duration);
            }
        }
    };

    var Zoom = {
        // Calc Scale From Multi-touches
        getDistanceBetweenTouches: function getDistanceBetweenTouches(e) {
            if (e.targetTouches.length < 2) return 1;
            var x1 = e.targetTouches[0].pageX;
            var y1 = e.targetTouches[0].pageY;
            var x2 = e.targetTouches[1].pageX;
            var y2 = e.targetTouches[1].pageY;
            var distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
            return distance;
        },
        // Events
        onGestureStart: function onGestureStart(e) {
            var swiper = this;
            var support = swiper.support;
            var params = swiper.params.zoom;
            var zoom = swiper.zoom;
            var gesture = zoom.gesture;
            zoom.fakeGestureTouched = false;
            zoom.fakeGestureMoved = false;

            if (!support.gestures) {
                if (e.type !== 'touchstart' || e.type === 'touchstart' && e.targetTouches.length < 2) {
                    return;
                }

                zoom.fakeGestureTouched = true;
                gesture.scaleStart = Zoom.getDistanceBetweenTouches(e);
            }

            if (!gesture.$slideEl || !gesture.$slideEl.length) {
                gesture.$slideEl = $(e.target).closest("." + swiper.params.slideClass);
                if (gesture.$slideEl.length === 0) gesture.$slideEl = swiper.slides.eq(swiper.activeIndex);
                gesture.$imageEl = gesture.$slideEl.find('img, svg, canvas, picture, .swiper-zoom-target');
                gesture.$imageWrapEl = gesture.$imageEl.parent("." + params.containerClass);
                gesture.maxRatio = gesture.$imageWrapEl.attr('data-swiper-zoom') || params.maxRatio;

                if (gesture.$imageWrapEl.length === 0) {
                    gesture.$imageEl = undefined;
                    return;
                }
            }

            if (gesture.$imageEl) {
                gesture.$imageEl.transition(0);
            }

            swiper.zoom.isScaling = true;
        },
        onGestureChange: function onGestureChange(e) {
            var swiper = this;
            var support = swiper.support;
            var params = swiper.params.zoom;
            var zoom = swiper.zoom;
            var gesture = zoom.gesture;

            if (!support.gestures) {
                if (e.type !== 'touchmove' || e.type === 'touchmove' && e.targetTouches.length < 2) {
                    return;
                }

                zoom.fakeGestureMoved = true;
                gesture.scaleMove = Zoom.getDistanceBetweenTouches(e);
            }

            if (!gesture.$imageEl || gesture.$imageEl.length === 0) {
                if (e.type === 'gesturechange') zoom.onGestureStart(e);
                return;
            }

            if (support.gestures) {
                zoom.scale = e.scale * zoom.currentScale;
            } else {
                zoom.scale = gesture.scaleMove / gesture.scaleStart * zoom.currentScale;
            }

            if (zoom.scale > gesture.maxRatio) {
                zoom.scale = gesture.maxRatio - 1 + Math.pow(zoom.scale - gesture.maxRatio + 1, 0.5);
            }

            if (zoom.scale < params.minRatio) {
                zoom.scale = params.minRatio + 1 - Math.pow(params.minRatio - zoom.scale + 1, 0.5);
            }

            gesture.$imageEl.transform("translate3d(0,0,0) scale(" + zoom.scale + ")");
        },
        onGestureEnd: function onGestureEnd(e) {
            var swiper = this;
            var device = swiper.device;
            var support = swiper.support;
            var params = swiper.params.zoom;
            var zoom = swiper.zoom;
            var gesture = zoom.gesture;

            if (!support.gestures) {
                if (!zoom.fakeGestureTouched || !zoom.fakeGestureMoved) {
                    return;
                }

                if (e.type !== 'touchend' || e.type === 'touchend' && e.changedTouches.length < 2 && !device.android) {
                    return;
                }

                zoom.fakeGestureTouched = false;
                zoom.fakeGestureMoved = false;
            }

            if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;
            zoom.scale = Math.max(Math.min(zoom.scale, gesture.maxRatio), params.minRatio);
            gesture.$imageEl.transition(swiper.params.speed).transform("translate3d(0,0,0) scale(" + zoom.scale + ")");
            zoom.currentScale = zoom.scale;
            zoom.isScaling = false;
            if (zoom.scale === 1) gesture.$slideEl = undefined;
        },
        onTouchStart: function onTouchStart(e) {
            var swiper = this;
            var device = swiper.device;
            var zoom = swiper.zoom;
            var gesture = zoom.gesture,
                image = zoom.image;
            if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;
            if (image.isTouched) return;
            if (device.android && e.cancelable) e.preventDefault();
            image.isTouched = true;
            image.touchesStart.x = e.type === 'touchstart' ? e.targetTouches[0].pageX : e.pageX;
            image.touchesStart.y = e.type === 'touchstart' ? e.targetTouches[0].pageY : e.pageY;
        },
        onTouchMove: function onTouchMove(e) {
            var swiper = this;
            var zoom = swiper.zoom;
            var gesture = zoom.gesture,
                image = zoom.image,
                velocity = zoom.velocity;
            if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;
            swiper.allowClick = false;
            if (!image.isTouched || !gesture.$slideEl) return;

            if (!image.isMoved) {
                image.width = gesture.$imageEl[0].offsetWidth;
                image.height = gesture.$imageEl[0].offsetHeight;
                image.startX = getTranslate(gesture.$imageWrapEl[0], 'x') || 0;
                image.startY = getTranslate(gesture.$imageWrapEl[0], 'y') || 0;
                gesture.slideWidth = gesture.$slideEl[0].offsetWidth;
                gesture.slideHeight = gesture.$slideEl[0].offsetHeight;
                gesture.$imageWrapEl.transition(0);

                if (swiper.rtl) {
                    image.startX = -image.startX;
                    image.startY = -image.startY;
                }
            } // Define if we need image drag


            var scaledWidth = image.width * zoom.scale;
            var scaledHeight = image.height * zoom.scale;
            if (scaledWidth < gesture.slideWidth && scaledHeight < gesture.slideHeight) return;
            image.minX = Math.min(gesture.slideWidth / 2 - scaledWidth / 2, 0);
            image.maxX = -image.minX;
            image.minY = Math.min(gesture.slideHeight / 2 - scaledHeight / 2, 0);
            image.maxY = -image.minY;
            image.touchesCurrent.x = e.type === 'touchmove' ? e.targetTouches[0].pageX : e.pageX;
            image.touchesCurrent.y = e.type === 'touchmove' ? e.targetTouches[0].pageY : e.pageY;

            if (!image.isMoved && !zoom.isScaling) {
                if (swiper.isHorizontal() && (Math.floor(image.minX) === Math.floor(image.startX) && image.touchesCurrent.x < image.touchesStart.x || Math.floor(image.maxX) === Math.floor(image.startX) && image.touchesCurrent.x > image.touchesStart.x)) {
                    image.isTouched = false;
                    return;
                }

                if (!swiper.isHorizontal() && (Math.floor(image.minY) === Math.floor(image.startY) && image.touchesCurrent.y < image.touchesStart.y || Math.floor(image.maxY) === Math.floor(image.startY) && image.touchesCurrent.y > image.touchesStart.y)) {
                    image.isTouched = false;
                    return;
                }
            }

            if (e.cancelable) {
                e.preventDefault();
            }

            e.stopPropagation();
            image.isMoved = true;
            image.currentX = image.touchesCurrent.x - image.touchesStart.x + image.startX;
            image.currentY = image.touchesCurrent.y - image.touchesStart.y + image.startY;

            if (image.currentX < image.minX) {
                image.currentX = image.minX + 1 - Math.pow(image.minX - image.currentX + 1, 0.8);
            }

            if (image.currentX > image.maxX) {
                image.currentX = image.maxX - 1 + Math.pow(image.currentX - image.maxX + 1, 0.8);
            }

            if (image.currentY < image.minY) {
                image.currentY = image.minY + 1 - Math.pow(image.minY - image.currentY + 1, 0.8);
            }

            if (image.currentY > image.maxY) {
                image.currentY = image.maxY - 1 + Math.pow(image.currentY - image.maxY + 1, 0.8);
            } // Velocity


            if (!velocity.prevPositionX) velocity.prevPositionX = image.touchesCurrent.x;
            if (!velocity.prevPositionY) velocity.prevPositionY = image.touchesCurrent.y;
            if (!velocity.prevTime) velocity.prevTime = Date.now();
            velocity.x = (image.touchesCurrent.x - velocity.prevPositionX) / (Date.now() - velocity.prevTime) / 2;
            velocity.y = (image.touchesCurrent.y - velocity.prevPositionY) / (Date.now() - velocity.prevTime) / 2;
            if (Math.abs(image.touchesCurrent.x - velocity.prevPositionX) < 2) velocity.x = 0;
            if (Math.abs(image.touchesCurrent.y - velocity.prevPositionY) < 2) velocity.y = 0;
            velocity.prevPositionX = image.touchesCurrent.x;
            velocity.prevPositionY = image.touchesCurrent.y;
            velocity.prevTime = Date.now();
            gesture.$imageWrapEl.transform("translate3d(" + image.currentX + "px, " + image.currentY + "px,0)");
        },
        onTouchEnd: function onTouchEnd() {
            var swiper = this;
            var zoom = swiper.zoom;
            var gesture = zoom.gesture,
                image = zoom.image,
                velocity = zoom.velocity;
            if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;

            if (!image.isTouched || !image.isMoved) {
                image.isTouched = false;
                image.isMoved = false;
                return;
            }

            image.isTouched = false;
            image.isMoved = false;
            var momentumDurationX = 300;
            var momentumDurationY = 300;
            var momentumDistanceX = velocity.x * momentumDurationX;
            var newPositionX = image.currentX + momentumDistanceX;
            var momentumDistanceY = velocity.y * momentumDurationY;
            var newPositionY = image.currentY + momentumDistanceY; // Fix duration

            if (velocity.x !== 0) momentumDurationX = Math.abs((newPositionX - image.currentX) / velocity.x);
            if (velocity.y !== 0) momentumDurationY = Math.abs((newPositionY - image.currentY) / velocity.y);
            var momentumDuration = Math.max(momentumDurationX, momentumDurationY);
            image.currentX = newPositionX;
            image.currentY = newPositionY; // Define if we need image drag

            var scaledWidth = image.width * zoom.scale;
            var scaledHeight = image.height * zoom.scale;
            image.minX = Math.min(gesture.slideWidth / 2 - scaledWidth / 2, 0);
            image.maxX = -image.minX;
            image.minY = Math.min(gesture.slideHeight / 2 - scaledHeight / 2, 0);
            image.maxY = -image.minY;
            image.currentX = Math.max(Math.min(image.currentX, image.maxX), image.minX);
            image.currentY = Math.max(Math.min(image.currentY, image.maxY), image.minY);
            gesture.$imageWrapEl.transition(momentumDuration).transform("translate3d(" + image.currentX + "px, " + image.currentY + "px,0)");
        },
        onTransitionEnd: function onTransitionEnd() {
            var swiper = this;
            var zoom = swiper.zoom;
            var gesture = zoom.gesture;

            if (gesture.$slideEl && swiper.previousIndex !== swiper.activeIndex) {
                if (gesture.$imageEl) {
                    gesture.$imageEl.transform('translate3d(0,0,0) scale(1)');
                }

                if (gesture.$imageWrapEl) {
                    gesture.$imageWrapEl.transform('translate3d(0,0,0)');
                }

                zoom.scale = 1;
                zoom.currentScale = 1;
                gesture.$slideEl = undefined;
                gesture.$imageEl = undefined;
                gesture.$imageWrapEl = undefined;
            }
        },
        // Toggle Zoom
        toggle: function toggle(e) {
            var swiper = this;
            var zoom = swiper.zoom;

            if (zoom.scale && zoom.scale !== 1) {
                // Zoom Out
                zoom.out();
            } else {
                // Zoom In
                zoom.in(e);
            }
        },
        in: function _in(e) {
            var swiper = this;
            var zoom = swiper.zoom;
            var params = swiper.params.zoom;
            var gesture = zoom.gesture,
                image = zoom.image;

            if (!gesture.$slideEl) {
                if (swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual) {
                    gesture.$slideEl = swiper.$wrapperEl.children("." + swiper.params.slideActiveClass);
                } else {
                    gesture.$slideEl = swiper.slides.eq(swiper.activeIndex);
                }

                gesture.$imageEl = gesture.$slideEl.find('img, svg, canvas, picture, .swiper-zoom-target');
                gesture.$imageWrapEl = gesture.$imageEl.parent("." + params.containerClass);
            }

            if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;
            gesture.$slideEl.addClass("" + params.zoomedSlideClass);
            var touchX;
            var touchY;
            var offsetX;
            var offsetY;
            var diffX;
            var diffY;
            var translateX;
            var translateY;
            var imageWidth;
            var imageHeight;
            var scaledWidth;
            var scaledHeight;
            var translateMinX;
            var translateMinY;
            var translateMaxX;
            var translateMaxY;
            var slideWidth;
            var slideHeight;

            if (typeof image.touchesStart.x === 'undefined' && e) {
                touchX = e.type === 'touchend' ? e.changedTouches[0].pageX : e.pageX;
                touchY = e.type === 'touchend' ? e.changedTouches[0].pageY : e.pageY;
            } else {
                touchX = image.touchesStart.x;
                touchY = image.touchesStart.y;
            }

            zoom.scale = gesture.$imageWrapEl.attr('data-swiper-zoom') || params.maxRatio;
            zoom.currentScale = gesture.$imageWrapEl.attr('data-swiper-zoom') || params.maxRatio;

            if (e) {
                slideWidth = gesture.$slideEl[0].offsetWidth;
                slideHeight = gesture.$slideEl[0].offsetHeight;
                offsetX = gesture.$slideEl.offset().left;
                offsetY = gesture.$slideEl.offset().top;
                diffX = offsetX + slideWidth / 2 - touchX;
                diffY = offsetY + slideHeight / 2 - touchY;
                imageWidth = gesture.$imageEl[0].offsetWidth;
                imageHeight = gesture.$imageEl[0].offsetHeight;
                scaledWidth = imageWidth * zoom.scale;
                scaledHeight = imageHeight * zoom.scale;
                translateMinX = Math.min(slideWidth / 2 - scaledWidth / 2, 0);
                translateMinY = Math.min(slideHeight / 2 - scaledHeight / 2, 0);
                translateMaxX = -translateMinX;
                translateMaxY = -translateMinY;
                translateX = diffX * zoom.scale;
                translateY = diffY * zoom.scale;

                if (translateX < translateMinX) {
                    translateX = translateMinX;
                }

                if (translateX > translateMaxX) {
                    translateX = translateMaxX;
                }

                if (translateY < translateMinY) {
                    translateY = translateMinY;
                }

                if (translateY > translateMaxY) {
                    translateY = translateMaxY;
                }
            } else {
                translateX = 0;
                translateY = 0;
            }

            gesture.$imageWrapEl.transition(300).transform("translate3d(" + translateX + "px, " + translateY + "px,0)");
            gesture.$imageEl.transition(300).transform("translate3d(0,0,0) scale(" + zoom.scale + ")");
        },
        out: function out() {
            var swiper = this;
            var zoom = swiper.zoom;
            var params = swiper.params.zoom;
            var gesture = zoom.gesture;

            if (!gesture.$slideEl) {
                if (swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual) {
                    gesture.$slideEl = swiper.$wrapperEl.children("." + swiper.params.slideActiveClass);
                } else {
                    gesture.$slideEl = swiper.slides.eq(swiper.activeIndex);
                }

                gesture.$imageEl = gesture.$slideEl.find('img, svg, canvas, picture, .swiper-zoom-target');
                gesture.$imageWrapEl = gesture.$imageEl.parent("." + params.containerClass);
            }

            if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;
            zoom.scale = 1;
            zoom.currentScale = 1;
            gesture.$imageWrapEl.transition(300).transform('translate3d(0,0,0)');
            gesture.$imageEl.transition(300).transform('translate3d(0,0,0) scale(1)');
            gesture.$slideEl.removeClass("" + params.zoomedSlideClass);
            gesture.$slideEl = undefined;
        },
        toggleGestures: function toggleGestures(method) {
            var swiper = this;
            var zoom = swiper.zoom;
            var selector = zoom.slideSelector,
                passive = zoom.passiveListener;
            swiper.$wrapperEl[method]('gesturestart', selector, zoom.onGestureStart, passive);
            swiper.$wrapperEl[method]('gesturechange', selector, zoom.onGestureChange, passive);
            swiper.$wrapperEl[method]('gestureend', selector, zoom.onGestureEnd, passive);
        },
        enableGestures: function enableGestures() {
            if (this.zoom.gesturesEnabled) return;
            this.zoom.gesturesEnabled = true;
            this.zoom.toggleGestures('on');
        },
        disableGestures: function disableGestures() {
            if (!this.zoom.gesturesEnabled) return;
            this.zoom.gesturesEnabled = false;
            this.zoom.toggleGestures('off');
        },
        // Attach/Detach Events
        enable: function enable() {
            var swiper = this;
            var support = swiper.support;
            var zoom = swiper.zoom;
            if (zoom.enabled) return;
            zoom.enabled = true;
            var passiveListener = swiper.touchEvents.start === 'touchstart' && support.passiveListener && swiper.params.passiveListeners ? {
                passive: true,
                capture: false
            } : false;
            var activeListenerWithCapture = support.passiveListener ? {
                passive: false,
                capture: true
            } : true;
            var slideSelector = "." + swiper.params.slideClass;
            swiper.zoom.passiveListener = passiveListener;
            swiper.zoom.slideSelector = slideSelector; // Scale image

            if (support.gestures) {
                swiper.$wrapperEl.on(swiper.touchEvents.start, swiper.zoom.enableGestures, passiveListener);
                swiper.$wrapperEl.on(swiper.touchEvents.end, swiper.zoom.disableGestures, passiveListener);
            } else if (swiper.touchEvents.start === 'touchstart') {
                swiper.$wrapperEl.on(swiper.touchEvents.start, slideSelector, zoom.onGestureStart, passiveListener);
                swiper.$wrapperEl.on(swiper.touchEvents.move, slideSelector, zoom.onGestureChange, activeListenerWithCapture);
                swiper.$wrapperEl.on(swiper.touchEvents.end, slideSelector, zoom.onGestureEnd, passiveListener);

                if (swiper.touchEvents.cancel) {
                    swiper.$wrapperEl.on(swiper.touchEvents.cancel, slideSelector, zoom.onGestureEnd, passiveListener);
                }
            } // Move image


            swiper.$wrapperEl.on(swiper.touchEvents.move, "." + swiper.params.zoom.containerClass, zoom.onTouchMove, activeListenerWithCapture);
        },
        disable: function disable() {
            var swiper = this;
            var zoom = swiper.zoom;
            if (!zoom.enabled) return;
            var support = swiper.support;
            swiper.zoom.enabled = false;
            var passiveListener = swiper.touchEvents.start === 'touchstart' && support.passiveListener && swiper.params.passiveListeners ? {
                passive: true,
                capture: false
            } : false;
            var activeListenerWithCapture = support.passiveListener ? {
                passive: false,
                capture: true
            } : true;
            var slideSelector = "." + swiper.params.slideClass; // Scale image

            if (support.gestures) {
                swiper.$wrapperEl.off(swiper.touchEvents.start, swiper.zoom.enableGestures, passiveListener);
                swiper.$wrapperEl.off(swiper.touchEvents.end, swiper.zoom.disableGestures, passiveListener);
            } else if (swiper.touchEvents.start === 'touchstart') {
                swiper.$wrapperEl.off(swiper.touchEvents.start, slideSelector, zoom.onGestureStart, passiveListener);
                swiper.$wrapperEl.off(swiper.touchEvents.move, slideSelector, zoom.onGestureChange, activeListenerWithCapture);
                swiper.$wrapperEl.off(swiper.touchEvents.end, slideSelector, zoom.onGestureEnd, passiveListener);

                if (swiper.touchEvents.cancel) {
                    swiper.$wrapperEl.off(swiper.touchEvents.cancel, slideSelector, zoom.onGestureEnd, passiveListener);
                }
            } // Move image


            swiper.$wrapperEl.off(swiper.touchEvents.move, "." + swiper.params.zoom.containerClass, zoom.onTouchMove, activeListenerWithCapture);
        }
    };
    var Zoom$1 = {
        name: 'zoom',
        params: {
            zoom: {
                enabled: false,
                maxRatio: 3,
                minRatio: 1,
                toggle: true,
                containerClass: 'swiper-zoom-container',
                zoomedSlideClass: 'swiper-slide-zoomed'
            }
        },
        create: function create() {
            var swiper = this;
            bindModuleMethods(swiper, {
                zoom: _extends({
                    enabled: false,
                    scale: 1,
                    currentScale: 1,
                    isScaling: false,
                    gesture: {
                        $slideEl: undefined,
                        slideWidth: undefined,
                        slideHeight: undefined,
                        $imageEl: undefined,
                        $imageWrapEl: undefined,
                        maxRatio: 3
                    },
                    image: {
                        isTouched: undefined,
                        isMoved: undefined,
                        currentX: undefined,
                        currentY: undefined,
                        minX: undefined,
                        minY: undefined,
                        maxX: undefined,
                        maxY: undefined,
                        width: undefined,
                        height: undefined,
                        startX: undefined,
                        startY: undefined,
                        touchesStart: {},
                        touchesCurrent: {}
                    },
                    velocity: {
                        x: undefined,
                        y: undefined,
                        prevPositionX: undefined,
                        prevPositionY: undefined,
                        prevTime: undefined
                    }
                }, Zoom)
            });
            var scale = 1;
            Object.defineProperty(swiper.zoom, 'scale', {
                get: function get() {
                    return scale;
                },
                set: function set(value) {
                    if (scale !== value) {
                        var imageEl = swiper.zoom.gesture.$imageEl ? swiper.zoom.gesture.$imageEl[0] : undefined;
                        var slideEl = swiper.zoom.gesture.$slideEl ? swiper.zoom.gesture.$slideEl[0] : undefined;
                        swiper.emit('zoomChange', value, imageEl, slideEl);
                    }

                    scale = value;
                }
            });
        },
        on: {
            init: function init(swiper) {
                if (swiper.params.zoom.enabled) {
                    swiper.zoom.enable();
                }
            },
            destroy: function destroy(swiper) {
                swiper.zoom.disable();
            },
            touchStart: function touchStart(swiper, e) {
                if (!swiper.zoom.enabled) return;
                swiper.zoom.onTouchStart(e);
            },
            touchEnd: function touchEnd(swiper, e) {
                if (!swiper.zoom.enabled) return;
                swiper.zoom.onTouchEnd(e);
            },
            doubleTap: function doubleTap(swiper, e) {
                if (swiper.params.zoom.enabled && swiper.zoom.enabled && swiper.params.zoom.toggle) {
                    swiper.zoom.toggle(e);
                }
            },
            transitionEnd: function transitionEnd(swiper) {
                if (swiper.zoom.enabled && swiper.params.zoom.enabled) {
                    swiper.zoom.onTransitionEnd();
                }
            },
            slideChange: function slideChange(swiper) {
                if (swiper.zoom.enabled && swiper.params.zoom.enabled && swiper.params.cssMode) {
                    swiper.zoom.onTransitionEnd();
                }
            }
        }
    };

    var Lazy = {
        loadInSlide: function loadInSlide(index, loadInDuplicate) {
            if (loadInDuplicate === void 0) {
                loadInDuplicate = true;
            }

            var swiper = this;
            var params = swiper.params.lazy;
            if (typeof index === 'undefined') return;
            if (swiper.slides.length === 0) return;
            var isVirtual = swiper.virtual && swiper.params.virtual.enabled;
            var $slideEl = isVirtual ? swiper.$wrapperEl.children("." + swiper.params.slideClass + "[data-swiper-slide-index=\"" + index + "\"]") : swiper.slides.eq(index);
            var $images = $slideEl.find("." + params.elementClass + ":not(." + params.loadedClass + "):not(." + params.loadingClass + ")");

            if ($slideEl.hasClass(params.elementClass) && !$slideEl.hasClass(params.loadedClass) && !$slideEl.hasClass(params.loadingClass)) {
                $images.push($slideEl[0]);
            }

            if ($images.length === 0) return;
            $images.each(function (imageEl) {
                var $imageEl = $(imageEl);
                $imageEl.addClass(params.loadingClass);
                var background = $imageEl.attr('data-background');
                var src = $imageEl.attr('data-src');
                var srcset = $imageEl.attr('data-srcset');
                var sizes = $imageEl.attr('data-sizes');
                var $pictureEl = $imageEl.parent('picture');
                swiper.loadImage($imageEl[0], src || background, srcset, sizes, false, function () {
                    if (typeof swiper === 'undefined' || swiper === null || !swiper || swiper && !swiper.params || swiper.destroyed) return;

                    if (background) {
                        $imageEl.css('background-image', "url(\"" + background + "\")");
                        $imageEl.removeAttr('data-background');
                    } else {
                        if (srcset) {
                            $imageEl.attr('srcset', srcset);
                            $imageEl.removeAttr('data-srcset');
                        }

                        if (sizes) {
                            $imageEl.attr('sizes', sizes);
                            $imageEl.removeAttr('data-sizes');
                        }

                        if ($pictureEl.length) {
                            $pictureEl.children('source').each(function (sourceEl) {
                                var $source = $(sourceEl);

                                if ($source.attr('data-srcset')) {
                                    $source.attr('srcset', $source.attr('data-srcset'));
                                    $source.removeAttr('data-srcset');
                                }
                            });
                        }

                        if (src) {
                            $imageEl.attr('src', src);
                            $imageEl.removeAttr('data-src');
                        }
                    }

                    $imageEl.addClass(params.loadedClass).removeClass(params.loadingClass);
                    $slideEl.find("." + params.preloaderClass).remove();

                    if (swiper.params.loop && loadInDuplicate) {
                        var slideOriginalIndex = $slideEl.attr('data-swiper-slide-index');

                        if ($slideEl.hasClass(swiper.params.slideDuplicateClass)) {
                            var originalSlide = swiper.$wrapperEl.children("[data-swiper-slide-index=\"" + slideOriginalIndex + "\"]:not(." + swiper.params.slideDuplicateClass + ")");
                            swiper.lazy.loadInSlide(originalSlide.index(), false);
                        } else {
                            var duplicatedSlide = swiper.$wrapperEl.children("." + swiper.params.slideDuplicateClass + "[data-swiper-slide-index=\"" + slideOriginalIndex + "\"]");
                            swiper.lazy.loadInSlide(duplicatedSlide.index(), false);
                        }
                    }

                    swiper.emit('lazyImageReady', $slideEl[0], $imageEl[0]);

                    if (swiper.params.autoHeight) {
                        swiper.updateAutoHeight();
                    }
                });
                swiper.emit('lazyImageLoad', $slideEl[0], $imageEl[0]);
            });
        },
        load: function load() {
            var swiper = this;
            var $wrapperEl = swiper.$wrapperEl,
                swiperParams = swiper.params,
                slides = swiper.slides,
                activeIndex = swiper.activeIndex;
            var isVirtual = swiper.virtual && swiperParams.virtual.enabled;
            var params = swiperParams.lazy;
            var slidesPerView = swiperParams.slidesPerView;

            if (slidesPerView === 'auto') {
                slidesPerView = 0;
            }

            function slideExist(index) {
                if (isVirtual) {
                    if ($wrapperEl.children("." + swiperParams.slideClass + "[data-swiper-slide-index=\"" + index + "\"]").length) {
                        return true;
                    }
                } else if (slides[index]) return true;

                return false;
            }

            function slideIndex(slideEl) {
                if (isVirtual) {
                    return $(slideEl).attr('data-swiper-slide-index');
                }

                return $(slideEl).index();
            }

            if (!swiper.lazy.initialImageLoaded) swiper.lazy.initialImageLoaded = true;

            if (swiper.params.watchSlidesVisibility) {
                $wrapperEl.children("." + swiperParams.slideVisibleClass).each(function (slideEl) {
                    var index = isVirtual ? $(slideEl).attr('data-swiper-slide-index') : $(slideEl).index();
                    swiper.lazy.loadInSlide(index);
                });
            } else if (slidesPerView > 1) {
                for (var i = activeIndex; i < activeIndex + slidesPerView; i += 1) {
                    if (slideExist(i)) swiper.lazy.loadInSlide(i);
                }
            } else {
                swiper.lazy.loadInSlide(activeIndex);
            }

            if (params.loadPrevNext) {
                if (slidesPerView > 1 || params.loadPrevNextAmount && params.loadPrevNextAmount > 1) {
                    var amount = params.loadPrevNextAmount;
                    var spv = slidesPerView;
                    var maxIndex = Math.min(activeIndex + spv + Math.max(amount, spv), slides.length);
                    var minIndex = Math.max(activeIndex - Math.max(spv, amount), 0); // Next Slides

                    for (var _i = activeIndex + slidesPerView; _i < maxIndex; _i += 1) {
                        if (slideExist(_i)) swiper.lazy.loadInSlide(_i);
                    } // Prev Slides


                    for (var _i2 = minIndex; _i2 < activeIndex; _i2 += 1) {
                        if (slideExist(_i2)) swiper.lazy.loadInSlide(_i2);
                    }
                } else {
                    var nextSlide = $wrapperEl.children("." + swiperParams.slideNextClass);
                    if (nextSlide.length > 0) swiper.lazy.loadInSlide(slideIndex(nextSlide));
                    var prevSlide = $wrapperEl.children("." + swiperParams.slidePrevClass);
                    if (prevSlide.length > 0) swiper.lazy.loadInSlide(slideIndex(prevSlide));
                }
            }
        },
        checkInViewOnLoad: function checkInViewOnLoad() {
            var window = getWindow();
            var swiper = this;
            if (!swiper || swiper.destroyed) return;
            var $scrollElement = swiper.params.lazy.scrollingElement ? $(swiper.params.lazy.scrollingElement) : $(window);
            var isWindow = $scrollElement[0] === window;
            var scrollElementWidth = isWindow ? window.innerWidth : $scrollElement[0].offsetWidth;
            var scrollElementHeight = isWindow ? window.innerHeight : $scrollElement[0].offsetHeight;
            var swiperOffset = swiper.$el.offset();
            var rtl = swiper.rtlTranslate;
            var inView = false;
            if (rtl) swiperOffset.left -= swiper.$el[0].scrollLeft;
            var swiperCoord = [[swiperOffset.left, swiperOffset.top], [swiperOffset.left + swiper.width, swiperOffset.top], [swiperOffset.left, swiperOffset.top + swiper.height], [swiperOffset.left + swiper.width, swiperOffset.top + swiper.height]];

            for (var i = 0; i < swiperCoord.length; i += 1) {
                var point = swiperCoord[i];

                if (point[0] >= 0 && point[0] <= scrollElementWidth && point[1] >= 0 && point[1] <= scrollElementHeight) {
                    if (point[0] === 0 && point[1] === 0) continue; // eslint-disable-line

                    inView = true;
                }
            }

            if (inView) {
                swiper.lazy.load();
                $scrollElement.off('scroll', swiper.lazy.checkInViewOnLoad);
            } else if (!swiper.lazy.scrollHandlerAttached) {
                swiper.lazy.scrollHandlerAttached = true;
                $scrollElement.on('scroll', swiper.lazy.checkInViewOnLoad);
            }
        }
    };
    var Lazy$1 = {
        name: 'lazy',
        params: {
            lazy: {
                checkInView: false,
                enabled: false,
                loadPrevNext: false,
                loadPrevNextAmount: 1,
                loadOnTransitionStart: false,
                scrollingElement: '',
                elementClass: 'swiper-lazy',
                loadingClass: 'swiper-lazy-loading',
                loadedClass: 'swiper-lazy-loaded',
                preloaderClass: 'swiper-lazy-preloader'
            }
        },
        create: function create() {
            var swiper = this;
            bindModuleMethods(swiper, {
                lazy: _extends({
                    initialImageLoaded: false
                }, Lazy)
            });
        },
        on: {
            beforeInit: function beforeInit(swiper) {
                if (swiper.params.lazy.enabled && swiper.params.preloadImages) {
                    swiper.params.preloadImages = false;
                }
            },
            init: function init(swiper) {
                if (swiper.params.lazy.enabled && !swiper.params.loop && swiper.params.initialSlide === 0) {
                    if (swiper.params.lazy.checkInView) {
                        swiper.lazy.checkInViewOnLoad();
                    } else {
                        swiper.lazy.load();
                    }
                }
            },
            scroll: function scroll(swiper) {
                if (swiper.params.freeMode && !swiper.params.freeModeSticky) {
                    swiper.lazy.load();
                }
            },
            resize: function resize(swiper) {
                if (swiper.params.lazy.enabled) {
                    swiper.lazy.load();
                }
            },
            scrollbarDragMove: function scrollbarDragMove(swiper) {
                if (swiper.params.lazy.enabled) {
                    swiper.lazy.load();
                }
            },
            transitionStart: function transitionStart(swiper) {
                if (swiper.params.lazy.enabled) {
                    if (swiper.params.lazy.loadOnTransitionStart || !swiper.params.lazy.loadOnTransitionStart && !swiper.lazy.initialImageLoaded) {
                        swiper.lazy.load();
                    }
                }
            },
            transitionEnd: function transitionEnd(swiper) {
                if (swiper.params.lazy.enabled && !swiper.params.lazy.loadOnTransitionStart) {
                    swiper.lazy.load();
                }
            },
            slideChange: function slideChange(swiper) {
                if (swiper.params.lazy.enabled && swiper.params.cssMode) {
                    swiper.lazy.load();
                }
            }
        }
    };

    var Controller = {
        LinearSpline: function LinearSpline(x, y) {
            var binarySearch = function search() {
                var maxIndex;
                var minIndex;
                var guess;
                return function (array, val) {
                    minIndex = -1;
                    maxIndex = array.length;

                    while (maxIndex - minIndex > 1) {
                        guess = maxIndex + minIndex >> 1;

                        if (array[guess] <= val) {
                            minIndex = guess;
                        } else {
                            maxIndex = guess;
                        }
                    }

                    return maxIndex;
                };
            }();

            this.x = x;
            this.y = y;
            this.lastIndex = x.length - 1; // Given an x value (x2), return the expected y2 value:
            // (x1,y1) is the known point before given value,
            // (x3,y3) is the known point after given value.

            var i1;
            var i3;

            this.interpolate = function interpolate(x2) {
                if (!x2) return 0; // Get the indexes of x1 and x3 (the array indexes before and after given x2):

                i3 = binarySearch(this.x, x2);
                i1 = i3 - 1; // We have our indexes i1 & i3, so we can calculate already:
                // y2 := ((x2−x1) × (y3−y1)) ÷ (x3−x1) + y1

                return (x2 - this.x[i1]) * (this.y[i3] - this.y[i1]) / (this.x[i3] - this.x[i1]) + this.y[i1];
            };

            return this;
        },
        // xxx: for now i will just save one spline function to to
        getInterpolateFunction: function getInterpolateFunction(c) {
            var swiper = this;

            if (!swiper.controller.spline) {
                swiper.controller.spline = swiper.params.loop ? new Controller.LinearSpline(swiper.slidesGrid, c.slidesGrid) : new Controller.LinearSpline(swiper.snapGrid, c.snapGrid);
            }
        },
        setTranslate: function setTranslate(_setTranslate, byController) {
            var swiper = this;
            var controlled = swiper.controller.control;
            var multiplier;
            var controlledTranslate;
            var Swiper = swiper.constructor;

            function setControlledTranslate(c) {
                // this will create an Interpolate function based on the snapGrids
                // x is the Grid of the scrolled scroller and y will be the controlled scroller
                // it makes sense to create this only once and recall it for the interpolation
                // the function does a lot of value caching for performance
                var translate = swiper.rtlTranslate ? -swiper.translate : swiper.translate;

                if (swiper.params.controller.by === 'slide') {
                    swiper.controller.getInterpolateFunction(c); // i am not sure why the values have to be multiplicated this way, tried to invert the snapGrid
                    // but it did not work out

                    controlledTranslate = -swiper.controller.spline.interpolate(-translate);
                }

                if (!controlledTranslate || swiper.params.controller.by === 'container') {
                    multiplier = (c.maxTranslate() - c.minTranslate()) / (swiper.maxTranslate() - swiper.minTranslate());
                    controlledTranslate = (translate - swiper.minTranslate()) * multiplier + c.minTranslate();
                }

                if (swiper.params.controller.inverse) {
                    controlledTranslate = c.maxTranslate() - controlledTranslate;
                }

                c.updateProgress(controlledTranslate);
                c.setTranslate(controlledTranslate, swiper);
                c.updateActiveIndex();
                c.updateSlidesClasses();
            }

            if (Array.isArray(controlled)) {
                for (var i = 0; i < controlled.length; i += 1) {
                    if (controlled[i] !== byController && controlled[i] instanceof Swiper) {
                        setControlledTranslate(controlled[i]);
                    }
                }
            } else if (controlled instanceof Swiper && byController !== controlled) {
                setControlledTranslate(controlled);
            }
        },
        setTransition: function setTransition(duration, byController) {
            var swiper = this;
            var Swiper = swiper.constructor;
            var controlled = swiper.controller.control;
            var i;

            function setControlledTransition(c) {
                c.setTransition(duration, swiper);

                if (duration !== 0) {
                    c.transitionStart();

                    if (c.params.autoHeight) {
                        nextTick(function () {
                            c.updateAutoHeight();
                        });
                    }

                    c.$wrapperEl.transitionEnd(function () {
                        if (!controlled) return;

                        if (c.params.loop && swiper.params.controller.by === 'slide') {
                            c.loopFix();
                        }

                        c.transitionEnd();
                    });
                }
            }

            if (Array.isArray(controlled)) {
                for (i = 0; i < controlled.length; i += 1) {
                    if (controlled[i] !== byController && controlled[i] instanceof Swiper) {
                        setControlledTransition(controlled[i]);
                    }
                }
            } else if (controlled instanceof Swiper && byController !== controlled) {
                setControlledTransition(controlled);
            }
        }
    };
    var Controller$1 = {
        name: 'controller',
        params: {
            controller: {
                control: undefined,
                inverse: false,
                by: 'slide' // or 'container'

            }
        },
        create: function create() {
            var swiper = this;
            bindModuleMethods(swiper, {
                controller: _extends({
                    control: swiper.params.controller.control
                }, Controller)
            });
        },
        on: {
            update: function update(swiper) {
                if (!swiper.controller.control) return;

                if (swiper.controller.spline) {
                    swiper.controller.spline = undefined;
                    delete swiper.controller.spline;
                }
            },
            resize: function resize(swiper) {
                if (!swiper.controller.control) return;

                if (swiper.controller.spline) {
                    swiper.controller.spline = undefined;
                    delete swiper.controller.spline;
                }
            },
            observerUpdate: function observerUpdate(swiper) {
                if (!swiper.controller.control) return;

                if (swiper.controller.spline) {
                    swiper.controller.spline = undefined;
                    delete swiper.controller.spline;
                }
            },
            setTranslate: function setTranslate(swiper, translate, byController) {
                if (!swiper.controller.control) return;
                swiper.controller.setTranslate(translate, byController);
            },
            setTransition: function setTransition(swiper, duration, byController) {
                if (!swiper.controller.control) return;
                swiper.controller.setTransition(duration, byController);
            }
        }
    };

    var A11y = {
        getRandomNumber: function getRandomNumber(size) {
            if (size === void 0) {
                size = 16;
            }

            var randomChar = function randomChar() {
                return Math.round(16 * Math.random()).toString(16);
            };

            return 'x'.repeat(size).replace(/x/g, randomChar);
        },
        makeElFocusable: function makeElFocusable($el) {
            $el.attr('tabIndex', '0');
            return $el;
        },
        makeElNotFocusable: function makeElNotFocusable($el) {
            $el.attr('tabIndex', '-1');
            return $el;
        },
        addElRole: function addElRole($el, role) {
            $el.attr('role', role);
            return $el;
        },
        addElRoleDescription: function addElRoleDescription($el, description) {
            $el.attr('aria-role-description', description);
            return $el;
        },
        addElControls: function addElControls($el, controls) {
            $el.attr('aria-controls', controls);
            return $el;
        },
        addElLabel: function addElLabel($el, label) {
            $el.attr('aria-label', label);
            return $el;
        },
        addElId: function addElId($el, id) {
            $el.attr('id', id);
            return $el;
        },
        addElLive: function addElLive($el, live) {
            $el.attr('aria-live', live);
            return $el;
        },
        disableEl: function disableEl($el) {
            $el.attr('aria-disabled', true);
            return $el;
        },
        enableEl: function enableEl($el) {
            $el.attr('aria-disabled', false);
            return $el;
        },
        onEnterKey: function onEnterKey(e) {
            var swiper = this;
            var params = swiper.params.a11y;
            if (e.keyCode !== 13) return;
            var $targetEl = $(e.target);

            if (swiper.navigation && swiper.navigation.$nextEl && $targetEl.is(swiper.navigation.$nextEl)) {
                if (!(swiper.isEnd && !swiper.params.loop)) {
                    swiper.slideNext();
                }

                if (swiper.isEnd) {
                    swiper.a11y.notify(params.lastSlideMessage);
                } else {
                    swiper.a11y.notify(params.nextSlideMessage);
                }
            }

            if (swiper.navigation && swiper.navigation.$prevEl && $targetEl.is(swiper.navigation.$prevEl)) {
                if (!(swiper.isBeginning && !swiper.params.loop)) {
                    swiper.slidePrev();
                }

                if (swiper.isBeginning) {
                    swiper.a11y.notify(params.firstSlideMessage);
                } else {
                    swiper.a11y.notify(params.prevSlideMessage);
                }
            }

            if (swiper.pagination && $targetEl.is("." + swiper.params.pagination.bulletClass.replace(/ /g, '.'))) {
                $targetEl[0].click();
            }
        },
        notify: function notify(message) {
            var swiper = this;
            var notification = swiper.a11y.liveRegion;
            if (notification.length === 0) return;
            notification.html('');
            notification.html(message);
        },
        updateNavigation: function updateNavigation() {
            var swiper = this;
            if (swiper.params.loop || !swiper.navigation) return;
            var _swiper$navigation = swiper.navigation,
                $nextEl = _swiper$navigation.$nextEl,
                $prevEl = _swiper$navigation.$prevEl;

            if ($prevEl && $prevEl.length > 0) {
                if (swiper.isBeginning) {
                    swiper.a11y.disableEl($prevEl);
                    swiper.a11y.makeElNotFocusable($prevEl);
                } else {
                    swiper.a11y.enableEl($prevEl);
                    swiper.a11y.makeElFocusable($prevEl);
                }
            }

            if ($nextEl && $nextEl.length > 0) {
                if (swiper.isEnd) {
                    swiper.a11y.disableEl($nextEl);
                    swiper.a11y.makeElNotFocusable($nextEl);
                } else {
                    swiper.a11y.enableEl($nextEl);
                    swiper.a11y.makeElFocusable($nextEl);
                }
            }
        },
        updatePagination: function updatePagination() {
            var swiper = this;
            var params = swiper.params.a11y;

            if (swiper.pagination && swiper.params.pagination.clickable && swiper.pagination.bullets && swiper.pagination.bullets.length) {
                swiper.pagination.bullets.each(function (bulletEl) {
                    var $bulletEl = $(bulletEl);
                    swiper.a11y.makeElFocusable($bulletEl);

                    if (!swiper.params.pagination.renderBullet) {
                        swiper.a11y.addElRole($bulletEl, 'button');
                        swiper.a11y.addElLabel($bulletEl, params.paginationBulletMessage.replace(/\{\{index\}\}/, $bulletEl.index() + 1));
                    }
                });
            }
        },
        init: function init() {
            var swiper = this;
            var params = swiper.params.a11y;
            swiper.$el.append(swiper.a11y.liveRegion); // Container

            var $containerEl = swiper.$el;

            if (params.containerRoleDescriptionMessage) {
                swiper.a11y.addElRoleDescription($containerEl, params.containerRoleDescriptionMessage);
            }

            if (params.containerMessage) {
                swiper.a11y.addElLabel($containerEl, params.containerMessage);
            } // Wrapper


            var $wrapperEl = swiper.$wrapperEl;
            var wrapperId = $wrapperEl.attr('id') || "swiper-wrapper-" + swiper.a11y.getRandomNumber(16);
            var live;
            swiper.a11y.addElId($wrapperEl, wrapperId);

            if (swiper.params.autoplay && swiper.params.autoplay.enabled) {
                live = 'off';
            } else {
                live = 'polite';
            }

            swiper.a11y.addElLive($wrapperEl, live); // Slide

            if (params.itemRoleDescriptionMessage) {
                swiper.a11y.addElRoleDescription($(swiper.slides), params.itemRoleDescriptionMessage);
            }

            swiper.a11y.addElRole($(swiper.slides), 'group');
            swiper.slides.each(function (slideEl) {
                var $slideEl = $(slideEl);
                swiper.a11y.addElLabel($slideEl, $slideEl.index() + 1 + " / " + swiper.slides.length);
            }); // Navigation

            var $nextEl;
            var $prevEl;

            if (swiper.navigation && swiper.navigation.$nextEl) {
                $nextEl = swiper.navigation.$nextEl;
            }

            if (swiper.navigation && swiper.navigation.$prevEl) {
                $prevEl = swiper.navigation.$prevEl;
            }

            if ($nextEl && $nextEl.length) {
                swiper.a11y.makeElFocusable($nextEl);

                if ($nextEl[0].tagName !== 'BUTTON') {
                    swiper.a11y.addElRole($nextEl, 'button');
                    $nextEl.on('keydown', swiper.a11y.onEnterKey);
                }

                swiper.a11y.addElLabel($nextEl, params.nextSlideMessage);
                swiper.a11y.addElControls($nextEl, wrapperId);
            }

            if ($prevEl && $prevEl.length) {
                swiper.a11y.makeElFocusable($prevEl);

                if ($prevEl[0].tagName !== 'BUTTON') {
                    swiper.a11y.addElRole($prevEl, 'button');
                    $prevEl.on('keydown', swiper.a11y.onEnterKey);
                }

                swiper.a11y.addElLabel($prevEl, params.prevSlideMessage);
                swiper.a11y.addElControls($prevEl, wrapperId);
            } // Pagination


            if (swiper.pagination && swiper.params.pagination.clickable && swiper.pagination.bullets && swiper.pagination.bullets.length) {
                swiper.pagination.$el.on('keydown', "." + swiper.params.pagination.bulletClass.replace(/ /g, '.'), swiper.a11y.onEnterKey);
            }
        },
        destroy: function destroy() {
            var swiper = this;
            if (swiper.a11y.liveRegion && swiper.a11y.liveRegion.length > 0) swiper.a11y.liveRegion.remove();
            var $nextEl;
            var $prevEl;

            if (swiper.navigation && swiper.navigation.$nextEl) {
                $nextEl = swiper.navigation.$nextEl;
            }

            if (swiper.navigation && swiper.navigation.$prevEl) {
                $prevEl = swiper.navigation.$prevEl;
            }

            if ($nextEl) {
                $nextEl.off('keydown', swiper.a11y.onEnterKey);
            }

            if ($prevEl) {
                $prevEl.off('keydown', swiper.a11y.onEnterKey);
            } // Pagination


            if (swiper.pagination && swiper.params.pagination.clickable && swiper.pagination.bullets && swiper.pagination.bullets.length) {
                swiper.pagination.$el.off('keydown', "." + swiper.params.pagination.bulletClass.replace(/ /g, '.'), swiper.a11y.onEnterKey);
            }
        }
    };
    var A11y$1 = {
        name: 'a11y',
        params: {
            a11y: {
                enabled: true,
                notificationClass: 'swiper-notification',
                prevSlideMessage: 'Previous slide',
                nextSlideMessage: 'Next slide',
                firstSlideMessage: 'This is the first slide',
                lastSlideMessage: 'This is the last slide',
                paginationBulletMessage: 'Go to slide {{index}}',
                containerMessage: null,
                containerRoleDescriptionMessage: null,
                itemRoleDescriptionMessage: null
            }
        },
        create: function create() {
            var swiper = this;
            bindModuleMethods(swiper, {
                a11y: _extends(_extends({}, A11y), {}, {
                    liveRegion: $("<span class=\"" + swiper.params.a11y.notificationClass + "\" aria-live=\"assertive\" aria-atomic=\"true\"></span>")
                })
            });
        },
        on: {
            afterInit: function afterInit(swiper) {
                if (!swiper.params.a11y.enabled) return;
                swiper.a11y.init();
                swiper.a11y.updateNavigation();
            },
            toEdge: function toEdge(swiper) {
                if (!swiper.params.a11y.enabled) return;
                swiper.a11y.updateNavigation();
            },
            fromEdge: function fromEdge(swiper) {
                if (!swiper.params.a11y.enabled) return;
                swiper.a11y.updateNavigation();
            },
            paginationUpdate: function paginationUpdate(swiper) {
                if (!swiper.params.a11y.enabled) return;
                swiper.a11y.updatePagination();
            },
            destroy: function destroy(swiper) {
                if (!swiper.params.a11y.enabled) return;
                swiper.a11y.destroy();
            }
        }
    };

    var History = {
        init: function init() {
            var swiper = this;
            var window = getWindow();
            if (!swiper.params.history) return;

            if (!window.history || !window.history.pushState) {
                swiper.params.history.enabled = false;
                swiper.params.hashNavigation.enabled = true;
                return;
            }

            var history = swiper.history;
            history.initialized = true;
            history.paths = History.getPathValues(swiper.params.url);
            if (!history.paths.key && !history.paths.value) return;
            history.scrollToSlide(0, history.paths.value, swiper.params.runCallbacksOnInit);

            if (!swiper.params.history.replaceState) {
                window.addEventListener('popstate', swiper.history.setHistoryPopState);
            }
        },
        destroy: function destroy() {
            var swiper = this;
            var window = getWindow();

            if (!swiper.params.history.replaceState) {
                window.removeEventListener('popstate', swiper.history.setHistoryPopState);
            }
        },
        setHistoryPopState: function setHistoryPopState() {
            var swiper = this;
            swiper.history.paths = History.getPathValues(swiper.params.url);
            swiper.history.scrollToSlide(swiper.params.speed, swiper.history.paths.value, false);
        },
        getPathValues: function getPathValues(urlOverride) {
            var window = getWindow();
            var location;

            if (urlOverride) {
                location = new URL(urlOverride);
            } else {
                location = window.location;
            }

            var pathArray = location.pathname.slice(1).split('/').filter(function (part) {
                return part !== '';
            });
            var total = pathArray.length;
            var key = pathArray[total - 2];
            var value = pathArray[total - 1];
            return {
                key: key,
                value: value
            };
        },
        setHistory: function setHistory(key, index) {
            var swiper = this;
            var window = getWindow();
            if (!swiper.history.initialized || !swiper.params.history.enabled) return;
            var location;

            if (swiper.params.url) {
                location = new URL(swiper.params.url);
            } else {
                location = window.location;
            }

            var slide = swiper.slides.eq(index);
            var value = History.slugify(slide.attr('data-history'));

            if (!location.pathname.includes(key)) {
                value = key + "/" + value;
            }

            var currentState = window.history.state;

            if (currentState && currentState.value === value) {
                return;
            }

            if (swiper.params.history.replaceState) {
                window.history.replaceState({
                    value: value
                }, null, value);
            } else {
                window.history.pushState({
                    value: value
                }, null, value);
            }
        },
        slugify: function slugify(text) {
            return text.toString().replace(/\s+/g, '-').replace(/[^\w-]+/g, '').replace(/--+/g, '-').replace(/^-+/, '').replace(/-+$/, '');
        },
        scrollToSlide: function scrollToSlide(speed, value, runCallbacks) {
            var swiper = this;

            if (value) {
                for (var i = 0, length = swiper.slides.length; i < length; i += 1) {
                    var slide = swiper.slides.eq(i);
                    var slideHistory = History.slugify(slide.attr('data-history'));

                    if (slideHistory === value && !slide.hasClass(swiper.params.slideDuplicateClass)) {
                        var index = slide.index();
                        swiper.slideTo(index, speed, runCallbacks);
                    }
                }
            } else {
                swiper.slideTo(0, speed, runCallbacks);
            }
        }
    };
    var History$1 = {
        name: 'history',
        params: {
            history: {
                enabled: false,
                replaceState: false,
                key: 'slides'
            }
        },
        create: function create() {
            var swiper = this;
            bindModuleMethods(swiper, {
                history: _extends({}, History)
            });
        },
        on: {
            init: function init(swiper) {
                if (swiper.params.history.enabled) {
                    swiper.history.init();
                }
            },
            destroy: function destroy(swiper) {
                if (swiper.params.history.enabled) {
                    swiper.history.destroy();
                }
            },
            transitionEnd: function transitionEnd(swiper) {
                if (swiper.history.initialized) {
                    swiper.history.setHistory(swiper.params.history.key, swiper.activeIndex);
                }
            },
            slideChange: function slideChange(swiper) {
                if (swiper.history.initialized && swiper.params.cssMode) {
                    swiper.history.setHistory(swiper.params.history.key, swiper.activeIndex);
                }
            }
        }
    };

    var HashNavigation = {
        onHashCange: function onHashCange() {
            var swiper = this;
            var document = getDocument();
            swiper.emit('hashChange');
            var newHash = document.location.hash.replace('#', '');
            var activeSlideHash = swiper.slides.eq(swiper.activeIndex).attr('data-hash');

            if (newHash !== activeSlideHash) {
                var newIndex = swiper.$wrapperEl.children("." + swiper.params.slideClass + "[data-hash=\"" + newHash + "\"]").index();
                if (typeof newIndex === 'undefined') return;
                swiper.slideTo(newIndex);
            }
        },
        setHash: function setHash() {
            var swiper = this;
            var window = getWindow();
            var document = getDocument();
            if (!swiper.hashNavigation.initialized || !swiper.params.hashNavigation.enabled) return;

            if (swiper.params.hashNavigation.replaceState && window.history && window.history.replaceState) {
                window.history.replaceState(null, null, "#" + swiper.slides.eq(swiper.activeIndex).attr('data-hash') || '');
                swiper.emit('hashSet');
            } else {
                var slide = swiper.slides.eq(swiper.activeIndex);
                var hash = slide.attr('data-hash') || slide.attr('data-history');
                document.location.hash = hash || '';
                swiper.emit('hashSet');
            }
        },
        init: function init() {
            var swiper = this;
            var document = getDocument();
            var window = getWindow();
            if (!swiper.params.hashNavigation.enabled || swiper.params.history && swiper.params.history.enabled) return;
            swiper.hashNavigation.initialized = true;
            var hash = document.location.hash.replace('#', '');

            if (hash) {
                var speed = 0;

                for (var i = 0, length = swiper.slides.length; i < length; i += 1) {
                    var slide = swiper.slides.eq(i);
                    var slideHash = slide.attr('data-hash') || slide.attr('data-history');

                    if (slideHash === hash && !slide.hasClass(swiper.params.slideDuplicateClass)) {
                        var index = slide.index();
                        swiper.slideTo(index, speed, swiper.params.runCallbacksOnInit, true);
                    }
                }
            }

            if (swiper.params.hashNavigation.watchState) {
                $(window).on('hashchange', swiper.hashNavigation.onHashCange);
            }
        },
        destroy: function destroy() {
            var swiper = this;
            var window = getWindow();

            if (swiper.params.hashNavigation.watchState) {
                $(window).off('hashchange', swiper.hashNavigation.onHashCange);
            }
        }
    };
    var HashNavigation$1 = {
        name: 'hash-navigation',
        params: {
            hashNavigation: {
                enabled: false,
                replaceState: false,
                watchState: false
            }
        },
        create: function create() {
            var swiper = this;
            bindModuleMethods(swiper, {
                hashNavigation: _extends({
                    initialized: false
                }, HashNavigation)
            });
        },
        on: {
            init: function init(swiper) {
                if (swiper.params.hashNavigation.enabled) {
                    swiper.hashNavigation.init();
                }
            },
            destroy: function destroy(swiper) {
                if (swiper.params.hashNavigation.enabled) {
                    swiper.hashNavigation.destroy();
                }
            },
            transitionEnd: function transitionEnd(swiper) {
                if (swiper.hashNavigation.initialized) {
                    swiper.hashNavigation.setHash();
                }
            },
            slideChange: function slideChange(swiper) {
                if (swiper.hashNavigation.initialized && swiper.params.cssMode) {
                    swiper.hashNavigation.setHash();
                }
            }
        }
    };

    var Autoplay = {
        run: function run() {
            var swiper = this;
            var $activeSlideEl = swiper.slides.eq(swiper.activeIndex);
            var delay = swiper.params.autoplay.delay;

            if ($activeSlideEl.attr('data-swiper-autoplay')) {
                delay = $activeSlideEl.attr('data-swiper-autoplay') || swiper.params.autoplay.delay;
            }

            clearTimeout(swiper.autoplay.timeout);
            swiper.autoplay.timeout = nextTick(function () {
                var autoplayResult;

                if (swiper.params.autoplay.reverseDirection) {
                    if (swiper.params.loop) {
                        swiper.loopFix();
                        autoplayResult = swiper.slidePrev(swiper.params.speed, true, true);
                        swiper.emit('autoplay');
                    } else if (!swiper.isBeginning) {
                        autoplayResult = swiper.slidePrev(swiper.params.speed, true, true);
                        swiper.emit('autoplay');
                    } else if (!swiper.params.autoplay.stopOnLastSlide) {
                        autoplayResult = swiper.slideTo(swiper.slides.length - 1, swiper.params.speed, true, true);
                        swiper.emit('autoplay');
                    } else {
                        swiper.autoplay.stop();
                    }
                } else if (swiper.params.loop) {
                    swiper.loopFix();
                    autoplayResult = swiper.slideNext(swiper.params.speed, true, true);
                    swiper.emit('autoplay');
                } else if (!swiper.isEnd) {
                    autoplayResult = swiper.slideNext(swiper.params.speed, true, true);
                    swiper.emit('autoplay');
                } else if (!swiper.params.autoplay.stopOnLastSlide) {
                    autoplayResult = swiper.slideTo(0, swiper.params.speed, true, true);
                    swiper.emit('autoplay');
                } else {
                    swiper.autoplay.stop();
                }

                if (swiper.params.cssMode && swiper.autoplay.running) swiper.autoplay.run(); else if (autoplayResult === false) {
                    swiper.autoplay.run();
                }
            }, delay);
        },
        start: function start() {
            var swiper = this;
            if (typeof swiper.autoplay.timeout !== 'undefined') return false;
            if (swiper.autoplay.running) return false;
            swiper.autoplay.running = true;
            swiper.emit('autoplayStart');
            swiper.autoplay.run();
            return true;
        },
        stop: function stop() {
            var swiper = this;
            if (!swiper.autoplay.running) return false;
            if (typeof swiper.autoplay.timeout === 'undefined') return false;

            if (swiper.autoplay.timeout) {
                clearTimeout(swiper.autoplay.timeout);
                swiper.autoplay.timeout = undefined;
            }

            swiper.autoplay.running = false;
            swiper.emit('autoplayStop');
            return true;
        },
        pause: function pause(speed) {
            var swiper = this;
            if (!swiper.autoplay.running) return;
            if (swiper.autoplay.paused) return;
            if (swiper.autoplay.timeout) clearTimeout(swiper.autoplay.timeout);
            swiper.autoplay.paused = true;

            if (speed === 0 || !swiper.params.autoplay.waitForTransition) {
                swiper.autoplay.paused = false;
                swiper.autoplay.run();
            } else {
                swiper.$wrapperEl[0].addEventListener('transitionend', swiper.autoplay.onTransitionEnd);
                swiper.$wrapperEl[0].addEventListener('webkitTransitionEnd', swiper.autoplay.onTransitionEnd);
            }
        },
        onVisibilityChange: function onVisibilityChange() {
            var swiper = this;
            var document = getDocument();

            if (document.visibilityState === 'hidden' && swiper.autoplay.running) {
                swiper.autoplay.pause();
            }

            if (document.visibilityState === 'visible' && swiper.autoplay.paused) {
                swiper.autoplay.run();
                swiper.autoplay.paused = false;
            }
        },
        onTransitionEnd: function onTransitionEnd(e) {
            var swiper = this;
            if (!swiper || swiper.destroyed || !swiper.$wrapperEl) return;
            if (e.target !== swiper.$wrapperEl[0]) return;
            swiper.$wrapperEl[0].removeEventListener('transitionend', swiper.autoplay.onTransitionEnd);
            swiper.$wrapperEl[0].removeEventListener('webkitTransitionEnd', swiper.autoplay.onTransitionEnd);
            swiper.autoplay.paused = false;

            if (!swiper.autoplay.running) {
                swiper.autoplay.stop();
            } else {
                swiper.autoplay.run();
            }
        }
    };
    var Autoplay$1 = {
        name: 'autoplay',
        params: {
            autoplay: {
                enabled: false,
                delay: 3000,
                waitForTransition: true,
                disableOnInteraction: true,
                stopOnLastSlide: false,
                reverseDirection: false
            }
        },
        create: function create() {
            var swiper = this;
            bindModuleMethods(swiper, {
                autoplay: _extends(_extends({}, Autoplay), {}, {
                    running: false,
                    paused: false
                })
            });
        },
        on: {
            init: function init(swiper) {
                if (swiper.params.autoplay.enabled) {
                    swiper.autoplay.start();
                    var document = getDocument();
                    document.addEventListener('visibilitychange', swiper.autoplay.onVisibilityChange);
                }
            },
            beforeTransitionStart: function beforeTransitionStart(swiper, speed, internal) {
                if (swiper.autoplay.running) {
                    if (internal || !swiper.params.autoplay.disableOnInteraction) {
                        swiper.autoplay.pause(speed);
                    } else {
                        swiper.autoplay.stop();
                    }
                }
            },
            sliderFirstMove: function sliderFirstMove(swiper) {
                if (swiper.autoplay.running) {
                    if (swiper.params.autoplay.disableOnInteraction) {
                        swiper.autoplay.stop();
                    } else {
                        swiper.autoplay.pause();
                    }
                }
            },
            touchEnd: function touchEnd(swiper) {
                if (swiper.params.cssMode && swiper.autoplay.paused && !swiper.params.autoplay.disableOnInteraction) {
                    swiper.autoplay.run();
                }
            },
            destroy: function destroy(swiper) {
                if (swiper.autoplay.running) {
                    swiper.autoplay.stop();
                }

                var document = getDocument();
                document.removeEventListener('visibilitychange', swiper.autoplay.onVisibilityChange);
            }
        }
    };

    var Fade = {
        setTranslate: function setTranslate() {
            var swiper = this;
            var slides = swiper.slides;

            for (var i = 0; i < slides.length; i += 1) {
                var $slideEl = swiper.slides.eq(i);
                var offset = $slideEl[0].swiperSlideOffset;
                var tx = -offset;
                if (!swiper.params.virtualTranslate) tx -= swiper.translate;
                var ty = 0;

                if (!swiper.isHorizontal()) {
                    ty = tx;
                    tx = 0;
                }

                var slideOpacity = swiper.params.fadeEffect.crossFade ? Math.max(1 - Math.abs($slideEl[0].progress), 0) : 1 + Math.min(Math.max($slideEl[0].progress, -1), 0);
                $slideEl.css({
                    opacity: slideOpacity
                }).transform("translate3d(" + tx + "px, " + ty + "px, 0px)");
            }
        },
        setTransition: function setTransition(duration) {
            var swiper = this;
            var slides = swiper.slides,
                $wrapperEl = swiper.$wrapperEl;
            slides.transition(duration);

            if (swiper.params.virtualTranslate && duration !== 0) {
                var eventTriggered = false;
                slides.transitionEnd(function () {
                    if (eventTriggered) return;
                    if (!swiper || swiper.destroyed) return;
                    eventTriggered = true;
                    swiper.animating = false;
                    var triggerEvents = ['webkitTransitionEnd', 'transitionend'];

                    for (var i = 0; i < triggerEvents.length; i += 1) {
                        $wrapperEl.trigger(triggerEvents[i]);
                    }
                });
            }
        }
    };
    var EffectFade = {
        name: 'effect-fade',
        params: {
            fadeEffect: {
                crossFade: false
            }
        },
        create: function create() {
            var swiper = this;
            bindModuleMethods(swiper, {
                fadeEffect: _extends({}, Fade)
            });
        },
        on: {
            beforeInit: function beforeInit(swiper) {
                if (swiper.params.effect !== 'fade') return;
                swiper.classNames.push(swiper.params.containerModifierClass + "fade");
                var overwriteParams = {
                    slidesPerView: 1,
                    slidesPerColumn: 1,
                    slidesPerGroup: 1,
                    watchSlidesProgress: true,
                    spaceBetween: 0,
                    virtualTranslate: true
                };
                extend$1(swiper.params, overwriteParams);
                extend$1(swiper.originalParams, overwriteParams);
            },
            setTranslate: function setTranslate(swiper) {
                if (swiper.params.effect !== 'fade') return;
                swiper.fadeEffect.setTranslate();
            },
            setTransition: function setTransition(swiper, duration) {
                if (swiper.params.effect !== 'fade') return;
                swiper.fadeEffect.setTransition(duration);
            }
        }
    };

    var Cube = {
        setTranslate: function setTranslate() {
            var swiper = this;
            var $el = swiper.$el,
                $wrapperEl = swiper.$wrapperEl,
                slides = swiper.slides,
                swiperWidth = swiper.width,
                swiperHeight = swiper.height,
                rtl = swiper.rtlTranslate,
                swiperSize = swiper.size,
                browser = swiper.browser;
            var params = swiper.params.cubeEffect;
            var isHorizontal = swiper.isHorizontal();
            var isVirtual = swiper.virtual && swiper.params.virtual.enabled;
            var wrapperRotate = 0;
            var $cubeShadowEl;

            if (params.shadow) {
                if (isHorizontal) {
                    $cubeShadowEl = $wrapperEl.find('.swiper-cube-shadow');

                    if ($cubeShadowEl.length === 0) {
                        $cubeShadowEl = $('<div class="swiper-cube-shadow"></div>');
                        $wrapperEl.append($cubeShadowEl);
                    }

                    $cubeShadowEl.css({
                        height: swiperWidth + "px"
                    });
                } else {
                    $cubeShadowEl = $el.find('.swiper-cube-shadow');

                    if ($cubeShadowEl.length === 0) {
                        $cubeShadowEl = $('<div class="swiper-cube-shadow"></div>');
                        $el.append($cubeShadowEl);
                    }
                }
            }

            for (var i = 0; i < slides.length; i += 1) {
                var $slideEl = slides.eq(i);
                var slideIndex = i;

                if (isVirtual) {
                    slideIndex = parseInt($slideEl.attr('data-swiper-slide-index'), 10);
                }

                var slideAngle = slideIndex * 90;
                var round = Math.floor(slideAngle / 360);

                if (rtl) {
                    slideAngle = -slideAngle;
                    round = Math.floor(-slideAngle / 360);
                }

                var progress = Math.max(Math.min($slideEl[0].progress, 1), -1);
                var tx = 0;
                var ty = 0;
                var tz = 0;

                if (slideIndex % 4 === 0) {
                    tx = -round * 4 * swiperSize;
                    tz = 0;
                } else if ((slideIndex - 1) % 4 === 0) {
                    tx = 0;
                    tz = -round * 4 * swiperSize;
                } else if ((slideIndex - 2) % 4 === 0) {
                    tx = swiperSize + round * 4 * swiperSize;
                    tz = swiperSize;
                } else if ((slideIndex - 3) % 4 === 0) {
                    tx = -swiperSize;
                    tz = 3 * swiperSize + swiperSize * 4 * round;
                }

                if (rtl) {
                    tx = -tx;
                }

                if (!isHorizontal) {
                    ty = tx;
                    tx = 0;
                }

                var transform = "rotateX(" + (isHorizontal ? 0 : -slideAngle) + "deg) rotateY(" + (isHorizontal ? slideAngle : 0) + "deg) translate3d(" + tx + "px, " + ty + "px, " + tz + "px)";

                if (progress <= 1 && progress > -1) {
                    wrapperRotate = slideIndex * 90 + progress * 90;
                    if (rtl) wrapperRotate = -slideIndex * 90 - progress * 90;
                }

                $slideEl.transform(transform);

                if (params.slideShadows) {
                    // Set shadows
                    var shadowBefore = isHorizontal ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
                    var shadowAfter = isHorizontal ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');

                    if (shadowBefore.length === 0) {
                        shadowBefore = $("<div class=\"swiper-slide-shadow-" + (isHorizontal ? 'left' : 'top') + "\"></div>");
                        $slideEl.append(shadowBefore);
                    }

                    if (shadowAfter.length === 0) {
                        shadowAfter = $("<div class=\"swiper-slide-shadow-" + (isHorizontal ? 'right' : 'bottom') + "\"></div>");
                        $slideEl.append(shadowAfter);
                    }

                    if (shadowBefore.length) shadowBefore[0].style.opacity = Math.max(-progress, 0);
                    if (shadowAfter.length) shadowAfter[0].style.opacity = Math.max(progress, 0);
                }
            }

            $wrapperEl.css({
                '-webkit-transform-origin': "50% 50% -" + swiperSize / 2 + "px",
                '-moz-transform-origin': "50% 50% -" + swiperSize / 2 + "px",
                '-ms-transform-origin': "50% 50% -" + swiperSize / 2 + "px",
                'transform-origin': "50% 50% -" + swiperSize / 2 + "px"
            });

            if (params.shadow) {
                if (isHorizontal) {
                    $cubeShadowEl.transform("translate3d(0px, " + (swiperWidth / 2 + params.shadowOffset) + "px, " + -swiperWidth / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + params.shadowScale + ")");
                } else {
                    var shadowAngle = Math.abs(wrapperRotate) - Math.floor(Math.abs(wrapperRotate) / 90) * 90;
                    var multiplier = 1.5 - (Math.sin(shadowAngle * 2 * Math.PI / 360) / 2 + Math.cos(shadowAngle * 2 * Math.PI / 360) / 2);
                    var scale1 = params.shadowScale;
                    var scale2 = params.shadowScale / multiplier;
                    var offset = params.shadowOffset;
                    $cubeShadowEl.transform("scale3d(" + scale1 + ", 1, " + scale2 + ") translate3d(0px, " + (swiperHeight / 2 + offset) + "px, " + -swiperHeight / 2 / scale2 + "px) rotateX(-90deg)");
                }
            }

            var zFactor = browser.isSafari || browser.isWebView ? -swiperSize / 2 : 0;
            $wrapperEl.transform("translate3d(0px,0," + zFactor + "px) rotateX(" + (swiper.isHorizontal() ? 0 : wrapperRotate) + "deg) rotateY(" + (swiper.isHorizontal() ? -wrapperRotate : 0) + "deg)");
        },
        setTransition: function setTransition(duration) {
            var swiper = this;
            var $el = swiper.$el,
                slides = swiper.slides;
            slides.transition(duration).find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').transition(duration);

            if (swiper.params.cubeEffect.shadow && !swiper.isHorizontal()) {
                $el.find('.swiper-cube-shadow').transition(duration);
            }
        }
    };
    var EffectCube = {
        name: 'effect-cube',
        params: {
            cubeEffect: {
                slideShadows: true,
                shadow: true,
                shadowOffset: 20,
                shadowScale: 0.94
            }
        },
        create: function create() {
            var swiper = this;
            bindModuleMethods(swiper, {
                cubeEffect: _extends({}, Cube)
            });
        },
        on: {
            beforeInit: function beforeInit(swiper) {
                if (swiper.params.effect !== 'cube') return;
                swiper.classNames.push(swiper.params.containerModifierClass + "cube");
                swiper.classNames.push(swiper.params.containerModifierClass + "3d");
                var overwriteParams = {
                    slidesPerView: 1,
                    slidesPerColumn: 1,
                    slidesPerGroup: 1,
                    watchSlidesProgress: true,
                    resistanceRatio: 0,
                    spaceBetween: 0,
                    centeredSlides: false,
                    virtualTranslate: true
                };
                extend$1(swiper.params, overwriteParams);
                extend$1(swiper.originalParams, overwriteParams);
            },
            setTranslate: function setTranslate(swiper) {
                if (swiper.params.effect !== 'cube') return;
                swiper.cubeEffect.setTranslate();
            },
            setTransition: function setTransition(swiper, duration) {
                if (swiper.params.effect !== 'cube') return;
                swiper.cubeEffect.setTransition(duration);
            }
        }
    };

    var Flip = {
        setTranslate: function setTranslate() {
            var swiper = this;
            var slides = swiper.slides,
                rtl = swiper.rtlTranslate;

            for (var i = 0; i < slides.length; i += 1) {
                var $slideEl = slides.eq(i);
                var progress = $slideEl[0].progress;

                if (swiper.params.flipEffect.limitRotation) {
                    progress = Math.max(Math.min($slideEl[0].progress, 1), -1);
                }

                var offset = $slideEl[0].swiperSlideOffset;
                var rotate = -180 * progress;
                var rotateY = rotate;
                var rotateX = 0;
                var tx = -offset;
                var ty = 0;

                if (!swiper.isHorizontal()) {
                    ty = tx;
                    tx = 0;
                    rotateX = -rotateY;
                    rotateY = 0;
                } else if (rtl) {
                    rotateY = -rotateY;
                }

                $slideEl[0].style.zIndex = -Math.abs(Math.round(progress)) + slides.length;

                if (swiper.params.flipEffect.slideShadows) {
                    // Set shadows
                    var shadowBefore = swiper.isHorizontal() ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
                    var shadowAfter = swiper.isHorizontal() ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');

                    if (shadowBefore.length === 0) {
                        shadowBefore = $("<div class=\"swiper-slide-shadow-" + (swiper.isHorizontal() ? 'left' : 'top') + "\"></div>");
                        $slideEl.append(shadowBefore);
                    }

                    if (shadowAfter.length === 0) {
                        shadowAfter = $("<div class=\"swiper-slide-shadow-" + (swiper.isHorizontal() ? 'right' : 'bottom') + "\"></div>");
                        $slideEl.append(shadowAfter);
                    }

                    if (shadowBefore.length) shadowBefore[0].style.opacity = Math.max(-progress, 0);
                    if (shadowAfter.length) shadowAfter[0].style.opacity = Math.max(progress, 0);
                }

                $slideEl.transform("translate3d(" + tx + "px, " + ty + "px, 0px) rotateX(" + rotateX + "deg) rotateY(" + rotateY + "deg)");
            }
        },
        setTransition: function setTransition(duration) {
            var swiper = this;
            var slides = swiper.slides,
                activeIndex = swiper.activeIndex,
                $wrapperEl = swiper.$wrapperEl;
            slides.transition(duration).find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').transition(duration);

            if (swiper.params.virtualTranslate && duration !== 0) {
                var eventTriggered = false; // eslint-disable-next-line

                slides.eq(activeIndex).transitionEnd(function onTransitionEnd() {
                    if (eventTriggered) return;
                    if (!swiper || swiper.destroyed) return; // if (!$(this).hasClass(swiper.params.slideActiveClass)) return;

                    eventTriggered = true;
                    swiper.animating = false;
                    var triggerEvents = ['webkitTransitionEnd', 'transitionend'];

                    for (var i = 0; i < triggerEvents.length; i += 1) {
                        $wrapperEl.trigger(triggerEvents[i]);
                    }
                });
            }
        }
    };
    var EffectFlip = {
        name: 'effect-flip',
        params: {
            flipEffect: {
                slideShadows: true,
                limitRotation: true
            }
        },
        create: function create() {
            var swiper = this;
            bindModuleMethods(swiper, {
                flipEffect: _extends({}, Flip)
            });
        },
        on: {
            beforeInit: function beforeInit(swiper) {
                if (swiper.params.effect !== 'flip') return;
                swiper.classNames.push(swiper.params.containerModifierClass + "flip");
                swiper.classNames.push(swiper.params.containerModifierClass + "3d");
                var overwriteParams = {
                    slidesPerView: 1,
                    slidesPerColumn: 1,
                    slidesPerGroup: 1,
                    watchSlidesProgress: true,
                    spaceBetween: 0,
                    virtualTranslate: true
                };
                extend$1(swiper.params, overwriteParams);
                extend$1(swiper.originalParams, overwriteParams);
            },
            setTranslate: function setTranslate(swiper) {
                if (swiper.params.effect !== 'flip') return;
                swiper.flipEffect.setTranslate();
            },
            setTransition: function setTransition(swiper, duration) {
                if (swiper.params.effect !== 'flip') return;
                swiper.flipEffect.setTransition(duration);
            }
        }
    };

    var Coverflow = {
        setTranslate: function setTranslate() {
            var swiper = this;
            var swiperWidth = swiper.width,
                swiperHeight = swiper.height,
                slides = swiper.slides,
                slidesSizesGrid = swiper.slidesSizesGrid;
            var params = swiper.params.coverflowEffect;
            var isHorizontal = swiper.isHorizontal();
            var transform = swiper.translate;
            var center = isHorizontal ? -transform + swiperWidth / 2 : -transform + swiperHeight / 2;
            var rotate = isHorizontal ? params.rotate : -params.rotate;
            var translate = params.depth; // Each slide offset from center

            for (var i = 0, length = slides.length; i < length; i += 1) {
                var $slideEl = slides.eq(i);
                var slideSize = slidesSizesGrid[i];
                var slideOffset = $slideEl[0].swiperSlideOffset;
                var offsetMultiplier = (center - slideOffset - slideSize / 2) / slideSize * params.modifier;
                var rotateY = isHorizontal ? rotate * offsetMultiplier : 0;
                var rotateX = isHorizontal ? 0 : rotate * offsetMultiplier; // var rotateZ = 0

                var translateZ = -translate * Math.abs(offsetMultiplier);
                var stretch = params.stretch; // Allow percentage to make a relative stretch for responsive sliders

                if (typeof stretch === 'string' && stretch.indexOf('%') !== -1) {
                    stretch = parseFloat(params.stretch) / 100 * slideSize;
                }

                var translateY = isHorizontal ? 0 : stretch * offsetMultiplier;
                var translateX = isHorizontal ? stretch * offsetMultiplier : 0;
                var scale = 1 - (1 - params.scale) * Math.abs(offsetMultiplier); // Fix for ultra small values

                if (Math.abs(translateX) < 0.001) translateX = 0;
                if (Math.abs(translateY) < 0.001) translateY = 0;
                if (Math.abs(translateZ) < 0.001) translateZ = 0;
                if (Math.abs(rotateY) < 0.001) rotateY = 0;
                if (Math.abs(rotateX) < 0.001) rotateX = 0;
                if (Math.abs(scale) < 0.001) scale = 0;
                var slideTransform = "translate3d(" + translateX + "px," + translateY + "px," + translateZ + "px)  rotateX(" + rotateX + "deg) rotateY(" + rotateY + "deg) scale(" + scale + ")";
                $slideEl.transform(slideTransform);
                $slideEl[0].style.zIndex = -Math.abs(Math.round(offsetMultiplier)) + 1;

                if (params.slideShadows) {
                    // Set shadows
                    var $shadowBeforeEl = isHorizontal ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
                    var $shadowAfterEl = isHorizontal ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');

                    if ($shadowBeforeEl.length === 0) {
                        $shadowBeforeEl = $("<div class=\"swiper-slide-shadow-" + (isHorizontal ? 'left' : 'top') + "\"></div>");
                        $slideEl.append($shadowBeforeEl);
                    }

                    if ($shadowAfterEl.length === 0) {
                        $shadowAfterEl = $("<div class=\"swiper-slide-shadow-" + (isHorizontal ? 'right' : 'bottom') + "\"></div>");
                        $slideEl.append($shadowAfterEl);
                    }

                    if ($shadowBeforeEl.length) $shadowBeforeEl[0].style.opacity = offsetMultiplier > 0 ? offsetMultiplier : 0;
                    if ($shadowAfterEl.length) $shadowAfterEl[0].style.opacity = -offsetMultiplier > 0 ? -offsetMultiplier : 0;
                }
            }
        },
        setTransition: function setTransition(duration) {
            var swiper = this;
            swiper.slides.transition(duration).find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').transition(duration);
        }
    };
    var EffectCoverflow = {
        name: 'effect-coverflow',
        params: {
            coverflowEffect: {
                rotate: 50,
                stretch: 0,
                depth: 100,
                scale: 1,
                modifier: 1,
                slideShadows: true
            }
        },
        create: function create() {
            var swiper = this;
            bindModuleMethods(swiper, {
                coverflowEffect: _extends({}, Coverflow)
            });
        },
        on: {
            beforeInit: function beforeInit(swiper) {
                if (swiper.params.effect !== 'coverflow') return;
                swiper.classNames.push(swiper.params.containerModifierClass + "coverflow");
                swiper.classNames.push(swiper.params.containerModifierClass + "3d");
                swiper.params.watchSlidesProgress = true;
                swiper.originalParams.watchSlidesProgress = true;
            },
            setTranslate: function setTranslate(swiper) {
                if (swiper.params.effect !== 'coverflow') return;
                swiper.coverflowEffect.setTranslate();
            },
            setTransition: function setTransition(swiper, duration) {
                if (swiper.params.effect !== 'coverflow') return;
                swiper.coverflowEffect.setTransition(duration);
            }
        }
    };

    var Thumbs = {
        init: function init() {
            var swiper = this;
            var thumbsParams = swiper.params.thumbs;
            if (swiper.thumbs.initialized) return false;
            swiper.thumbs.initialized = true;
            var SwiperClass = swiper.constructor;

            if (thumbsParams.swiper instanceof SwiperClass) {
                swiper.thumbs.swiper = thumbsParams.swiper;
                extend$1(swiper.thumbs.swiper.originalParams, {
                    watchSlidesProgress: true,
                    slideToClickedSlide: false
                });
                extend$1(swiper.thumbs.swiper.params, {
                    watchSlidesProgress: true,
                    slideToClickedSlide: false
                });
            } else if (isObject$1(thumbsParams.swiper)) {
                swiper.thumbs.swiper = new SwiperClass(extend$1({}, thumbsParams.swiper, {
                    watchSlidesVisibility: true,
                    watchSlidesProgress: true,
                    slideToClickedSlide: false
                }));
                swiper.thumbs.swiperCreated = true;
            }

            swiper.thumbs.swiper.$el.addClass(swiper.params.thumbs.thumbsContainerClass);
            swiper.thumbs.swiper.on('tap', swiper.thumbs.onThumbClick);
            return true;
        },
        onThumbClick: function onThumbClick() {
            var swiper = this;
            var thumbsSwiper = swiper.thumbs.swiper;
            if (!thumbsSwiper) return;
            var clickedIndex = thumbsSwiper.clickedIndex;
            var clickedSlide = thumbsSwiper.clickedSlide;
            if (clickedSlide && $(clickedSlide).hasClass(swiper.params.thumbs.slideThumbActiveClass)) return;
            if (typeof clickedIndex === 'undefined' || clickedIndex === null) return;
            var slideToIndex;

            if (thumbsSwiper.params.loop) {
                slideToIndex = parseInt($(thumbsSwiper.clickedSlide).attr('data-swiper-slide-index'), 10);
            } else {
                slideToIndex = clickedIndex;
            }

            if (swiper.params.loop) {
                var currentIndex = swiper.activeIndex;

                if (swiper.slides.eq(currentIndex).hasClass(swiper.params.slideDuplicateClass)) {
                    swiper.loopFix(); // eslint-disable-next-line

                    swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
                    currentIndex = swiper.activeIndex;
                }

                var prevIndex = swiper.slides.eq(currentIndex).prevAll("[data-swiper-slide-index=\"" + slideToIndex + "\"]").eq(0).index();
                var nextIndex = swiper.slides.eq(currentIndex).nextAll("[data-swiper-slide-index=\"" + slideToIndex + "\"]").eq(0).index();
                if (typeof prevIndex === 'undefined') slideToIndex = nextIndex; else if (typeof nextIndex === 'undefined') slideToIndex = prevIndex; else if (nextIndex - currentIndex < currentIndex - prevIndex) slideToIndex = nextIndex; else slideToIndex = prevIndex;
            }

            swiper.slideTo(slideToIndex);
        },
        update: function update(initial) {
            var swiper = this;
            var thumbsSwiper = swiper.thumbs.swiper;
            if (!thumbsSwiper) return;
            var slidesPerView = thumbsSwiper.params.slidesPerView === 'auto' ? thumbsSwiper.slidesPerViewDynamic() : thumbsSwiper.params.slidesPerView;
            var autoScrollOffset = swiper.params.thumbs.autoScrollOffset;
            var useOffset = autoScrollOffset && !thumbsSwiper.params.loop;

            if (swiper.realIndex !== thumbsSwiper.realIndex || useOffset) {
                var currentThumbsIndex = thumbsSwiper.activeIndex;
                var newThumbsIndex;
                var direction;

                if (thumbsSwiper.params.loop) {
                    if (thumbsSwiper.slides.eq(currentThumbsIndex).hasClass(thumbsSwiper.params.slideDuplicateClass)) {
                        thumbsSwiper.loopFix(); // eslint-disable-next-line

                        thumbsSwiper._clientLeft = thumbsSwiper.$wrapperEl[0].clientLeft;
                        currentThumbsIndex = thumbsSwiper.activeIndex;
                    } // Find actual thumbs index to slide to


                    var prevThumbsIndex = thumbsSwiper.slides.eq(currentThumbsIndex).prevAll("[data-swiper-slide-index=\"" + swiper.realIndex + "\"]").eq(0).index();
                    var nextThumbsIndex = thumbsSwiper.slides.eq(currentThumbsIndex).nextAll("[data-swiper-slide-index=\"" + swiper.realIndex + "\"]").eq(0).index();
                    if (typeof prevThumbsIndex === 'undefined') newThumbsIndex = nextThumbsIndex; else if (typeof nextThumbsIndex === 'undefined') newThumbsIndex = prevThumbsIndex; else if (nextThumbsIndex - currentThumbsIndex === currentThumbsIndex - prevThumbsIndex) newThumbsIndex = currentThumbsIndex; else if (nextThumbsIndex - currentThumbsIndex < currentThumbsIndex - prevThumbsIndex) newThumbsIndex = nextThumbsIndex; else newThumbsIndex = prevThumbsIndex;
                    direction = swiper.activeIndex > swiper.previousIndex ? 'next' : 'prev';
                } else {
                    newThumbsIndex = swiper.realIndex;
                    direction = newThumbsIndex > swiper.previousIndex ? 'next' : 'prev';
                }

                if (useOffset) {
                    newThumbsIndex += direction === 'next' ? autoScrollOffset : -1 * autoScrollOffset;
                }

                if (thumbsSwiper.visibleSlidesIndexes && thumbsSwiper.visibleSlidesIndexes.indexOf(newThumbsIndex) < 0) {
                    if (thumbsSwiper.params.centeredSlides) {
                        if (newThumbsIndex > currentThumbsIndex) {
                            newThumbsIndex = newThumbsIndex - Math.floor(slidesPerView / 2) + 1;
                        } else {
                            newThumbsIndex = newThumbsIndex + Math.floor(slidesPerView / 2) - 1;
                        }
                    } else if (newThumbsIndex > currentThumbsIndex) {
                        newThumbsIndex = newThumbsIndex - slidesPerView + 1;
                    }

                    thumbsSwiper.slideTo(newThumbsIndex, initial ? 0 : undefined);
                }
            } // Activate thumbs


            var thumbsToActivate = 1;
            var thumbActiveClass = swiper.params.thumbs.slideThumbActiveClass;

            if (swiper.params.slidesPerView > 1 && !swiper.params.centeredSlides) {
                thumbsToActivate = swiper.params.slidesPerView;
            }

            if (!swiper.params.thumbs.multipleActiveThumbs) {
                thumbsToActivate = 1;
            }

            thumbsToActivate = Math.floor(thumbsToActivate);
            thumbsSwiper.slides.removeClass(thumbActiveClass);

            if (thumbsSwiper.params.loop || thumbsSwiper.params.virtual && thumbsSwiper.params.virtual.enabled) {
                for (var i = 0; i < thumbsToActivate; i += 1) {
                    thumbsSwiper.$wrapperEl.children("[data-swiper-slide-index=\"" + (swiper.realIndex + i) + "\"]").addClass(thumbActiveClass);
                }
            } else {
                for (var _i = 0; _i < thumbsToActivate; _i += 1) {
                    thumbsSwiper.slides.eq(swiper.realIndex + _i).addClass(thumbActiveClass);
                }
            }
        }
    };
    var Thumbs$1 = {
        name: 'thumbs',
        params: {
            thumbs: {
                swiper: null,
                multipleActiveThumbs: true,
                autoScrollOffset: 0,
                slideThumbActiveClass: 'swiper-slide-thumb-active',
                thumbsContainerClass: 'swiper-container-thumbs'
            }
        },
        create: function create() {
            var swiper = this;
            bindModuleMethods(swiper, {
                thumbs: _extends({
                    swiper: null,
                    initialized: false
                }, Thumbs)
            });
        },
        on: {
            beforeInit: function beforeInit(swiper) {
                var thumbs = swiper.params.thumbs;
                if (!thumbs || !thumbs.swiper) return;
                swiper.thumbs.init();
                swiper.thumbs.update(true);
            },
            slideChange: function slideChange(swiper) {
                if (!swiper.thumbs.swiper) return;
                swiper.thumbs.update();
            },
            update: function update(swiper) {
                if (!swiper.thumbs.swiper) return;
                swiper.thumbs.update();
            },
            resize: function resize(swiper) {
                if (!swiper.thumbs.swiper) return;
                swiper.thumbs.update();
            },
            observerUpdate: function observerUpdate(swiper) {
                if (!swiper.thumbs.swiper) return;
                swiper.thumbs.update();
            },
            setTransition: function setTransition(swiper, duration) {
                var thumbsSwiper = swiper.thumbs.swiper;
                if (!thumbsSwiper) return;
                thumbsSwiper.setTransition(duration);
            },
            beforeDestroy: function beforeDestroy(swiper) {
                var thumbsSwiper = swiper.thumbs.swiper;
                if (!thumbsSwiper) return;

                if (swiper.thumbs.swiperCreated && thumbsSwiper) {
                    thumbsSwiper.destroy();
                }
            }
        }
    };

    // Swiper Class
    var components = [Virtual$1, Keyboard$1, Mousewheel$1, Navigation$1, Pagination$1, Scrollbar$1, Parallax$1, Zoom$1, Lazy$1, Controller$1, A11y$1, History$1, HashNavigation$1, Autoplay$1, EffectFade, EffectCube, EffectFlip, EffectCoverflow, Thumbs$1];
    Swiper.use(components);

    return Swiper;

})));
//# sourceMappingURL=swiper-bundle.js.map
;
/*! choices.js v9.0.1 | © 2019 Josh Johnson | https://github.com/jshjohnson/Choices#readme */
window.Choices=function(e){var t={};function i(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,i),r.l=!0,r.exports}return i.m=e,i.c=t,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/public/assets/scripts/",i(i.s=7)}([function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(1);t.DEFAULT_CLASSNAMES={containerOuter:"choices",containerInner:"choices__inner",input:"choices__input",inputCloned:"choices__input--cloned",list:"choices__list",listItems:"choices__list--multiple",listSingle:"choices__list--single",listDropdown:"choices__list--dropdown",item:"choices__item",itemSelectable:"choices__item--selectable",itemDisabled:"choices__item--disabled",itemChoice:"choices__item--choice",placeholder:"choices__placeholder",group:"choices__group",groupHeading:"choices__heading",button:"choices__button",activeState:"is-active",focusState:"is-focused",openState:"is-open",disabledState:"is-disabled",highlightedState:"is-highlighted",selectedState:"is-selected",flippedState:"is-flipped",loadingState:"is-loading",noResults:"has-no-results",noChoices:"has-no-choices"},t.DEFAULT_CONFIG={items:[],choices:[],silent:!1,renderChoiceLimit:-1,maxItemCount:-1,addItems:!0,addItemFilter:null,removeItems:!0,removeItemButton:!1,editItems:!1,duplicateItemsAllowed:!0,delimiter:",",paste:!0,searchEnabled:!0,searchChoices:!0,searchFloor:1,searchResultLimit:4,searchFields:["label","value"],position:"auto",resetScrollPosition:!0,shouldSort:!0,shouldSortItems:!1,sorter:n.sortByAlpha,placeholder:!0,placeholderValue:null,searchPlaceholderValue:null,prependValue:null,appendValue:null,renderSelectedChoices:"auto",loadingText:"Loading...",noResultsText:"No results found",noChoicesText:"No choices to choose from",itemSelectText:"Press to select",uniqueItemText:"Only unique values can be added",customAddItemText:"Only values matching specific conditions can be added",addItemText:function(e){return'Press Enter to add <b>"'+n.sanitise(e)+'"</b>'},maxItemText:function(e){return"Only "+e+" values can be added"},valueComparer:function(e,t){return e===t},fuseOptions:{includeScore:!0},callbackOnInit:null,callbackOnCreateTemplates:null,classNames:t.DEFAULT_CLASSNAMES},t.EVENTS={showDropdown:"showDropdown",hideDropdown:"hideDropdown",change:"change",choice:"choice",search:"search",addItem:"addItem",removeItem:"removeItem",highlightItem:"highlightItem",highlightChoice:"highlightChoice",unhighlightItem:"unhighlightItem"},t.ACTION_TYPES={ADD_CHOICE:"ADD_CHOICE",FILTER_CHOICES:"FILTER_CHOICES",ACTIVATE_CHOICES:"ACTIVATE_CHOICES",CLEAR_CHOICES:"CLEAR_CHOICES",ADD_GROUP:"ADD_GROUP",ADD_ITEM:"ADD_ITEM",REMOVE_ITEM:"REMOVE_ITEM",HIGHLIGHT_ITEM:"HIGHLIGHT_ITEM",CLEAR_ALL:"CLEAR_ALL",RESET_TO:"RESET_TO",SET_IS_LOADING:"SET_IS_LOADING"},t.KEY_CODES={BACK_KEY:46,DELETE_KEY:8,ENTER_KEY:13,A_KEY:65,ESC_KEY:27,UP_KEY:38,DOWN_KEY:40,PAGE_UP_KEY:33,PAGE_DOWN_KEY:34},t.TEXT_TYPE="text",t.SELECT_ONE_TYPE="select-one",t.SELECT_MULTIPLE_TYPE="select-multiple",t.SCROLLING_SPEED=4},function(e,t,i){"use strict";var n;Object.defineProperty(t,"__esModule",{value:!0}),t.getRandomNumber=function(e,t){return Math.floor(Math.random()*(t-e)+e)},t.generateChars=function(e){return Array.from({length:e},(function(){return t.getRandomNumber(0,36).toString(36)})).join("")},t.generateId=function(e,i){var n=e.id||e.name&&e.name+"-"+t.generateChars(2)||t.generateChars(4);return n=i+"-"+(n=n.replace(/(:|\.|\[|\]|,)/g,""))},t.getType=function(e){return Object.prototype.toString.call(e).slice(8,-1)},t.isType=function(e,i){return null!=i&&t.getType(i)===e},t.wrap=function(e,t){return void 0===t&&(t=document.createElement("div")),e.nextSibling?e.parentNode&&e.parentNode.insertBefore(t,e.nextSibling):e.parentNode&&e.parentNode.appendChild(t),t.appendChild(e)},t.getAdjacentEl=function(e,t,i){void 0===i&&(i=1);for(var n=(i>0?"next":"previous")+"ElementSibling",r=e[n];r;){if(r.matches(t))return r;r=r[n]}return r},t.isScrolledIntoView=function(e,t,i){return void 0===i&&(i=1),!!e&&(i>0?t.scrollTop+t.offsetHeight>=e.offsetTop+e.offsetHeight:e.offsetTop>=t.scrollTop)},t.sanitise=function(e){return"string"!=typeof e?e:e.replace(/&/g,"&amp;").replace(/>/g,"&rt;").replace(/</g,"&lt;").replace(/"/g,"&quot;")},t.strToEl=(n=document.createElement("div"),function(e){var t=e.trim();n.innerHTML=t;for(var i=n.children[0];n.firstChild;)n.removeChild(n.firstChild);return i}),t.sortByAlpha=function(e,t){var i=e.value,n=e.label,r=void 0===n?i:n,o=t.value,s=t.label,a=void 0===s?o:s;return r.localeCompare(a,[],{sensitivity:"base",ignorePunctuation:!0,numeric:!0})},t.sortByScore=function(e,t){var i=e.score,n=void 0===i?0:i,r=t.score;return n-(void 0===r?0:r)},t.dispatchEvent=function(e,t,i){void 0===i&&(i=null);var n=new CustomEvent(t,{detail:i,bubbles:!0,cancelable:!0});return e.dispatchEvent(n)},t.existsInArray=function(e,t,i){return void 0===i&&(i="value"),e.some((function(e){return"string"==typeof t?e[i]===t.trim():e[i]===t}))},t.cloneObject=function(e){return JSON.parse(JSON.stringify(e))},t.diff=function(e,t){var i=Object.keys(e).sort(),n=Object.keys(t).sort();return i.filter((function(e){return n.indexOf(e)<0}))}},function(e,t,i){"use strict";(function(e,n){var r,o=i(6);r="undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==e?e:n;var s=Object(o.a)(r);t.a=s}).call(this,i(12),i(13)(e))},function(e,t,i){"use strict";i.r(t),i.d(t,"__DO_NOT_USE__ActionTypes",(function(){return o})),i.d(t,"applyMiddleware",(function(){return v})),i.d(t,"bindActionCreators",(function(){return h})),i.d(t,"combineReducers",(function(){return l})),i.d(t,"compose",(function(){return m})),i.d(t,"createStore",(function(){return a}));var n=i(2),r=function(){return Math.random().toString(36).substring(7).split("").join(".")},o={INIT:"@@redux/INIT"+r(),REPLACE:"@@redux/REPLACE"+r(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+r()}};function s(e){if("object"!=typeof e||null===e)return!1;for(var t=e;null!==Object.getPrototypeOf(t);)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}function a(e,t,i){var r;if("function"==typeof t&&"function"==typeof i||"function"==typeof i&&"function"==typeof arguments[3])throw new Error("It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function.");if("function"==typeof t&&void 0===i&&(i=t,t=void 0),void 0!==i){if("function"!=typeof i)throw new Error("Expected the enhancer to be a function.");return i(a)(e,t)}if("function"!=typeof e)throw new Error("Expected the reducer to be a function.");var c=e,l=t,u=[],h=u,d=!1;function p(){h===u&&(h=u.slice())}function f(){if(d)throw new Error("You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");return l}function m(e){if("function"!=typeof e)throw new Error("Expected the listener to be a function.");if(d)throw new Error("You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api-reference/store#subscribe(listener) for more details.");var t=!0;return p(),h.push(e),function(){if(t){if(d)throw new Error("You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api-reference/store#subscribe(listener) for more details.");t=!1,p();var i=h.indexOf(e);h.splice(i,1)}}}function v(e){if(!s(e))throw new Error("Actions must be plain objects. Use custom middleware for async actions.");if(void 0===e.type)throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');if(d)throw new Error("Reducers may not dispatch actions.");try{d=!0,l=c(l,e)}finally{d=!1}for(var t=u=h,i=0;i<t.length;i++){(0,t[i])()}return e}return v({type:o.INIT}),(r={dispatch:v,subscribe:m,getState:f,replaceReducer:function(e){if("function"!=typeof e)throw new Error("Expected the nextReducer to be a function.");c=e,v({type:o.REPLACE})}})[n.a]=function(){var e,t=m;return(e={subscribe:function(e){if("object"!=typeof e||null===e)throw new TypeError("Expected the observer to be an object.");function i(){e.next&&e.next(f())}return i(),{unsubscribe:t(i)}}})[n.a]=function(){return this},e},r}function c(e,t){var i=t&&t.type;return"Given "+(i&&'action "'+String(i)+'"'||"an action")+', reducer "'+e+'" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.'}function l(e){for(var t=Object.keys(e),i={},n=0;n<t.length;n++){var r=t[n];0,"function"==typeof e[r]&&(i[r]=e[r])}var s,a=Object.keys(i);try{!function(e){Object.keys(e).forEach((function(t){var i=e[t];if(void 0===i(void 0,{type:o.INIT}))throw new Error('Reducer "'+t+"\" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.");if(void 0===i(void 0,{type:o.PROBE_UNKNOWN_ACTION()}))throw new Error('Reducer "'+t+"\" returned undefined when probed with a random type. Don't try to handle "+o.INIT+' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.')}))}(i)}catch(e){s=e}return function(e,t){if(void 0===e&&(e={}),s)throw s;for(var n=!1,r={},o=0;o<a.length;o++){var l=a[o],u=i[l],h=e[l],d=u(h,t);if(void 0===d){var p=c(l,t);throw new Error(p)}r[l]=d,n=n||d!==h}return n?r:e}}function u(e,t){return function(){return t(e.apply(this,arguments))}}function h(e,t){if("function"==typeof e)return u(e,t);if("object"!=typeof e||null===e)throw new Error("bindActionCreators expected an object or a function, instead received "+(null===e?"null":typeof e)+'. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');var i={};for(var n in e){var r=e[n];"function"==typeof r&&(i[n]=u(r,t))}return i}function d(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function p(e,t){var i=Object.keys(e);return Object.getOwnPropertySymbols&&i.push.apply(i,Object.getOwnPropertySymbols(e)),t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i}function f(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?p(i,!0).forEach((function(t){d(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):p(i).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function m(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return 0===t.length?function(e){return e}:1===t.length?t[0]:t.reduce((function(e,t){return function(){return e(t.apply(void 0,arguments))}}))}function v(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return function(e){return function(){var i=e.apply(void 0,arguments),n=function(){throw new Error("Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.")},r={getState:i.getState,dispatch:function(){return n.apply(void 0,arguments)}},o=t.map((function(e){return e(r)}));return f({},i,{dispatch:n=m.apply(void 0,o)(i.dispatch)})}}}},function(e,t,i){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var r=i(3),o=n(i(14)),s=n(i(15)),a=n(i(16)),c=n(i(17)),l=i(1);t.defaultState={groups:[],items:[],choices:[],loading:!1};var u=r.combineReducers({items:o.default,groups:s.default,choices:a.default,loading:c.default});t.default=function(e,i){var n=e;if("CLEAR_ALL"===i.type)n=t.defaultState;else if("RESET_TO"===i.type)return l.cloneObject(i.state);return u(n,i)}},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(1),r=function(){function e(e){var t=e.element,i=e.classNames;if(this.element=t,this.classNames=i,!(t instanceof HTMLInputElement||t instanceof HTMLSelectElement))throw new TypeError("Invalid element passed");this.isDisabled=!1}return Object.defineProperty(e.prototype,"isActive",{get:function(){return"active"===this.element.dataset.choice},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"dir",{get:function(){return this.element.dir},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"value",{get:function(){return this.element.value},set:function(e){this.element.value=e},enumerable:!0,configurable:!0}),e.prototype.conceal=function(){this.element.classList.add(this.classNames.input),this.element.hidden=!0,this.element.tabIndex=-1;var e=this.element.getAttribute("style");e&&this.element.setAttribute("data-choice-orig-style",e),this.element.setAttribute("data-choice","active")},e.prototype.reveal=function(){this.element.classList.remove(this.classNames.input),this.element.hidden=!1,this.element.removeAttribute("tabindex");var e=this.element.getAttribute("data-choice-orig-style");e?(this.element.removeAttribute("data-choice-orig-style"),this.element.setAttribute("style",e)):this.element.removeAttribute("style"),this.element.removeAttribute("data-choice"),this.element.value=this.element.value},e.prototype.enable=function(){this.element.removeAttribute("disabled"),this.element.disabled=!1,this.isDisabled=!1},e.prototype.disable=function(){this.element.setAttribute("disabled",""),this.element.disabled=!0,this.isDisabled=!0},e.prototype.triggerEvent=function(e,t){n.dispatchEvent(this.element,e,t)},e}();t.default=r},function(e,t,i){"use strict";function n(e){var t,i=e.Symbol;return"function"==typeof i?i.observable?t=i.observable:(t=i("observable"),i.observable=t):t="@@observable",t}i.d(t,"a",(function(){return n}))},function(e,t,i){e.exports=i(8)},function(e,t,i){"use strict";var n=this&&this.__spreadArrays||function(){for(var e=0,t=0,i=arguments.length;t<i;t++)e+=arguments[t].length;var n=Array(e),r=0;for(t=0;t<i;t++)for(var o=arguments[t],s=0,a=o.length;s<a;s++,r++)n[r]=o[s];return n},r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=r(i(9)),s=r(i(10)),a=r(i(11)),c=i(18),l=i(0),u=r(i(25)),h=i(26),d=i(27),p=i(28),f=i(29),m=i(1),v=i(4),_="-ms-scroll-limit"in document.documentElement.style&&"-ms-ime-align"in document.documentElement.style,g={},y=function(){function e(t,i){var r=this;void 0===t&&(t="[data-choice]"),void 0===i&&(i={}),this.config=s.default.all([l.DEFAULT_CONFIG,e.defaults.options,i],{arrayMerge:function(e,t){return n(t)}});var o=m.diff(this.config,l.DEFAULT_CONFIG);o.length&&console.warn("Unknown config option(s) passed",o.join(", "));var u="string"==typeof t?document.querySelector(t):t;if(!(u instanceof HTMLInputElement||u instanceof HTMLSelectElement))throw TypeError("Expected one of the following types text|select-one|select-multiple");if(this._isTextElement=u.type===l.TEXT_TYPE,this._isSelectOneElement=u.type===l.SELECT_ONE_TYPE,this._isSelectMultipleElement=u.type===l.SELECT_MULTIPLE_TYPE,this._isSelectElement=this._isSelectOneElement||this._isSelectMultipleElement,this.config.searchEnabled=this._isSelectMultipleElement||this.config.searchEnabled,["auto","always"].includes(""+this.config.renderSelectedChoices)||(this.config.renderSelectedChoices="auto"),i.addItemFilter&&"function"!=typeof i.addItemFilter){var h=i.addItemFilter instanceof RegExp?i.addItemFilter:new RegExp(i.addItemFilter);this.config.addItemFilter=h.test.bind(h)}if(this._isTextElement?this.passedElement=new c.WrappedInput({element:u,classNames:this.config.classNames,delimiter:this.config.delimiter}):this.passedElement=new c.WrappedSelect({element:u,classNames:this.config.classNames,template:function(e){return r._templates.option(e)}}),this.initialised=!1,this._store=new a.default,this._initialState=v.defaultState,this._currentState=v.defaultState,this._prevState=v.defaultState,this._currentValue="",this._canSearch=!!this.config.searchEnabled,this._isScrollingOnIe=!1,this._highlightPosition=0,this._wasTap=!0,this._placeholderValue=this._generatePlaceholderValue(),this._baseId=m.generateId(this.passedElement.element,"choices-"),this._direction=this.passedElement.dir,!this._direction){var d=window.getComputedStyle(this.passedElement.element).direction;d!==window.getComputedStyle(document.documentElement).direction&&(this._direction=d)}if(this._idNames={itemChoice:"item-choice"},this._isSelectElement&&(this._presetGroups=this.passedElement.optionGroups,this._presetOptions=this.passedElement.options),this._presetChoices=this.config.choices,this._presetItems=this.config.items,this.passedElement.value&&this._isTextElement){var p=this.passedElement.value.split(this.config.delimiter);this._presetItems=this._presetItems.concat(p)}if(this.passedElement.options&&this.passedElement.options.forEach((function(e){r._presetChoices.push({value:e.value,label:e.innerHTML,selected:!!e.selected,disabled:e.disabled||e.parentNode.disabled,placeholder:""===e.value||e.hasAttribute("placeholder"),customProperties:e.dataset["custom-properties"]})})),this._render=this._render.bind(this),this._onFocus=this._onFocus.bind(this),this._onBlur=this._onBlur.bind(this),this._onKeyUp=this._onKeyUp.bind(this),this._onKeyDown=this._onKeyDown.bind(this),this._onClick=this._onClick.bind(this),this._onTouchMove=this._onTouchMove.bind(this),this._onTouchEnd=this._onTouchEnd.bind(this),this._onMouseDown=this._onMouseDown.bind(this),this._onMouseOver=this._onMouseOver.bind(this),this._onFormReset=this._onFormReset.bind(this),this._onSelectKey=this._onSelectKey.bind(this),this._onEnterKey=this._onEnterKey.bind(this),this._onEscapeKey=this._onEscapeKey.bind(this),this._onDirectionKey=this._onDirectionKey.bind(this),this._onDeleteKey=this._onDeleteKey.bind(this),this.passedElement.isActive)return this.config.silent||console.warn("Trying to initialise Choices on element already initialised",{element:t}),void(this.initialised=!0);this.init()}return Object.defineProperty(e,"defaults",{get:function(){return Object.preventExtensions({get options(){return g},get templates(){return u.default}})},enumerable:!0,configurable:!0}),e.prototype.init=function(){if(!this.initialised){this._createTemplates(),this._createElements(),this._createStructure(),this._store.subscribe(this._render),this._render(),this._addEventListeners(),(!this.config.addItems||this.passedElement.element.hasAttribute("disabled"))&&this.disable(),this.initialised=!0;var e=this.config.callbackOnInit;e&&"function"==typeof e&&e.call(this)}},e.prototype.destroy=function(){this.initialised&&(this._removeEventListeners(),this.passedElement.reveal(),this.containerOuter.unwrap(this.passedElement.element),this.clearStore(),this._isSelectElement&&(this.passedElement.options=this._presetOptions),this._templates=u.default,this.initialised=!1)},e.prototype.enable=function(){return this.passedElement.isDisabled&&this.passedElement.enable(),this.containerOuter.isDisabled&&(this._addEventListeners(),this.input.enable(),this.containerOuter.enable()),this},e.prototype.disable=function(){return this.passedElement.isDisabled||this.passedElement.disable(),this.containerOuter.isDisabled||(this._removeEventListeners(),this.input.disable(),this.containerOuter.disable()),this},e.prototype.highlightItem=function(e,t){if(void 0===t&&(t=!0),!e||!e.id)return this;var i=e.id,n=e.groupId,r=void 0===n?-1:n,o=e.value,s=void 0===o?"":o,a=e.label,c=void 0===a?"":a,u=r>=0?this._store.getGroupById(r):null;return this._store.dispatch(d.highlightItem(i,!0)),t&&this.passedElement.triggerEvent(l.EVENTS.highlightItem,{id:i,value:s,label:c,groupValue:u&&u.value?u.value:null}),this},e.prototype.unhighlightItem=function(e){if(!e||!e.id)return this;var t=e.id,i=e.groupId,n=void 0===i?-1:i,r=e.value,o=void 0===r?"":r,s=e.label,a=void 0===s?"":s,c=n>=0?this._store.getGroupById(n):null;return this._store.dispatch(d.highlightItem(t,!1)),this.passedElement.triggerEvent(l.EVENTS.highlightItem,{id:t,value:o,label:a,groupValue:c&&c.value?c.value:null}),this},e.prototype.highlightAll=function(){var e=this;return this._store.items.forEach((function(t){return e.highlightItem(t)})),this},e.prototype.unhighlightAll=function(){var e=this;return this._store.items.forEach((function(t){return e.unhighlightItem(t)})),this},e.prototype.removeActiveItemsByValue=function(e){var t=this;return this._store.activeItems.filter((function(t){return t.value===e})).forEach((function(e){return t._removeItem(e)})),this},e.prototype.removeActiveItems=function(e){var t=this;return this._store.activeItems.filter((function(t){return t.id!==e})).forEach((function(e){return t._removeItem(e)})),this},e.prototype.removeHighlightedItems=function(e){var t=this;return void 0===e&&(e=!1),this._store.highlightedActiveItems.forEach((function(i){t._removeItem(i),e&&t._triggerChange(i.value)})),this},e.prototype.showDropdown=function(e){var t=this;return this.dropdown.isActive?this:(requestAnimationFrame((function(){t.dropdown.show(),t.containerOuter.open(t.dropdown.distanceFromTopWindow),!e&&t._canSearch&&t.input.focus(),t.passedElement.triggerEvent(l.EVENTS.showDropdown,{})})),this)},e.prototype.hideDropdown=function(e){var t=this;return this.dropdown.isActive?(requestAnimationFrame((function(){t.dropdown.hide(),t.containerOuter.close(),!e&&t._canSearch&&(t.input.removeActiveDescendant(),t.input.blur()),t.passedElement.triggerEvent(l.EVENTS.hideDropdown,{})})),this):this},e.prototype.getValue=function(e){void 0===e&&(e=!1);var t=this._store.activeItems.reduce((function(t,i){var n=e?i.value:i;return t.push(n),t}),[]);return this._isSelectOneElement?t[0]:t},e.prototype.setValue=function(e){var t=this;return this.initialised?(e.forEach((function(e){return t._setChoiceOrItem(e)})),this):this},e.prototype.setChoiceByValue=function(e){var t=this;return!this.initialised||this._isTextElement?this:((Array.isArray(e)?e:[e]).forEach((function(e){return t._findAndSelectChoiceByValue(e)})),this)},e.prototype.setChoices=function(e,t,i,n){var r=this;if(void 0===e&&(e=[]),void 0===t&&(t="value"),void 0===i&&(i="label"),void 0===n&&(n=!1),!this.initialised)throw new ReferenceError("setChoices was called on a non-initialized instance of Choices");if(!this._isSelectElement)throw new TypeError("setChoices can't be used with INPUT based Choices");if("string"!=typeof t||!t)throw new TypeError("value parameter must be a name of 'value' field in passed objects");if(n&&this.clearChoices(),"function"==typeof e){var o=e(this);if("function"==typeof Promise&&o instanceof Promise)return new Promise((function(e){return requestAnimationFrame(e)})).then((function(){return r._handleLoadingState(!0)})).then((function(){return o})).then((function(e){return r.setChoices(e,t,i,n)})).catch((function(e){r.config.silent||console.error(e)})).then((function(){return r._handleLoadingState(!1)})).then((function(){return r}));if(!Array.isArray(o))throw new TypeError(".setChoices first argument function must return either array of choices or Promise, got: "+typeof o);return this.setChoices(o,t,i,!1)}if(!Array.isArray(e))throw new TypeError(".setChoices must be called either with array of choices with a function resulting into Promise of array of choices");return this.containerOuter.removeLoadingState(),this._startLoading(),e.forEach((function(e){if(e.choices)r._addGroup({id:e.id?parseInt(""+e.id,10):null,group:e,valueKey:t,labelKey:i});else{var n=e;r._addChoice({value:n[t],label:n[i],isSelected:!!n.selected,isDisabled:!!n.disabled,placeholder:!!n.placeholder,customProperties:n.customProperties})}})),this._stopLoading(),this},e.prototype.clearChoices=function(){return this._store.dispatch(h.clearChoices()),this},e.prototype.clearStore=function(){return this._store.dispatch(f.clearAll()),this},e.prototype.clearInput=function(){var e=!this._isSelectOneElement;return this.input.clear(e),!this._isTextElement&&this._canSearch&&(this._isSearching=!1,this._store.dispatch(h.activateChoices(!0))),this},e.prototype._render=function(){if(!this._store.isLoading()){this._currentState=this._store.state;var e=this._currentState.choices!==this._prevState.choices||this._currentState.groups!==this._prevState.groups||this._currentState.items!==this._prevState.items,t=this._isSelectElement,i=this._currentState.items!==this._prevState.items;e&&(t&&this._renderChoices(),i&&this._renderItems(),this._prevState=this._currentState)}},e.prototype._renderChoices=function(){var e=this,t=this._store,i=t.activeGroups,n=t.activeChoices,r=document.createDocumentFragment();if(this.choiceList.clear(),this.config.resetScrollPosition&&requestAnimationFrame((function(){return e.choiceList.scrollToTop()})),i.length>=1&&!this._isSearching){var o=n.filter((function(e){return!0===e.placeholder&&-1===e.groupId}));o.length>=1&&(r=this._createChoicesFragment(o,r)),r=this._createGroupsFragment(i,n,r)}else n.length>=1&&(r=this._createChoicesFragment(n,r));if(r.childNodes&&r.childNodes.length>0){var s=this._store.activeItems,a=this._canAddItem(s,this.input.value);if(a.response)this.choiceList.append(r),this._highlightChoice();else{var c=this._getTemplate("notice",a.notice);this.choiceList.append(c)}}else{var l=void 0;c=void 0;this._isSearching?(c="function"==typeof this.config.noResultsText?this.config.noResultsText():this.config.noResultsText,l=this._getTemplate("notice",c,"no-results")):(c="function"==typeof this.config.noChoicesText?this.config.noChoicesText():this.config.noChoicesText,l=this._getTemplate("notice",c,"no-choices")),this.choiceList.append(l)}},e.prototype._renderItems=function(){var e=this._store.activeItems||[];this.itemList.clear();var t=this._createItemsFragment(e);t.childNodes&&this.itemList.append(t)},e.prototype._createGroupsFragment=function(e,t,i){var n=this;void 0===i&&(i=document.createDocumentFragment());return this.config.shouldSort&&e.sort(this.config.sorter),e.forEach((function(e){var r=function(e){return t.filter((function(t){return n._isSelectOneElement?t.groupId===e.id:t.groupId===e.id&&("always"===n.config.renderSelectedChoices||!t.selected)}))}(e);if(r.length>=1){var o=n._getTemplate("choiceGroup",e);i.appendChild(o),n._createChoicesFragment(r,i,!0)}})),i},e.prototype._createChoicesFragment=function(e,t,i){var r=this;void 0===t&&(t=document.createDocumentFragment()),void 0===i&&(i=!1);var o=this.config,s=o.renderSelectedChoices,a=o.searchResultLimit,c=o.renderChoiceLimit,l=this._isSearching?m.sortByScore:this.config.sorter,u=function(e){if("auto"!==s||(r._isSelectOneElement||!e.selected)){var i=r._getTemplate("choice",e,r.config.itemSelectText);t.appendChild(i)}},h=e;"auto"!==s||this._isSelectOneElement||(h=e.filter((function(e){return!e.selected})));var d=h.reduce((function(e,t){return t.placeholder?e.placeholderChoices.push(t):e.normalChoices.push(t),e}),{placeholderChoices:[],normalChoices:[]}),p=d.placeholderChoices,f=d.normalChoices;(this.config.shouldSort||this._isSearching)&&f.sort(l);var v=h.length,_=this._isSelectOneElement?n(p,f):f;this._isSearching?v=a:c&&c>0&&!i&&(v=c);for(var g=0;g<v;g+=1)_[g]&&u(_[g]);return t},e.prototype._createItemsFragment=function(e,t){var i=this;void 0===t&&(t=document.createDocumentFragment());var n=this.config,r=n.shouldSortItems,o=n.sorter,s=n.removeItemButton;r&&!this._isSelectOneElement&&e.sort(o),this._isTextElement?this.passedElement.value=e.map((function(e){return e.value})).join(this.config.delimiter):this.passedElement.options=e;return e.forEach((function(e){var n=i._getTemplate("item",e,s);t.appendChild(n)})),t},e.prototype._triggerChange=function(e){null!=e&&this.passedElement.triggerEvent(l.EVENTS.change,{value:e})},e.prototype._selectPlaceholderChoice=function(e){this._addItem({value:e.value,label:e.label,choiceId:e.id,groupId:e.groupId,placeholder:e.placeholder}),this._triggerChange(e.value)},e.prototype._handleButtonAction=function(e,t){if(e&&t&&this.config.removeItems&&this.config.removeItemButton){var i=t.parentNode&&t.parentNode.dataset.id,n=i&&e.find((function(e){return e.id===parseInt(i,10)}));n&&(this._removeItem(n),this._triggerChange(n.value),this._isSelectOneElement&&this._store.placeholderChoice&&this._selectPlaceholderChoice(this._store.placeholderChoice))}},e.prototype._handleItemAction=function(e,t,i){var n=this;if(void 0===i&&(i=!1),e&&t&&this.config.removeItems&&!this._isSelectOneElement){var r=t.dataset.id;e.forEach((function(e){e.id!==parseInt(""+r,10)||e.highlighted?!i&&e.highlighted&&n.unhighlightItem(e):n.highlightItem(e)})),this.input.focus()}},e.prototype._handleChoiceAction=function(e,t){if(e&&t){var i=t.dataset.id,n=i&&this._store.getChoiceById(i);if(n){var r=e[0]&&e[0].keyCode?e[0].keyCode:void 0,o=this.dropdown.isActive;if(n.keyCode=r,this.passedElement.triggerEvent(l.EVENTS.choice,{choice:n}),!n.selected&&!n.disabled)this._canAddItem(e,n.value).response&&(this._addItem({value:n.value,label:n.label,choiceId:n.id,groupId:n.groupId,customProperties:n.customProperties,placeholder:n.placeholder,keyCode:n.keyCode}),this._triggerChange(n.value));this.clearInput(),o&&this._isSelectOneElement&&(this.hideDropdown(!0),this.containerOuter.focus())}}},e.prototype._handleBackspace=function(e){if(this.config.removeItems&&e){var t=e[e.length-1],i=e.some((function(e){return e.highlighted}));this.config.editItems&&!i&&t?(this.input.value=t.value,this.input.setWidth(),this._removeItem(t),this._triggerChange(t.value)):(i||this.highlightItem(t,!1),this.removeHighlightedItems(!0))}},e.prototype._startLoading=function(){this._store.dispatch(f.setIsLoading(!0))},e.prototype._stopLoading=function(){this._store.dispatch(f.setIsLoading(!1))},e.prototype._handleLoadingState=function(e){void 0===e&&(e=!0);var t=this.itemList.getChild("."+this.config.classNames.placeholder);e?(this.disable(),this.containerOuter.addLoadingState(),this._isSelectOneElement?t?t.innerHTML=this.config.loadingText:(t=this._getTemplate("placeholder",this.config.loadingText))&&this.itemList.append(t):this.input.placeholder=this.config.loadingText):(this.enable(),this.containerOuter.removeLoadingState(),this._isSelectOneElement?t&&(t.innerHTML=this._placeholderValue||""):this.input.placeholder=this._placeholderValue||"")},e.prototype._handleSearch=function(e){if(e&&this.input.isFocussed){var t=this._store.choices,i=this.config,n=i.searchFloor,r=i.searchChoices,o=t.some((function(e){return!e.active}));if(e&&e.length>=n){var s=r?this._searchChoices(e):0;this.passedElement.triggerEvent(l.EVENTS.search,{value:e,resultCount:s})}else o&&(this._isSearching=!1,this._store.dispatch(h.activateChoices(!0)))}},e.prototype._canAddItem=function(e,t){var i=!0,n="function"==typeof this.config.addItemText?this.config.addItemText(t):this.config.addItemText;if(!this._isSelectOneElement){var r=m.existsInArray(e,t);this.config.maxItemCount>0&&this.config.maxItemCount<=e.length&&(i=!1,n="function"==typeof this.config.maxItemText?this.config.maxItemText(this.config.maxItemCount):this.config.maxItemText),!this.config.duplicateItemsAllowed&&r&&i&&(i=!1,n="function"==typeof this.config.uniqueItemText?this.config.uniqueItemText(t):this.config.uniqueItemText),this._isTextElement&&this.config.addItems&&i&&"function"==typeof this.config.addItemFilter&&!this.config.addItemFilter(t)&&(i=!1,n="function"==typeof this.config.customAddItemText?this.config.customAddItemText(t):this.config.customAddItemText)}return{response:i,notice:n}},e.prototype._searchChoices=function(e){var t="string"==typeof e?e.trim():e,i="string"==typeof this._currentValue?this._currentValue.trim():this._currentValue;if(t.length<1&&t===i+" ")return 0;var r=this._store.searchableChoices,s=t,a=n(this.config.searchFields),c=Object.assign(this.config.fuseOptions,{keys:a,includeMatches:!0}),l=new o.default(r,c).search(s);return this._currentValue=t,this._highlightPosition=0,this._isSearching=!0,this._store.dispatch(h.filterChoices(l)),l.length},e.prototype._addEventListeners=function(){var e=document.documentElement;e.addEventListener("touchend",this._onTouchEnd,!0),this.containerOuter.element.addEventListener("keydown",this._onKeyDown,!0),this.containerOuter.element.addEventListener("mousedown",this._onMouseDown,!0),e.addEventListener("click",this._onClick,{passive:!0}),e.addEventListener("touchmove",this._onTouchMove,{passive:!0}),this.dropdown.element.addEventListener("mouseover",this._onMouseOver,{passive:!0}),this._isSelectOneElement&&(this.containerOuter.element.addEventListener("focus",this._onFocus,{passive:!0}),this.containerOuter.element.addEventListener("blur",this._onBlur,{passive:!0})),this.input.element.addEventListener("keyup",this._onKeyUp,{passive:!0}),this.input.element.addEventListener("focus",this._onFocus,{passive:!0}),this.input.element.addEventListener("blur",this._onBlur,{passive:!0}),this.input.element.form&&this.input.element.form.addEventListener("reset",this._onFormReset,{passive:!0}),this.input.addEventListeners()},e.prototype._removeEventListeners=function(){var e=document.documentElement;e.removeEventListener("touchend",this._onTouchEnd,!0),this.containerOuter.element.removeEventListener("keydown",this._onKeyDown,!0),this.containerOuter.element.removeEventListener("mousedown",this._onMouseDown,!0),e.removeEventListener("click",this._onClick),e.removeEventListener("touchmove",this._onTouchMove),this.dropdown.element.removeEventListener("mouseover",this._onMouseOver),this._isSelectOneElement&&(this.containerOuter.element.removeEventListener("focus",this._onFocus),this.containerOuter.element.removeEventListener("blur",this._onBlur)),this.input.element.removeEventListener("keyup",this._onKeyUp),this.input.element.removeEventListener("focus",this._onFocus),this.input.element.removeEventListener("blur",this._onBlur),this.input.element.form&&this.input.element.form.removeEventListener("reset",this._onFormReset),this.input.removeEventListeners()},e.prototype._onKeyDown=function(e){var t=e.keyCode,i=this._store.activeItems,n=this.input.isFocussed,r=this.dropdown.isActive,o=this.itemList.hasChildren(),s=String.fromCharCode(t),a=/[a-zA-Z0-9-_ ]/.test(s),c=l.KEY_CODES.BACK_KEY,u=l.KEY_CODES.DELETE_KEY,h=l.KEY_CODES.ENTER_KEY,d=l.KEY_CODES.A_KEY,p=l.KEY_CODES.ESC_KEY,f=l.KEY_CODES.UP_KEY,m=l.KEY_CODES.DOWN_KEY,v=l.KEY_CODES.PAGE_UP_KEY,_=l.KEY_CODES.PAGE_DOWN_KEY;switch(this._isTextElement||r||!a||(this.showDropdown(),this.input.isFocussed||(this.input.value+=s.toLowerCase())),t){case d:return this._onSelectKey(e,o);case h:return this._onEnterKey(e,i,r);case p:return this._onEscapeKey(r);case f:case v:case m:case _:return this._onDirectionKey(e,r);case u:case c:return this._onDeleteKey(e,i,n)}},e.prototype._onKeyUp=function(e){var t=e.target,i=e.keyCode,n=this.input.value,r=this._store.activeItems,o=this._canAddItem(r,n),s=l.KEY_CODES.BACK_KEY,a=l.KEY_CODES.DELETE_KEY;if(this._isTextElement){if(o.notice&&n){var c=this._getTemplate("notice",o.notice);this.dropdown.element.innerHTML=c.outerHTML,this.showDropdown(!0)}else this.hideDropdown(!0)}else{var u=(i===s||i===a)&&t&&!t.value,d=!this._isTextElement&&this._isSearching,p=this._canSearch&&o.response;u&&d?(this._isSearching=!1,this._store.dispatch(h.activateChoices(!0))):p&&this._handleSearch(this.input.value)}this._canSearch=this.config.searchEnabled},e.prototype._onSelectKey=function(e,t){var i=e.ctrlKey,n=e.metaKey;(i||n)&&t&&(this._canSearch=!1,this.config.removeItems&&!this.input.value&&this.input.element===document.activeElement&&this.highlightAll())},e.prototype._onEnterKey=function(e,t,i){var n=e.target,r=l.KEY_CODES.ENTER_KEY,o=n&&n.hasAttribute("data-button");if(this._isTextElement&&n&&n.value){var s=this.input.value;this._canAddItem(t,s).response&&(this.hideDropdown(!0),this._addItem({value:s}),this._triggerChange(s),this.clearInput())}if(o&&(this._handleButtonAction(t,n),e.preventDefault()),i){var a=this.dropdown.getChild("."+this.config.classNames.highlightedState);a&&(t[0]&&(t[0].keyCode=r),this._handleChoiceAction(t,a)),e.preventDefault()}else this._isSelectOneElement&&(this.showDropdown(),e.preventDefault())},e.prototype._onEscapeKey=function(e){e&&(this.hideDropdown(!0),this.containerOuter.focus())},e.prototype._onDirectionKey=function(e,t){var i=e.keyCode,n=e.metaKey,r=l.KEY_CODES.DOWN_KEY,o=l.KEY_CODES.PAGE_UP_KEY,s=l.KEY_CODES.PAGE_DOWN_KEY;if(t||this._isSelectOneElement){this.showDropdown(),this._canSearch=!1;var a=i===r||i===s?1:-1,c=void 0;if(n||i===s||i===o)c=a>0?this.dropdown.element.querySelector("[data-choice-selectable]:last-of-type"):this.dropdown.element.querySelector("[data-choice-selectable]");else{var u=this.dropdown.element.querySelector("."+this.config.classNames.highlightedState);c=u?m.getAdjacentEl(u,"[data-choice-selectable]",a):this.dropdown.element.querySelector("[data-choice-selectable]")}c&&(m.isScrolledIntoView(c,this.choiceList.element,a)||this.choiceList.scrollToChildElement(c,a),this._highlightChoice(c)),e.preventDefault()}},e.prototype._onDeleteKey=function(e,t,i){var n=e.target;this._isSelectOneElement||n.value||!i||(this._handleBackspace(t),e.preventDefault())},e.prototype._onTouchMove=function(){this._wasTap&&(this._wasTap=!1)},e.prototype._onTouchEnd=function(e){var t=(e||e.touches[0]).target;this._wasTap&&this.containerOuter.element.contains(t)&&((t===this.containerOuter.element||t===this.containerInner.element)&&(this._isTextElement?this.input.focus():this._isSelectMultipleElement&&this.showDropdown()),e.stopPropagation());this._wasTap=!0},e.prototype._onMouseDown=function(e){var t=e.target;if(t instanceof HTMLElement){if(_&&this.choiceList.element.contains(t)){var i=this.choiceList.element.firstElementChild,n="ltr"===this._direction?e.offsetX>=i.offsetWidth:e.offsetX<i.offsetLeft;this._isScrollingOnIe=n}if(t!==this.input.element){var r=t.closest("[data-button],[data-item],[data-choice]");if(r instanceof HTMLElement){var o=e.shiftKey,s=this._store.activeItems,a=r.dataset;"button"in a?this._handleButtonAction(s,r):"item"in a?this._handleItemAction(s,r,o):"choice"in a&&this._handleChoiceAction(s,r)}e.preventDefault()}}},e.prototype._onMouseOver=function(e){var t=e.target;t instanceof HTMLElement&&"choice"in t.dataset&&this._highlightChoice(t)},e.prototype._onClick=function(e){var t=e.target;this.containerOuter.element.contains(t)?this.dropdown.isActive||this.containerOuter.isDisabled?this._isSelectOneElement&&t!==this.input.element&&!this.dropdown.element.contains(t)&&this.hideDropdown():this._isTextElement?document.activeElement!==this.input.element&&this.input.focus():(this.showDropdown(),this.containerOuter.focus()):(this._store.highlightedActiveItems.length>0&&this.unhighlightAll(),this.containerOuter.removeFocusState(),this.hideDropdown(!0))},e.prototype._onFocus=function(e){var t,i=this,n=e.target;n&&this.containerOuter.element.contains(n)&&((t={})[l.TEXT_TYPE]=function(){n===i.input.element&&i.containerOuter.addFocusState()},t[l.SELECT_ONE_TYPE]=function(){i.containerOuter.addFocusState(),n===i.input.element&&i.showDropdown(!0)},t[l.SELECT_MULTIPLE_TYPE]=function(){n===i.input.element&&(i.showDropdown(!0),i.containerOuter.addFocusState())},t)[this.passedElement.element.type]()},e.prototype._onBlur=function(e){var t,i=this,n=e.target;if(n&&this.containerOuter.element.contains(n)&&!this._isScrollingOnIe){var r=this._store.activeItems.some((function(e){return e.highlighted}));((t={})[l.TEXT_TYPE]=function(){n===i.input.element&&(i.containerOuter.removeFocusState(),r&&i.unhighlightAll(),i.hideDropdown(!0))},t[l.SELECT_ONE_TYPE]=function(){i.containerOuter.removeFocusState(),(n===i.input.element||n===i.containerOuter.element&&!i._canSearch)&&i.hideDropdown(!0)},t[l.SELECT_MULTIPLE_TYPE]=function(){n===i.input.element&&(i.containerOuter.removeFocusState(),i.hideDropdown(!0),r&&i.unhighlightAll())},t)[this.passedElement.element.type]()}else this._isScrollingOnIe=!1,this.input.element.focus()},e.prototype._onFormReset=function(){this._store.dispatch(f.resetTo(this._initialState))},e.prototype._highlightChoice=function(e){var t=this;void 0===e&&(e=null);var i=Array.from(this.dropdown.element.querySelectorAll("[data-choice-selectable]"));if(i.length){var n=e;Array.from(this.dropdown.element.querySelectorAll("."+this.config.classNames.highlightedState)).forEach((function(e){e.classList.remove(t.config.classNames.highlightedState),e.setAttribute("aria-selected","false")})),n?this._highlightPosition=i.indexOf(n):(n=i.length>this._highlightPosition?i[this._highlightPosition]:i[i.length-1])||(n=i[0]),n.classList.add(this.config.classNames.highlightedState),n.setAttribute("aria-selected","true"),this.passedElement.triggerEvent(l.EVENTS.highlightChoice,{el:n}),this.dropdown.isActive&&(this.input.setActiveDescendant(n.id),this.containerOuter.setActiveDescendant(n.id))}},e.prototype._addItem=function(e){var t=e.value,i=e.label,n=void 0===i?null:i,r=e.choiceId,o=void 0===r?-1:r,s=e.groupId,a=void 0===s?-1:s,c=e.customProperties,u=void 0===c?{}:c,h=e.placeholder,p=void 0!==h&&h,f=e.keyCode,m=void 0===f?-1:f,v="string"==typeof t?t.trim():t,_=this._store.items,g=n||v,y=o||-1,b=a>=0?this._store.getGroupById(a):null,E=_?_.length+1:1;this.config.prependValue&&(v=this.config.prependValue+v.toString()),this.config.appendValue&&(v+=this.config.appendValue.toString()),this._store.dispatch(d.addItem({value:v,label:g,id:E,choiceId:y,groupId:a,customProperties:u,placeholder:p,keyCode:m})),this._isSelectOneElement&&this.removeActiveItems(E),this.passedElement.triggerEvent(l.EVENTS.addItem,{id:E,value:v,label:g,customProperties:u,groupValue:b&&b.value?b.value:null,keyCode:m})},e.prototype._removeItem=function(e){var t=e.id,i=e.value,n=e.label,r=e.customProperties,o=e.choiceId,s=e.groupId,a=s&&s>=0?this._store.getGroupById(s):null;t&&o&&(this._store.dispatch(d.removeItem(t,o)),this.passedElement.triggerEvent(l.EVENTS.removeItem,{id:t,value:i,label:n,customProperties:r,groupValue:a&&a.value?a.value:null}))},e.prototype._addChoice=function(e){var t=e.value,i=e.label,n=void 0===i?null:i,r=e.isSelected,o=void 0!==r&&r,s=e.isDisabled,a=void 0!==s&&s,c=e.groupId,l=void 0===c?-1:c,u=e.customProperties,d=void 0===u?{}:u,p=e.placeholder,f=void 0!==p&&p,m=e.keyCode,v=void 0===m?-1:m;if(null!=t){var _=this._store.choices,g=n||t,y=_?_.length+1:1,b=this._baseId+"-"+this._idNames.itemChoice+"-"+y;this._store.dispatch(h.addChoice({id:y,groupId:l,elementId:b,value:t,label:g,disabled:a,customProperties:d,placeholder:f,keyCode:v})),o&&this._addItem({value:t,label:g,choiceId:y,customProperties:d,placeholder:f,keyCode:v})}},e.prototype._addGroup=function(e){var t=this,i=e.group,n=e.id,r=e.valueKey,o=void 0===r?"value":r,s=e.labelKey,a=void 0===s?"label":s,c=m.isType("Object",i)?i.choices:Array.from(i.getElementsByTagName("OPTION")),l=n||Math.floor((new Date).valueOf()*Math.random()),u=!!i.disabled&&i.disabled;if(c){this._store.dispatch(p.addGroup({value:i.label,id:l,active:!0,disabled:u}));c.forEach((function(e){var i=e.disabled||e.parentNode&&e.parentNode.disabled;t._addChoice({value:e[o],label:m.isType("Object",e)?e[a]:e.innerHTML,isSelected:e.selected,isDisabled:i,groupId:l,customProperties:e.customProperties,placeholder:e.placeholder})}))}else this._store.dispatch(p.addGroup({value:i.label,id:i.id,active:!1,disabled:i.disabled}))},e.prototype._getTemplate=function(e){for(var t,i=[],r=1;r<arguments.length;r++)i[r-1]=arguments[r];var o=this.config.classNames;return(t=this._templates[e]).call.apply(t,n([this,o],i))},e.prototype._createTemplates=function(){var e=this.config.callbackOnCreateTemplates,t={};e&&"function"==typeof e&&(t=e.call(this,m.strToEl)),this._templates=s.default(u.default,t)},e.prototype._createElements=function(){this.containerOuter=new c.Container({element:this._getTemplate("containerOuter",this._direction,this._isSelectElement,this._isSelectOneElement,this.config.searchEnabled,this.passedElement.element.type),classNames:this.config.classNames,type:this.passedElement.element.type,position:this.config.position}),this.containerInner=new c.Container({element:this._getTemplate("containerInner"),classNames:this.config.classNames,type:this.passedElement.element.type,position:this.config.position}),this.input=new c.Input({element:this._getTemplate("input",this._placeholderValue),classNames:this.config.classNames,type:this.passedElement.element.type,preventPaste:!this.config.paste}),this.choiceList=new c.List({element:this._getTemplate("choiceList",this._isSelectOneElement)}),this.itemList=new c.List({element:this._getTemplate("itemList",this._isSelectOneElement)}),this.dropdown=new c.Dropdown({element:this._getTemplate("dropdown"),classNames:this.config.classNames,type:this.passedElement.element.type})},e.prototype._createStructure=function(){this.passedElement.conceal(),this.containerInner.wrap(this.passedElement.element),this.containerOuter.wrap(this.containerInner.element),this._isSelectOneElement?this.input.placeholder=this.config.searchPlaceholderValue||"":this._placeholderValue&&(this.input.placeholder=this._placeholderValue,this.input.setWidth()),this.containerOuter.element.appendChild(this.containerInner.element),this.containerOuter.element.appendChild(this.dropdown.element),this.containerInner.element.appendChild(this.itemList.element),this._isTextElement||this.dropdown.element.appendChild(this.choiceList.element),this._isSelectOneElement?this.config.searchEnabled&&this.dropdown.element.insertBefore(this.input.element,this.dropdown.element.firstChild):this.containerInner.element.appendChild(this.input.element),this._isSelectElement&&(this._highlightPosition=0,this._isSearching=!1,this._startLoading(),this._presetGroups.length?this._addPredefinedGroups(this._presetGroups):this._addPredefinedChoices(this._presetChoices),this._stopLoading()),this._isTextElement&&this._addPredefinedItems(this._presetItems)},e.prototype._addPredefinedGroups=function(e){var t=this,i=this.passedElement.placeholderOption;i&&i.parentNode&&"SELECT"===i.parentNode.tagName&&this._addChoice({value:i.value,label:i.innerHTML,isSelected:i.selected,isDisabled:i.disabled,placeholder:!0}),e.forEach((function(e){return t._addGroup({group:e,id:e.id||null})}))},e.prototype._addPredefinedChoices=function(e){var t=this;this.config.shouldSort&&e.sort(this.config.sorter);var i=e.some((function(e){return e.selected})),n=e.findIndex((function(e){return void 0===e.disabled||!e.disabled}));e.forEach((function(e,r){var o=e.value,s=void 0===o?"":o,a=e.label,c=e.customProperties,l=e.placeholder;if(t._isSelectElement)if(e.choices)t._addGroup({group:e,id:e.id||null});else{var u=!!(t._isSelectOneElement&&!i&&r===n)||e.selected,h=e.disabled;console.log(h,e),t._addChoice({value:s,label:a,isSelected:!!u,isDisabled:!!h,placeholder:!!l,customProperties:c})}else t._addChoice({value:s,label:a,isSelected:!!e.selected,isDisabled:!!e.disabled,placeholder:!!e.placeholder,customProperties:c})}))},e.prototype._addPredefinedItems=function(e){var t=this;e.forEach((function(e){"object"==typeof e&&e.value&&t._addItem({value:e.value,label:e.label,choiceId:e.id,customProperties:e.customProperties,placeholder:e.placeholder}),"string"==typeof e&&t._addItem({value:e})}))},e.prototype._setChoiceOrItem=function(e){var t=this;({object:function(){e.value&&(t._isTextElement?t._addItem({value:e.value,label:e.label,choiceId:e.id,customProperties:e.customProperties,placeholder:e.placeholder}):t._addChoice({value:e.value,label:e.label,isSelected:!0,isDisabled:!1,customProperties:e.customProperties,placeholder:e.placeholder}))},string:function(){t._isTextElement?t._addItem({value:e}):t._addChoice({value:e,label:e,isSelected:!0,isDisabled:!1})}})[m.getType(e).toLowerCase()]()},e.prototype._findAndSelectChoiceByValue=function(e){var t=this,i=this._store.choices.find((function(i){return t.config.valueComparer(i.value,e)}));i&&!i.selected&&this._addItem({value:i.value,label:i.label,choiceId:i.id,groupId:i.groupId,customProperties:i.customProperties,placeholder:i.placeholder,keyCode:i.keyCode})},e.prototype._generatePlaceholderValue=function(){if(this._isSelectElement){var e=this.passedElement.placeholderOption;return e?e.text:null}var t=this.config,i=t.placeholder,n=t.placeholderValue,r=this.passedElement.element.dataset;if(i){if(n)return n;if(r.placeholder)return r.placeholder}return null},e}();t.default=y},function(e,t,i){
/*!
 * Fuse.js v3.4.6 - Lightweight fuzzy-search (http://fusejs.io)
 * 
 * Copyright (c) 2012-2017 Kirollos Risk (http://kiro.me)
 * All Rights Reserved. Apache Software License 2.0
 * 
 * http://www.apache.org/licenses/LICENSE-2.0
 */
e.exports=function(e){var t={};function i(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,i),r.l=!0,r.exports}return i.m=e,i.c=t,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=1)}([function(e,t){e.exports=function(e){return Array.isArray?Array.isArray(e):"[object Array]"===Object.prototype.toString.call(e)}},function(e,t,i){function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var o=i(2),s=i(8),a=i(0),c=function(){function e(t,i){var n=i.location,r=void 0===n?0:n,o=i.distance,a=void 0===o?100:o,c=i.threshold,l=void 0===c?.6:c,u=i.maxPatternLength,h=void 0===u?32:u,d=i.caseSensitive,p=void 0!==d&&d,f=i.tokenSeparator,m=void 0===f?/ +/g:f,v=i.findAllMatches,_=void 0!==v&&v,g=i.minMatchCharLength,y=void 0===g?1:g,b=i.id,E=void 0===b?null:b,S=i.keys,I=void 0===S?[]:S,O=i.shouldSort,C=void 0===O||O,T=i.getFn,w=void 0===T?s:T,A=i.sortFn,L=void 0===A?function(e,t){return e.score-t.score}:A,P=i.tokenize,D=void 0!==P&&P,x=i.matchAllTokens,N=void 0!==x&&x,M=i.includeMatches,j=void 0!==M&&M,k=i.includeScore,F=void 0!==k&&k,K=i.verbose,R=void 0!==K&&K;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.options={location:r,distance:a,threshold:l,maxPatternLength:h,isCaseSensitive:p,tokenSeparator:m,findAllMatches:_,minMatchCharLength:y,id:E,keys:I,includeMatches:j,includeScore:F,shouldSort:C,getFn:w,sortFn:L,verbose:R,tokenize:D,matchAllTokens:N},this.setCollection(t)}var t,i;return t=e,(i=[{key:"setCollection",value:function(e){return this.list=e,e}},{key:"search",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{limit:!1};this._log('---------\nSearch pattern: "'.concat(e,'"'));var i=this._prepareSearchers(e),n=i.tokenSearchers,r=i.fullSearcher,o=this._search(n,r),s=o.weights,a=o.results;return this._computeScore(s,a),this.options.shouldSort&&this._sort(a),t.limit&&"number"==typeof t.limit&&(a=a.slice(0,t.limit)),this._format(a)}},{key:"_prepareSearchers",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=[];if(this.options.tokenize)for(var i=e.split(this.options.tokenSeparator),n=0,r=i.length;n<r;n+=1)t.push(new o(i[n],this.options));return{tokenSearchers:t,fullSearcher:new o(e,this.options)}}},{key:"_search",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,i=this.list,n={},r=[];if("string"==typeof i[0]){for(var o=0,s=i.length;o<s;o+=1)this._analyze({key:"",value:i[o],record:o,index:o},{resultMap:n,results:r,tokenSearchers:e,fullSearcher:t});return{weights:null,results:r}}for(var a={},c=0,l=i.length;c<l;c+=1)for(var u=i[c],h=0,d=this.options.keys.length;h<d;h+=1){var p=this.options.keys[h];if("string"!=typeof p){if(a[p.name]={weight:1-p.weight||1},p.weight<=0||p.weight>1)throw new Error("Key weight has to be > 0 and <= 1");p=p.name}else a[p]={weight:1};this._analyze({key:p,value:this.options.getFn(u,p),record:u,index:c},{resultMap:n,results:r,tokenSearchers:e,fullSearcher:t})}return{weights:a,results:r}}},{key:"_analyze",value:function(e,t){var i=e.key,n=e.arrayIndex,r=void 0===n?-1:n,o=e.value,s=e.record,c=e.index,l=t.tokenSearchers,u=void 0===l?[]:l,h=t.fullSearcher,d=void 0===h?[]:h,p=t.resultMap,f=void 0===p?{}:p,m=t.results,v=void 0===m?[]:m;if(null!=o){var _=!1,g=-1,y=0;if("string"==typeof o){this._log("\nKey: ".concat(""===i?"-":i));var b=d.search(o);if(this._log('Full text: "'.concat(o,'", score: ').concat(b.score)),this.options.tokenize){for(var E=o.split(this.options.tokenSeparator),S=[],I=0;I<u.length;I+=1){var O=u[I];this._log('\nPattern: "'.concat(O.pattern,'"'));for(var C=!1,T=0;T<E.length;T+=1){var w=E[T],A=O.search(w),L={};A.isMatch?(L[w]=A.score,_=!0,C=!0,S.push(A.score)):(L[w]=1,this.options.matchAllTokens||S.push(1)),this._log('Token: "'.concat(w,'", score: ').concat(L[w]))}C&&(y+=1)}g=S[0];for(var P=S.length,D=1;D<P;D+=1)g+=S[D];g/=P,this._log("Token score average:",g)}var x=b.score;g>-1&&(x=(x+g)/2),this._log("Score average:",x);var N=!this.options.tokenize||!this.options.matchAllTokens||y>=u.length;if(this._log("\nCheck Matches: ".concat(N)),(_||b.isMatch)&&N){var M=f[c];M?M.output.push({key:i,arrayIndex:r,value:o,score:x,matchedIndices:b.matchedIndices}):(f[c]={item:s,output:[{key:i,arrayIndex:r,value:o,score:x,matchedIndices:b.matchedIndices}]},v.push(f[c]))}}else if(a(o))for(var j=0,k=o.length;j<k;j+=1)this._analyze({key:i,arrayIndex:j,value:o[j],record:s,index:c},{resultMap:f,results:v,tokenSearchers:u,fullSearcher:d})}}},{key:"_computeScore",value:function(e,t){this._log("\n\nComputing score:\n");for(var i=0,n=t.length;i<n;i+=1){for(var r=t[i].output,o=r.length,s=1,a=1,c=0;c<o;c+=1){var l=e?e[r[c].key].weight:1,u=(1===l?r[c].score:r[c].score||.001)*l;1!==l?a=Math.min(a,u):(r[c].nScore=u,s*=u)}t[i].score=1===a?s:a,this._log(t[i])}}},{key:"_sort",value:function(e){this._log("\n\nSorting...."),e.sort(this.options.sortFn)}},{key:"_format",value:function(e){var t=[];if(this.options.verbose){var i=[];this._log("\n\nOutput:\n\n",JSON.stringify(e,(function(e,t){if("object"===n(t)&&null!==t){if(-1!==i.indexOf(t))return;i.push(t)}return t}))),i=null}var r=[];this.options.includeMatches&&r.push((function(e,t){var i=e.output;t.matches=[];for(var n=0,r=i.length;n<r;n+=1){var o=i[n];if(0!==o.matchedIndices.length){var s={indices:o.matchedIndices,value:o.value};o.key&&(s.key=o.key),o.hasOwnProperty("arrayIndex")&&o.arrayIndex>-1&&(s.arrayIndex=o.arrayIndex),t.matches.push(s)}}})),this.options.includeScore&&r.push((function(e,t){t.score=e.score}));for(var o=0,s=e.length;o<s;o+=1){var a=e[o];if(this.options.id&&(a.item=this.options.getFn(a.item,this.options.id)[0]),r.length){for(var c={item:a.item},l=0,u=r.length;l<u;l+=1)r[l](a,c);t.push(c)}else t.push(a.item)}return t}},{key:"_log",value:function(){var e;this.options.verbose&&(e=console).log.apply(e,arguments)}}])&&r(t.prototype,i),e}();e.exports=c},function(e,t,i){function n(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var r=i(3),o=i(4),s=i(7),a=function(){function e(t,i){var n=i.location,r=void 0===n?0:n,o=i.distance,a=void 0===o?100:o,c=i.threshold,l=void 0===c?.6:c,u=i.maxPatternLength,h=void 0===u?32:u,d=i.isCaseSensitive,p=void 0!==d&&d,f=i.tokenSeparator,m=void 0===f?/ +/g:f,v=i.findAllMatches,_=void 0!==v&&v,g=i.minMatchCharLength,y=void 0===g?1:g;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.options={location:r,distance:a,threshold:l,maxPatternLength:h,isCaseSensitive:p,tokenSeparator:m,findAllMatches:_,minMatchCharLength:y},this.pattern=this.options.isCaseSensitive?t:t.toLowerCase(),this.pattern.length<=h&&(this.patternAlphabet=s(this.pattern))}var t,i;return t=e,(i=[{key:"search",value:function(e){if(this.options.isCaseSensitive||(e=e.toLowerCase()),this.pattern===e)return{isMatch:!0,score:0,matchedIndices:[[0,e.length-1]]};var t=this.options,i=t.maxPatternLength,n=t.tokenSeparator;if(this.pattern.length>i)return r(e,this.pattern,n);var s=this.options,a=s.location,c=s.distance,l=s.threshold,u=s.findAllMatches,h=s.minMatchCharLength;return o(e,this.pattern,this.patternAlphabet,{location:a,distance:c,threshold:l,findAllMatches:u,minMatchCharLength:h})}}])&&n(t.prototype,i),e}();e.exports=a},function(e,t){var i=/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g;e.exports=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:/ +/g,r=new RegExp(t.replace(i,"\\$&").replace(n,"|")),o=e.match(r),s=!!o,a=[];if(s)for(var c=0,l=o.length;c<l;c+=1){var u=o[c];a.push([e.indexOf(u),u.length-1])}return{score:s?.5:1,isMatch:s,matchedIndices:a}}},function(e,t,i){var n=i(5),r=i(6);e.exports=function(e,t,i,o){for(var s=o.location,a=void 0===s?0:s,c=o.distance,l=void 0===c?100:c,u=o.threshold,h=void 0===u?.6:u,d=o.findAllMatches,p=void 0!==d&&d,f=o.minMatchCharLength,m=void 0===f?1:f,v=a,_=e.length,g=h,y=e.indexOf(t,v),b=t.length,E=[],S=0;S<_;S+=1)E[S]=0;if(-1!==y){var I=n(t,{errors:0,currentLocation:y,expectedLocation:v,distance:l});if(g=Math.min(I,g),-1!==(y=e.lastIndexOf(t,v+b))){var O=n(t,{errors:0,currentLocation:y,expectedLocation:v,distance:l});g=Math.min(O,g)}}y=-1;for(var C=[],T=1,w=b+_,A=1<<(b<=31?b-1:30),L=0;L<b;L+=1){for(var P=0,D=w;P<D;)n(t,{errors:L,currentLocation:v+D,expectedLocation:v,distance:l})<=g?P=D:w=D,D=Math.floor((w-P)/2+P);w=D;var x=Math.max(1,v-D+1),N=p?_:Math.min(v+D,_)+b,M=Array(N+2);M[N+1]=(1<<L)-1;for(var j=N;j>=x;j-=1){var k=j-1,F=i[e.charAt(k)];if(F&&(E[k]=1),M[j]=(M[j+1]<<1|1)&F,0!==L&&(M[j]|=(C[j+1]|C[j])<<1|1|C[j+1]),M[j]&A&&(T=n(t,{errors:L,currentLocation:k,expectedLocation:v,distance:l}))<=g){if(g=T,(y=k)<=v)break;x=Math.max(1,2*v-y)}}if(n(t,{errors:L+1,currentLocation:v,expectedLocation:v,distance:l})>g)break;C=M}return{isMatch:y>=0,score:0===T?.001:T,matchedIndices:r(E,m)}}},function(e,t){e.exports=function(e,t){var i=t.errors,n=void 0===i?0:i,r=t.currentLocation,o=void 0===r?0:r,s=t.expectedLocation,a=void 0===s?0:s,c=t.distance,l=void 0===c?100:c,u=n/e.length,h=Math.abs(a-o);return l?u+h/l:h?1:u}},function(e,t){e.exports=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,i=[],n=-1,r=-1,o=0,s=e.length;o<s;o+=1){var a=e[o];a&&-1===n?n=o:a||-1===n||((r=o-1)-n+1>=t&&i.push([n,r]),n=-1)}return e[o-1]&&o-n>=t&&i.push([n,o-1]),i}},function(e,t){e.exports=function(e){for(var t={},i=e.length,n=0;n<i;n+=1)t[e.charAt(n)]=0;for(var r=0;r<i;r+=1)t[e.charAt(r)]|=1<<i-r-1;return t}},function(e,t,i){var n=i(0);e.exports=function(e,t){return function e(t,i,r){if(i){var o=i.indexOf("."),s=i,a=null;-1!==o&&(s=i.slice(0,o),a=i.slice(o+1));var c=t[s];if(null!=c)if(a||"string"!=typeof c&&"number"!=typeof c)if(n(c))for(var l=0,u=c.length;l<u;l+=1)e(c[l],a,r);else a&&e(c,a,r);else r.push(c.toString())}else r.push(t);return r}(e,t,[])}}])},function(e,t,i){"use strict";var n=function(e){return function(e){return!!e&&"object"==typeof e}(e)&&!function(e){var t=Object.prototype.toString.call(e);return"[object RegExp]"===t||"[object Date]"===t||function(e){return e.$$typeof===r}(e)}(e)};var r="function"==typeof Symbol&&Symbol.for?Symbol.for("react.element"):60103;function o(e,t){return!1!==t.clone&&t.isMergeableObject(e)?l((i=e,Array.isArray(i)?[]:{}),e,t):e;var i}function s(e,t,i){return e.concat(t).map((function(e){return o(e,i)}))}function a(e){return Object.keys(e).concat(function(e){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e).filter((function(t){return e.propertyIsEnumerable(t)})):[]}(e))}function c(e,t,i){var n={};return i.isMergeableObject(e)&&a(e).forEach((function(t){n[t]=o(e[t],i)})),a(t).forEach((function(r){(function(e,t){try{return t in e&&!(Object.hasOwnProperty.call(e,t)&&Object.propertyIsEnumerable.call(e,t))}catch(e){return!1}})(e,r)||(i.isMergeableObject(t[r])&&e[r]?n[r]=function(e,t){if(!t.customMerge)return l;var i=t.customMerge(e);return"function"==typeof i?i:l}(r,i)(e[r],t[r],i):n[r]=o(t[r],i))})),n}function l(e,t,i){(i=i||{}).arrayMerge=i.arrayMerge||s,i.isMergeableObject=i.isMergeableObject||n,i.cloneUnlessOtherwiseSpecified=o;var r=Array.isArray(t);return r===Array.isArray(e)?r?i.arrayMerge(e,t,i):c(e,t,i):o(t,i)}l.all=function(e,t){if(!Array.isArray(e))throw new Error("first argument should be an array");return e.reduce((function(e,i){return l(e,i,t)}),{})};var u=l;e.exports=u},function(e,t,i){"use strict";var n=this&&this.__spreadArrays||function(){for(var e=0,t=0,i=arguments.length;t<i;t++)e+=arguments[t].length;var n=Array(e),r=0;for(t=0;t<i;t++)for(var o=arguments[t],s=0,a=o.length;s<a;s++,r++)n[r]=o[s];return n},r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=i(3),s=r(i(4)),a=function(){function e(){this._store=o.createStore(s.default,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__())}return e.prototype.subscribe=function(e){this._store.subscribe(e)},e.prototype.dispatch=function(e){this._store.dispatch(e)},Object.defineProperty(e.prototype,"state",{get:function(){return this._store.getState()},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"items",{get:function(){return this.state.items},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"activeItems",{get:function(){return this.items.filter((function(e){return!0===e.active}))},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"highlightedActiveItems",{get:function(){return this.items.filter((function(e){return e.active&&e.highlighted}))},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"choices",{get:function(){return this.state.choices},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"activeChoices",{get:function(){return this.choices.filter((function(e){return!0===e.active}))},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"selectableChoices",{get:function(){return this.choices.filter((function(e){return!0!==e.disabled}))},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"searchableChoices",{get:function(){return this.selectableChoices.filter((function(e){return!0!==e.placeholder}))},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"placeholderChoice",{get:function(){return n(this.choices).reverse().find((function(e){return!0===e.placeholder}))},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"groups",{get:function(){return this.state.groups},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"activeGroups",{get:function(){var e=this.groups,t=this.choices;return e.filter((function(e){var i=!0===e.active&&!1===e.disabled,n=t.some((function(e){return!0===e.active&&!1===e.disabled}));return i&&n}),[])},enumerable:!0,configurable:!0}),e.prototype.isLoading=function(){return this.state.loading},e.prototype.getChoiceById=function(e){return this.activeChoices.find((function(t){return t.id===parseInt(e,10)}))},e.prototype.getGroupById=function(e){return this.groups.find((function(t){return t.id===e}))},e}();t.default=a},function(e,t){var i;i=function(){return this}();try{i=i||new Function("return this")()}catch(e){"object"==typeof window&&(i=window)}e.exports=i},function(e,t){e.exports=function(e){if(!e.webpackPolyfill){var t=Object.create(e);t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),Object.defineProperty(t,"exports",{enumerable:!0}),t.webpackPolyfill=1}return t}},function(e,t,i){"use strict";var n=this&&this.__spreadArrays||function(){for(var e=0,t=0,i=arguments.length;t<i;t++)e+=arguments[t].length;var n=Array(e),r=0;for(t=0;t<i;t++)for(var o=arguments[t],s=0,a=o.length;s<a;s++,r++)n[r]=o[s];return n};Object.defineProperty(t,"__esModule",{value:!0}),t.defaultState=[],t.default=function(e,i){switch(void 0===e&&(e=t.defaultState),i.type){case"ADD_ITEM":var r=i;return n(e,[{id:r.id,choiceId:r.choiceId,groupId:r.groupId,value:r.value,label:r.label,active:!0,highlighted:!1,customProperties:r.customProperties,placeholder:r.placeholder||!1,keyCode:null}]).map((function(e){var t=e;return t.highlighted=!1,t}));case"REMOVE_ITEM":return e.map((function(e){var t=e;return t.id===i.id&&(t.active=!1),t}));case"HIGHLIGHT_ITEM":var o=i;return e.map((function(e){var t=e;return t.id===o.id&&(t.highlighted=o.highlighted),t}));default:return e}}},function(e,t,i){"use strict";var n=this&&this.__spreadArrays||function(){for(var e=0,t=0,i=arguments.length;t<i;t++)e+=arguments[t].length;var n=Array(e),r=0;for(t=0;t<i;t++)for(var o=arguments[t],s=0,a=o.length;s<a;s++,r++)n[r]=o[s];return n};Object.defineProperty(t,"__esModule",{value:!0}),t.defaultState=[],t.default=function(e,i){switch(void 0===e&&(e=t.defaultState),i.type){case"ADD_GROUP":var r=i;return n(e,[{id:r.id,value:r.value,active:r.active,disabled:r.disabled}]);case"CLEAR_CHOICES":return[];default:return e}}},function(e,t,i){"use strict";var n=this&&this.__spreadArrays||function(){for(var e=0,t=0,i=arguments.length;t<i;t++)e+=arguments[t].length;var n=Array(e),r=0;for(t=0;t<i;t++)for(var o=arguments[t],s=0,a=o.length;s<a;s++,r++)n[r]=o[s];return n};Object.defineProperty(t,"__esModule",{value:!0}),t.defaultState=[],t.default=function(e,i){switch(void 0===e&&(e=t.defaultState),i.type){case"ADD_CHOICE":var r=i,o={id:r.id,elementId:r.elementId,groupId:r.groupId,value:r.value,label:r.label||r.value,disabled:r.disabled||!1,selected:!1,active:!0,score:9999,customProperties:r.customProperties,placeholder:r.placeholder||!1};return n(e,[o]);case"ADD_ITEM":var s=i;return s.choiceId>-1?e.map((function(e){var t=e;return t.id===parseInt(""+s.choiceId,10)&&(t.selected=!0),t})):e;case"REMOVE_ITEM":var a=i;return a.choiceId&&a.choiceId>-1?e.map((function(e){var t=e;return t.id===parseInt(""+a.choiceId,10)&&(t.selected=!1),t})):e;case"FILTER_CHOICES":var c=i;return e.map((function(e){var t=e;return t.active=c.results.some((function(e){var i=e.item,n=e.score;return i.id===t.id&&(t.score=n,!0)})),t}));case"ACTIVATE_CHOICES":var l=i;return e.map((function(e){var t=e;return t.active=l.active,t}));case"CLEAR_CHOICES":return t.defaultState;default:return e}}},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.defaultState=!1;t.default=function(e,i){switch(void 0===e&&(e=t.defaultState),i.type){case"SET_IS_LOADING":return i.isLoading;default:return e}}},function(e,t,i){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var r=n(i(19));t.Dropdown=r.default;var o=n(i(20));t.Container=o.default;var s=n(i(21));t.Input=s.default;var a=n(i(22));t.List=a.default;var c=n(i(23));t.WrappedInput=c.default;var l=n(i(24));t.WrappedSelect=l.default},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e){var t=e.element,i=e.type,n=e.classNames;this.element=t,this.classNames=n,this.type=i,this.isActive=!1}return Object.defineProperty(e.prototype,"distanceFromTopWindow",{get:function(){return this.element.getBoundingClientRect().bottom},enumerable:!0,configurable:!0}),e.prototype.getChild=function(e){return this.element.querySelector(e)},e.prototype.show=function(){return this.element.classList.add(this.classNames.activeState),this.element.setAttribute("aria-expanded","true"),this.isActive=!0,this},e.prototype.hide=function(){return this.element.classList.remove(this.classNames.activeState),this.element.setAttribute("aria-expanded","false"),this.isActive=!1,this},e}();t.default=n},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(1),r=i(0),o=function(){function e(e){var t=e.element,i=e.type,n=e.classNames,r=e.position;this.element=t,this.classNames=n,this.type=i,this.position=r,this.isOpen=!1,this.isFlipped=!1,this.isFocussed=!1,this.isDisabled=!1,this.isLoading=!1,this._onFocus=this._onFocus.bind(this),this._onBlur=this._onBlur.bind(this)}return e.prototype.addEventListeners=function(){this.element.addEventListener("focus",this._onFocus),this.element.addEventListener("blur",this._onBlur)},e.prototype.removeEventListeners=function(){this.element.removeEventListener("focus",this._onFocus),this.element.removeEventListener("blur",this._onBlur)},e.prototype.shouldFlip=function(e){if("number"!=typeof e)return!1;var t=!1;return"auto"===this.position?t=!window.matchMedia("(min-height: "+(e+1)+"px)").matches:"top"===this.position&&(t=!0),t},e.prototype.setActiveDescendant=function(e){this.element.setAttribute("aria-activedescendant",e)},e.prototype.removeActiveDescendant=function(){this.element.removeAttribute("aria-activedescendant")},e.prototype.open=function(e){this.element.classList.add(this.classNames.openState),this.element.setAttribute("aria-expanded","true"),this.isOpen=!0,this.shouldFlip(e)&&(this.element.classList.add(this.classNames.flippedState),this.isFlipped=!0)},e.prototype.close=function(){this.element.classList.remove(this.classNames.openState),this.element.setAttribute("aria-expanded","false"),this.removeActiveDescendant(),this.isOpen=!1,this.isFlipped&&(this.element.classList.remove(this.classNames.flippedState),this.isFlipped=!1)},e.prototype.focus=function(){this.isFocussed||this.element.focus()},e.prototype.addFocusState=function(){this.element.classList.add(this.classNames.focusState)},e.prototype.removeFocusState=function(){this.element.classList.remove(this.classNames.focusState)},e.prototype.enable=function(){this.element.classList.remove(this.classNames.disabledState),this.element.removeAttribute("aria-disabled"),this.type===r.SELECT_ONE_TYPE&&this.element.setAttribute("tabindex","0"),this.isDisabled=!1},e.prototype.disable=function(){this.element.classList.add(this.classNames.disabledState),this.element.setAttribute("aria-disabled","true"),this.type===r.SELECT_ONE_TYPE&&this.element.setAttribute("tabindex","-1"),this.isDisabled=!0},e.prototype.wrap=function(e){n.wrap(e,this.element)},e.prototype.unwrap=function(e){this.element.parentNode&&(this.element.parentNode.insertBefore(e,this.element),this.element.parentNode.removeChild(this.element))},e.prototype.addLoadingState=function(){this.element.classList.add(this.classNames.loadingState),this.element.setAttribute("aria-busy","true"),this.isLoading=!0},e.prototype.removeLoadingState=function(){this.element.classList.remove(this.classNames.loadingState),this.element.removeAttribute("aria-busy"),this.isLoading=!1},e.prototype._onFocus=function(){this.isFocussed=!0},e.prototype._onBlur=function(){this.isFocussed=!1},e}();t.default=o},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(1),r=i(0),o=function(){function e(e){var t=e.element,i=e.type,n=e.classNames,r=e.preventPaste;this.element=t,this.type=i,this.classNames=n,this.preventPaste=r,this.isFocussed=this.element.isEqualNode(document.activeElement),this.isDisabled=t.disabled,this._onPaste=this._onPaste.bind(this),this._onInput=this._onInput.bind(this),this._onFocus=this._onFocus.bind(this),this._onBlur=this._onBlur.bind(this)}return Object.defineProperty(e.prototype,"placeholder",{set:function(e){this.element.placeholder=e},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"value",{get:function(){return n.sanitise(this.element.value)},set:function(e){this.element.value=e},enumerable:!0,configurable:!0}),e.prototype.addEventListeners=function(){this.element.addEventListener("paste",this._onPaste),this.element.addEventListener("input",this._onInput,{passive:!0}),this.element.addEventListener("focus",this._onFocus,{passive:!0}),this.element.addEventListener("blur",this._onBlur,{passive:!0})},e.prototype.removeEventListeners=function(){this.element.removeEventListener("input",this._onInput),this.element.removeEventListener("paste",this._onPaste),this.element.removeEventListener("focus",this._onFocus),this.element.removeEventListener("blur",this._onBlur)},e.prototype.enable=function(){this.element.removeAttribute("disabled"),this.isDisabled=!1},e.prototype.disable=function(){this.element.setAttribute("disabled",""),this.isDisabled=!0},e.prototype.focus=function(){this.isFocussed||this.element.focus()},e.prototype.blur=function(){this.isFocussed&&this.element.blur()},e.prototype.clear=function(e){return void 0===e&&(e=!0),this.element.value&&(this.element.value=""),e&&this.setWidth(),this},e.prototype.setWidth=function(){var e=this.element,t=e.style,i=e.value,n=e.placeholder;t.minWidth=n.length+1+"ch",t.width=i.length+1+"ch"},e.prototype.setActiveDescendant=function(e){this.element.setAttribute("aria-activedescendant",e)},e.prototype.removeActiveDescendant=function(){this.element.removeAttribute("aria-activedescendant")},e.prototype._onInput=function(){this.type!==r.SELECT_ONE_TYPE&&this.setWidth()},e.prototype._onPaste=function(e){this.preventPaste&&e.preventDefault()},e.prototype._onFocus=function(){this.isFocussed=!0},e.prototype._onBlur=function(){this.isFocussed=!1},e}();t.default=o},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(0),r=function(){function e(e){var t=e.element;this.element=t,this.scrollPos=this.element.scrollTop,this.height=this.element.offsetHeight}return e.prototype.clear=function(){this.element.innerHTML=""},e.prototype.append=function(e){this.element.appendChild(e)},e.prototype.getChild=function(e){return this.element.querySelector(e)},e.prototype.hasChildren=function(){return this.element.hasChildNodes()},e.prototype.scrollToTop=function(){this.element.scrollTop=0},e.prototype.scrollToChildElement=function(e,t){var i=this;if(e){var n=this.element.offsetHeight,r=this.element.scrollTop+n,o=e.offsetHeight,s=e.offsetTop+o,a=t>0?this.element.scrollTop+s-r:e.offsetTop;requestAnimationFrame((function(){i._animateScroll(a,t)}))}},e.prototype._scrollDown=function(e,t,i){var n=(i-e)/t,r=n>1?n:1;this.element.scrollTop=e+r},e.prototype._scrollUp=function(e,t,i){var n=(e-i)/t,r=n>1?n:1;this.element.scrollTop=e-r},e.prototype._animateScroll=function(e,t){var i=this,r=n.SCROLLING_SPEED,o=this.element.scrollTop,s=!1;t>0?(this._scrollDown(o,r,e),o<e&&(s=!0)):(this._scrollUp(o,r,e),o>e&&(s=!0)),s&&requestAnimationFrame((function(){i._animateScroll(e,t)}))},e}();t.default=r},function(e,t,i){"use strict";var n,r=this&&this.__extends||(n=function(e,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var i in t)t.hasOwnProperty(i)&&(e[i]=t[i])})(e,t)},function(e,t){function i(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(i.prototype=t.prototype,new i)}),o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var s=function(e){function t(t){var i=t.element,n=t.classNames,r=t.delimiter,o=e.call(this,{element:i,classNames:n})||this;return o.delimiter=r,o}return r(t,e),Object.defineProperty(t.prototype,"value",{get:function(){return this.element.value},set:function(e){this.element.setAttribute("value",e),this.element.value=e},enumerable:!0,configurable:!0}),t}(o(i(5)).default);t.default=s},function(e,t,i){"use strict";var n,r=this&&this.__extends||(n=function(e,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var i in t)t.hasOwnProperty(i)&&(e[i]=t[i])})(e,t)},function(e,t){function i(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(i.prototype=t.prototype,new i)}),o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var s=function(e){function t(t){var i=t.element,n=t.classNames,r=t.template,o=e.call(this,{element:i,classNames:n})||this;return o.template=r,o}return r(t,e),Object.defineProperty(t.prototype,"placeholderOption",{get:function(){return this.element.querySelector('option[value=""]')||this.element.querySelector("option[placeholder]")},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"optionGroups",{get:function(){return Array.from(this.element.getElementsByTagName("OPTGROUP"))},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"options",{get:function(){return Array.from(this.element.options)},set:function(e){var t=this,i=document.createDocumentFragment();e.forEach((function(e){return n=e,r=t.template(n),void i.appendChild(r);var n,r})),this.appendDocFragment(i)},enumerable:!0,configurable:!0}),t.prototype.appendDocFragment=function(e){this.element.innerHTML="",this.element.appendChild(e)},t}(o(i(5)).default);t.default=s},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={containerOuter:function(e,t,i,n,r,o){var s=e.containerOuter,a=Object.assign(document.createElement("div"),{className:s});return a.dataset.type=o,t&&(a.dir=t),n&&(a.tabIndex=0),i&&(a.setAttribute("role",r?"combobox":"listbox"),r&&a.setAttribute("aria-autocomplete","list")),a.setAttribute("aria-haspopup","true"),a.setAttribute("aria-expanded","false"),a},containerInner:function(e){var t=e.containerInner;return Object.assign(document.createElement("div"),{className:t})},itemList:function(e,t){var i=e.list,n=e.listSingle,r=e.listItems;return Object.assign(document.createElement("div"),{className:i+" "+(t?n:r)})},placeholder:function(e,t){var i=e.placeholder;return Object.assign(document.createElement("div"),{className:i,innerHTML:t})},item:function(e,t,i){var n=e.item,r=e.button,o=e.highlightedState,s=e.itemSelectable,a=e.placeholder,c=t.id,l=t.value,u=t.label,h=t.customProperties,d=t.active,p=t.disabled,f=t.highlighted,m=t.placeholder,v=Object.assign(document.createElement("div"),{className:n,innerHTML:u});if(Object.assign(v.dataset,{item:"",id:c,value:l,customProperties:h}),d&&v.setAttribute("aria-selected","true"),p&&v.setAttribute("aria-disabled","true"),m&&v.classList.add(a),v.classList.add(f?o:s),i){p&&v.classList.remove(s),v.dataset.deletable="";var _=Object.assign(document.createElement("button"),{type:"button",className:r,innerHTML:"Remove item"});_.setAttribute("aria-label","Remove item: '"+l+"'"),_.dataset.button="",v.appendChild(_)}return v},choiceList:function(e,t){var i=e.list,n=Object.assign(document.createElement("div"),{className:i});return t||n.setAttribute("aria-multiselectable","true"),n.setAttribute("role","listbox"),n},choiceGroup:function(e,t){var i=e.group,n=e.groupHeading,r=e.itemDisabled,o=t.id,s=t.value,a=t.disabled,c=Object.assign(document.createElement("div"),{className:i+" "+(a?r:"")});return c.setAttribute("role","group"),Object.assign(c.dataset,{group:"",id:o,value:s}),a&&c.setAttribute("aria-disabled","true"),c.appendChild(Object.assign(document.createElement("div"),{className:n,innerHTML:s})),c},choice:function(e,t,i){var n=e.item,r=e.itemChoice,o=e.itemSelectable,s=e.selectedState,a=e.itemDisabled,c=e.placeholder,l=t.id,u=t.value,h=t.label,d=t.groupId,p=t.elementId,f=t.disabled,m=t.selected,v=t.placeholder,_=Object.assign(document.createElement("div"),{id:p,innerHTML:h,className:n+" "+r});return m&&_.classList.add(s),v&&_.classList.add(c),_.setAttribute("role",d&&d>0?"treeitem":"option"),Object.assign(_.dataset,{choice:"",id:l,value:u,selectText:i}),f?(_.classList.add(a),_.dataset.choiceDisabled="",_.setAttribute("aria-disabled","true")):(_.classList.add(o),_.dataset.choiceSelectable=""),_},input:function(e,t){var i=e.input,n=e.inputCloned,r=Object.assign(document.createElement("input"),{type:"text",className:i+" "+n,autocomplete:"off",autocapitalize:"off",spellcheck:!1});return r.setAttribute("role","textbox"),r.setAttribute("aria-autocomplete","list"),r.setAttribute("aria-label",t),r},dropdown:function(e){var t=e.list,i=e.listDropdown,n=document.createElement("div");return n.classList.add(t,i),n.setAttribute("aria-expanded","false"),n},notice:function(e,t,i){var n=e.item,r=e.itemChoice,o=e.noResults,s=e.noChoices;void 0===i&&(i="");var a=[n,r];return"no-choices"===i?a.push(s):"no-results"===i&&a.push(o),Object.assign(document.createElement("div"),{innerHTML:t,className:a.join(" ")})},option:function(e){var t=e.label,i=e.value,n=e.customProperties,r=e.active,o=e.disabled,s=new Option(t,i,!1,r);return n&&(s.dataset.customProperties=""+n),s.disabled=!!o,s}};t.default=n},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(0);t.addChoice=function(e){var t=e.value,i=e.label,r=e.id,o=e.groupId,s=e.disabled,a=e.elementId,c=e.customProperties,l=e.placeholder,u=e.keyCode;return{type:n.ACTION_TYPES.ADD_CHOICE,value:t,label:i,id:r,groupId:o,disabled:s,elementId:a,customProperties:c,placeholder:l,keyCode:u}},t.filterChoices=function(e){return{type:n.ACTION_TYPES.FILTER_CHOICES,results:e}},t.activateChoices=function(e){return void 0===e&&(e=!0),{type:n.ACTION_TYPES.ACTIVATE_CHOICES,active:e}},t.clearChoices=function(){return{type:n.ACTION_TYPES.CLEAR_CHOICES}}},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(0);t.addItem=function(e){var t=e.value,i=e.label,r=e.id,o=e.choiceId,s=e.groupId,a=e.customProperties,c=e.placeholder,l=e.keyCode;return{type:n.ACTION_TYPES.ADD_ITEM,value:t,label:i,id:r,choiceId:o,groupId:s,customProperties:a,placeholder:c,keyCode:l}},t.removeItem=function(e,t){return{type:n.ACTION_TYPES.REMOVE_ITEM,id:e,choiceId:t}},t.highlightItem=function(e,t){return{type:n.ACTION_TYPES.HIGHLIGHT_ITEM,id:e,highlighted:t}}},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(0);t.addGroup=function(e){var t=e.value,i=e.id,r=e.active,o=e.disabled;return{type:n.ACTION_TYPES.ADD_GROUP,value:t,id:i,active:r,disabled:o}}},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(0);t.clearAll=function(){return{type:n.ACTION_TYPES.CLEAR_ALL}},t.resetTo=function(e){return{type:n.ACTION_TYPES.RESET_TO,state:e}},t.setIsLoading=function(e){return{type:n.ACTION_TYPES.SET_IS_LOADING,isLoading:e}}}]).default;;

//preloader
const preloader = document.querySelector('.container-preloader'),
    body = document.querySelector('body');
body.onload = function () {
    preloader.classList.add('hide');
    body.classList.add('ready');
}

document.addEventListener('DOMContentLoaded', function () {
    //intro swiper
    const a = new Swiper('#intro-swiper', {
        loop: true,
        speed: 600,
        autoplay: {
            delay: 5000
        }
    });
    // rooms swiper
    const b = new Swiper('.rooms-swiper', {
        loop: true,
        effect: 'fade',
        speed: 2000,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false
        }
    });
    //selects (choices) https://github.com/jshjohnson/Choices
    function initChoices() {
        const element = document.querySelector('.js-choice');
        const selectPeople = new Choices('#countPeople');
        const selectKids = new Choices('#countChild');
    }
    if (document.querySelector('#countPeople')) {
        initChoices();
    }
    //date (datepicker) http://t1m0n.name/air-datepicker/docs/index-ru.html
    function initDatepicker() {
        let date = new Date();
        let currentDate = `${getZero(date.getDate())}.${getZero(date.getMonth() + 1)}.${date.getFullYear()}`;
        let tomorrow = `${getZero(date.getDate() + 1)}.${getZero(date.getMonth() + 1)}.${date.getFullYear()}`;
        function getZero(num) {
            if (num <= 9) {
                num = '0' + num;
            }
            return num;
        }
        $('#come').datepicker();
        $('#out').datepicker();
        $('#come').attr('placeholder', currentDate);
        $('#out').attr('placeholder', tomorrow);

        $.fn.datepicker.language['ua'] = {
            days: ['Неділя', 'Понеділок', 'Вівторок', 'Середа', 'Четвер', 'Пятниця', 'Субота'],
            daysShort: ['Нед', 'Пон', 'Вів', 'Сер', 'Чет', 'Пят', 'Суб'],
            daysMin: ['Нд', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
            months: ['Січень', 'Лютий', 'Березень', 'Квітень', 'Травень', 'Червень', 'Липень', 'Серпень', 'Вересень', 'Жовтень', 'Листопад', 'Грудень'],
            monthsShort: ['Січ', 'Лют', 'Бер', 'Кві', 'Тра', 'Чер', 'Лип', 'Сер', 'Вер', 'Жов', 'Лис', 'Гру'],
            today: 'Сьогодні',
            clear: 'Очистити',
            dateFormat: 'dd.mm.yyyy',
            timeFormat: 'hh:ii',
            firstDay: 1
        };
    }
    if (document.querySelector('#come')) {
        initDatepicker();
    }
    //modals 
    const modalCalls = $('[data-modal]'),
        modal = $('.modal'),
        modalCloseBtn = $('[data-close]');
    let SwiperModal;
    modalCalls.on('click', function (event) {
        $('body').addClass('no-scroll');
        modal.addClass('show');

        setTimeout(() => {
            $(modal).find('.modal__window').css({
                transform: "scale(1)"
            })
        }, 200);

        let photo = $(this).find('img');
        let photoNum = photo.attr('data-start');
        let counter = Number(photoNum);
        upgradeModal(counter);

        SwiperModal = new Swiper('.modal__swiper', {
            loop: true,
            effect: 'fade',
            autoHeight: true,
            speed: 500,
            pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
                clickable: true
            }
        });
        upgradeBullets(counter);
        event.preventDefault();
    });
    function getSlidesStr(counter) {
        return `<div class="swiper-slide"><img src="img/rooms-${counter}.webp"/></div>`;
    }
    function upgradeModal(counter) {
        let slidesStr = ''
        for (let i = 0; i < 2; i++) {
            slidesStr += getSlidesStr(counter);
            counter++;
        }
        $(modal).find('.swiper-wrapper').html(slidesStr);
    }
    function upgradeBullets(counter) {
        let bullets = document.querySelectorAll('.swiper-pagination-bullet');
        let num = counter;
        bullets.forEach(el => {
            el.style.background = `url(img/rooms-${num}.jpg) center no-repeat`;
            el.style.backgroundSize = 'cover';
            num++;
        })
    }
    //remove modal
    const removeModal = () => {
        $(modal).find('.modal__window').css({
            transform: "scale(0)"
        });

        setTimeout(() => {
            $(modal).removeClass('show');
            $('body').removeClass('no-scroll');
        }, 200);
    };
    modalCloseBtn.on('click', function (event) {
        removeModal();
        event.preventDefault();
    });
    modal.on('click', function () {
        removeModal();
    });
    $('.modal__window').on('click', function (event) {
        event.stopPropagation();
    });

    //phone button
    const phoneBtn = document.querySelector('.phone');
    const message = document.querySelector('.message');

    const callback = document.querySelector('#callback');
    const callbackMessage = document.querySelector('.callback');
    const callbackClose = document.querySelector('.callback__close');

    phoneBtn.addEventListener('click', function () {
        this.classList.toggle('active');
        if (this.classList.contains('active')) {
            message.classList.add('active');
        } else {
            message.classList.remove('active');
        }
        if (callbackMessage.classList.contains('active')) {
            callbackMessage.classList.remove('active');
        }
    });

    //callback
    callback.addEventListener('click', function (event) {
        message.classList.remove('active');
        callbackMessage.classList.add('active');
        event.preventDefault();
    });
    callbackClose.addEventListener('click', function () {
        callbackMessage.classList.remove('active');
        if (phoneBtn.classList.contains('active')) {
            phoneBtn.classList.remove('active');
        }
    });

    //close head
    const closeHead = document.querySelector('.closeHead');
    const header = document.querySelector('.header');
    closeHead.addEventListener('click', function () {
        this.classList.toggle('close');
        if (this.classList.contains('close')) {
            header.classList.add('close');
        } else {
            header.classList.remove('close');
        }
    });

    //mobile header
    const headerNav = document.querySelector('.header__nav');
    const closeMobileNavBtn = document.querySelector('.closeMobileNav');
    headerNav.addEventListener('click', function (event) {
        if (!this.classList.contains('open')) {
            this.classList.add('open');
            closeMobileNavBtn.classList.remove('hide');
            if (window.innerWidth <= 768) {
                event.preventDefault();
            }
        } else {
            return false
        }
    });
    closeMobileNavBtn.addEventListener('click', function () {
        if (headerNav.classList.contains('open')) {
            headerNav.classList.remove('open');
            closeMobileNavBtn.classList.add('hide');
        } else {
            return false
        }
    });

    // smooth scroll
    $('[data-scroll]').on('click', function (event) {
        elementId = $(this).data('scroll');
        elementOffset = $(elementId).offset().top;
        $('html, body').animate({
            scrollTop: elementOffset - 140 + 'px'
        });
        event.preventDefault();
    });


});//end DOMContentLoaded

//weather
const weatherTitle = document.querySelector('.weather__title'),
    weatherImg = document.querySelector('.weather__img'),
    weatherTemp = document.querySelector('.weather__temp'),
    weatherHum = document.querySelector('.weather__humidity'),
    weatherWind = document.querySelector('.weather__wind');
fetch("https://api.openweathermap.org/data/2.5/weather?id=699453&appid=93183ea9f0de3fe9e607c16c5729cbfd", {
    "method": "GET"
})
    .then(response => response.json())
    .then(result => generateWeather(result))
    .catch(err => console.error(err));

function generateWeather(object) {
    weatherTitle.innerHTML = 'Погода в Новомиргороді';
    weatherImg.innerHTML = `<img src='https://openweathermap.org/img/w/${object.weather[0].icon}.png'>`;
    weatherTemp.innerHTML = Math.round(object.main.temp - 273) + '&#176;C';
    weatherWind.innerHTML = `${object.wind.speed} км/год`;
    weatherHum.innerHTML = `${object.main.humidity}%`;
}


