import React from "react";
import Cards from "./Cards/cards";
import { TiWeatherSunny } from "react-icons/ti";
import { FcCalculator } from "react-icons/fc";
import { FaNoteSticky } from "react-icons/fa6";
import "./index.css";

function MainPage() {
  return (
    <div className="main-wrapper">
      <div className="main-title">
        <h1>Choose your card</h1>
      </div>
      <div className="three-cards-wrapper">
        <Cards
          icon={<TiWeatherSunny />}
          content={"Weather"}
          color={"red"}
          link={"/weather"}
          backgroundColor={"blue"}
        ></Cards>
        <Cards
          icon={<FcCalculator />}
          content={"Calculator"}
          color={"green"}
          link={"/calculator"}
          backgroundColor={"red"}
        ></Cards>
        <Cards
          icon={<FaNoteSticky />}
          content={"Notes"}
          color={"aqua"}
          link={"/notes"}
          backgroundColor={"grey"}
        ></Cards>
      </div>
    </div>
  );
}

export default MainPage;
