import { IntrospectionField, IntrospectionType, IntrospectionInputValue, __Field, __InputValue, __Type } from 'graphql';
import { RootObject } from './Docs';
import { findNameType } from './Fields';
import { Type } from './types';
import Link from 'antd/es/typography/Link';

const InputFields = ({
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
      {(stack[stack.length - 1] as unknown as Type).inputFields && <p>fields</p>}
      {(stack[stack.length - 1] as unknown as Type).inputFields?.map((item, index) => {
        return (
          <div key={index}>
            <div>
              <Link onClick={() => handleClickKey(item as unknown as IntrospectionInputValue)}>{item.name}</Link>
            </div>
            <>: </>
            <Link onClick={() => handleSearchTypes(findNameType('key', item.type))}>
              {findNameType('value', item.type)}
            </Link>
          </div>
        );
      })}
    </>
  );
};

export default InputFields;
