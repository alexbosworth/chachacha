
const path = require('path').join(__dirname, 'chachacha_bg.wasm');
const bytes = require('fs').readFileSync(path);
let imports = {};
imports['./chachacha.js'] = require('./chachacha.js');

const wasmModule = new WebAssembly.Module(bytes);
const wasmInstance = new WebAssembly.Instance(wasmModule, imports);
module.exports = wasmInstance.exports;
