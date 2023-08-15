import React, { useState, useEffect } from "react";

function Timer({ duration }) {
  const [timeCol, setTimeCol] = useState(duration);

  useEffect(() => {
    setTimeout(() => {
      setTimeCol(timeCol - 1000);
    }, 1000);
  }, [timeCol]);
  const getFormattedTime = (milliseconds) => {
    let total_seconds = parseInt(Math.floor(milliseconds / 1000));
    let total_minutes = parseInt(Math.floor(total_seconds / 60));
    let total_hourse = parseInt(Math.floor(total_minutes / 60));
    let days = parseInt(Math.floor(total_hourse / 24));
    let seconds = parseInt(total_seconds % 60);
    let minutes = parseInt(total_minutes % 60);
    let hourse = parseInt(total_hourse % 24);

    return `${days} : ${hourse} : ${minutes} : ${seconds}`;
  };
  return <div className="timer-days">{getFormattedTime(timeCol)}</div>;
}

export default Timer;
