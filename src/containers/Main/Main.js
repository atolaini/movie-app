import React, { Component } from "react";
import Aux from "../../hoc/Aux";
import Layout from "../../hoc/Layout";
import MainHeading from "../../components/MainHeader/MainHeader";
import Genre from "../../components/Genre/Genre";

import SelectionBtn from "../../components/selectionBtn/selectionBtn";
import GenreData from "../../data/Genres";

let newArr = [];

class Main extends Component {
  state = {
    queryString: ""
  };

  genreSelectorHandler = e => {
    newArr.push(e.target.value);
    this.setState({ queryString: newArr });
    console.log(newArr);
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

    return (
      <Aux>
        <Layout>
          <MainHeading />
          <Genre>{genreSelction}</Genre>
        </Layout>
      </Aux>
    );
  }
}

export default Main;
