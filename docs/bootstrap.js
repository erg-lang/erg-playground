/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 	};
/******/
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "" + chunkId + ".bootstrap.js"
/******/ 	}
/******/
/******/ 	// object to store loaded and loading wasm modules
/******/ 	var installedWasmModules = {};
/******/
/******/ 	function promiseResolve() { return Promise.resolve(); }
/******/
/******/ 	var wasmImportObjects = {
/******/ 		"./pkg/erg_playground_bg.wasm": function() {
/******/ 			return {
/******/ 				"./erg_playground_bg.js": {
/******/ 					"__wbindgen_object_drop_ref": function(p0i32) {
/******/ 						return installedModules["./pkg/erg_playground_bg.js"].exports["__wbindgen_object_drop_ref"](p0i32);
/******/ 					},
/******/ 					"__wbindgen_string_get": function(p0i32,p1i32) {
/******/ 						return installedModules["./pkg/erg_playground_bg.js"].exports["__wbindgen_string_get"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbindgen_string_new": function(p0i32,p1i32) {
/******/ 						return installedModules["./pkg/erg_playground_bg.js"].exports["__wbindgen_string_new"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbindgen_is_function": function(p0i32) {
/******/ 						return installedModules["./pkg/erg_playground_bg.js"].exports["__wbindgen_is_function"](p0i32);
/******/ 					},
/******/ 					"__wbindgen_is_null": function(p0i32) {
/******/ 						return installedModules["./pkg/erg_playground_bg.js"].exports["__wbindgen_is_null"](p0i32);
/******/ 					},
/******/ 					"__wbindgen_is_undefined": function(p0i32) {
/******/ 						return installedModules["./pkg/erg_playground_bg.js"].exports["__wbindgen_is_undefined"](p0i32);
/******/ 					},
/******/ 					"__wbindgen_object_clone_ref": function(p0i32) {
/******/ 						return installedModules["./pkg/erg_playground_bg.js"].exports["__wbindgen_object_clone_ref"](p0i32);
/******/ 					},
/******/ 					"__wbg_new_d654feed2d1504b2": function(p0i32) {
/******/ 						return installedModules["./pkg/erg_playground_bg.js"].exports["__wbg_new_d654feed2d1504b2"](p0i32);
/******/ 					},
/******/ 					"__wbindgen_is_object": function(p0i32) {
/******/ 						return installedModules["./pkg/erg_playground_bg.js"].exports["__wbindgen_is_object"](p0i32);
/******/ 					},
/******/ 					"__wbindgen_number_new": function(p0f64) {
/******/ 						return installedModules["./pkg/erg_playground_bg.js"].exports["__wbindgen_number_new"](p0f64);
/******/ 					},
/******/ 					"__wbg_virtualmachine_new": function(p0i32) {
/******/ 						return installedModules["./pkg/erg_playground_bg.js"].exports["__wbg_virtualmachine_new"](p0i32);
/******/ 					},
/******/ 					"__wbindgen_boolean_get": function(p0i32) {
/******/ 						return installedModules["./pkg/erg_playground_bg.js"].exports["__wbindgen_boolean_get"](p0i32);
/******/ 					},
/******/ 					"__wbindgen_number_get": function(p0i32,p1i32) {
/******/ 						return installedModules["./pkg/erg_playground_bg.js"].exports["__wbindgen_number_get"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_getprop_544cefa215081f6c": function(p0i32,p1i32) {
/******/ 						return installedModules["./pkg/erg_playground_bg.js"].exports["__wbg_getprop_544cefa215081f6c"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_setprop_c8ba2738082d9b9d": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["./pkg/erg_playground_bg.js"].exports["__wbg_setprop_c8ba2738082d9b9d"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_callfunc_6b40b1212dd63e10": function(p0i32,p1i32) {
/******/ 						return installedModules["./pkg/erg_playground_bg.js"].exports["__wbg_callfunc_6b40b1212dd63e10"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_callmethod_ac8abc8f2286cbc4": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["./pkg/erg_playground_bg.js"].exports["__wbg_callmethod_ac8abc8f2286cbc4"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_typeof_3b83038a60adb072": function(p0i32,p1i32) {
/******/ 						return installedModules["./pkg/erg_playground_bg.js"].exports["__wbg_typeof_3b83038a60adb072"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_instanceof_de4b433ef77cfba7": function(p0i32,p1i32) {
/******/ 						return installedModules["./pkg/erg_playground_bg.js"].exports["__wbg_instanceof_de4b433ef77cfba7"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_wrapclosure_6a44d586ff74b48e": function(p0i32) {
/******/ 						return installedModules["./pkg/erg_playground_bg.js"].exports["__wbg_wrapclosure_6a44d586ff74b48e"](p0i32);
/******/ 					},
/******/ 					"__wbg_hasprop_ce3a9b70cd62fca2": function(p0i32,p1i32) {
/******/ 						return installedModules["./pkg/erg_playground_bg.js"].exports["__wbg_hasprop_ce3a9b70cd62fca2"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbindgen_cb_drop": function(p0i32) {
/******/ 						return installedModules["./pkg/erg_playground_bg.js"].exports["__wbindgen_cb_drop"](p0i32);
/******/ 					},
/******/ 					"__wbg_new_abda76e883ba8a5f": function() {
/******/ 						return installedModules["./pkg/erg_playground_bg.js"].exports["__wbg_new_abda76e883ba8a5f"]();
/******/ 					},
/******/ 					"__wbg_stack_658279fe44541cf6": function(p0i32,p1i32) {
/******/ 						return installedModules["./pkg/erg_playground_bg.js"].exports["__wbg_stack_658279fe44541cf6"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_error_f851667af71bcfc6": function(p0i32,p1i32) {
/******/ 						return installedModules["./pkg/erg_playground_bg.js"].exports["__wbg_error_f851667af71bcfc6"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_set_ce5827ace4c694dc": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["./pkg/erg_playground_bg.js"].exports["__wbg_set_ce5827ace4c694dc"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_instanceof_Window_9029196b662bc42a": function(p0i32) {
/******/ 						return installedModules["./pkg/erg_playground_bg.js"].exports["__wbg_instanceof_Window_9029196b662bc42a"](p0i32);
/******/ 					},
/******/ 					"__wbg_document_f7ace2b956f30a4f": function(p0i32) {
/******/ 						return installedModules["./pkg/erg_playground_bg.js"].exports["__wbg_document_f7ace2b956f30a4f"](p0i32);
/******/ 					},
/******/ 					"__wbg_cancelAnimationFrame_9b68e9588c6543bc": function(p0i32,p1i32) {
/******/ 						return installedModules["./pkg/erg_playground_bg.js"].exports["__wbg_cancelAnimationFrame_9b68e9588c6543bc"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_requestAnimationFrame_d082200514b6674d": function(p0i32,p1i32) {
/******/ 						return installedModules["./pkg/erg_playground_bg.js"].exports["__wbg_requestAnimationFrame_d082200514b6674d"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_fetch_336b6f0cb426b46e": function(p0i32,p1i32) {
/******/ 						return installedModules["./pkg/erg_playground_bg.js"].exports["__wbg_fetch_336b6f0cb426b46e"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_querySelector_52ded52c20e23921": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["./pkg/erg_playground_bg.js"].exports["__wbg_querySelector_52ded52c20e23921"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_getAttribute_3d8fcc9eaea35a17": function(p0i32,p1i32,p2i32,p3i32) {
/******/ 						return installedModules["./pkg/erg_playground_bg.js"].exports["__wbg_getAttribute_3d8fcc9eaea35a17"](p0i32,p1i32,p2i32,p3i32);
/******/ 					},
/******/ 					"__wbg_setAttribute_e7e80b478b7b8b2f": function(p0i32,p1i32,p2i32,p3i32,p4i32) {
/******/ 						return installedModules["./pkg/erg_playground_bg.js"].exports["__wbg_setAttribute_e7e80b478b7b8b2f"](p0i32,p1i32,p2i32,p3i32,p4i32);
/******/ 					},
/******/ 					"__wbg_set_b34caba58723c454": function(p0i32,p1i32,p2i32,p3i32,p4i32) {
/******/ 						return installedModules["./pkg/erg_playground_bg.js"].exports["__wbg_set_b34caba58723c454"](p0i32,p1i32,p2i32,p3i32,p4i32);
/******/ 					},
/******/ 					"__wbg_headers_b439dcff02e808e5": function(p0i32) {
/******/ 						return installedModules["./pkg/erg_playground_bg.js"].exports["__wbg_headers_b439dcff02e808e5"](p0i32);
/******/ 					},
/******/ 					"__wbg_newwithstrandinit_cad5cd6038c7ff5d": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["./pkg/erg_playground_bg.js"].exports["__wbg_newwithstrandinit_cad5cd6038c7ff5d"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_instanceof_Response_fc4327dbfcdf5ced": function(p0i32) {
/******/ 						return installedModules["./pkg/erg_playground_bg.js"].exports["__wbg_instanceof_Response_fc4327dbfcdf5ced"](p0i32);
/******/ 					},
/******/ 					"__wbg_arrayBuffer_288fb3538806e85c": function(p0i32) {
/******/ 						return installedModules["./pkg/erg_playground_bg.js"].exports["__wbg_arrayBuffer_288fb3538806e85c"](p0i32);
/******/ 					},
/******/ 					"__wbg_json_2a46ed5b7c4d30d1": function(p0i32) {
/******/ 						return installedModules["./pkg/erg_playground_bg.js"].exports["__wbg_json_2a46ed5b7c4d30d1"](p0i32);
/******/ 					},
/******/ 					"__wbg_text_a667ac1770538491": function(p0i32) {
/******/ 						return installedModules["./pkg/erg_playground_bg.js"].exports["__wbg_text_a667ac1770538491"](p0i32);
/******/ 					},
/******/ 					"__wbg_log_1d3ae0273d8f4f8a": function(p0i32) {
/******/ 						return installedModules["./pkg/erg_playground_bg.js"].exports["__wbg_log_1d3ae0273d8f4f8a"](p0i32);
/******/ 					},
/******/ 					"__wbg_error_0aab98f54e503328": function(p0i32,p1i32) {
/******/ 						return installedModules["./pkg/erg_playground_bg.js"].exports["__wbg_error_0aab98f54e503328"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_now_ffd4e6de7ef211a5": function() {
/******/ 						return installedModules["./pkg/erg_playground_bg.js"].exports["__wbg_now_ffd4e6de7ef211a5"]();
/******/ 					},
/******/ 					"__wbg_crypto_d05b68a3572bb8ca": function(p0i32) {
/******/ 						return installedModules["./pkg/erg_playground_bg.js"].exports["__wbg_crypto_d05b68a3572bb8ca"](p0i32);
/******/ 					},
/******/ 					"__wbg_process_b02b3570280d0366": function(p0i32) {
/******/ 						return installedModules["./pkg/erg_playground_bg.js"].exports["__wbg_process_b02b3570280d0366"](p0i32);
/******/ 					},
/******/ 					"__wbg_versions_c1cb42213cedf0f5": function(p0i32) {
/******/ 						return installedModules["./pkg/erg_playground_bg.js"].exports["__wbg_versions_c1cb42213cedf0f5"](p0i32);
/******/ 					},
/******/ 					"__wbg_node_43b1089f407e4ec2": function(p0i32) {
/******/ 						return installedModules["./pkg/erg_playground_bg.js"].exports["__wbg_node_43b1089f407e4ec2"](p0i32);
/******/ 					},
/******/ 					"__wbindgen_is_string": function(p0i32) {
/******/ 						return installedModules["./pkg/erg_playground_bg.js"].exports["__wbindgen_is_string"](p0i32);
/******/ 					},
/******/ 					"__wbg_require_9a7e0f667ead4995": function() {
/******/ 						return installedModules["./pkg/erg_playground_bg.js"].exports["__wbg_require_9a7e0f667ead4995"]();
/******/ 					},
/******/ 					"__wbg_msCrypto_10fc94afee92bd76": function(p0i32) {
/******/ 						return installedModules["./pkg/erg_playground_bg.js"].exports["__wbg_msCrypto_10fc94afee92bd76"](p0i32);
/******/ 					},
/******/ 					"__wbg_randomFillSync_b70ccbdf4926a99d": function(p0i32,p1i32) {
/******/ 						return installedModules["./pkg/erg_playground_bg.js"].exports["__wbg_randomFillSync_b70ccbdf4926a99d"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_getRandomValues_7e42b4fb8779dc6d": function(p0i32,p1i32) {
/******/ 						return installedModules["./pkg/erg_playground_bg.js"].exports["__wbg_getRandomValues_7e42b4fb8779dc6d"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_get_44be0491f933a435": function(p0i32,p1i32) {
/******/ 						return installedModules["./pkg/erg_playground_bg.js"].exports["__wbg_get_44be0491f933a435"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_new_898a68150f225f2e": function() {
/******/ 						return installedModules["./pkg/erg_playground_bg.js"].exports["__wbg_new_898a68150f225f2e"]();
/******/ 					},
/******/ 					"__wbg_newnoargs_581967eacc0e2604": function(p0i32,p1i32) {
/******/ 						return installedModules["./pkg/erg_playground_bg.js"].exports["__wbg_newnoargs_581967eacc0e2604"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_new_56693dbed0c32988": function() {
/******/ 						return installedModules["./pkg/erg_playground_bg.js"].exports["__wbg_new_56693dbed0c32988"]();
/******/ 					},
/******/ 					"__wbg_next_526fc47e980da008": function(p0i32) {
/******/ 						return installedModules["./pkg/erg_playground_bg.js"].exports["__wbg_next_526fc47e980da008"](p0i32);
/******/ 					},
/******/ 					"__wbg_next_ddb3312ca1c4e32a": function(p0i32) {
/******/ 						return installedModules["./pkg/erg_playground_bg.js"].exports["__wbg_next_ddb3312ca1c4e32a"](p0i32);
/******/ 					},
/******/ 					"__wbg_done_5c1f01fb660d73b5": function(p0i32) {
/******/ 						return installedModules["./pkg/erg_playground_bg.js"].exports["__wbg_done_5c1f01fb660d73b5"](p0i32);
/******/ 					},
/******/ 					"__wbg_value_1695675138684bd5": function(p0i32) {
/******/ 						return installedModules["./pkg/erg_playground_bg.js"].exports["__wbg_value_1695675138684bd5"](p0i32);
/******/ 					},
/******/ 					"__wbg_iterator_97f0c81209c6c35a": function() {
/******/ 						return installedModules["./pkg/erg_playground_bg.js"].exports["__wbg_iterator_97f0c81209c6c35a"]();
/******/ 					},
/******/ 					"__wbg_get_97b561fb56f034b5": function(p0i32,p1i32) {
/******/ 						return installedModules["./pkg/erg_playground_bg.js"].exports["__wbg_get_97b561fb56f034b5"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_call_cb65541d95d71282": function(p0i32,p1i32) {
/******/ 						return installedModules["./pkg/erg_playground_bg.js"].exports["__wbg_call_cb65541d95d71282"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_new_b51585de1b234aff": function() {
/******/ 						return installedModules["./pkg/erg_playground_bg.js"].exports["__wbg_new_b51585de1b234aff"]();
/******/ 					},
/******/ 					"__wbg_self_1ff1d729e9aae938": function() {
/******/ 						return installedModules["./pkg/erg_playground_bg.js"].exports["__wbg_self_1ff1d729e9aae938"]();
/******/ 					},
/******/ 					"__wbg_window_5f4faef6c12b79ec": function() {
/******/ 						return installedModules["./pkg/erg_playground_bg.js"].exports["__wbg_window_5f4faef6c12b79ec"]();
/******/ 					},
/******/ 					"__wbg_globalThis_1d39714405582d3c": function() {
/******/ 						return installedModules["./pkg/erg_playground_bg.js"].exports["__wbg_globalThis_1d39714405582d3c"]();
/******/ 					},
/******/ 					"__wbg_global_651f05c6a0944d1c": function() {
/******/ 						return installedModules["./pkg/erg_playground_bg.js"].exports["__wbg_global_651f05c6a0944d1c"]();
/******/ 					},
/******/ 					"__wbg_isArray_4c24b343cb13cfb1": function(p0i32) {
/******/ 						return installedModules["./pkg/erg_playground_bg.js"].exports["__wbg_isArray_4c24b343cb13cfb1"](p0i32);
/******/ 					},
/******/ 					"__wbg_push_ca1c26067ef907ac": function(p0i32,p1i32) {
/******/ 						return installedModules["./pkg/erg_playground_bg.js"].exports["__wbg_push_ca1c26067ef907ac"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_instanceof_ArrayBuffer_39ac22089b74fddb": function(p0i32) {
/******/ 						return installedModules["./pkg/erg_playground_bg.js"].exports["__wbg_instanceof_ArrayBuffer_39ac22089b74fddb"](p0i32);
/******/ 					},
/******/ 					"__wbg_isView_891ccb33f8b4c8a9": function(p0i32) {
/******/ 						return installedModules["./pkg/erg_playground_bg.js"].exports["__wbg_isView_891ccb33f8b4c8a9"](p0i32);
/******/ 					},
/******/ 					"__wbg_values_e80af618f92c8649": function(p0i32) {
/******/ 						return installedModules["./pkg/erg_playground_bg.js"].exports["__wbg_values_e80af618f92c8649"](p0i32);
/******/ 					},
/******/ 					"__wbg_instanceof_Error_ab19e20608ea43c7": function(p0i32) {
/******/ 						return installedModules["./pkg/erg_playground_bg.js"].exports["__wbg_instanceof_Error_ab19e20608ea43c7"](p0i32);
/******/ 					},
/******/ 					"__wbg_new_d258248ed531ff54": function(p0i32,p1i32) {
/******/ 						return installedModules["./pkg/erg_playground_bg.js"].exports["__wbg_new_d258248ed531ff54"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_message_48bacc5ea57d74ee": function(p0i32) {
/******/ 						return installedModules["./pkg/erg_playground_bg.js"].exports["__wbg_message_48bacc5ea57d74ee"](p0i32);
/******/ 					},
/******/ 					"__wbg_name_8f734cbbd6194153": function(p0i32) {
/******/ 						return installedModules["./pkg/erg_playground_bg.js"].exports["__wbg_name_8f734cbbd6194153"](p0i32);
/******/ 					},
/******/ 					"__wbg_toString_1c056108b87ba68b": function(p0i32) {
/******/ 						return installedModules["./pkg/erg_playground_bg.js"].exports["__wbg_toString_1c056108b87ba68b"](p0i32);
/******/ 					},
/******/ 					"__wbg_apply_64be369596a02ae0": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["./pkg/erg_playground_bg.js"].exports["__wbg_apply_64be369596a02ae0"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_call_01734de55d61e11d": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["./pkg/erg_playground_bg.js"].exports["__wbg_call_01734de55d61e11d"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_name_3edccb3acbc53657": function(p0i32) {
/******/ 						return installedModules["./pkg/erg_playground_bg.js"].exports["__wbg_name_3edccb3acbc53657"](p0i32);
/******/ 					},
/******/ 					"__wbg_set_bedc3d02d0f05eb0": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["./pkg/erg_playground_bg.js"].exports["__wbg_set_bedc3d02d0f05eb0"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_isSafeInteger_bb8e18dd21c97288": function(p0i32) {
/******/ 						return installedModules["./pkg/erg_playground_bg.js"].exports["__wbg_isSafeInteger_bb8e18dd21c97288"](p0i32);
/******/ 					},
/******/ 					"__wbg_getTime_5e2054f832d82ec9": function(p0i32) {
/******/ 						return installedModules["./pkg/erg_playground_bg.js"].exports["__wbg_getTime_5e2054f832d82ec9"](p0i32);
/******/ 					},
/******/ 					"__wbg_getTimezoneOffset_8aee3445f323973e": function(p0i32) {
/******/ 						return installedModules["./pkg/erg_playground_bg.js"].exports["__wbg_getTimezoneOffset_8aee3445f323973e"](p0i32);
/******/ 					},
/******/ 					"__wbg_new_cd59bfc8881f487b": function(p0i32) {
/******/ 						return installedModules["./pkg/erg_playground_bg.js"].exports["__wbg_new_cd59bfc8881f487b"](p0i32);
/******/ 					},
/******/ 					"__wbg_new0_c0be7df4b6bd481f": function() {
/******/ 						return installedModules["./pkg/erg_playground_bg.js"].exports["__wbg_new0_c0be7df4b6bd481f"]();
/******/ 					},
/******/ 					"__wbg_instanceof_Object_3daa8298c86298be": function(p0i32) {
/******/ 						return installedModules["./pkg/erg_playground_bg.js"].exports["__wbg_instanceof_Object_3daa8298c86298be"](p0i32);
/******/ 					},
/******/ 					"__wbg_create_07910c399d218ffe": function(p0i32) {
/******/ 						return installedModules["./pkg/erg_playground_bg.js"].exports["__wbg_create_07910c399d218ffe"](p0i32);
/******/ 					},
/******/ 					"__wbg_entries_e51f29c7bba0c054": function(p0i32) {
/******/ 						return installedModules["./pkg/erg_playground_bg.js"].exports["__wbg_entries_e51f29c7bba0c054"](p0i32);
/******/ 					},
/******/ 					"__wbg_toString_a8e343996af880e9": function(p0i32) {
/******/ 						return installedModules["./pkg/erg_playground_bg.js"].exports["__wbg_toString_a8e343996af880e9"](p0i32);
/******/ 					},
/******/ 					"__wbg_new_bbb185c794e2fad0": function(p0i32,p1i32) {
/******/ 						return installedModules["./pkg/erg_playground_bg.js"].exports["__wbg_new_bbb185c794e2fad0"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_new_0d7da8e129c00c84": function(p0i32,p1i32) {
/******/ 						return installedModules["./pkg/erg_playground_bg.js"].exports["__wbg_new_0d7da8e129c00c84"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_instanceof_Promise_0e98a5bf082e090f": function(p0i32) {
/******/ 						return installedModules["./pkg/erg_playground_bg.js"].exports["__wbg_instanceof_Promise_0e98a5bf082e090f"](p0i32);
/******/ 					},
/******/ 					"__wbg_new_43f1b47c28813cbd": function(p0i32,p1i32) {
/******/ 						return installedModules["./pkg/erg_playground_bg.js"].exports["__wbg_new_43f1b47c28813cbd"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_reject_7bd6ac9617013c02": function(p0i32) {
/******/ 						return installedModules["./pkg/erg_playground_bg.js"].exports["__wbg_reject_7bd6ac9617013c02"](p0i32);
/******/ 					},
/******/ 					"__wbg_resolve_53698b95aaf7fcf8": function(p0i32) {
/******/ 						return installedModules["./pkg/erg_playground_bg.js"].exports["__wbg_resolve_53698b95aaf7fcf8"](p0i32);
/******/ 					},
/******/ 					"__wbg_then_f7e06ee3c11698eb": function(p0i32,p1i32) {
/******/ 						return installedModules["./pkg/erg_playground_bg.js"].exports["__wbg_then_f7e06ee3c11698eb"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_then_b2267541e2a73865": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["./pkg/erg_playground_bg.js"].exports["__wbg_then_b2267541e2a73865"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_buffer_085ec1f694018c4f": function(p0i32) {
/******/ 						return installedModules["./pkg/erg_playground_bg.js"].exports["__wbg_buffer_085ec1f694018c4f"](p0i32);
/******/ 					},
/******/ 					"__wbg_newwithbyteoffsetandlength_6da8e527659b86aa": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["./pkg/erg_playground_bg.js"].exports["__wbg_newwithbyteoffsetandlength_6da8e527659b86aa"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_new_8125e318e6245eed": function(p0i32) {
/******/ 						return installedModules["./pkg/erg_playground_bg.js"].exports["__wbg_new_8125e318e6245eed"](p0i32);
/******/ 					},
/******/ 					"__wbg_set_5cf90238115182c3": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["./pkg/erg_playground_bg.js"].exports["__wbg_set_5cf90238115182c3"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_length_72e2208bbc0efc61": function(p0i32) {
/******/ 						return installedModules["./pkg/erg_playground_bg.js"].exports["__wbg_length_72e2208bbc0efc61"](p0i32);
/******/ 					},
/******/ 					"__wbg_instanceof_Uint8Array_d8d9cb2b8e8ac1d4": function(p0i32) {
/******/ 						return installedModules["./pkg/erg_playground_bg.js"].exports["__wbg_instanceof_Uint8Array_d8d9cb2b8e8ac1d4"](p0i32);
/******/ 					},
/******/ 					"__wbg_newwithlength_e5d69174d6984cd7": function(p0i32) {
/******/ 						return installedModules["./pkg/erg_playground_bg.js"].exports["__wbg_newwithlength_e5d69174d6984cd7"](p0i32);
/******/ 					},
/******/ 					"__wbg_buffer_f5b7059c439f330d": function(p0i32) {
/******/ 						return installedModules["./pkg/erg_playground_bg.js"].exports["__wbg_buffer_f5b7059c439f330d"](p0i32);
/******/ 					},
/******/ 					"__wbg_subarray_13db269f57aa838d": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["./pkg/erg_playground_bg.js"].exports["__wbg_subarray_13db269f57aa838d"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_slice_e7519a79cfa8a77c": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["./pkg/erg_playground_bg.js"].exports["__wbg_slice_e7519a79cfa8a77c"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_new_6e7d850953772e0f": function(p0i32,p1i32) {
/******/ 						return installedModules["./pkg/erg_playground_bg.js"].exports["__wbg_new_6e7d850953772e0f"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_apply_f9ecfcbfefaf7349": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["./pkg/erg_playground_bg.js"].exports["__wbg_apply_f9ecfcbfefaf7349"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_construct_f063acaddf62015a": function(p0i32,p1i32) {
/******/ 						return installedModules["./pkg/erg_playground_bg.js"].exports["__wbg_construct_f063acaddf62015a"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_construct_73e552b18c90b7cd": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["./pkg/erg_playground_bg.js"].exports["__wbg_construct_73e552b18c90b7cd"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_has_c5fcd020291e56b8": function(p0i32,p1i32) {
/******/ 						return installedModules["./pkg/erg_playground_bg.js"].exports["__wbg_has_c5fcd020291e56b8"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_set_092e06b0f9d71865": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["./pkg/erg_playground_bg.js"].exports["__wbg_set_092e06b0f9d71865"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbindgen_debug_string": function(p0i32,p1i32) {
/******/ 						return installedModules["./pkg/erg_playground_bg.js"].exports["__wbindgen_debug_string"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbindgen_throw": function(p0i32,p1i32) {
/******/ 						return installedModules["./pkg/erg_playground_bg.js"].exports["__wbindgen_throw"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbindgen_memory": function() {
/******/ 						return installedModules["./pkg/erg_playground_bg.js"].exports["__wbindgen_memory"]();
/******/ 					},
/******/ 					"__wbindgen_closure_wrapper795": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["./pkg/erg_playground_bg.js"].exports["__wbindgen_closure_wrapper795"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbindgen_closure_wrapper796": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["./pkg/erg_playground_bg.js"].exports["__wbindgen_closure_wrapper796"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbindgen_closure_wrapper798": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["./pkg/erg_playground_bg.js"].exports["__wbindgen_closure_wrapper798"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbindgen_closure_wrapper3952": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["./pkg/erg_playground_bg.js"].exports["__wbindgen_closure_wrapper3952"](p0i32,p1i32,p2i32);
/******/ 					}
/******/ 				}
/******/ 			};
/******/ 		},
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 							error.name = 'ChunkLoadError';
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/
/******/ 		// Fetch + compile chunk loading for webassembly
/******/
/******/ 		var wasmModules = {"0":["./pkg/erg_playground_bg.wasm"]}[chunkId] || [];
/******/
/******/ 		wasmModules.forEach(function(wasmModuleId) {
/******/ 			var installedWasmModuleData = installedWasmModules[wasmModuleId];
/******/
/******/ 			// a Promise means "currently loading" or "already loaded".
/******/ 			if(installedWasmModuleData)
/******/ 				promises.push(installedWasmModuleData);
/******/ 			else {
/******/ 				var importObject = wasmImportObjects[wasmModuleId]();
/******/ 				var req = fetch(__webpack_require__.p + "" + {"./pkg/erg_playground_bg.wasm":"a5172e4877b93ae6db47"}[wasmModuleId] + ".module.wasm");
/******/ 				var promise;
/******/ 				if(importObject instanceof Promise && typeof WebAssembly.compileStreaming === 'function') {
/******/ 					promise = Promise.all([WebAssembly.compileStreaming(req), importObject]).then(function(items) {
/******/ 						return WebAssembly.instantiate(items[0], items[1]);
/******/ 					});
/******/ 				} else if(typeof WebAssembly.instantiateStreaming === 'function') {
/******/ 					promise = WebAssembly.instantiateStreaming(req, importObject);
/******/ 				} else {
/******/ 					var bytesPromise = req.then(function(x) { return x.arrayBuffer(); });
/******/ 					promise = bytesPromise.then(function(bytes) {
/******/ 						return WebAssembly.instantiate(bytes, importObject);
/******/ 					});
/******/ 				}
/******/ 				promises.push(installedWasmModules[wasmModuleId] = promise.then(function(res) {
/******/ 					return __webpack_require__.w[wasmModuleId] = (res.instance || res).exports;
/******/ 				}));
/******/ 			}
/******/ 		});
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	// object with all WebAssembly.instance exports
/******/ 	__webpack_require__.w = {};
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./bootstrap.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./bootstrap.js":
/*!**********************!*\
  !*** ./bootstrap.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// A dependency graph that contains any wasm must all be imported\n// asynchronously. This `bootstrap.js` file does the single async import, so\n// that no one else needs to worry about it again.\n__webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ./index.js */ \"./index.js\"))\n  .catch(e => console.error(\"Error importing `index.js`:\", e));\n\n\n//# sourceURL=webpack:///./bootstrap.js?");

/***/ })

/******/ });