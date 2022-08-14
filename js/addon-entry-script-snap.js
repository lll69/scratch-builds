(window.webpackJsonpGUI=window.webpackJsonpGUI||[]).push([["addon-entry-script-snap"],{"./src/addons/addons/script-snap/_runtime_entry.js":
/*!*********************************************************!*\
  !*** ./src/addons/addons/script-snap/_runtime_entry.js ***!
  \*********************************************************/
/*! exports provided: resources */function(s,n,t){"use strict";t.r(n),t.d(n,"resources",(function(){return e}));const e={"userscript.js":t(/*! ./userscript.js */"./src/addons/addons/script-snap/userscript.js").default}},"./src/addons/addons/script-snap/userscript.js":
/*!*****************************************************!*\
  !*** ./src/addons/addons/script-snap/userscript.js ***!
  \*****************************************************/
/*! exports provided: default */function(s,n,t){"use strict";t.r(n),n.default=async function({addon:s,global:n,console:t}){const e=await s.tab.traps.getBlockly();let d=e.getMainWorkspace();const i=e.init_;function r(n){d.grid_.snapToGrid_=n,d.grid_.spacing_=n?s.settings.get("grid"):40,d.grid_.update(d.scale)}e.init_=function(...n){return d=n[0],s.self.disabled||r(!0),i.call(this,...n)},r(!0),s.settings.addEventListener("change",()=>r(!0)),s.self.addEventListener("disabled",()=>r(!1)),s.self.addEventListener("reenabled",()=>r(!0))}}}]);