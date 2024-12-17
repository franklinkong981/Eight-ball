import { useState } from 'react';
import './App.css';

import EightBall from "./EightBall.jsx";

import defaultAnswers from "./defaultAnswers.js";

function App() {

  return (
    <>
      <h1>Magic Eight Ball</h1>
      <h2>Think of a question, then click on the Magic Eight Ball for the answer!</h2>
      <EightBall answers = {defaultAnswers}/>
    </>
  );
}

export default App;
