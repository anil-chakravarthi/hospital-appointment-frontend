import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2 className="logo">Hospital Appointment System</h2>

      <div className="nav-links">
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/patients">Patients</NavLink>
        <NavLink to="/doctors">Doctors</NavLink>
        <NavLink to="/appointments">Appointments</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
