import React from "react";

const API_KEY = "623b80fca82aa938a4dadc11ffe73bd3";

class Form extends React.Component {
  state = {
    city: ""
  };

  getWeather = async e => {
    e.preventDefault();
    const weatherData = await fetch(
      `http://api.openweathermap.org/data/2.5/forecast?q=${this.state.city}&appid=${API_KEY}`
    );
    const jRes = await weatherData.json();
    console.log("response => ", jRes);
    if (jRes.cod !== "200") {
      this.props.setError({ error: jRes.message });
      this.props.setForecast(null);
    } else {
      this.props.setError({ error: null });
      this.props.setForecast(jRes.list);
    }
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <form onSubmit={this.getWeather}>
        <input
          type="text"
          name="city"
          id="city"
          placeholder="Enter city"
          value={this.state.city}
          onChange={this.handleChange}
        />
        <button>Submit</button>
      </form>
    );
  }
}

export default Form;
