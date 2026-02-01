import { create } from 'zustand';

interface FilterState {
  location: string;
  equipment: string[];
  form: string;
  setLocation: (city: string) => void;
  toggleEquipment: (item: string) => void;
  setForm: (type: string) => void;
  resetFilters: () => void;
}

export const useFilterStore = create<FilterState>((set) => ({
  location: '',
  equipment: [],
  form: '',

  setLocation: (location) => set({ location }),

  toggleEquipment: (item) =>
    set((state) => ({
      equipment: state.equipment.includes(item)
        ? state.equipment.filter((i) => i !== item)
        : [...state.equipment, item],
    })),

  setForm: (form) =>
    set((state) => ({
      form: state.form === form ? '' : form,
    })),

  resetFilters: () => set({ location: '', equipment: [], form: '' }),
}));