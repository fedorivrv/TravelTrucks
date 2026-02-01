"use client";
import { useFilterStore } from "@/store/useFilterStore";
import { CamperFilters, useCampersStore } from "@/store/useCampersStore";
import styles from "./Filters.module.css";
import { EQUIPMENT_MAP } from "@/constants/constants";

const Filters = () => {
  const { location, equipment, form, toggleEquipment, setForm } = useFilterStore();

  const { getCampers } = useCampersStore();

  const handleSearch = () => {
  const params: CamperFilters = {};

  if (location?.trim()) {
    params.location = location.trim();
  }

  if (form) {
    params.form = form;
  }

  equipment.forEach((item) => {
    const key = EQUIPMENT_MAP[item];
    if (!key) return;

    if (key === "transmission") {
      params.transmission = "automatic";
    } else {
      params[key] = "true";
    }
  });

  getCampers(false, params);
};

  return (
    <div className={styles["filters-container"]}>
      <p className={styles["filters-title"]}>Filters</p>

      <div className={styles["filter-section"]}>
        <h3 className={styles["section-title"]}>Vehicle equipment</h3>
        <hr className={styles["divider"]} />
        <div className={styles["options-grid"]}>
          {[
            { id: "AC", label: "AC", icon: "wind" },
            { id: "automatic", label: "Automatic", icon: "diagram" },
            { id: "kitchen", label: "Kitchen", icon: "cup-hot" },
            { id: "TV", label: "TV", icon: "tv" },
            { id: "bathroom", label: "Bathroom", icon: "shower" },
            { id: "radio", label: "Radio", icon: "radio" },
            { id: "refrigerator", label: "Refrigerator", icon: "fridge" },
            {
              id: "microwave",
              label: "Microwave",
              icon: "microwave",
              isFillNone: true,
            },
            { id: "gas", label: "Gas", icon: "gas", isFillNone: true },
          ].map((item) => (
            <button
              key={item.id}
              type="button"
              className={`${styles["option-card"]} ${
                equipment.includes(item.id) ? styles["active"] : ""
              }`}
              onClick={() => toggleEquipment(item.id)}
            >
              <svg
                width={32}
                height={32}
                className={`${styles["icon"]} ${item.isFillNone ? styles["fill-none"] : ""}`}
              >
                <use href={`/icons.svg#icon-${item.icon}`}></use>
              </svg>
              <span>{item.label}</span>
            </button>
          ))}
        </div>
      </div>

      <div className={styles["filter-section"]}>
        <h3 className={styles["section-title"]}>Vehicle type</h3>
        <hr className={styles["divider"]} />
        <div className={styles["options-grid"]}>
          {[
            { id: "panelTruck", label: "Van", icon: "grid-1x2" },
            {
              id: "fullyIntegrated",
              label: "Fully Integrated",
              icon: "grid-3x3",
            },
            { id: "alcove", label: "Alcove", icon: "grid" },
          ].map((type) => (
            <button
              key={type.id}
              type="button"
              className={`${styles["option-card"]} ${form === type.id ? styles["active"] : ""}`}
              onClick={() => setForm(type.id)}
            >
              <svg width={32} height={32} className={styles["icon"]}>
                <use href={`/icons.svg#icon-${type.icon}`}></use>
              </svg>
              <span>{type.label}</span>
            </button>
          ))}
        </div>
      </div>

      <button className={styles["search-btn"]} type="button" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
};

export default Filters;
