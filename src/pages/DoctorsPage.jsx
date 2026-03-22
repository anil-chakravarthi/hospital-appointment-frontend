import Navbar from "../components/common/Navbar";
import { useState } from "react";
import AddDoctor from "../components/doctors/AddDoctor";
import DoctorList from "../components/doctors/DoctorList";

const DoctorsPage = () => {
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

  const handleDoctorAdded = () => {
    setRefreshTrigger(prev => prev + 1);
  };

  return (
    <>
      <Navbar />

      <div style={{ padding: "2rem" }}>
        <h2>Doctors</h2>

        <AddDoctor onDoctorAdded={handleDoctorAdded} />
        <DoctorList refreshTrigger={refreshTrigger} />
      </div>
    </>
  );
};

export default DoctorsPage;