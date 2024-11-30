import "./CurrentPeriodTitle.scss";

const CurrentPeriodTitle = () => {
  return (
    <div className="current-period">
      <h2 className="current-period__title">Current Pay Period</h2>
      <span className="current-period__date">Jul 01st - 31st, 2022</span>
    </div>
  );
};

export default CurrentPeriodTitle;
