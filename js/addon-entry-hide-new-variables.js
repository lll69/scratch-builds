(window.webpackJsonpGUI=window.webpackJsonpGUI||[]).push([["addon-entry-hide-new-variables"],{"./src/addons/addons/hide-new-variables/_runtime_entry.js":
/*!****************************************************************!*\
  !*** ./src/addons/addons/hide-new-variables/_runtime_entry.js ***!
  \****************************************************************/
/*! exports provided: resources */function(s,e,a){"use strict";a.r(e),a.d(e,"resources",(function(){return t}));const t={"userscript.js":a(/*! ./userscript.js */"./src/addons/addons/hide-new-variables/userscript.js").default}},"./src/addons/addons/hide-new-variables/userscript.js":
/*!************************************************************!*\
  !*** ./src/addons/addons/hide-new-variables/userscript.js ***!
  \************************************************************/
/*! exports provided: default */function(s,e,a){"use strict";a.r(e),e.default=async function({addon:s,msg:e,global:a,console:t}){const n=await s.tab.traps.getBlockly(),r=n.Variables.createVariable;n.Variables.createVariable=function(e,a,t){if(!s.self.disabled){const s=a;a=a=>{if(a){const s=e.isFlyout?e:e.getFlyout();s.setCheckboxState&&s.setCheckboxState(a,!1)}s&&s(a)}}return r.call(this,e,a,t)}}}}]);