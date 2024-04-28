import isEmpty from 'lodash/isEmpty';

import { StoreSlice } from '.';
import { ICreateSlideState, ISlideState } from '@configs';

export const initSlideState: ISlideState = {
  slideHome: [],
};

export const createSlideSlice: StoreSlice<ICreateSlideState> = (set) => ({
  slide: initSlideState,

  actSaveSlideHome: (val) => {
    if (!isEmpty(val)) {
      set((prev: any) => ({ ...prev, slide: { ...prev.slide, slideHome: val } }));
    }
  },
});
