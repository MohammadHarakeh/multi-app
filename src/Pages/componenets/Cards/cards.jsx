import React from "react";
import { useNavigate } from "react-router-dom";
import "./cards.css";

function Cards({ color, content, link, backgroundColor, icon }) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(link);
  };

  return (
    <div className="all-cards-wrapper">
      <div className="cards" style={{ backgroundColor }}>
        <div className="card-wrapper" onClick={handleClick} style={{ color }}>
          <span>{icon}</span>
          <h1>{content}</h1>
        </div>
      </div>
    </div>
  );
}

export default Cards;
