import { useEffect, useState } from "react";
import axios from "axios";
import Layout from "../components/Layout/Layout";
import CardBook from "../components/UI/CardBook";
import { ALL_BOOKS_URL } from "../assets/API.js";
import { useFavoritesContext } from "../context/favoritesContext";

const AllBooks = () => {
  const [allBooks, setAllBooks] = useState([]);
  useEffect(() => {
    axios
      .get(ALL_BOOKS_URL)
      .then(res => {
        setAllBooks(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <Layout>
      {allBooks.map(book => (
        <CardBook
          key={book.id}
          book={book}
          title={book.title}
          image={book["image_url"]}
          description={book.description}
        />
      ))}
    </Layout>
  );
};

export default AllBooks;
