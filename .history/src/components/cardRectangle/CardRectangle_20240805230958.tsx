"use client";

import Image from "next/image";
import styles from "./cardRectangle.module.css";
import Link from "next/link";
import Groups3OutlinedIcon from "@mui/icons-material/Groups3Outlined";
import { Divider } from "@mui/material";
import "@ionic/react/css/core.css"; // Import CSS chính của Ionic
import { IonIcon } from "@ionic/react";
import { people } from "ionicons/icons"; // Import icon bạn muốn sử dụng
const CardRectangle = ({ isPremium }) => {
  return (
    <div className={`${styles.card}`}>
      <Link href="/" className={styles.imgContainer}>
        <Image
          src="/csharp-post.jpeg"
          width={300}
          height={180}
          objectFit="cover"
          alt="C# Post"
          className={styles.cardImg}
        />
      </Link>

      <div className={styles.cardContent}>
        <h3 className={`${styles.title} hover1`}>
          <Link href="/">C# Zero to Hero</Link>
        </h3>
        <p className={styles.description}>
          Khóa học này được thiết kế đặc biệt để giúp bạn không chỉ học C# một
          cách hiệu quả mà còn thoát khỏi {"'tutorial hell'"} – tình trạng mà
          nhiều người học lập trình gặp phải khi chỉ biết làm theo các video
          hướng dẫn mà không hiểu rõ chức năng và lý do tại sao làm như vậy
        </p>
        {/* <div className={styles.cardTag}>
          <span className={styles.price}>
            1.000.000<sup>₫</sup>
          </span>
        </div>
        <div className={styles.infoPrice}>
          <div className={styles.discount}>-33%</div>
          <div className={styles.priceDiscount}>
            <s>
              1.500.000<sup>₫</sup>
            </s>
          </div>
        </div>
        <Divider />
        <div className={styles.cardBottom}>
          <div className={styles.infoAuthor}>
            <Image
              src="/logo.png"
              width={18}
              height={18}
              alt="author"
              objectFit="cover"
            />
            <h4 className={styles.authorText}>rimdasilva</h4>
          </div>
          <div className={styles.infoCourse}>
            <span style={{ fontSize: "14px", fontWeight: 600 }}>103</span>
            <IonIcon icon={people} />
          </div>
        </div> */}
        {isPremium && (
          <div className={styles.proCourse}>
            <span>PRO</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default CardRectangle;
