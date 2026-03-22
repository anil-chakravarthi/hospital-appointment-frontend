import Navbar from "../components/common/Navbar";
import Home from "../components/home/Home";

const DashboardPage = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <>
      <Navbar />

      <div style={{ padding: "2rem" }}>
        <h2>
          {user.role === "ADMIN" && "Admin Dashboard"}
          {user.role === "DOCTOR" && "Doctor Dashboard"}
          {user.role === "PATIENT" && "Patient Dashboard"}
        </h2>
        <p style={{ marginTop: "0.5rem", color: "#555" }}>
            Welcome, {user?.username}
        </p>
        <Home />
      </div>
    </>
  );
};

export default DashboardPage;