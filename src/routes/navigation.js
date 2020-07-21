import React from "react";
import { Link } from "react-router-dom";
import "./navigation.css";

function Navigation() {
  return (
    <div className="link">
      <Link to="/" className="homelink" style={{ textDecoration: "none" }}>
        Home
      </Link>
      <Link
        to="/about"
        className="aboutlink"
        style={{ textDecoration: "none" }}
      >
        About
      </Link>
    </div>
  );
}

export default Navigation;
