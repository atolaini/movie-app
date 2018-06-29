import React from "react";

const resultsBtn = props => {
  return (
    <button className="resultsBtn" onClick={props.getResults}>
      Get Results
    </button>
  );
};

export default resultsBtn;
