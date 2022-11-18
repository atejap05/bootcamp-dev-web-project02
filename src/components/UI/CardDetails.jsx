import React from "react";
import { HeartFilled } from "@ant-design/icons";

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
    <section>
      <figure>
        <figcaption>
          <i>heart icon</i>
          <span>{title}</span>
        </figcaption>
        <img src={image} alt="front book image" />
      </figure>
      <div>
        <ul>
          <li>{authors}</li>
          <li>{genres}</li>
          <li>{num_pages}</li>
          <li>{rating}</li>
          <li>{description}</li>
        </ul>
      </div>
    </section>
  );
};

export default CardDetails;
