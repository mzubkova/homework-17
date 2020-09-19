import React, { useState, useEffect } from "react";
import "./timer.css";

const Timer = ({ initialState = false, initialTime = 0, step = "1000" }) => {
  const [time, setTime] = useState(initialTime);
  const [isActive, setIsActive] = useState(initialState);

  const timeToggle = () => {
    setIsActive(!isActive);
  };

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setTime((time) => time - 1);
      }, step);
    } else if (!isActive && time !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, time, step]);

  return (
    <div className="timer-inner">
      <button className="timer-button" onClick={timeToggle}>
        {isActive ? "Pause" : "Start"}
      </button>
      <div className="timer-progress" style={{ width: `${time}%` }}>
        <h3>Progress: {step} ms</h3>
      </div>
      <h1 className="title">Залишилось часу: {time}</h1>
    </div>
  );
};

export default Timer;
