import React from "react";
import classes from "../css/styles.module.css";
import AntButton from "../components/UI/AntButton";

const Home = () => {
  return (
    <section className={classes.home}>
      <article className={classes["home__container"]}>
        <h1>Welcome to AppBook</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam
          laboriosam, quis aliquid impedit accusantium, porro sint rerum nobis
          voluptatem repellendus ducimus quae temporibus unde voluptatum
          recusandae quaerat ipsum? Dolor, ex.
        </p>
        <div>
          <AntButton>Login</AntButton>
          <AntButton>Sign up</AntButton>
        </div>
      </article>
    </section>
  );
};

export default Home;
