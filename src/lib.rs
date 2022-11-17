mod utils;

use wasm_bindgen::prelude::*;
use erg_compiler::build_hir::HIRBuilder;
use erg_common::traits::Runnable;

// When the `wee_alloc` feature is enabled, use `wee_alloc` as the global
// allocator.
#[cfg(feature = "wee_alloc")]
#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;

#[wasm_bindgen]
#[derive(Debug)]
pub struct Playground {
    builder: HIRBuilder,
}

impl Default for Playground {
    fn default() -> Self {
        Self::new()
    }
}

#[wasm_bindgen]
impl Playground {
    pub fn new() -> Self {
        Playground {
            builder: HIRBuilder::default(),
        }
    }

    pub fn start_message(&self) -> String {
        self.builder.start_message().replace("Erg HIR builder", "Erg Playground (experimental)")
    }

    pub fn eval(&mut self, input: &str) -> String {
        match self.builder.build(input.to_string(), "eval") {
            Ok(artifact) => {
                artifact.hir.to_string()
            },
            Err(artifact) => {
                format!("<<ErgPlayGroundError>>{}", artifact.errors)
            },
        }
    }
}
