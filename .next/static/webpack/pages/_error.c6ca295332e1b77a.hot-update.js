"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_error",{

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Navbar */ \"./components/Navbar.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! nprogress */ \"./node_modules/nprogress/nprogress.js\");\n/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);\nvar _this = undefined;\n\n\n\n\n\n\nvar _s = $RefreshSig$();\n//Here in Layout yu=ou can put anything you want and it will appear in all pages!\nvar Layout = function(param) {\n    var children = param.children, title = param.title, _footer = param.footer, footer = _footer === void 0 ? true : _footer, _dark = param.dark, dark = _dark === void 0 ? false : _dark;\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        var handleRouteChange = function(url) {\n            console.log(url);\n            nprogress__WEBPACK_IMPORTED_MODULE_4___default().start();\n        };\n        router.events.on(\"routeChangeStart\", handleRouteChange);\n        router.events.on(\"routeChangeComplete\", function() {\n            return nprogress__WEBPACK_IMPORTED_MODULE_4___default().done();\n        });\n        return function() {\n            router.events.off(\"routeChangeStart\", handleRouteChange);\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: classnames__WEBPACK_IMPORTED_MODULE_5___default()({\n            \"bg-dark\": dark,\n            \"bg-light\": !dark\n        }),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Navbar__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\bogot\\\\Desktop\\\\PROYECTOS\\\\next-simple-portafolio\\\\components\\\\Layout.js\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"container py-4\",\n                children: [\n                    title && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: classnames__WEBPACK_IMPORTED_MODULE_5___default()(\"text-center\", {\n                            \"text-light\": dark\n                        }),\n                        children: title\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\bogot\\\\Desktop\\\\PROYECTOS\\\\next-simple-portafolio\\\\components\\\\Layout.js\",\n                        lineNumber: 34,\n                        columnNumber: 9\n                    }, _this),\n                    children\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\bogot\\\\Desktop\\\\PROYECTOS\\\\next-simple-portafolio\\\\components\\\\Layout.js\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, _this),\n            footer && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {\n                className: \"bg-dark text-light text-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"container p-4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            children: \"\\xa9 Camilo Rivas\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\bogot\\\\Desktop\\\\PROYECTOS\\\\next-simple-portafolio\\\\components\\\\Layout.js\",\n                            lineNumber: 46,\n                            columnNumber: 13\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: [\n                                \"2000 - \",\n                                new Date().getFullYear()\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\bogot\\\\Desktop\\\\PROYECTOS\\\\next-simple-portafolio\\\\components\\\\Layout.js\",\n                            lineNumber: 47,\n                            columnNumber: 13\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: \"All rights reserved\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\bogot\\\\Desktop\\\\PROYECTOS\\\\next-simple-portafolio\\\\components\\\\Layout.js\",\n                            lineNumber: 48,\n                            columnNumber: 13\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\bogot\\\\Desktop\\\\PROYECTOS\\\\next-simple-portafolio\\\\components\\\\Layout.js\",\n                    lineNumber: 45,\n                    columnNumber: 11\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\bogot\\\\Desktop\\\\PROYECTOS\\\\next-simple-portafolio\\\\components\\\\Layout.js\",\n                lineNumber: 44,\n                columnNumber: 11\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\bogot\\\\Desktop\\\\PROYECTOS\\\\next-simple-portafolio\\\\components\\\\Layout.js\",\n        lineNumber: 29,\n        columnNumber: 5\n    }, _this);\n};\n_s(Layout, \"vQduR7x+OPXj6PSmJyFnf+hU7bg=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = Layout;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Layout);\nvar _c;\n$RefreshReg$(_c, \"Layout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0xheW91dC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTs7QUFBOEI7QUFDSTtBQUNNO0FBQ047QUFDQzs7QUFHbkMsaUZBQWlGO0FBQ2pGLElBQU1LLE1BQU0sR0FBRyxnQkFBa0Q7UUFBL0NDLFFBQVEsU0FBUkEsUUFBUSxFQUFFQyxLQUFLLFNBQUxBLEtBQUssa0JBQUVDLE1BQU0sRUFBTkEsTUFBTSx3QkFBQyxJQUFJLDBCQUFFQyxJQUFJLEVBQUpBLElBQUksc0JBQUMsS0FBSzs7SUFHeEQsSUFBTUMsTUFBTSxHQUFHUixzREFBUyxFQUFFO0lBRTFCRCxnREFBUyxDQUFDLFdBQU07UUFDZCxJQUFNVSxpQkFBaUIsR0FBRyxTQUFDQyxHQUFHLEVBQUs7WUFDakNDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixHQUFHLENBQUMsQ0FBQztZQUNqQlQsc0RBQWUsRUFBRSxDQUFDO1NBQ25CO1FBQ0RPLE1BQU0sQ0FBQ00sTUFBTSxDQUFDQyxFQUFFLENBQUMsa0JBQWtCLEVBQUVOLGlCQUFpQixDQUFDLENBQUM7UUFDeERELE1BQU0sQ0FBQ00sTUFBTSxDQUFDQyxFQUFFLENBQUMscUJBQXFCLEVBQUU7bUJBQU1kLHFEQUFjLEVBQUU7U0FBQSxDQUFDLENBQUM7UUFDaEUsT0FBTyxXQUFNO1lBQ1hPLE1BQU0sQ0FBQ00sTUFBTSxDQUFDRyxHQUFHLENBQUMsa0JBQWtCLEVBQUVSLGlCQUFpQixDQUFDLENBQUM7U0FDMUQsQ0FBQztLQUNILEVBQUUsRUFBRSxDQUFDLENBQUM7SUFJUCxxQkFDRSw4REFBQ1MsS0FBRztRQUFDQyxTQUFTLEVBQUVqQixpREFBVSxDQUFDO1lBQUMsU0FBUyxFQUFFSyxJQUFJO1lBQUUsVUFBVSxFQUFHLENBQUNBLElBQUk7U0FBQyxDQUFDOzswQkFDL0QsOERBQUNULCtDQUFNOzs7O3FCQUFHOzBCQUNWLDhEQUFDc0IsTUFBSTtnQkFBQ0QsU0FBUyxFQUFDLGdCQUFnQjs7b0JBRS9CZCxLQUFLLGtCQUNKLDhEQUFDZ0IsSUFBRTt3QkFBQ0YsU0FBUyxFQUFFakIsaURBQVUsQ0FBQyxhQUFhLEVBQUU7NEJBQUMsWUFBWSxFQUFHSyxJQUFJO3lCQUFDLENBQUM7a0NBQzVERixLQUFLOzs7Ozs2QkFDSDtvQkFHSkQsUUFBUTs7Ozs7O3FCQUNGO1lBR1BFLE1BQU0sa0JBQ0osOERBQUNBLFFBQU07Z0JBQUNhLFNBQVMsRUFBQyxnQ0FBZ0M7MEJBQ2xELDRFQUFDRCxLQUFHO29CQUFDQyxTQUFTLEVBQUMsZUFBZTs7c0NBQzVCLDhEQUFDRSxJQUFFO3NDQUFDLG1CQUFtQjs7Ozs7aUNBQUs7c0NBQzVCLDhEQUFDQyxHQUFDOztnQ0FBQyxTQUFPO2dDQUFDLElBQUlDLElBQUksRUFBRSxDQUFDQyxXQUFXLEVBQUU7Ozs7OztpQ0FBSztzQ0FDeEMsOERBQUNGLEdBQUM7c0NBQUMscUJBQW1COzs7OztpQ0FBSTs7Ozs7O3lCQUN0Qjs7Ozs7cUJBQ0M7Ozs7OzthQUlQLENBQ047Q0FDSDtHQS9DS25CLE1BQU07O1FBR0tILGtEQUFTOzs7QUFIcEJHLEtBQUFBLE1BQU07QUFpRFosK0RBQWVBLE1BQU0sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0xheW91dC5qcz81MTVjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOYXZiYXIgZnJvbSBcIi4vTmF2YmFyXCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IE5Qcm9ncmVzcyBmcm9tIFwibnByb2dyZXNzXCI7XHJcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnXHJcblxyXG5cclxuLy9IZXJlIGluIExheW91dCB5dT1vdSBjYW4gcHV0IGFueXRoaW5nIHlvdSB3YW50IGFuZCBpdCB3aWxsIGFwcGVhciBpbiBhbGwgcGFnZXMhXHJcbmNvbnN0IExheW91dCA9ICh7IGNoaWxkcmVuLCB0aXRsZSwgZm9vdGVyPXRydWUsIGRhcms9ZmFsc2UgfSkgPT4ge1xyXG5cclxuXHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBoYW5kbGVSb3V0ZUNoYW5nZSA9ICh1cmwpID0+IHtcclxuICAgICAgY29uc29sZS5sb2codXJsKTtcclxuICAgICAgTlByb2dyZXNzLnN0YXJ0KCk7XHJcbiAgICB9O1xyXG4gICAgcm91dGVyLmV2ZW50cy5vbihcInJvdXRlQ2hhbmdlU3RhcnRcIiwgaGFuZGxlUm91dGVDaGFuZ2UpO1xyXG4gICAgcm91dGVyLmV2ZW50cy5vbihcInJvdXRlQ2hhbmdlQ29tcGxldGVcIiwgKCkgPT4gTlByb2dyZXNzLmRvbmUoKSk7XHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICByb3V0ZXIuZXZlbnRzLm9mZihcInJvdXRlQ2hhbmdlU3RhcnRcIiwgaGFuZGxlUm91dGVDaGFuZ2UpO1xyXG4gICAgfTtcclxuICB9LCBbXSk7XHJcblxyXG5cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc25hbWVzKHsnYmctZGFyayc6IGRhcmssICdiZy1saWdodCcgOiAhZGFya30pfT5cclxuICAgICAgPE5hdmJhciAvPlxyXG4gICAgICA8bWFpbiBjbGFzc05hbWU9XCJjb250YWluZXIgcHktNFwiPlxyXG5cclxuICAgICAge3RpdGxlICYmIChcclxuICAgICAgICA8aDEgY2xhc3NOYW1lPXtjbGFzc25hbWVzKCd0ZXh0LWNlbnRlcicsIHsndGV4dC1saWdodCcgOiBkYXJrfSl9PlxyXG4gICAgICAgICAge3RpdGxlfVxyXG4gICAgICAgIDwvaDE+XHJcbiAgICAgICl9XHJcblxyXG4gICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICA8L21haW4+XHJcbiAgIFxyXG4gICAgICB7XHJcbiAgICAgICAgZm9vdGVyICYmIChcclxuICAgICAgICAgIDxmb290ZXIgY2xhc3NOYW1lPVwiYmctZGFyayB0ZXh0LWxpZ2h0IHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBwLTRcIj5cclxuICAgICAgICAgICAgPGgxPiZjb3B5OyBDYW1pbG8gUml2YXM8L2gxPlxyXG4gICAgICAgICAgICA8cD4yMDAwIC0ge25ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKX08L3A+XHJcbiAgICAgICAgICAgIDxwPkFsbCByaWdodHMgcmVzZXJ2ZWQ8L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Zvb3Rlcj5cclxuICAgICAgICApXHJcbiAgICAgIH1cclxuXHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0O1xyXG4iXSwibmFtZXMiOlsiTmF2YmFyIiwidXNlRWZmZWN0IiwidXNlUm91dGVyIiwiTlByb2dyZXNzIiwiY2xhc3NuYW1lcyIsIkxheW91dCIsImNoaWxkcmVuIiwidGl0bGUiLCJmb290ZXIiLCJkYXJrIiwicm91dGVyIiwiaGFuZGxlUm91dGVDaGFuZ2UiLCJ1cmwiLCJjb25zb2xlIiwibG9nIiwic3RhcnQiLCJldmVudHMiLCJvbiIsImRvbmUiLCJvZmYiLCJkaXYiLCJjbGFzc05hbWUiLCJtYWluIiwiaDEiLCJwIiwiRGF0ZSIsImdldEZ1bGxZZWFyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Layout.js\n");

/***/ })

});