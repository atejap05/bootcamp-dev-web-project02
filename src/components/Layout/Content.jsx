import React from "react";
import classes from "../../css/styles.module.css";

const Content = ({ children }) => {
  return <main className={classes.content}>{children}</main>;
};

export default Content;
