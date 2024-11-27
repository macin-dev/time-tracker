import { useEffect, useState } from "react";
import "./Clock.scss";

const Clock = () => {
  const [time, setTime] = useState(new Date());

  const formatTime = () => {
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();
    let meridiem = hours >= 12 ? "pm" : "am";

    hours = hours % 12 || 12;

    return `${padZero(hours)}:${padZero(minutes)}:${padZero(
      seconds
    )} ${meridiem}`;
  };

  const padZero = (number) => {
    return (number < 10 ? "0" : "") + number;
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <main className="app-timer">
      <section className="app-clock">
        <span className="app-clock__text">{formatTime()}</span>
      </section>
    </main>
  );
};

export default Clock;
