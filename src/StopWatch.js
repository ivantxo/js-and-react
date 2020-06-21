import React, { useState, useEffect } from 'react';

function StopWatch() {
  const [isOn, setIsOn] = useState(false);
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    let interval;
    if (isOn) {
      console.log('effect runs');
      interval = setInterval(
        () => setTimer(timer + 1), 
        1000
      );
    }

    return () => clearInterval(interval);
  }, [isOn, timer]);

  return (
    <div>
      { timer }&nbsp;&nbsp;

      {!isOn && (
        <button type="button" onClick={() => setIsOn(true)}>
          Start
        </button>
      )}

      {isOn && (
        <button type="button" onClick={() => setIsOn(false)}>
          Stop
        </button>
      )}
    </div>
  );
}

export default StopWatch;
