import React from "react";
import Layout from "../components/Layout/Layout";
import { useFavoritesContext } from "../context/favoritesContext";
import CardDetails from "../components/UI/CardDetails";
import classes from "../css/styles.module.css";

const Favorites = () => {
  const { faddToFavorites, removeFromFavorites, favorites } =
    useFavoritesContext();

  console.log(favorites);
  return (
    <Layout contentStyle={classes.favorites}>
      {favorites.map(book => (
        <CardDetails
          key={book.id}
          title={book.title}
          image={book["image_url"]}
          authors={book.authors}
          genres={book.genres}
          num_pages={book.num_pages}
          rating={book.rating}
        />
      ))}
    </Layout>
  );
};

export default Favorites;
