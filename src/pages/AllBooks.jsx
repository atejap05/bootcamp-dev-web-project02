import { useEffect, useState } from "react";
import axios from "axios";
import Layout from "../components/Layout/Layout";
import CardBook from "../components/UI/CardBook";
import { ALL_BOOKS_URL } from "../assets/API.js";

const AllBooks = () => {
  const [allBooks, setAllBooks] = useState([]);
  useEffect(() => {
    axios
      .get(ALL_BOOKS_URL)
      .then(res => {
        console.log(res.data);
        setAllBooks(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <Layout>
      {allBooks.map(book => (
        <CardBook
          key={book.id}
          id={book.id}
          title={book.title}
          image={book['image_url']}
          description={book.description}
        />
      ))}
    </Layout>
  );
};

export default AllBooks;
