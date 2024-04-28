import { API, GetPetDetailsParams, CreatePetParams, UpdatePetParams, GetPetParams } from '@configs';

export const requestGetListPet = ({ page = 1, size = 10 }: GetPetParams) => {
  return API.get(`pet?page=${page}&per_page=${size}`);
};
export const requestCreatePet = ({ formData }: CreatePetParams) => {
  return API.post('pet/create', formData);
};
export const requestUpdatePet = ({ id, formData }: UpdatePetParams) => {
  return API.post(`pet/update/${id}`, formData);
};
export const requestDeletePet = ({ id }: GetPetDetailsParams) => {
  return API.post(`pet/delete/${id}`, {});
};
export const requestGetDetailsPet = ({ id }: GetPetDetailsParams) => {
  return API.get(`pet/detail/${id}`);
};
export const requestGetSpecies = () => {
  return API.get(`pet/species`);
};
export const requestGetUseServicePet = ({ id }: GetPetDetailsParams) => {
  return API.get(`pet/useService?pet_id=${id}`);
};
