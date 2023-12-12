// App.js

import React, { useState } from 'react';
import './App.css';

function App() {
  const [targetNumber, setTargetNumber] = useState(generateRandomNumber());
  const [guess, setGuess] = useState('');
  const [message, setMessage] = useState('');

  function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
  }

  function handleInputChange(event) {
    setGuess(event.target.value);
  }

  function handleGuess() {
    const userGuess = parseInt(guess, 10);

    if (isNaN(userGuess)) {
      setMessage('Please enter a valid number.');
    } else if (userGuess === targetNumber) {
      setMessage(`Congratulations! You guessed the correct number.`);
      setTargetNumber(generateRandomNumber());
    } else {
      setMessage(
        `Sorry, ${userGuess > targetNumber ? 'too high' : 'too low'}. Try again.`
      );
    }

    setGuess('');
  }

  return (
    <div className="App">
      <h1>Guess the Number Game</h1>
      <p>{message}</p>
      <label>
        Enter your guess:
        <input type="text" value={guess} onChange={handleInputChange} />
      </label>
      <button onClick={handleGuess}>Guess</button>
    </div>
  );
}

export default App;
