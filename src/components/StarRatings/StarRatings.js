import React from "react";
import ReactStars from "react-rating-stars-component";

const StarRatings = (props) => {

  return (
    <ReactStars
      count={5}
      value={props.rating / 2}
      size={50}
      edit={false}
      activeColor="#ffd700"
    />
  )
};

export default StarRatings;