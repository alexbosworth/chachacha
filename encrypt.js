const {ChaCha20Poly1305RFC} = require('./bin/chachacha');

const tagLength = 16;

/** Encrypt plaintext

  {
    associated: <Associated Data Hex Encoded String>
    key: <Encryption Key Hex Encoded String>
    nonce: <Nonce Data Hex Encoded String>
    plain: <Plaintext Hencoded Data to Encrypt String>
  }

  @throws
  <Error>

  @returns
  {
    cipher: <Encrypted Data Hex Encoded String>
  }
*/
module.exports = ({associated, key, nonce, plain}) => {
  const chacha = ChaCha20Poly1305RFC.new(
    Buffer.from(key, 'hex'),
    Buffer.from(nonce, 'hex'),
    Buffer.from(associated, 'hex')
  );

  const plaintext = Buffer.from(plain, 'hex');
	const tag = Buffer.alloc(tagLength, 0);

  const ciphertext = Buffer.alloc(plaintext.length, 0);

  // Fill the ciphertext buffer with encrypted data
  chacha.encrypt(plaintext, ciphertext, tag);

  return {cipher: Buffer.concat([ciphertext, tag]).toString('hex')};
};
