// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.

require({cache:{"url:widgets/CostAnalysis/copy-features.html":'\x3cdiv class\x3d"esriCTSelectFeaturesContainer"\x3e\r\n  \x3cdiv style\x3d"height: 100%; width: 100%;"\x3e\r\n    \x3cdiv class\x3d"esriCTCopyFeaturesListTitle"\x3e${nls.copyFeatures.title}\x3c/div\x3e\r\n    \x3cdiv class\x3d"esriCTCopyFeaturesListContent" data-dojo-attach-point\x3d"layerListTable"\x3e\x3c/div\x3e\r\n    \x3cdiv class\x3d"esriCTCopyFeaturesBtnContainer"\x3e\r\n      \x3cdiv class\x3d"esriCTCopyFeaturesBtn jimu-btn" data-dojo-attach-point\x3d"createMultipleFeaturesBtn" title\x3d"${nls.copyFeatures.createFeatures}"\x3e${nls.copyFeatures.createFeatures}\x3c/div\x3e\r\n      \x3cdiv class\x3d"esriCTCopyFeaturesBtn jimu-btn" data-dojo-attach-point\x3d"createSingleFeatureBtn" title\x3d"${nls.copyFeatures.createSingleFeature}"\x3e${nls.copyFeatures.createSingleFeature}\x3c/div\x3e\r\n      \x3cdiv class\x3d"esriCTCopyFeaturesBtn jimu-btn" data-dojo-attach-point\x3d"cancelBtn" title\x3d"${nls.common.cancel}"\x3e${nls.common.cancel}\x3c/div\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e'}});
define("dijit/_WidgetBase dijit/_TemplatedMixin dojo/_base/declare dojo/Evented dojo/_base/lang dojo/_base/array dojo/dom-construct dojo/on jimu/dijit/CheckBox dojo/dom-class dojo/dom-attr ./highlightSymbolUtils esri/layers/GraphicsLayer dojo/text!./copy-features.html".split(" "),function(m,n,p,q,d,e,h,f,r,g,k,t,u,v){return p([m,q,n],{templateString:v,layerLabel:null,featuresList:null,checkBoxNodes:{},layerCheckBoxNodes:{},featuresByLayerId:{},featureTitlesByLayerId:{},_highlightGraphicsLayer:null,
startup:function(){this.inherited(arguments);this._highlightGraphicsLayer=this._createNewGraphicsLayer("highlightGraphicsLayer")},postCreate:function(){this.checkBoxNodes={};this.layerCheckBoxNodes={};this.featuresByLayerId={};this.featureTitlesByLayerId={};this._highlightGraphicsLayer=null;this.own(f(this.cancelBtn,"click",d.hitch(this,function(){this.cancelBtnClicked();this.emit("cancelBtnClicked")})));this.own(f(this.createMultipleFeaturesBtn,"click",d.hitch(this,this._createMultipleFeaturesBtnClicked)));
this.own(f(this.createSingleFeatureBtn,"click",d.hitch(this,this._createSingleFeatureBtnClicked)))},selectFeaturesToCopy:function(a){if(a&&0<a.length){this.checkBoxNodes={};this.layerCheckBoxNodes={};this.featuresByLayerId={};this.featureTitlesByLayerId={};this._showHideSingleFeatureButton(a[0]._layer.geometryType);g.remove(this.mainNode,"esriCTHidden");this._processSelectedFeatures(a);h.empty(this.layerListTable);for(var b in this.featureTitlesByLayerId){var c;a=this.layerInfosObj.getLayerInfoById(b);
a=a.title?a.title:a.name;c=h.create("div",{},this.layerListTable);this.layerCheckBoxNodes[b]=this._createListNode(a,c,!1,b);this.checkBoxNodes[b]||(this.checkBoxNodes[b]=[]);0<this.featureTitlesByLayerId[b].length&&this._createFeatureEntries(b,c)}this._highlightFeatures()}},_processSelectedFeatures:function(a){this.featuresByLayerId={};this.featureTitlesByLayerId={};e.forEach(a,d.hitch(this,function(a){this.featuresByLayerId[a._layer.id]||(this.featuresByLayerId[a._layer.id]=[],this.featureTitlesByLayerId[a._layer.id]=
[]);this.featuresByLayerId[a._layer.id].push(a);this.featureTitlesByLayerId[a._layer.id].push(a.getTitle())}))},_createFeatureEntries:function(a,b){e.forEach(this.featureTitlesByLayerId[a],d.hitch(this,function(c){c=this._createListNode(c,b,!0,a);this.checkBoxNodes[a].push(c)}))},_createListNode:function(a,b,c,l){var e;b=h.create("div",{"class":"jimu-widget-row esriCTCopyFeaturesNode"},b);e=h.create("div",{"class":"jimu-float-leading checkBoxNode"},b);a=new r({label:a,checked:!0},e);c?(g.add(b,"esriCTCopyFeaturesChildNode"),
k.set(a.domNode,"parentLayerId",l),f(a.domNode,"click",d.hitch(this,this._childNodeStateChanged))):(k.set(a.domNode,"layerId",l),f(a.domNode,"click",d.hitch(this,this._parentNodeStateChanged)));return a},_parentNodeStateChanged:function(a){a=k.get(a.currentTarget,"layerId");var b=this.checkBoxNodes[a],c=this.layerCheckBoxNodes[a].getValue();e.forEach(b,d.hitch(this,function(a){c?a.setValue(!0):a.setValue(!1)}));this._highlightFeatures()},_childNodeStateChanged:function(a){var b=k.get(a.currentTarget,
"parentLayerId");a=this.layerCheckBoxNodes[b];var b=this.checkBoxNodes[b],c=!0;this._highlightFeatures();e.some(b,d.hitch(this,function(a){if(!a.getValue())return c=!1,!0}));a.setValue(c)},cancelBtnClicked:function(){g.add(this.mainNode,"esriCTHidden");this._highlightGraphicsLayer.clear()},_createMultipleFeaturesBtnClicked:function(){var a=[],b;(b=this._getSelectedFeaturesForCopy())&&0<b.length&&(e.forEach(b,d.hitch(this,function(b){b&&b.geometry&&a.push(b.geometry)})),this.emit("createMultipleFeatures",
a))},_createSingleFeatureBtnClicked:function(){var a;(a=this._getSelectedFeaturesForCopy())&&0<a.length&&this.emit("createSingleFeature",a)},_validateSelectedFeature:function(a){(!a||0>=a.length)&&this.appUtils.showMessage(this.nls.copyFeatures.selectFeatureToCopyMessage)},_getSelectedFeaturesForCopy:function(){var a,b=[];for(a in this.featuresByLayerId){var c=this._getSelectedFeaturesByLayerId(a);0<c.length&&(b=b.concat(c))}this._validateSelectedFeature(b);return b},_getSelectedFeaturesByLayerId:function(a){var b=
[];e.forEach(this.checkBoxNodes[a],d.hitch(this,function(c,d){c.getValue()&&b.push(this.featuresByLayerId[a][d])}));return b},_showHideSingleFeatureButton:function(a){"esriGeometryPoint"===a?g.add(this.createSingleFeatureBtn,"esriCTHidden"):g.remove(this.createSingleFeatureBtn,"esriCTHidden")},_createNewGraphicsLayer:function(a){var b;b={};if(a+=this.widgetId)this.map._layers[a]&&this.map.removeLayer(this.map._layers[a]),b={id:a};a=new u(b);this.map.addLayer(a);return a},_highlightFeatures:function(){this._highlightGraphicsLayer.clear();
for(var a in this.featureTitlesByLayerId)this._highlightSingleLayerFeatures(a)},_highlightSingleLayerFeatures:function(a){var b;b=this.map.getLayer(a);a=this._getSelectedFeaturesByLayerId(a);e.forEach(a,d.hitch(this,function(a){a=t.getHighLightSymbol(a,b);this._highlightGraphicsLayer.add(a)}))}})});