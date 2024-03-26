import React from "react";
import "./cards.css";

function Cards({ color, content, link, backgroundColor }) {
  return (
    <div className="all-cards-wrapper">
      <div className="cards" style={{ backgroundColor }}>
        <div className="card-warpper" href={link} style={{ color }}>
          <h1>{content}</h1>
        </div>
      </div>
    </div>
  );
}

export default Cards;
