
const insertarDato = require('../utils/insertData');

test('INSERTAR VALOR A BD', () => {
  expect(insertarDato(456, '190.158.45.2')).toBe(1);
});
test('INSERTAR VALOR A BD', () => {
    expect(insertarDato(456, ' ')).toBe(0);
  });
  test('INSERTAR VALOR A BD', () => {
    expect(insertarDato(0,' ')).toBe(0);
  });
  