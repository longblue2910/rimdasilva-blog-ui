import { Divider } from "@mui/material";
import styles from "./blogDetailPage.module.css";

const DetailBlogPage = () => {
  return (
    <div className={`section ${styles.blogPage}`}>
      <h4 className={styles.subTitle}>Chủ Nhật, 21 tháng 7, 2024</h4>
      <h3 className={styles.title}>
        Tăng thời gian tích hợp timeout cho Amazon API Gateway
      </h3>
      <Divider sx={{ margin: "1.5rem 0" }} />
      <div className={styles.blogContent}>
        <div className={styles.infoBlog}></div>
        <div> cl</div>
      </div>
    </div>
  );
};

export default DetailBlogPage;
