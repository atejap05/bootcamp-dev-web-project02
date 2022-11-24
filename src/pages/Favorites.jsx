import React from "react";
import Layout from "../components/Layout/Layout";
import CardDetails from "../components/UI/CardDetails";
import classes from "../css/styles.module.css";
import {useAuthContext} from "../context/authContext";

const Favorites = () => {
  const {user} = useAuthContext();

  return (
    <Layout contentStyle={classes.favorites}>
      {user.favorito.map(book => (
        <CardDetails
          key={book.id}
          id={book.id}
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
