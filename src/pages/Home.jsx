import React, { useState } from "react";
import classes from "../css/styles.module.css";
import AntButton from "../components/UI/AntButton";
import Login from "../components/Login";
import ModalComponent from "../components/UI/ModalComponent";
import SignUp from "../components/SingUp";

const Home = () => {
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showSignUpForm, setShowSignUpForm] = useState(false);

  const onClickLoginHandler = () => {
    setShowLoginForm(true);
  };
  const onClickSignUpHandler = () => {
    setShowSignUpForm(true);
  };

  return (
    <section className={classes.home}>
      <ModalComponent
        title={"Type username and password"}
        toggleModal={setShowLoginForm}
        showModal={showLoginForm}
      >
        <Login />
      </ModalComponent>
      <ModalComponent
        toggleModal={setShowSignUpForm}
        showModal={showSignUpForm}
      >
        <SignUp toggleModal={setShowSignUpForm} />
      </ModalComponent>
      <article className={classes["home__container"]}>
        <h1>Welcome to AppBook</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam
          laboriosam, quis aliquid impedit accusantium, porro sint rerum nobis
          voluptatem repellendus ducimus quae temporibus unde voluptatum
          recusandae quaerat ipsum? Dolor, ex.
        </p>
        <div>
          <AntButton onClick={onClickLoginHandler}>Login</AntButton>
          <AntButton onClick={onClickSignUpHandler}>Sign up</AntButton>
        </div>
      </article>
    </section>
  );
};

export default Home;
