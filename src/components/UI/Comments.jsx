import React, {useRef} from "react";
import classes from "../../css/styles.module.css";
import AntButton from "./AntButton";
import axios from "axios";
import {useAuthContext} from "../../context/authContext";

const Comments = ({bookId}) => {

    const commentRef = useRef('')
    const {user} = useAuthContext()
    console.log(user)
    const book = user.favorito.find(book => book.id === bookId)

    const addComment = () => {

        console.log(`book ${book} bookId ${bookId}` )

        if (book.comments) {
            book.comments.push({
                data: new Date().toDateString(),
                comment: commentRef.current.value
            })
        } else {
            book.comments = [{
                data: new Date().toDateString(),
                comment: commentRef.current.value
            }]
        }

        axios.put(`https://ironrest.cyclic.app/appbooks/${user._id}`, {
            usuario: user.usuario,
            senha: user.senha,
            favorito: user.favorito,
        })
            .then(res => {
            });

        commentRef.current.value = ""
    }


    return (
        <section className={classes.comments}>
            <textarea defaultValue={""}ref={commentRef} name="comment" placeholder="What is your view?"/>
            <AntButton onClick={addComment}>Send &rarr;</AntButton>
        </section>
    );
};

export default Comments;
