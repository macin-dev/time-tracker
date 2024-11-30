const CardTotalHours = () => {
  return (
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
  );
};

export default CardTotalHours;
