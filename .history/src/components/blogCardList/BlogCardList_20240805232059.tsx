import styles from "./blogCardList.module.css";
import BlogCard from "../blogCard/BlogCard";
import Link from "next/link";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { Divider } from "@mui/material";

const BlogCardList = () => {
  const renderBlogCards = () => {
    const cardRectangles = [];
    for (let i = 0; i < 5; i++) {
      cardRectangles.push(<BlogCard />);
    }
    return cardRectangles;
  };

  return (
    <div className="section">
      <div className={styles.cardListHeader}>
        <h3 className={styles.title}>Bài viết mới nhất 📌</h3>
        <Link href="/" className={`${styles.getAll} hover1`}>
          Xem tất cả
          <KeyboardArrowRightIcon />
        </Link>
      </div>
      <Divider sx={{ margin: "1.5rem 0" }} />
      <div className={styles.cardList}>{renderBlogCards()}</div>
    </div>
  );
};

export default BlogCardList;
