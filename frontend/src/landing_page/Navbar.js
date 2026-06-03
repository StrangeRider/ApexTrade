import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg border-bottom" style={{ backgroundColor: "#FFFFFF" }}>
      
      <div className="container p-2">

        {/* LEFT: Logo */}
        <Link className="navbar-brand" to="/">
          <img 
            src="media/images/logo.svg" 
            alt="Logo" 
            style={{ width: "120px", height: "auto" }}
          />
        </Link>

        {/* Mobile Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* RIGHT SIDE MENU */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            
            <li className="nav-item">
              <Link className="nav-link" to="/signup">Signup</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/product">Product</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/pricing">Pricing</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/support">Support</Link>
            </li>

          </ul>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;