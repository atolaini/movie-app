import React from "react";

const layout = props => {
  return (
    <div className="layoutBg">
      <div className="container">{props.children}</div>
    </div>
  );
};

export default layout;
