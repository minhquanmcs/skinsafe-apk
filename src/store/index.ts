import create from 'zustand';
import createVanilla from 'zustand/vanilla';
import { persist } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { createAppSlice } from './app';
import { createPetSlice } from './pet';
import { createSlideSlice } from './slide';
import { createAddressSlice } from './address';
import { createAccountSlice } from './account';
import { createBlacklistSlice } from './blacklist';
import {
  ICreateAppState,
  ICreatePetState,
  ICreateSlideState,
  ICreateAccountState,
  ICreateAddressState,
  ICreateBlackListState,
} from '@configs';

export * from './app';

export type StoreSlice<T> = (set: (val: any) => void, get: (val: any) => void) => T;
export type StoreState = ICreateAppState &
  ICreateBlackListState &
  ICreateAccountState &
  ICreateAddressState &
  ICreatePetState &
  ICreateSlideState;

export const storeVanilla = createVanilla(
  persist(
    (set, get) => ({
      ...createAppSlice(set, get),
      ...createAddressSlice(set, get),
      ...createAccountSlice(set, get),
      ...createPetSlice(set, get),
      ...createSlideSlice(set, get),
      ...createBlacklistSlice(set, get), //state only use like global state, don't have been save in local storage
    }),
    {
      name: 'Pet-Shop',
      getStorage: () => AsyncStorage,
      partialize: (state: StoreState) => ({
        app: state.app,
        pet: state.pet,
        slide: state.slide,
        account: state.account,
        address: state.address,
      }),
    },
  ),
);

export const useAppStore = create(storeVanilla);
