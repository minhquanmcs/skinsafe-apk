import { IAppLanguage, IAppTheme } from '@configs';
import { RegisterOptions } from 'react-hook-form';

export interface Response<T = any> {
  data?: T;
  error?: T;
  code: number;
  status?: boolean;
  msg?: string | undefined | null;
}

export type ValidationMap<T = any, Keys extends keyof T = keyof T> = {
  [K in Keys]-?: RegisterOptions;
};

//  store
export interface IAppState {
  theme: IAppTheme;
  language: IAppLanguage;
}

export interface ICreateAppState {
  app: IAppState;
  actSetTheme: (val: IAppTheme) => void;
  actSetLanguage: (val: IAppLanguage) => void;
}

export interface ICreateBlackListState {
  blacklist: any;
  actSaveBlacklist: (val: any) => void;
}

interface IInfoLogin {
  phone: string;
  password: string;
}
export interface IAccountState {
  user: any;
  token: string | null;
  info: IInfoLogin | null;
  historySearch: any[];
  role: string;
}
export interface ICreateAccountState {
  account: IAccountState;
  actRemoveLoggerUser: () => void;
  actSaveHistorySearch: (data: any) => void;
  actRemoveHistorySearch: (data: any) => void;
  actSaveLoggerUser: (data: IAccountState) => void;
  actSaveInfoLogin: (data: IInfoLogin | null) => void;
}

export interface IAddressState {
  listAddress: any[];
}

export interface ISlideState {
  slideHome: any[];
}

export interface ICreateSlideState {
  slide: ISlideState;
  actSaveSlideHome: (data: any) => void;
}
// export interface OTPParams {
//   phone: string | number;
// }
// export interface ChangePasswordParams {
//   phone: string | number;
//   old_password: string;
//   new_password: string;
//   confirm_password: string;
// }
// export interface UpdateProfileParams {
//   phone: string | number;
//   username: string;
//   email: string;
//   fullname: string;
//   birthday: string;
//   passport: string;
//   gender: string;
// }
export interface ICreateAddressState {
  address: IAddressState;
  actSaveListAddress: (data: any[]) => void;
}

// pet
export interface IPetState {
  listPet: any[];
  detailsPet: any;
  species: any[];
}
export interface ICreatePetState {
  pet: IPetState;
  actSaveListPet: (data: any[]) => void;
  actSaveDetailsPet: (data: any) => void;
  actSaveSpeciesPet: (data: any) => void;
  actUpdatePet: (data: any) => void;
  actDeletePet: (data: any) => void;
}
