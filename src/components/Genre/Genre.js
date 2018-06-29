import React from "react";
import Aux from "../../hoc/Aux";

const genre = props => {
  return (
    <Aux>
      <section className="genre">
        <h2>Choose your favourite genres</h2>
        {props.children}
      </section>
    </Aux>
  );
};

export default genre;
