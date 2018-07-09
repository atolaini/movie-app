import React from "react";
import Aux from "../../hoc/Aux";
import BackBtn from "../../components/Buttons/BackBtn/BackBtn";

const yearSelector = props => {
  return (
    <Aux>
      <BackBtn click={props.startOver} />
      <p className="instructions">Enter a full year and click get results</p>
      <form className="yearSelectionForm">
        <input
          placeholder="year..."
          type="text"
          onChange={props.year}
          className="yearSelectionForm__input"
        />
      </form>
    </Aux>
  );
};

export default yearSelector;
