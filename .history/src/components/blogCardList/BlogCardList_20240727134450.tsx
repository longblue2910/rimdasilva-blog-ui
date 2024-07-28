import React from "react";

const BlogCardList = () => {
  const renderCardRectangles = () => {
    const cardRectangles = [];
    for (let i = 0; i < size; i++) {
      cardRectangles.push(<CardRectangle isPremium={isPremium} />);
    }
    return cardRectangles;
  };

  return <div></div>;
};

export default BlogCardList;
