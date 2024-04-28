import { StoreSlice } from '@store';
import { IPetState, ICreatePetState } from '@configs';

export const initPetState: IPetState = {
  listPet: [],
  detailsPet: {},
  species: [],
};

export const createPetSlice: StoreSlice<ICreatePetState> = (set, get) => ({
  pet: initPetState,
  actSaveListPet: (data) => {
    set((prev: any) => ({
      ...prev,
      pet: {
        listPet: data,
        detailsPet: prev.pet.detailsPet,
        species: prev.pet.species,
      },
    }));
  },
  actSaveDetailsPet: (data) => {
    set((prev: any) => ({
      ...prev,
      pet: {
        listPet: prev.pet.listPet,
        detailsPet: data,
        species: prev.pet.species,
      },
    }));
  },
  actSaveSpeciesPet(data) {
    set((prev: any) => ({
      ...prev,
      pet: {
        listPet: prev.pet.listPet,
        detailsPet: prev.pet.detailsPet,
        species: data,
      },
    }));
  },
  actUpdatePet(data) {
    set((prev: any) => ({
      ...prev,
      pet: {
        listPet: prev.pet.listPet.map((x: any) => {
          if (x?.id === data?.id) {
            return data;
          }
          return x;
        }),
        detailsPet: prev.pet.detailsPet,
        species: data,
      },
    }));
  },
  actDeletePet(data) {
    set((prev: any) => ({
      ...prev,
      pet: {
        listPet: prev.pet.listPet.filter((x: any) => x?.id !== data?.id),
        detailsPet: prev.pet.detailsPet,
        species: data,
      },
    }));
  },
});
