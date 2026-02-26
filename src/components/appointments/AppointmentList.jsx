import AppointmentCard from "./AppointmentCard";

const AppointmentList = () => {
  // Temporary mock data (will be replaced by API later)
  const appointments = [];

  if (appointments.length === 0) {
    return (
      <div className="card appointment-card">
        <h3>Upcoming Appointments</h3>
        <p className="empty-text">No appointments found.</p>
      </div>
    );
  }

  return (
    <div className="card appointment-card">
      <h3>Upcoming Appointments</h3>

      <div className="appointment-list">
        {appointments.map((appt) => (
          <AppointmentCard key={appt.id} appointment={appt} />
        ))}
      </div>
    </div>
  );
};

export default AppointmentList;
