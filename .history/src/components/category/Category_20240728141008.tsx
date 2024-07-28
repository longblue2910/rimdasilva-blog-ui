import styles from "./category.module.css";
import { IonIcon } from "@ionic/react";
import { people } from "ionicons/icons"; // Import icon bạn muốn sử dụng

const Category = () => {
  return (
    <div className={styles.categoryBtn}>
      <div className={styles.iconBox}></div>
    </div>
  );
};

export default Category;
