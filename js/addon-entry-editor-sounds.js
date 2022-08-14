(window.webpackJsonpGUI=window.webpackJsonpGUI||[]).push([["addon-entry-editor-sounds"],{"./src/addons/addons/editor-sounds/_runtime_entry.js":
/*!***********************************************************!*\
  !*** ./src/addons/addons/editor-sounds/_runtime_entry.js ***!
  \***********************************************************/
/*! exports provided: resources */function(s,n,e){"use strict";e.r(n),e.d(n,"resources",(function(){return t}));const t={"userscript.js":e(/*! ./userscript.js */"./src/addons/addons/editor-sounds/userscript.js").default}},"./src/addons/addons/editor-sounds/userscript.js":
/*!*******************************************************!*\
  !*** ./src/addons/addons/editor-sounds/userscript.js ***!
  \*******************************************************/
/*! exports provided: default */function(s,n,e){"use strict";e.r(n),n.default=async function({addon:s,global:n,console:e}){const t=await s.tab.traps.getBlockly(),o=()=>{const s=Blockly.getMainWorkspace(),n=s.options.pathToMedia;t.inject.loadSounds_(n,s)};o();const d=t.init_;t.init_=function(...s){return s[0].options.hasSounds=!0,d.call(this,...s)},s.self.addEventListener("disabled",()=>{const s=Blockly.getMainWorkspace().getAudioManager();delete s.SOUNDS_.click,delete s.SOUNDS_.delete}),s.self.addEventListener("reenabled",o)}}}]);