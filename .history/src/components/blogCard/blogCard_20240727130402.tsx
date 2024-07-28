import Image from "next/image";
import styles from "./blogCard.module.css";

const BlogCard = () => {
  return (
    <div className={styles.blogCard}>
      <div className={styles.cardBanner}>
        <Image src="/blog1.png" fill alt="Blog Image" />
      </div>
      
    </div>
  );
};

export default BlogCard;
