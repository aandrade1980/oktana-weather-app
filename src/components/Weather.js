import React from "react";

const Weather = ({
  forecast,
  description,
  temp,
  humidity,
  pressure,
  fahrenheit,
  changeTempMeasurement
}) => {
  const tempDegrees = fahrenheit ? "Fahrenheit" : "Celsius";

  const weatherInfo = forecast ? (
    <div>
      <p>Conditions: {description}</p>
      <p>
        Temperature: {temp} {tempDegrees}
        <button onClick={changeTempMeasurement}>Change Temp</button>
      </p>
      <p>Humidity: {humidity}</p>
      <p>Pressure: {pressure}</p>
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
