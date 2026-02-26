import DoctorList from "../components/doctors/DoctorList";

const DoctorsPage = () => {
  return (
    <div style={{ padding: "2rem" }}>
      <h2>Doctors</h2>
      <p style={{ color: "#6b7280", marginBottom: "1.5rem" }}>
        View and manage doctors in the hospital.
      </p>

      <DoctorList />
    </div>
  );
};

export default DoctorsPage;
