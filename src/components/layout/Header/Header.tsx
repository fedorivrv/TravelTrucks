import Link from "next/link";
import styles from "./Header.module.css";
import { Container } from "../Container/Container";

export function Header() {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.inner}>
          <Link href="/" className={styles.logo}>
            TravelTrucks
          </Link>

          <nav className={styles.nav}>
            <Link href="/">Home</Link>
            <Link href="/catalog">Catalog</Link>
          </nav>
        </div>
      </Container>
    </header>
  );
}