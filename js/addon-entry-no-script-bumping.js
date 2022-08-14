(window.webpackJsonpGUI=window.webpackJsonpGUI||[]).push([["addon-entry-no-script-bumping"],{"./src/addons/addons/no-script-bumping/_runtime_entry.js":
/*!***************************************************************!*\
  !*** ./src/addons/addons/no-script-bumping/_runtime_entry.js ***!
  \***************************************************************/
/*! exports provided: resources */function(s,n,o){"use strict";o.r(n),o.d(n,"resources",(function(){return t}));const t={"userscript.js":o(/*! ./userscript.js */"./src/addons/addons/no-script-bumping/userscript.js").default}},"./src/addons/addons/no-script-bumping/userscript.js":
/*!***********************************************************!*\
  !*** ./src/addons/addons/no-script-bumping/userscript.js ***!
  \***********************************************************/
/*! exports provided: default */function(s,n,o){"use strict";o.r(n),n.default=async function({addon:s,console:n}){const o=await s.tab.traps.getBlockly(),t=o.BlockSvg.prototype.bumpNeighbours_;o.BlockSvg.prototype.bumpNeighbours_=function(){s.self.disabled&&t.call(this)}}}}]);