import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import DashboardPage from "../pages/DashboardPage";
import DoctorsPage from "../pages/DoctorsPage";
import PatientsPage from "../pages/PatientsPage";
import AppointmentsPage from "../pages/AppointmentsPage";
import LoginPage from "../pages/LoginPage";
import RegisterPatientPage from "../pages/RegisterPatientPage";

const AppRoutes = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <BrowserRouter>
      <Routes>

        <Route
          path="/"
          element={user ? <Navigate to="/dashboard" /> : <Navigate to="/login" />}
        />

        <Route path="/login" element={<LoginPage />} />
        <Route path="/register/patient" element={<RegisterPatientPage />} />

        <Route path="/dashboard" element={user ? <DashboardPage /> : <Navigate to="/login" />} />
        <Route path="/doctors" element={user ? <DoctorsPage /> : <Navigate to="/login" />} />
        <Route path="/patients" element={user ? <PatientsPage /> : <Navigate to="/login" />} />
        <Route path="/appointments" element={user ? <AppointmentsPage /> : <Navigate to="/login" />} />

      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;