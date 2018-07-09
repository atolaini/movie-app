import React, { Component } from "react";
import GenreData from "../../data/Genres";
import NextBtn from "../../components/Buttons/Next/NextBtn";

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
      <div>
        {genreSelection}
        <NextBtn />
      </div>
    );
  }
}

export default Genre;
