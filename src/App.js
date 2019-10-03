import React from "react";
import "./App.css";

// Components
import Form from "./components/Form";
import Weather from "./components/Weather";

class App extends React.Component {
  state = {
    forecast: undefined,
    error: undefined,
    description: "",
    temp: "",
    humidity: "",
    pressure: "",
    fahrenheit: true
  };

  setForecast = data =>
    this.setState({
      ...data
    });

  setError = error => this.setState(error);

  celsiusToFahrenheit = celsius => Math.round((celsius * 9) / 5 + 32);

  fahrenheitToCelsius = fahrenheit => Math.round(((fahrenheit - 32) * 5) / 9);

  changeTempMeasurement = () => {
    const temp = this.state.fahrenheit
      ? this.fahrenheitToCelsius(this.state.temp)
      : this.celsiusToFahrenheit(this.state.temp);
    this.setState({ fahrenheit: !this.state.fahrenheit, temp });
  };

  render() {
    return (
      <div className="App">
        <Form setForecast={this.setForecast} setError={this.setError} />
        <Weather
          forecast={this.state.forecast}
          description={this.state.description}
          temp={this.state.temp}
          humidity={this.state.humidity}
          pressure={this.state.pressure}
          fahrenheit={this.state.fahrenheit}
          changeTempMeasurement={this.changeTempMeasurement}
        />
        {this.state.error && this.state.error}
      </div>
    );
  }
}

export default App;