import ClockIcon from "./ClockIcon";
import List from "./List";
import { useLocation } from "react-router-dom";
import ClassroomIcon from "./ClassroomIcon";

import "./MenuBar.scss";
import UserIcon from "./UserIcon";

const MenuBar = () => {
  const { pathname } = useLocation();

  return (
    <nav className="user-menu">
      <ul className="menu-lists">
        <List path="/workedHours" text="Clock-in" pathname={pathname}>
          <ClockIcon stroke={pathname == "/workedHours" ? "#f7c343" : ""} />
        </List>
        <List path="/classroom" text="Classroom" pathname={pathname}>
          <ClassroomIcon stroke={pathname == "/classroom" ? "#f7c343" : ""} />
        </List>
        <List path="/account" text="Account" pathname={pathname}>
          <UserIcon fill={pathname == "/account" ? "#f7c343" : ""} />
        </List>
      </ul>
    </nav>
  );
};

export default MenuBar;
