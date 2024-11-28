import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.scss";
import App from "./App.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import UserTable from "./pages/users/UserTable.jsx";
import Clasroom from "./pages/classroom/Clasroom.jsx";
import Checker from "./pages/checador/Checker.jsx";
import Employee from "./pages/employee/Employee.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />}>
        <Route path="/clasroom" element={<Clasroom />} />
        <Route path="users" element={<UserTable />} />
      </Route>
      <Route path="checador" element={<Checker />} />
      <Route path="checker" element={<Employee />} />
    </>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
