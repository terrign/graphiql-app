import { Type } from './types';

export const findType = (key: string, obj: Type, arr: string[] = []): string | null => {
  if (obj.name !== null && obj.ofType === null) {
    const keyName = obj.name;
    let valueName = obj.name;
    arr.reverse().forEach((item) => {
      if (item === 'NON_NULL') {
        valueName += '!';
      } else if (item === 'LIST') {
        valueName = '[' + valueName + ']';
      }
    });
    if (key === 'key') {
      return keyName;
    }
    if (key === 'value') {
      return valueName;
    }
  } else if (obj.ofType && obj.name === null) {
    arr.push(String(obj.kind));
    return findType(key, obj.ofType, arr);
  }
  return null;
};
