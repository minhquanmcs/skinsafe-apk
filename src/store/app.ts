import { StoreSlice } from '.';
import { IAppState, ICreateAppState } from '@configs';

export const initAppState: IAppState = {
  language: 'vi',
  theme: 'light',
};

export const createAppSlice: StoreSlice<ICreateAppState> = (set) => ({
  app: initAppState,
  actSetTheme: (val) => {
    if (val) {
      set((prev: any) => ({ ...prev, app: { ...prev.app, theme: val } }));
    }
  },
  actSetLanguage: (val) => {
    if (val) {
      set((prev: any) => ({ ...prev, app: { ...prev.app, language: val } }));
    }
  },
});
