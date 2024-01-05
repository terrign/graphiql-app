import { IntrospectionField, IntrospectionInputValue } from 'graphql';
import { findNameType } from './Fields';
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
    <div>
      {(field as IntrospectionField).args.map((arg, ind) => {
        return (
          <div key={ind}>
            <span dangerouslySetInnerHTML={{ __html: ind === 0 ? '(' : '&nbsp;' }} />
            <span>{`${arg.name}: `}</span>
            <Link onClick={() => handleClickArgument(findNameType('key', arg.type as unknown as Type))}>
              {findNameType('value', arg.type as unknown as Type)}
            </Link>
            <span>{ind !== (field as IntrospectionField).args.length - 1 ? ', ' : ')'}</span>
          </div>
        );
      })}
    </div>
  );
};

export default Arguments;
