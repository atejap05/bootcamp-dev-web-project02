import React from "react";
import Layout from "../components/Layout/Layout";
import { useFavoritesContext } from "../context/favoritesContext";
import CardDetails from "../components/UI/CardDetails";

const Favorites = () => {
  const { faddToFavorites, removeFromFavorites, favorites } =
    useFavoritesContext();

  console.log(favorites);
  return (
    <Layout>
      {favorites.map(book => (
        <div>
          <CardDetails
            key={book.id}
            title={book.title}
            image={book["image_url"]}
            authors={book.authors}
            genres={book.genres}
            num_pages={book.num_pages}
            rating={book.rating}
            description={book.description}
          />
        </div>
      ))}
    </Layout>
  );
};

export default Favorites;
