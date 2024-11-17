import { Outlet } from "react-router-dom";
import NavBar from "./components/sidebar/NavBar";
import TopBar from "./components/topbar/TopBar";

function App() {
  return (
    <section className="dashboard">
      <NavBar />
      <TopBar />
      <Outlet />
    </section>
  );
}

export default App;
