(function(e){function t(t){for(var a,r,c=t[0],u=t[1],l=t[2],s=0,d=[];s<c.length;s++)r=c[s],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&d.push(i[r][0]),i[r]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(e[a]=u[a]);h&&h(t);while(d.length)d.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,r=1;r<n.length;r++){var c=n[r];0!==i[c]&&(a=!1)}a&&(o.splice(t--,1),e=u(u.s=n[0]))}return e}var a={},r={app:0},i={app:0},o=[];function c(e){return u.p+"js/"+({}[e]||e)+"."+{"chunk-5cc86dba":"cc8f20de","chunk-2d0cf8c7":"1520d9e3","chunk-2d0e5060":"74e69a70","chunk-2d0e57ae":"c7cc4b8b","chunk-2d20f30b":"73c588ff","chunk-2d20fac7":"15759408","chunk-2d217aa5":"5f06e9bc","chunk-4ee108cf":"e725a046"}[e]+".js"}function u(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={"chunk-5cc86dba":1,"chunk-4ee108cf":1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var a="css/"+({}[e]||e)+"."+{"chunk-5cc86dba":"85e964b6","chunk-2d0cf8c7":"31d6cfe0","chunk-2d0e5060":"31d6cfe0","chunk-2d0e57ae":"31d6cfe0","chunk-2d20f30b":"31d6cfe0","chunk-2d20fac7":"31d6cfe0","chunk-2d217aa5":"31d6cfe0","chunk-4ee108cf":"cf10310a"}[e]+".css",i=u.p+a,o=document.getElementsByTagName("link"),c=0;c<o.length;c++){var l=o[c],s=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(s===a||s===i))return t()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){l=d[c],s=l.getAttribute("data-href");if(s===a||s===i)return t()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=t,h.onerror=function(t){var a=t&&t.target&&t.target.src||i,o=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=a,delete r[e],h.parentNode.removeChild(h),n(o)},h.href=i;var g=document.getElementsByTagName("head")[0];g.appendChild(h)})).then((function(){r[e]=0})));var a=i[e];if(0!==a)if(a)t.push(a[2]);else{var o=new Promise((function(t,n){a=i[e]=[t,n]}));t.push(a[2]=o);var l,s=document.createElement("script");s.charset="utf-8",s.timeout=120,u.nc&&s.setAttribute("nonce",u.nc),s.src=c(e);var d=new Error;l=function(t){s.onerror=s.onload=null,clearTimeout(h);var n=i[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+a+": "+r+")",d.name="ChunkLoadError",d.type=a,d.request=r,n[1](d)}i[e]=void 0}};var h=setTimeout((function(){l({type:"timeout",target:s})}),12e4);s.onerror=s.onload=l,document.head.appendChild(s)}return Promise.all(t)},u.m=e,u.c=a,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)u.d(n,a,function(t){return e[t]}.bind(null,a));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/",u.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var d=0;d<l.length;d++)t(l[d]);var h=s;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},2310:function(e,t,n){},2666:function(e,t,n){"use strict";n("2310")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",{class:e.getTheme,attrs:{id:"app"}},[n("TopNavBar"),n("v-main",[n("router-view")],1),n("Footer")],1)},i=[],o=n("5530"),c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app-bar",{class:e.getTheme,attrs:{app:"",height:"50"}},[n("v-spacer"),n("v-btn",{staticClass:"navHover",attrs:{text:"",to:"/"},on:{click:function(t){return e.$vuetify.goTo("#about-me")}}},[n("v-icon",[e._v("mdi-home")])],1),"/"===e.$route.path&&e.showNavContent?n("div",[n("v-btn",{staticClass:"navHover",attrs:{text:""},on:{click:function(t){return e.$vuetify.goTo("#about-me")}}},[e._v(" "+e._s(e.navigation.about)+" ")]),n("v-btn",{staticClass:"navHover",attrs:{text:""},on:{click:function(t){return e.$vuetify.goTo("#career")}}},[e._v(" "+e._s(e.navigation.career)+" ")]),n("v-btn",{staticClass:"navHover",attrs:{text:""},on:{click:function(t){return e.$vuetify.goTo("#skills")}}},[e._v(" "+e._s(e.navigation.skills)+" ")]),n("v-btn",{staticClass:"navHover",attrs:{text:""},on:{click:function(t){return e.$vuetify.goTo("#projects")}}},[e._v(" "+e._s(e.navigation.projects)+" ")]),n("v-btn",{staticClass:"navHover",attrs:{text:""},on:{click:function(t){return e.$vuetify.goTo("#contact")}}},[e._v(" "+e._s(e.navigation.contact)+" ")])],1):e._e(),n("FlagDropDown"),n("ThemeChanger"),n("v-spacer")],1)},u=[],l=(n("b0c0"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-menu",{attrs:{dark:"darkTheme"===e.getTheme,auto:"","offset-y":"",bottom:"",transition:"slide-y-transition"},scopedSlots:e._u([{key:"activator",fn:function(t){var a=t.on;return[n("v-app-bar-nav-icon",e._g({attrs:{icon:""}},a),[n("flag",{attrs:{iso:e.Flag,squared:!1}})],1)]}}])},e._l(e.languages,(function(t){return n("v-btn",{key:t.title,on:{click:function(n){return e.changeLocale(t.language)}}},[n("flag",{attrs:{iso:t.flag,squared:!1}})],1)})),1)}),s=[],d=n("2f62"),h=n("a925");a["a"].use(h["a"]);var g={de:{labels:{Flag:"de"},navigation:{footer:"Erstellt von Dominik Ratzel",about:"Über mich",skills:"IT-Kenntnisse",projects:"Projekte",contact:"Kontakt",career:"Karriere"},content:{welcome1:"Hey, ich bin Dominik.",welcome2:"Ich studiere Informatik an der Hochschule der Medien in Stuttgart."},career:{realschule:"Realschulabschluss CHR Nagold",imtech:"Ausbildung als Elektroniker für Energie- und Gebäudetechnik bei Imtech Deutschland GmbH & Co. KG Niederlassung Stuttgart",brenner1:"Ausbildung als Elektroniker für Energie- und Gebäudetechnik bei Elektrohaus Brenner in Kuppingen",brenner2:"Elektroniker für Energie- und Gebäudetechnik bei Elektrohaus Brenner in Kuppingen",fhs:"1-jährige Fachhochschulreife an der Rolf-Benz-Schule in Nagold",damiler:"Ferienbeschäftigung bei Daimler AG",bachelor:"Bachelor Studium im Fachbereich Medieninformatik an der Hochschule der Medien in Stuttgart",fraunhofer1:"Werkstudent im Bereich Entwicklung von Diensten für Cloud-Plattformen bei Fraunhofer-Institut für Produktionstechnik und Automatisierung IPA in Stuttgart",novatec:"Praktikant im Praxissemester im Bereich Digital Innovation bei Novatec Consulting GmbH in Leinfelden-Echterdingen",novatec2:"Werkstudent im Bereich Digital Innovation bei Novatec Consulting GmbH in Leinfelden-Echterdingen",startup:"Gründung des Startup LineTrack mit 3 Partnern"},careerHeadlines:{realschule:"Realschulabschluss",imtech:"Ausbildung bei Imtech",brenner1:"Ausbildung bei Elektrohaus Brenner",brenner2:"Elektroniker bei Elektrohaus Brenner",fhs:"Fachhochschulreife",damiler:"Ferienbeschäftigung bei Daimler AG",bachelor:"Bachelor Studium",fraunhofer1:"Werkstudent bei Fraunhofer-Institut",novatec:"Praktikant bei Novatec Consulting GmbH",novatec2:"Werkstudent bei Novatec Consulting GmbH",startup:"Gründung Startup"},buttons:{reading:"Weiterlesen",submit:"Senden"},projectHeadlines:{gameHall:"Online Spielehalle",startup:"LineTrack GmbH",webShop:"Online Shop",deviceManagement:"Geräte- und Serviceverwaltung",parkingSystem:"Parkleitsystem",hinH:"Hand in Hand Spendenlauf Stuttgart",beGuided:"BeGuided Design"},projectsText:{gameHall:"Casino WebApp mit Benutzerverwaltung",startup:"Startup LineTrack",webShop:"Webshop WebApp mit Benutzerverwaltung",deviceManagement:"Geräte- und Serviceverwaltungsanwendung WebApp erstellt bei Fraunhofer",parkingSystem:"IoT and Cloud Service Projekt für ein Parkleitsyystem",hinH:"Middleware Server für den Hand in Hand Spendenlauf Stuttgart erstellt bei Novatec",beGuided:"BeGuided Design erstellt bei Novatec"},fields:{name:"Name*",subject:"Betreff*",message:"Nachricht*"}},en:{labels:{Flag:"us"},navigation:{footer:"Created by Dominik Ratzel",about:"About",skills:"IT-Skills",projects:"Projects",contact:"Contact",career:"Career"},content:{welcome1:"Hey, I'm Dominik.",welcome2:"I study computer science at the Stuttgart Media University."},career:{realschule:"High school diploma CHR Nagold",imtech:"Training as electronics technician for energy and building technology at Imtech Deutschland GmbH & Co. KG ",brenner1:"Training as electronics technician for energy and building technology at Elektrohaus Brenner in Kuppingen",brenner2:"Electronics technician for energy and building technology at Elektrohaus Brenner in Kuppingen",fhs:"1-year technical college entrance qualification at the Rolf Benz School in Nagold",damiler:"Holiday employment at Daimler AG",bachelor:"Bachelor's degree in media informatics at the Stuttgart Media University",fraunhofer1:"Working student in the area of developing services for cloud platforms at the Fraunhofer Institute for Manufacturing Engineering and Automation IPA in Stuttgart",novatec:"Internship in the practical semester in the field of digital innovation at Novatec Consulting GmbH in Leinfelden-Echterdingen",novatec2:"Working student in the practical semester in the field of digital innovation at Novatec Consulting GmbH in Leinfelden-Echterdingen",startup:"Founding of the startup LineTrack GmbH with 3 partners"},careerHeadlines:{realschule:"High school diploma",imtech:"Training at Imtech",brenner1:"Training at Elektrohaus Brenner",brenner2:"Electronics technician at Elektrohaus Brenner",fhs:"Advanced technical college",damiler:"Vacation employment at Daimler AG",bachelor:"Bachelor study",fraunhofer1:"Working student at Fraunhofer Institute\n",novatec:"Trainee at Novatec Consulting GmbH\n",novatec2:"Working student at Novatec Consulting GmbH\n",startup:"Founding of the startup"},buttons:{reading:"Continue Reading",submit:"Submit"},projectHeadlines:{gameHall:"Online game hall",startup:"LineTrack GmbH",webShop:"WebShop",deviceManagement:"Device and service management",parkingSystem:"Parking control system",hinH:"Hand in hand charity run Stuttgart",beGuided:"BeGuided Design"},projectsText:{gameHall:"Casino WebApp with user management",startup:"Startup LineTrack GmbH",webShop:"WebShop WebApp with user management",deviceManagement:"Device and service management application WebApp created at Fraunhofer",parkingSystem:"IoT and Cloud Service project for a parking guidance system",hinH:"Middleware Server for the Hand in Hand Spendenlauf Stuttgart created at Novatec",beGuided:"BeGuided Design created at Novatec"},fields:{name:"Name*",subject:"Subject*",message:"Message*"}}},m=new h["a"]({locale:localStorage.getItem("Language")|Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_I18N_LOCALE||"de",fallbackLocale:localStorage.getItem("Language")|Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_I18N_FALLBACK_LOCALE||"de",messages:g}),f={name:"FlagDropDown",computed:Object(o["a"])(Object(o["a"])({},Object(d["b"])(["languages","getTheme"])),{},{Flag:function(){return this.$t("labels.Flag")}}),beforeCreate:function(){console.log("Before Create"),this.$locale.currentLanguage()},methods:{changeLocale:function(e){console.log("Changing Locale"),m.locale=e,this.$locale.change(e)}}},p=f,b=n("2877"),v=n("6544"),k=n.n(v),y=n("5bc1"),S=n("8336"),T=n("e449"),H=Object(b["a"])(p,l,s,!1,null,"09069218",null),E=H.exports;k()(H,{VAppBarNavIcon:y["a"],VBtn:S["a"],VMenu:T["a"]});var C=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app-bar-nav-icon",{staticClass:"navHover",on:{click:function(t){return e.$store.commit("UPDATE_THEME")}}},["lightTheme"===e.getTheme?n("v-icon",[e._v(" mdi-white-balance-sunny ")]):"darkTheme"===e.getTheme?n("v-icon",[e._v(" mdi-brightness-2 ")]):e._e()],1)},_=[],w={name:"ThemeChanger",computed:Object(o["a"])({},Object(d["b"])(["getTheme"]))},j=w,A=n("132d"),I=Object(b["a"])(j,C,_,!1,null,"007dd583",null),B=I.exports;k()(I,{VAppBarNavIcon:y["a"],VIcon:A["a"]});var P={name:"TopNavBar",components:{ThemeChanger:B,FlagDropDown:E},computed:Object(o["a"])(Object(o["a"])({},Object(d["b"])(["getTheme"])),{},{showNavContent:function(){if("lg"===this.$vuetify.breakpoint.name||"xl"===this.$vuetify.breakpoint.name)return!0},navigation:function(){return this.$t("navigation")}})},L=P,N=(n("2666"),n("40dc")),F=n("2fa4"),G=Object(b["a"])(L,c,u,!1,null,"3bf6fd02",null),O=G.exports;k()(G,{VAppBar:N["a"],VBtn:S["a"],VIcon:A["a"],VSpacer:F["a"]});var D=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-footer",{staticClass:"justify-center",attrs:{height:"50"}},[n("div",{staticClass:"title text--lighten-1 text-center"},[e._v(" © 2020 "+e._s(e.navigation.footer)+" ")])])},x=[],M={name:"Footer",computed:{navigation:function(){return this.$t("navigation")}}},W=M,$=n("553a"),V=Object(b["a"])(W,D,x,!1,null,"5db41236",null),R=V.exports;k()(V,{VFooter:$["a"]});var K={name:"App",components:{Footer:R,TopNavBar:O},data:function(){return{}},computed:Object(o["a"])({},Object(d["b"])(["getTheme"]))},U=K,z=(n("fb9f"),n("7496")),q=n("f6c4"),J=Object(b["a"])(U,r,i,!1,null,null,null),Q=J.exports;k()(J,{VApp:z["a"],VMain:q["a"]});n("d3b7");var X=n("8c4f");a["a"].use(X["a"]);var Y=[{path:"/",name:"Home",component:function(){return Promise.all([n.e("chunk-5cc86dba"),n.e("chunk-4ee108cf")]).then(n.bind(null,"bb51"))}},{path:"/MiniSpielehalle",name:"MiniSpielehalle",component:function(){return Promise.all([n.e("chunk-5cc86dba"),n.e("chunk-2d217aa5")]).then(n.bind(null,"c860"))}},{path:"/ParkingControlSystem",name:"Parking Control System",component:function(){return Promise.all([n.e("chunk-5cc86dba"),n.e("chunk-2d0cf8c7")]).then(n.bind(null,"63d8"))}},{path:"/WebShop",name:"WebShop",component:function(){return Promise.all([n.e("chunk-5cc86dba"),n.e("chunk-2d0e5060")]).then(n.bind(null,"935e"))}},{path:"/DeviceManagement",name:"DeviceManagement",component:function(){return Promise.all([n.e("chunk-5cc86dba"),n.e("chunk-2d20f30b")]).then(n.bind(null,"b326"))}},{path:"/HandInHand",name:"HandInHand",component:function(){return Promise.all([n.e("chunk-5cc86dba"),n.e("chunk-2d20fac7")]).then(n.bind(null,"b542"))}},{path:"/BeGuided",name:"BeGuided",component:function(){return Promise.all([n.e("chunk-5cc86dba"),n.e("chunk-2d0e57ae")]).then(n.bind(null,"9551"))}}],Z=new X["a"]({routes:Y}),ee=Z,te={state:{languages:[{flag:"de",language:"de",title:"de"},{flag:"us",language:"en",title:"en"}],currents:m.t("labels.Flag")},getters:{languages:function(e){return e.languages},currents:function(e){return null!==localStorage.getItem("Language")?localStorage.getItem("Language"):e.currents}},actions:{},mutations:{}},ne={state:{theme:null!==localStorage.getItem("Theme")?localStorage.getItem("Theme"):"lightTheme"},getters:{getTheme:function(e){return e.theme}},actions:{},mutations:{UPDATE_THEME:function(e){"lightTheme"===e.theme?(e.theme="darkTheme",localStorage.setItem("Theme","darkTheme")):"darkTheme"===e.theme&&(e.theme="lightTheme",localStorage.setItem("Theme","lightTheme"))}}};a["a"].use(d["a"]);var ae=new d["a"].Store({state:{},mutations:{},actions:{},modules:{language:te,style:ne}}),re=n("f309"),ie=(n("15f5"),n("d1e78"),n("5363"),n("1f54"),n("5607"));a["a"].use(re["a"]),a["a"].use(h["a"]);var oe=new h["a"]({locale:localStorage.getItem("Language")||"de",fallbackLocale:localStorage.getItem("Language")||"de",silentTranslationWarn:!0,silentFallbackWarn:!0});a["a"].config.disableNoTranslationWarning=!0,a["a"].prototype.$locale={change:function(e){oe.locale=e,localStorage.setItem("Language",e)},currentLanguage:function(){return null!==localStorage.getItem("Language")?localStorage.getItem("Language"):oe.locale}};var ce=new re["a"]({theme:{options:{customProperties:!0},themes:{light:{primary:"#ee44aa",secondary:"#424242",accent:"#82B1FF",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FFC107"}}},icons:{iconfont:"mdi"},lang:{t:function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];return oe.t(e,n)}},directives:{Ripple:ie["a"]}}),ue=(n("d5e8"),n("6f19")),le=n("7bb1"),se=n("d61f");a["a"].component("ValidationProvider",ue["a"]),a["a"].component("ValidationObserver",le["a"]),a["a"].use(se["a"]),a["a"].config.productionTip=!1,new a["a"]({router:ee,store:ae,vuetify:ce,i18n:m,render:function(e){return e(Q)},mounted:function(){return document.dispatchEvent(new Event("x-app-rendered"))}}).$mount("#app")},6630:function(e,t,n){},fb9f:function(e,t,n){"use strict";n("6630")}});
//# sourceMappingURL=app.9e1d24c3.js.map