import { useNavigate } from "react-router-dom";

const HeroSection = ()=>{
    const navigate = useNavigate();
    return(
        <section className="hero">
            <h2>Book Hospital Appointments Easily</h2>
            <p> Manage patients, doctors, and appointments seamlessly with our simple 
                and reliable hospital appointment system.
            </p>
            <div className="hero-buttons">
                <button className="primary-btn" onClick={()=>navigate("/appointments")}>Book Appointment</button>
                <button className="secondary-btn" onClick={()=>navigate("/doctors")}>View Doctors</button>
            </div>
        </section>
    );
}
export default HeroSection;