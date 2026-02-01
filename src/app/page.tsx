import Home from "../components/Home/Home";
import styles from "./page.module.css";

const Page = () => {
  return (
    <div className={styles["page"]}>
      <Home />
    </div>
  );
};

export default Page;
