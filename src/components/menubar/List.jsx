import { NavLink } from "react-router-dom";

const List = ({ children, text, path, pathname }) => {
  const currentPage = pathname === path;
  return (
    <NavLink to={path}>
      <li className="menu-list">
        {children}
        <span className={currentPage ? "list-active" : ""}>{text}</span>
      </li>
    </NavLink>
  );
};

export default List;
