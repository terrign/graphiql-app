import './docs.css';
import { IntrospectionField, IntrospectionInputValue, IntrospectionSchema, IntrospectionType } from 'graphql';
import Title from 'antd/es/typography/Title';
import Paragraph from 'antd/es/typography/Paragraph';
import { useEffect, useState } from 'react';
import DocsHeader from './DocsHeader';
import Root from './Root';
import Fields from './Fields';
import { Type } from './types';
import InputFields from './InputFields';

export interface RootObject {
  name: string;
  description: string;
  rootFields: IntrospectionType[];
  schemaFields: IntrospectionType[];
}

const Docs = ({ visibility, schema }: { visibility: boolean; schema: IntrospectionSchema | null }) => {
  const [stack, setStack] = useState<
    Array<RootObject | IntrospectionType | IntrospectionField | IntrospectionInputValue>
  >([]);
  const [nameHeader, setNameHeader] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [showBtnBack, setShowBtnBack] = useState(false);
  const [valueBtnBack, setValueBtnBack] = useState<string>('');

  useEffect(() => {
    if (schema) {
      const rootTypes = [schema.queryType.name, schema.mutationType?.name, schema.subscriptionType?.name].filter(
        (type) => type,
      );
      const rootFields = schema.types.filter((type) => rootTypes.includes(type.name));
      const schemaStack = schema.types.filter((type) => !rootTypes.includes(type.name) && !type.name.startsWith('__'));
      const rootObj = {
        name: 'RootDocs',
        description: 'Docs',
        rootFields: [...rootFields],
        schemaFields: [...schemaStack],
      };
      setStack([rootObj]);
    } else {
      setStack([]);
    }
  }, [schema]);

  useEffect(() => {
    if (stack.length > 1) {
      setShowBtnBack(true);
    } else {
      setShowBtnBack(false);
    }
    if (stack.length === 1) {
      setDescription('A GraphQL schema provides a root type for each kind of operation.');
      setNameHeader('Documentation Explorer');
    } else if (stack.length > 1) {
      setNameHeader(String(stack[stack.length - 1].name));
      setValueBtnBack(String(stack[stack.length - 1].name));
      if (stack.length === 2) {
        setValueBtnBack('Schema');
      } else {
        setValueBtnBack(String(stack[stack.length - 2].name));
      }
      if (stack[stack.length - 1].description) {
        setDescription(String(stack[stack.length - 1].description));
      } else {
        setDescription('No description');
      }
    } else if (stack.length === 0) {
      setNameHeader('Documentation explorer');
    }
  }, [stack]);

  const setStackDescription = (item: IntrospectionType | IntrospectionField | IntrospectionInputValue | undefined) => {
    if (item) {
      setStack((prevStack) => prevStack.concat([item]));
      if (item.description) {
        setDescription(String(item.description));
      } else {
        setDescription('No description');
      }
    }
  };

  const handleClickRoot = (value: IntrospectionType) => {
    setStackDescription(value);
  };

  const handleSearchTypes = (value: string | null) => {
    if (value !== null) {
      const typesRoot = schema?.types.find((item) => item.name === value);
      setStackDescription(typesRoot);
    }
  };

  const handleClickKey = (item: IntrospectionField | IntrospectionInputValue) => {
    setStackDescription(item);
  };

  const handleClickBack = () => {
    setStack((prevStack) => prevStack.slice(0, -1));
    if (stack[stack.length - 2].description) {
      setDescription(String(stack[stack.length - 2].description));
    } else {
      setDescription('No description');
    }
  };

  return (
    <div className={visibility ? 'docs-visible' : 'docs-invisible'}>
      <DocsHeader showBtnBack={showBtnBack} valueBtnBack={valueBtnBack} handleClickBack={handleClickBack} />
      <Title level={3}>{nameHeader}</Title>
      <Paragraph>{description}</Paragraph>
      {stack.length === 1 && <Root handleClickRoot={handleClickRoot} stack={stack as RootObject[]} />}
      {stack.length > 1 && (
        <Fields stack={stack} handleSearchTypes={handleSearchTypes} handleClickKey={handleClickKey} />
      )}
      {stack.length > 1 && String((stack[stack.length - 1] as unknown as Type).kind) === 'INPUT_OBJECT' && (
        <InputFields stack={stack} handleSearchTypes={handleSearchTypes} handleClickKey={handleClickKey} />
      )}
    </div>
  );
};

export default Docs;
