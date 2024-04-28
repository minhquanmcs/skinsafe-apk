import { API, UpdateProfileParams, ChangePasswordParams } from '@configs';

export const requestChangePassword = (params: ChangePasswordParams) => {
  return API.post('/user/updatePassword', params);
};
export const requestUpdateProfile = (params: UpdateProfileParams) => {
  return API.post('/user/updateProfile', params);
};
export const requestUpdateAvatar = (formData: FormData) => {
  return API.post('/user/updateAvatar', formData);
};
export const requestGetUserInfo = () => {
  return API.get('/user', {});
};
