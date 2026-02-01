import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import axios from "axios";
import { Camper } from "@/types/camper";

const API_URL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers";

export interface CamperFilters {
  location?: string;
  form?: string;
  transmission?: string;
  AC?: "true";
  kitchen?: "true";
  TV?: "true";
  bathroom?: "true";
  radio?: "true";
  refrigerator?: "true";
  microwave?: "true";
  gas?: "true";
}

export interface CamperProps {
  camper: Camper;
}

interface CampersState {
  items: Camper[];
  currentCamper: Camper | null;
  isLoading: boolean;
  page: number;
  limit: number;
  more: boolean;
  currentFilters: CamperFilters;
  favorites: string[];

  getCampers: (isNextPage?: boolean, filters?: CamperFilters) => Promise<void>;
  getCamperById: (id: string) => Promise<void>;
  toggleFavorite: (id: string) => void;
  resetItems: () => void;
}

export const useCampersStore = create<CampersState>()(
  persist(
    (set, get) => ({
      items: [],
      currentCamper: null,
      isLoading: false,
      page: 1,
      limit: 4,
      more: true,
      currentFilters: {},
      favorites: [],

      resetItems: () => set({ items: [], page: 1, more: true, currentFilters: {} }),

      getCampers: async (isNextPage = false, filters = {}) => {
        set({ isLoading: true });

        const state = get();
        const page = isNextPage ? state.page + 1 : 1;
        const activeFilters = isNextPage ? state.currentFilters : filters;

        if (!isNextPage) {
          set({ items: [], page: 1, more: true });
        }

        try {
          const response = await axios.get(API_URL, {
            params: {
              page,
              limit: state.limit,
              ...activeFilters,
            },
          });

          const data = response.data;
          const newItems = Array.isArray(data) ? data : data.items || [];

          set({
            items: isNextPage ? [...state.items, ...newItems] : newItems,
            page,
            currentFilters: activeFilters,
            more: newItems.length === state.limit,
            isLoading: false,
          });
        } catch (error: unknown) {
          if (axios.isAxiosError(error) && error.response?.status === 404) {
            set({
              items: isNextPage ? state.items : [],
              more: false,
              isLoading: false,
            });
          } else {
            console.error("Fetch error:", error);
            set({ isLoading: false, more: false });
          }
        }
      },

      getCamperById: async (id: string) => {
        set({ isLoading: true, currentCamper: null });

        try {
          const response = await axios.get(`${API_URL}/${id}`);
          set({ currentCamper: response.data, isLoading: false });
        } catch (error) {
          console.error("Fetch camper error:", error);
          set({ isLoading: false });
        }
      },

      toggleFavorite: (id) => {
        const { favorites } = get();
        const updated = favorites.includes(id)
          ? favorites.filter((f) => f !== id)
          : [...favorites, id];

        set({ favorites: updated });
      },
    }),
    {
      name: "campers-favorites",
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({ favorites: state.favorites }),
    },
  ),
);
