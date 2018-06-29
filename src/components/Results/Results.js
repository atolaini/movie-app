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
      <h4>Synopsis</h4>
      <p>{props.desc}</p>

      <p>Release Date: {props.date}</p>
      <p>Rating: {props.rating}</p>
    </section>
  );
};

export default results;
