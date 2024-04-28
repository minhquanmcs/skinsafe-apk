export const reverseFormatPrice = (price: string) => {
  return price?.toString().replace(/\./gi, '');
};

export function formatMoney(x: string) {
  x = reverseFormatPrice(x);
  let t = 0;
  x = x.replace(/[.]/g, (match) => (++t >= 2 ? '' : match));
  var parts = x.toString().split('.');
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  return parts.join(',');
}
export function numberWithCommas(x: string) {
  x = reverseFormatPrice(x);
  let t = 0;
  x = x.replace(/[.]/g, (match) => (++t >= 2 ? '' : match));
  var parts = x.toString().split(',');
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  return parts.join(',');
}
