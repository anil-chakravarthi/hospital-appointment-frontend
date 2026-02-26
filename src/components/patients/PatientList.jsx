import PatientCard from "./PatientCard";

const PatientList = () => {
  const patients = [
    {
      id: 1,
      name: "Anil Chakravarthi",
      age: 22,
      gender: "Male",
      status: "Active",
    },
    {
      id: 2,
      name: "Sita Devi",
      age: 30,
      gender: "Female",
      status: "Active",
    },
  ];

  return (
    <div className="card appointment-card">
      <h3>Patients List</h3>

      <div className="patient-list">
        {patients.map((patient) => (
          <PatientCard
            key={patient.id}
            name={patient.name}
            age={patient.age}
            gender={patient.gender}
            status={patient.status}
          />
        ))}
      </div>
    </div>
  );
};

export default PatientList;
