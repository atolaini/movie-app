import React from "react";
import { Link } from "react-router-dom";

const startBtn = () => {
  return (
    <Link to="/genres" className="linkBtn">
      <button className="startBtn">Click to start</button>
    </Link>
  );
};

export default startBtn;
