import CardWorkedHours from "../../components/cardworkedhours/CardWorkedHours";
import "./Employee.scss";

const Employee = () => {
  return (
    <section className="app-work">
      <div className="app-work__header">Company Logo</div>

      <div className="app-work__text">
        <span className="app-wor__user">Good Morning User</span>
        <span className="app-work__tw">Lets get to work!</span>
      </div>

      <button className="clock-in__btn">Clock in</button>

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

      <CardWorkedHours />
    </section>
  );
};

export default Employee;
