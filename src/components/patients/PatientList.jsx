import { useEffect, useState } from "react";
import PatientCard from "./PatientCard";
import { fetchPatients } from "../../api/patientApi";

const PatientList = ({ refreshTrigger }) => {
  const [patients, setPatients] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadPatients = async () => {
    try {
      setLoading(true);
      const data = await fetchPatients();
      setPatients(data);
    } catch (error) {
      console.error("Error fetching patients:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadPatients();
  }, [refreshTrigger]);

  if (loading) {
    return <p>Loading patients...</p>;
  }

  if (patients.length === 0) {
    return (
      <div className="card appointment-card">
        <h3>Patients List</h3>
        <p className="empty-text">No patients found.</p>
      </div>
    );
  }

  return (
    <div className="card appointment-card">
      <h3>Patients List</h3>

      <div className="patient-list">
        {patients.map((patient) => (
          <PatientCard
            key={patient.patientId}
            name={patient.name}
            age={patient.age || "--"}
            gender={patient.gender || "--"}
            status="Active"
          />
        ))}
      </div>
    </div>
  );
};

export default PatientList;
