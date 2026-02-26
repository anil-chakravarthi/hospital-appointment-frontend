const AppointmentCard = ({ appointment }) => {
  return (
    <div className="appointment-item">
      <div className="appointment-left">
        <p className="appointment-date">{appointment.date}</p>
        <p className="appointment-patient">
          {appointment.patientName}
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
