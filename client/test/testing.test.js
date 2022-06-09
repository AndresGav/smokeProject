const verifyPPM = require('../utils/verifyPPM')
const validatePassword = require('../utils/validatePassword')




test('PPM > 400 ?', () => {
  expect(verifyPPM(402)).toBe(true);
});


// test('isUser', () => {
//   expect(validateUserTest('admin','admin')).toBe("TRUE");
// });

// test('isUser', () => {
//   expect(validateUserTest('no existe','no existe')).toBe("FALSE");
// });

test('isValidPassword', () => {
  expect(validatePassword('ab+k')).toBe(false);
});


test('isValidPassword', () => {
  expect(validatePassword('ab+c#')).toBe(true);
});