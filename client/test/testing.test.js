const verifyPPM = require('../utils/verifyPPM')
const validatePassword = require('../utils/validatePassword')
const validaisUser = require('../utils/validateisUser')


test('PPM > 400 ?', () => {
  expect(verifyPPM(402)).toBe(true);
});


test('isUser', () => {
  expect(validaisUser('admin','adminPass')).toBe(true);
});

test('isUser', () => {
  expect(validaisUser('no existe','no existe')).toBe(false);
});

test('isValidPassword', () => {
  expect(validatePassword('ab+k')).toBe(false);
});


test('isValidPassword', () => {
  expect(validatePassword('ab+c#')).toBe(true);
});