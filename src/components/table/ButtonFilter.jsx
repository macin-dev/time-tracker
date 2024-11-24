import "./ButtonFilter.scss";

const ButtonFilter = () => {
  return (
    <button className="filter-btn">
      <span>Filter</span>
      <img
        className="filter-btn__icon"
        src="/src/assets/sliders.svg"
        alt="filter icon"
      />
    </button>
  );
};

export default ButtonFilter;
