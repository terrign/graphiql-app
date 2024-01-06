import Paragraph from 'antd/es/typography/Paragraph';
import { IntrospectionField, IntrospectionInputValue, IntrospectionType } from 'graphql';
import { Type } from './types';
import { RootObject } from './Docs';
import Link from 'antd/es/typography/Link';
import Arguments from './Arguments';
import { Divider, Flex } from 'antd';
import { findType } from './findType';

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
              <> : </>
              <Link onClick={() => handleSearchTypes(findType('key', item.type))}>{findType('value', item.type)}</Link>
            </Flex>
            <Divider />
          </div>
        );
      })}
    </>
  );
};

export default Fields;
