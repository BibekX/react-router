import React from "react";
import { Outlet } from "react-router-dom";

export default function About() {
  return (
    <div>
      <Outlet />
      <h1>About</h1>
    </div>
  );
}
