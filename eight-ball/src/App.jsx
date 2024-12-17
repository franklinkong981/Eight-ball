import { useState } from 'react';
import './App.css';

import EightBall from "./EightBall.jsx";

import defaultAnswers from "./defaultAnswers.js";

function App() {

  return (
    <>
      <EightBall answers = {defaultAnswers}/>
    </>
  );
}

export default App;
