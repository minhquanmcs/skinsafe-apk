import equals from 'react-fast-compare';

export const onChangeAlias = (value: string | number): string => {
  let str = value + '';
  str = str.toLowerCase();
  str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, 'a');
  str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, 'e');
  str = str.replace(/ì|í|ị|ỉ|ĩ/g, 'i');
  str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, 'o');
  str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, 'u');
  str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, 'y');
  str = str.replace(/đ/g, 'd');
  str = str.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g, ' ');
  str = str.replace(/ + /g, ' ');
  str = str.replace(/\s/g, '');
  str = str.trim();
  return str;
};

export const onChangeAliasArr = (value: any[]) => {
  let newArr: any[] = [];
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  value.map((st, i) => {
    let str = st;
    str = str.title.toLowerCase();
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, 'a');
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, 'e');
    str = str.replace(/ì|í|ị|ỉ|ĩ/g, 'i');
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, 'o');
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, 'u');
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, 'y');
    str = str.replace(/đ/g, 'd');
    str = str.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g, ' ');
    str = str.replace(/ + /g, ' ');
    str = str.replace(/\s/g, '');
    str = str.trim();
    newArr.push(str);
  });
  return newArr;
};

export const replaceAll = (source: string = '', textReplace: string = '', textInstead: string = '') => {
  return source.split(textReplace).join(textInstead);
};

export const removeHtmlTag = (source: string = '') => {
  return source.replace(/<\/?[^>]+(>|$)/g, '');
};

export const compareValue = (val1: any, val2: any) => {
  return equals(val1, val2);
};

export const removeChar = (source: string = '') => {
  return source.replace(/[^0-9]/g, '');
};

export const getIdYoutube = (url: any) => {
  var ID: string | string[] = '';
  url = `${url}`.replace(/(>|<)/gi, '').split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
  if (url[2] !== undefined) {
    ID = url[2].split(/[^0-9a-z_\-]/i);
    ID = ID[0];
  } else {
    ID = url;
  }
  return ID + '';
};

export const intToString = (num: any) => {
  if (!num) return;
  num = num.toString().replace(/[^0-9.]/g, '');
  if (num < 1000) {
    return num;
  }
  let si = [
    { v: 1e3, s: 'K' },
    { v: 1e6, s: 'M' },
    { v: 1e9, s: 'B' },
    { v: 1e12, s: 'T' },
    { v: 1e15, s: 'P' },
    { v: 1e18, s: 'E' },
  ];
  let index;
  for (index = si.length - 1; index > 0; index--) {
    if (num >= si[index].v) {
      break;
    }
  }
  return (num / si[index].v).toFixed(2).replace(/\.0+$|(\.[0-9]*[1-9])0+$/, '$1') + si[index].s;
};

export const getImgYoutube = (id: string) => {
  return `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
};

export const convertDDMMYYYYToTimestamp = (date: string) => {
  if (!date) return '';
  const date1 = date?.toString().split('-');
  const newDate = date1?.[1] + '/' + date1?.[0] + '/' + date1?.[2];

  return Number(new Date(newDate));
};

const regex = /[?&]([^=#]+)=([^&#]*)/g;
export const parseUrl = (url: string) => {
  try {
    let params: any = {};
    let match;
    while ((match = regex.exec(url))) {
      params[match?.[1]] = match?.[2];
    }
    return params;
  } catch (error) {
    console.log('🚀 ~ file: index.ts ~ line 115 ~ parseUrl ~ error', error);
  }
};

export const convertQuantityToText = (qty: number) => {
  if (!qty) return '';
  const qtyString = qty.toString();
  if (qty < 1000) return qtyString;
  if (qty > 1000 && qty < 10000) return qtyString.substring(0, 1) + 'k' + qtyString.substring(1, 2) + '+';
  if (qty > 10000 && qty < 100000) return qtyString.substring(0, 2) + 'k+';
  return qtyString.substring(0, 3) + 'k+';
};
