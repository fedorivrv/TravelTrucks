"use client";

import { useFilterStore } from "@/store/useFilterStore";
import styles from "./Location.module.css";

const Location = () => {
  const { location, setLocation } = useFilterStore();
  return (
    <div className={styles["location-container"]}>
      <label htmlFor="location" className={styles["label"]}>
        Location
      </label>
      <div className={styles["input-container"]}>
        <input
          id="location"
          type="text"
          name="location"
          placeholder="City, Country"
          className={styles["input"]}
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <svg width={20} height={20} className={styles["icon-location"]}>
          <use href="/icons.svg#icon-Map"></use>
        </svg>
      </div>
    </div>
  );
};

export default Location;
