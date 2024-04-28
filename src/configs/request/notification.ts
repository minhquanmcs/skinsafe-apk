import { API, GetDetailNotificationParams, GetListNotificationParams } from '@configs';

export const requestGetListNotification = ({ user_id, page, per_page = 10 }: GetListNotificationParams) => {
  return API.get(`notification?user_id=${user_id}&page=${page}&per_page=${per_page}`);
};

export const requestGetDetailNotification = ({ id }: GetDetailNotificationParams) => {
  return API.get(`notification/detail/${id}`);
};
