jQuery.webshims.register("form-number-date-api",function(b,c){c.getStep=function(a,h){var e=b.attr(a,"step");if("any"===e)return e;h=h||n(a);if(!f[h]||!f[h].step)return e;e=j.number.asNumber(e);return(!isNaN(e)&&0<e?e:f[h].step)*f[h].stepScaleFactor};c.addMinMaxNumberToCache=function(a,b,e){a+"AsNumber"in e||(e[a+"AsNumber"]=f[e.type].asNumber(b.attr(a)),isNaN(e[a+"AsNumber"])&&a+"Default"in f[e.type]&&(e[a+"AsNumber"]=f[e.type][a+"Default"]))};var l=parseInt("NaN",10),f=c.inputTypes,p=function(a){return"number"==
typeof a||a&&a==1*a},k=function(a){return Modernizr.input.valueAsNumber&&b('<input type="'+a+'" />').prop("type")===a},n=function(a){return(a.getAttribute("type")||"").toLowerCase()},s=c.addMinMaxNumberToCache,i=function(a,b){for(var a=""+a,b=b-a.length,e=0;e<b;e++)a="0"+a;return a};c.addValidityRule("stepMismatch",function(a,b,e,o){if(""===b)return!1;if(!("type"in e))e.type=n(a[0]);if("date"==e.type)return!1;o=(o||{}).stepMismatch;if(f[e.type]&&f[e.type].step){if(!("step"in e))e.step=c.getStep(a[0],
e.type);if("any"==e.step)return!1;if(!("valueAsNumber"in e))e.valueAsNumber=f[e.type].asNumber(b);if(isNaN(e.valueAsNumber))return!1;s("min",a,e);a=e.minAsNumber;isNaN(a)&&(a=f[e.type].stepBase||0);o=Math.abs((e.valueAsNumber-a)%e.step);o=!(1.0E-7>=o||1.0E-7>=Math.abs(o-e.step))}return o});[{name:"rangeOverflow",attr:"max",factor:1},{name:"rangeUnderflow",attr:"min",factor:-1}].forEach(function(a){c.addValidityRule(a.name,function(b,e,c,i){i=(i||{})[a.name]||!1;if(""===e)return i;if(!("type"in c))c.type=
n(b[0]);if(f[c.type]&&f[c.type].asNumber){if(!("valueAsNumber"in c))c.valueAsNumber=f[c.type].asNumber(e);if(isNaN(c.valueAsNumber))return!1;s(a.attr,b,c);if(isNaN(c[a.attr+"AsNumber"]))return i;i=c[a.attr+"AsNumber"]*a.factor<c.valueAsNumber*a.factor-1.0E-7}return i})});c.reflectProperties(["input"],["max","min","step"]);var q=c.defineNodeNameProperty("input","valueAsNumber",{prop:{get:function(){var a=n(this),a=f[a]&&f[a].asNumber?f[a].asNumber(b.prop(this,"value")):q.prop._supget&&q.prop._supget.apply(this,
arguments);null==a&&(a=l);return a},set:function(a){var h=n(this);f[h]&&f[h].numberToString?isNaN(a)?b.prop(this,"value",""):(h=f[h].numberToString(a),!1!==h?b.prop(this,"value",h):c.warn("INVALID_STATE_ERR: DOM Exception 11")):q.prop._supset&&q.prop._supset.apply(this,arguments)}}}),t=c.defineNodeNameProperty("input","valueAsDate",{prop:{get:function(){var a=n(this);return f[a]&&f[a].asDate&&!f[a].noAsDate?f[a].asDate(b.prop(this,"value")):t.prop._supget&&t.prop._supget.call(this)||null},set:function(a){var h=
n(this);if(f[h]&&f[h].dateToString&&!f[h].noAsDate){if(null===a)return b.prop(this,"value",""),"";h=f[h].dateToString(a);if(!1!==h)return b.prop(this,"value",h),h;c.warn("INVALID_STATE_ERR: DOM Exception 11")}else return t.prop._supset&&t.prop._supset.apply(this,arguments)||null}}}),j={number:{mismatch:function(a){return!p(a)},step:1,stepScaleFactor:1,asNumber:function(a){return p(a)?1*a:l},numberToString:function(a){return p(a)?a:!1}},range:{minDefault:0,maxDefault:100},date:{mismatch:function(a){if(!a||
!a.split||!/\d$/.test(a))return!0;var c=a.split(/\u002D/);if(3!==c.length)return!0;var e=!1;b.each(c,function(a,b){if(!(p(b)||b&&b=="0"+1*b))return e=!0,!1});if(e)return e;if(4!==c[0].length||2!=c[1].length||12<c[1]||2!=c[2].length||33<c[2])e=!0;return a!==this.dateToString(this.asDate(a,!0))},step:1,stepScaleFactor:864E5,asDate:function(a,b){return!b&&this.mismatch(a)?null:new Date(this.asNumber(a,!0))},asNumber:function(a,b){var c=l;if(b||!this.mismatch(a))a=a.split(/\u002D/),c=Date.UTC(a[0],a[1]-
1,a[2]);return c},numberToString:function(a){return p(a)?this.dateToString(new Date(1*a)):!1},dateToString:function(a){return a&&a.getFullYear?a.getUTCFullYear()+"-"+i(a.getUTCMonth()+1,2)+"-"+i(a.getUTCDate(),2):!1}},time:{mismatch:function(a,c){if(!a||!a.split||!/\d$/.test(a))return!0;a=a.split(/\u003A/);if(2>a.length||3<a.length)return!0;var e=!1,f;a[2]&&(a[2]=a[2].split(/\u002E/),f=parseInt(a[2][1],10),a[2]=a[2][0]);b.each(a,function(a,b){if(!(p(b)||b&&b=="0"+1*b)||2!==b.length)return e=!0,!1});
if(e||23<a[0]||0>a[0]||59<a[1]||0>a[1]||a[2]&&(59<a[2]||0>a[2])||f&&isNaN(f))return!0;f&&(100>f?f*=100:10>f&&(f*=10));return!0===c?[a,f]:!1},step:60,stepBase:0,stepScaleFactor:1E3,asDate:function(a){a=new Date(this.asNumber(a));return isNaN(a)?null:a},asNumber:function(a){var b=l,a=this.mismatch(a,!0);!0!==a&&(b=Date.UTC("1970",0,1,a[0][0],a[0][1],a[0][2]||0),a[1]&&(b+=a[1]));return b},dateToString:function(a){if(a&&a.getUTCHours){var b=i(a.getUTCHours(),2)+":"+i(a.getUTCMinutes(),2),c=a.getSeconds();
"0"!=c&&(b+=":"+i(c,2));c=a.getUTCMilliseconds();"0"!=c&&(b+="."+i(c,3));return b}return!1}},"datetime-local":{mismatch:function(a,b){if(!a||!a.split||2!==(a+"special").split(/\u0054/).length)return!0;a=a.split(/\u0054/);return f.date.mismatch(a[0])||f.time.mismatch(a[1],b)},noAsDate:!0,asDate:function(a){a=new Date(this.asNumber(a));return isNaN(a)?null:a},asNumber:function(a){var b=l,c=this.mismatch(a,!0);!0!==c&&(a=a.split(/\u0054/)[0].split(/\u002D/),b=Date.UTC(a[0],a[1]-1,a[2],c[0][0],c[0][1],
c[0][2]||0),c[1]&&(b+=c[1]));return b},dateToString:function(a,b){return f.date.dateToString(a)+"T"+f.time.dateToString(a,b)}}};(c.bugs.valueAsNumberSet||!k("number"))&&c.addInputType("number",j.number);(c.bugs.valueAsNumberSet||!k("range"))&&c.addInputType("range",b.extend({},j.number,j.range));(c.bugs.valueAsNumberSet||!k("date"))&&c.addInputType("date",j.date);(c.bugs.valueAsNumberSet||!k("time"))&&c.addInputType("time",b.extend({},j.date,j.time));(c.bugs.valueAsNumberSet||!k("datetime-local"))&&
c.addInputType("datetime-local",b.extend({},j.date,j.time,j["datetime-local"]))});
jQuery.webshims.register("form-number-date-ui",function(b,c,l,f,p){var k=c.triggerInlineForm,n=Modernizr.inputtypes,s=function(){var a={"padding-box":"innerWidth","border-box":"outerWidth","content-box":"width"},b=Modernizr.prefixed&&Modernizr.prefixed("boxSizing");return function(d,c){var f,e,i;e="width";b&&(e=a[d.css(b)]||e);f=d[e]();e="width"==e;if(f){var m=parseInt(c.css("marginLeft"),10)||0,r=c.outerWidth();(i=parseInt(d.css("marginRight"),10)||0)&&d.css("marginRight",0);m<=-1*r?(c.css("marginRight",
Math.floor(Math.abs(r+m)+i)),d.css("paddingRight",(parseInt(d.css("paddingRight"),10)||0)+Math.abs(m)),e&&d.css("width",Math.floor(f+m))):(c.css("marginRight",i),d.css("width",Math.floor(f-m-r)))}}}(),i=b.webshims.cfg["forms-ext"],q={dateFormat:"yy-mm-dd"},t=b([]),j,a=function(z,g){b("input",z).add(g.filter("input")).each(function(){var d=b.prop(this,"type");if(a[d]&&!c.data(this,"shadowData"))a[d](b(this))})},h=function(a,g){if(i.lazyDate){var d=b.data(a[0],"setDateLazyTimer");d&&clearTimeout(d);
b.data(a[0],"setDateLazyTimer",setTimeout(function(){a.datepicker("setDate",g);b.removeData(a[0],"setDateLazyTimer");a=null},0))}else a.datepicker("setDate",g)};if(i.lazyDate===p)try{i.lazyDate=b.browser.msie&&9>c.browserVersion||500>b(l).width()&&500>b(l).height()}catch(e){}a.common=function(a,g,d){Modernizr.formvalidation&&a.bind("firstinvalid",function(b){(c.fromSubmit||!j)&&a.unbind("invalid.replacedwidgetbubble").bind("invalid.replacedwidgetbubble",function(d){!b.isInvalidUIPrevented()&&!d.isDefaultPrevented()&&
(c.validityAlert.showFor(b.target),b.preventDefault(),d.preventDefault());a.unbind("invalid.replacedwidgetbubble")})});var e=a.attr("id"),e={css:{marginRight:a.css("marginRight"),marginLeft:a.css("marginLeft")},outerWidth:a.outerWidth(),label:e?b('label[for="'+e+'"]',a[0].form):t},f=c.getID(e.label);g.addClass(a[0].className);c.addShadowDom(a,g,{data:d||{},shadowFocusElement:b("input.input-datetime-local-date, span.ui-slider-handle",g)[0],shadowChilds:b("input, span.ui-slider-handle",g)});a.after(g).hide();
a[0].form&&b(a[0].form).bind("reset",function(b){b.originalEvent&&!b.isDefaultPrevented()&&setTimeout(function(){a.prop("value",a.prop("value"))},0)});1==g.length&&!b("*",g)[0]&&(g.attr("aria-labeledby",f),e.label.bind("click",function(){g.focus();return!1}));return e};Modernizr.formvalidation&&["input","form"].forEach(function(a){var b=c.defineNodeNameProperty(a,"checkValidity",{prop:{value:function(){j=!0;var a=b.prop._supvalue.apply(this,arguments);j=!1;return a}}})});if(!n["datetime-local"]||
i.replaceUI){var o=[0.595,0.395],y=[0.565,0.425],w=!b.browser.msie||6<c.browserVersion?0:0.45,x=function(a,g,d,e){var h,u,k=function(){m.dpDiv.unbind("mousedown.webshimsmousedownhandler");u=h=!1},m=g.bind("focusin",function(){k();m.dpDiv.unbind("mousedown.webshimsmousedownhandler").bind("mousedown.webshimsmousedownhandler",function(){h=!0})}).bind("focusout blur",function(a){h&&(u=!0,a.stopImmediatePropagation())}).datepicker(b.extend({onClose:function(){u&&f.activeElement!==g[0]?(k(),g.trigger("focusout"),
g.triggerHandler("blur")):k()}},q,i.datepicker,a.data("datepicker"))).bind("change",d).data("datepicker");m.dpDiv.addClass("input-date-datepicker-control");e&&c.triggerDomUpdate(e[0]);["disabled","min","max","value","step"].forEach(function(b){var d=a.prop(b);""!==d&&("disabled"!=b||!d)&&a.prop(b,d)});return m};a["datetime-local"]=function(c){if(b.fn.datepicker){var g=b('<span role="group" class="input-datetime-local"><input type="text" class="input-datetime-local-date" /><input type="time" class="input-datetime-local-time" /></span>'),
d=this.common(c,g,a["datetime-local"].attrs),e=b("input.input-datetime-local-date",g),f=x(c,e,function(d){var f=e.prop("value")||"",r="";if(i.lazyDate){var v=b.data(e[0],"setDateLazyTimer");v&&(clearTimeout(v),b.removeData(e[0],"setDateLazyTimer"))}if(f){r=b("input.input-datetime-local-time",g).prop("value")||"00:00";try{f=(f=b.datepicker.parseDate(e.datepicker("option","dateFormat"),f))?b.datepicker.formatDate("yy-mm-dd",f):e.prop("value")}catch(h){f=e.prop("value")}}a["datetime-local"].blockAttr=
!0;c.prop("value",!f&&!r?"":f+"T"+r);a["datetime-local"].blockAttr=!1;d.stopImmediatePropagation();k(c[0],"input");k(c[0],"change")},g);b("input.input-datetime-local-time",g).bind("change",function(d){var g=b.prop(this,"value"),f=["",""];if(g){f=c.prop("value").split("T");if(2>f.length||!f[0])f[0]=b.datepicker.formatDate("yy-mm-dd",new Date);if(f[1]=g)try{e.prop("value",b.datepicker.formatDate(e.datepicker("option","dateFormat"),b.datepicker.parseDate("yy-mm-dd",f[0])))}catch(v){}}f=!f[0]&&!f[1]?
"":f.join("T");a["datetime-local"].blockAttr=!0;c.prop("value",f);a["datetime-local"].blockAttr=!1;d.stopImmediatePropagation();k(c[0],"input");k(c[0],"change")});g.attr("aria-labeledby",d.label.attr("id"));d.label.bind("click",function(){e.focus();return!1});if(d.css&&(g.css(d.css),d.outerWidth)){g.outerWidth(d.outerWidth);var d=g.width(),h=f.trigger[0]?o:y;e.outerWidth(Math.floor(d*h[0]-w),!0);b("input.input-datetime-local-time",g).outerWidth(Math.floor(d*h[1]-w),!0);f.trigger[0]&&s(e,f.trigger)}}};
a["datetime-local"].attrs={disabled:function(a,c,d){b("input.input-datetime-local-date",c).prop("disabled",!!d);b("input.input-datetime-local-time",c).prop("disabled",!!d)},step:function(a,c,d){b("input.input-datetime-local-time",c).attr("step",d)},min:function(a,c,d){if(d){d=d.split?d.split("T"):[];try{d=b.datepicker.parseDate("yy-mm-dd",d[0])}catch(f){d=!1}}d||(d=null);b("input.input-datetime-local-date",c).datepicker("option","minDate",d)},max:function(a,c,d){if(d){d=d.split?d.split("T"):[];try{d=
b.datepicker.parseDate("yy-mm-dd",d[0])}catch(f){d=!1}}d||(d=null);b("input.input-datetime-local-date",c).datepicker("option","maxDate",d)},value:function(c,g,d){var f;if(d){d=d.split?d.split("T"):[];try{f=b.datepicker.parseDate("yy-mm-dd",d[0])}catch(e){f=!1}}f?(a["datetime-local"].blockAttr||h(b("input.input-datetime-local-date",g),f),b("input.input-datetime-local-time",g).prop("value",d[1]||"00:00")):(b("input.input-datetime-local-date",g).prop("value",d[0]||""),b("input.input-datetime-local-time",
g).prop("value",d[1]||""))}};a.date=function(c){if(b.fn.datepicker){var g=b('<input class="input-date" type="text" />'),d=this.common(c,g,a.date.attrs),f=x(c,g,function(d){a.date.blockAttr=!0;var f;if(i.lazyDate){var e=b.data(g[0],"setDateLazyTimer");e&&(clearTimeout(e),b.removeData(g[0],"setDateLazyTimer"))}try{f=(f=b.datepicker.parseDate(g.datepicker("option","dateFormat"),g.prop("value")))?b.datepicker.formatDate("yy-mm-dd",f):g.prop("value")}catch(m){f=g.prop("value")}c.prop("value",f);a.date.blockAttr=
!1;d.stopImmediatePropagation();k(c[0],"input");k(c[0],"change")});d.css&&(g.css(d.css),d.outerWidth&&g.outerWidth(d.outerWidth),f.trigger[0]&&s(g,f.trigger))}};a.date.attrs={disabled:function(a,c,d){b.prop(c,"disabled",!!d)},min:function(a,c,d){try{d=b.datepicker.parseDate("yy-mm-dd",d)}catch(f){d=!1}d&&b(c).datepicker("option","minDate",d)},max:function(a,c,d){try{d=b.datepicker.parseDate("yy-mm-dd",d)}catch(f){d=!1}d&&b(c).datepicker("option","maxDate",d)},value:function(c,f,d){if(!a.date.blockAttr){try{var e=
b.datepicker.parseDate("yy-mm-dd",d)}catch(i){e=!1}e?h(b(f),e):b.prop(f,"value",d)}}}}if(!n.range||i.replaceUI)a.range=function(c){if(b.fn.slider){var f=b('<span class="input-range"><span class="ui-slider-handle" role="slider" tabindex="0" /></span>'),d=this.common(c,f,a.range.attrs);b("span",f).attr("aria-labeledby",d.label.attr("id"));d.label.bind("click",function(){b("span",f).focus();return!1});d.css&&(f.css(d.css),d.outerWidth&&f.outerWidth(d.outerWidth));f.slider(b.extend({},i.slider,c.data("slider"),
{slide:function(b,d){if(b.originalEvent)a.range.blockAttr=!0,c.prop("value",d.value),a.range.blockAttr=!1,k(c[0],"input"),k(c[0],"change")}}));["disabled","min","max","step","value"].forEach(function(a){var d=c.attr(a),f;"value"==a&&!d&&(f=c.getShadowElement())&&(d=(b(f).slider("option","max")-b(f).slider("option","min"))/2);null!=d&&c.attr(a,d)})}},a.range.attrs={disabled:function(a,c,d){d=!!d;b(c).slider("option","disabled",d);b("span",c).attr({"aria-disabled":d+"",tabindex:d?"-1":"0"})},min:function(a,
c,d){d=d?1*d||0:0;b(c).slider("option","min",d);b("span",c).attr({"aria-valuemin":d})},max:function(a,c,d){d=d||0===d?1*d||100:100;b(c).slider("option","max",d);b("span",c).attr({"aria-valuemax":d})},value:function(c,f,d){d=b(c).prop("valueAsNumber");isNaN(d)||(a.range.blockAttr||b(f).slider("option","value",d),b("span",f).attr({"aria-valuenow":d,"aria-valuetext":d}))},step:function(a,c,d){d=d&&b.trim(d)?1*d||1:1;b(c).slider("option","step",d)}};if(!c.bugs.valueAsNumberSet&&(i.replaceUI||!Modernizr.inputtypes.date||
!Modernizr.inputtypes["datetime-local"]||!Modernizr.inputtypes.range))l=function(){c.data(this,"hasShadow")&&b.prop(this,"value",b.prop(this,"value"))},c.onNodeNamesPropertyModify("input","valueAsNumber",l),c.onNodeNamesPropertyModify("input","valueAsDate",l);b.each(["disabled","min","max","value","step"],function(a,b){c.onNodeNamesPropertyModify("input",b,function(a){var f=c.data(this,"shadowData");if(f&&f.data&&f.data[b]&&f.nativeElement===this)f.data[b](this,f.shadowElement,a)})});if(!i.availabeLangs)i.availabeLangs=
"af ar ar-DZ az bg bs ca cs da de el en-AU en-GB en-NZ eo es et eu fa fi fo fr fr-CH gl he hr hu hy id is it ja ko kz lt lv ml ms nl no pl pt-BR rm ro ru sk sl sq sr sr-SR sv ta th tr uk vi zh-CN zh-HK zh-TW".split(" ");l=function(){b.datepicker&&(c.activeLang({langObj:b.datepicker.regional,module:"form-number-date-ui",callback:function(a){b("input.hasDatepicker").filter(".input-date, .input-datetime-local-date").datepicker("option",b.extend(q,a,i.datepicker))}}),b(f).unbind("jquery-uiReady.langchange input-widgetsReady.langchange"))};
b(f).bind("jquery-uiReady.langchange input-widgetsReady.langchange",l);l();(function(){var a=function(){var a={};return function(c){return c in a?a[c]:a[c]=b('<input type="'+c+'" />')[0].type===c}}();if(!Modernizr.input.valueAsNumber||!a("number")||!a("time")){var e=c.cfg["forms-ext"],d=c.inputTypes,h=function(a,f,e){e=e||{};if(!("type"in e))e.type=b.prop(a,"type");if(!("step"in e))e.step=c.getStep(a,e.type);if(!("valueAsNumber"in e))e.valueAsNumber=d[e.type].asNumber(b.prop(a,"value"));var g="any"==
e.step?d[e.type].step*d[e.type].stepScaleFactor:e.step;c.addMinMaxNumberToCache("min",b(a),e);c.addMinMaxNumberToCache("max",b(a),e);if(isNaN(e.valueAsNumber))e.valueAsNumber=d[e.type].stepBase||0;if("any"!==e.step&&(a=Math.round(1E7*((e.valueAsNumber-(e.minAsnumber||0))%e.step))/1E7)&&Math.abs(a)!=e.step)e.valueAsNumber-=a;a=e.valueAsNumber+g*f;return a=!isNaN(e.minAsNumber)&&a<e.minAsNumber?e.valueAsNumber*f<e.minAsNumber?e.minAsNumber:isNaN(e.maxAsNumber)?e.valueAsNumber:e.maxAsNumber:!isNaN(e.maxAsNumber)&&
a>e.maxAsNumber?e.valueAsNumber*f>e.maxAsNumber?e.maxAsNumber:isNaN(e.minAsNumber)?e.valueAsNumber:e.minAsNumber:Math.round(1E7*a)/1E7};c.modules["form-number-date-ui"].getNextStep=h;var i=function(a,c,e){if(!a.disabled&&!a.readOnly&&!b(e).hasClass("step-controls")&&(b.prop(a,"value",d[c].numberToString(h(a,b(e).hasClass("step-up")?1:-1,{type:c}))),b(a).unbind("blur.stepeventshim"),k(a,"input"),f.activeElement)){if(f.activeElement!==a)try{a.focus()}catch(g){}setTimeout(function(){if(f.activeElement!==
a)try{a.focus()}catch(c){}b(a).one("blur.stepeventshim",function(){k(a,"change")})},0)}};if(e.stepArrows){var j={set:function(){var a=c.data(this,"step-controls");if(a)a[this.disabled||this.readonly?"addClass":"removeClass"]("disabled-step-control")}};c.onNodeNamesPropertyModify("input","disabled",j);c.onNodeNamesPropertyModify("input","readonly",b.extend({},j))}var l={38:1,40:-1};c.addReady(function(f,j){e.stepArrows&&b("input",f).add(j.filter("input")).each(function(){var f=b.prop(this,"type");
if(d[f]&&d[f].asNumber&&e.stepArrows&&!(!0!==e.stepArrows&&!e.stepArrows[f]||a(f)||b(this).hasClass("has-step-controls"))){var j=this,m=b('<span class="step-controls" unselectable="on"><span class="step-up" /><span class="step-down" /></span>').insertAfter(this).bind("selectstart dragstart",function(){return!1}).bind("mousedown mousepress",function(a){i(j,f,a.target);return!1}).bind("mousepressstart mousepressend",function(a){b(a.target)["mousepressstart"==a.type?"addClass":"removeClass"]("mousepress-ui")}),
n=b(this).addClass("has-step-controls").attr({readonly:this.readOnly,disabled:this.disabled,autocomplete:"off",role:"spinbutton"}).bind(b.browser.msie?"keydown":"keypress",function(a){if(!this.disabled&&!this.readOnly&&l[a.keyCode])return b.prop(this,"value",d[f].numberToString(h(this,l[a.keyCode],{type:f}))),k(this,"input"),!1});c.data(this,"step-controls",m);e.calculateWidth&&(s(n,m),m.css("marginTop",(n.outerHeight()-m.outerHeight())/2))}})})}})();c.addReady(function(e,g){b(f).bind("jquery-uiReady.initinputui input-widgetsReady.initinputui",
function(){(b.datepicker||b.fn.slider)&&a(e,g);b.datepicker&&b.fn.slider?b(f).unbind(".initinputui"):c.modules["input-widgets"].src||c.warn('jQuery UI Widget factory is already included, but not datepicker or slider. configure src of $.webshims.modules["input-widgets"].src')})})});
