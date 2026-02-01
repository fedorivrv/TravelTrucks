import { CamperProps } from "@/store/useCampersStore";
import styles from "./FeaturesForm.module.css";

const Features = ({ camper }: CamperProps) => {
  return (
    <div className={styles["global-container"]}>
      <div className={styles["container"]}>
        <div className={styles["badges-grid"]}>
          <span className={styles["badge"]}>
            <svg width={20} height={20}>
              <use href="/icons.svg#icon-diagram"></use>
            </svg>
            {camper.transmission}
          </span>
          <span className={styles["badge"]}>
            <svg width={20} height={20}>
              <use href="/icons.svg#icon-fuel-pump"></use>
            </svg>
            {camper.engine}
          </span>

          {camper.AC && (
            <span className={styles["badge"]}>
              <svg width={20} height={20}>
                <use href="/icons.svg#icon-wind"></use>
              </svg>
              AC
            </span>
          )}
          {camper.bathroom && (
            <span className={styles["badge"]}>
              <svg width={20} height={20}>
                <use href="/icons.svg#icon-shower"></use>
              </svg>
              Bathroom
            </span>
          )}
          {camper.kitchen && (
            <span className={styles["badge"]}>
              <svg width={20} height={20}>
                <use href="/icons.svg#icon-cup-hot"></use>
              </svg>
              Kitchen
            </span>
          )}
          {camper.TV && (
            <span className={styles["badge"]}>
              <svg width={20} height={20}>
                <use href="/icons.svg#icon-tv"></use>
              </svg>
              TV
            </span>
          )}
          {camper.radio && (
            <span className={styles["badge"]}>
              <svg width={20} height={20}>
                <use href="/icons.svg#icon-radio"></use>
              </svg>
              Radio
            </span>
          )}
          {camper.refrigerator && (
            <span className={styles["badge-fill"]}>
              <svg width={20} height={20}>
                <use href="/icons.svg#icon-fridge"></use>
              </svg>
              Refrigerator
            </span>
          )}
          {camper.microwave && (
            <span className={styles["badge-fill"]}>
              <svg width={20} height={20}>
                <use href="/icons.svg#icon-microwave"></use>
              </svg>
              Microwave
            </span>
          )}
          {camper.gas && (
            <span className={styles["badge-fill"]}>
              <svg width={20} height={20}>
                <use href="/icons.svg#icon-gas"></use>
              </svg>
              Gas
            </span>
          )}
          {camper.water && (
            <span className={styles["badge-fill"]}>
              <svg width={20} height={20}>
                <use href="/icons.svg#icon-water"></use>
              </svg>
              Water
            </span>
          )}
        </div>

        <div className={styles["details-section"]}>
          <h3 className={styles["title"]}>Vehicle details</h3>
          <hr className={styles["divider"]} />
          <ul className={styles["details-list"]}>
            <li className={styles["detail-item"]}>
              <span>Form</span>
              <span className={styles["value"]}>{camper.form}</span>
            </li>
            <li className={styles["detail-item"]}>
              <span>Length</span>
              <span className={styles["value"]}>{camper.length}</span>
            </li>
            <li className={styles["detail-item"]}>
              <span>Width</span>
              <span className={styles["value"]}>{camper.width}</span>
            </li>
            <li className={styles["detail-item"]}>
              <span>Height</span>
              <span className={styles["value"]}>{camper.height}</span>
            </li>
            <li className={styles["detail-item"]}>
              <span>Tank</span>
              <span className={styles["value"]}>{camper.tank}</span>
            </li>
            <li className={styles["detail-item"]}>
              <span>Consumption</span>
              <span className={styles["value"]}>{camper.consumption}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Features;
