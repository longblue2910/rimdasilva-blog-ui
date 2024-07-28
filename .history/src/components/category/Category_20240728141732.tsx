"use client";

import styles from "./category.module.css";
import { IonIcon } from "@ionic/react";
import { serverOutline } from "ionicons/icons"; // Import icon bạn muốn sử dụng

const Category = () => {
  return (
    <div className={styles.categoryBtn}>
      <div className={styles.iconBox}>
        <IonIcon icon={serverOutline} />
      </div>
      <p>Database</p>
    </div>
  );
};

export default Category;
