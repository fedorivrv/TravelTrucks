import { CamperFilters } from "@/store/useCampersStore";

export const EQUIPMENT_MAP: Record<string, keyof CamperFilters> = {
  automatic: "transmission",
  AC: "AC",
  kitchen: "kitchen",
  TV: "TV",
  bathroom: "bathroom",
  radio: "radio",
  refrigerator: "refrigerator",
  microwave: "microwave",
  gas: "gas",
};
