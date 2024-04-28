import { API, CreateOrderParams, GetDetailOrderParams, GetListOrderParams, UpdateStatusOderParams } from '@configs';

export const requestCreateOrder = (params: CreateOrderParams) => {
  return API.post('/order/create', params);
};

export const requestGetDetailOrder = ({ id }: GetDetailOrderParams) => {
  return API.get(`order/detail/${id}`);
};

export const requestGetListOrder = ({ status, type_product, page = 1, size = 10 }: GetListOrderParams) => {
  let url = `/order?status=${status}`;
  if (type_product) {
    url += `&type_product=${type_product}`;
  }
  return API.get(url + `&page=${page}&size=${size}`);
};

export const requestUpdateOrderStatus = (params: UpdateStatusOderParams) => {
  return API.post('/order/updateStatus', params);
};

export const requestGetStatistical = () => {
  return API.get('/order/statistical');
};
