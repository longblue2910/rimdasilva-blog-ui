import styles from "./cardList.module.css";
import CardRectangle from "../cardRectangle/CardRectangle";
import Link from "next/link";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const CardRectangleList = ({ title, isPremium, size }) => {
  console.log(title);

  const renderCardRectangles = () => {
    const cardRectangles = [];
    for (let i = 0; i < size; i++) {
      cardRectangles.push(<CardRectangle isPremium={isPremium} />);
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

export default CardRectangleList;
