var GUI=function(e){function r(r){for(var n,s,i=r[0],c=r[1],l=r[2],u=0,m=[];u<i.length;u++)s=i[u],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&m.push(a[s][0]),a[s]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);for(d&&d(r);m.length;)m.shift()();return o.push.apply(o,l||[]),t()}function t(){for(var e,r=0;r<o.length;r++){for(var t=o[r],n=!0,i=1;i<t.length;i++){var c=t[i];0!==a[c]&&(n=!1)}n&&(o.splice(r--,1),e=s(s.s=t[0]))}return e}var n={},a={credits:0},o=[];function s(r){if(n[r])return n[r].exports;var t=n[r]={i:r,l:!1,exports:{}};return e[r].call(t.exports,t,t.exports,s),t.l=!0,t.exports}s.m=e,s.c=n,s.d=function(e,r,t){s.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:t})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,r){if(1&r&&(e=s(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(s.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var n in e)s.d(t,n,function(r){return e[r]}.bind(null,n));return t},s.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(r,"a",r),r},s.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},s.p="";var i=window.webpackJsonpGUI=window.webpackJsonpGUI||[],c=i.push.bind(i);i.push=r,i=i.slice();for(var l=0;l<i.length;l++)r(i[l]);var d=c;return o.push(["./src/playground/credits/credits.jsx","vendors~addon-settings~credits~editor~embed~fullscreen~player"]),t()}({"./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/playground/credits/credits.css":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/postcss-loader/src??postcss!./src/playground/credits/credits.css ***!
  \***************************************************************************************************************************/
/*! no static exports found */function(e,r,t){(r=e.exports=t(/*! ../../../node_modules/css-loader/lib/css-base.js */"./node_modules/css-loader/lib/css-base.js")(!1)).push([e.i,'/* #E5F0FF */ /* #E9F1FC */ /* #D9E3F2 */ /* 90% transparent version of motion-primary */ /* #FFFFFF */ /* 25% transparent version of ui-white */ /* 25% transparent version of ui-white */ /* 25% transparent version of ui-white */ /* 15% transparent version of black */ /* #575E75 */ /* 35% transparent version of motion-primary */ /* 15% transparent version of motion-primary */ /* opt-in theme overrides */ /* #FF661A */ /* #E64D00 */ /* #CF63CF */ /* #BD42BD */ /* #FFAB19 */ /* #FF8C1A */ /* #0FBD8C */ /* #0FBD8C */ /* #FF8C1A */ /* #FFB366 */ /* #FF8C1A */ /* 35% transparent version of extensions-primary */ /* opaque version of extensions-transparent, on white bg */ /* lighter than motion-primary */ * {\n    box-sizing: border-box;\n} body {\n    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;\n    margin: 0;\n    padding: 0;\n    background: white;\n} body[theme="dark"] {\n    background-color: #111;\n    color: #eee;\n} a {\n    color: blue;\n} [theme="dark"] a {\n    color: #4af;\n} .credits_main_1Rb15 section {\n    max-width: 900px;\n    margin: auto;\n    margin-bottom: 30px;\n} .credits_header-container_10IXn {\n    color: white;\n    background-color: hsla(0, 100%, 65%, 1);\n    padding: 20px 0;\n    text-align: center;\n    margin-bottom: 30px;\n} .credits_header-text_2vWAl {\n\n} .credits_users_2AuwB {\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n} .credits_user-image_2rw9X {\n    margin-right: 12px;\n} .credits_user_2nYLS {\n    display: flex;\n    align-items: center;\n    width: 300px;\n    padding: 4px;\n    border-radius: 4px;\n    font-size: 1.25rem;\n    color: inherit !important;\n    text-decoration: none;\n    transition: background .2s;\n} .credits_user_2nYLS:link:hover {\n    background: #eee;\n} [theme="dark"] .credits_user_2nYLS:link:hover {\n    background: #222;\n}\n',""]),r.locals={main:"credits_main_1Rb15","header-container":"credits_header-container_10IXn",headerContainer:"credits_header-container_10IXn","header-text":"credits_header-text_2vWAl",headerText:"credits_header-text_2vWAl",users:"credits_users_2AuwB","user-image":"credits_user-image_2rw9X",userImage:"credits_user-image_2rw9X",user:"credits_user_2nYLS"}},"./node_modules/raw-loader/index.js!./src/lib/tw-theme-dark.css":
/*!*************************************************************!*\
  !*** ./node_modules/raw-loader!./src/lib/tw-theme-dark.css ***!
  \*************************************************************/
/*! no static exports found */function(e,r){e.exports='/* GUI */\n:root {\n    background: #111;\n    color: #eee;\n    color-scheme: dark;\n    /* see colors.csss */\n    --ui-primary: rgb(17, 17, 17);\n    --ui-secondary: rgb(30, 30, 30);\n    --ui-tertiary: rgb(46, 46, 46);\n    --ui-modal-overlay: #333a;\n    --ui-black-transparent: rgba(255, 255, 255, 0.15);\n    --text-primary: #eee;\n    /* scratch-paint */\n    --paint-ui-pane-border: var(--ui-black-transparent);\n    --paint-text-primary: #eee;\n    --paint-form-border: var(--ui-black-transparent);\n}\n\n/* Blockly */\n.blocklySvg {\n    background-color: var(--ui-secondary) !important;\n    color-scheme: light;\n}\n[id^="blocklyGridPattern"] > line {\n    stroke: #484848;\n}\n.blocklyFlyoutBackground {\n    fill: #111;\n}\n.blocklyFlyoutLabelText {\n    fill: #ccc;\n}\n.blocklyFlyoutButton .blocklyText {\n    fill: #ccc;\n}\n.blocklyFlyoutButton:hover {\n    fill: #111;\n}\n.scratchCategoryMenu {\n    color: #ccc;\n}\n.blocklyToolboxDiv,\n.scratchCategoryMenu {\n    background: #111 !important;\n}\n.blocklyScrollbarHandle {\n    fill: #666;\n}\n.blocklyZoom {\n    filter: invert(100%);\n}\n.scratchCategoryMenuItem.categorySelected {\n    background: var(--ui-secondary);\n}\n.valueReportBox {\n    color: black;\n}\n.blocklyWidgetDiv {\n    color-scheme: light;\n}\n.blocklyWidgetDiv .goog-menu {\n    background: var(--ui-primary);\n    border-color: var(--ui-black-transparent);\n}\n.blocklyWidgetDiv .goog-menuitem {\n    color: var(--text-primary);\n}\n.blocklyWidgetDiv .goog-menuitem-disabled .goog-menuitem-content {\n    color: #666 !important;\n}\n.sa-blockly-menu-item-border {\n    border-top-color: var(--ui-black-transparent) !important;\n}\n.blocklyWidgetDiv .goog-menuitem.goog-menuitem-highlight {\n    background-color: var(--ui-tertiary);\n    border-color: transparent; /* remove border */\n}\n.scratchCommentText {\n    color: black;\n}\n.blocklyInsertionMarker > .blocklyPath {\n    fill: #ccc;\n}\n\n/* Other / Multipurpose */\n.Popover {\n    /* weird Chrome bug displays white bar above popovers with color-scheme: dark */\n    color-scheme: light;\n}\n.Popover-body {\n    background: var(--ui-secondary);\n    border-color: var(--ui-black-transparent);\n    color: var(--text-primary);\n}\n.Popover-tipShape {\n    fill: var(--ui-secondary);\n    stroke: var(--ui-black-transparent);\n}\n'},"./src/lib/tw-theme-hoc.jsx":
/*!**********************************!*\
  !*** ./src/lib/tw-theme-hoc.jsx ***!
  \**********************************/
/*! exports provided: getInitialDarkMode, default */function(e,r,t){"use strict";t.r(r),t.d(r,"getInitialDarkMode",(function(){return l})),t.d(r,"default",(function(){return u}));var n=t(/*! react */"./node_modules/react/index.js"),a=t.n(n),o=t(/*! raw-loader!./tw-theme-dark.css */"./node_modules/raw-loader/index.js!./src/lib/tw-theme-dark.css"),s=t.n(o);function i(){return(i=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}const c=window.matchMedia("(prefers-color-scheme: dark)"),l=()=>{try{const e=localStorage.getItem("tw:theme");if(null!==e)return"dark"===e}catch(e){}return c.matches},d=document.createElement("style");d.textContent=s.a;const u=function(e){class r extends a.a.Component{constructor(e){super(e),this.handleQueryChange=this.handleQueryChange.bind(this),this.handleClickTheme=this.handleClickTheme.bind(this),this.state={dark:l()}}componentDidMount(){c.addEventListener&&c.addEventListener("change",this.handleQueryChange),this.updateDark()}componentDidUpdate(){try{localStorage.setItem("tw:theme",this.state.dark?"dark":"light")}catch(e){}this.updateDark()}componentWillUnmount(){c.removeEventListener&&c.removeEventListener("change",this.handleQueryChange)}updateDark(){const e=this.state.dark;document.body.setAttribute("theme",e?"dark":"light"),e&&!d.parentNode?document.body.insertBefore(d,document.body.firstChild):!e&&d.parentNode&&d.parentNode.removeChild(d)}handleQueryChange(){this.setState({dark:c.matches})}handleClickTheme(){this.setState(e=>({dark:!e.dark}))}render(){return a.a.createElement(e,i({onClickTheme:this.handleClickTheme,isDark:this.state.dark},this.props))}}return r}},"./src/playground/app-target.js":
/*!**************************************!*\
  !*** ./src/playground/app-target.js ***!
  \**************************************/
/*! exports provided: default */function(e,r,t){"use strict";t.r(r);const n=document.getElementById("app");for(;n.firstChild;)n.removeChild(n.firstChild);document.body.classList.add("tw-loaded"),r.default=n},"./src/playground/credits/credits.css":
/*!********************************************!*\
  !*** ./src/playground/credits/credits.css ***!
  \********************************************/
/*! no static exports found */function(e,r,t){var n=t(/*! !../../../node_modules/css-loader??ref--5-1!../../../node_modules/postcss-loader/src??postcss!./credits.css */"./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/playground/credits/credits.css");"string"==typeof n&&(n=[[e.i,n,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};t(/*! ../../../node_modules/style-loader/lib/addStyles.js */"./node_modules/style-loader/lib/addStyles.js")(n,a);n.locals&&(e.exports=n.locals)},"./src/playground/credits/credits.jsx":
/*!********************************************!*\
  !*** ./src/playground/credits/credits.jsx ***!
  \********************************************/
/*! no exports provided */function(e,r,t){"use strict";t.r(r);var n=t(/*! react */"./node_modules/react/index.js"),a=t.n(n),o=t(/*! react-dom */"./node_modules/react-dom/index.js"),s=t.n(o),i=t(/*! prop-types */"./node_modules/prop-types/index.js"),c=t.n(i),l=t(/*! ../app-target */"./src/playground/app-target.js"),d=t(/*! ./credits.css */"./src/playground/credits/credits.css"),u=t.n(d),m=t(/*! ../../lib/tw-theme-hoc.jsx */"./src/lib/tw-theme-hoc.jsx"),p=t(/*! ./fosshost-light.png */"./src/playground/credits/fosshost-light.png"),h=t.n(p),g=t(/*! ./users */"./src/playground/credits/users.js");function b(){return(b=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}document.documentElement.lang="en";const f=({image:e,text:r,href:t})=>a.a.createElement("a",{href:t,target:"_blank",rel:"noreferrer",className:u.a.user},a.a.createElement("img",{className:u.a.userImage,src:e,width:"60",height:"60"}),a.a.createElement("div",{className:u.a.userInfo},r));f.propTypes={image:c.a.string.isRequired,text:c.a.string.isRequired,href:c.a.string};const y=({users:e})=>a.a.createElement("div",{className:u.a.users},e.map((e,r)=>a.a.createElement(f,b({key:r},e))));y.propTypes={users:c.a.arrayOf(c.a.object)};const v=()=>a.a.createElement("main",{className:u.a.main},a.a.createElement("header",{className:u.a.headerContainer},a.a.createElement("h1",{className:u.a.headerText},"TurboWarp Credits")),a.a.createElement("section",null,a.a.createElement("p",null,"The TurboWarp project is made possible by the work of many volunteers.")),a.a.createElement("section",null,a.a.createElement("h2",null,"Fosshost"),a.a.createElement("p",null,"The TurboWarp project is proudly hosted by ",a.a.createElement("a",{href:"https://fosshost.org/"},"Fosshost")," who provide free computing resources to the open source community."),a.a.createElement("p",null,a.a.createElement("a",{href:"https://fosshost.org/donate"},"Donate to support Fosshost.")),a.a.createElement("a",{href:"https://fosshost.org/"},a.a.createElement("img",{src:h.a,width:"250",height:"125"}))),a.a.createElement("section",null,a.a.createElement("h2",null,"Scratch"),a.a.createElement("p",null,"TurboWarp is based on the work of the ",a.a.createElement("a",{href:"https://scratch.mit.edu/credits"},"Scratch contributors")," but is not endorsed by Scratch in any way."),a.a.createElement("p",null,a.a.createElement("a",{href:"https://scratch.mit.edu/donate"},"Donate to support Scratch."))),a.a.createElement("section",null,a.a.createElement("h2",null,"Addons"),a.a.createElement(y,{users:g.default.addonDevelopers})),a.a.createElement("section",null,a.a.createElement("h2",null,"Translators"),a.a.createElement("p",null,"More than 100 people have helped translate TurboWarp and its addons into many languages -- far more than we could hope to list here.")),a.a.createElement("section",null,a.a.createElement("p",null,a.a.createElement("i",null,"Individual contributors are listed in no particular order. The order is randomized each visit."))));document.body.setAttribute("theme",Object(m.getInitialDarkMode)()?"dark":"light"),s.a.render(a.a.createElement(v,null),l.default)},"./src/playground/credits/fosshost-light.png":
/*!***************************************************!*\
  !*** ./src/playground/credits/fosshost-light.png ***!
  \***************************************************/
/*! no static exports found */function(e,r,t){e.exports=t.p+"static/assets/caabb627d674254770f4108ff3e19520.png"},"./src/playground/credits/users.js":
/*!*****************************************!*\
  !*** ./src/playground/credits/users.js ***!
  \*****************************************/
/*! exports provided: default */function(e,r,t){"use strict";t.r(r);const n=[{userId:"34018398",username:"Jeffalo"},{userId:"64184234",username:"ErrorGamer2000"},{userId:"41616512",username:"pufferfish101007"},{userId:"61409215",username:"TheColaber"},{userId:"1882674",username:"griffpatch"},{userId:"10817178",username:"apple502j"},{userId:"16947341",username:"--Explosion--"},{userId:"14880401",username:"Sheep_maker"},{userId:"9981676",username:"NitroCipher"},{userId:"2561680",username:"lisa_wolfgang"},{userId:"60000111",username:"GDUcrash"},{userId:"4648559",username:"World_Languages"},{userId:"17340565",username:"GarboMuffin"},{userId:"5354974",username:"Chrome_Cat"},{userId:"0",username:"summerscar"},{userId:"55742784",username:"RedGuy7"},{userId:"9636514",username:"Tacodude7729"},{userId:"14792872",username:"_nix"},{userId:"30323614",username:"BarelySmooth"},{userId:"64691048",username:"CST1229"}].map(({userId:e,username:r,name:t})=>({image:"https://trampoline.turbowarp.org/avatars/".concat(e),href:"https://scratch.mit.edu/users/".concat(r,"/"),text:t||r}));r.default={addonDevelopers:(e=>{for(let r=e.length-1;r>0;r--){const t=Math.floor(Math.random()*(r+1)),n=e[r];e[r]=e[t],e[t]=n}return e})(n)}}});