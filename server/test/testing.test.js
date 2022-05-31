const verifyPPM = require('../utils/verifyPPM');

test('VERIFYppm > 400', () => {
  expect(verifyPPM(200)).toBe(false);
  expect(verifyPPM(500)).toBe(true);
});