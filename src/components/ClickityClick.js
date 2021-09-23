// Code ClickityClick Component Here
import React from "react";

class ClickityClick extends React.Component {
  constructor() {
    super();

    // Define the initial state:
    this.state = {
      hasBeenClicked: false,
    };
  }

  handleClick = () => {
    this.setState(prevState => {
        return {hasBeenClicked: !prevState.hasBeenClicked}
    })
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>{this.state.hasBeenClicked ? "add to" : "remove from"} favorites.</button>
      </div>
    );
  }
}

export default ClickityClick;