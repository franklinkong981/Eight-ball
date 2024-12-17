import React, {useState} from "react";

import "./EightBall.css";

const EightBall = ({answers}) => {
  return (
    <>
      <div class="EightBall" style={{color: "white", backgroundColor: "black"}}>
        <p class="EightBall-message">Think of a question</p>
      </div>
    </>
  );
};

export default EightBall;