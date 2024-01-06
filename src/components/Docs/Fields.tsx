import Paragraph from 'antd/es/typography/Paragraph';
import { IntrospectionField, IntrospectionInputValue, IntrospectionType } from 'graphql';
import { Type } from './types';
import { RootObject } from './Docs';
import Link from 'antd/es/typography/Link';
import Arguments from './Arguments';
import { Divider, Flex } from 'antd';

export const findNameType = (key: string, obj: Type, arr: string[] = []): string | null => {
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
    return findNameType(key, obj.ofType, arr);
  }
  return null;
};

const Fields = ({
  stack,
  handleSearchTypes,
  handleClickKey,
}: {
  stack: (RootObject | IntrospectionField | IntrospectionType | IntrospectionInputValue)[];
  handleSearchTypes: (value: string | null) => void;
  handleClickKey: (item: IntrospectionField | IntrospectionInputValue) => void;
}) => {
  return (
    <>
      {(stack[stack.length - 1] as unknown as Type).fields && <Paragraph>fields</Paragraph>}
      {(stack[stack.length - 1] as unknown as Type).fields?.map((item, index) => {
        return (
          <div key={index}>
            <Flex wrap="wrap">
              <Link onClick={() => handleClickKey(item as unknown as IntrospectionField)}>{item.name}</Link>
              <Flex>
                <Arguments field={item as unknown as IntrospectionField} handleClickArgument={handleSearchTypes} />
              </Flex>
              <>:</>
              <Link onClick={() => handleSearchTypes(findNameType('key', item.type))}>
                {findNameType('value', item.type)}
              </Link>
            </Flex>
            <Divider />
          </div>
        );
      })}
    </>
  );
};

export default Fields;
