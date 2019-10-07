import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip
} from "recharts";

const Charts = ({ forecast, show }) => {
  const weatherData = [];

  forecast &&
    forecast.forEach(weather =>
      weatherData.push({
        date: weather.dt_txt.split(" ")[0],
        temp: weather.main.temp,
        humidity: weather.main.humidity,
        pressure: weather.main.pressure
      })
    );

  return (
    <AreaChart
      width={600}
      height={500}
      data={weatherData}
      margin={{
        top: 10,
        right: 30,
        left: 0,
        bottom: 0
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="date" />
      <YAxis />
      <Tooltip />
      <Area type="monotone" dataKey={show} stroke="#82ca9d" fill="#82ca9d" />
    </AreaChart>
  );
};

export default Charts;
