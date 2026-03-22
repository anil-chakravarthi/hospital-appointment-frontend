import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../api/authApi";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false); // 👈 NEW
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const data = await loginUser({ username, password });
      localStorage.setItem("user", JSON.stringify(data));
      navigate("/dashboard");
    } catch {
      alert("Invalid username or password");
    }
  };

  return (
    <div className="page-container">
      <div className="card" style={{ maxWidth: "450px", margin: "3rem auto" }}>
        
        <h2 style={{ marginBottom: "1rem" }}>Login</h2>

        <form onSubmit={handleLogin} className="appointment-form compact">

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter email"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          {/* 👇 PASSWORD WITH EYE ICON */}
          <div className="form-group" style={{ position: "relative" }}>
            <label>Password</label>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ paddingRight: "40px" }}
            />

            {/* 👁️ ICON */}
            <span
              onClick={() => setShowPassword(!showPassword)}
              style={{
                position: "absolute",
                right: "10px",
                top: "38px",
                cursor: "pointer",
                fontSize: "14px",
                color: "#6b7280"
              }}
            >
              {showPassword ? "🙈" : "👁️"}
            </span>
          </div>

          <div className="form-group align-end">
            <button className="primary-btn">Login</button>
          </div>

        </form>

        <p style={{ marginTop: "1rem", textAlign: "center" }}>
          New user?{" "}
          <span
            onClick={() => navigate("/register/patient")}
            style={{ color: "var(--primary-color)", cursor: "pointer" }}
          >
            Register here
          </span>
        </p>

      </div>
    </div>
  );
};

export default LoginPage;