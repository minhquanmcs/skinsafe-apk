import {
  API,
  GetWardParams,
  GetDistrictParams,
  DeleteAddressParams,
  UpdateAddressParams,
  CreateNewAddressParams,
  UpdateDefaultAddressParams,
} from '@configs';

export const requestGetListAddress = () => {
  return API.get('address');
};

export const requestAddNewAddress = (params: CreateNewAddressParams) => {
  return API.post('address/add', params);
};

export const requestUpdateAddress = (params: UpdateAddressParams) => {
  const { id, ...rest } = params;
  return API.post(`address/update/${id}`, { ...rest });
};

export const requestDeleteAddress = (params: DeleteAddressParams) => {
  return API.post(`address/delete`, params);
};

export const requestUpdateDefaultAddress = (params: UpdateDefaultAddressParams) => {
  return API.post(`address/default`, params);
};

export const requestGetProvince = () => {
  return API.get('address/province');
};

export const requestGetDistrict = ({ province_id }: GetDistrictParams) => {
  return API.get(`address/district?province_id=${province_id}`);
};

export const requestGetWard = ({ district_id }: GetWardParams) => {
  return API.get(`address/ward?district_id=${district_id}`);
};
