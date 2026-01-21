import DashboardCard from "./DashboardCard";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h2 className="dashboard-title">Dashboard</h2>

      <div className="dashboard-cards">
        <DashboardCard title="Patients" count="0" />
        <DashboardCard title="Doctors" count="0" />
        <DashboardCard title="Appointments" count="0" />
      </div>
    </div>
  );
};

export default Dashboard;
