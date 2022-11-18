mod utils;

use wasm_bindgen::prelude::*;
use erg_compiler::transpile::Transpiler;
use erg_common::traits::Runnable;
use rustpython_wasm::{VMStore, WASMVirtualMachine};

// When the `wee_alloc` feature is enabled, use `wee_alloc` as the global
// allocator.
#[cfg(feature = "wee_alloc")]
#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;

#[wasm_bindgen]
// #[derive()]
pub struct Playground {
    transpiler: Transpiler,
    vm: WASMVirtualMachine,
}

impl Default for Playground {
    fn default() -> Self {
        Self::new()
    }
}

#[wasm_bindgen]
impl Playground {
    pub fn new() -> Self {
        let pg = Playground {
            transpiler: Transpiler::default(),
            vm: VMStore::init("term_vm".into(), None),
        };
        pg.vm.exec_single("from collections import namedtuple as NamedTuple__", None).unwrap();
        pg
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
                let code = script.code.replace("from collections import namedtuple as NamedTuple__\n", "");
                match self.vm.exec_single(&code, None) {
                    Ok(val) => val.as_string().unwrap_or_default(),
                    Err(err) => format!("<<RuntimeError>>{}\n{}", code, err.as_string().unwrap_or_default()),
                }
            },
            Err(errors) => {
                format!("<<CompileError>>{errors}")
            },
        }
    }
}
