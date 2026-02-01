import styles from "./DetailsTabs.module.css";

interface DetailsTabsProps {
  activeTab: "features" | "reviews";
  onTabChange: (tab: "features" | "reviews") => void;
}

const DetailsTabs = ({ activeTab, onTabChange }: DetailsTabsProps) => {
  return (
    <div className={styles["container"]}>
      <div className={styles["tabs-nav"]}>
        <button
          type="button"
          className={`${styles["tab-button"]} ${activeTab === "features" ? styles["active"] : ""}`}
          onClick={() => onTabChange("features")}
        >
          Features
        </button>
        <button
          type="button"
          className={`${styles["tab-button"]} ${activeTab === "reviews" ? styles["active"] : ""}`}
          onClick={() => onTabChange("reviews")}
        >
          Reviews
        </button>
      </div>
      <hr className={styles["divider"]} />
    </div>
  );
};

export default DetailsTabs;
