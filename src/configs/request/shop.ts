import { API, FollowShopParams, GetDetailShopParams, GetListShopParams } from '@configs';

export const requestGetDetailShop = ({ id, user_id }: GetDetailShopParams) => {
  let url = `shop/detail/'${id}`;
  if (user_id) {
    url += `?user_id=${user_id}`;
  }
  return API.get(url);
};

export const requestGetListShop = (params: GetListShopParams) => {
  const { page = 1, per_page = 10, keyword, user_id, follow } = params;
  let url = `shop?page=${page}&per_page=${per_page}`;
  if (keyword) url += `&keyword=${keyword}`;
  if (user_id) url += `&user_id=${user_id}`;
  if (follow) url += `&follow=${follow}`;
  return API.get(url);
};

export const requestFollowShop = ({ shop_id }: FollowShopParams) => {
  return API.post('shop/follow', { shop_id });
};
