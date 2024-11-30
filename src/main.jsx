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
import UserTable from "./pages/dashboard/users/UserTable.jsx";
import Clasroom from "./pages/dashboard/classroom/Clasroom.jsx";
import Employee from "./pages/employee/Employee.jsx";
import ClasroomPage from "./pages/clasroom/ClasroomPage.jsx";
import PageContainer from "./pages/user/PageContainer.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* Users paths */}
      <Route path="/" element={<PageContainer />}>
        <Route path="workedHours" element={<Employee />} />
        <Route path="classroom" element={<ClasroomPage />} />
        <Route path="account" element={<Employee />} />
      </Route>
      {/* Admin path */}
      <Route path="/dashboard" element={<App />}>
        <Route path="classroom" element={<Clasroom />} />
        <Route path="users" element={<UserTable />} />
      </Route>
    </>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
