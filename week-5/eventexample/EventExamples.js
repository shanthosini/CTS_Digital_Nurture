import React, { useState } from 'react';

function EventExamples() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const sayHello = () => {
    alert("Hello! Counter incremented successfully.");
  };


  const handleIncrement = () => {
    incrementCount();
    sayHello();
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };


  const sayWelcome = (message) => {
    alert(message);
  };

  
  const handlePress = (e) => {
    alert("I was clicked");
  };

  return (
    <div>
      <h2>Event Examples</h2>

      <h3>Counter: {count}</h3>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>

      <br /><br />

      <button onClick={() => sayWelcome("welcome")}>Say Welcome</button>

      <br /><br />

      <button onClick={handlePress}>Click Me</button>
    </div>
  );
}

export default EventExamples;