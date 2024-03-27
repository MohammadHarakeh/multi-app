import { React, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./calculator.css";

function Calculator() {
  const createDigits = () => {
    const digits = [];
    for (let i = 1; i < 10; i++) {
      digits.push(<button key={i}>{i}</button>);
    }
    return digits;
  };

  const navigate = useNavigate();
  const backClick = () => {
    navigate("/");
  };

  return (
    <div className="calculator-wrapper">
      <div>
        <div className="calculator">
          <div className="display">
            <span>0</span>
          </div>

          <div className="operators">
            <button>/</button>
            <button>*</button>
            <button>+</button>
            <button>-</button>

            <button>DEL</button>
          </div>

          <div className="digits">
            {createDigits()}
            <button>0</button>
            <button>.</button>
            <button>=</button>
          </div>
        </div>

        <div className="search-wrapper back-btn">
          <button onClick={backClick}>Back</button>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
