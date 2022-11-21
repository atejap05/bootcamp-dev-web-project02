import React from "react";
import { Button } from "antd";

const AntButton = ({ children, onClick }) => {
  return <Button onClick={onClick}>{children}</Button>;
};

export default AntButton;
