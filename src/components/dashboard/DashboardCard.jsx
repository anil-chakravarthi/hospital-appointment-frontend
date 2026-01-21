const DashboardCard = ({ title, count }) => {
  return (
    <div className="dashboard-card">
      <h3>{title}</h3>
      <p className="dashboard-count">{count}</p>
    </div>
  );
};

export default DashboardCard;
