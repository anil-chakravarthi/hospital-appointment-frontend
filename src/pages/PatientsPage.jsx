import Navbar from "../components/common/Navbar";
import { useState } from "react";
import AddPatient from "../components/patients/AddPatient";
import PatientList from "../components/patients/PatientList";

const PatientsPage = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  if (user.role !== "ADMIN") {
    return (
      <>
        <Navbar />
        <h3 style={{ padding: "2rem" }}>Access Denied</h3>
      </>
    );
  }

  const [refreshTrigger, setRefreshTrigger] = useState(0);

  const handlePatientAdded = () => {
    setRefreshTrigger(prev => prev + 1);
  };

  return (
    <>
      <Navbar />

      <div style={{ padding: "2rem" }}>
        <h2>Patients</h2>

        <AddPatient onPatientAdded={handlePatientAdded} />
        <PatientList refreshTrigger={refreshTrigger} />
      </div>
    </>
  );
};

export default PatientsPage;