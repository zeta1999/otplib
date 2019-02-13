import * as otplib from './index';
import rfc6238 from 'tests/rfc6238';

describe('index', () => {
  rfc6238.table.forEach(row => {
    const id = `${row.algorithm} / ${row.epoch}`;
    test(`[${id}] otplib.totp`, () => {
      otplib.totp.options = {
        epoch: row.epoch,
        algorithm: row.algorithm,
        digits: 8
      };

      expect(otplib.totp.check(row.token, rfc6238.secret)).toBe(true);
    });
  });
});
