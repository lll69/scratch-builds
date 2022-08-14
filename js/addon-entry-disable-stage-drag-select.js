(window.webpackJsonpGUI=window.webpackJsonpGUI||[]).push([["addon-entry-disable-stage-drag-select"],{"./src/addons/addons/disable-stage-drag-select/_runtime_entry.js":
/*!***********************************************************************!*\
  !*** ./src/addons/addons/disable-stage-drag-select/_runtime_entry.js ***!
  \***********************************************************************/
/*! exports provided: resources */function(t,s,e){"use strict";e.r(s),e.d(s,"resources",(function(){return n}));const n={"userscript.js":e(/*! ./userscript.js */"./src/addons/addons/disable-stage-drag-select/userscript.js").default}},"./src/addons/addons/disable-stage-drag-select/userscript.js":
/*!*******************************************************************!*\
  !*** ./src/addons/addons/disable-stage-drag-select/userscript.js ***!
  \*******************************************************************/
/*! exports provided: default */function(t,s,e){"use strict";e.r(s),s.default=async({addon:t,console:s})=>{const e=t.tab.traps.vm;let n=!1;document.addEventListener("mousedown",(function(t){n=t.shiftKey}),{capture:!0});const r=e.stopDrag;e.stopDrag=function(...s){if(n||t.self.disabled)return r.call(this,...s);const e=this.setEditingTarget;this.setEditingTarget=()=>{};const a=r.call(this,...s);return this.setEditingTarget=e,a};const a=e.getTargetIdForDrawableId;e.getTargetIdForDrawableId=function(...s){const e=a.call(this,...s);if(n||t.self.disabled)return e;if(null!==e){const t=this.runtime.getTargetById(e);if(t&&!t.draggable)return null}return e}}}}]);