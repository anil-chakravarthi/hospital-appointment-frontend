import { useEffect, useState } from "react";
import { fetchAppointments } from "../../api/appointmentApi";
import AppointmentCard from "./AppointmentCard";

const AppointmentList = ({ refreshTrigger }) => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadAppointments = async () => {
    try {
      setLoading(true);
      const data = await fetchAppointments();
      setAppointments(data);
    } catch (error) {
      console.error("Error fetching appointments:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadAppointments();
  }, [refreshTrigger]); 

  if (loading) return <p>Loading appointments...</p>;

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
          <AppointmentCard key={appt.appointmentId} appointment={appt} />
        ))}
      </div>
    </div>
  );
};

export default AppointmentList;