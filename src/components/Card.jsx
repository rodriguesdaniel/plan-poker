import React from "react";

function Card({name, vote}) {
  return (
    <div className="card">
      <p>{vote}</p>
      <p>{name}</p>
    </div>
  );
}

export default Card;