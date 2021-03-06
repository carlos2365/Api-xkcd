import React, { useState } from "react";
import { FaStar } from "react-icons/fa";


const StarRating = () => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  return (
    <div >
      {[...Array(5)].map((start, i) => {
        const ratingValue = i + 1;
        return (
          <label>
            <input
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={() => setRating(ratingValue)}
            />
            <FaStar
              className="start"
              color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
              size={50}
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(null)}
              key={i}
              id={i}
            />
          </label>
          
        );
      })}
    </div>
  );
};
export default StarRating;
