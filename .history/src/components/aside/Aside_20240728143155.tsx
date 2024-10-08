import Category from "../category/Category";
import styles from "./aside.module.css";

const Aside = () => {
  return (
    <div className="section">
      <h3>Chủ đề</h3>
      <div className={styles.topic}>
        <Category categoryName={"Dataabase"} />
        <Category categoryName={".Net Core"} />
        <Category categoryName={"Enti"} />
      </div>
    </div>
  );
};

export default Aside;
