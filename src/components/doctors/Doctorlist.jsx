import DoctorCard from "./DoctorCard";

const DoctorList = () => {
  const doctors = [
    {
      id: 1,
      name: "Dr. Rajesh Kumar",
      specialization: "Cardiology",
      status: "Active",
    },
    {
      id: 2,
      name: "Dr. Ananya Sharma",
      specialization: "Neurology",
      status: "Active",
    },
  ];

  return (
    <div className="card appointment-card">
      <h3>Doctors List</h3>

      <div className="doctor-list">
        {doctors.map((doctor) => (
          <DoctorCard
            key={doctor.id}
            name={doctor.name}
            specialization={doctor.specialization}
            status={doctor.status}
          />
        ))}
      </div>
    </div>
  );
};

export default DoctorList;
