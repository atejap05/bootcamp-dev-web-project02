import React from "react";
import classes from "../../css/styles.module.css";

const Content = ({ children, className }) => {
  const style = className ? className : classes.content;

  return <main className={style}>{children}</main>;
};

export default Content;
