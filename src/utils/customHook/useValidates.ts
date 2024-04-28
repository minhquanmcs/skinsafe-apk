import { useMemo } from 'react';
import { ValidationMap } from '@configs';

export type FormValue = {
  email: string;
  phone: string;
  address: string;
  password: string;
  username: string;
  full_name: string;
  re_password: string;
  old_password: string;
  country: string;
  nickname: string;
  passport: string;
  birthday: string;
  gender: string;
  description: string;
  pet_name: string;
  pet_weight: string;
};

export function useValidateForm(getValues: Function) {
  const rules = useMemo(
    () =>
      ({
        email: {
          required: { value: true, message: 'Trường bắt buộc' },
          maxLength: { value: 200, message: 'Tối đa 200 ký tự' },
          pattern: {
            value: /^[a-z][a-z0-9_\.]{5,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$/,
            message: 'Email không đúng định dạng',
          },
        },
        username: {
          required: { value: true, message: 'Trường bắt buộc' },
        },
        full_name: {
          required: { value: true, message: 'Trường bắt buộc' },
          maxLength: { value: 50, message: 'Tối đa 50 ký tự' },
        },
        password: {
          required: { value: true, message: 'Trường bắt buộc' },
          maxLength: { value: 200, message: 'Tối đa 200 ký tự' },
          minLength: { value: 8, message: 'Tối thiểu 8 ký tự' },
          // pattern: {
          //   value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
          //   message: 'Mật khẩu chứa ít nhất 8 ký tự, 1 chữ cái viết hoa, 1 chữ thường, 1 chữ số và 1 ký tự đặc biệt',
          // },
          validate: (val: any) => val !== getValues().old_password || 'Trùng mật khẩu cũ',
        },
        old_password: {
          required: { value: true, message: 'Trường bắt buộc' },
          maxLength: { value: 200, message: 'Tối đa 200 ký tự' },
          minLength: { value: 8, message: 'Tối thiểu 8 ký tự' },
          // pattern: {
          //   value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
          //   message: 'Mật khẩu chứa ít nhất 8 ký tự, 1 chữ cái viết hoa, 1 chữ thường, 1 chữ số và 1 ký tự đặc biệt',
          // },
        },
        re_password: {
          required: { value: true, message: 'Trường bắt buộc' },
          maxLength: { value: 200, message: 'Tối đa 200 ký tự' },
          minLength: { value: 8, message: 'Tối thiểu 8 ký tự' },
          // pattern: {
          //   value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
          //   message: 'Mật khẩu chứa ít nhất 8 ký tự, 1 chữ cái viết hoa, 1 chữ thường, 1 chữ số và 1 ký tự đặc biệt',
          // },
          validate: (val: any) => val === getValues().password || 'Mật khẩu nhập lại không khớp',
        },
        phone: {
          required: { value: true, message: 'Trường bắt buộc' },
          pattern: {
            value: /^[0][0-9]{9}$/,
            message: 'Số điện thoại không đúng định dạng',
          },
        },
        country: {},
        nickname: {},
        address: {
          required: { value: true, message: 'Trường bắt buộc' },
        },
        passport: {},
        birthday: {},
        gender: {},
        pet_name: { required: { value: true, message: 'Trường bắt buộc' } },
        pet_weight: {
          required: { value: true, message: 'Trường bắt buộc' },
          pattern: {
            value: /^[1-9]\d*(\.\d+)?$/,
            message: 'Cân nặng không đúng định dạng',
          },
        },
      } as ValidationMap<FormValue>),
    [getValues],
  );

  return { rules };
}
