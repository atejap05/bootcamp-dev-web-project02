import React from "react";
import { HeartFilled, CommentOutlined } from "@ant-design/icons";
import classes from "../../css/styles.module.css";

const CardDetails = ({
  title,
  authors,
  genres,
  num_pages,
  rating,
  description,
  image,
}) => {
  return (
    <section className={classes["carddetails"]}>
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
        <img src={image} alt="front book" />
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
            <CommentOutlined />
          </span>
        </div>
      </div>
    </section>
  );
};

export default CardDetails;
