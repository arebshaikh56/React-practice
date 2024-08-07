import React, { useState, useEffect } from 'react';

function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);

    return () => {
      clearInterval(timer); // Cleanup function
    };
  }, []); // Empty array means setup once

  return <div>
    <h1>UseEffect - Timer</h1>
    <h3>Count: {count}</h3>
    </div>;
}

export default Timer;
