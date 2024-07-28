import React from "react";
import BlogCard from "../blogCard/BlogCard";

const BlogCardList = () => {
  const renderCardRectangles = () => {
    const cardRectangles = [];
    for (let i = 0; i < 5; i++) {
      cardRectangles.push(<BlogCard isPremium={isPremium} />);
    }
    return cardRectangles;
  };

  return <div></div>;
};

export default BlogCardList;
