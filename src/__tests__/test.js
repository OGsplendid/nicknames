import Validator from '../main';

test.each([
  [
    'Not latin letters',
    'Роман',
    false,
  ],
  [
    'Not proven symbol',
    'Roman;',
    false,
  ],
  [
    '4 digits in a row',
    'Roman5555tj',
    false,
  ],
  [
    'ends with a digit',
    'Roman5',
    false,
  ],
  [
    'starts with inappropriate symbol',
    '_Roman',
    false,
  ],
  [
    'legid nickname',
    'Roman_555-Smirnov',
    true,
  ],
])('testing each option', (_, nickname, result) => {
  const val = new Validator();
  const validated = val.validateUsername(nickname);
  expect(validated).toBe(result);
});
