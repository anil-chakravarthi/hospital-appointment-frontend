import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Patients from "../pages/Patients";
import Doctors from "../pages/Doctors";
import Appointments from "../pages/Appointments";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/patients" element={<Patients />} />
      <Route path="/doctors" element={<Doctors />} />
      <Route path="/appointments" element={<Appointments />} />
    </Routes>
  );
};

export default AppRoutes;
