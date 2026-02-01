"use client";

import Link from "next/link";
import styles from "./Logo.module.css";

const Logo = () => {
  return (
    <div className={styles["logo-container"]}>
      <Link href="/" aria-label="Home" className={styles["logo-link"]}>
        <svg width={136} height={16} className={styles["svg-logo"]}>
          <use href="/icons.svg#icon-logo"></use>
        </svg>
      </Link>
    </div>
  );
};

export default Logo;
