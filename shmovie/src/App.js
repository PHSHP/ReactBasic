import React, { Component } from "react";
import PropTypes from "prop-types";

function Food(props) {
  console.log(props.name);
  return <h1>I like me {props.name}</h1>;
}

class App extends Component {
  render() {
    return (
      <>
        <h1>hello</h1>
        <Food name="kk" />
      </>
    );
  }
}

export default App;
