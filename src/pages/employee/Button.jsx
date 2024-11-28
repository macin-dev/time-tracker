import PropTypes from "prop-types";
import "./Button.scss";

const Button = ({ onFunction, state, text, type }) => {
  return (
    <button
      onClick={() => onFunction(!state)}
      className={`button-shape ${type}`}
    >
      {text}
    </button>
  );
};

Button.propTypes = {
  onFunction: PropTypes.func,
  state: PropTypes.bool,
  text: PropTypes.string,
  type: PropTypes.string,
};

export default Button;
