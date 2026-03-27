import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Dashboard.css";

const Dashboard = () => {
  const { user, logout } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className="dashboard">

      {/* Sidebar */}
      <div className="sidebar">
        <div className="logo">MyApp</div>

        <div className="nav-links">
          <Link
            to="/dashboard"
            className={location.pathname === "/dashboard" ? "active" : ""}
          >
            Dashboard
          </Link>

          <Link
            to="/profile"
            className={location.pathname === "/profile" ? "active" : ""}
          >
            Profile
          </Link>
        </div>

        <button
          className="logout-btn"
          onClick={() => {
            logout();
            navigate("/login");
          }}
        >
          Logout
        </button>
      </div>

      {/* Main Content */}
      <div className="main-content">

        <div className="top-bar">
          <h2>Dashboard</h2>
          <p className="user-email">{user?.email}</p>
        </div>

        {/* Cards */}
        <div className="cards">

          <div className="card" onClick={() => navigate("/profile")}>
            <h3>👤 Profile</h3>
            <p>View and manage your profile</p>
          </div>

          <div className="card">
            <h3>⚙️ Settings</h3>
            <p>Update your preferences</p>
          </div>

          <div className="card">
            <h3>📊 Activity</h3>
            <p>Check your recent activity</p>
          </div>

          <div className="card">
            <h3>📁 Projects</h3>
            <p>Manage your work</p>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Dashboard;