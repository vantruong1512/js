import React, { useState, useEffect } from 'react';

const CountdownTimer = () => {
  const [counter, setCounter] = useState(10);

  useEffect(() => {
    const timer = setInterval(() => {
      setCounter(prev => {
        if (prev <= 1) {
          clearInterval(timer); 
          return 0;
        }
        return prev - 1;
      });
    }, 1000);


    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div style={{ fontSize: '2rem', textAlign: 'center', marginTop: '20px' }}>
      {counter > 0 ? <p>Thời gian còn lại: {counter}s</p> : <p>Hết giờ!</p>}
    </div>
  );
};

export default CountdownTimer;
