const verifyPPM = require('../utils/verifyPPM');

test('PPM > 400 ?', () => {
  expect(verifyPPM(402)).toBe(true);
});