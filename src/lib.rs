mod utils;

use wasm_bindgen::prelude::*;
use erg_compiler::transpile::Transpiler;
use erg_common::traits::Runnable;
use rustpython_wasm::{VMStore, WASMVirtualMachine};
use once_cell::sync::Lazy;

#[wasm_bindgen]
// #[derive()]
pub struct Playground {
    transpiler: Transpiler,
    vm: Lazy<WASMVirtualMachine>,
    // vm: WASMVirtualMachine,
    inited: bool,
}

impl Default for Playground {
    fn default() -> Self {
        Self::new()
    }
}

#[wasm_bindgen]
impl Playground {
    pub fn new() -> Self {
        #[cfg(feature = "console_error_panic_hook")]
        console_error_panic_hook::set_once();
        Playground {
            transpiler: Transpiler::default(),
            // vm: VMStore::init("term_vm".into(), None),
            vm: Lazy::new(|| VMStore::init("term_vm".into(), None)),
            inited: false,
        }
    }

    pub fn initialize(&mut self) {
        self.vm.exec_single("from collections import namedtuple as NamedTuple__", None).unwrap();
        self.inited = true;
    }

    pub fn set_stdout(&mut self, stdout: JsValue) {
        self.vm.set_stdout(stdout).unwrap();
    }

    pub fn start_message(&self) -> String {
        self.transpiler.start_message().replace("Erg transpiler", "Erg Playground (experimental)")
    }

    pub fn eval(&mut self, input: &str) -> String {
        match self.transpiler.transpile(input.to_string(), "eval") {
            Ok(script) => {
                let code = script.object.code()
                    .replace("from collections import namedtuple as NamedTuple__\n", "")
                    .replace("    import warnings\n    warnings.warn(\"`typing.Union` is not available. Please use Python 3.8+.\")\n", "");
                if !self.inited {
                    self.initialize();
                }
                match self.vm.exec_single(&code, None) {
                    Ok(val) => val.as_string().unwrap_or_default(),
                    Err(err) => format!("<<RuntimeError>>{:?}\ncode:\n{code}", err),
                }
            },
            Err(errors) => {
                format!("<<CompileError>>{errors}")
            },
        }
    }
}
