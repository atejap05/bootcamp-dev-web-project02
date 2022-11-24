import { useEffect, useState } from "react";
import axios from "axios";
import Layout from "../components/Layout/Layout";
import CardBook from "../components/UI/CardBook";
import { ALL_BOOKS_URL } from "../assets/API.js";
import {useAuthContext} from "../context/authContext";
import {useFavoritesContext} from "../context/favoritesContext";


const AllBooks = () => {

  const [allBooks, setAllBooks] = useState([]);
  const {user} = useAuthContext();
  const {updateTotal} = useFavoritesContext()

  useEffect(() => {
    updateTotal(user.favorito.length)
    axios
      .get(ALL_BOOKS_URL)
      .then(res => {
        setAllBooks(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <Layout>
      {allBooks.map(book => {

        let isFavorite = user.favorito.find(b => b.id === book.id) !== undefined

        return (
            <CardBook
                key={book.id}
                book={book}
                title={book.title}
                image={book["image_url"]}
                description={book.description}
                isFavorite={isFavorite}
            />
            )
      })}
    </Layout>
  );
};

export default AllBooks;
