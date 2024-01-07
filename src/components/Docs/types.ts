export interface Schema {
  description: string | null;
  types: [Type];
  queryType: Type;
  mutationType: Type | null;
  subscriptionType: Type | null;
  directives: [Directive];
}

export interface Type {
  kind: TypeKind;
  name: string | null;
  description: string | null;
  fields: [Field] | null;
  interfaces: [Type] | null;
  possibleTypes: [Type] | null;
  enumValues: [EnumValue] | null;
  inputFields: [InputValue] | null;
  ofType: Type | null;
  specifiedByURL: string | null;
}

export interface InputValue {
  name: string;
  description: string | null;
  type: Type;
  defaultValue: string | null;
}

export interface EnumValue {
  name: string;
  description: string | null;
  isDeprecated: boolean;
  deprecationReason: string;
}

export interface Directive {
  name: string;
  description: string | null;
  locations: [DirectiveLocation];
  args: [InputValue];
  isRepeatable: boolean;
}

export enum DirectiveLocation {
  QUERY,
  MUTATION,
  SUBSCRIPTION,
  FIELD,
  FRAGMENT_DEFINITION,
  FRAGMENT_SPREAD,
  INLINE_FRAGMENT,
  VARIABLE_DEFINITION,
  SCHEMA,
  SCALAR,
  OBJECT,
  FIELD_DEFINITION,
  ARGUMENT_DEFINITION,
  INTERFACE,
  UNION,
  ENUM,
  ENUM_VALUE,
  INPUT_OBJECT,
  INPUT_FIELD_DEFINITION,
}

export interface Field {
  name: string;
  description: string | null;
  args: [InputValue];
  type: Type;
  isDeprecated: boolean;
  deprecationReason: string;
}

export enum TypeKind {
  SCALAR,
  OBJECT,
  INTERFACE,
  UNION,
  ENUM,
  INPUT_OBJECT,
  LIST,
  NON_NULL,
}
