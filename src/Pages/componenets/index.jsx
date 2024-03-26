import React from "react";
import Cards from "./Cards/cards";
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
          color={"red"}
          link={"/test"}
          backgroundColor={"blue"}
        ></Cards>
        <Cards
          content={"Calculator"}
          color={"green"}
          link={"/test"}
          backgroundColor={"red"}
        ></Cards>
        <Cards
          content={"Notes"}
          color={"aqua"}
          link={"/test"}
          backgroundColor={"grey"}
        ></Cards>
      </div>
    </div>
  );
}

export default MainPage;
