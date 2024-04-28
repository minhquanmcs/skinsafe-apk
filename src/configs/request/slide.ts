import { API } from '../api';
import { GetListNearByShop } from '../params';

export const requestGetSlideHome = () => {
  return API.get('slide/home');
};

export const requestGetSlideNearByShop = ({ distance = 5, lat, lng }: GetListNearByShop) => {
  return API.get(`slide/getNearByShop?distance=${distance}&lat=${lat}&lng=${lng}`);
};
