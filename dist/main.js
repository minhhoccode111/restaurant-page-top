/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/styles.css":
/*!******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/styles.css ***!
  \******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/*===== GOOGLE FONTS =====*/\\r\\n\\r\\n/*===== VARIABLES CSS =====*/\\r\\n:root {\\r\\n  --header-height: 3rem;\\r\\n\\r\\n  /*========== Colors ==========*/\\r\\n  --first-color: #069C54;\\r\\n  --first-color-alt: #048654;\\r\\n  --title-color: #393939;\\r\\n  --text-color: #707070;\\r\\n  --text-color-light: #A6A6A6;\\r\\n  --body-color: #FBFEFD;\\r\\n  --container-color: #FFFFFF;\\r\\n\\r\\n  /*========== Font and typography ==========*/\\r\\n  --body-font: 'Poppins', sans-serif;\\r\\n  --biggest-font-size: 2.25rem;\\r\\n  --h1-font-size: 1.5rem;\\r\\n  --h2-font-size: 1.25rem;\\r\\n  --h3-font-size: 1rem;\\r\\n  --normal-font-size: .938rem;\\r\\n  --small-font-size: .813rem;\\r\\n  --smaller-font-size: .75rem;\\r\\n\\r\\n  /*========== Font weight ==========*/\\r\\n  --font-medium: 500;\\r\\n  --font-semi-bold: 600;\\r\\n\\r\\n  /*========== Margenes ==========*/\\r\\n  --mb-1: .5rem;\\r\\n  --mb-2: 1rem;\\r\\n  --mb-3: 1.5rem;\\r\\n  --mb-4: 2rem;\\r\\n  --mb-5: 2.5rem;\\r\\n  --mb-6: 3rem;\\r\\n\\r\\n  /*========== z index ==========*/\\r\\n  --z-tooltip: 10;\\r\\n  --z-fixed: 100;\\r\\n}\\r\\n\\r\\n@media screen and (min-width: 768px){\\r\\n  :root{\\r\\n    --biggest-font-size: 4rem;\\r\\n    --h1-font-size: 2.25rem;\\r\\n    --h2-font-size: 1.5rem;\\r\\n    --h3-font-size: 1.25rem;\\r\\n    --normal-font-size: 1rem;\\r\\n    --small-font-size: .875rem;\\r\\n    --smaller-font-size: .813rem;\\r\\n  }\\r\\n}\\r\\n\\r\\n/*========== BASE ==========*/\\r\\n*,::before,::after{\\r\\n  box-sizing: border-box;\\r\\n}\\r\\n\\r\\nhtml{\\r\\n  scroll-behavior: smooth;\\r\\n}\\r\\n\\r\\n/*========== Variables Dark theme ==========*/\\r\\nbody.dark-theme{\\r\\n  --title-color: #F1F3F2;\\r\\n  --text-color: #C7D1CC;\\r\\n  --body-color: #1D2521;\\r\\n  --container-color: #27302C;\\r\\n}\\r\\n\\r\\n/*========== Button Dark/Light ==========*/\\r\\n.change-theme{\\r\\n  position: absolute;\\r\\n  right: 1rem;\\r\\n  top: 1.8rem;\\r\\n  color: var(--text-color);\\r\\n  font-size: 1rem;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\nbody{\\r\\n  margin: var(--header-height) 0 0 0;\\r\\n  font-family: var(--body-font);\\r\\n  font-size: var(--normal-font-size);\\r\\n  background-color: var(--body-color);\\r\\n  color: var(--text-color);\\r\\n  line-height: 1.6;\\r\\n}\\r\\n\\r\\nh1,h2,h3,p,ul{\\r\\n  margin: 0;\\r\\n}\\r\\n\\r\\nul{\\r\\n  padding: 0;\\r\\n  list-style: none;\\r\\n}\\r\\n\\r\\na{\\r\\n  text-decoration: none;\\r\\n}\\r\\n\\r\\nimg{\\r\\n  max-width: 100%;\\r\\n  height: auto;\\r\\n}\\r\\n\\r\\n/*========== CLASS CSS ==========*/\\r\\n.section{\\r\\n  padding: 4rem 0 2rem;\\r\\n}\\r\\n\\r\\n.section-title, .section-subtitle{\\r\\n  text-align: center;\\r\\n}\\r\\n\\r\\n.section-title{\\r\\n  font-size: var(--h1-font-size);\\r\\n  color: var(--title-color);\\r\\n  margin-bottom: var(--mb-3);\\r\\n}\\r\\n\\r\\n.section-subtitle{\\r\\n  display: block;\\r\\n  color: var(--first-color);\\r\\n  font-weight: var(--font-medium);\\r\\n  margin-bottom: var(--mb-1);\\r\\n}\\r\\n\\r\\n/*========== LAYOUT ==========*/\\r\\n.bd-container{\\r\\n  max-width: 960px;\\r\\n  width: calc(100% - 2rem);\\r\\n  margin-left: var(--mb-2);\\r\\n  margin-right: var(--mb-2);\\r\\n}\\r\\n\\r\\n.bd-grid{\\r\\n  display: grid;\\r\\n  gap: 1.5rem;\\r\\n}\\r\\n\\r\\n.l-header{\\r\\n  width: 100%;\\r\\n  position: fixed;\\r\\n  top: 0;\\r\\n  left: 0;\\r\\n  z-index: var(--z-fixed);\\r\\n  background-color: var(--body-color);\\r\\n}\\r\\n\\r\\n/*========== NAV ==========*/\\r\\n.nav{\\r\\n  max-width: 1024px;\\r\\n  height: var(--header-height);\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n@media screen and (max-width: 768px){\\r\\n  .nav__menu{\\r\\n    position: fixed;\\r\\n    top: -100%;\\r\\n    left: 0;\\r\\n    width: 100%;\\r\\n    padding: 1.5rem 0 1rem;\\r\\n    text-align: center;\\r\\n    background-color: var(--body-color);\\r\\n    transition: .4s;\\r\\n    box-shadow: 0 4px 4px rgba(0,0,0,.1);\\r\\n    border-radius: 0 0 1rem 1rem;\\r\\n    z-index: var(--z-fixed);\\r\\n  }\\r\\n}\\r\\n\\r\\n.nav__item{\\r\\n  margin-bottom: var(--mb-2);\\r\\n}\\r\\n\\r\\n.nav__link, .nav__logo, .nav__toggle{\\r\\n  color: var(--text-color);\\r\\n  font-weight: var(--font-medium);\\r\\n}\\r\\n\\r\\n.nav__logo:hover{\\r\\n  color: var(--first-color);\\r\\n}\\r\\n\\r\\n.nav__link{\\r\\n  transition: .3s;\\r\\n}\\r\\n\\r\\n.nav__link:hover{\\r\\n  color: var(--first-color);\\r\\n}\\r\\n\\r\\n.nav__toggle{\\r\\n  font-size: 1.3rem;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n/* Show menu */\\r\\n.show-menu{\\r\\n  top: var(--header-height);\\r\\n}\\r\\n\\r\\n/* Active menu */\\r\\n.active-link{\\r\\n  color: var(--first-color);\\r\\n}\\r\\n\\r\\n/* Change background header */\\r\\n.scroll-header{\\r\\n  box-shadow: 0 2px 4px rgba(0,0,0,.1);\\r\\n}\\r\\n\\r\\n/* Scroll top */\\r\\n.scrolltop{\\r\\n  position: fixed;\\r\\n  right: 1rem;\\r\\n  bottom: -20%;\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n  padding: .3rem;\\r\\n  background: rgba(6,156,84,.5);\\r\\n  border-radius: .4rem;\\r\\n  z-index: var(--z-tooltip);\\r\\n  transition: .4s;\\r\\n  visibility: hidden;\\r\\n}\\r\\n\\r\\n.scrolltop:hover{\\r\\n  background-color: var(--first-color-alt);\\r\\n}\\r\\n\\r\\n.scrolltop__icon{\\r\\n  font-size: 1.8rem;\\r\\n  color: var(--body-color);\\r\\n}\\r\\n\\r\\n/* Show scrolltop */\\r\\n.show-scroll{\\r\\n  visibility: visible;\\r\\n  bottom: 1.5rem;\\r\\n}\\r\\n\\r\\n/*========== HOME ==========*/\\r\\n.home__container{\\r\\n  height: calc(100vh - var(--header-height));\\r\\n  align-content: center;\\r\\n}\\r\\n\\r\\n.home__title{\\r\\n  font-size: var(--biggest-font-size);\\r\\n  color: var(--first-color);\\r\\n  margin-bottom: var(--mb-1);\\r\\n}\\r\\n\\r\\n.home__subtitle{\\r\\n  font-size: var(--h1-font-size);\\r\\n  color: var(--title-color);\\r\\n  margin-bottom: var(--mb-4);\\r\\n}\\r\\n\\r\\n.home__img{\\r\\n  width: 300px;\\r\\n  justify-self: center;\\r\\n}\\r\\n\\r\\n/*========== BUTTONS ==========*/\\r\\n.button{\\r\\n  display: inline-block;\\r\\n  background-color: var(--first-color);\\r\\n  color: #FFF;\\r\\n  padding: .75rem 1rem;\\r\\n  border-radius: .5rem;\\r\\n  transition: .3s;\\r\\n}\\r\\n\\r\\n.button:hover{\\r\\n  background-color: var(--first-color-alt);\\r\\n}\\r\\n\\r\\n/*========== ABOUT ==========*/\\r\\n.about__data{\\r\\n  text-align: center;\\r\\n}\\r\\n\\r\\n.about__description{\\r\\n  margin-bottom: var(--mb-3);\\r\\n}\\r\\n\\r\\n.about__img{\\r\\n  width: 280px;\\r\\n  border-radius: .5rem;\\r\\n  justify-self: center;\\r\\n}\\r\\n\\r\\n/*========== SERVICES ==========*/\\r\\n.services__container{\\r\\n  row-gap: 2.5rem;\\r\\n  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));\\r\\n}\\r\\n\\r\\n.services__content{\\r\\n  text-align: center;\\r\\n}\\r\\n\\r\\n.services__img{\\r\\n  width: 64px;\\r\\n  height: 64px;\\r\\n  fill: var(--first-color);\\r\\n  margin-bottom: var(--mb-2);\\r\\n}\\r\\n\\r\\n.services__title{\\r\\n  font-size: var(--h3-font-size);\\r\\n  color: var(--title-color);\\r\\n  margin-bottom: var(--mb-1);\\r\\n}\\r\\n\\r\\n.services__description{\\r\\n  padding: 0 1.5rem;\\r\\n}\\r\\n\\r\\n/*========== MENU ==========*/\\r\\n.menu__container{\\r\\n  grid-template-columns: repeat(2, 1fr);\\r\\n  justify-content: center;\\r\\n}\\r\\n\\r\\n.menu__content{\\r\\n  position: relative;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  background-color: var(--container-color);\\r\\n  border-radius: .5rem;\\r\\n  box-shadow: 0 2px 4px rgba(3,74,40,.15);\\r\\n  padding: .75rem;\\r\\n}\\r\\n\\r\\n.menu__img{\\r\\n  width: 100px;\\r\\n  align-self: center;\\r\\n  margin-bottom: var(--mb-2);\\r\\n}\\r\\n\\r\\n.menu__name, .menu__preci{\\r\\n  font-weight: var(--font-semi-bold);\\r\\n  color: var(--title-color);\\r\\n}\\r\\n\\r\\n.menu__name{\\r\\n  font-size: var(--normal-font-size);\\r\\n}\\r\\n\\r\\n.menu__detail, .menu__preci{\\r\\n  font-size: var(--small-font-size);\\r\\n}\\r\\n\\r\\n.menu__detail{\\r\\n  margin-bottom: var(--mb-1);\\r\\n}\\r\\n\\r\\n.menu__button{\\r\\n  position: absolute;\\r\\n  bottom: 0;\\r\\n  right: 0;\\r\\n  display: flex;\\r\\n  padding: .625rem .813rem;\\r\\n  border-radius: .5rem 0 .5rem 0;\\r\\n}\\r\\n\\r\\n/*========== APP ==========*/\\r\\n.app__data{\\r\\n  text-align: center;\\r\\n}\\r\\n\\r\\n.app__description{\\r\\n  margin-bottom: var(--mb-5);\\r\\n}\\r\\n\\r\\n.app__stores{\\r\\n  margin-bottom: var(--mb-4);\\r\\n}\\r\\n\\r\\n.app__store{\\r\\n  width: 120px;\\r\\n  margin: 0 var(--mb-1);\\r\\n}\\r\\n\\r\\n.app__img{\\r\\n  width: 230px;\\r\\n  justify-self: center;\\r\\n}\\r\\n\\r\\n/*========== CONTACT ==========*/\\r\\n.contact__container{\\r\\n  text-align: center;\\r\\n}\\r\\n\\r\\n.contact__description{\\r\\n  margin-bottom: var(--mb-3);\\r\\n}\\r\\n\\r\\n/*========== FOOTER ==========*/\\r\\n.footer__container{\\r\\n  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));\\r\\n  row-gap: 2rem;\\r\\n}\\r\\n\\r\\n.footer__logo{\\r\\n  font-size: var(--h3-font-size);\\r\\n  color: var(--first-color);\\r\\n  font-weight: var(--font-semi-bold);\\r\\n}\\r\\n\\r\\n.footer__description{\\r\\n  display: block;\\r\\n  font-size: var(--small-font-size);\\r\\n  margin: .25rem 0 var(--mb-3);\\r\\n}\\r\\n\\r\\n.footer__social{\\r\\n  font-size: 1.5rem;\\r\\n  color: var(--title-color);\\r\\n  margin-right: var(--mb-2);\\r\\n}\\r\\n\\r\\n.footer__title{\\r\\n  font-size: var(--h2-font-size);\\r\\n  color: var(--title-color);\\r\\n  margin-bottom: var(--mb-2);\\r\\n}\\r\\n\\r\\n.footer__link{\\r\\n  display: inline-block;\\r\\n  color: var(--text-color);\\r\\n  margin-bottom: var(--mb-1);\\r\\n}\\r\\n\\r\\n.footer__link:hover{\\r\\n  color: var(--first-color);\\r\\n}\\r\\n\\r\\n.footer__copy{\\r\\n  text-align: center;\\r\\n  font-size: var(--small-font-size);\\r\\n  color: var(--text-color-light);\\r\\n  margin-top: 3.5rem;\\r\\n}\\r\\n\\r\\n/*========== MEDIA QUERIES ==========*/\\r\\n@media screen and (min-width: 576px){\\r\\n  .home__container,\\r\\n  .about__container,\\r\\n  .app__container{\\r\\n    grid-template-columns: repeat(2,1fr);\\r\\n    align-items: center;\\r\\n  }\\r\\n\\r\\n  .about__data, .about__initial,\\r\\n  .app__data, .app__initial,\\r\\n  .contact__container, .contact__initial{\\r\\n    text-align: initial;\\r\\n  }\\r\\n\\r\\n  .about__img, .app__img{\\r\\n    width: 380px;\\r\\n    order: -1;\\r\\n  }\\r\\n\\r\\n  .contact__container{\\r\\n    grid-template-columns: 1.75fr 1fr;\\r\\n    align-items: center;\\r\\n  }\\r\\n  .contact__button{\\r\\n    justify-self: center;\\r\\n  }\\r\\n}\\r\\n\\r\\n@media screen and (min-width: 768px){\\r\\n  body{\\r\\n    margin: 0;\\r\\n  }\\r\\n\\r\\n  .section{\\r\\n    padding-top: 8rem;\\r\\n  }\\r\\n\\r\\n  .nav{\\r\\n    height: calc(var(--header-height) + 1.5rem);\\r\\n  }\\r\\n  .nav__list{\\r\\n    display: flex;\\r\\n  }\\r\\n  .nav__item{\\r\\n    margin-left: var(--mb-5);\\r\\n    margin-bottom: 0;\\r\\n  }\\r\\n  .nav__toggle{\\r\\n    display: none;\\r\\n  }\\r\\n\\r\\n  .change-theme{\\r\\n    position: initial;\\r\\n    margin-left: var(--mb-2);\\r\\n  }\\r\\n\\r\\n  .home__container{\\r\\n    height: 100vh;\\r\\n    justify-items: center;\\r\\n  }\\r\\n\\r\\n  .services__container,\\r\\n  .menu__container{\\r\\n    margin-top: var(--mb-6);\\r\\n  }\\r\\n\\r\\n  .menu__container{\\r\\n    grid-template-columns: repeat(3, 210px);\\r\\n    column-gap: 4rem;\\r\\n  }\\r\\n  .menu__content{\\r\\n    padding: 1.5rem;\\r\\n  }\\r\\n  .menu__img{\\r\\n    width: 130px;\\r\\n  }\\r\\n\\r\\n  .app__store{\\r\\n    margin: 0 var(--mb-1) 0 0;\\r\\n  }\\r\\n}\\r\\n\\r\\n@media screen and (min-width: 960px){\\r\\n  .bd-container{\\r\\n    margin-left: auto;\\r\\n    margin-right: auto;\\r\\n  }\\r\\n\\r\\n  .home__img{\\r\\n    width: 500px;\\r\\n  }\\r\\n\\r\\n  .about__container,\\r\\n  .app__container{\\r\\n    column-gap: 7rem;\\r\\n  }\\r\\n}\\r\\n\\r\\n/* For tall screens on mobiles y desktop*/\\r\\n@media screen and (min-height: 721px) {\\r\\n    .home__container {\\r\\n        height: 640px;\\r\\n    }\\r\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurantpagetop/./src/css/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://restaurantpagetop/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurantpagetop/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/css/styles.css":
/*!****************************!*\
  !*** ./src/css/styles.css ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurantpagetop/./src/css/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurantpagetop/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurantpagetop/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurantpagetop/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurantpagetop/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurantpagetop/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurantpagetop/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/styles.css */ \"./src/css/styles.css\");\n/* harmony import */ var _js_main_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/main.js */ \"./src/js/main.js\");\n/* harmony import */ var _js_main_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_js_main_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _img_about_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/about.jpg */ \"./src/img/about.jpg\");\n/* harmony import */ var _img_app1_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img/app1.png */ \"./src/img/app1.png\");\n/* harmony import */ var _img_app2_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./img/app2.png */ \"./src/img/app2.png\");\n/* harmony import */ var _img_dish_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./img/dish.svg */ \"./src/img/dish.svg\");\n/* harmony import */ var _img_home_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./img/home.png */ \"./src/img/home.png\");\n/* harmony import */ var _img_movil_app_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./img/movil-app.png */ \"./src/img/movil-app.png\");\n/* harmony import */ var _img_pizza_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./img/pizza.svg */ \"./src/img/pizza.svg\");\n/* harmony import */ var _img_plate1_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./img/plate1.png */ \"./src/img/plate1.png\");\n/* harmony import */ var _img_plate2_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./img/plate2.png */ \"./src/img/plate2.png\");\n/* harmony import */ var _img_plate3_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./img/plate3.png */ \"./src/img/plate3.png\");\n/* harmony import */ var _img_truck_svg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./img/truck.svg */ \"./src/img/truck.svg\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nwindow.addEventListener(\"DOMContentLoaded\", () => {});\n\n\n//# sourceURL=webpack://restaurantpagetop/./src/index.js?");

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ (() => {

eval("/*==================== SHOW MENU ====================*/\r\nconst showMenu = (toggleId, navId) =>{\r\n    const toggle = document.getElementById(toggleId),\r\n    nav = document.getElementById(navId)\r\n    \r\n    // Validate that variables exist\r\n    if(toggle && nav){\r\n        toggle.addEventListener('click', ()=>{\r\n            // We add the show-menu class to the div tag with the nav__menu class\r\n            nav.classList.toggle('show-menu')\r\n        })\r\n    }\r\n}\r\nshowMenu('nav-toggle','nav-menu')\r\n\r\n/*==================== REMOVE MENU MOBILE ====================*/\r\nconst navLink = document.querySelectorAll('.nav__link')\r\n\r\nfunction linkAction(){\r\n    const navMenu = document.getElementById('nav-menu')\r\n    // When we click on each nav__link, we remove the show-menu class\r\n    navMenu.classList.remove('show-menu')\r\n}\r\nnavLink.forEach(n => n.addEventListener('click', linkAction))\r\n\r\n/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/\r\nconst sections = document.querySelectorAll('section[id]')\r\n\r\nfunction scrollActive(){\r\n    const scrollY = window.pageYOffset\r\n\r\n    sections.forEach(current =>{\r\n        const sectionHeight = current.offsetHeight\r\n        const sectionTop = current.offsetTop - 50;\r\n        sectionId = current.getAttribute('id')\r\n\r\n        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){\r\n            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')\r\n        }else{\r\n            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')\r\n        }\r\n    })\r\n}\r\nwindow.addEventListener('scroll', scrollActive)\r\n\r\n/*==================== CHANGE BACKGROUND HEADER ====================*/ \r\nfunction scrollHeader(){\r\n    const nav = document.getElementById('header')\r\n    // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag\r\n    if(this.scrollY >= 200) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')\r\n}\r\nwindow.addEventListener('scroll', scrollHeader)\r\n\r\n/*==================== SHOW SCROLL TOP ====================*/ \r\nfunction scrollTop(){\r\n    const scrollTop = document.getElementById('scroll-top');\r\n    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class\r\n    if(this.scrollY >= 560) scrollTop.classList.add('show-scroll'); else scrollTop.classList.remove('show-scroll')\r\n}\r\nwindow.addEventListener('scroll', scrollTop)\r\n\r\n/*==================== DARK LIGHT THEME ====================*/ \r\nconst themeButton = document.getElementById('theme-button')\r\nconst darkTheme = 'dark-theme'\r\nconst iconTheme = 'bx-sun'\r\n\r\n// Previously selected topic (if user selected)\r\nconst selectedTheme = localStorage.getItem('selected-theme')\r\nconst selectedIcon = localStorage.getItem('selected-icon')\r\n\r\n// We obtain the current theme that the interface has by validating the dark-theme class\r\nconst getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'\r\nconst getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx-moon' : 'bx-sun'\r\n\r\n// We validate if the user previously chose a topic\r\nif (selectedTheme) {\r\n  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark\r\n  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)\r\n  themeButton.classList[selectedIcon === 'bx-moon' ? 'add' : 'remove'](iconTheme)\r\n}\r\n\r\n// Activate / deactivate the theme manually with the button\r\nthemeButton.addEventListener('click', () => {\r\n    // Add or remove the dark / icon theme\r\n    document.body.classList.toggle(darkTheme)\r\n    themeButton.classList.toggle(iconTheme)\r\n    // We save the theme and the current icon that the user chose\r\n    localStorage.setItem('selected-theme', getCurrentTheme())\r\n    localStorage.setItem('selected-icon', getCurrentIcon())\r\n})\r\n\r\n/*==================== SCROLL REVEAL ANIMATION ====================*/\r\nconst sr = ScrollReveal({\r\n    origin: 'top',\r\n    distance: '30px',\r\n    duration: 2000,\r\n    reset: true\r\n});\r\n\r\nsr.reveal(`.home__data, .home__img,\r\n            .about__data, .about__img,\r\n            .services__content, .menu__content,\r\n            .app__data, .app__img,\r\n            .contact__data, .contact__button,\r\n            .footer__content`, {\r\n    interval: 200\r\n})\n\n//# sourceURL=webpack://restaurantpagetop/./src/js/main.js?");

/***/ }),

/***/ "./src/img/about.jpg":
/*!***************************!*\
  !*** ./src/img/about.jpg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"79b2d73f357887a935ca.jpg\";\n\n//# sourceURL=webpack://restaurantpagetop/./src/img/about.jpg?");

/***/ }),

/***/ "./src/img/app1.png":
/*!**************************!*\
  !*** ./src/img/app1.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"8a408695e3070b3827f6.png\";\n\n//# sourceURL=webpack://restaurantpagetop/./src/img/app1.png?");

/***/ }),

/***/ "./src/img/app2.png":
/*!**************************!*\
  !*** ./src/img/app2.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"5615910a092df375c0c5.png\";\n\n//# sourceURL=webpack://restaurantpagetop/./src/img/app2.png?");

/***/ }),

/***/ "./src/img/dish.svg":
/*!**************************!*\
  !*** ./src/img/dish.svg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"505ba4fdb542c826a580.svg\";\n\n//# sourceURL=webpack://restaurantpagetop/./src/img/dish.svg?");

/***/ }),

/***/ "./src/img/home.png":
/*!**************************!*\
  !*** ./src/img/home.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"1357e4c1a0df4c75b1c1.png\";\n\n//# sourceURL=webpack://restaurantpagetop/./src/img/home.png?");

/***/ }),

/***/ "./src/img/movil-app.png":
/*!*******************************!*\
  !*** ./src/img/movil-app.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"7d08b4045c12b021ce1f.png\";\n\n//# sourceURL=webpack://restaurantpagetop/./src/img/movil-app.png?");

/***/ }),

/***/ "./src/img/pizza.svg":
/*!***************************!*\
  !*** ./src/img/pizza.svg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"4076799e7ffc0154e3a6.svg\";\n\n//# sourceURL=webpack://restaurantpagetop/./src/img/pizza.svg?");

/***/ }),

/***/ "./src/img/plate1.png":
/*!****************************!*\
  !*** ./src/img/plate1.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"4b6a84540fa26fe321b3.png\";\n\n//# sourceURL=webpack://restaurantpagetop/./src/img/plate1.png?");

/***/ }),

/***/ "./src/img/plate2.png":
/*!****************************!*\
  !*** ./src/img/plate2.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"a084b49142695d3d6210.png\";\n\n//# sourceURL=webpack://restaurantpagetop/./src/img/plate2.png?");

/***/ }),

/***/ "./src/img/plate3.png":
/*!****************************!*\
  !*** ./src/img/plate3.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"e6ab6f133dd41ce8eee6.png\";\n\n//# sourceURL=webpack://restaurantpagetop/./src/img/plate3.png?");

/***/ }),

/***/ "./src/img/truck.svg":
/*!***************************!*\
  !*** ./src/img/truck.svg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"e1fe772c6d6ed1b7a474.svg\";\n\n//# sourceURL=webpack://restaurantpagetop/./src/img/truck.svg?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;