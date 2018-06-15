/**
 * randomBytes naive implementation.
 *
 * Required for expo applications that don't offer a native
 * secure random implementaton
 *
 * @module otplib-expo/randomBytes
 * @param {string} size - the size
 * @return {Buffer}
 */
function randomBytes(size) {
  if (size > 65536) {
    throw new Error('Requested size of random bytes is too large');
  }

  if (size < 1) {
    throw new Error('Requested size must be more than 0');
  }

  const rawBytes = new Uint8Array(size).map(() => randomUint8());

  return new Buffer(rawBytes.buffer);
}

function randomUint8() {
  const low = 0;
  const high = 255;
  return Math.floor(Math.random() * (high - low + 1) + low);
}

export default randomBytes;
