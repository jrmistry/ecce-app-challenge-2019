// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.

define({"widgets/SuitabilityModeler/nls/strings":{_widgetLabel:"Alkalmass\u00e1gmodellez\u0151",general:{clear:"T\u00f6rl\u00e9s",cancel:"M\u00e9gse",save:"Futtat\u00e1s",saveAs:"Export\u00e1l\u00e1s"},saveModel:{save:"Export\u00e1l\u00e1s",title:"C\u00edm: ",summary:"\u00d6sszefoglal\u00e1s: ",description:"Le\u00edr\u00e1s: ",tags:"C\u00edmk\u00e9k: ",folder:"Mappa: ",homeFolderPattern:"{username} (Kezd\u0151lap)",failed:"Az export\u00e1l\u00e1s nem siker\u00fclt."},util:{colorRamp:{1:"Rendk\u00edv\u00fcl alacsony",
2:"Nagyon alacsony",3:"Alacsony",4:"K\u00f6zepesen alacsony",5:"K\u00f6zepes",6:"K\u00f6zepesen magas",7:"Magas",8:"Nagyon magas",9:"Rendk\u00edv\u00fcl magas",low:"Alacsony",high:"Magas",tipPattern:"{label} ({value})",flipCaption:"T\u00fckr\u00f6z\u00e9s"}},wro:{caption:"Alkalmass\u00e1gmodellez\u0151",browsePrompt:"S\u00falyozott \u00e1tfed\u00e9s szolg\u00e1ltat\u00e1s",selectLayersCaption:"R\u00e9tegek kiv\u00e1laszt\u00e1sa",selectLayers:"R\u00e9tegek",designModelCaption:"Modell tervez\u00e9se",
designModel:"Modell tervez\u00e9se",transparency:"\u00c1tl\u00e1tsz\u00f3s\u00e1g",visible:"L\u00e1that\u00f3",total:"\u00d6sszesen",unableToLoad:"Nem siker\u00fclt a modell bet\u00f6lt\u00e9se.",projectNotOpen:"Nincs megnyitva projekt.",readMore:"Tov\u00e1bbi inform\u00e1ci\u00f3k",validation:{validating:"\u00c9rv\u00e9nyes\u00edt\u00e9s...",invalidItemCaption:"S\u00falyozott \u00e1tfed\u00e9s szolg\u00e1ltat\u00e1sra vonatkoz\u00f3 figyelmeztet\u00e9s",notAnImageService:"Ez az elem nem Raszteres adatszolg\u00e1ltat\u00e1s.",
notAWroService:"Ez az elem nem S\u00falyozott \u00e1tfed\u00e9s szolg\u00e1ltat\u00e1s.",undefinedUrl:"Ennek az elemnek az URL-c\u00edme nincs meghat\u00e1rozva.",inaccessible:"A szolg\u00e1ltat\u00e1s nem \u00e9rhet\u0151 el.",generalError:"Nem siker\u00fclt megnyitni az elemet.",missingFieldPattern:"A(z) {field} mez\u0151t k\u00f6telez\u0151 megadni",notAllowRasterFunction:"Az allowRasterFunction param\u00e9tert igaz \u00e9rt\u00e9k\u0171re kell \u00e1ll\u00edtani",notNearestResampling:"Az alap\u00e9rtelmezett \u00fajramintavitelez\u00e9si elj\u00e1r\u00e1st a legk\u00f6zelebbi szomsz\u00e9d szerint  kell elv\u00e9gezni",
notIsWeightedOverlayProp:"Az IsWeightedOverlay alaptulajdons\u00e1got igaz \u00e9rt\u00e9k\u0171re kell \u00e1ll\u00edtani",invalidLink:"Az URL \u00e9rv\u00e9nytelen. Nem siker\u00fclt megnyitni az oldalt a kiv\u00e1lasztott r\u00e9teghez.",unexpectedError:"V\u00e1ratlan \u00e1llapot.",rangeMessage:"Az \u00e9rt\u00e9knek ${0} \u00e9s ${1} k\u00f6z\u00f6tt kell lennie",rangeMessage100:"Az \u00e9rt\u00e9knek 0 \u00e9s 100 k\u00f6z\u00f6tt kell lennie",maxLayers:"A szolg\u00e1ltat\u00e1s maximum ${0} r\u00e9teget enged\u00e9lyez. El kell t\u00e1vol\u00edtania egy r\u00e9teget, miel\u0151tt \u00fajat adna hozz\u00e1.",
notFound:"A(z) ${0} r\u00e9teg nem tal\u00e1lhat\u00f3 a s\u00falyozott \u00e1tfed\u00e9s szolg\u00e1ltat\u00e1sban",wroServiceNotDefined:"A modellhez nincs meghat\u00e1rozva s\u00falyozott \u00e1tfed\u00e9s szolg\u00e1ltat\u00e1s.",overlayLayerOutputInvalid:"A(z) [${0}] fedv\u00e9nym\u0171velet \u00fajralek\u00e9pez\u00e9si t\u00e9rk\u00e9ptartom\u00e1ny\u00e1nak [${1}] kimeneti \u00e9rt\u00e9kei hi\u00e1nyznak vagy \u00e9rv\u00e9nytelenek",overlayLayerInputInvalid:"A(z) [${0}] fedv\u00e9nym\u0171velet \u00fajralek\u00e9pez\u00e9si t\u00e9rk\u00e9ptartom\u00e1ny\u00e1nak[${1}] bemeneti min./max. \u00e9rt\u00e9kei hi\u00e1nyoznak vagy \u00e9rv\u00e9nytelenek",
overlayLayerRangesMissing:"A(z) [${0}] fedv\u00e9nym\u0171veletn\u00e9l hi\u00e1nyoznak az \u00fajralek\u00e9pez\u00e9si \u00e9rt\u00e9ktartom\u00e1nyok",overlayLayerWeight:"A fedv\u00e9nym\u0171velet-s\u00falyoz\u00e1sok \u00f6sszeg\u00e9nek 100-nak kell lennie",overlayLayerRequired:"Legal\u00e1bb egy fedv\u00e9nym\u0171velet sz\u00fcks\u00e9ges",overlayLayerNotDefined:"A fedv\u00e9nym\u0171veletek nincsenek meghat\u00e1rozva",requiresColormap:"Ez a raszterfunkci\u00f3 sz\u00ednt\u00e9rk\u00e9pet ig\u00e9nyel, de a modell nem rendelkezik \u00e9rv\u00e9nyes sz\u00ednt\u00e9rk\u00e9p-meghat\u00e1roz\u00e1ssal",
createModelError:"Hiba a modell l\u00e9trehoz\u00e1sakor",invalidModel:"A modell nem \u00e9rv\u00e9nyes",imageServiceNotDefined:"A raszteres adatszolg\u00e1ltat\u00e1si r\u00e9teg nincs meghat\u00e1rozva",imageLayerNotDefined:"A raszteres adatszolg\u00e1ltat\u00e1si r\u00e9teg nincs meghat\u00e1rozva",histogramNotDefined:"Nincs meghat\u00e1rozva s\u00falyozott \u00e1tfed\u00e9si hisztogramfunkci\u00f3."},colorRampLabel:{"Green Yellow Red":"Z\u00f6ld s\u00e1rga piros","Red Yellow Green":"Piros s\u00e1rga z\u00f6ld",
"Yellow to Dark Red":"S\u00e1rg\u00e1t\u00f3l a s\u00f6t\u00e9tv\u00f6r\u00f6sig","Dark Red to Yellow":"S\u00f6t\u00e9tv\u00f6r\u00f6st\u0151l a s\u00e1rg\u00e1ig","Light Gray to Dark Gray":"Vil\u00e1gossz\u00fcrk\u00e9t\u0151l a s\u00f6t\u00e9tsz\u00fcrk\u00e9ig","Dark Gray to Light Gray":"S\u00f6t\u00e9tsz\u00fcrk\u00e9t\u0151l a vil\u00e1gossz\u00fcrk\u00e9ig","Light Brown to Dark Brown":"Vil\u00e1gosbarn\u00e1t\u00f3l a s\u00f6t\u00e9tbarn\u00e1ig","Dark Brown to Light Brown":"S\u00f6t\u00e9tbarn\u00e1t\u00f3l a vil\u00e1gosbarn\u00e1ig",
"Full Spectrum - Bright Red to Blue":"Teljes spektrum - Vil\u00e1gospirost\u00f3l a k\u00e9kig","Full Spectrum - Bright Blue to Red":"Teljes spektrum - Vil\u00e1gosk\u00e9kt\u0151l a pirosig","Partial Spectrum - Yellow to Blue":"R\u00e9szleges spektrum - S\u00e1rg\u00e1t\u00f3l a k\u00e9kig","Partial Spectrum - Blue to Yellow":"R\u00e9szleges spektrum - K\u00e9kt\u0151l a s\u00e1rg\u00e1ig","Yellow-Green to Dark Blue":"S\u00e1rg\u00e1sz\u00f6ldt\u0151l a s\u00f6t\u00e9tk\u00e9kig","Dark Blue to Yellow-Green":"S\u00f6t\u00e9tk\u00e9kt\u0151l a s\u00e1rg\u00e1sz\u00f6ldig",
"Cold to Hot Diverging":"Hideg-meleg sz\u00ednek sz\u00ednsk\u00e1la","Hot to Cold Diverging":"Forr\u00f3t\u00f3l a hidegig, divergens","Surface - Low to High":"Felsz\u00edn - alacsonyt\u00f3l a magasig","Surface - High to Low":"Felsz\u00edn - magast\u00f3l az alacsonyig"}},tabs:{layers:"R\u00e9tegek",model:"Modell",chart:"Diagram"},chart:{prompt:"Vektoros elemek",working:"Friss\u00edt\u00e9s...",polygonTool:"Polygon rajzol\u00e1sa",freehandPolygonTool:"Szabadk\u00e9zi polygon rajzol\u00e1sa",selectTool:"Kiv\u00e1laszt\u00e1s egy r\u00e9tegr\u0151l",
panTool:"Mozgat\u00e1s",clearButton:"T\u00f6rl\u00e9s",noModelLayer:"Nincs modell.",noSubjectLayers:"A t\u00e9rk\u00e9pen nincsenek polygonr\u00e9tegek.",tipPattern:"${category} \u2013 ${label}: ${percent}%",tipPattern2:"${category}: ${percent}%",labelPattern:"${category} \u2013 ${label}"},_localized:{}},"widgets/SuitabilityModeler/setting/nls/strings":{allowSaveAs:"Export\u00e1l\u00e1s enged\u00e9lyez\u00e9se",startingState:"Kezdeti \u00e1llapot:",byUrl:"\u00dcres modell",byItem:"El\u0151re konfigur\u00e1lt modell",
imageServiceUrl:"Raszteres adatszolg\u00e1ltat\u00e1s URL-c\u00edme",validate:"\u00c9rv\u00e9nyes\u00edt\u00e9s",validating:"\u00c9rv\u00e9nyes\u00edt\u00e9s...",validated:"Az URL \u00e9rv\u00e9nyes.",modelName:"Modell",selectModel:"Kiv\u00e1laszt\u00e1s",itemSelectorTitle:"V\u00e1lasszon egy modellt",ok:"OK",cancel:"M\u00e9gse",description1:"A Suitability Modeler seg\u00edt megtal\u00e1lni a tev\u00e9kenys\u00e9g\u00e9hez legalkalmasabb helyet, el\u0151re jelezni a kock\u00e1zatoknak val\u00f3 kitetts\u00e9get, vagy meg\u00e1llap\u00edtani, hol lehet sz\u00e1m\u00edtani adott esem\u00e9nyekre. Ez a widget lehet\u0151v\u00e9 teszi a k\u00fcl\u00f6nb\u00f6z\u0151 r\u00e9tegek kombin\u00e1l\u00e1s\u00e1t \u00e9s s\u00falyoz\u00e1s\u00e1t, \u00edgy egyszerre t\u00f6bb t\u00e9nyez\u0151t is ki lehet \u00e9rt\u00e9kelni.",
description2:"A Suitability Modeler gyors, webalap\u00fa, s\u00falyozott raszteres \u00e1tfed\u00e9st haszn\u00e1l a modellek szolg\u00e1ltat\u00e1sb\u00f3l val\u00f3 l\u00e9trehoz\u00e1s\u00e1hoz. Kiindulhat egy s\u00falyozott raszteres \u00e1tfed\u00e9si (WRO) szolg\u00e1ltat\u00e1s \u00fcres \u00e1llapot\u00e1b\u00f3l vagy egy el\u0151re konfigur\u00e1lt WRO modellb\u0151l is. V\u00e1lasszon r\u00e9tegeket, rendelje hozz\u00e1 a s\u00falyoz\u00e1sokat \u00e9s \u00e1ll\u00edtsa be a r\u00e9tegek oszt\u00e1lyoz\u00e1si \u00e9rt\u00e9keit az elemz\u00e9s meghat\u00e1roz\u00e1s\u00e1hoz. Ezut\u00e1n futtassa a modellez\u0151t, jelen\u00edtse meg az eredm\u00e9nyeket, \u00e9s ig\u00e9ny eset\u00e9n mentse a kimenetet a szervezet/port\u00e1l tartalmai k\u00f6z\u00e9.",
description3:"Tudjon meg t\u00f6bbet a GeoPlanner alkalmass\u00e1gmodellez\u0151r\u0151l.",_localized:{}}});