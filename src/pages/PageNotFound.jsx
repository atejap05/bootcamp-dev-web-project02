import React from "react";
import classes from "../css/styles.module.css";
import AntButton from "../components/UI/AntButton";
import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();
  return (
    <section className={classes["notfoundpage"]}>
      <AntButton onClick={() => navigate("/")}>&larr; Go Home</AntButton>
    </section>
  );
};

export default Error;
