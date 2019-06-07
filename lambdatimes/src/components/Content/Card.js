import React from "react";
import propTypes from "prop-types";
const Card = props => {
  return (
    <div className="card">
      <div className="headline">{props.data.headline}</div>
      <div className="author">
        <div className="img-container">
          <img src={props.data.img} alt="" />
        </div>
        <span>By {props.data.author}</span>
      </div>
    </div>
  );
};

// Make sure to include PropTypes.
Card.propTypes = {
  headline: propTypes.string,
  img: propTypes.string,
  author: propTypes.string
};
export default Card;
