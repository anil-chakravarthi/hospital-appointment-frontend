import { useEffect, useState } from "react";
import DoctorCard from "./DoctorCard";
import { fetchDoctors } from "../../api/doctorApi";

const DoctorList = ({ refreshTrigger }) => {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadDoctors = async () => {
    try {
      setLoading(true);
      const data = await fetchDoctors();
      setDoctors(data);
    } catch (error) {
      console.error("Error fetching doctors:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadDoctors();
  }, [refreshTrigger]);

  if (loading) return <p>Loading doctors...</p>;

  if (doctors.length === 0) {
    return (
      <div className="card appointment-card">
        <h3>Doctors List</h3>
        <p className="empty-text">No doctors found.</p>
      </div>
    );
  }

  return (
    <div className="card appointment-card">
      <h3>Doctors List</h3>

      <div className="doctor-list">
        {doctors.map((doctor) => (
          <DoctorCard
            key={doctor.doctorId}
            name={doctor.name}
            specialization={doctor.specialization}
            status="Active"
          />
        ))}
      </div>
    </div>
  );
};

export default DoctorList;