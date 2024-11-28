import { useEffect, useState } from "react";

const Timer = () => {
  const [seconds, setSeconds] = useState(0);

  const formatTime = (seconds) => {
    const hour = 3600;
    const minute = 60;

    const hours = String(Math.floor(seconds / hour)).padStart(2, 0);
    const minutes = String(Math.floor((seconds % hour) / minute)).padStart(
      2,
      0
    );
    const remainingSeconds = String(Math.floor(seconds % minute)).padStart(
      2,
      0
    );

    return `${hours}:${minutes}:${remainingSeconds}`;
  };

  useEffect(() => {
    const idInterval = setInterval(() => {
      setSeconds((second) => second + 1);
    }, 1000);

    return () => {
      clearInterval(idInterval);
    };
  }, []);

  return (
    <section>
      <div>{formatTime(seconds)}</div>
    </section>
  );
};

export default Timer;
