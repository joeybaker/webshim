(function(c,g,i,v){var n=c.event.special,C=c([]),e=g.Modernizr,o=e.input,A=e.inputtypes,y=parseFloat(c.browser.version,10),j=g.Object,w=e.addTest,D=Array.prototype.slice;"details"in e||w("details",function(){return"open"in i.createElement("details")});e.genericDOM=!!c("<video><div></div></video>")[0].innerHTML;e.advancedObjectProperties=e.objectAccessor=e.ES5=!!("create"in j&&"seal"in j);!g.iepp&&c.browser.msie&&y<9&&!c.isReady&&c.each("datalist,source,video,audio,details,summary,canvas,output".split(","),
function(a,b){i.createElement(b)});c.webshims=c.sub();c.extend(c.webshims,{version:"pre1.8.3",cfg:{useImportantStyles:!0,waitReady:!0,extendNative:!0,loader:{sssl:function(a,b){d.warn("sssl is deprecated. use yepnope");sssl(a,b)},require:function(a,b){d.warn("require is deprecated. use yepnope");require([a],b)},yepnope:function(a,b){yepnope.injectJs?yepnope.injectJs(a,b):yepnope({load:a,callback:b})}},basePath:function(){var a=c(i.scripts||"script").filter('[src*="polyfiller.js"]'),a=a[0]||a.end()[a.end().length-
1],a=(c.support.hrefNormalized?a.src:a.getAttribute("src",4)).split("?")[0];return a=a.slice(0,a.lastIndexOf("/")+1)+"shims/"}()},browserVersion:y,modules:{},features:{},featureList:[],profiles:{lightweight:["es5","json-storage","canvas","geolocation","forms"]},setOptions:function(a,b){typeof a=="string"&&b!==v?h[a]=!c.isPlainObject(b)?b:c.extend(!0,h[a]||{},b):typeof a=="object"&&c.extend(!0,h,a)},addPolyfill:function(a,b){var b=b||{},f=b.feature||a;r[f]||(r[f]=[],d.featureList.push(f),h[f]={});
r[f].push(a);b.options=c.extend(h[f],b.options);B(a,b);b.methodNames&&c.each(b.methodNames,function(b,a){d.addMethodName(a)})},polyfill:function(){var a=function(b){var f=[],p,q=function(){c("html").hasClass("long-loading-polyfills")&&d.info("Polyfilling takes a little bit long");c("html").removeClass("loading-polyfills long-loading-polyfills");c(g).unbind(".lP");clearTimeout(p)};c.isReady?d.warn("You should call $.webshims.polyfill before DOM-Ready"):(f.push("loading-polyfills"),c(g).bind("load.lP polyfillloaderror.lP error.lP",
q),p=setTimeout(function(){c("html").addClass("long-loading-polyfills")},600));u(b,q);h.useImportantStyles&&f.push("polyfill-important");f[0]&&c("html").addClass(f.join(" "));s.loadCSS("styles/shim.css");a=c.noop};return function(b,f){if(b&&(b===!0||c.isPlainObject(b)))f=b,b=v;var p=[],b=b||d.featureList;typeof b=="string"&&(b=d.profiles[b]||b.split(" "));h.waitReady&&(c.readyWait++,u(b,function(){c.ready(!0)}));c.each(b,function(b,a){r[a]?(a!==r[a][0]&&u(r[a],function(){l(a,!0)}),p=p.concat(r[a])):
(d.warn("could not find webshims-feature (aborted): "+a),l(a,!0))});a(b);x(p,f)}}(),isReady:function(a,b){a+="Ready";if(b){if(n[a]&&n[a].add)return!0;n[a]=c.extend(n[a]||{},{add:function(b){b.handler.call(this,a)}});c.event.trigger(a)}return!(!n[a]||!n[a].add)||!1},ready:function(a,b,f){typeof a=="string"&&(a=a.split(" "));f||(a=c.map(c.grep(a,function(a){return!l(a)}),function(a){return a+"Ready"}));a.length?(f=a.shift(),c(i).one(f,function(){u(a,b,!0)})):b(c,d,g,i)},fixHTML5:function(a){return a},
capturingEvents:function(a,b){i.addEventListener&&(typeof a=="string"&&(a=[a]),c.each(a,function(a,d){var q=function(a){a=c.event.fix(a);if(b&&!a._isPolyfilled){var f=a.isDefaultPrevented,d=a.preventDefault;a.preventDefault=function(){clearTimeout(c.data(a.target,a.type+"DefaultPrevented"));c.data(a.target,a.type+"DefaultPrevented",setTimeout(function(){c.removeData(a.target,a.type+"DefaultPrevented")},30));return d.apply(this,arguments)};a.isDefaultPrevented=function(){return!(!f.apply(this,arguments)&&
!c.data(a.target,a.type+"DefaultPrevented"))};a._isPolyfilled=!0}return c.event.handle.call(this,a)};n[d]=n[d]||{};!n[d].setup&&!n[d].teardown&&c.extend(n[d],{setup:function(){this.addEventListener(d,q,!0)},teardown:function(){this.removeEventListener(d,q,!0)}})}))},register:function(a,b){var f=m[a];if(f){if(f.noAutoCallback){var p=function(){b(c,d,g,i,v,f.options);l(a,!0)};f.dependencies?u(f.dependencies,p):p()}}else d.warn("can't find module: "+a)},loader:{addModule:function(a,b){m[a]=b;b.name=
b.name||a},loadedModules:[],_loadScript:function(a,b){typeof b=="string"&&(b=[b]);c.merge(s.loadedModules,b);s.loadScript(a,!1,b)},loadList:function(){var a,b,f=function(b,f){if(l(b)||c.inArray(b,a)!=-1)return!0;var d=m[b];if(d)if(d=d.test&&c.isFunction(d.test)?d.test(f):d.test)l(b,!0);else return!1;return!0},p=function(a,b){if(a.dependencies&&a.dependencies.length){var d=function(a,d){!f(d,b)&&c.inArray(d,b)==-1&&b.push(d)};c.each(a.dependencies,function(a,b){m[b]?d(a,b):r[b]&&(c.each(r[b],d),u(r[b],
function(){l(b,!0)}))});if(!a.noAutoCallback)a.noAutoCallback=!0}};return function(c,t){var e,g=[];if(!a||!b)a=s.loadedModules,b=s._loadScript;for(var h=0;h<c.length;h++)e=m[c[h]],!e||f(e.name,c)?e||d.warn("could not find: "+c[h]):(e.css&&s.loadCSS(e.css),e.loadInit&&e.loadInit(),e.loaded=!0,p(e,c),t?g.push(e.name):b(e.src||e.name,e.name));t&&(d.loadAsCombo||d.warn("include comboloader plugin"),d.loadAsCombo(g,t))}}(),makePath:function(a){if(a.indexOf("//")!=-1||a.indexOf("/")===0)return a;a.indexOf(".")==
-1&&(a+=".js");h.addCacheBuster&&(a+=h.addCacheBuster);return h.basePath+a},loadCSS:function(){var a,b=[];return function(d){d=this.makePath(d);c.inArray(d,b)==-1&&(a=a||c("link, style")[0]||c("script")[0],b.push(d),c('<link rel="stylesheet" />').insertBefore(a).attr({href:d}))}}(),loadScript:function(){var a=[],b;return function(f,e,q){f=s.makePath(f);if(c.inArray(f,a)==-1){var t=C,k,i=function(){c(g).triggerHandler("polyfillloaderror");d.warn('Error: could not find "'+f+'" | configure polyfill-path: $.webshims.setOptions("basePath", "path/to/shims-folder"');
j()},j=function(){clearTimeout(k);t&&t[0]&&t.unbind("error",i);t=i=j=null;e&&e();q&&(typeof q=="string"&&(q=q.split(" ")),c.each(q,function(a,b){m[b]&&(m[b].afterLoad&&m[b].afterLoad(),l(!m[b].noAutoCallback?b:b+"FileLoaded",!0))}))};a.push(f);b||c.each(h.loader,function(a,c){if(g[a])return b=c,!1});b?(b(f,j),d.debug!==!1&&(setTimeout(function(){t=c('script[src="'+f+'"]').bind("error",i)},0),k=setTimeout(i,15E3))):d.error("include a scriptloader: Modernizr.load/yepnope or requireJS")}}}()}});var d=
c.webshims,y=(location.protocol=="https:"?"https://":"http://")+"ajax.googleapis.com/ajax/libs/",E=y+"jqueryui/1.8.16/",h=d.cfg,r=d.features,l=d.isReady,u=d.ready,k=d.addPolyfill,m=d.modules,s=d.loader,x=s.loadList,B=s.addModule,F={warn:1,error:1};d.addMethodName=function(a){var a=a.split(":"),b=a[1];a.length==1&&(b=a[0]);a=a[0];c.fn[a]=function(){return this.callProp(b,arguments)}};c.fn.callProp=function(a,b){var f;b||(b=[]);this.each(function(){var e=c.prop(this,a);if(e&&e.apply){if(f=e.apply(this,
b),f!==v)return!1}else d.warn(a+" is not a method of "+this)});return f!==v?f:this};d.xhrPreloadOption={cache:!0,dataType:"text",error:function(a,b){d.warn("error with: "+this.url+" | "+b)}};d.activeLang=function(){var a=navigator.browserLanguage||navigator.language||"";u("webshimLocalization",function(){d.activeLang(a)});return function(b){if(b){if(typeof b=="string")a=b;else if(typeof b=="object"){var c=arguments,e=this;u("webshimLocalization",function(){d.activeLang.apply(e,c)})}x(["dom-extend"])}return a}}();
c.each(["log","error","warn","info"],function(a,b){d[b]=function(a){if((F[b]&&d.debug!==!1||d.debug)&&g.console&&console.log)return console[console[b]?b:"log"](a)}});(function(){c.isDOMReady=c.isReady;if(c.isDOMReady)l("DOM",!0);else{var a=c.ready;c.ready=function(b){if(b!==!0&&!c.isDOMReady)i.body?(c.isDOMReady=!0,l("DOM",!0),c.ready=a):setTimeout(function(){c.ready(b)},13);return a.apply(this,arguments)}}c(g).load(function(){l("WINDOWLOAD",!0)})})();(function(){var a=[];c.extend(d,{addReady:function(b){var c=
function(a,c){d.ready("DOM",function(){b(a,c)})};a.push(c);c(i,C)},triggerDomUpdate:function(b){if(!b||!b.nodeType)b&&b.jquery&&b.each(function(){d.triggerDomUpdate(this)});else{var f=b.nodeType;if(!(f!=1&&f!=9)){var e=b!==i?c(b):C;c.each(a,function(a,c){c(b,e)})}}}});c.fn.htmlWebshim=c.fn.htmlPolyfill=function(a){a=c.fn.html.call(this,a?d.fixHTML5(a):a);a===this&&c.isDOMReady&&this.each(function(){this.nodeType==1&&d.triggerDomUpdate(this)});return a};if(d.fn)d.fn.html=c.fn.htmlWebshim;c.each(["after",
"before","append","prepend","replaceWith"],function(a,f){d.fn[f]=c.fn[f+"Polyfill"]=c.fn[f+"Webshim"]=function(a){a=c(d.fixHTML5(a));c.fn[f].call(this,a);c.isDOMReady&&a.each(function(){this.nodeType==1&&d.triggerDomUpdate(this)});return this}});c.each(["insertAfter","insertBefore","appendTo","prependTo","replaceAll"],function(a,f){d.fn[f]=c.fn[f.replace(/[A-Z]/,function(a){return"Polyfill"+a})]=function(){c.fn[f].apply(this,arguments);d.triggerDomUpdate(this);return this}});c.fn.updatePolyfill=function(){d.triggerDomUpdate(this);
return this};c.each(["getNativeElement","getShadowElement","getShadowFocusElement"],function(a,d){c.fn[d]=function(){return this}})})();(function(){var a=j.prototype.hasOwnProperty,b=["configurable","enumerable","writable"],f=function(a){for(var c=0;c<3;c++)if(a[b[c]]===v&&(b[c]!=="writable"||a.value!==v))a[b[c]]=!0},e=function(b){if(b)for(var c in b)a.call(b,c)&&f(b[c])};if(j.create)d.objectCreate=function(a,b,d){e(b);a=j.create(a,b);if(d)a.options=c.extend(!0,{},a.options||{},d),d=a.options;a._create&&
c.isFunction(a._create)&&a._create(d);return a};j.defineProperty&&(d.defineProperty=function(a,b,c){f(c);return j.defineProperty(a,b,c)});if(j.defineProperties)d.defineProperties=function(a,b){e(b);return j.defineProperties(a,b)};d.getOwnPropertyDescriptor=j.getOwnPropertyDescriptor;d.getPrototypeOf=j.getPrototypeOf})();B("jquery-ui",{src:E+"jquery-ui.min.js",test:function(){return!(!c.widget||!c.Widget)}});B("input-widgets",{src:"",test:function(){return!this.src||!(c.widget&&!c.fn.datepicker&&!c.fn.slider)}});
B("swfobject",{src:y+"swfobject/2.2/swfobject.js",test:function(){return"swfobject"in g}});k("es5",{test:function(){if(!Function.prototype.bind)Function.prototype.bind=function(a){var b=this;if(typeof b!="function")throw new TypeError;var c=D.call(arguments,1),d=function(){if(this instanceof d){var e=function(){};e.prototype=b.prototype;var e=new e,g=b.apply(e,c.concat(D.call(arguments)));return g!==null&&j(g)===g?g:e}else return b.apply(a,c.concat(D.call(arguments)))};return d};return e.ES5}});k("dom-extend",
{feature:"dom-support",noAutoCallback:!0,dependencies:["es5"]});"localstorage"in e&&k("json-storage",{test:e.localstorage&&"sessionStorage"in g&&"JSON"in g,loadInit:function(){x(["swfobject"])},noAutoCallback:!0});"geolocation"in e&&k("geolocation",{test:e.geolocation,options:{destroyWrite:!0},dependencies:["json-storage"]});(function(){if("canvas"in e){var a;k("canvas",{src:"excanvas",test:e.canvas,options:{type:"excanvas"},noAutoCallback:!0,loadInit:function(){var b=this.options.type;if(b&&b.indexOf("flash")!==
-1&&(!g.swfobject||swfobject.hasFlashPlayerVersion("9.0.0")))g.FlashCanvasOptions=g.FlashCanvasOptions||{},a=FlashCanvasOptions,b=="flash"?(c.extend(a,{swfPath:h.basePath+"FlashCanvas/"}),this.src="FlashCanvas/flashcanvas"):(c.extend(a,{swfPath:h.basePath+"FlashCanvasPro/"}),this.src="FlashCanvasPro/flashcanvas")},afterLoad:function(){d.addReady(function(a,d){c("canvas",a).add(d.filter("canvas")).each(function(){!this.getContext&&g.G_vmlCanvasManager&&G_vmlCanvasManager.initElement(this)});a==i&&
l("canvas",!0)})},methodNames:["getContext"],dependencies:["dom-support"]})}})();if(o&&A){var z=c('<input type="date" required name="a" />')[0];w("formvalidation",function(){return!!(o.required&&"checkValidity"in z)});w("datalist",function(){return!(!o.list||!g.HTMLDataListElement)});o.valueAsNumberSet=o.valueAsNumber="valueAsNumber"in z;if(o.valueAsNumber){try{z[0].valueAsNumber=0}catch(G){}o.valueAsNumberSet=z.value=="1970-01-01"}o.valueAsDate="valueAsDate"in z;if(A.date&&o.valueAsNumber&&!o.valueAsNumberSet)e.bugfreeformvalidation=
!1;d.validationMessages=d.validityMessages=[];d.inputTypes={};k("form-core",{feature:"forms",dependencies:["es5"],loadInit:function(){this.options.customMessages&&x(["dom-extend"])},options:{placeholderType:"value",langSrc:"i18n/errormessages-",availabeLangs:"ar,ch-ZN,el,es,fr,he,hi,hu,it,ja,nl,pt-PT,ru".split(",")},methodNames:["setCustomValidity","checkValidity"]});e.formvalidation?(d.capturingEvents(["input"]),d.capturingEvents(["invalid"],!0),k("form-extend",{feature:"forms",src:"form-native-extend",
test:function(a){return(m["forms-ext"].test()||c.inArray("forms-ext",a)==-1)&&!this.options.overrideMessages},dependencies:["form-core","dom-support"]})):k("form-extend",{feature:"forms",src:"form-shim-all",dependencies:["form-core","dom-support"]});k("forms-ext",{src:"form-number-date",uiTest:function(){return A.range&&A.date&&!this.options.replaceUI&&o.valueAsNumberSet},test:function(){var a=this.uiTest();if(!e.datalist)this.src=a?"form-datalist":"form-number-date-datalist",a=!1;return a},noAutoCallback:!0,
dependencies:["forms"],loadInit:function(){this.uiTest()||(x(["jquery-ui"]),m["input-widgets"].src&&x(["input-widgets"]))},options:{stepArrows:{number:1,time:1},calculateWidth:!0,slider:{},datepicker:{},langSrc:E+"i18n/jquery.ui.datepicker-",recalcWidth:!0}})}k("details",{test:e.details,dependencies:["dom-support"],options:{text:"Details"}});if("audio"in e&&"video"in e)d.mediaelement={},w={options:{hasToPlay:"any",preferFlash:!1,jwVars:{},jwParams:{},jwAttrs:{},changeJW:c.noop},methodNames:["play",
"pause","canPlayType","mediaLoad:load"],dependencies:["swfobject","dom-support"]},e.audio&&e.video?(k("mediaelement-core",{feature:"mediaelement",test:function(){var a=m["mediaelement-swf"];return a.test?!a.test.apply(a,arguments):!1},noAutoCallback:!0,dependencies:["swfobject","dom-support"]}),k("mediaelement-swf",c.extend({feature:"mediaelement",test:function(){var a=this.options,b=a.hasToPlay;return(!g.swfobject||g.swfobject.hasFlashPlayerVersion("9.0.115"))&&(a.preferFlash||b!="any"&&!e.video[b]&&
!e.audio[b])?(this.src="mediaelement-native-all",!1):!0}},w))):k("mediaelement-swf",c.extend({feature:"mediaelement",src:"mediaelement-shim-all"},w));c(i.scripts||"script").filter("[data-polyfill-cfg]").each(function(){try{d.setOptions(c(this).data("polyfillCfg"))}catch(a){d.warn("error parsing polyfill cfg: "+a)}}).end().filter(function(){return this.getAttribute("data-polyfill")!=null}).each(function(){d.polyfill(c.trim(c(this).data("polyfill")||""))})})(jQuery,this,this.document);
