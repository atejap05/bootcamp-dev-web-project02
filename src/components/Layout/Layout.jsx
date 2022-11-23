import React from "react";
import classes from "../../css/styles.module.css";
import Header from "./Header";
import Footer from "./Footer";
import Content from "./Content";

const Layout = ({ children, contentStyle }) => {
  return (
    <div className={classes["app_container"]}>
      <Header />
      <Content className={contentStyle}>{children}</Content>
      <Footer />
    </div>
  );
};

export default Layout;
