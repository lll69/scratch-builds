(window.webpackJsonpGUI=window.webpackJsonpGUI||[]).push([["addon-entry-load-extensions"],{"./src/addons/addons/load-extensions/_runtime_entry.js":
/*!*************************************************************!*\
  !*** ./src/addons/addons/load-extensions/_runtime_entry.js ***!
  \*************************************************************/
/*! exports provided: resources */function(n,s,e){"use strict";e.r(s),e.d(s,"resources",(function(){return t}));const t={"userscript.js":e(/*! ./userscript.js */"./src/addons/addons/load-extensions/userscript.js").default}},"./src/addons/addons/load-extensions/userscript.js":
/*!*********************************************************!*\
  !*** ./src/addons/addons/load-extensions/userscript.js ***!
  \*********************************************************/
/*! exports provided: default */function(n,s,e){"use strict";e.r(s),s.default=async function({addon:n,global:s,console:e}){const t=n.tab.traps.vm,o=()=>{if(n.self.disabled)return;const s=["music","pen","text2speech","translate"];for(let e of s)n.settings.get(e)&&!t.extensionManager.isExtensionLoaded(e)&&t.extensionManager.loadExtensionIdSync(e)};t.editingTarget?o():t.runtime.once("PROJECT_LOADED",o)}}}]);