import React, {useState, useEffect} from "react";

import "./EightBall.css";

const EightBall = ({answers}) => {
  const [color, setColor] = useState("black");
  const [message, setMessage] = useState("Think of a question");

  const [greenCount, setGreenCount] = useState(0);
  const [lightgreenCount, setLightgreenCount] = useState(0);
  const [yellowCount, setYellowCount] = useState(0);
  const [redCount, setRedCount] = useState(0);

  const chooseRandomMessage = async () => {
    const randomMessageIndex = Math.floor(Math.random() * answers.length);
    const randomMessage = answers[randomMessageIndex];

    setColor(randomMessage.color);
    setMessage(randomMessage.msg);

    incrementColorCount();
  };

  const incrementColorCount = () => {
    if (color == "green") {
      setGreenCount(greenCount + 1);
    } else if (color == "lightgreen") {
      setLightgreenCount(lightgreenCount + 1);
    } else if (color == "goldenrod") {
      setYellowCount(yellowCount + 1);
    } else if (color == "red") {
      setRedCount(redCount + 1);
    }
  }

  const reset = () => {
    setColor("black");
    setMessage("Think of a question");

    setGreenCount(0);
    setLightgreenCount(0);
    setYellowCount(0);
    setRedCount(0);
  };

  return (
    <>
      <div className="EightBall" style={{backgroundColor: color}} onClick={chooseRandomMessage}>
        <p className="EightBall-message">{message}</p>
      </div>
      <button className="EightBall-button" onClick={reset}>Reset</button>
      <p className="EightBall-counts">
        Green: {color === "green" ? greenCount + 1 : greenCount}, 
        Light Green: {color === "lightgreen" ? lightgreenCount + 1 : lightgreenCount}, 
        Yellow: {color === "goldenrod" ? yellowCount + 1 : yellowCount}, 
        Red: {color === "red" ? redCount + 1 : redCount}</p>
    </>
  );
};

export default EightBall;