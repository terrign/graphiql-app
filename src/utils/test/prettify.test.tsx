import { test } from 'vitest';
import { prettify } from '../prettify';

test('prettify formats a raw query correctly', () => {
  const rawQuery = '{ user(id: 1) { name email } }';
  const expectedOutput = '{\n  user(id: 1) {\n    name\n    email\n  }\n}';

  const actualOutput = prettify(rawQuery);
  expect(actualOutput).toBe(expectedOutput);
});
