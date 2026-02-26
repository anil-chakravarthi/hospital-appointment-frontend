import AddAppointment from "../components/appointments/AddAppointment";
import AppointmentList from "../components/appointments/AppointmentList";

const AppointmentsPage = ()=>{
    return(
        <div style={{padding:"2rem"}}>
            <h2>Appointments</h2>
            <p style={{ color: "#6b7280", marginBottom: "1.5rem" }}>
                Book and manage appointments here.
            </p>

            <AddAppointment />
            <AppointmentList />
        </div>
    )
}

export default AppointmentsPage;