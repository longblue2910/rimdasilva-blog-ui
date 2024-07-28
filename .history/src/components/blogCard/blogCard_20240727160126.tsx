

import Image from "next/image";
import styles from "./blogCard.module.css";
import Link from "next/link";
import "@ionic/react/css/core.css"; // Import CSS chính của Ionic
import { IonIcon } from "@ionic/react";
import { timeOutline } from "ionicons/icons"; // Import icon bạn muốn sử dụng

const BlogCard = () => {
  return (
    <div className={`${styles.blogCard} hover3`}>
      <div className={styles.cardBanner}>
        <Image
          src="/blog1.png"
          layout="fill"
          objectFit="cover"
          loading="lazy"
          alt="Blog Image"
        />
      </div>
      <div className={styles.cardContent}>
        <button className={styles.blogTopic}>Database</button>
        <h3 className={styles.title}>
          <Link href="/">
            Dynamically Securing Databases using Hashicorp Vault
          </Link>
        </h3>
        <p className={styles.blogText}>
          Nowadays, hard to profoundly talk about security in the IT industry,
          since it has to be considered on so many different levels: from
          securing code chunks, securing containers, up to securing complex
          infrastructures and defining strong authorization and authentication
          policies across the enterprise.
        </p>

        <div className={styles.wrapperFlex}>
          <div className={styles.profileWrapper}>
            <Image src="/logo.png" alt="Author" width={40} height={40} />
          </div>

          <div className="wrapper">
            <a href="#" className="h4">
              rimdasilva
            </a>

            <p className="text-sm">
              <span className="separator"></span>
              <time>Nov 20, 2021</time>
              <IonIcon icon={timeOutline} />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
