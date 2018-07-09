import React from "react";
import { Link } from "react-router-dom";

const backBtn = props => {
  return (
    <Link to="/" className="linkBtn">
      <button className="startBtn" onClick={props.click}>
        Back to start
      </button>
    </Link>
  );
};

export default backBtn;
