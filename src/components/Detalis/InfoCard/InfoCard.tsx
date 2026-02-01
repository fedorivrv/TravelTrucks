import Image from "next/image";
import styles from "./InfoCard.module.css";
import type { Camper } from "@/types/camper";

interface InfoCardProps {
  camper: Camper;
}

const InfoCard = ({ camper }: InfoCardProps) => {
  const reviewsCount = camper.reviews?.length ?? 0;
  const gallery = camper.gallery ?? [];

  return (
    <div className={styles["container"]}>
      <h2 className={styles["name"]}>{camper.name}</h2>

      <div className={styles["stats"]}>
        <div className={styles["rating-container"]}>
          <svg width={16} height={16} className={styles["star-icon"]}>
            <use href="/icons.svg#icon-star"></use>
          </svg>

          <span className={styles["rating-text"]}>
            {camper.rating} ({reviewsCount} Reviews)
          </span>
        </div>

        <div className={styles["location-container"]}>
          <svg width={16} height={16} className={styles["map-icon"]}>
            <use href="/icons.svg#icon-Map"></use>
          </svg>
          <span>{camper.location}</span>
        </div>
      </div>

      <p className={styles["price"]}>€{camper.price.toFixed(2)}</p>

      {gallery.length > 0 && (
        <div className={styles["gallery"]}>
          {gallery.map((img, index) => (
            <div key={index} className={styles["image-container"]}>
              <Image
                src={img.original}
                alt={`${camper.name} view ${index + 1}`}
                fill
                className={styles["image"]}
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
          ))}
        </div>
      )}

      <p className={styles["description"]}>{camper.description}</p>
    </div>
  );
};

export default InfoCard;