import "./CardWorkedHours.scss";

const CardWorkedHours = () => {
  return (
    <aside className="card-work-hours">
      <div className="card-work-hours__general">
        <span className="card-work-hours__date">July 16th, 2022</span>
        <span className="card-work-hours__total">08:00 total hours</span>
      </div>
      <div className="card-work-hours__general">
        <span className="total-hours__title">In & out</span>
        <div className="total-hours">
          <span className="work-hour">09:00 AM</span>
          <span>...</span>
          <span className="work-hour">10:00 PM</span>
        </div>
      </div>
    </aside>
  );
};

export default CardWorkedHours;
