const DoctorCard = ({ name, specialization, status }) => {
  return (
    <div className="doctor-card">
      <div className="doctor-info">
        <p className="doctor-name">{name}</p>
        <p className="doctor-specialization">{specialization}</p>
      </div>

      <span className={`doctor-status ${status.toLowerCase()}`}>
        {status}
      </span>
    </div>
  );
};

export default DoctorCard;
