import React from "react";
import { useNavigate } from "react-router-dom";

export default function Contact() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/home");
  };
  return (
    <div>
      <h1>Contact</h1>
      <button onClick={handleClick}>Navigate</button>
    </div>
  );
}
