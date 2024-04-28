export function currencyFormat(num: number | string, suffix?: string, hiddenSuffix?: boolean) {
  if (!suffix && !hiddenSuffix) suffix = 'đ';

  if (!num) return '0' + suffix;
  const number = +num;
  return '' + number.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') + suffix;
}
export function currencyFormatWit(num: number | string, suffix?: string) {
  if (!suffix) suffix = 'đ';

  if (!num) return '0' + suffix;
  const number = +num;
  return '' + number.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') + suffix;
}
export function convertToMoneyText(number: string, short?: boolean) {
  if (number === undefined) return '';

  try {
    if (short) {
      number = number.slice(0, -6);
      let million = number.substring(number.length - 3);
      million = million === '000' ? '' : `${Number(million)}`;
      let billon = number.slice(0, -3);
      billon = billon === '' ? '' : `${billon},`;
      const result = `${billon}${million} tỷ`;
      return result;
    } else {
      number = number.slice(0, -6);
      let million = number.substring(number.length - 3);
      million = million === '000' ? '' : `${Number(million)} triệu`;
      let billon = number.slice(0, -3);
      billon = billon === '' ? '' : `${billon} tỷ `;
      const result = `${billon}${million}`;
      return result;
    }
  } catch (error) {
    return '0 tỷ';
  }
}
