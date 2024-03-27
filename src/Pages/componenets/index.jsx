import { React, useState, useEffect } from "react";
import Cards from "./Cards/cards";
import weatherImage from "../../Assets/weather.jpg";
import calculatorImage from "../../Assets/calculator.jpg";
import notesImage from "../../Assets/notes.jpg";
import "./index.css";

function MainPage() {
  return (
    <div className="main-wrapper">
      <div className="main-title">
        <h1>Choose your card</h1>
      </div>
      <div className="three-cards-wrapper">
        <Cards
          content={"Weather"}
          color={"black"}
          link={"/weather"}
          backgroundImage={weatherImage}
        ></Cards>
        <Cards
          content={"Calculator"}
          color={"black"}
          link={"/calculator"}
          backgroundImage={calculatorImage}
        ></Cards>
        <Cards
          content={"Notes"}
          color={"black"}
          link={"/notes"}
          backgroundImage={notesImage}
        ></Cards>
      </div>
    </div>
  );
}

export default MainPage;
