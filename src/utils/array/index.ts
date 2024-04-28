import { onChangeAlias } from '../string';

export const onSearchAllProperties = (source: Array<any>, textSearch: string | number): Array<any> => {
  if (!Array.isArray(source)) return [];
  return source.filter((x) => {
    return Object.keys(x).some(function (key) {
      return onChangeAlias(x[key]).search(onChangeAlias(textSearch)) !== -1;
    });
  });
};

export const onCheckArray = (source: any) => {
  if (Array.isArray(source)) {
    return source;
  }
  return [];
};

//fake a item in end of array if length is odd
export const fakeItemInOddArray = (source: any[]) => {
  if (!Array.isArray(source)) {
    return [];
  }
  if (source.length % 3 === 0 || source.length % 3 === 1) {
    return source;
  } else {
    return [...source, { stt: 'empty' }];
  }
};
