import { useState } from "react";
import { createDoctor } from "../../api/doctorApi";

const AddDoctor = ({ onDoctorAdded }) => {
  const [name, setName] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !specialization) {
      alert("Please fill all fields");
      return;
    }

    const doctorData = { name, specialization };

    try {
      setLoading(true);
      await createDoctor(doctorData);
      alert("Doctor added successfully!");

      setName("");
      setSpecialization("");

      if (onDoctorAdded) {
        onDoctorAdded();
      }

    } catch (error) {
      console.error(error);
      alert("Failed to add doctor");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="card appointment-card">
      <h3>Add Doctor</h3>

      <form className="appointment-form compact" onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              placeholder="Enter doctor name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Specialization</label>
            <input
              type="text"
              placeholder="Enter specialization"
              value={specialization}
              onChange={(e) => setSpecialization(e.target.value)}
            />
          </div>
        </div>

        <div className="form-group align-end">
          <button className="primary-btn" disabled={loading}>
            {loading ? "Adding..." : "Add Doctor"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddDoctor;