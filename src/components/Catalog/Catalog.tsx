"use client";

import { useEffect } from "react";
import { useCampersStore } from "@/store/useCampersStore";
import Card from "@/components/Catalog/Card/Card";
import Filters from "@/components/Catalog/Filters/Filters";
import Location from "@/components/Catalog/Location/Location";
import styles from "./Catalog.module.css";

const Catalog = () => {
  const { items, isLoading, getCampers, more } = useCampersStore();

  useEffect(() => {
    getCampers(false);
  }, []);

  const handleMore = () => {
    getCampers(true);
  };

  return (
    <section className={styles["catalog"]}>
      <aside className={styles["sidebar"]}>
        <Location />
        <Filters />
      </aside>

      <div className={styles["list-container"]}>
        {items.length > 0 && (
          <div className={styles["cards-grid"]}>
            {items.map((camper) => (
              <Card key={camper.id} camper={camper} />
            ))}
          </div>
        )}

        {isLoading && <div className={styles["loader"]}>Loading campers...</div>}

        {!isLoading && items.length === 0 && (
          <div className={styles["no-results"]}>
            <p>No campers found matching your filters.</p>
          </div>
        )}

        {!isLoading && more && items.length > 0 && (
          <button type="button" className={styles["more-btn"]} onClick={handleMore}>
            Load more
          </button>
        )}
      </div>
    </section>
  );
};

export default Catalog;
