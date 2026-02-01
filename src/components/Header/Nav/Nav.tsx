"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Nav.module.css";

const Nav = () => {
  const pathname = usePathname();

  return (
    <nav className={styles["nav-conteiner"]}>
      <ul className={styles["nav-list"]}>
        <li>
          <Link
            href="/"
            className={`${styles["nav-link"]} ${pathname === "/" ? styles.active : ""}`}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/catalog"
            className={`${styles["nav-link"]} ${pathname === "/catalog" ? styles.active : ""}`}
          >
            Catalog
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
