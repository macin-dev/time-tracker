import { Outlet } from "react-router-dom";
import "./PageContainer.scss";
import MenuBar from "../../components/menubar/MenuBar";
import Logo from "../../components/global/Logo";

const PageContainer = () => {
  return (
    <section className="page-container">
      <Logo />
      <Outlet />
      <MenuBar />
    </section>
  );
};

export default PageContainer;
