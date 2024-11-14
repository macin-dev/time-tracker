const ToggleNavbar = ({ navState, onClick }) => {
  return (
    <span onClick={onClick} className="nav-toggle">
      <img
        className="nav-toggle-icon"
        src={`${
          navState
            ? "/src/assets/chevron-left.svg"
            : "/src/assets/chevron-right.svg"
        }`}
        alt="arrow right icon"
      />
    </span>
  );
};

export default ToggleNavbar;
