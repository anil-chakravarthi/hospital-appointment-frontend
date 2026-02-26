import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from '../pages/HomePage';
import DoctorsPage from '../pages/DoctorsPage';
import  PatientsPage from '../pages/PatientsPage';
import AppointmentsPage from '../pages/AppointmentsPage';
import DashboardPage from '../pages/DashboardPage'

const AppRoutes = ()=>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="doctors" element={<DoctorsPage />}></Route>
                <Route path="patients" element={<PatientsPage />}></Route>
                <Route path="appointments" element={<AppointmentsPage />}></Route>
                <Route path="dashboard" element={<DashboardPage />}></Route>
            </Routes>
        </BrowserRouter>

    )
}

export default AppRoutes;