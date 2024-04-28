import { API, GetListVoucherParams } from '@configs';

export const requestGetListVoucher = ({ page = 1, per_page = 10, is_admin }: GetListVoucherParams) => {
  let url = `/voucher?page=${page}&per_page=${per_page}`;
  if (is_admin) {
    url += `&is_admin=${is_admin}`;
  }
  return API.get(url);
};
