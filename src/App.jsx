import React, { useState } from 'react';
import './App.css';

function App() {
  // Declare a state variable to store the message
  const [message, setMessage] = useState("Hello, World!");

  // Function to update the message when the button is clicked
  const handleClick = () => {
    setMessage("You've clicked the button!");
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>{message}</h1>
        <button onClick={handleClick}>
          Click Me
        </button>
      </header>
    </div>
  );
}

export default App;
