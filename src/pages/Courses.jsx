import React from "react";
import { useNavigate } from "react-router-dom";

export default function Courses() {
  const navigate = useNavigate();

  return (
    <div style={{ padding: "50px", textAlign: "center" }}>
      <h1>Admission Page</h1>
      <p>Welcome to the Admission section of the university portal.</p>
      <button
        onClick={() => navigate("/")}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          border: "none",
          backgroundColor: "#800000",
          color: "white",
          borderRadius: "6px",
          cursor: "pointer",
        }}
      >
        Back to Home
      </button>
    </div>
  );
}
