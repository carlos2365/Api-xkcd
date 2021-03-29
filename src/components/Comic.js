import React from "react";
import StarRating from "./StartRating";

function Comic({ title, src, alt }) {
  return (
    <div className="comic">
      <h2>{title}</h2>
      <img src={src} alt={alt} />
      <div className="startc">
      <StarRating />
      </div>
    </div>
  );
}

export default Comic;
