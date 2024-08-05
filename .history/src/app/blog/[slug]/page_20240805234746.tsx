import { Divider } from "@mui/material";
import styles from "./blogDetailPage.module.css";
import Image from "next/image";

const DetailBlogPage = () => {
  return (
    <div className={`section ${styles.blogPage}`}>
      <h4 className={styles.subTitle}>Chủ Nhật, 21 tháng 7, 2024</h4>
      <h3 className={styles.title}>
        Tăng thời gian tích hợp timeout cho Amazon API Gateway
      </h3>
      <Divider sx={{ margin: "1.5rem 0" }} />
      <div className={styles.blogContent}>
        <div className={styles.infoBlog}>
          <div className={styles.infoAuth}>
            <Image src="/logo.png" width={38} height={48} alt="Tác giả" />
            <span>Rimdasilva</span>
          </div>
        </div>
        <div className={styles.textContent}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
            dolore maxime quis, quidem beatae in error numquam. Tempore mollitia
            fugit neque eos voluptatem! Id soluta eligendi quas quo fuga
            maiores.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DetailBlogPage;
