import { useEffect, useState } from "react";
import { fetchDoctors } from "../../api/doctorApi";
import { fetchPatients } from "../../api/patientApi";
import { createAppointment } from "../../api/appointmentApi";

const AddAppointment = ({ onAppointmentAdded, refreshTrigger }) => {
  const [patients, setPatients] = useState([]);
  const [doctors, setDoctors] = useState([]);
  const [patientId, setPatientId] = useState("");
  const [doctorId, setDoctorId] = useState("");
  const [appointmentDate, setAppointmentDate] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadPatients();
    loadDoctors();
  }, [refreshTrigger]); // ✅ refresh when trigger changes

  const loadPatients = async () => {
    try {
      const data = await fetchPatients();
      setPatients(data);
    } catch (error) {
      console.error("Error fetching patients:", error);
    }
  };

  const loadDoctors = async () => {
    try {
      const data = await fetchDoctors();
      setDoctors(data);
    } catch (error) {
      console.error("Error fetching doctors:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!patientId || !doctorId || !appointmentDate) {
      alert("Please fill all fields");
      return;
    }

    const appointmentData = {
      patientId: Number(patientId),
      doctorId: Number(doctorId),
      appointmentDate,
    };

    try {
      setLoading(true);
      await createAppointment(appointmentData);
      alert("Appointment booked successfully!");

      setPatientId("");
      setDoctorId("");
      setAppointmentDate("");

      if (onAppointmentAdded) {
        onAppointmentAdded();
      }

    } catch (error) {
      console.error("Error booking appointment:", error);
      alert("Failed to book appointment");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="card appointment-card">
      <h3>Book New Appointment</h3>

      <form className="appointment-form compact" onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label>Patient</label>
            <select value={patientId} onChange={(e) => setPatientId(e.target.value)}>
              <option value="">Select Patient</option>
              {patients.map((p) => (
                <option key={p.patientId} value={p.patientId}>
                  {p.name} ({p.age || "--"} yrs)
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label>Doctor</label>
            <select value={doctorId} onChange={(e) => setDoctorId(e.target.value)}>
              <option value="">Select Doctor</option>
              {doctors.map((d) => (
                <option key={d.doctorId} value={d.doctorId}>
                  {d.name} ({d.specialization})
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Appointment Date</label>
            <input
              type="date"
              value={appointmentDate}
              onChange={(e) => setAppointmentDate(e.target.value)}
            />
          </div>

          <div className="form-group align-end">
            <button className="primary-btn" type="submit" disabled={loading}>
              {loading ? "Booking..." : "Book Appointment"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddAppointment;