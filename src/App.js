import React from "react";
import classNames from "classnames";

import "./App.css";

// Components
import Form from "./components/Form";
import Weather from "./components/Weather";
import Charts from "./components/Charts";
import Favorites from "./components/Favorites";
import CustomButton from "./components/CustomButton";

const initialWeather = {
  forecast: undefined,
  description: "",
  temp: "",
  humidity: "",
  pressure: "",
  cityId: "",
  city: "",
  country: "",
  fahrenheit: true
};

class App extends React.Component {
  state = {
    error: undefined,
    chartInfoToShow: "temp",
    ...initialWeather
  };

  setWeather = (data = initialWeather) =>
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

  changeChartData = e => this.setState({ chartInfoToShow: e.target.value });

  render() {
    return (
      <div className="App">
        <React.StrictMode>
          <Form setWeather={this.setWeather} setError={this.setError} />
          <Weather
            forecast={this.state.forecast}
            description={this.state.description}
            temp={this.state.temp}
            humidity={this.state.humidity}
            pressure={this.state.pressure}
            fahrenheit={this.state.fahrenheit}
            changeTempMeasurement={this.changeTempMeasurement}
            city={this.state.city}
            country={this.state.country}
            id={this.state.cityId}
          />
          {this.state.forecast && (
            <>
              <div className="chart-buttons-container">
                <CustomButton
                  value="temp"
                  onClick={e => this.changeChartData(e)}
                  className={classNames({
                    active: this.state.chartInfoToShow === "temp"
                  })}
                >
                  Temp
                </CustomButton>
                <CustomButton
                  value="humidity"
                  onClick={e => this.changeChartData(e)}
                  className={classNames({
                    active: this.state.chartInfoToShow === "humidity"
                  })}
                >
                  Humidity
                </CustomButton>
                <CustomButton
                  value="pressure"
                  onClick={e => this.changeChartData(e)}
                  className={classNames({
                    active: this.state.chartInfoToShow === "pressure"
                  })}
                >
                  Pressure
                </CustomButton>
              </div>
              <Charts
                forecast={this.state.forecast}
                show={this.state.chartInfoToShow}
              />
            </>
          )}
          <Favorites />
        </React.StrictMode>
        {this.state.error && (
          <p style={{ gridArea: "data" }}>{this.state.error}</p>
        )}
      </div>
    );
  }
}

export default App;
