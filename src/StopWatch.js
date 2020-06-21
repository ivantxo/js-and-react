import React, { useState, useEffect } from 'react';

function StopWatch() {
  const [isOn, setIsOn] = useState(false);

  useEffect(() => {
    console.log('effect runs');
    const interval = setInterval(() => console.log('tick'), 1000);

    return () => clearInterval(interval);
  });

  return (
    <div>
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
