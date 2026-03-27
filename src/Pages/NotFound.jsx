import React from "react";
import "./NotFound.css";

const NotFound = () => {
    return (
    <div className="notfound-container">
        <div className="notfound-card">
        <h1>404</h1>
        <h2>Page Not Found</h2>
        <p>The page you are looking for does not exist.</p>

        <a href="/dashboard" className="home-btn">
            Go Back Home
        </a>
        </div>
        </div>
    );
};

export default NotFound;