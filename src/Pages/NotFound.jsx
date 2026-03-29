import { useNavigate } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="notfound-container">
      <div className="notfound-card">
        
        <h1 className="notfound-code">404</h1>

        <h2 className="notfound-title">Page Not Found</h2>

        <p className="notfound-text">
          Sorry, the page you’re looking for doesn’t exist or has been moved.
        </p>

        <div className="notfound-buttons">
          <button onClick={() => navigate("/login")}>
            Go to Login
          </button>

          <button onClick={() => navigate("/dashboard")}>
            Go to Dashboard
          </button>
        </div>

      </div>
    </div>
  );
};

export default NotFound;