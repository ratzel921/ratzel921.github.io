(function(e){function n(n){for(var a,r,c=n[0],l=n[1],u=n[2],s=0,h=[];s<c.length;s++)r=c[s],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&h.push(o[r][0]),o[r]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);d&&d(n);while(h.length)h.shift()();return i.push.apply(i,u||[]),t()}function t(){for(var e,n=0;n<i.length;n++){for(var t=i[n],a=!0,r=1;r<t.length;r++){var c=t[r];0!==o[c]&&(a=!1)}a&&(i.splice(n--,1),e=l(l.s=t[0]))}return e}var a={},r={app:0},o={app:0},i=[];function c(e){return l.p+"js/"+({}[e]||e)+"."+{"chunk-5cc86dba":"cc8f20de","chunk-2d0cf8c7":"4066271c","chunk-2d0dd84b":"d9b3f834","chunk-2d0e5060":"fa822f1d","chunk-2d0e57ae":"696a0c56","chunk-2d20f30b":"c9ef5162","chunk-2d20fac7":"a9dc93be","chunk-2d217aa5":"057b9fec","chunk-41db6828":"a55fc439"}[e]+".js"}function l(n){if(a[n])return a[n].exports;var t=a[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,l),t.l=!0,t.exports}l.e=function(e){var n=[],t={"chunk-5cc86dba":1,"chunk-41db6828":1};r[e]?n.push(r[e]):0!==r[e]&&t[e]&&n.push(r[e]=new Promise((function(n,t){for(var a="css/"+({}[e]||e)+"."+{"chunk-5cc86dba":"85e964b6","chunk-2d0cf8c7":"31d6cfe0","chunk-2d0dd84b":"31d6cfe0","chunk-2d0e5060":"31d6cfe0","chunk-2d0e57ae":"31d6cfe0","chunk-2d20f30b":"31d6cfe0","chunk-2d20fac7":"31d6cfe0","chunk-2d217aa5":"31d6cfe0","chunk-41db6828":"507d3fbf"}[e]+".css",o=l.p+a,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var u=i[c],s=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(s===a||s===o))return n()}var h=document.getElementsByTagName("style");for(c=0;c<h.length;c++){u=h[c],s=u.getAttribute("data-href");if(s===a||s===o)return n()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=n,d.onerror=function(n){var a=n&&n.target&&n.target.src||o,i=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=a,delete r[e],d.parentNode.removeChild(d),t(i)},d.href=o;var g=document.getElementsByTagName("head")[0];g.appendChild(d)})).then((function(){r[e]=0})));var a=o[e];if(0!==a)if(a)n.push(a[2]);else{var i=new Promise((function(n,t){a=o[e]=[n,t]}));n.push(a[2]=i);var u,s=document.createElement("script");s.charset="utf-8",s.timeout=120,l.nc&&s.setAttribute("nonce",l.nc),s.src=c(e);var h=new Error;u=function(n){s.onerror=s.onload=null,clearTimeout(d);var t=o[e];if(0!==t){if(t){var a=n&&("load"===n.type?"missing":n.type),r=n&&n.target&&n.target.src;h.message="Loading chunk "+e+" failed.\n("+a+": "+r+")",h.name="ChunkLoadError",h.type=a,h.request=r,t[1](h)}o[e]=void 0}};var d=setTimeout((function(){u({type:"timeout",target:s})}),12e4);s.onerror=s.onload=u,document.head.appendChild(s)}return Promise.all(n)},l.m=e,l.c=a,l.d=function(e,n,t){l.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,n){if(1&n&&(e=l(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(l.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var a in e)l.d(t,a,function(n){return e[n]}.bind(null,a));return t},l.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(n,"a",n),n},l.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},l.p="/",l.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],s=u.push.bind(u);u.push=n,u=u.slice();for(var h=0;h<u.length;h++)n(u[h]);var d=s;i.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},2310:function(e,n,t){},2666:function(e,n,t){"use strict";t("2310")},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var a=t("2b0e"),r=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("v-app",{class:e.getTheme,attrs:{id:"app"}},[t("TopNavBar"),t("v-main",[t("router-view")],1),t("Footer")],1)},o=[],i=t("5530"),c=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("v-app-bar",{class:e.getTheme,attrs:{app:"",height:"50"}},[t("v-spacer"),t("v-btn",{staticClass:"navHover",attrs:{text:"",to:"/"},on:{click:function(n){return e.$vuetify.goTo("#about-me")}}},[t("v-icon",[e._v("mdi-home")])],1),"/"===e.$route.path&&e.showNavContent?t("div",[t("v-btn",{staticClass:"navHover",attrs:{text:""},on:{click:function(n){return e.$vuetify.goTo("#about-me")}}},[e._v(" "+e._s(e.navigation.about)+" ")]),t("v-btn",{staticClass:"navHover",attrs:{text:""},on:{click:function(n){return e.$vuetify.goTo("#career")}}},[e._v(" "+e._s(e.navigation.career)+" ")]),t("v-btn",{staticClass:"navHover",attrs:{text:""},on:{click:function(n){return e.$vuetify.goTo("#skills")}}},[e._v(" "+e._s(e.navigation.skills)+" ")]),t("v-btn",{staticClass:"navHover",attrs:{text:""},on:{click:function(n){return e.$vuetify.goTo("#projects")}}},[e._v(" "+e._s(e.navigation.projects)+" ")]),t("v-btn",{staticClass:"navHover",attrs:{text:""},on:{click:function(n){return e.$vuetify.goTo("#contact")}}},[e._v(" "+e._s(e.navigation.contact)+" ")])],1):e._e(),t("FlagDropDown"),t("ThemeChanger"),t("v-spacer")],1)},l=[],u=(t("b0c0"),function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("v-menu",{attrs:{dark:"darkTheme"===e.getTheme,auto:"","offset-y":"",bottom:"",transition:"slide-y-transition"},scopedSlots:e._u([{key:"activator",fn:function(n){var a=n.on;return[t("v-app-bar-nav-icon",e._g({attrs:{icon:""}},a),[t("flag",{attrs:{iso:e.Flag,squared:!1}})],1)]}}])},e._l(e.languages,(function(n){return t("v-btn",{key:n.title,on:{click:function(t){return e.changeLocale(n.language)}}},[t("flag",{attrs:{iso:n.flag,squared:!1}})],1)})),1)}),s=[],h=t("2f62"),d=t("a925");a["a"].use(d["a"]);var g={de:{labels:{Flag:"de"},navigation:{footer:"Erstellt von Dominik Ratzel",about:"Über mich",skills:"IT-Kenntnisse",projects:"Projekte",contact:"Kontakt",career:"Karriere"},content:{welcome1:"Hey, ich bin Dominik.",welcome2:"Ich studiere Informatik an der Hochschule der Medien in Stuttgart."},career:{realschule:"Realschulabschluss CHR Nagold",imtech:"Ausbildung als Elektroniker für Energie- und Gebäudetechnik bei Imtech Deutschland GmbH & Co. KG Niederlassung Stuttgart",brenner1:"Ausbildung als Elektroniker für Energie- und Gebäudetechnik bei Elektrohaus Brenner in Kuppingen",brenner2:"Elektroniker für Energie- und Gebäudetechnik bei Elektrohaus Brenner in Kuppingen",fhs:"1-jährige Fachhochschulreife an der Rolf-Benz-Schule in Nagold",damiler:"Ferienbeschäftigung bei Daimler AG",bachelor:"Bachelor Studium im Fachbereich Medieninformatik an der Hochschule der Medien in Stuttgart",fraunhofer1:"Werkstudent im Bereich Entwicklung von Diensten für Cloud-Plattformen bei Fraunhofer-Institut für Produktionstechnik und Automatisierung IPA in Stuttgart",novatec:"Praktikant im Praxissemester im Bereich Digital Innovation bei Novatec Consulting GmbH in Leinfelden-Echterdingen",startup:"Gründung des Startups Hyphen Technologies mit 3 Partnern"},careerHeadlines:{realschule:"Realschulabschluss",imtech:"Ausbildung bei Imtech",brenner1:"Ausbildung bei Elektrohaus Brenner",brenner2:"Elektroniker bei Elektrohaus Brenner",fhs:"Fachhochschulreife",damiler:"Ferienbeschäftigung bei Daimler AG",bachelor:"Bachelor Studium",fraunhofer1:"Werkstudent bei Fraunhofer-Institut",novatec:"Praktikant bei Novatec Consulting GmbH",startup:"Gründung Startups"},buttons:{reading:"Weiterlesen",submit:"Senden"},projectHeadlines:{gameHall:"Online Spielehalle",startup:"Hyphen Technologies",webShop:"Online Shop",deviceManagement:"Geräte- und Serviceverwaltung",parkingSystem:"Parkleitsystem",hinH:"Hand in Hand Spendenlauf Stuttgart",beGuided:"BeGuided Design"},projectsText:{gameHall:"Casino WebApp mit Benutzerverwaltung",startup:"Startup Hyphen Technologies",webShop:"Webshop WebApp mit Benutzerverwaltung",deviceManagement:"Geräte- und Serviceverwaltungsanwendung WebApp erstellt bei Fraunhofer",parkingSystem:"IoT and Cloud Service Projekt für ein Parkleitsyystem",hinH:"Middleware Server für den Hand in Hand Spendenlauf Stuttgart erstellt bei Novatec",beGuided:"BeGuided Design erstellt bei Novatec"},fields:{name:"Name*",subject:"Betreff*",message:"Nachricht*"}},en:{labels:{Flag:"us"},navigation:{footer:"Created by Dominik Ratzel",about:"About",skills:"IT-Skills",projects:"Projects",contact:"Contact",career:"Career"},content:{welcome1:"Hey, I'm Dominik.",welcome2:"I study computer science at the Stuttgart Media University."},career:{realschule:"High school diploma CHR Nagold",imtech:"Training as electronics technician for energy and building technology at Imtech Deutschland GmbH & Co. KG ",brenner1:"Training as electronics technician for energy and building technology at Elektrohaus Brenner in Kuppingen",brenner2:"Electronics technician for energy and building technology at Elektrohaus Brenner in Kuppingen",fhs:"1-year technical college entrance qualification at the Rolf Benz School in Nagold",damiler:"Holiday employment at Daimler AG",bachelor:"Bachelor's degree in media informatics at the Stuttgart Media University",fraunhofer1:"Working student in the area of developing services for cloud platforms at the Fraunhofer Institute for Manufacturing Engineering and Automation IPA in Stuttgart",novatec:"Internship in the practical semester in the field of digital innovation at Novatec Consulting GmbH in Leinfelden-Echterdingen",startup:"Founding of the startup Hyphen Technologies with 3 partners"},careerHeadlines:{realschule:"High school diploma",imtech:"Training at Imtech",brenner1:"Training at Elektrohaus Brenner",brenner2:"Electronics technician at Elektrohaus Brenner",fhs:"Advanced technical college",damiler:"Vacation employment at Daimler AG",bachelor:"Bachelor study",fraunhofer1:"Working student at Fraunhofer Institute\n",novatec:"Trainee at Novatec Consulting GmbH\n",startup:"Founding of the startup"},buttons:{reading:"Continue Reading",submit:"Submit"},projectHeadlines:{gameHall:"Online game hall",startup:"Hyphen Technologies",webShop:"WebShop",deviceManagement:"Device and service management",parkingSystem:"Parking control system",hinH:"Hand in hand charity run Stuttgart",beGuided:"BeGuided Design"},projectsText:{gameHall:"Casino WebApp with user management",startup:"Startup Hyphen Technologies",webShop:"Webshop WebApp with user management",deviceManagement:"Device and service management application WebApp created at Fraunhofer",parkingSystem:"IoT and Cloud Service project for a parking guidance system",hinH:"Middleware Server for the Hand in Hand Spendenlauf Stuttgart created at Novatec",beGuided:"BeGuided Design created at Novatec"},fields:{name:"Name*",subject:"Subject*",message:"Message*"}}},f=new d["a"]({locale:localStorage.getItem("Language")|Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_I18N_LOCALE||"de",fallbackLocale:localStorage.getItem("Language")|Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_I18N_FALLBACK_LOCALE||"de",messages:g}),m={name:"FlagDropDown",computed:Object(i["a"])(Object(i["a"])({},Object(h["b"])(["languages","getTheme"])),{},{Flag:function(){return this.$t("labels.Flag")}}),beforeCreate:function(){console.log("Before Create"),this.$locale.currentLanguage()},methods:{changeLocale:function(e){console.log("Changing Locale"),f.locale=e,this.$locale.change(e)}}},p=m,b=t("2877"),v=t("6544"),k=t.n(v),y=t("5bc1"),S=t("8336"),T=t("e449"),H=Object(b["a"])(p,u,s,!1,null,"09069218",null),_=H.exports;k()(H,{VAppBarNavIcon:y["a"],VBtn:S["a"],VMenu:T["a"]});var E=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("v-app-bar-nav-icon",{staticClass:"navHover",on:{click:function(n){return e.$store.commit("UPDATE_THEME")}}},["lightTheme"===e.getTheme?t("v-icon",[e._v(" mdi-white-balance-sunny ")]):"darkTheme"===e.getTheme?t("v-icon",[e._v(" mdi-brightness-2 ")]):e._e()],1)},w=[],C={name:"ThemeChanger",computed:Object(i["a"])({},Object(h["b"])(["getTheme"]))},j=C,A=t("132d"),I=Object(b["a"])(j,E,w,!1,null,"007dd583",null),P=I.exports;k()(I,{VAppBarNavIcon:y["a"],VIcon:A["a"]});var B={name:"TopNavBar",components:{ThemeChanger:P,FlagDropDown:_},computed:Object(i["a"])(Object(i["a"])({},Object(h["b"])(["getTheme"])),{},{showNavContent:function(){if("lg"===this.$vuetify.breakpoint.name||"xl"===this.$vuetify.breakpoint.name)return!0},navigation:function(){return this.$t("navigation")}})},O=B,N=(t("2666"),t("40dc")),D=t("2fa4"),L=Object(b["a"])(O,c,l,!1,null,"3bf6fd02",null),F=L.exports;k()(L,{VAppBar:N["a"],VBtn:S["a"],VIcon:A["a"],VSpacer:D["a"]});var G=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("v-footer",{staticClass:"justify-center",attrs:{height:"50"}},[t("div",{staticClass:"title text--lighten-1 text-center"},[e._v(" © "+e._s((new Date).getFullYear())+" "+e._s(e.navigation.footer)+" ")])])},M=[],x={name:"Footer",computed:{navigation:function(){return this.$t("navigation")}}},$=x,V=t("553a"),W=Object(b["a"])($,G,M,!1,null,"5616dbc2",null),R=W.exports;k()(W,{VFooter:V["a"]});var K={name:"App",components:{Footer:R,TopNavBar:F},data:function(){return{}},computed:Object(i["a"])({},Object(h["b"])(["getTheme"]))},U=K,z=(t("fb9f"),t("7496")),q=t("f6c4"),J=Object(b["a"])(U,r,o,!1,null,null,null),Y=J.exports;k()(J,{VApp:z["a"],VMain:q["a"]});t("d3b7");var Q=t("8c4f");a["a"].use(Q["a"]);var X=[{path:"/",name:"Home",component:function(){return Promise.all([t.e("chunk-5cc86dba"),t.e("chunk-41db6828")]).then(t.bind(null,"bb51"))}},{path:"/MiniSpielehalle",name:"MiniSpielehalle",component:function(){return Promise.all([t.e("chunk-5cc86dba"),t.e("chunk-2d217aa5")]).then(t.bind(null,"c860"))}},{path:"/HyphenTechnologies",name:"Hyphen Technologies",component:function(){return Promise.all([t.e("chunk-5cc86dba"),t.e("chunk-2d0dd84b")]).then(t.bind(null,"8272"))}},{path:"/ParkingControlSystem",name:"Parking Control System",component:function(){return Promise.all([t.e("chunk-5cc86dba"),t.e("chunk-2d0cf8c7")]).then(t.bind(null,"63d8"))}},{path:"/WebShop",name:"WebShop",component:function(){return Promise.all([t.e("chunk-5cc86dba"),t.e("chunk-2d0e5060")]).then(t.bind(null,"935e"))}},{path:"/DeviceManagement",name:"DeviceManagement",component:function(){return Promise.all([t.e("chunk-5cc86dba"),t.e("chunk-2d20f30b")]).then(t.bind(null,"b326"))}},{path:"/HandInHand",name:"HandInHand",component:function(){return Promise.all([t.e("chunk-5cc86dba"),t.e("chunk-2d20fac7")]).then(t.bind(null,"b542"))}},{path:"/BeGuided",name:"BeGuided",component:function(){return Promise.all([t.e("chunk-5cc86dba"),t.e("chunk-2d0e57ae")]).then(t.bind(null,"9551"))}}],Z=new Q["a"]({routes:X}),ee=Z,ne={state:{languages:[{flag:"de",language:"de",title:"de"},{flag:"us",language:"en",title:"en"}],currents:f.t("labels.Flag")},getters:{languages:function(e){return e.languages},currents:function(e){return null!==localStorage.getItem("Language")?localStorage.getItem("Language"):e.currents}},actions:{},mutations:{}},te={state:{theme:null!==localStorage.getItem("Theme")?localStorage.getItem("Theme"):"lightTheme"},getters:{getTheme:function(e){return e.theme}},actions:{},mutations:{UPDATE_THEME:function(e){"lightTheme"===e.theme?(e.theme="darkTheme",localStorage.setItem("Theme","darkTheme")):"darkTheme"===e.theme&&(e.theme="lightTheme",localStorage.setItem("Theme","lightTheme"))}}};a["a"].use(h["a"]);var ae=new h["a"].Store({state:{},mutations:{},actions:{},modules:{language:ne,style:te}}),re=t("f309"),oe=(t("15f5"),t("d1e78"),t("5363"),t("1f54"),t("5607"));a["a"].use(re["a"]),a["a"].use(d["a"]);var ie=new d["a"]({locale:localStorage.getItem("Language")||"de",fallbackLocale:localStorage.getItem("Language")||"de",silentTranslationWarn:!0,silentFallbackWarn:!0});a["a"].config.disableNoTranslationWarning=!0,a["a"].prototype.$locale={change:function(e){ie.locale=e,localStorage.setItem("Language",e)},currentLanguage:function(){return null!==localStorage.getItem("Language")?localStorage.getItem("Language"):ie.locale}};var ce=new re["a"]({icons:{iconfont:"fa"},lang:{t:function(e){for(var n=arguments.length,t=new Array(n>1?n-1:0),a=1;a<n;a++)t[a-1]=arguments[a];return ie.t(e,t)}},directives:{Ripple:oe["a"]}}),le=(t("d5e8"),t("6f19")),ue=t("7bb1"),se=t("d61f");a["a"].component("ValidationProvider",le["a"]),a["a"].component("ValidationObserver",ue["a"]),a["a"].use(se["a"]),a["a"].config.productionTip=!1,new a["a"]({router:ee,store:ae,vuetify:ce,i18n:f,render:function(e){return e(Y)}}).$mount("#app")},6630:function(e,n,t){},fb9f:function(e,n,t){"use strict";t("6630")}});