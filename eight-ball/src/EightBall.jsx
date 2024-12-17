import React, {useState} from "react";

import "./EightBall.css";

const EightBall = ({answers}) => {
  const [color, setColor] = useState("black");
  const [message, setMessage] = useState("Think of a question");

  const chooseRandomMessage = () => {
    const randomMessageIndex = Math.floor(Math.random() * answers.length);
    const randomMessage = answers[randomMessageIndex];

    setColor(randomMessage.color);
    setMessage(randomMessage.msg);
  };

  return (
    <>
      <div class="EightBall" style={{backgroundColor: color}} onClick={chooseRandomMessage}>
        <p class="EightBall-message">{message}</p>
      </div>
    </>
  );
};

export default EightBall;