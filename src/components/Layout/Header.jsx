import React, {useState} from "react";
import classes from "../../css/styles.module.css";
import {Link} from "react-router-dom";
import {HeartFilled} from "@ant-design/icons";
import {useAuthContext} from "../../context/authContext";
import {useFavoritesContext} from "../../context/favoritesContext";

const Header = () => {
    const {user} = useAuthContext();
    const {favoriteTotal} = useFavoritesContext();


    return (
        <header className={classes.header}>
            <Link to="/allbooks">My AppBooks</Link>
            <span>Olá, {user['usuario']}</span>
            <div className={classes["header__link"]}>
        <span className={classes["header__link--count"]}>
          {favoriteTotal}
        </span>
                <HeartFilled
                    style={{color: "#fca311"}}
                    className={classes["header__link--heart"]}
                />
                <Link to="/favorites">Favorites</Link>
            </div>
        </header>
    );
};

export default Header;
