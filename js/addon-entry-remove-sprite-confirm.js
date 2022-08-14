(window.webpackJsonpGUI=window.webpackJsonpGUI||[]).push([["addon-entry-remove-sprite-confirm"],{"./src/addons/addons/remove-sprite-confirm/_runtime_entry.js":
/*!*******************************************************************!*\
  !*** ./src/addons/addons/remove-sprite-confirm/_runtime_entry.js ***!
  \*******************************************************************/
/*! exports provided: resources */function(e,r,t){"use strict";t.r(r),t.d(r,"resources",(function(){return s}));const s={"userscript.js":t(/*! ./userscript.js */"./src/addons/addons/remove-sprite-confirm/userscript.js").default}},"./src/addons/addons/remove-sprite-confirm/userscript.js":
/*!***************************************************************!*\
  !*** ./src/addons/addons/remove-sprite-confirm/userscript.js ***!
  \***************************************************************/
/*! exports provided: default */function(e,r,t){"use strict";t.r(r),r.default=async({addon:e,console:r,msg:t})=>{if(!e.tab.redux.state)return r.warn("Redux is not available!");const s=e.tab.traps.vm;if(!s)return;const n=s.deleteSprite;s.deleteSprite=function(...r){if(e.self.disabled)return n.apply(this,r);if(confirm(t("confirm")))return n.apply(this,r);const s=Object.assign({},e.tab.redux.state.scratchGui.restoreDeletion);return setTimeout(()=>e.tab.redux.dispatch({type:"scratch-gui/restore-deletion/RESTORE_UPDATE",state:s}),100),Promise.resolve()}}}}]);