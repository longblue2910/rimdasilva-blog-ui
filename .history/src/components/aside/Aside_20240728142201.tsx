import Category from "../category/Category";
import styles from "./aside.module.css";

const Aside = () => {
  return (
    <div className="section">
      <h3></h3>
      <div className={styles.topic}>
        <Category />
      </div>
    </div>
  );
};

export default Aside;
