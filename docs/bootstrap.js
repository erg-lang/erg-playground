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
/******/ 					"__wbg_virtualmachine_new": function(p0i32) {
/******/ 						return installedModules["./pkg/erg_playground_bg.js"].exports["__wbg_virtualmachine_new"](p0i32);
/******/ 					},
/******/ 					"__wbindgen_cb_drop": function(p0i32) {
/******/ 						return installedModules["./pkg/erg_playground_bg.js"].exports["__wbindgen_cb_drop"](p0i32);
/******/ 					},
/******/ 					"__wbindgen_boolean_get": function(p0i32) {
/******/ 						return installedModules["./pkg/erg_playground_bg.js"].exports["__wbindgen_boolean_get"](p0i32);
/******/ 					},
/******/ 					"__wbindgen_number_get": function(p0i32,p1i32) {
/******/ 						return installedModules["./pkg/erg_playground_bg.js"].exports["__wbindgen_number_get"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbindgen_is_object": function(p0i32) {
/******/ 						return installedModules["./pkg/erg_playground_bg.js"].exports["__wbindgen_is_object"](p0i32);
/******/ 					},
/******/ 					"__wbg_new_7ffa02bfbc04beed": function(p0i32) {
/******/ 						return installedModules["./pkg/erg_playground_bg.js"].exports["__wbg_new_7ffa02bfbc04beed"](p0i32);
/******/ 					},
/******/ 					"__wbindgen_object_clone_ref": function(p0i32) {
/******/ 						return installedModules["./pkg/erg_playground_bg.js"].exports["__wbindgen_object_clone_ref"](p0i32);
/******/ 					},
/******/ 					"__wbindgen_is_function": function(p0i32) {
/******/ 						return installedModules["./pkg/erg_playground_bg.js"].exports["__wbindgen_is_function"](p0i32);
/******/ 					},
/******/ 					"__wbindgen_is_undefined": function(p0i32) {
/******/ 						return installedModules["./pkg/erg_playground_bg.js"].exports["__wbindgen_is_undefined"](p0i32);
/******/ 					},
/******/ 					"__wbg_typeof_743177f72f6fdc29": function(p0i32,p1i32) {
/******/ 						return installedModules["./pkg/erg_playground_bg.js"].exports["__wbg_typeof_743177f72f6fdc29"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbindgen_is_null": function(p0i32) {
/******/ 						return installedModules["./pkg/erg_playground_bg.js"].exports["__wbindgen_is_null"](p0i32);
/******/ 					},
/******/ 					"__wbg_getprop_69de9677404c75d3": function(p0i32,p1i32) {
/******/ 						return installedModules["./pkg/erg_playground_bg.js"].exports["__wbg_getprop_69de9677404c75d3"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_instanceof_ef87d3bd70f479d6": function(p0i32,p1i32) {
/******/ 						return installedModules["./pkg/erg_playground_bg.js"].exports["__wbg_instanceof_ef87d3bd70f479d6"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_callmethod_ef8950daab16ff08": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["./pkg/erg_playground_bg.js"].exports["__wbg_callmethod_ef8950daab16ff08"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_setprop_8d6ad1b2f63c650b": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["./pkg/erg_playground_bg.js"].exports["__wbg_setprop_8d6ad1b2f63c650b"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_callfunc_cd2420ba90677c6c": function(p0i32,p1i32) {
/******/ 						return installedModules["./pkg/erg_playground_bg.js"].exports["__wbg_callfunc_cd2420ba90677c6c"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_wrapclosure_e03ae4154b12b431": function(p0i32) {
/******/ 						return installedModules["./pkg/erg_playground_bg.js"].exports["__wbg_wrapclosure_e03ae4154b12b431"](p0i32);
/******/ 					},
/******/ 					"__wbg_hasprop_5df6320485f97f26": function(p0i32,p1i32) {
/******/ 						return installedModules["./pkg/erg_playground_bg.js"].exports["__wbg_hasprop_5df6320485f97f26"](p0i32,p1i32);
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
/******/ 					"__wbindgen_number_new": function(p0f64) {
/******/ 						return installedModules["./pkg/erg_playground_bg.js"].exports["__wbindgen_number_new"](p0f64);
/******/ 					},
/******/ 					"__wbg_set_ce5827ace4c694dc": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["./pkg/erg_playground_bg.js"].exports["__wbg_set_ce5827ace4c694dc"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_instanceof_Window_acc97ff9f5d2c7b4": function(p0i32) {
/******/ 						return installedModules["./pkg/erg_playground_bg.js"].exports["__wbg_instanceof_Window_acc97ff9f5d2c7b4"](p0i32);
/******/ 					},
/******/ 					"__wbg_document_3ead31dbcad65886": function(p0i32) {
/******/ 						return installedModules["./pkg/erg_playground_bg.js"].exports["__wbg_document_3ead31dbcad65886"](p0i32);
/******/ 					},
/******/ 					"__wbg_cancelAnimationFrame_679ac3913d7f9b34": function(p0i32,p1i32) {
/******/ 						return installedModules["./pkg/erg_playground_bg.js"].exports["__wbg_cancelAnimationFrame_679ac3913d7f9b34"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_requestAnimationFrame_4181656476a7d86c": function(p0i32,p1i32) {
/******/ 						return installedModules["./pkg/erg_playground_bg.js"].exports["__wbg_requestAnimationFrame_4181656476a7d86c"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_fetch_0fe04905cccfc2aa": function(p0i32,p1i32) {
/******/ 						return installedModules["./pkg/erg_playground_bg.js"].exports["__wbg_fetch_0fe04905cccfc2aa"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_querySelector_3628dc2c3319e7e0": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["./pkg/erg_playground_bg.js"].exports["__wbg_querySelector_3628dc2c3319e7e0"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_set_992c1d31586b2957": function(p0i32,p1i32,p2i32,p3i32,p4i32) {
/******/ 						return installedModules["./pkg/erg_playground_bg.js"].exports["__wbg_set_992c1d31586b2957"](p0i32,p1i32,p2i32,p3i32,p4i32);
/******/ 					},
/******/ 					"__wbg_getAttribute_3a1f0fb396184372": function(p0i32,p1i32,p2i32,p3i32) {
/******/ 						return installedModules["./pkg/erg_playground_bg.js"].exports["__wbg_getAttribute_3a1f0fb396184372"](p0i32,p1i32,p2i32,p3i32);
/******/ 					},
/******/ 					"__wbg_setAttribute_d8436c14a59ab1af": function(p0i32,p1i32,p2i32,p3i32,p4i32) {
/******/ 						return installedModules["./pkg/erg_playground_bg.js"].exports["__wbg_setAttribute_d8436c14a59ab1af"](p0i32,p1i32,p2i32,p3i32,p4i32);
/******/ 					},
/******/ 					"__wbg_log_4b5638ad60bdc54a": function(p0i32) {
/******/ 						return installedModules["./pkg/erg_playground_bg.js"].exports["__wbg_log_4b5638ad60bdc54a"](p0i32);
/******/ 					},
/******/ 					"__wbg_instanceof_Response_eaa426220848a39e": function(p0i32) {
/******/ 						return installedModules["./pkg/erg_playground_bg.js"].exports["__wbg_instanceof_Response_eaa426220848a39e"](p0i32);
/******/ 					},
/******/ 					"__wbg_arrayBuffer_4c27b6f00c530232": function(p0i32) {
/******/ 						return installedModules["./pkg/erg_playground_bg.js"].exports["__wbg_arrayBuffer_4c27b6f00c530232"](p0i32);
/******/ 					},
/******/ 					"__wbg_json_eb16b12f372e850c": function(p0i32) {
/******/ 						return installedModules["./pkg/erg_playground_bg.js"].exports["__wbg_json_eb16b12f372e850c"](p0i32);
/******/ 					},
/******/ 					"__wbg_text_1169d752cc697903": function(p0i32) {
/******/ 						return installedModules["./pkg/erg_playground_bg.js"].exports["__wbg_text_1169d752cc697903"](p0i32);
/******/ 					},
/******/ 					"__wbg_headers_85824e993aa739bf": function(p0i32) {
/******/ 						return installedModules["./pkg/erg_playground_bg.js"].exports["__wbg_headers_85824e993aa739bf"](p0i32);
/******/ 					},
/******/ 					"__wbg_newwithstrandinit_05d7180788420c40": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["./pkg/erg_playground_bg.js"].exports["__wbg_newwithstrandinit_05d7180788420c40"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_now_d52810455f8773fb": function() {
/******/ 						return installedModules["./pkg/erg_playground_bg.js"].exports["__wbg_now_d52810455f8773fb"]();
/******/ 					},
/******/ 					"__wbg_error_d57d54f6b50dbbb9": function(p0i32,p1i32) {
/******/ 						return installedModules["./pkg/erg_playground_bg.js"].exports["__wbg_error_d57d54f6b50dbbb9"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_randomFillSync_6894564c2c334c42": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["./pkg/erg_playground_bg.js"].exports["__wbg_randomFillSync_6894564c2c334c42"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_getRandomValues_805f1c3d65988a5a": function(p0i32,p1i32) {
/******/ 						return installedModules["./pkg/erg_playground_bg.js"].exports["__wbg_getRandomValues_805f1c3d65988a5a"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_crypto_e1d53a1d73fb10b8": function(p0i32) {
/******/ 						return installedModules["./pkg/erg_playground_bg.js"].exports["__wbg_crypto_e1d53a1d73fb10b8"](p0i32);
/******/ 					},
/******/ 					"__wbg_process_038c26bf42b093f8": function(p0i32) {
/******/ 						return installedModules["./pkg/erg_playground_bg.js"].exports["__wbg_process_038c26bf42b093f8"](p0i32);
/******/ 					},
/******/ 					"__wbg_versions_ab37218d2f0b24a8": function(p0i32) {
/******/ 						return installedModules["./pkg/erg_playground_bg.js"].exports["__wbg_versions_ab37218d2f0b24a8"](p0i32);
/******/ 					},
/******/ 					"__wbg_node_080f4b19d15bc1fe": function(p0i32) {
/******/ 						return installedModules["./pkg/erg_playground_bg.js"].exports["__wbg_node_080f4b19d15bc1fe"](p0i32);
/******/ 					},
/******/ 					"__wbindgen_is_string": function(p0i32) {
/******/ 						return installedModules["./pkg/erg_playground_bg.js"].exports["__wbindgen_is_string"](p0i32);
/******/ 					},
/******/ 					"__wbg_require_78a3dcfbdba9cbce": function() {
/******/ 						return installedModules["./pkg/erg_playground_bg.js"].exports["__wbg_require_78a3dcfbdba9cbce"]();
/******/ 					},
/******/ 					"__wbg_msCrypto_6e7d3e1f92610cbb": function(p0i32) {
/******/ 						return installedModules["./pkg/erg_playground_bg.js"].exports["__wbg_msCrypto_6e7d3e1f92610cbb"](p0i32);
/******/ 					},
/******/ 					"__wbg_get_57245cc7d7c7619d": function(p0i32,p1i32) {
/******/ 						return installedModules["./pkg/erg_playground_bg.js"].exports["__wbg_get_57245cc7d7c7619d"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_new_1d9a920c6bfc44a8": function() {
/******/ 						return installedModules["./pkg/erg_playground_bg.js"].exports["__wbg_new_1d9a920c6bfc44a8"]();
/******/ 					},
/******/ 					"__wbg_newnoargs_b5b063fc6c2f0376": function(p0i32,p1i32) {
/******/ 						return installedModules["./pkg/erg_playground_bg.js"].exports["__wbg_newnoargs_b5b063fc6c2f0376"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_new_268f7b7dd3430798": function() {
/******/ 						return installedModules["./pkg/erg_playground_bg.js"].exports["__wbg_new_268f7b7dd3430798"]();
/******/ 					},
/******/ 					"__wbg_next_579e583d33566a86": function(p0i32) {
/******/ 						return installedModules["./pkg/erg_playground_bg.js"].exports["__wbg_next_579e583d33566a86"](p0i32);
/******/ 					},
/******/ 					"__wbg_next_aaef7c8aa5e212ac": function(p0i32) {
/******/ 						return installedModules["./pkg/erg_playground_bg.js"].exports["__wbg_next_aaef7c8aa5e212ac"](p0i32);
/******/ 					},
/******/ 					"__wbg_done_1b73b0672e15f234": function(p0i32) {
/******/ 						return installedModules["./pkg/erg_playground_bg.js"].exports["__wbg_done_1b73b0672e15f234"](p0i32);
/******/ 					},
/******/ 					"__wbg_value_1ccc36bc03462d71": function(p0i32) {
/******/ 						return installedModules["./pkg/erg_playground_bg.js"].exports["__wbg_value_1ccc36bc03462d71"](p0i32);
/******/ 					},
/******/ 					"__wbg_iterator_6f9d4f28845f426c": function() {
/******/ 						return installedModules["./pkg/erg_playground_bg.js"].exports["__wbg_iterator_6f9d4f28845f426c"]();
/******/ 					},
/******/ 					"__wbg_get_765201544a2b6869": function(p0i32,p1i32) {
/******/ 						return installedModules["./pkg/erg_playground_bg.js"].exports["__wbg_get_765201544a2b6869"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_call_97ae9d8645dc388b": function(p0i32,p1i32) {
/******/ 						return installedModules["./pkg/erg_playground_bg.js"].exports["__wbg_call_97ae9d8645dc388b"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_new_0b9bfdd97583284e": function() {
/******/ 						return installedModules["./pkg/erg_playground_bg.js"].exports["__wbg_new_0b9bfdd97583284e"]();
/******/ 					},
/******/ 					"__wbg_self_6d479506f72c6a71": function() {
/******/ 						return installedModules["./pkg/erg_playground_bg.js"].exports["__wbg_self_6d479506f72c6a71"]();
/******/ 					},
/******/ 					"__wbg_window_f2557cc78490aceb": function() {
/******/ 						return installedModules["./pkg/erg_playground_bg.js"].exports["__wbg_window_f2557cc78490aceb"]();
/******/ 					},
/******/ 					"__wbg_globalThis_7f206bda628d5286": function() {
/******/ 						return installedModules["./pkg/erg_playground_bg.js"].exports["__wbg_globalThis_7f206bda628d5286"]();
/******/ 					},
/******/ 					"__wbg_global_ba75c50d1cf384f4": function() {
/******/ 						return installedModules["./pkg/erg_playground_bg.js"].exports["__wbg_global_ba75c50d1cf384f4"]();
/******/ 					},
/******/ 					"__wbg_isArray_27c46c67f498e15d": function(p0i32) {
/******/ 						return installedModules["./pkg/erg_playground_bg.js"].exports["__wbg_isArray_27c46c67f498e15d"](p0i32);
/******/ 					},
/******/ 					"__wbg_push_740e4b286702d964": function(p0i32,p1i32) {
/******/ 						return installedModules["./pkg/erg_playground_bg.js"].exports["__wbg_push_740e4b286702d964"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_instanceof_ArrayBuffer_e5e48f4762c5610b": function(p0i32) {
/******/ 						return installedModules["./pkg/erg_playground_bg.js"].exports["__wbg_instanceof_ArrayBuffer_e5e48f4762c5610b"](p0i32);
/******/ 					},
/******/ 					"__wbg_isView_5c280fb08c72f3f8": function(p0i32) {
/******/ 						return installedModules["./pkg/erg_playground_bg.js"].exports["__wbg_isView_5c280fb08c72f3f8"](p0i32);
/******/ 					},
/******/ 					"__wbg_values_e42671acbf11ec04": function(p0i32) {
/******/ 						return installedModules["./pkg/erg_playground_bg.js"].exports["__wbg_values_e42671acbf11ec04"](p0i32);
/******/ 					},
/******/ 					"__wbg_instanceof_Error_56b496a10a56de66": function(p0i32) {
/******/ 						return installedModules["./pkg/erg_playground_bg.js"].exports["__wbg_instanceof_Error_56b496a10a56de66"](p0i32);
/******/ 					},
/******/ 					"__wbg_new_8d2af00bc1e329ee": function(p0i32,p1i32) {
/******/ 						return installedModules["./pkg/erg_playground_bg.js"].exports["__wbg_new_8d2af00bc1e329ee"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_message_fe2af63ccc8985bc": function(p0i32) {
/******/ 						return installedModules["./pkg/erg_playground_bg.js"].exports["__wbg_message_fe2af63ccc8985bc"](p0i32);
/******/ 					},
/******/ 					"__wbg_name_48eda3ae6aa697ca": function(p0i32) {
/******/ 						return installedModules["./pkg/erg_playground_bg.js"].exports["__wbg_name_48eda3ae6aa697ca"](p0i32);
/******/ 					},
/******/ 					"__wbg_toString_73c9b562dccf34bd": function(p0i32) {
/******/ 						return installedModules["./pkg/erg_playground_bg.js"].exports["__wbg_toString_73c9b562dccf34bd"](p0i32);
/******/ 					},
/******/ 					"__wbg_apply_22a3220d244124da": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["./pkg/erg_playground_bg.js"].exports["__wbg_apply_22a3220d244124da"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_call_168da88779e35f61": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["./pkg/erg_playground_bg.js"].exports["__wbg_call_168da88779e35f61"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_name_da379f055623f0d3": function(p0i32) {
/******/ 						return installedModules["./pkg/erg_playground_bg.js"].exports["__wbg_name_da379f055623f0d3"](p0i32);
/******/ 					},
/******/ 					"__wbg_set_933729cf5b66ac11": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["./pkg/erg_playground_bg.js"].exports["__wbg_set_933729cf5b66ac11"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_isSafeInteger_dfa0593e8d7ac35a": function(p0i32) {
/******/ 						return installedModules["./pkg/erg_playground_bg.js"].exports["__wbg_isSafeInteger_dfa0593e8d7ac35a"](p0i32);
/******/ 					},
/******/ 					"__wbg_getTime_cb82adb2556ed13e": function(p0i32) {
/******/ 						return installedModules["./pkg/erg_playground_bg.js"].exports["__wbg_getTime_cb82adb2556ed13e"](p0i32);
/******/ 					},
/******/ 					"__wbg_getTimezoneOffset_89bd4275e1ca8341": function(p0i32) {
/******/ 						return installedModules["./pkg/erg_playground_bg.js"].exports["__wbg_getTimezoneOffset_89bd4275e1ca8341"](p0i32);
/******/ 					},
/******/ 					"__wbg_new0_a57059d72c5b7aee": function() {
/******/ 						return installedModules["./pkg/erg_playground_bg.js"].exports["__wbg_new0_a57059d72c5b7aee"]();
/******/ 					},
/******/ 					"__wbg_instanceof_Object_595a1007518cbea3": function(p0i32) {
/******/ 						return installedModules["./pkg/erg_playground_bg.js"].exports["__wbg_instanceof_Object_595a1007518cbea3"](p0i32);
/******/ 					},
/******/ 					"__wbg_create_679a02dfb5b55d3b": function(p0i32) {
/******/ 						return installedModules["./pkg/erg_playground_bg.js"].exports["__wbg_create_679a02dfb5b55d3b"](p0i32);
/******/ 					},
/******/ 					"__wbg_entries_65a76a413fc91037": function(p0i32) {
/******/ 						return installedModules["./pkg/erg_playground_bg.js"].exports["__wbg_entries_65a76a413fc91037"](p0i32);
/******/ 					},
/******/ 					"__wbg_toString_7be108a12ef03bc2": function(p0i32) {
/******/ 						return installedModules["./pkg/erg_playground_bg.js"].exports["__wbg_toString_7be108a12ef03bc2"](p0i32);
/******/ 					},
/******/ 					"__wbg_new_3f18c1e01b7aae66": function(p0i32,p1i32) {
/******/ 						return installedModules["./pkg/erg_playground_bg.js"].exports["__wbg_new_3f18c1e01b7aae66"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_new_db254ae0a1bb0ff5": function(p0i32,p1i32) {
/******/ 						return installedModules["./pkg/erg_playground_bg.js"].exports["__wbg_new_db254ae0a1bb0ff5"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_instanceof_Promise_8f075b2904633ce9": function(p0i32) {
/******/ 						return installedModules["./pkg/erg_playground_bg.js"].exports["__wbg_instanceof_Promise_8f075b2904633ce9"](p0i32);
/******/ 					},
/******/ 					"__wbg_new_9962f939219f1820": function(p0i32,p1i32) {
/******/ 						return installedModules["./pkg/erg_playground_bg.js"].exports["__wbg_new_9962f939219f1820"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_reject_72477563edad55b7": function(p0i32) {
/******/ 						return installedModules["./pkg/erg_playground_bg.js"].exports["__wbg_reject_72477563edad55b7"](p0i32);
/******/ 					},
/******/ 					"__wbg_resolve_99fe17964f31ffc0": function(p0i32) {
/******/ 						return installedModules["./pkg/erg_playground_bg.js"].exports["__wbg_resolve_99fe17964f31ffc0"](p0i32);
/******/ 					},
/******/ 					"__wbg_then_11f7a54d67b4bfad": function(p0i32,p1i32) {
/******/ 						return installedModules["./pkg/erg_playground_bg.js"].exports["__wbg_then_11f7a54d67b4bfad"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_then_cedad20fbbd9418a": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["./pkg/erg_playground_bg.js"].exports["__wbg_then_cedad20fbbd9418a"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_buffer_3f3d764d4747d564": function(p0i32) {
/******/ 						return installedModules["./pkg/erg_playground_bg.js"].exports["__wbg_buffer_3f3d764d4747d564"](p0i32);
/******/ 					},
/******/ 					"__wbg_newwithbyteoffsetandlength_d9aa266703cb98be": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["./pkg/erg_playground_bg.js"].exports["__wbg_newwithbyteoffsetandlength_d9aa266703cb98be"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_new_8c3f0052272a457a": function(p0i32) {
/******/ 						return installedModules["./pkg/erg_playground_bg.js"].exports["__wbg_new_8c3f0052272a457a"](p0i32);
/******/ 					},
/******/ 					"__wbg_set_83db9690f9353e79": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["./pkg/erg_playground_bg.js"].exports["__wbg_set_83db9690f9353e79"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_length_9e1ae1900cb0fbd5": function(p0i32) {
/******/ 						return installedModules["./pkg/erg_playground_bg.js"].exports["__wbg_length_9e1ae1900cb0fbd5"](p0i32);
/******/ 					},
/******/ 					"__wbg_instanceof_Uint8Array_971eeda69eb75003": function(p0i32) {
/******/ 						return installedModules["./pkg/erg_playground_bg.js"].exports["__wbg_instanceof_Uint8Array_971eeda69eb75003"](p0i32);
/******/ 					},
/******/ 					"__wbg_newwithlength_f5933855e4f48a19": function(p0i32) {
/******/ 						return installedModules["./pkg/erg_playground_bg.js"].exports["__wbg_newwithlength_f5933855e4f48a19"](p0i32);
/******/ 					},
/******/ 					"__wbg_buffer_21310ea17257b0b4": function(p0i32) {
/******/ 						return installedModules["./pkg/erg_playground_bg.js"].exports["__wbg_buffer_21310ea17257b0b4"](p0i32);
/******/ 					},
/******/ 					"__wbg_subarray_58ad4efbb5bcb886": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["./pkg/erg_playground_bg.js"].exports["__wbg_subarray_58ad4efbb5bcb886"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_slice_49497b5040938ef1": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["./pkg/erg_playground_bg.js"].exports["__wbg_slice_49497b5040938ef1"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_new_560e92ba7b82d97c": function(p0i32,p1i32) {
/******/ 						return installedModules["./pkg/erg_playground_bg.js"].exports["__wbg_new_560e92ba7b82d97c"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_apply_75f7334893eef4ad": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["./pkg/erg_playground_bg.js"].exports["__wbg_apply_75f7334893eef4ad"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_construct_603d2c5863aae443": function(p0i32,p1i32) {
/******/ 						return installedModules["./pkg/erg_playground_bg.js"].exports["__wbg_construct_603d2c5863aae443"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_construct_6f6bc9f66cda61d1": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["./pkg/erg_playground_bg.js"].exports["__wbg_construct_6f6bc9f66cda61d1"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_has_8359f114ce042f5a": function(p0i32,p1i32) {
/******/ 						return installedModules["./pkg/erg_playground_bg.js"].exports["__wbg_has_8359f114ce042f5a"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_set_bf3f89b92d5a34bf": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["./pkg/erg_playground_bg.js"].exports["__wbg_set_bf3f89b92d5a34bf"](p0i32,p1i32,p2i32);
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
/******/ 					"__wbindgen_closure_wrapper226": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["./pkg/erg_playground_bg.js"].exports["__wbindgen_closure_wrapper226"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbindgen_closure_wrapper227": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["./pkg/erg_playground_bg.js"].exports["__wbindgen_closure_wrapper227"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbindgen_closure_wrapper230": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["./pkg/erg_playground_bg.js"].exports["__wbindgen_closure_wrapper230"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbindgen_closure_wrapper996": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["./pkg/erg_playground_bg.js"].exports["__wbindgen_closure_wrapper996"](p0i32,p1i32,p2i32);
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
/******/ 				var req = fetch(__webpack_require__.p + "" + {"./pkg/erg_playground_bg.wasm":"16f39126a9685f22adf9"}[wasmModuleId] + ".module.wasm");
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

eval("// A dependency graph that contains any wasm must all be imported\r\n// asynchronously. This `bootstrap.js` file does the single async import, so\r\n// that no one else needs to worry about it again.\r\n__webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ./index.js */ \"./index.js\"))\r\n  .catch(e => console.error(\"Error importing `index.js`:\", e));\r\n\n\n//# sourceURL=webpack:///./bootstrap.js?");

/***/ })

/******/ });