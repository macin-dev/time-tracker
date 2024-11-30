import { useState } from "react";
import CardWorkedHours from "../../components/cardworkedhours/CardWorkedHours";
import "./Employee.scss";
import Button from "./Button";
import Timer from "./Timer";
import CurrentPeriodTitle from "../../components/cardworkedhours/CurrentPeriodTitle";

const Employee = () => {
  const [clockIn, setClockIn] = useState(false);

  return (
    <section className="main">
      <div className="app-work__text">
        {clockIn ? (
          <>
            <span className="app-work__tw">You are clocked in</span>
            <Timer />
          </>
        ) : (
          <>
            <span className="app-wor__user">Good Morning User</span>
            <span className="app-work__tw">Lets get to work!</span>
          </>
        )}
      </div>

      {clockIn ? (
        <div className="app-work__buttons">
          <Button type="primary-type" text="Take a break" />
          <Button
            onFunction={setClockIn}
            state={clockIn}
            type="secondary-type"
            text="Clock out"
          />
        </div>
      ) : (
        <div>
          <Button
            onFunction={setClockIn}
            state={clockIn}
            type="primary-type"
            text="Clock In"
          />
        </div>
      )}

      <section className="card-working-hours">
        <h2>Total working hour</h2>
        <div className="subcard-working-hours">
          <div className="subcard-woring-hours__today">
            <span className="subcard-text">Today</span>
            <span className="subcard-hours">00:00 Hrs</span>
          </div>
          <div className="subcard-woring-hours__total">
            <span className="subcard-text">Total Hours</span>
            <span className="subcard-hours">45:00 Hrs</span>
          </div>
        </div>
      </section>
      <CurrentPeriodTitle />
      <CardWorkedHours />
    </section>
  );
};

export default Employee;
