import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createPatient } from "../api/patientApi";

const RegisterPatientPage = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
    age: "",
    gender: "",
    password: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await createPatient(form);
      alert("Registered successfully!");
      navigate("/login");
    } catch {
      alert("Registration failed");
    }
  };

  return (
    <div className="page-container">
      <div className="card" style={{ maxWidth: "500px", margin: "2rem auto" }}>
        
        <h2 style={{ marginBottom: "1rem" }}>Patient Registration</h2>

        <form onSubmit={handleSubmit} className="appointment-form compact">

          <div className="form-row">
            <div className="form-group">
              <label>Name</label>
              <input name="name" placeholder="Enter name" onChange={handleChange} />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input name="email" placeholder="Enter email" onChange={handleChange} />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Mobile</label>
              <input name="mobile" placeholder="Enter mobile" onChange={handleChange} />
            </div>

            <div className="form-group">
              <label>Age</label>
              <input name="age" placeholder="Enter age" onChange={handleChange} />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Gender</label>
              <input name="gender" placeholder="Male / Female" onChange={handleChange} />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input type="password" name="password" placeholder="Enter password" onChange={handleChange} />
            </div>
          </div>

          <div className="form-group align-end">
            <button className="primary-btn">Register</button>
          </div>

        </form>

        <p style={{ marginTop: "1rem", textAlign: "center" }}>
          Already registered?{" "}
          <span
            onClick={() => navigate("/login")}
            style={{ color: "var(--primary-color)", cursor: "pointer" }}
          >
            Login here
          </span>
        </p>

      </div>
    </div>
  );
};

export default RegisterPatientPage;