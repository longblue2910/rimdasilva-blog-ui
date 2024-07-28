import Image from "next/image";
import styles from "./blogCard.module.css";
import Link from "next/link";

const BlogCard = () => {
  return (
    <div className={styles.blogCard}>
      <div className={styles.cardBanner}>
        <Image src="/blog1.png" fill alt="Blog Image" />
      </div>
      <div className={styles.cardContent}>
        <button className={styles.blogTopic}>Database</button>
        <h3>
          <Link>Dynamically Securing Databases using Hashicorp Vault</Link>
        </h3>
      </div>
    </div>
  );
};

export default BlogCard;
