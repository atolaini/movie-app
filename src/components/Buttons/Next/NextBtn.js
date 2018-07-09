import React from "react";
import { Link } from "react-router-dom";

const nextBtn = () => {
  return (
    <Link to="/date" className="linkBtn">
      <button className="nextBtn">Next</button>
    </Link>
  );
};

export default nextBtn;
