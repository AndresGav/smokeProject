const verifyPPM = require('./verifyPPM');

test('PPM > 400 ?', () => {
  expect(verifyPPM(402)).toBe(true);
});