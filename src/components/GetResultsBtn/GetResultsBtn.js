import React from "react";
import { Link } from "react-router-dom";

const resultsBtn = props => {
  return (
    <button className="startBtn" onClick={props.getResults}>
      <Link to="/results" className="linkBtn">
        Get Results
      </Link>
    </button>
  );
};

export default resultsBtn;
