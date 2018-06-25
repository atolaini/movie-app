import React from "react";

const selectionBtn = props => {
  return (
    <button
      value={props.genreID}
      className="selectionBtn"
      onClick={props.click}
    >
      {props.children}
    </button>
  );
};

export default selectionBtn;
