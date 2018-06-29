import React from "react";

const results = props => {
  return (
    <section className="results">
      <h2 className="results__title">{props.title}</h2>
      <img src="https://image.tmdb.org/t/p/w500$/gBmrsugfWpiXRh13Vo3j0WW55qD.jpg" />
    </section>
  );
};

export default results;
