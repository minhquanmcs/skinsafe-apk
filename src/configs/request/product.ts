import {
  API,
  AddFavoriteParams,
  GetListProductParams,
  RemoveFavoriteParams,
  GetDetailProductParams,
  GetListBoughtProductParams,
  GetListWatchedProductParams,
  GetListFavoriteProductParams,
} from '@configs';

export const requestGetListFavorite = ({ page = 1, per_page = 10, type }: GetListFavoriteProductParams) => {
  let url = `product/favorite?page=${page}&per_page=${per_page}`;
  if (type) {
    url += `&type=${type}`;
  }
  return API.get(url);
};

export const requestGetListWatched = ({ user_id, page, per_page, type, shop_id }: GetListWatchedProductParams) => {
  let url = `product/watched?page=${page}&per_page=${per_page}`;
  if (user_id) {
    url += `&user_id=${user_id}`;
  }
  if (type) {
    url += `&type=${type}`;
  }
  if (shop_id) {
    url += `&shop_id=${shop_id}`;
  }
  return API.get(url);
};

export const requestGetListBought = ({ page, per_page }: GetListBoughtProductParams) => {
  return API.get(`product/bought?page=${page}&per_page=${per_page}`);
};

export const requestGetListProduct = (params: GetListProductParams) => {
  const {
    lang_id = 1,
    category_id,
    keyword,
    page = 1,
    per_page = 18,
    sort,
    shop_id,
    user_id,
    nation_id,
    price_sale,
    is_auth,
    price_from,
    price_to,
    type,
    random,
  } = params;
  let url: string = `product?lang_id=${lang_id}&page=${page}&per_page=${per_page}`;
  if (category_id) {
    url += `&category_id=${category_id}`;
  }
  if (keyword) {
    url += `&keyword=${keyword}`;
  }
  if (sort) {
    url += `&sort=${sort}`;
  }
  if (user_id) {
    url += `&user_id=${user_id}`;
  }
  if (shop_id) {
    url += `&shop_id=${shop_id}`;
  }
  if (nation_id) {
    url += `&nation_id=${nation_id}`;
  }
  if (price_sale) {
    url += `&price_sale=${price_sale}`;
  }
  if (is_auth) {
    url += `&is_auth=${is_auth}`;
  }
  if (price_from) {
    url += `&price_from=${price_from}`;
  }
  if (price_to) {
    url += `&price_to=${price_to}`;
  }
  if (type) {
    url += `&type=${type}`;
  }
  if (random) {
    url += `&random=${random}`;
  }
  return API.get(url);
};

export const requestGetDetailProduct = ({ id, user_id }: GetDetailProductParams) => {
  let url = `product/detail/${id}?`;
  if (user_id) {
    url += `user_id=${user_id}`;
  }
  return API.get(url);
};

export const requestAddFavoriteProduct = (params: AddFavoriteParams) => {
  return API.post(`product/addFavorite`, params);
};

export const requestRemoveFavoriteProduct = (params: RemoveFavoriteParams) => {
  return API.post(`product/removeFavorite`, params);
};
