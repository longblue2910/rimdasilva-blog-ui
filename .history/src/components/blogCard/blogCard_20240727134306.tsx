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
          <Link href="/">
            Dynamically Securing Databases using Hashicorp Vault
          </Link>
        </h3>
        <p className="blogText">
          Nowadays, hard to profoundly talk about security in the IT industry,
          since it has to be considered on so many different levels: from
          securing code chunks, securing containers, up to securing complex
          infrastructures and defining strong authorization and authentication
          policies across the enterprise.
        </p>
      </div>
    </div>
  );
};

export default BlogCard;
