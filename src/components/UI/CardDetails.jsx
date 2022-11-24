import React, {useState} from "react";
import {CommentOutlined, HeartFilled} from "@ant-design/icons";
import classes from "../../css/styles.module.css";
import ModalComponent from "./ModalComponent";
import Comments from "./Comments";
import axios from "axios";
import {useAuthContext} from "../../context/authContext";

const CardDetails = ({
                         id,
                         title,
                         authors,
                         genres,
                         num_pages,
                         rating,
                         description,
                         image,
                     }) => {
    const [showCommentsForm, setShowCommentsForm] = useState(false);


    const onClickCommentHandler = () => {
        setShowCommentsForm(true);
    };

    return (
        <section className={classes["carddetails"]}>
            <ModalComponent
                title={"Add a comment"}
                toggleModal={setShowCommentsForm}
                showModal={showCommentsForm}
            >
                <Comments bookId={id}/>
            </ModalComponent>
            <figure>
                <figcaption>
                    <i>
                        <HeartFilled
                            onClick={() => {
                                console.log("coracao");
                            }}
                        />
                    </i>
                    <span>{title}</span>
                </figcaption>
                <img src={image} alt="front book"/>
            </figure>
            <div>
                <ul>
                    <li>{authors}</li>
                    <li>{genres}</li>
                    <li>{num_pages}</li>
                    <li>{rating}</li>
                    <li>{description}</li>
                </ul>
                <div className={classes["carddetails__icons"]}>
          <span>
            {" "}
              <HeartFilled
                  onClick={() => {
                      console.log("coracao");
                  }}
              />
          </span>
                    <span>
            <CommentOutlined onClick={onClickCommentHandler}/>
          </span>
                </div>
            </div>
        </section>
    );
};

export default CardDetails;
