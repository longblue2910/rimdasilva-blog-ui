import Image from "next/image";
import styles from "./cardRectangle.module.css";
import Link from "next/link";
import Groups3OutlinedIcon from "@mui/icons-material/Groups3Outlined";

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
        <div className={styles.cardTag}>
          <span>1.000.000 </span>
        </div>
        <div className={styles.cardBottom}>
          <span>
            by{" "}
            <Link href="/" className={styles.cardAuth}>
              rimdasilva
            </Link>
          </span>
          <div className={styles.infoCourse}>
            <Groups3OutlinedIcon />
            <span>103</span>
          </div>
        </div>
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