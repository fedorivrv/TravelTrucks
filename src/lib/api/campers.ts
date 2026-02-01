import { api } from "./axios";
import type { Camper, CampersResponse } from "../../types/camper";

export type CampersQuery = {
  page?: number;
  limit?: number;
  location?: string;
  form?: string;
  AC?: boolean;
  kitchen?: boolean;
  bathroom?: boolean;
  TV?: boolean;
  radio?: boolean;
  refrigerator?: boolean;
  microwave?: boolean;
  gas?: boolean;
  water?: boolean;
};

export async function getCampers(params: CampersQuery) {
  const { data } = await api.get<CampersResponse>("/campers", { params });
  return data;
}

export async function getCamperById(id: string) {
  const { data } = await api.get<Camper>(`/campers/${id}`);
  return data;
}
