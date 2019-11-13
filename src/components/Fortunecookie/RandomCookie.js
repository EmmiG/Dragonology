/*
* A random Fortune cookie will be displayed
*/


import React, { useState } from "react";
import "./../../App.scss";
import fortunes from "./fortunes.json";




// this would be a network call. just mocking out for demo.
// random lorem ipsum generated on https://next.json-generator.com/4yP4GV7oP
function fetchFortune(fortuneId) {
  return new Promise(res => {
    const response = { fortune: fortunes[fortuneId] };
    res(response);
  });
}

// generate a random number
function getRandomNumber() {
  const max = Math.ceil(25);
  const min = Math.floor(1);

  return Math.floor(Math.random() * (min - max)) + max;
}
const RandomFortune = () => {
  const [fortune, setFortune] = useState("");

  // On click of the fortune generator, we generate a number and then request
  // the fortune of that id from the backend.
  const generateFortune = () => {
    const id = getRandomNumber();

    fetchFortune(id).then(response => setFortune(response.fortune));
  };

  return (
    <div>
      <div className="fortune">{fortune}</div>
      <div>
        <button onClick={generateFortune}>Today´s Fortune</button>
      </div>
    </div>
  );
};

export default RandomFortune;
