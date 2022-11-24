import React, {useEffect, useState} from "react";
import Layout from "../components/Layout/Layout";
import CardDetails from "../components/UI/CardDetails";
import axios from "axios";
import {BOOK_DETAILS_URL} from "../assets/API.js";
import {useParams} from "react-router-dom";

const BookDetails = () => {
    const [book, setBook] = useState({});
    const {id} = useParams();

    //TODO: add tela error
    useEffect(() => {
        axios.get(`${BOOK_DETAILS_URL}/${id}`).then(res => setBook(res.data));
    }, [id]);

    return (
        <Layout>
            <CardDetails
                title={book.title}
                image={book["image_url"]}
                authors={book.authors}
                genres={book.genres}
                num_pages={book.num_pages}
                rating={book.rating}
                description={book.description}
            />
        </Layout>
    );
};

export default BookDetails;
