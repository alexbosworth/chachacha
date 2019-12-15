/* tslint:disable */
/**
*/
export class ChaCha20Poly1305RFC {
  free(): void;
/**
* @param {Uint8Array} key 
* @param {Uint8Array} nonce 
* @param {Uint8Array} aad 
* @returns {ChaCha20Poly1305RFC} 
*/
  static new(key: Uint8Array, nonce: Uint8Array, aad: Uint8Array): ChaCha20Poly1305RFC;
/**
* @param {Uint8Array} input 
* @param {Uint8Array} output 
* @param {Uint8Array} out_tag 
*/
  encrypt(input: Uint8Array, output: Uint8Array, out_tag: Uint8Array): void;
/**
* @param {Uint8Array} input 
* @param {Uint8Array} output 
* @param {Uint8Array} tag 
* @returns {boolean} 
*/
  decrypt(input: Uint8Array, output: Uint8Array, tag: Uint8Array): boolean;
}
