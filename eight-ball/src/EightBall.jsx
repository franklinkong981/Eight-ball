import React, {useState} from "react";

import "./EightBall.css";

const EightBall = ({answers}) => {
  const [color, setColor] = useState("black");
  const [message, setMessage] = useState("Think of a question");

  
  return (
    <>
      <div class="EightBall" style={{backgroundColor: color}}>
        <p class="EightBall-message">{message}</p>
      </div>
    </>
  );
};

export default EightBall;