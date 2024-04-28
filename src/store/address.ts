import { StoreSlice } from '.';
import { IAddressState, ICreateAddressState } from '@configs';

export const initAddressState: IAddressState = {
  listAddress: [],
};

export const createAddressSlice: StoreSlice<ICreateAddressState> = (set) => ({
  address: initAddressState,

  actSaveListAddress: (val) => {
    if (Array.isArray(val)) {
      set((prev: any) => ({ ...prev, address: { ...prev.address, listAddress: val } }));
    }
  },
});
