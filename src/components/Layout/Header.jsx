import React from "react";
import classes from "../../css/styles.module.css";
import { Link } from "react-router-dom";
import { HeartFilled } from "@ant-design/icons";
import { useFavoritesContext } from "../../context/favoritesContext";

const Header = () => {
  const { favorites } = useFavoritesContext();

  return (
    <header className={classes.header}>
      <div>My AppBooks</div>
      <div className={classes["header__link"]}>
        <span className={classes["header__link--count"]}>
          {favorites.length}
        </span>
        <HeartFilled
          style={{ color: "#fca311" }}
          className={classes["header__link--heart"]}
        />
        <Link to="/favorites">Favorites</Link>
      </div>
    </header>
  );
};

export default Header;
