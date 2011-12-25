(function(b){if(!Modernizr.genericDOM){var g=document,j,i,m=/<([\w:]+)/,l={option:1,optgroup:1,legend:1,thead:1,tr:1,td:1,col:1,area:1};b.webshims.fixHTML5=function(b){if("string"!=typeof b||l[(m.exec(b)||["",""])[1].toLowerCase()])return b;if(!i){j=g.body;if(!j)return b;i=g.createElement("div");i.style.display="none"}var k=i.cloneNode(!1);j.appendChild(k);k.innerHTML=b;j.removeChild(k);return k.childNodes}}})(jQuery);
jQuery.webshims.register("dom-extend",function(b,g,j,i,m){var l=g.modules,o=/\s*,\s*/,k={},A={},s={},x={},h={},z=b.fn.val,B=function(e,a,c,d,f){return f?z.call(b(e)):z.call(b(e),c)};b.fn.val=function(e){var a=this[0];arguments.length&&null==e&&(e="");if(!arguments.length)return!a||1!==a.nodeType?z.call(this):b.prop(a,"value",e,"val",!0);if(b.isArray(e))return z.apply(this,arguments);var c=b.isFunction(e);return this.each(function(d){a=this;1===a.nodeType&&(c?(d=e.call(a,d,b.prop(a,"value",m,"val",
!0)),null==d&&(d=""),b.prop(a,"value",d,"val")):b.prop(a,"value",e,"val"))})};var v="_webshimsLib"+Math.round(1E3*Math.random()),p=function(e,a,c){e=e.jquery?e[0]:e;if(!e)return c||{};var d=b.data(e,v);c!==m&&(d||(d=b.data(e,v,{})),a&&(d[a]=c));return a?d&&d[a]:d};[{name:"getNativeElement",prop:"nativeElement"},{name:"getShadowElement",prop:"shadowElement"},{name:"getShadowFocusElement",prop:"shadowFocusElement"}].forEach(function(e){b.fn[e.name]=function(){return this.map(function(){var a=p(this,
"shadowData");return a&&a[e.prop]||this})}});["removeAttr","prop","attr"].forEach(function(e){k[e]=b[e];b[e]=function(a,c,d,f,t){var g="val"==f,o=!g?k[e]:B;if(!a||!A[c]||1!==a.nodeType||!g&&f&&"attr"==e&&b.attrFn[c])return o(a,c,d,f,t);var E=(a.nodeName||"").toLowerCase(),y=s[E],C="attr"==e&&(!1===d||null===d)?"removeAttr":e,i,l,n;y||(y=s["*"]);y&&(y=y[c]);y&&(i=y[C]);if(i){if("value"==c)l=i.isVal,i.isVal=g;if("removeAttr"===C)return i.value.call(a);if(d===m)return i.get?i.get.call(a):i.value;i.set&&
("attr"==e&&!0===d&&(d=c),n=i.set.call(a,d));if("value"==c)i.isVal=l}else n=o(a,c,d,f,t);if((d!==m||"removeAttr"===C)&&h[E]&&h[E][c]){var j;j="removeAttr"==C?!1:"prop"==C?!!d:!0;h[E][c].forEach(function(c){if(!c.only||(c.only="prop"==e)||"attr"==c.only&&"prop"!=e)c.call(a,d,j,g?"val":C,e)})}return n};x[e]=function(a,c,d){s[a]||(s[a]={});s[a][c]||(s[a][c]={});var f=s[a][c][e],t=function(a,b,f){return b&&b[a]?b[a]:f&&f[a]?f[a]:"prop"==e&&"value"==c?function(a){return d.isVal?B(this,c,a,!1,0===arguments.length):
k[e](this,c,a)}:"prop"==e&&"value"==a&&d.value.apply?function(a){var d=k[e](this,c);d&&d.apply&&(d=d.apply(this,arguments));return d}:function(a){return k[e](this,c,a)}};s[a][c][e]=d;if(d.value===m){if(!d.set)d.set=d.writeable?t("set",d,f):g.cfg.useStrict&&"prop"==c?function(){throw c+" is readonly on "+a;}:b.noop;if(!d.get)d.get=t("get",d,f)}["value","get","set"].forEach(function(a){d[a]&&(d["_sup"+a]=t(a,f))})}});var u=!b.browser.msie||8<parseInt(b.browser.version,10),n=function(){var b=g.getPrototypeOf(i.createElement("foobar")),
a=Object.prototype.hasOwnProperty;return function(c,d,f){var t=i.createElement(c),o=g.getPrototypeOf(t);if(u&&o&&b!==o&&(!t[d]||!a.call(t,d))){var k=t[d];f._supvalue=function(){return k&&k.apply?k.apply(this,arguments):k};o[d]=f.value}else f._supvalue=function(){var a=p(this,"propValue");return a&&a[d]&&a[d].apply?a[d].apply(this,arguments):a&&a[d]},r.extendValue(c,d,f.value);f.value._supvalue=f._supvalue}}(),r=function(){var e={};g.addReady(function(a,c){var d={},o=function(e){d[e]||(d[e]=b(a.getElementsByTagName(e)),
c[0]&&b.nodeName(c[0],e)&&(d[e]=d[e].add(c)))};b.each(e,function(a,c){o(a);!c||!c.forEach?g.warn("Error: with "+a+"-property. methods: "+c):c.forEach(function(c){d[a].each(c)})});d=null});var a,c=b([]),d=function(c,d){e[c]?e[c].push(d):e[c]=[d];b.isDOMReady&&(a||b(i.getElementsByTagName(c))).each(d)};return{createTmpCache:function(d){b.isDOMReady&&(a=a||b(i.getElementsByTagName(d)));return a||c},flushTmpCache:function(){a=null},content:function(a,c){d(a,function(){var a=b.attr(this,c);null!=a&&b.attr(this,
c,a)})},createElement:function(a,c){d(a,c)},extendValue:function(a,c,e){d(a,function(){b(this).each(function(){p(this,"propValue",{})[c]=this[c];this[c]=e})})}}}(),D=function(b,a){if(b.defaultValue===m)b.defaultValue="";if(!b.removeAttr)b.removeAttr={value:function(){b[a||"prop"].set.call(this,b.defaultValue);b.removeAttr._supvalue.call(this)}}};b.extend(g,{getID:function(){var e=(new Date).getTime();return function(a){var a=b(a),c=a.attr("id");c||(e++,c="ID-"+e,a.attr("id",c));return c}}(),extendUNDEFProp:function(e,
a){b.each(a,function(a,d){a in e||(e[a]=d)})},createPropDefault:D,data:p,moveToFirstEvent:function(){var e=b._data?"_data":"data";return function(a,c,d){if((a=(b[e](a,"events")||{})[c])&&1<a.length)c=a.pop(),d||(d="bind"),"bind"==d&&a.delegateCount?a.splice(a.delegateCount,0,c):a.unshift(c)}}(),addShadowDom:function(e,a,c){c=c||{};e.jquery&&(e=e[0]);a.jquery&&(a=a[0]);if(!c.shadowFocusElement)c.shadowFocusElement=a;var d=b.data(e,v)||b.data(e,v,{}),f=b.data(a,v)||b.data(a,v,{});d.hasShadow=a;f.nativeElement=
e;f.shadowData=d.shadowData={nativeElement:e,shadowElement:a,shadowFocusElement:c.shadowFocusElement};c.shadowChilds&&c.shadowChilds.each(function(){p(this,"shadowData",f.shadowData)});if(c.data)d.shadowData.data=c.data,f.shadowData.data=c.data;c=null},propTypes:{standard:function(b){D(b);if(!b.prop)b.prop={set:function(a){b.attr.set.call(this,""+a)},get:function(){return b.attr.get.call(this)||b.defaultValue}}},"boolean":function(b){D(b);if(!b.prop)b.prop={set:function(a){a?b.attr.set.call(this,
""):b.removeAttr.value.call(this)},get:function(){return null!=b.attr.get.call(this)}}}},reflectProperties:function(e,a){"string"==typeof a&&(a=a.split(o));a.forEach(function(a){g.defineNodeNamesProperty(e,a,{prop:{set:function(d){b.attr(this,a,d)},get:function(){return b.attr(this,a)||""}}})})},defineNodeNameProperty:function(e,a,c){A[a]=!0;if(c.reflect)g.propTypes[c.propType||"standard"](c);["prop","attr","removeAttr"].forEach(function(d){var f=c[d];f&&(f="prop"===d?b.extend({writeable:!0},f):b.extend({},
f,{writeable:!0}),x[d](e,a,f),"*"!=e&&g.cfg.extendNative&&"prop"==d&&f.value&&b.isFunction(f.value)&&n(e,a,f),c[d]=f)});c.initAttr&&r.content(e,a);return c},defineNodeNameProperties:function(b,a,c,d){for(var f in a)!d&&a[f].initAttr&&r.createTmpCache(b),c&&(a[f][c]?g.log("override: "+b+"["+f+"] for "+c):(a[f][c]={},["value","set","get"].forEach(function(b){b in a[f]&&(a[f][c][b]=a[f][b],delete a[f][b])}))),a[f]=g.defineNodeNameProperty(b,f,a[f]);d||r.flushTmpCache();return a},createElement:function(e,
a,c){var d;b.isFunction(a)&&(a={after:a});r.createTmpCache(e);a.before&&r.createElement(e,a.before);c&&(d=g.defineNodeNameProperties(e,c,!1,!0));a.after&&r.createElement(e,a.after);r.flushTmpCache();return d},onNodeNamesPropertyModify:function(e,a,c,d){"string"==typeof e&&(e=e.split(o));b.isFunction(c)&&(c={set:c});e.forEach(function(b){h[b]||(h[b]={});"string"==typeof a&&(a=a.split(o));c.initAttr&&r.createTmpCache(b);a.forEach(function(a){h[b][a]||(h[b][a]=[],A[a]=!0);if(c.set){if(d)c.set.only=d;
h[b][a].push(c.set)}c.initAttr&&r.content(b,a)});r.flushTmpCache()})},defineNodeNamesBooleanProperty:function(e,a,c){c||(c={});if(b.isFunction(c))c.set=c;g.defineNodeNamesProperty(e,a,{attr:{set:function(b){this.setAttribute(a,b);c.set&&c.set.call(this,!0)},get:function(){return null==this.getAttribute(a)?m:a}},removeAttr:{value:function(){this.removeAttribute(a);c.set&&c.set.call(this,!1)}},reflect:!0,propType:"boolean",initAttr:c.initAttr||!1})},contentAttr:function(b,a,c){if(b.nodeName){if(c===
m)return c=(b.attributes[a]||{}).value,null==c?m:c;"boolean"==typeof c?c?b.setAttribute(a,a):b.removeAttribute(a):b.setAttribute(a,c)}},activeLang:function(){var e=[],a={},c,d,f=/:\/\/|^\.*\//,o=function(a,c,d){return c&&d&&-1!==b.inArray(c,d.availabeLangs||[])?(a.loading=!0,d=d.langSrc,f.test(d)||(d=g.cfg.basePath+d),g.loader.loadScript(d+c+".js",function(){a.langObj[c]?(a.loading=!1,h(a,!0)):b(function(){a.langObj[c]&&h(a,!0);a.loading=!1})}),!0):!1},k=function(c){a[c]&&a[c].forEach(function(a){a.callback()})},
h=function(a,b){if(a.activeLang!=c&&a.activeLang!==d){var e=l[a.module].options;if(a.langObj[c]||d&&a.langObj[d])a.activeLang=c,a.callback(a.langObj[c]||a.langObj[d],c),k(a.module);else if(!b&&!o(a,c,e)&&!o(a,d,e)&&a.langObj[""]&&""!==a.activeLang)a.activeLang="",a.callback(a.langObj[""],c),k(a.module)}};return function(f){if("string"==typeof f&&f!==c)c=f,d=c.split("-")[0],c==d&&(d=!1),b.each(e,function(a,c){h(c)});else if("object"==typeof f)if(f.register)a[f.register]||(a[f.register]=[]),a[f.register].push(f),
f.callback();else{if(!f.activeLang)f.activeLang="";e.push(f);h(f)}return c}}()});b.each({defineNodeNamesProperty:"defineNodeNameProperty",defineNodeNamesProperties:"defineNodeNameProperties",createElements:"createElement"},function(b,a){g[b]=function(c,b,f,e){"string"==typeof c&&(c=c.split(o));var k={};c.forEach(function(c){k[c]=g[a](c,b,f,e)});return k}});g.isReady("webshimLocalization",!0)});
(function(b,g){var j=b.webshims.browserVersion;if(!(b.browser.mozilla&&5<j)&&(!b.browser.msie||12>j&&7<j)){var i={article:"article",aside:"complementary",section:"region",nav:"navigation",address:"contentinfo"},m=function(b,g){b.getAttribute("role")||b.setAttribute("role",g)};b.webshims.addReady(function(l,o){b.each(i,function(g,k){for(var i=b(g,l).add(o.filter(g)),j=0,s=i.length;j<s;j++)m(i[j],k)});if(l===g){var k=g.getElementsByTagName("header")[0],j=g.getElementsByTagName("footer"),s=j.length;
k&&!b(k).closest("section, article")[0]&&m(k,"banner");s&&(k=j[s-1],b(k).closest("section, article")[0]||m(k,"contentinfo"))}})}})(jQuery,document);
(function(b,g,j){var i=g.audio&&g.video,m=!1;if(i){var l=document.createElement("video");g.videoBuffered="buffered"in l;m="loop"in l;j.capturingEvents("play,playing,waiting,paused,ended,durationchange,loadedmetadata,canplay,volumechange".split(","));g.videoBuffered||(j.addPolyfill("mediaelement-native-fix",{f:"mediaelement",test:g.videoBuffered,dependencies:["dom-support"]}),j.reTest("mediaelement-native-fix"))}b.webshims.ready("dom-support swfobject",function(b,g,j,l,x){var h=g.mediaelement,z=g.cfg.mediaelement,
B=function(a,c){var a=b(a),d={src:a.attr("src")||"",elem:a,srcProp:a.prop("src")};if(!d.src)return d;var f=a.attr("type");if(f)d.type=f,d.container=b.trim(f.split(";")[0]);else if(c||(c=a[0].nodeName.toLowerCase(),"source"==c&&(c=(a.closest("video, audio")[0]||{nodeName:"video"}).nodeName.toLowerCase())),f=h.getTypeForSrc(d.src,c))d.type=f,d.container=f,g.warn("you should always provide a proper mime-type using the source element. "+d.src+" detected as: "+f),b.nodeName(a[0],"source")&&a.attr("type",
f);if(f=a.attr("media"))d.media=f;return d},v=swfobject.hasFlashPlayerVersion("9.0.115"),p=function(){g.ready("mediaelement-swf",function(){if(!h.createSWF)g.modules["mediaelement-swf"].test=b.noop,g.reTest(["mediaelement-swf"],i)})};h.mimeTypes={audio:{"audio/ogg":["ogg","oga","ogm"],"audio/mpeg":["mp2","mp3","mpga","mpega"],"audio/mp4":"mp4,mpg4,m4r,m4a,m4p,m4b,aac".split(","),"audio/wav":["wav"],"audio/3gpp":["3gp","3gpp"],"audio/webm":["webm"],"audio/fla":["flv","f4a","fla"],"application/x-mpegURL":["m3u8",
"m3u"]},video:{"video/ogg":["ogg","ogv","ogm"],"video/mpeg":["mpg","mpeg","mpe"],"video/mp4":["mp4","mpg4","m4v"],"video/quicktime":["mov","qt"],"video/x-msvideo":["avi"],"video/x-ms-asf":["asf","asx"],"video/flv":["flv","f4v"],"video/3gpp":["3gp","3gpp"],"video/webm":["webm"],"application/x-mpegURL":["m3u8","m3u"],"video/MP2T":["ts"]}};h.mimeTypes.source=b.extend({},h.mimeTypes.audio,h.mimeTypes.video);h.getTypeForSrc=function(a,c){if(-1!=a.indexOf("youtube.com/watch?"))return"video/youtube";var a=
a.split("?")[0].split("."),a=a[a.length-1],d;b.each(h.mimeTypes[c],function(b,c){if(-1!==c.indexOf(a))return d=b,!1});return d};h.srces=function(a,c){a=b(a);if(c)a.removeAttr("src").removeAttr("type").find("source").remove(),b.isArray(c)||(c=[c]),c.forEach(function(b){var c=l.createElement("source");"string"==typeof b&&(b={src:b});c.setAttribute("src",b.src);b.type&&c.setAttribute("type",b.type);b.media&&c.setAttribute("media",b.media);a.append(c)});else{var c=[],d=a[0].nodeName.toLowerCase(),f=B(a,
d);f.src?c.push(f):b("source",a).each(function(){f=B(this,d);f.src&&c.push(f)});return c}};b.fn.loadMediaSrc=function(a,c){return this.each(function(){c!==x&&(b(this).removeAttr("poster"),c&&b.attr(this,"poster",c));h.srces(this,a);b(this).mediaLoad()})};h.swfMimeTypes="video/3gpp,video/x-msvideo,video/quicktime,video/x-m4v,video/mp4,video/m4p,video/x-flv,video/flv,audio/mpeg,audio/aac,audio/mp4,audio/x-m4a,audio/m4a,audio/mp3,audio/x-fla,audio/fla,youtube/flv,jwplayer/jwplayer,video/youtube".split(",");
h.canSwfPlaySrces=function(a,c){var d="";v&&(a=b(a),c=c||h.srces(a),b.each(c,function(a,b){if(b.container&&b.src&&-1!=h.swfMimeTypes.indexOf(b.container))return d=b,!1}));return d};var u={};h.canNativePlaySrces=function(a,c){var d="";if(i){var a=b(a),f=(a[0].nodeName||"").toLowerCase();if(!u[f])return d;c=c||h.srces(a);b.each(c,function(b,c){if(c.type&&u[f].prop._supvalue.call(a[0],c.type))return d=c,!1})}return d};h.setError=function(a,c){c||(c="can't play sources");b(a).pause().data("mediaerror",
c);g.warn("mediaelementError: "+c);setTimeout(function(){b(a).data("mediaerror")&&b(a).trigger("mediaerror")},1)};var n=function(){var a;return function(b,d,f){g.ready("mediaelement-swf",function(){h.createSWF?h.createSWF(b,d,f):a||(a=!0,p(),n(b,d,f))})}}(),r=function(a,b,d,f,e){d||!1!==d&&b&&"flash"==b.isActive?(d=h.canSwfPlaySrces(a,f))?n(a,d,b):e?h.setError(a,!1):r(a,b,!1,f,!0):(d=h.canNativePlaySrces(a,f))?b&&"flash"==b.isActive&&h.setActive(a,"html5",b):e?(h.setError(a,!1),b&&"flash"==b.isActive&&
h.setActive(a,"html5",b)):r(a,b,!0,f,!0)},D=/^(?:embed|object)$/i,e=function(a,c){var d=g.data(a,"mediaelementBase")||g.data(a,"mediaelementBase",{}),f=h.srces(a),e=a.parentNode;clearTimeout(d.loadTimer);b.data(a,"mediaerror",!1);if(f.length&&e&&!D.test(e.nodeName||""))c=c||g.data(a,"mediaelement"),r(a,c,z.preferFlash||x,f)};b(l).bind("ended",function(a){var c=g.data(a.target,"mediaelement");(!m||c&&"html5"!=c.isActive||b.prop(a.target,"loop"))&&setTimeout(function(){!b.prop(a.target,"paused")&&b.prop(a.target,
"loop")&&b(a.target).prop("currentTime",0).play()},1)});m||g.defineNodeNamesBooleanProperty(["audio","video"],"loop");["audio","video"].forEach(function(a){var c=g.defineNodeNameProperty(a,"load",{prop:{value:function(){var a=g.data(this,"mediaelement");e(this,a);i&&(!a||"html5"==a.isActive)&&c.prop._supvalue&&c.prop._supvalue.apply(this,arguments)}}});u[a]=g.defineNodeNameProperty(a,"canPlayType",{prop:{value:function(c){var e="";i&&u[a].prop._supvalue&&(e=u[a].prop._supvalue.call(this,c),"no"==
e&&(e=""));!e&&v&&(c=b.trim((c||"").split(";")[0]),-1!=h.swfMimeTypes.indexOf(c)&&(e="maybe"));return e}}})});g.onNodeNamesPropertyModify(["audio","video"],["src","poster"],{set:function(){var a=this,b=g.data(a,"mediaelementBase")||g.data(a,"mediaelementBase",{});clearTimeout(b.loadTimer);b.loadTimer=setTimeout(function(){e(a);a=null},9)}});i&&g.isReady("mediaelement-core",!0);g.addReady(function(a,c){b("video, audio",a).add(c.filter("video, audio")).each(function(){b.browser.msie&&8<g.browserVersion&&
b.prop(this,"paused")&&!b.prop(this,"readyState")&&b(this).is('audio[preload="none"][controls]:not([autoplay])')?b(this).prop("preload","metadata").mediaLoad():e(this);if(i){var a,c,h=this,j=function(){var a=b.prop(h,"buffered");if(a){for(var c="",d=0,e=a.length;d<e;d++)c+=a.end(d);return c}},l=function(){var a=j();a!=c&&(c=a,b(h).triggerHandler("progress"))};b(this).bind("play loadstart progress",function(b){"progress"==b.type&&(c=j());clearTimeout(a);a=setTimeout(l,999)}).bind("emptied stalled mediaerror abort suspend",
function(b){"emptied"==b.type&&(c=!1);clearTimeout(a)})}})});i?v&&g.ready("WINDOWLOAD",p):g.isReady("mediaelement-core",!0)})})(jQuery,Modernizr,jQuery.webshims);
jQuery.webshims.register("mediaelement-swf",function(b,g,j,i,m,l){var o=g.mediaelement,k=j.swfobject,A=Modernizr.audio&&Modernizr.video,s=k.hasFlashPlayerVersion("9.0.115"),x=0,j={paused:!0,ended:!1,currentSrc:"",duration:j.NaN,readyState:0,networkState:0,videoHeight:0,videoWidth:0,error:null,buffered:{start:function(a){if(a)g.error("buffered index size error");else return 0},end:function(a){if(a)g.error("buffered index size error");else return 0},length:0}},h=Object.keys(j),z={currentTime:0,volume:1,
muted:!1};Object.keys(z);var B=b.extend({isActive:"html5",activating:"html5",wasSwfReady:!1,_bufferedEnd:0,_bufferedStart:0,_metadata:!1,_durationCalcs:-1,_callMeta:!1,currentTime:0,_ppFlag:m},j,z),v=/^jwplayer-/,p=function(a){if(a=i.getElementById(a.replace(v,"")))return a=g.data(a,"mediaelement"),"flash"==a.isActive?a:null},u=function(a){return(a=g.data(a,"mediaelement"))&&"flash"==a.isActive?a:null},n=function(a,c){c=b.Event(c);c.preventDefault();b.event.trigger(c,m,a)},r=l.playerPath||g.cfg.basePath+
"jwplayer/"+(l.playerName||"player.swf"),D=l.pluginPath||g.cfg.basePath+"swf/jwwebshims.swf";g.extendUNDEFProp(l.jwParams,{allowscriptaccess:"always",allowfullscreen:"true",wmode:"transparent"});g.extendUNDEFProp(l.jwVars,{screencolor:"ffffffff"});g.extendUNDEFProp(l.jwAttrs,{bgcolor:"#000000"});var e=function(a,c){var d=a.duration;if(!(d&&0<a._durationCalcs)){try{if(a.duration=a.jwapi.getPlaylist()[0].duration,!a.duration||0>=a.duration||a.duration===a._lastDuration)a.duration=d}catch(e){}a.duration&&
a.duration!=a._lastDuration?(n(a._elem,"durationchange"),("audio"==a._elemNodeName||a._callMeta)&&o.jwEvents.Model.META(b.extend({duration:a.duration},c),a),a._durationCalcs--):a._durationCalcs++}},a=function(b,c){3>b&&clearTimeout(c._canplaythroughTimer);if(3<=b&&3>c.readyState)c.readyState=b,n(c._elem,"canplay"),clearTimeout(c._canplaythroughTimer),c._canplaythroughTimer=setTimeout(function(){a(4,c)},4E3);if(4<=b&&4>c.readyState)c.readyState=b,n(c._elem,"canplaythrough");c.readyState=b};o.jwEvents=
{View:{PLAY:function(a){var b=p(a.id);if(b&&!b.stopPlayPause&&(b._ppFlag=!0,b.paused==a.state)){b.paused=!a.state;if(b.ended)b.ended=!1;n(b._elem,a.state?"play":"pause")}}},Model:{BUFFER:function(c){var q=p(c.id);if(q&&"percentage"in c&&q._bufferedEnd!=c.percentage){q.networkState=100==c.percentage?1:2;(isNaN(q.duration)||5<c.percentage&&25>c.percentage||100===c.percentage)&&e(q,c);if(q.ended)q.ended=!1;if(q.duration){2<c.percentage&&20>c.percentage?a(3,q):20<c.percentage&&a(4,q);if(q._bufferedEnd&&
q._bufferedEnd>c.percentage)q._bufferedStart=q.currentTime||0;q._bufferedEnd=c.percentage;q.buffered.length=1;if(100==c.percentage)q.networkState=1,a(4,q);b.event.trigger("progress",m,q._elem,!0)}}},META:function(b,c){if(c=c&&c.networkState?c:p(b.id))if("duration"in b){if(!c._metadata||!((!b.height||c.videoHeight==b.height)&&b.duration===c.duration)){c._metadata=!0;var d=c.duration;if(b.duration)c.duration=b.duration;c._lastDuration=c.duration;if(b.height||b.width)c.videoHeight=b.height||0,c.videoWidth=
b.width||0;if(!c.networkState)c.networkState=2;1>c.readyState&&a(1,c);c.duration&&d!==c.duration&&n(c._elem,"durationchange");n(c._elem,"loadedmetadata")}}else c._callMeta=!0},TIME:function(b){var c=p(b.id);if(c&&c.currentTime!==b.position){c.currentTime=b.position;c.duration&&c.duration<c.currentTime&&e(c,b);2>c.readyState&&a(2,c);if(c.ended)c.ended=!1;n(c._elem,"timeupdate")}},STATE:function(c){var b=p(c.id);if(b)switch(c.newstate){case "BUFFERING":if(b.ended)b.ended=!1;a(1,b);n(b._elem,"waiting");
break;case "PLAYING":b.paused=!1;b._ppFlag=!0;b.duration||e(b,c);3>b.readyState&&a(3,b);if(b.ended)b.ended=!1;n(b._elem,"playing");break;case "PAUSED":if(!b.paused&&!b.stopPlayPause)b.paused=!0,b._ppFlag=!0,n(b._elem,"pause");break;case "COMPLETED":4>b.readyState&&a(4,b),b.ended=!0,n(b._elem,"ended")}}},Controller:{ERROR:function(a){var b=p(a.id);b&&o.setError(b._elem,a.message)},SEEK:function(a){var b=p(a.id);if(b){if(b.ended)b.ended=!1;if(b.paused)try{b.jwapi.sendEvent("play","false")}catch(c){}if(b.currentTime!=
a.position)b.currentTime=a.position,n(b._elem,"timeupdate")}},VOLUME:function(a){var b=p(a.id);if(b&&(a=a.percentage/100,b.volume!=a))b.volume=a,n(b._elem,"volumechange")},MUTE:function(a){if(!a.state){var b=p(a.id);if(b&&b.muted!=a.state)b.muted=a.state,n(b._elem,"volumechange")}}}};var c=function(a){b.each(o.jwEvents,function(c,d){b.each(d,function(b){a.jwapi["add"+c+"Listener"](b,"jQuery.webshims.mediaelement.jwEvents."+c+"."+b)})})},d=function(a){a&&(a._ppFlag===m&&b.prop(a._elem,"autoplay")||
!a.paused)&&setTimeout(function(){if("flash"==a.isActive&&(a._ppFlag===m||!a.paused))try{b(a._elem).play()}catch(c){}},1)},f=function(a){if(a&&"video"==a._elemNodeName){var c,d,e,g,f,w,h,i,j=function(j,k){if(k&&j&&!(1>k||1>j||"flash"!=a.isActive))if(c&&(c.remove(),c=!1),g=j,f=k,clearTimeout(h),d="auto"==a._elem.style.width,e="auto"==a._elem.style.height,d||e){w=w||b(a._elem).getShadowElement();var l;d&&!e?(l=w.height(),j*=l/k,k=l):!d&&e&&(l=w.width(),k*=l/j,j=l);i=!0;setTimeout(function(){i=!1},9);
w.css({width:j,height:k})}},k=function(){if(!("flash"!=a.isActive||b.prop(a._elem,"readyState")&&b.prop(this,"videoWidth"))){var g=b.prop(a._elem,"poster");if(g&&(d="auto"==a._elem.style.width,e="auto"==a._elem.style.height,d||e))c&&(c.remove(),c=!1),c=b('<img style="position: absolute; height: auto; width: auto; top: 0px; left: 0px; visibility: hidden;" />'),c.bind("load error alreadycomplete",function(){clearTimeout(h);var a=this,d=a.naturalWidth||a.width||a.offsetWidth,e=a.naturalHeight||a.height||
a.offsetHeight;e&&d?(j(d,e),a=null):setTimeout(function(){d=a.naturalWidth||a.width||a.offsetWidth;e=a.naturalHeight||a.height||a.offsetHeight;j(d,e);c&&(c.remove(),c=!1);a=null},9);b(this).unbind()}).prop("src",g).appendTo("body").each(function(){this.complete||this.error?b(this).triggerHandler("alreadycomplete"):(clearTimeout(h),h=setTimeout(function(){b(a._elem).triggerHandler("error")},9999))})}};b(a._elem).bind("loadedmetadata",function(){j(b.prop(this,"videoWidth"),b.prop(this,"videoHeight"))}).bind("emptied",
k).bind("swfstageresize",function(){i||j(g,f)}).bind("emptied",function(){g=void 0;f=void 0}).triggerHandler("swfstageresize");k();b.prop(a._elem,"readyState")&&j(b.prop(a._elem,"videoWidth"),b.prop(a._elem,"videoHeight"))}};o.playerResize=function(a){a&&(a=i.getElementById(a.replace(v,"")))&&b(a).triggerHandler("swfstageresize")};b(i).bind("emptied",function(a){a=u(a.target);d(a)});var t;o.jwPlayerReady=function(a){var e=p(a.id);if(e&&e.jwapi){clearTimeout(t);e.jwData=a;e.shadowElem.removeClass("flashblocker-assumed");
e.wasSwfReady?b(e._elem).mediaLoad():(a=parseFloat(a.version,10),(5.6>a||6<=a)&&g.warn("mediaelement-swf is only testet with jwplayer 5.6+"),b.prop(e._elem,"volume",e.volume),b.prop(e._elem,"muted",e.muted),c(e));e.wasSwfReady=!0;var a=e.actionQueue.length,f=0,h;if(a&&"flash"==e.isActive)for(;e.actionQueue.length&&a>f;)f++,h=e.actionQueue.shift(),e.jwapi[h.fn].apply(e.jwapi,h.args);if(e.actionQueue.length)e.actionQueue=[];d(e)}};var H=b.noop;if(A){var K={play:1,playing:1},E="play,pause,playing,canplay,progress,waiting,ended,loadedmetadata,durationchange,emptied".split(","),
y=E.map(function(a){return a+".webshimspolyfill"}).join(" "),C=function(a){var c=g.data(a.target,"mediaelement");c&&(a.originalEvent&&a.originalEvent.type===a.type)==("flash"==c.activating)&&(a.stopImmediatePropagation(),K[a.type]&&c.isActive!=c.activating&&b(a.target).pause())},H=function(a){b(a).unbind(y).bind(y,C);E.forEach(function(b){g.moveToFirstEvent(a,b)})};H(i)}o.setActive=function(a,c,d){d||(d=g.data(a,"mediaelement"));if(d&&d.isActive!=c){"html5"!=c&&"flash"!=c&&g.warn("wrong type for mediaelement activating: "+
c);var e=g.data(a,"shadowData");d.activating=c;b(a).pause();d.isActive=c;"flash"==c?(e.shadowElement=e.shadowFocusElement=d.shadowElem[0],b(a).hide().getShadowElement().show()):(b(a).show().getShadowElement().hide(),e.shadowElement=e.shadowFocusElement=!1)}};var L=function(){var b="_bufferedEnd,_bufferedStart,_metadata,_ppFlag,currentSrc,currentTime,duration,ended,networkState,paused,videoHeight,videoWidth,_callMeta,_durationCalcs".split(","),c=b.length;return function(d){if(d){var e=c,g=d.networkState;
for(a(0,d);--e;)delete d[b[e]];d.actionQueue=[];d.buffered.length=0;g&&n(d._elem,"emptied")}}}(),J=function(a,c){var d=a._elem,e=a.shadowElem;b(d)[c?"addClass":"removeClass"]("webshims-controls");"audio"==a._elemNodeName&&!c?e.css({width:0,height:0}):e.css({width:d.style.width||b(d).width(),height:d.style.height||b(d).height()})};o.createSWF=function(a,c,d){if(s){1>x?x=1:x++;var e=b.extend({},l.jwVars,{image:b.prop(a,"poster")||"",file:c.srcProp}),h=b(a).data("jwvars")||{};if(d&&d.swfCreated)o.setActive(a,
"flash",d),L(d),d.currentSrc=c.srcProp,b.extend(e,h),l.changeJW(e,a,c,d,"load"),F(a,"sendEvent",["LOAD",e]);else{var G=b.prop(a,"controls"),w="jwplayer-"+g.getID(a),j=b.extend({},l.jwParams,b(a).data("jwparams")),i=a.nodeName.toLowerCase(),n=b.extend({},l.jwAttrs,{name:w,id:w},b(a).data("jwattrs")),m=b('<div class="polyfill-'+i+' polyfill-mediaelement" id="wrapper-'+w+'"><div id="'+w+'"></div>').css({position:"relative",overflow:"hidden"}),d=g.data(a,"mediaelement",g.objectCreate(B,{actionQueue:{value:[]},
shadowElem:{value:m},_elemNodeName:{value:i},_elem:{value:a},currentSrc:{value:c.srcProp},swfCreated:{value:!0},buffered:{value:{start:function(a){if(a>=d.buffered.length)g.error("buffered index size error");else return 0},end:function(a){if(a>=d.buffered.length)g.error("buffered index size error");else return(d.duration-d._bufferedStart)*d._bufferedEnd/100+d._bufferedStart},length:0}}}));J(d,G);m.insertBefore(a);A&&b.extend(d,{volume:b.prop(a,"volume"),muted:b.prop(a,"muted")});b.extend(e,{id:w,
controlbar:G?l.jwVars.controlbar||("video"==i?"over":"bottom"):"video"==i?"none":"bottom",icons:""+(G&&"video"==i)},h,{playerready:"jQuery.webshims.mediaelement.jwPlayerReady"});e.plugins=e.plugins?e.plugins+(","+D):D;g.addShadowDom(a,m);H(a);o.setActive(a,"flash",d);l.changeJW(e,a,c,d,"embed");f(d);k.embedSWF(r,w,"100%","100%","9.0.0",!1,e,j,n,function(c){if(c.success)d.jwapi=c.ref,G||b(c.ref).attr("tabindex","-1").css("outline","none"),setTimeout(function(){if(!c.ref.parentNode&&m[0].parentNode||
"none"==c.ref.style.display)m.addClass("flashblocker-assumed"),b(a).trigger("flashblocker"),g.warn("flashblocker assumed");b(c.ref).css({minHeight:"2px",minWidth:"2px",display:"block"})},9),t||(clearTimeout(t),t=setTimeout(function(){var a=b(c.ref);1<a[0].offsetWidth&&1<a[0].offsetHeight&&0===location.protocol.indexOf("file:")?g.warn("Add your local development-directory to the local-trusted security sandbox:  http://www.macromedia.com/support/documentation/en/flashplayer/help/settings_manager04.html"):
(2>a[0].offsetWidth||2>a[0].offsetHeight)&&g.info("JS-SWF connection can't be established on hidden or unconnected flash objects")},8E3))})}}else setTimeout(function(){b(a).mediaLoad()},1)};var F=function(a,c,b,d){return(d=d||u(a))?(d.jwapi&&d.jwapi[c]?d.jwapi[c].apply(d.jwapi,b||[]):(d.actionQueue.push({fn:c,args:b}),10<d.actionQueue.length&&setTimeout(function(){5<d.actionQueue.length&&d.actionQueue.shift()},99)),d):!1};["audio","video"].forEach(function(a){var c={},d,e=function(b){"audio"==a&&
("videoHeight"==b||"videoWidth"==b)||(c[b]={get:function(){var a=u(this);return a?a[b]:A&&d[b].prop._supget?d[b].prop._supget.apply(this):B[b]},writeable:!1})},f=function(a,b){e(a);delete c[a].writeable;c[a].set=b};f("volume",function(a){var b=u(this);if(b){if(a*=100,!isNaN(a)){var c=b.muted;(0>a||100<a)&&g.error("volume greater or less than allowed "+a/100);F(this,"sendEvent",["VOLUME",a],b);if(c)try{b.jwapi.sendEvent("mute","true")}catch(e){}a/=100;if(!(b.volume==a||"flash"!=b.isActive))b.volume=
a,n(b._elem,"volumechange")}}else if(d.volume.prop._supset)return d.volume.prop._supset.apply(this,arguments)});f("muted",function(a){var b=u(this);if(b){if(a=!!a,F(this,"sendEvent",["mute",""+a],b),!(b.muted==a||"flash"!=b.isActive))b.muted=a,n(b._elem,"volumechange")}else if(d.muted.prop._supset)return d.muted.prop._supset.apply(this,arguments)});f("currentTime",function(a){var b=u(this);if(b){if(a*=1,!isNaN(a)){if(b.paused)clearTimeout(b.stopPlayPause),b.stopPlayPause=setTimeout(function(){b.paused=
!0;b.stopPlayPause=!1},50);F(this,"sendEvent",["SEEK",""+a],b);if(b.paused){if(0<b.readyState)b.currentTime=a,n(b._elem,"timeupdate");try{b.jwapi.sendEvent("play","false")}catch(c){}}}}else if(d.currentTime.prop._supset)return d.currentTime.prop._supset.apply(this,arguments)});["play","pause"].forEach(function(a){c[a]={value:function(){var b=u(this);if(b)b.stopPlayPause&&clearTimeout(b.stopPlayPause),F(this,"sendEvent",["play","play"==a],b),setTimeout(function(){if("flash"==b.isActive&&(b._ppFlag=
!0,b.paused!=("play"!=a)))b.paused="play"!=a,n(b._elem,a)},1);else if(d[a].prop._supvalue)return d[a].prop._supvalue.apply(this,arguments)}}});h.forEach(e);g.onNodeNamesPropertyModify(a,"controls",function(c,d){var e=u(this);b(this)[d?"addClass":"removeClass"]("webshims-controls");if(e){try{F(this,d?"showControls":"hideControls",[a],e)}catch(f){g.warn("you need to generate a crossdomain.xml")}"audio"==a&&J(e,d);b(e.jwapi).attr("tabindex",d?"0":"-1")}});d=g.defineNodeNameProperties(a,c,"prop")});if(s){var M=
b.cleanData,N=b.browser.msie&&9>g.browserVersion,O={object:1,OBJECT:1};b.cleanData=function(a){var b,c,d;if(a&&(c=a.length)&&x)for(b=0;b<c;b++)if(O[a[b].nodeName]){if("sendEvent"in a[b]){x--;try{a[b].sendEvent("play",!1)}catch(e){}}if(N)try{for(d in a[b])"function"==typeof a[b][d]&&(a[b][d]=null)}catch(f){}}return M.apply(this,arguments)}}if(!A){var I=i.createElement("a");["poster","src"].forEach(function(a){g.defineNodeNamesProperty("src"==a?["audio","video","source"]:["video"],a,{prop:{get:function(){var c=
this.getAttribute(a);if(null==c)return"";I.setAttribute("href",c+"");return!b.support.hrefNormalized?I.getAttribute("href",4):I.href},set:function(c){b.attr(this,a,c)}}})});["autoplay","controls"].forEach(function(a){g.defineNodeNamesBooleanProperty(["audio","video"],a)});g.defineNodeNamesProperties(["audio","video"],{HAVE_CURRENT_DATA:{value:2},HAVE_ENOUGH_DATA:{value:4},HAVE_FUTURE_DATA:{value:3},HAVE_METADATA:{value:1},HAVE_NOTHING:{value:0},NETWORK_EMPTY:{value:0},NETWORK_IDLE:{value:1},NETWORK_LOADING:{value:2},
NETWORK_NO_SOURCE:{value:3}},"prop")}});
