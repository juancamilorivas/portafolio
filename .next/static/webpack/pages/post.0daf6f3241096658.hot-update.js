"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/post",{

/***/ "./pages/post.js":
/*!***********************!*\
  !*** ./pages/post.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _profile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../profile */ \"./profile.js\");\nvar _this = undefined;\n\n\n\n\nvar _s = $RefreshSig$();\nvar Post = function() {\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    var currentPost = _profile__WEBPACK_IMPORTED_MODULE_3__.posts.filter(function(post) {\n        return post.title === router.query.title;\n    })[0];\n    console.log(currentPost);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        footer: false,\n        title: currentPost.title,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"text-center\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: \"/\".concat(currentPost.imageUrl),\n                    alt: \"\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\bogot\\\\Desktop\\\\PROYECTOS\\\\next-simple-portafolio\\\\pages\\\\post.js\",\n                    lineNumber: 14,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: currentPost.content\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\bogot\\\\Desktop\\\\PROYECTOS\\\\next-simple-portafolio\\\\pages\\\\post.js\",\n                    lineNumber: 15,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\bogot\\\\Desktop\\\\PROYECTOS\\\\next-simple-portafolio\\\\pages\\\\post.js\",\n            lineNumber: 13,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\bogot\\\\Desktop\\\\PROYECTOS\\\\next-simple-portafolio\\\\pages\\\\post.js\",\n        lineNumber: 12,\n        columnNumber: 5\n    }, _this);\n};\n_s(Post, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Post;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Post);\nvar _c;\n$RefreshReg$(_c, \"Post\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wb3N0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFBMEM7QUFDRjtBQUNMOztBQUVuQyxJQUFNRyxJQUFJLEdBQUcsV0FBTTs7SUFDakIsSUFBTUMsTUFBTSxHQUFHSCxzREFBUyxFQUFFO0lBRTFCLElBQU1JLFdBQVcsR0FBR0gsa0RBQVksQ0FDOUIsU0FBQ0ssSUFBSTtlQUFLQSxJQUFJLENBQUNDLEtBQUssS0FBS0osTUFBTSxDQUFDSyxLQUFLLENBQUNELEtBQUs7S0FBQSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2pERSxPQUFPLENBQUNDLEdBQUcsQ0FBQ04sV0FBVyxDQUFDLENBQUM7SUFDekIscUJBQ0UsOERBQUNMLDBEQUFNO1FBQUNZLE1BQU0sRUFBRSxLQUFLO1FBQUVKLEtBQUssRUFBRUgsV0FBVyxDQUFDRyxLQUFLO2tCQUM3Qyw0RUFBQ0ssS0FBRztZQUFDQyxTQUFTLEVBQUMsYUFBYTs7OEJBQzFCLDhEQUFDQyxLQUFHO29CQUFDQyxHQUFHLEVBQUUsR0FBRSxDQUF1QixPQUFyQlgsV0FBVyxDQUFDWSxRQUFRLENBQUU7b0JBQUVDLEdBQUcsRUFBQyxFQUFFOzs7Ozt5QkFBRzs4QkFDL0MsOERBQUNDLEdBQUM7OEJBQUVkLFdBQVcsQ0FBQ2UsT0FBTzs7Ozs7eUJBQUs7Ozs7OztpQkFDeEI7Ozs7O2FBQ0MsQ0FDVDtDQUNIO0dBZEtqQixJQUFJOztRQUNPRixrREFBUzs7O0FBRHBCRSxLQUFBQSxJQUFJO0FBZ0JWLCtEQUFlQSxJQUFJLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9zdC5qcz8yNTY4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyBwb3N0cyB9IGZyb20gXCIuLi9wcm9maWxlXCI7XHJcblxyXG5jb25zdCBQb3N0ID0gKCkgPT4ge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICBjb25zdCBjdXJyZW50UG9zdCA9IHBvc3RzLmZpbHRlcihcclxuICAgIChwb3N0KSA9PiBwb3N0LnRpdGxlID09PSByb3V0ZXIucXVlcnkudGl0bGUpWzBdO1xyXG4gIGNvbnNvbGUubG9nKGN1cnJlbnRQb3N0KTtcclxuICByZXR1cm4gKFxyXG4gICAgPExheW91dCBmb290ZXI9e2ZhbHNlfSB0aXRsZT17Y3VycmVudFBvc3QudGl0bGV9ID5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgIDxpbWcgc3JjPXtgLyR7Y3VycmVudFBvc3QuaW1hZ2VVcmx9YH0gYWx0PVwiXCIgLz5cclxuICAgICAgICA8cD57Y3VycmVudFBvc3QuY29udGVudH08L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9MYXlvdXQ+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBvc3Q7Il0sIm5hbWVzIjpbIkxheW91dCIsInVzZVJvdXRlciIsInBvc3RzIiwiUG9zdCIsInJvdXRlciIsImN1cnJlbnRQb3N0IiwiZmlsdGVyIiwicG9zdCIsInRpdGxlIiwicXVlcnkiLCJjb25zb2xlIiwibG9nIiwiZm9vdGVyIiwiZGl2IiwiY2xhc3NOYW1lIiwiaW1nIiwic3JjIiwiaW1hZ2VVcmwiLCJhbHQiLCJwIiwiY29udGVudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/post.js\n");

/***/ })

});