(window.webpackJsonpGUI=window.webpackJsonpGUI||[]).push([["addon-entry-editor-extra-keys"],{"./src/addons/addons/editor-extra-keys/_runtime_entry.js":
/*!***************************************************************!*\
  !*** ./src/addons/addons/editor-extra-keys/_runtime_entry.js ***!
  \***************************************************************/
/*! exports provided: resources */function(e,s,t){"use strict";t.r(s),t.d(s,"resources",(function(){return n}));const n={"userscript.js":t(/*! ./userscript.js */"./src/addons/addons/editor-extra-keys/userscript.js").default}},"./src/addons/addons/editor-extra-keys/userscript.js":
/*!***********************************************************!*\
  !*** ./src/addons/addons/editor-extra-keys/userscript.js ***!
  \***********************************************************/
/*! exports provided: default */function(e,s,t){"use strict";t.r(s),s.default=async function({addon:e,global:s,cons:t,msg:n}){const o=await e.tab.traps.getBlockly();let r=null;function i(s,t){return r||(r=[...s]),e.self.disabled||(s.push(["-","-"],[",",","],[".","."]),s.splice(5,0,[n("enter-key"),"enter"]),e.settings.get("experimentalKeys")&&s.push(["`","`"],["=","="],["[","["],["]","]"],["\\","\\"],[";",";"],["'","'"],["/","/"]),t&&e.settings.get("shiftKeys")&&s.push(["!","!"],["@","@"],["#","#"],["$","$"],["%","%"],["^","^"],["&","&"],["*","*"],["(","("],[")",")"],["_","_"],["+","+"],["{","{"],["}","}"],["|","|"],[":",":"],['"','"'],["?","?"],["<","<"],[">",">"],["~","~"]),e.settings.get("twKeys")&&s.push(["backspace","backspace"],["delete","delete"],["shift","shift"],["caps lock","caps lock"],["scroll lock","scroll lock"],["control","control"],["escape","escape"],["insert","insert"],["home","home"],["end","end"],["page up","page up"],["page down","page down"])),s}for(const e of["sensing_keyoptions","event_whenkeypressed"]){const s=o.Blocks[e],t=s.init;s.init=function(...s){const n=this.jsonInit;return this.jsonInit=function(s){return i(s.args0[0].options,"event_whenkeypressed"===e),n.call(this,s)},t.call(this,...s)}}const c=()=>{const e=Blockly.getMainWorkspace(),s=e&&e.getFlyout();if(e&&s){const t=[...e.getAllBlocks(),...s.getWorkspace().getAllBlocks()];for(const e of t){if("event_whenkeypressed"!==e.type&&"sensing_keyoptions"!==e.type)continue;const s=e.inputList[0];if(!s)continue;const t=s.fieldRow.find(e=>e&&Array.isArray(e.menuGenerator_));t&&(t.menuGenerator_=i(r?[...r]:t.menuGenerator_,"event_whenkeypressed"===e.type))}}};c(),e.settings.addEventListener("change",c),e.self.addEventListener("disabled",c),e.self.addEventListener("reenabled",c)}}}]);