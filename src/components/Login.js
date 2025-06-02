import React, { useRef, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setError("");
      await login(emailRef.current.value, passwordRef.current.value);
      navigate("/");
    } catch (err) {
      setError("Failed to login: " + err.message);
    }
  }

  return (
    <div className="container mt-5" style={{ maxWidth: 400 }}>
      <h2 className="mb-4 text-center">Login</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input type="email" ref={emailRef} className="form-control" placeholder="Email" required />
        </div>
        <div className="mb-3">
          <input type="password" ref={passwordRef} className="form-control" placeholder="Password" required />
        </div>
        <button type="submit" className="btn btn-success w-100">Login</button>
      </form>
      <p className="text-center mt-3">
        Need an account? <Link to="/signup">Sign up</Link>
      </p>
    </div>
  );
}
