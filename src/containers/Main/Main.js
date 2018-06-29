import React, { Component } from "react";
import Aux from "../../hoc/Aux";
import Layout from "../../hoc/Layout";
import MainHeading from "../../components/MainHeader/MainHeader";
import Genre from "../../components/Genre/Genre";
import ResultsBtn from "../../components/GetResultsBtn/GetResultsBtn";
import ResultsContainer from "../../components/Results/ResultsContainer/ResultsContainer";

import SelectionBtn from "../../components/selectionBtn/selectionBtn";
import GenreData from "../../data/Genres";
import Results from "../../components/Results/Results";

import axios from "axios";

let newArr = [];
let APIKey = "a36227f9cffaeb70a3424d2e96f7f4c5";

// IF I WANT TO ADD A YEAR AS A SEARCH FIELD
// &primary_release_year=1967

class Main extends Component {
  state = {
    queryString: "",
    queryResults: []
  };

  // THIS IS TO CREATE A QUERY STRING FROM USERS SELECTION
  genreSelectorHandler = e => {
    newArr.push(e.target.value);
    this.setState({ queryString: newArr });
    console.log(newArr);
  };

  // AXIOS REQUEST
  getResultsHandler = e => {
    e.preventDefault();
    let searchString = this.state.queryString;
    let genreSearch = searchString.join("|");
    console.log(genreSearch);
    axios
      .get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${APIKey}&with_genres=${genreSearch}`
      )
      .then(res => {
        // console.log(res);
        this.setState({ queryResults: res.data.results });
        console.log(this.state.queryResults);
      });
  };

  render() {
    const genreSelction = GenreData.genres.map(el => (
      <SelectionBtn
        genreID={el.id}
        key={el.id}
        click={this.genreSelectorHandler}
      >
        {el.name}
      </SelectionBtn>
    ));

    const results = this.state.queryResults.map(movie => (
      <Results
        title={movie.title}
        img={movie.poster_path}
        desc={movie.overview}
        date={movie.release_date}
        rating={movie.vote_average}
        key={movie.id}
      />
    ));

    return (
      <Aux>
        <Layout>
          <MainHeading />
          <Genre>{genreSelction}</Genre>
          <ResultsBtn getResults={this.getResultsHandler} />
          <ResultsContainer>{results}</ResultsContainer>
        </Layout>
      </Aux>
    );
  }
}

export default Main;
