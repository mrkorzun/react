import { useEffect, useState } from "react";

const Timer = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
      console.log(`Interval - ${Date.now()}`);
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);
  return <p>TimerBox - {time.toLocaleTimeString()}</p>;
};

export default Timer;
