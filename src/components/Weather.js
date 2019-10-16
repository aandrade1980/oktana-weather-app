import React from "react";

// Redux
import { connect } from "react-redux";
import { addToFavorites } from "../redux/actions/weatherActions";

const Weather = ({
  forecast,
  description,
  temp,
  humidity,
  pressure,
  fahrenheit,
  city,
  country,
  id,
  changeTempMeasurement,
  addToFavorites
}) => {
  const tempDegrees = fahrenheit ? "°F" : "°C";

  const weatherInfo = forecast && (
    <div>
      <p>
        {city}, {country}
      </p>
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
  );

  return (
    <div className="weather-info-container">
      {weatherInfo}
      <div>
        {forecast && (
          <button
            onClick={() =>
              addToFavorites({
                description,
                temp,
                humidity,
                pressure,
                fahrenheit,
                city,
                country,
                id
              })
            }
          >
            Add to Favorite
          </button>
        )}
      </div>
    </div>
  );
};

export default connect(
  null,
  { addToFavorites }
)(Weather);
