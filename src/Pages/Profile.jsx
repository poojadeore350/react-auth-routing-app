import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Profile.css";

const Profile = () => {
  const { user, logout } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className="profile-container">

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

      {/* Profile Content */}
      <div className="profile-content">
        <div className="profile-card">
          <h2>👤 Profile</h2>

          <p className="profile-info">
            <strong>Email:</strong> {user?.email}
          </p>

          <p className="profile-info">
            <strong>Name:</strong> User Name
          </p>

          <p className="profile-info">
            <strong>Role:</strong> Admin
          </p>
        </div>
      </div>

    </div>
  );
};

export default Profile;