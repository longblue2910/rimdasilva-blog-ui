import Category from "../category/Category";
import styles from "./aside.module.css";

const Aside = () => {
  return (
    <div className="section">
      <h3>Chủ đề</h3>
      <div className={styles.topic}>
        <Category />
        <Category />
        <Category />
      </div>
    </div>
  );
};

export default Aside;
