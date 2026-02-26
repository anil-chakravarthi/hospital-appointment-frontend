 import { NavLink } from "react-router-dom";

const Navbar = ()=>{
    return(
        <nav className="navbar">
            <h1 className="logo">Hospital Care</h1>
            <div className="nav-links">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/doctors">Doctors</NavLink>
                <NavLink to="/patients">Patients</NavLink>
                <NavLink to="/appointments">Appointments</NavLink>
            </div>
        </nav>
    );

}

export default Navbar;