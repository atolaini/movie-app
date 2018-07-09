import React from "react";

const results = props => {
  return (
    <section className="results">
      <h2 className="results__title">{props.title}</h2>
      <div className="results__imgContainer">
        <img
          src={`https://image.tmdb.org/t/p/w500/${props.img}`}
          alt="movie poster"
          className="results__imgContainer--img"
        />
      </div>
      <h4 className="results__synopsisTitle">Synopsis</h4>
      <p className="results__description">{props.desc}</p>

      <p className="results__date">Release Date: {props.date}</p>
      <p className="results__rating">Rating: {props.rating}</p>
    </section>
  );
};

export default results;
