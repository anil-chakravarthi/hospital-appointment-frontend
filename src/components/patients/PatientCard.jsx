const PatientCard = ({ name, age, gender, status }) => {
  return (
    <div className="patient-card">
      <div className="patient-info">
        <p className="patient-name">{name}</p>
        <p className="patient-meta">
          {age} yrs • {gender}
        </p>
      </div>

      <span className={`patient-status ${status.toLowerCase()}`}>
        {status}
      </span>
    </div>
  );
};

export default PatientCard;
