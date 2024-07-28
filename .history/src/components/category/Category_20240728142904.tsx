"use client";

import styles from "./category.module.css";
import { IonIcon } from "@ionic/react";
import { serverOutline } from "ionicons/icons"; // Import icon bạn muốn sử dụng
import Link from "next/link";

const Category = ({ categoryName }) => {
  return (
    <div className={styles.categoryBtn}>
      <Link href="/">Database</Link>
    </div>
  );
};

export default Category;
