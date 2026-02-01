"use client";

import Image from "next/image";
import { CamperProps, useCampersStore } from "@/store/useCampersStore";
import styles from "./Card.module.css";
import Link from "next/link";

const Card = ({ camper }: CamperProps) => {
  const { toggleFavorite, favorites } = useCampersStore();
  const isFavorite = favorites.includes(camper.id);

  return (
    <article className={styles["card"]}>
      <div className={styles["image-container"]}>
        {camper.gallery?.[0]?.thumb && (
          <Image src={camper.gallery[0].thumb} alt={camper.name} fill className={styles["image"]} />
        )}
      </div>

      <div className={styles["container"]}>
        <div className={styles["header"]}>
          <h2 className={styles["name"]}>{camper.name}</h2>
          <div className={styles["price-container"]}>
            <p className={styles["price"]}>€{camper.price.toFixed(2)}</p>
            <button
              className={`${styles["favorite-btn"]} ${isFavorite ? styles["active"] : ""}`}
              onClick={() => toggleFavorite(camper.id)}
            >
              <svg width={24} height={24} className={styles["heart-icon"]}>
                <use href="/icons.svg#icon-love"></use>
              </svg>
            </button>
          </div>
        </div>

        <div className={styles["stats"]}>
          <span className={styles["rating"]}>
            <svg width={16} height={16} className={styles["star-icon"]}>
              <use href="/icons.svg#icon-star"></use>
            </svg>
            {camper.rating}({camper.reviews?.length ?? 0} Reviews)
          </span>
          <span className={styles["location"]}>
            <svg width={16} height={16} className={styles["map-icon"]}>
              <use href="/icons.svg#icon-Map"></use>
            </svg>
            {camper.location}
          </span>
        </div>

        <p className={styles["description"]}>{camper.description}</p>

        <div className={styles["categories"]}>
          <span className={styles["badge"]}>
            <svg width={20} height={20} className={styles["badge-icon"]}>
              <use href="/icons.svg#icon-diagram"></use>
            </svg>
            {camper.transmission}
          </span>

          <span className={styles["badge"]}>
            <svg width={20} height={20} className={styles["badge-icon"]}>
              <use href="/icons.svg#icon-fuel-pump"></use>
            </svg>
            {camper.engine}
          </span>
          {camper.kitchen && (
            <span className={styles["badge"]}>
              <svg width={20} height={20} className={styles["badge-icon"]}>
                <use href="/icons.svg#icon-cup-hot"></use>
              </svg>
              Kitchen
            </span>
          )}
          {camper.AC && (
            <span className={styles["badge"]}>
              <svg width={20} height={20} className={styles["badge-icon"]}>
                <use href="/icons.svg#icon-wind"></use>
              </svg>
              AC
            </span>
          )}
          {camper.TV && (
            <span className={styles["badge"]}>
              <svg width={20} height={20} className={styles["badge-icon"]}>
                <use href="/icons.svg#icon-tv"></use>
              </svg>
              TV
            </span>
          )}
          {camper.bathroom && (
            <span className={styles["badge"]}>
              <svg width={20} height={20} className={styles["badge-icon"]}>
                <use href="/icons.svg#icon-shower"></use>
              </svg>
              bathroom
            </span>
          )}
        </div>
        <Link href={`/catalog/${camper.id}`}>
          <button type="button" className={styles["more-btn"]}>
            Show more
          </button>
        </Link>
      </div>
    </article>
  );
};

export default Card;
