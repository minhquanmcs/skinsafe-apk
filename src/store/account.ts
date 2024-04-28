import { StoreSlice } from '@store';
import { IAccountState, ICreateAccountState } from '@configs';

export const initAccountState: IAccountState = {
  user: {},
  info: null,
  token: null,
  historySearch: [],
  role: '',
};

export const createAccountSlice: StoreSlice<ICreateAccountState> = (set, get) => ({
  account: initAccountState,
  actSaveLoggerUser: (data) => {
    set((prev: any) => ({
      ...prev,
      account: {
        user: data?.user,
        historySearch: [],
        info: prev.account.info,
        token: data?.token || prev.account.token,
      },
    }));
  },
  actRemoveLoggerUser: () => {
    set((prev: any) => ({
      ...prev,
      account: {
        user: {},
        token: null,
        historySearch: [],
        info: prev.account.info,
      },
      address: {
        listAddress: [],
      },
    }));
  },
  actSaveInfoLogin: (data) => {
    set((prev: any) => ({
      ...prev,
      account: {
        ...prev.account,
        info: data,
      },
    }));
  },
  actSaveHistorySearch: (data) => {
    set((prev: any) => ({
      ...prev,
      account: {
        ...prev.account,
        historySearch: [...prev.account.historySearch, data],
      },
    }));
  },
  actRemoveHistorySearch: (data) => {
    set((prev: any) => ({
      ...prev,
      account: {
        ...prev.account,
        historySearch: prev.account.historySearch.filter((x: any) => x?.id !== data?.id),
      },
    }));
  },
  actSaveRole: (data) => {
    set((prev: any) => ({
      ...prev,
      account: {
        ...prev.account,
        role: data.role,
      },
    }));
  },
});
