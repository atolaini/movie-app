import React from "react";

const yearSelector = props => {
  return (
    <form>
      <input type="text" onChange={props.year} />
    </form>
  );
};

export default yearSelector;
