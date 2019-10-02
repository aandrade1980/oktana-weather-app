import React from "react";
import "./App.css";

// Components
import Form from "./components/Form";
import Weather from "./components/Weather";

class App extends React.Component {
  state = {
    forecast: undefined,
    error: undefined
  };

  setForecast = forecast =>
    this.setState({
      forecast
    });

  setError = error => this.setState(error);

  render() {
    return (
      <div className="App">
        <Form setForecast={this.setForecast} setError={this.setError} />
        <Weather forecast={this.state.forecast} />
        {this.state.error && this.state.error}
      </div>
    );
  }
}

export default App;
