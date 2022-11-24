import React from "react";
import classes from "../../css/styles.module.css";
import AntButton from "./AntButton";

const Comments = () => {
  return (
    <section className={classes.comments}>
      <textarea name="comment"></textarea>
      <AntButton>Send &rarr;</AntButton>
    </section>
  );
};

export default Comments;