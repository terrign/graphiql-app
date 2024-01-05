import { IntrospectionType } from 'graphql';
import { RootObject } from './Docs';
import Title from 'antd/es/typography/Title';
import Link from 'antd/es/typography/Link';

const Root = ({
  handleClickRoot,
  stack,
}: {
  handleClickRoot: (value: IntrospectionType) => void;
  stack: Array<RootObject>;
}) => {
  const { rootFields, schemaFields } = stack[0];
  return (
    <>
      <Title level={5}>Root types</Title>
      {rootFields.map((field, ind) => {
        return (
          <div key={`root-type${ind}`}>
            <Link onClick={() => handleClickRoot(rootFields[ind])}>
              {field.name.toLowerCase()} :{field.name}
            </Link>
          </div>
        );
      })}
      <Title level={5}>All schema types</Title>
      {schemaFields.map((field, ind) => {
        return (
          <div key={`root-type${ind}`}>
            <Link onClick={() => handleClickRoot(schemaFields[ind])}>{field.name}</Link>
          </div>
        );
      })}
    </>
  );
};

export default Root;
