type TypesBase = 'bigint' | 'boolean' | 'function' | 'number' | 'object' | 'string' | 'symbol' | 'undefined';

export const checkType = (source: any, type: TypesBase) => {
  return typeof source === type;
};
