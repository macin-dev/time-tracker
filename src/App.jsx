import { Outlet } from "react-router-dom";
import NavBar from "./components/sidebar/NavBar";

function App() {
  return (
    <section className="dashboard">
      <NavBar />
      <Outlet />
    </section>
  );
}

export default App;
