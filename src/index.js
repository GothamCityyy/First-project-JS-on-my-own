import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class App extends React.Component {
  state = {};

  OnClick = () => {
    alert("error405");
    const name = this.state.name;
    alert(name);
  };

  OnEnterwords = event => {
    const name = event.target.value;
    this.setState({ name });
  };

  render() {
    const name = this.state.name;
    return (
      <div>
        <input onInput={this.OnEnterwords} />
        <button onClick={this.OnClick}>ERROR</button>
        <div>{name}</div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
