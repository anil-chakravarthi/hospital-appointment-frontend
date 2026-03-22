import { NavLink } from "react-router-dom";

const Navbar = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("user");
  };

  return (
    <nav className="navbar">
      <h1 className="logo">Hospital Care</h1>

      <div className="nav-links">

        <NavLink to="/dashboard">Home</NavLink>

        {user?.role === "ADMIN" && (
          <>
            <NavLink to="/doctors">Doctors</NavLink>
            <NavLink to="/patients">Patients</NavLink>
          </>
        )}

        {(user?.role === "PATIENT" || user?.role === "DOCTOR") && (
          <NavLink to="/appointments">Appointments</NavLink>
        )}

        {user && (
          <NavLink to="/login" onClick={handleLogout}>
            Logout
          </NavLink>
        )}

      </div>
    </nav>
  );
};

export default Navbar;