import React, { useState } from 'react';

function Counter() {
  // Initialize state using the useState hook
  const [count, setCount] = useState(0);

  // Event handler to increase count
  const incrementCount = () => {
    setCount(prevCount => prevCount + 1);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Counter App</h1>
      <p>Current Count: <strong>{count}</strong></p>
      <button onClick={incrementCount}>
        Increment
      </button>
    </div>
  );
}

export default Counter;
