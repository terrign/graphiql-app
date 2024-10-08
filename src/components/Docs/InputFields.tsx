import { IntrospectionField, IntrospectionType, IntrospectionInputValue, __Field, __InputValue, __Type } from 'graphql';
import { RootObject } from './Docs';
import { findType } from './findType';
import { Type } from './types';
import Link from 'antd/es/typography/Link';
import { useLocalization } from '../../store/localization.context';

const InputFields = ({
  stack,
  handleSearchTypes,
  handleClickKey,
}: {
  stack: (RootObject | IntrospectionField | IntrospectionType | IntrospectionInputValue)[];
  handleSearchTypes: (value: string | null) => void;
  handleClickKey: (item: IntrospectionField | IntrospectionInputValue) => void;
}) => {
  const localization = useLocalization();
  return (
    <>
      {(stack[stack.length - 1] as unknown as Type).inputFields && <p>{localization.t.docs.fields}</p>}
      {(stack[stack.length - 1] as unknown as Type).inputFields?.map((item, index) => {
        return (
          <div key={index}>
            <div>
              <Link onClick={() => handleClickKey(item as unknown as IntrospectionInputValue)}>{item.name}</Link>
            </div>
            <>: </>
            <Link onClick={() => handleSearchTypes(findType('key', item.type))}>{findType('value', item.type)}</Link>
          </div>
        );
      })}
    </>
  );
};

export default InputFields;
