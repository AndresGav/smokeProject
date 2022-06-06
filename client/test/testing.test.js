const verifyPPM = require('../utils/verifyPPM');
const validateUser = require('../utils/validateisUser')
const validatePassword = require('../utils/validatePassword')
test('PPM > 400 ?', () => {
  expect(verifyPPM(402)).toBe(true);
});


test('isUser', () => {
  expect(validateUser('admin','admin')).toBe(true);
});

test('isUser', () => {
  expect(validateUser('no existe','no existe')).toBe(false);
});

test('isValidPassword', () => {
  expect(validatePassword('ab+k')).toBe(false);
});


test('isValidPassword', () => {
  expect(validatePassword('ab+c#')).toBe(true);
});