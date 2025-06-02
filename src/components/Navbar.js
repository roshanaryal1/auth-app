import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function Navbar() {
  const { currentUser, role, logout } = useAuth();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <Link className="navbar-brand" to="/">React Firebase App</Link>
        <div>
          {!currentUser && (
            <>
              <Link className="btn btn-outline-light me-2" to="/login">Login</Link>
              <Link className="btn btn-light" to="/signup">Sign Up</Link>
            </>
          )}
          {currentUser && role === "admin" && (
            <Link className="btn btn-outline-light me-2" to="/add-product">Add Product</Link>
          )}
          {currentUser && (
            <>
              <Link className="btn btn-outline-light me-2" to="/products">View Products</Link>
              <button className="btn btn-danger" onClick={logout}>Logout</button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
