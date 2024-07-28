import Category from "../category/Category";
import styles from "./aside.module.css";

const Aside = () => {
  return (
    <div c>
      <div className={styles.topic}>
        <Category />
      </div>
    </div>
  );
};

export default Aside;
