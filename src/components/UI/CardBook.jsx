import React from "react";
import { HeartFilled, HeartOutlined } from "@ant-design/icons";
import { Card } from "antd";
import { useNavigate } from "react-router-dom";

const CardBook = ({ id, title, image, description }) => {
  const navigate = useNavigate();
  const { Meta } = Card;
  return (
    <Card
      style={{
        width: 300,
        height: 700,
        overflow: "hidden",
      }}
      hoverable
      cover={
        <img
          onClick={() => navigate(`/books/${id}`)}
          alt="example"
          src={image}
        />
      }
    >
      <Meta
        avatar={<HeartOutlined />}
        title={title}
        description={description.slice(0, 150) + "..."}
      />
    </Card>
  );
};
export default CardBook;
