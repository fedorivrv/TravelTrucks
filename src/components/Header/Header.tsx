import styles from "./Header.module.css";
import Logo from "./Logo/Logo";
import Nav from "./Nav/Nav";

const Header = () => {
  return (
    <header className={styles["header"]}>
      <div className={styles["header-content"]}>
        <Logo />
        <Nav />
      </div>
    </header>
  );
};

export default Header;
