import React from "react";
import styles from "./menu.module.css";
import MenuPosts from "../menuPosts/MenuPosts";
import MenuCategories from "../menuCategories/MenuCategories";

const Menu = () => {
  return (
    <div className={styles.container}>
      {/* <h2 className={styles.subtitle}>{"Có gì hot ?"}</h2>
      <h1 className={styles.title}>Phổ biến nhất</h1>
      <MenuPosts widthImage={false} /> */}

      <h3>Ebook "không thể bỏ lỡ"</h3>
      <MenuPosts widthImage={true} />
    </div>
  );
};

export default Menu;
