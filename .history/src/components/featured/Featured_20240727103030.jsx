import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";
import CardRectangle from "../cardRectangle/CardRectangle";
import CardRectangleList from "../cardRectangleList/CardRectangleList";

const Featured = () => {
  return (
    <div className="section">
      <CardRectangleList title="Khóa học PRO" size={3} isPremium={true} />
      <CardRectangleList title="Khóa học miễn phí" size={10} />
      <CardRectangleList title="Ebook miễn phí" size={10} />
    </div>
  );
};

export default Featured;
