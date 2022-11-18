import React from "react";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Avatar, Card } from "antd";
const { Meta } = Card;

const CardBook = ({ image, description }) => (
  <Card
    style={{
      width: 300,
      height: 700,
      overflow: "hidden",
      textOverflow: "ellipsis",
    }}
    cover={<img alt="example" src={image} />}
    actions={[
      <SettingOutlined key="setting" />,
      <EditOutlined key="edit" />,
      <EllipsisOutlined key="ellipsis" />,
    ]}
  >
    <Meta
      avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
      title="Card title"
      description={description}
    />
  </Card>
);
export default CardBook;
