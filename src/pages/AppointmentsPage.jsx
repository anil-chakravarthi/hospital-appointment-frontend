import Navbar from "../components/common/Navbar";
import { useState } from "react";
import AddAppointment from "../components/appointments/AddAppointment";
import AppointmentList from "../components/appointments/AppointmentList";

const AppointmentsPage = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  const [refreshTrigger, setRefreshTrigger] = useState(0);

  const handleAppointmentAdded = () => {
    setRefreshTrigger(prev => prev + 1);
  };

  return (
    <>
      <Navbar />

      <div style={{ padding: "2rem" }}>
        <h2>Appointments</h2>

        {/* Only PATIENT can book */}
        {user.role === "PATIENT" && (
          <AddAppointment
            onAppointmentAdded={handleAppointmentAdded}
            refreshTrigger={refreshTrigger}
          />
        )}

        <AppointmentList refreshTrigger={refreshTrigger} />
      </div>
    </>
  );
};

export default AppointmentsPage;