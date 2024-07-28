import st from "react";
import BlogCard from "../blogCard/BlogCard";

const BlogCardList = () => {
  const renderCardRectangles = () => {
    const cardRectangles = [];
    for (let i = 0; i < 5; i++) {
      cardRectangles.push(<BlogCard />);
    }
    return cardRectangles;
  };

  return (
    <div className="section">
      <div className={styles.cardListHeader}>
        <h3 className={styles.title}>{title}</h3>
        <Link href="/" className={`${styles.getAll} hover1`}>
          Xem tất cả
          <KeyboardArrowRightIcon />
        </Link>
      </div>
      <div className={styles.cardList}>{renderCardRectangles()}</div>
    </div>
  );
};

export default BlogCardList;
