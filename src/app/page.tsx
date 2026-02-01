import Home from "../components/Home/Home";
import css from "./page.module.css";

const Page = () => {
  return (
    <div className={css["page"]}>
      <Home />
    </div>
  );
};

export default Page;
