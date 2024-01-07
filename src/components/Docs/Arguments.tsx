import { IntrospectionField, IntrospectionInputValue } from 'graphql';
import { findType } from './findType';
import Link from 'antd/es/typography/Link';
import { Type } from './types';

const Arguments = ({
  field,
  handleClickArgument,
}: {
  field: IntrospectionField | IntrospectionInputValue;
  handleClickArgument: (value: string | null) => void;
}) => {
  return (
    <>
      {(field as IntrospectionField).args.map((arg, ind) => {
        return (
          <div key={ind} style={{ display: 'flex' }}>
            <>{ind === 0 ? '(' : ' '}</>
            <>{`${arg.name}: `}</>
            <Link onClick={() => handleClickArgument(findType('key', arg.type as unknown as Type))}>
              {findType('value', arg.type as unknown as Type)}
            </Link>
            <span>{ind !== (field as IntrospectionField).args.length - 1 ? ', ' : ')'}</span>
          </div>
        );
      })}
    </>
  );
};

export default Arguments;
