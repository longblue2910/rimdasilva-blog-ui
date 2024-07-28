import styles from "./blogCardList.module.css";
import BlogCard from "../blogCard/BlogCard";
import Link from "next/link";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

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
        <h3 className={styles.title}>Dành cho bạn</h3>
        <Link href="/" className={`${styles.getAll} hover1`}>
          Xem tất cả
          <KeyboardArrowRightIcon />
        </Link>
      </div>
      <div className={styles.cardList}>{renderBlogCards()}</div>
    </div>
  );
};

export default BlogCardList;
