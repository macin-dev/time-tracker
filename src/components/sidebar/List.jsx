import PropTypes from "prop-types";
import "./List.scss";

const List = ({ navState, icon, text }) => {
  return (
    <li className={`${navState ? "navbar-list-open" : ""} navbar-list`}>
      <img className="navbar-list-svg" src={icon} alt="Icon List" />
      {navState ? <p className="navbar-list-text">{text}</p> : null}
    </li>
  );
};

export default List;

List.propTypes = {
  icon: PropTypes.string,
  text: PropTypes.string,
};
