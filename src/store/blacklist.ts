import { StoreSlice } from '.';
import { ICreateBlackListState } from '@configs';

const initBlacklistState = {};

export const createBlacklistSlice: StoreSlice<ICreateBlackListState> = (set) => ({
  blacklist: initBlacklistState,

  actSaveBlacklist: (val) => {
    set((prev: any) => ({ ...prev, blacklist: { ...prev.blacklist, ...val } }));
  },
});
