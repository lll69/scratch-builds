(window.webpackJsonpGUI=window.webpackJsonpGUI||[]).push([["addon-entry-tw-straighten-comments"],{"./src/addons/addons/tw-straighten-comments/_runtime_entry.js":
/*!********************************************************************!*\
  !*** ./src/addons/addons/tw-straighten-comments/_runtime_entry.js ***!
  \********************************************************************/
/*! exports provided: resources */function(t,s,n){"use strict";n.r(s),n.d(s,"resources",(function(){return e}));const e={"userscript.js":n(/*! ./userscript.js */"./src/addons/addons/tw-straighten-comments/userscript.js").default}},"./src/addons/addons/tw-straighten-comments/userscript.js":
/*!****************************************************************!*\
  !*** ./src/addons/addons/tw-straighten-comments/userscript.js ***!
  \****************************************************************/
/*! exports provided: default */function(t,s,n){"use strict";n.r(s),s.default=async function({addon:t,global:s,console:n}){const e=await t.tab.traps.getBlockly(),r=e.BubbleDragger.prototype.endBubbleDrag;e.BubbleDragger.prototype.endBubbleDrag=function(s,n){if(!t.self.disabled&&this.draggingBubble_.comment){const t=this.draggingBubble_.comment.iconXY_.y-e.ScratchBubble.TOP_BAR_HEIGHT/2;n.y=t-this.startXY_.y}return r.call(this,s,n)}}}}]);