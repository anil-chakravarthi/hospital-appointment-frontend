const AppointmentCard = ({ appointment }) => {
  return (
    <div className="appointment-item">
      <div className="appointment-left">
        <p className="appointment-date">{appointment.appointmentDate}</p>

        <p className="appointment-patient">
          {appointment.patientName} ({appointment.patientAge || "--"} yrs • {appointment.patientGender || "--"})
        </p>

        <p className="appointment-doctor">
          {appointment.doctorName}
        </p>
      </div>

      <div className="appointment-right">
        <span className="status-badge scheduled">Scheduled</span>
      </div>
    </div>
  );
};

export default AppointmentCard;