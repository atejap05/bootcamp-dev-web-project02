import React from "react";
import classes from "../../css/styles.module.css";
import { Link } from "react-router-dom";
import { HeartFilled } from "@ant-design/icons";
import { useFavoritesContext } from "../../context/favoritesContext";
import { useAuthContext } from "../../context/authContext";

const Header = () => {
  const { favorites } = useFavoritesContext();
  const { user, logout } = useAuthContext();
  return (
    <header className={classes.header}>
      <Link to="/allbooks">My AppBooks</Link>
      <span>Olá {user}</span>
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
