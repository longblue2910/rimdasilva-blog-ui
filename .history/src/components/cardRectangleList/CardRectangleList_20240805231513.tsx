import styles from "./cardList.module.css";
import CardRectangle from "../cardRectangle/CardRectangle";
import Link from "next/link";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { Divider } from "@mui/material";

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
        <h3 className="title">{title}</h3>
        <Link href="/" className={`${styles.getAll} hover1`}>
          Xem tất cả
          <KeyboardArrowRightIcon />
        </Link>
      </div>
      <Divider sx={{ margin: "1.5rem 0" }} />
      <div className={styles.cardList}>{renderCardRectangles()}</div>
    </div>
  );
};

export default CardRectangleList;
