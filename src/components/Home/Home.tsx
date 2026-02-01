"use client";
import Link from "next/link";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <section className={styles.home}>
      <div className={styles["home-content"]}>
        <div className={styles["container-text"]}>
          <h1 className={styles["h1-text"]}>Campers of your dreams</h1>
          <p className={styles["p-text"]}>You can find everything you want in our catalog</p>
        </div>
        <Link href="/catalog" className={styles["btn"]}>
          View Now
        </Link>
      </div>
    </section>
  );
};

export default Home;
