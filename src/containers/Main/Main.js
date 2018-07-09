import React, { Component } from "react";
import Aux from "../../hoc/Aux";
import Layout from "../../hoc/Layout";
import MainHeading from "../../components/MainHeader/MainHeader";
import Genre from "../../containers/Genre/Genre";
import ResultsBtn from "../../components/GetResultsBtn/GetResultsBtn";
import ResultsContainer from "../../components/Results/ResultsContainer/ResultsContainer";
import YearSelector from "../../components/YearSelection/YearSelection";
import StartBtn from "../../components/Buttons/StartBtn/StartBtn";
import Results from "../../components/Results/Results";

import { Route } from "react-router-dom";

import axios from "axios";

let newArr = [];
let APIKey = "a36227f9cffaeb70a3424d2e96f7f4c5";

class Main extends Component {
  state = {
    queryString: "",
    queryResults: [],
    year: ""
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
        `https://api.themoviedb.org/3/discover/movie?api_key=${APIKey}&with_genres=${genreSearch}&primary_release_year=${
          this.state.year
        }`
      )
      .then(res => {
        // console.log(res);
        this.setState({ queryResults: res.data.results });
        console.log(this.state.queryResults);
      })
      .catch(err => {
        console.log(err);
      });
  };

  yearHandler = e => {
    this.setState({ year: e.target.value });
  };

  render() {
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

          <Route exact path="/" component={StartBtn} />

          <Route
            path="/genres"
            render={() => <Genre clicked={this.genreSelectorHandler} />}
          />

          <Route
            path="/date"
            render={() => <YearSelector year={this.yearHandler} />}
          />

          <Route
            path="/date"
            render={() => <ResultsBtn getResults={this.getResultsHandler} />}
          />

          {/* <ResultsBtn getResults={this.getResultsHandler} /> */}

          <Route
            path="/results"
            render={() => <ResultsContainer>{results}</ResultsContainer>}
          />

          <ResultsContainer>{results}</ResultsContainer>
        </Layout>
      </Aux>
    );
  }
}

export default Main;
