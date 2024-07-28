"use client";

import Image from "next/image";
import styles from "./blogCard.module.css";
import Link from "next/link";
import { IonIcon } from "@ionic/react";
import { timeOutline } from "ionicons/icons";

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
        <h3 className={`${styles.title} hover4`}>
          <Link href="/">
            Dynamically Securing Databases using Hashicorp Vault
          </Link>
        </h3>
        <p className={styles.blogText}>
          Nowadays, hard to profoundly talk about security in the IT industry,
          since it has to be considered on so many different levels: from
          securing code chunks, securing containers, up to securing complex
          infrastructures and defining strong authorization and authentication
          policies across the enterprise. Nowadays, hard to profoundly talk
          about security in the IT industry, since it has to be considered on so
          many different levels: from securing code chunks, securing containers,
          up to securing complex infrastructures and defining strong
          authorization and authentication policies across the enterprise.
        </p>

        <div className={styles.wrapperFlex}>
          <div className={styles.profileWrapper}>
            <Image
              src="/logo.png"
              alt="Author"
              className={styles.imgAuth}
              loading="lazy"
              width={50}
              height={50}
              layout="responsive"
            />
          </div>

          <div className={`${styles.wrapper}`}>
            <h4 className="hover4">
              <Link href="#">rimdasilva</Link>
            </h4>

            <p className={styles.textSm}>
              <time>Nov 20, 2021</time>
              <span className={styles.separator}></span>
              <IonIcon icon={timeOutline} />
              <time>4 min</time>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
