import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <span className="app-title">Hospital Appointment System</span>
      </div>

      <div className="navbar-right">
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/patients">Patients</NavLink>
        <NavLink to="/doctors">Doctors</NavLink>
        <NavLink to="/appointments">Appointments</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
