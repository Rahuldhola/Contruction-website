import React, { useState, useEffect } from "react";
import "./count.css"; // Import the CSS file

function CountingEffect() {
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const target = 100; // Set target for first counter
  const target1 = 50; // Set target for second counter
  const target2 = 13;

  useEffect(() => {
    if (count >= target) return;

    const interval = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 30); // Speed: Every 50ms (you can change this value)

    return () => clearInterval(interval);
  }, [count]);

  useEffect(() => {
    if (count1 >= target1) return;

    const interval = setInterval(() => {
      setCount1((prevCount1) => prevCount1 + 1);
    }, 50); // Speed for second counter: every 100ms

    return () => clearInterval(interval);
  }, [count1]);

  useEffect(() => {
    if (count2 >= target2) return;

    const interval = setInterval(() => {
      setCount2((prevCount2) => prevCount2 + 1);
    }, 150); // Speed for second counter: every 100ms

    return () => clearInterval(interval);
  }, [count2]);

  return (
    <div className="counter-container">
      <div className="counter-item">
        <h1>Employees</h1>
        <div className="counter">
          <h2>{count}+</h2>
        </div>
      </div>
      <div className="counter-item">
        <h1>Projects</h1>
        <div className="counter">
          <h2>{count1}+</h2>
        </div>
      </div>
      <div className="counter-item">
        <h1>Years</h1>
        <div className="counter">
          <h2>{count2}+</h2>
        </div>
      </div>
    </div>
  );
}

export default CountingEffect;
