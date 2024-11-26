import PropTypes from "prop-types";
import "./StateBadge.scss";

const StateBadge = ({ colorClass, text }) => {
  return <span className={`state-badge ${colorClass}`}>{text}</span>;
};

export default StateBadge;

StateBadge.propTypes = {
  colorClass: PropTypes.string,
  text: PropTypes.string,
};
