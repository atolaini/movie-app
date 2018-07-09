import React, { Component } from "react";
import GenreData from "../../data/Genres";
import NextBtn from "../../components/Buttons/Next/NextBtn";
import Aux from "../../hoc/Aux";
import BackBtn from "../../components/Buttons/BackBtn/BackBtn";

class Genre extends Component {
  render() {
    const genreSelection = GenreData.genres.map(el => {
      return (
        <button
          key={el.id}
          onClick={this.props.clicked}
          className="selectionBtn"
          value={el.id}
        >
          {el.name}
        </button>
      );
    });
    return (
      <Aux>
        <BackBtn click={this.props.startOver} />
        <p className="instructions">Selec a one or more genres</p>
        <div className="genreLayout">{genreSelection}</div>
        <NextBtn />
      </Aux>
    );
  }
}

export default Genre;
