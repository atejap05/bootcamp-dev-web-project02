import { useEffect, useState } from "react";
import axios from "axios";
import classes from "../css/styles.module.css";
import Layout from "../components/Layout/Layout";
import CardBook from "../components/UI/CardBook";

const AllBooks = () => {
  const [allBooks, setAllBooks] = useState([]);
  useEffect(() => {
    axios
      .get("https://example-data.draftbit.com/books?_limit=100")
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
          image={book.image_url}
          description={book.description}
        />
      ))}
    </Layout>
  );
};

export default AllBooks;
