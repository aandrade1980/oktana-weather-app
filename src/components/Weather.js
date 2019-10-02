import React from "react";

const Weather = ({ forecast }) => {
  const weatherInfo = forecast ? (
    <div>
      <p>Conditions: {forecast[0].weather[0].description}</p>
      <p>Temperature: {forecast[0].main.temp}</p>
      <p>Humidity: {forecast[0].main.humidity}</p>
      <p>Pressure: {forecast[0].main.pressure}</p>
      <img
        src={`http://openweathermap.org/img/w/${forecast[0].weather[0].icon}.png`}
        alt="Weather"
      />
    </div>
  ) : (
    ""
  );

  return weatherInfo;
};

export default Weather;
