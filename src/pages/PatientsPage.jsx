import PatientList from "../components/patients/PatientList";

const PatientsPage = () => {
  return (
    <div style={{ padding: "2rem" }}>
      <h2>Patients</h2>
      <p style={{ color: "#6b7280", marginBottom: "1.5rem" }}>
        Manage patient records here.
      </p>

      <PatientList />
    </div>
  );
};

export default PatientsPage;
