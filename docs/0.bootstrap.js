(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var erg_playground__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! erg-playground */ \"./pkg/erg_playground.js\");\n\r\n\r\nvar playground = erg_playground__WEBPACK_IMPORTED_MODULE_0__[\"Playground\"].new();\r\n\r\nconst ascii_art = `\r\n\r\n█▀▀ █▀█ █▀▀   █▀█ █   ▄▀█ █▄█ █▀▀ █▀█ █▀█ █ █ █▄ █ █▀▄\r\n██▄ █▀▄ █▄█   █▀▀ █▄▄ █▀█  █  █▄█ █▀▄ █▄█ █▄█ █ ▀█ █▄▀\r\n\r\n`;\r\nconst settings = {\r\n    prompt: \">>> \",\r\n    greetings: ascii_art + playground.start_message() + \"\\n\",\r\n};\r\nconst action = function(command, term) {\r\n    let result = playground.eval(command);\r\n    if (result.startsWith(\"<<ErgPlayGroundError>>\")) {\r\n        result = result.replace(\"<<ErgPlayGroundError>>\", \"\");\r\n        // TODO: multiline error messages\r\n        result = result.replace(\"1 | \", `1 | ${command}`);\r\n        term.echo(result);\r\n    } else {\r\n        term.echo(result);\r\n    }\r\n};\r\n$('body').terminal(action, settings);\r\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function(originalModule) {\n\tif (!originalModule.webpackPolyfill) {\n\t\tvar module = Object.create(originalModule);\n\t\t// module.parent = undefined by default\n\t\tif (!module.children) module.children = [];\n\t\tObject.defineProperty(module, \"loaded\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.l;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"id\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.i;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"exports\", {\n\t\t\tenumerable: true\n\t\t});\n\t\tmodule.webpackPolyfill = 1;\n\t}\n\treturn module;\n};\n\n\n//# sourceURL=webpack:///(webpack)/buildin/harmony-module.js?");

/***/ }),

/***/ "./pkg/erg_playground.js":
/*!*******************************!*\
  !*** ./pkg/erg_playground.js ***!
  \*******************************/
/*! exports provided: Playground, __wbindgen_throw */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _erg_playground_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./erg_playground_bg.wasm */ \"./pkg/erg_playground_bg.wasm\");\n/* harmony import */ var _erg_playground_bg_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./erg_playground_bg.js */ \"./pkg/erg_playground_bg.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Playground\", function() { return _erg_playground_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"Playground\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_throw\", function() { return _erg_playground_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbindgen_throw\"]; });\n\n\n\n\n//# sourceURL=webpack:///./pkg/erg_playground.js?");

/***/ }),

/***/ "./pkg/erg_playground_bg.js":
/*!**********************************!*\
  !*** ./pkg/erg_playground_bg.js ***!
  \**********************************/
/*! exports provided: Playground, __wbindgen_throw */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Playground\", function() { return Playground; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_throw\", function() { return __wbindgen_throw; });\n/* harmony import */ var _erg_playground_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./erg_playground_bg.wasm */ \"./pkg/erg_playground_bg.wasm\");\n\n\nconst lTextDecoder = typeof TextDecoder === 'undefined' ? (0, module.require)('util').TextDecoder : TextDecoder;\n\nlet cachedTextDecoder = new lTextDecoder('utf-8', { ignoreBOM: true, fatal: true });\n\ncachedTextDecoder.decode();\n\nlet cachedUint8Memory0 = new Uint8Array();\n\nfunction getUint8Memory0() {\n    if (cachedUint8Memory0.byteLength === 0) {\n        cachedUint8Memory0 = new Uint8Array(_erg_playground_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer);\n    }\n    return cachedUint8Memory0;\n}\n\nfunction getStringFromWasm0(ptr, len) {\n    return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));\n}\n\nlet cachedInt32Memory0 = new Int32Array();\n\nfunction getInt32Memory0() {\n    if (cachedInt32Memory0.byteLength === 0) {\n        cachedInt32Memory0 = new Int32Array(_erg_playground_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer);\n    }\n    return cachedInt32Memory0;\n}\n\nlet WASM_VECTOR_LEN = 0;\n\nconst lTextEncoder = typeof TextEncoder === 'undefined' ? (0, module.require)('util').TextEncoder : TextEncoder;\n\nlet cachedTextEncoder = new lTextEncoder('utf-8');\n\nconst encodeString = (typeof cachedTextEncoder.encodeInto === 'function'\n    ? function (arg, view) {\n    return cachedTextEncoder.encodeInto(arg, view);\n}\n    : function (arg, view) {\n    const buf = cachedTextEncoder.encode(arg);\n    view.set(buf);\n    return {\n        read: arg.length,\n        written: buf.length\n    };\n});\n\nfunction passStringToWasm0(arg, malloc, realloc) {\n\n    if (realloc === undefined) {\n        const buf = cachedTextEncoder.encode(arg);\n        const ptr = malloc(buf.length);\n        getUint8Memory0().subarray(ptr, ptr + buf.length).set(buf);\n        WASM_VECTOR_LEN = buf.length;\n        return ptr;\n    }\n\n    let len = arg.length;\n    let ptr = malloc(len);\n\n    const mem = getUint8Memory0();\n\n    let offset = 0;\n\n    for (; offset < len; offset++) {\n        const code = arg.charCodeAt(offset);\n        if (code > 0x7F) break;\n        mem[ptr + offset] = code;\n    }\n\n    if (offset !== len) {\n        if (offset !== 0) {\n            arg = arg.slice(offset);\n        }\n        ptr = realloc(ptr, len, len = offset + arg.length * 3);\n        const view = getUint8Memory0().subarray(ptr + offset, ptr + len);\n        const ret = encodeString(arg, view);\n\n        offset += ret.written;\n    }\n\n    WASM_VECTOR_LEN = offset;\n    return ptr;\n}\n/**\n*/\nclass Playground {\n\n    static __wrap(ptr) {\n        const obj = Object.create(Playground.prototype);\n        obj.ptr = ptr;\n\n        return obj;\n    }\n\n    __destroy_into_raw() {\n        const ptr = this.ptr;\n        this.ptr = 0;\n\n        return ptr;\n    }\n\n    free() {\n        const ptr = this.__destroy_into_raw();\n        _erg_playground_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbg_playground_free\"](ptr);\n    }\n    /**\n    * @returns {Playground}\n    */\n    static new() {\n        const ret = _erg_playground_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"playground_new\"]();\n        return Playground.__wrap(ret);\n    }\n    /**\n    * @returns {string}\n    */\n    start_message() {\n        try {\n            const retptr = _erg_playground_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_add_to_stack_pointer\"](-16);\n            _erg_playground_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"playground_start_message\"](retptr, this.ptr);\n            var r0 = getInt32Memory0()[retptr / 4 + 0];\n            var r1 = getInt32Memory0()[retptr / 4 + 1];\n            return getStringFromWasm0(r0, r1);\n        } finally {\n            _erg_playground_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_add_to_stack_pointer\"](16);\n            _erg_playground_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_free\"](r0, r1);\n        }\n    }\n    /**\n    * @param {string} input\n    * @returns {string}\n    */\n    eval(input) {\n        try {\n            const retptr = _erg_playground_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_add_to_stack_pointer\"](-16);\n            const ptr0 = passStringToWasm0(input, _erg_playground_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_malloc\"], _erg_playground_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_realloc\"]);\n            const len0 = WASM_VECTOR_LEN;\n            _erg_playground_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"playground_eval\"](retptr, this.ptr, ptr0, len0);\n            var r0 = getInt32Memory0()[retptr / 4 + 0];\n            var r1 = getInt32Memory0()[retptr / 4 + 1];\n            return getStringFromWasm0(r0, r1);\n        } finally {\n            _erg_playground_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_add_to_stack_pointer\"](16);\n            _erg_playground_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_free\"](r0, r1);\n        }\n    }\n}\n\nfunction __wbindgen_throw(arg0, arg1) {\n    throw new Error(getStringFromWasm0(arg0, arg1));\n};\n\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./pkg/erg_playground_bg.js?");

/***/ }),

/***/ "./pkg/erg_playground_bg.wasm":
/*!************************************!*\
  !*** ./pkg/erg_playground_bg.wasm ***!
  \************************************/
/*! exports provided: memory, __wbg_playground_free, playground_new, playground_start_message, playground_eval, __wbindgen_add_to_stack_pointer, __wbindgen_free, __wbindgen_malloc, __wbindgen_realloc */
/***/ (function(module, exports, __webpack_require__) {

eval("\"use strict\";\n// Instantiate WebAssembly module\nvar wasmExports = __webpack_require__.w[module.i];\n__webpack_require__.r(exports);\n// export exports from WebAssembly module\nfor(var name in wasmExports) if(name != \"__webpack_init__\") exports[name] = wasmExports[name];\n// exec imports from WebAssembly module (for esm order)\n/* harmony import */ var m0 = __webpack_require__(/*! ./erg_playground_bg.js */ \"./pkg/erg_playground_bg.js\");\n\n\n// exec wasm module\nwasmExports[\"__webpack_init__\"]()\n\n//# sourceURL=webpack:///./pkg/erg_playground_bg.wasm?");

/***/ })

}]);