import React, { useState, useEffect } from "react";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";
import { Card } from "antd";
import { useNavigate } from "react-router-dom";
import { useFavoritesContext } from "../../context/favoritesContext";

const HAERTSTYLE = { fontSize: "2rem", color: "#fca311" };

const CardBook = ({ book, title, image, description }) => {
  const [isClicked, setIsClicked] = useState(false);
  const { addToFavorites, removeFromFavorites, favorites } =
    useFavoritesContext();

  const heartIcon = isClicked ? (
    <HeartFilled style={HAERTSTYLE} />
  ) : (
    <HeartOutlined style={HAERTSTYLE} />
  );

  const onClickFavoriteHandle = () => {
    setIsClicked(!isClicked);
  };
  useEffect(() => {
    isClicked ? addToFavorites(book) : removeFromFavorites(book.id);
  }, [isClicked]);

  const navigate = useNavigate();
  const { Meta } = Card;
  return (
    <Card
      style={{
        width: 300,
        height: 700,
        overflow: "hidden",
        backgroundColor: "#e5e5e5",
      }}
      hoverable
      cover={
        <img
          onClick={() => navigate(`/books/${book.id}`)}
          alt="example"
          src={image}
        />
      }
    >
      <Meta
        avatar={<div onClick={onClickFavoriteHandle}>{heartIcon}</div>}
        title={title}
        description={description.slice(0, 150) + "..."}
      />
    </Card>
  );
};
export default CardBook;
