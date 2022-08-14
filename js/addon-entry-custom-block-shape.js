(window.webpackJsonpGUI=window.webpackJsonpGUI||[]).push([["addon-entry-custom-block-shape"],{"./src/addons/addons/custom-block-shape/_runtime_entry.js":
/*!****************************************************************!*\
  !*** ./src/addons/addons/custom-block-shape/_runtime_entry.js ***!
  \****************************************************************/
/*! exports provided: resources */function(_,R,E){"use strict";E.r(R),E.d(R,"resources",(function(){return I}));const I={"userscript.js":E(/*! ./userscript.js */"./src/addons/addons/custom-block-shape/userscript.js").default}},"./src/addons/addons/custom-block-shape/userscript.js":
/*!************************************************************!*\
  !*** ./src/addons/addons/custom-block-shape/userscript.js ***!
  \************************************************************/
/*! exports provided: default */function(_,R,E){"use strict";E.r(R),R.default=async function({addon:_,global:R,console:E}){var I=await _.tab.traps.getBlockly();!function(R){const E=I.BlockSvg;var N=_.tab.traps.vm;const{GRID_UNIT:T}=E;function A(...A){!function(R=_.settings.get("paddingSize"),N=_.settings.get("cornerSize"),A=_.settings.get("notchSize")){let t=R/100;N/=100,A/=100,E.SEP_SPACE_Y=2*T*t,E.MIN_BLOCK_X=16*T*t,E.MIN_BLOCK_X_OUTPUT=12*T*t,E.MIN_BLOCK_X_SHADOW_OUTPUT=10*T*t,E.MIN_BLOCK_Y=12*T*t,E.EXTRA_STATEMENT_ROW_Y=8*T*t,E.MIN_BLOCK_X_WITH_STATEMENT=40*T*t,E.MIN_BLOCK_Y_SINGLE_FIELD_OUTPUT=8*T*t,E.MIN_BLOCK_Y_REPORTER=10*T*t,E.MIN_STATEMENT_INPUT_HEIGHT=6*T*t,E.NOTCH_WIDTH=8*T*t,E.NOTCH_HEIGHT=2*T*t*A,E.NOTCH_START_PADDING=3*T,E.ICON_SEPARATOR_HEIGHT=10*T*t,E.NOTCH_PATH_LEFT="c 2,0 3,"+1*A+" 4,"+2*A+" l "+4*t*A+","+4*t*A+" c 1,"+1*A+" 2,"+2*A+" 4,"+2*A+" h "+24*(t-.5)+" c 2,0 3,-"+1*A+" 4,-"+2*A+" l "+4*t*A+","+-4*t*A+"c 1,-"+1*A+" 2,-"+2*A+" 4,-"+2*A,E.NOTCH_PATH_RIGHT="h "+(-4*(N-1)-5*(1-A))+"c -2,0 -3,"+1*A+" -4,"+2*A+" l "+-4*t*A+","+4*t*A+" c -1,"+1*A+" -2,"+2*A+" -4,"+2*A+" h "+-24*(t-.5)+" c -2,0 -3,-"+1*A+" -4,-"+2*A+" l "+-4*t*A+","+-4*t*A+"c -1,-"+1*A+" -2,-"+2*A+" -4,-"+2*A,E.INPUT_SHAPE_HEXAGONAL="M "+4*T*t+",0  h "+4*T+" l "+4*T*t+","+4*T*t+" l "+-4*T*t+","+4*T*t+" h "+-4*T+" l "+-4*T*t+","+-4*T*t+" l "+4*T*t+","+-4*T*t+" z",E.INPUT_SHAPE_HEXAGONAL_WIDTH=12*T*t,E.INPUT_SHAPE_ROUND="M "+4*T+",0 h "+4*T+" a "+4*T+" "+4*T+" 0 0 1 0 "+8*T+" h "+-4*T+" a "+4*T+" "+4*T+" 0 0 1 0 -"+8*T+" z",E.INPUT_SHAPE_ROUND_WIDTH=12*T*t,E.INPUT_SHAPE_HEIGHT=8*T*t,E.FIELD_HEIGHT=8*T*t,E.FIELD_WIDTH=6*T*Math.min(t,1)+10*T*Math.max(t-1,0),E.FIELD_DEFAULT_CORNER_RADIUS=4*T*t,E.EDITABLE_FIELD_PADDING=1.5*T*t,E.BOX_FIELD_PADDING=2*T*t,E.DROPDOWN_ARROW_PADDING=2*T*t,E.FIELD_WIDTH_MIN_EDIT=8*T*t,E.INPUT_AND_FIELD_MIN_X=12*T*t,E.INLINE_PADDING_Y=1*T*t,E.SHAPE_IN_SHAPE_PADDING[1][0]=5*T*t,E.SHAPE_IN_SHAPE_PADDING[1][2]=5*T*t,E.SHAPE_IN_SHAPE_PADDING[1][3]=5*T*t;var D=I.FieldDropdown.prototype.positionArrow;I.FieldDropdown.prototype.positionArrow=function(_){return this.arrowY_=11*t,D.call(this,_)},E.CORNER_RADIUS=1*T*N*100/100,E.TOP_LEFT_CORNER_START="m 0,"+E.CORNER_RADIUS,E.TOP_LEFT_CORNER="A "+E.CORNER_RADIUS+","+E.CORNER_RADIUS+" 0 0,1 "+E.CORNER_RADIUS+",0",E.TOP_RIGHT_CORNER="a "+E.CORNER_RADIUS+","+E.CORNER_RADIUS+" 0 0,1 "+E.CORNER_RADIUS+","+E.CORNER_RADIUS,E.BOTTOM_RIGHT_CORNER=" a "+E.CORNER_RADIUS+","+E.CORNER_RADIUS+" 0 0,1 -"+E.CORNER_RADIUS+","+E.CORNER_RADIUS,E.BOTTOM_LEFT_CORNER="a "+E.CORNER_RADIUS+","+E.CORNER_RADIUS+" 0 0,1 -"+E.CORNER_RADIUS+",-"+E.CORNER_RADIUS,E.INNER_TOP_LEFT_CORNER=" a "+E.CORNER_RADIUS+","+E.CORNER_RADIUS+" 0 0,0 -"+E.CORNER_RADIUS+","+E.CORNER_RADIUS,E.INNER_BOTTOM_LEFT_CORNER="a "+E.CORNER_RADIUS+","+E.CORNER_RADIUS+" 0 0,0 "+E.CORNER_RADIUS+","+E.CORNER_RADIUS,E.TOP_RIGHT_CORNER_DEFINE_HAT="a "+E.DEFINE_HAT_CORNER_RADIUS+","+E.DEFINE_HAT_CORNER_RADIUS+" 0 0,1 "+E.DEFINE_HAT_CORNER_RADIUS+","+E.DEFINE_HAT_CORNER_RADIUS+" v "+(1*T-E.CORNER_RADIUS),E.STATEMENT_INPUT_INNER_SPACE=2.8*T-.9*T*N}(...A),function(){const _=R.getMainWorkspace();if(_){N.editingTarget&&N.emitWorkspaceUpdate();const E=_.getFlyout();if(E){const I=E.getWorkspace();R.Xml.clearWorkspaceAndLoadFromXml(R.Xml.workspaceToDom(I),I),_.getToolbox().refreshSelection(),_.toolboxRefreshEnabled_=!0}}}()}_.settings.addEventListener("change",()=>A()),_.self.addEventListener("disabled",()=>{A(100,100,100)}),_.self.addEventListener("reenabled",()=>A()),A()}(window.Blockly)}}}]);