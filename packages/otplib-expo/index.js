import hotp from 'otplib-hotp';
import totp from 'otplib-totp';
import authenticator from 'otplib-authenticator';
import crypto from './crypto';

/**
 * otplib-expo
 *
 * One-Time Password Library for use with https://expo.io
 *
 * @module otplib-expo
 * @since 10.0.0
 */
authenticator.options = { crypto };
hotp.options = { crypto };
totp.options = { crypto };

module.exports = {
  authenticator,
  hotp,
  totp
};
