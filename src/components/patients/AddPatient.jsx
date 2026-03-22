import { useState } from "react";
import { createPatient } from "../../api/patientApi";

const AddPatient = ({ onPatientAdded }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !mobile || !age || !gender) {
      alert("Please fill all fields");
      return;
    }

    const patientData = {
      name,
      email,
      mobile,
      age: Number(age),
      gender,
    };

    try {
      setLoading(true);
      await createPatient(patientData);
      alert("Patient added successfully!");

      // reset
      setName("");
      setEmail("");
      setMobile("");
      setAge("");
      setGender("");

      if (onPatientAdded) {
        onPatientAdded();
      }

    } catch (error) {
      console.error(error);
      alert("Failed to add patient");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="card appointment-card">
      <h3>Add New Patient</h3>

      <form className="appointment-form compact" onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label>Patient Name</label>
            <input
              type="text"
              placeholder="Enter patient name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Mobile</label>
            <input
              type="text"
              placeholder="Enter mobile number"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Age</label>
            <input
              type="number"
              placeholder="Enter age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Gender</label>
            <select
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="form-group align-end">
            <button className="primary-btn" type="submit" disabled={loading}>
              {loading ? "Adding..." : "Add Patient"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddPatient;