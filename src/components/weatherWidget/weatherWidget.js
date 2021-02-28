/* React */
import React, { Component } from "react";
import { createURL } from "../../util/util";

/* Components */
import CurrentWeather from "./currentWeather/currentWeather";
import WeatherForecasts from "./weatherForecasts/weatherForecasts";
import Window from "../windowWrapper/window";

/* Styles */
import Styled from "styled-components";

const WeatherWidgetContainer = Styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  border-radius: 0px 0px 7px 7px;
  padding: 15px 5px 5px 5px;
  background-color: #233343;
  box-shadow: inset 0px 0px 5px #000000;
`;

class WeatherWidget extends Component {
  state = {
    currentCoordinates: {},
    currentWeather: {},
    weatherForecasts: {},
  };

  componentDidMount() {
    this.getWeather();
  }

  getWeather = () => {
    if (!navigator.geolocation) {
      let locality = prompt(
        "Geolocation is not supported by your browser. Please type the name of your locality:",
        "Budapest"
      );
      if (locality === null) {
        const currentCoordinates = `Your current coordinates are unavailable. 
          Please check the list of supported browser or type your locality manually by the refreshing of your browser`;
        this.setState({ currentCoordinates });
      }
      return;
    }

    const success = async (position) => {
      const currentCoordinates = {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      };
      this.setState({ currentCoordinates });
      const locationKey = await this.getLocationKey();
      const currentWeather = await this.getCurrentWeatherConditions(
        locationKey
      );
      const fiveDaysForcasts = await this.getFiveDaysOfDailyForecasts(
        locationKey
      );
      this.setState({
        currentWeather: currentWeather[0],
        weatherForecasts: fiveDaysForcasts,
      });
    };

    const error = (message) => {
      alert(`The following error happened: ${message}`);
    };

    const settings = {
      enableHighAccuracy: true /* We want to enable high accuracy in the defining of coordinates*/,
      timeout: 10000 /* We don't want to wait longer than 5 seconds for a response */,
      maximumAge: 10000 /* We don't want gps data that is older than 10 seconds */,
    };
    navigator.geolocation.getCurrentPosition(success, error, settings);
  };

  getLocationKey = async () => {
    const queryParameters = {
      apikey: process.env.REACT_APP_ACCU_WEATHER_API_KEY,
      q:
        this.state.currentCoordinates.latitude +
        "%2C" +
        this.state.currentCoordinates.longitude,
      language: "en-us",
      details: false,
      toplevel: false,
    };

    let baseURL = process.env.REACT_APP_ACCU_WEATHER_GET_LOCATION_KEY_API_URL;

    const requestURL = createURL(baseURL, queryParameters);

    return fetch(requestURL)
      .then((response) => response.json())
      .then((data) => {
        return data.Key;
      })
      .catch((err) => this.setState({ error: err }));
  };

  getCurrentWeatherConditions = async (locationKey) => {
    const queryParameters = {
      apikey: process.env.REACT_APP_ACCU_WEATHER_API_KEY,
      language: "en-us",
      details: true,
    };

    let baseURL =
      process.env.REACT_APP_ACCU_WEATHER_GET_CURRENT_CONDITION_API_URL +
      locationKey;

    const requestURL = createURL(baseURL, queryParameters);

    return fetch(requestURL)
      .then((response) => response.json())
      .catch((err) => this.setState({ error: err }));
  };

  getFiveDaysOfDailyForecasts = async (locationkey) => {
    const queryParameters = {
      apikey: process.env.REACT_APP_ACCU_WEATHER_API_KEY,
      language: "en-us",
      details: false,
      metric: true,
    };

    let baseURL =
      process.env.REACT_APP_ACCU_WEATHER_GET_5DAYS_FORECASTS + locationkey;

    const requestURL = createURL(baseURL, queryParameters);

    return fetch(requestURL)
      .then((response) => response.json())
      .catch((err) => this.setState({ error: err }));
  };

  render() {
    return (
      <Window appName="Weather Widget">
        <WeatherWidgetContainer>
          <CurrentWeather currentWeather={this.state.currentWeather} />
          <WeatherForecasts weatherForecasts={this.state.weatherForecasts} />
        </WeatherWidgetContainer>
      </Window>
    );
  }
}

export default WeatherWidget;
