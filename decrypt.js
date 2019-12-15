const {ChaCha20Poly1305RFC} = require('./bin/chachacha');

const tagLength = 16;

/** Decrypt chacha encrypted data

  {
    associated: <Associated Data Hex Encoded String>
    cipher: <Tagged Ciphertext Hex Encoded String>
    key: <Decryption Key Hex Encoded String>
    nonce: <Nonce Data Hex Encoded String>
  }

  @throws
  <Error>

  @returns
  {
    clear: <Decrypted Data Hex Encoded String>
  }
*/
module.exports = ({associated, cipher, key, nonce}) => {
  const chacha = ChaCha20Poly1305RFC.new(
    Buffer.from(key, 'hex'),
    Buffer.from(nonce, 'hex'),
    Buffer.from(associated, 'hex')
  );

  const ciphertext = Buffer.from(cipher, 'hex');

  const data = ciphertext.slice(0, ciphertext.length - tagLength);
  const tag = ciphertext.slice(-tagLength);

  const cleartext = Buffer.alloc(data.length);

  if (!chacha.decrypt(data, cleartext, tag)) {
    throw new Error('FailedToDecryptChaChaCiphertext');
  }

  return {clear: cleartext.toString('hex')};
};
