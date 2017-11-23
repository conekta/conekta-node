const util = require('util')

/*
 * Encodes binary data as standard base64 with padding.
 *
 * If the input is a string, it encodes it as utf8 before converting to base64.  This method will
 * throw if it is passed the wr
 *
 * @param input {String | Buffer} the input to encode.
 * @return {String} the base64 encoded version of `input`.
 */
exports.encode = function (input) {
  let binInput
  if (Buffer.isBuffer(input)) {
    binInput = input
  } else if (typeof input === typeof ('')) {
    binInput = new Buffer(input, 'utf8')
  } else {
    throw new Error('Expected string of buffer, instead got `' + typeof (input) + '`')
  }
  return binInput.toString('base64')
}
