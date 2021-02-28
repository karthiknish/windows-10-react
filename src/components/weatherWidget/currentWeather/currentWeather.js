/* React */
import React from "react";

/* Components */
import CurrentWeatherDetails from "./currentDetails";
import CurrentWeatherMain from "./currentMain";
import Loader from "../../loader";

/* Styles */
import Styled from "styled-components";

const OuterContainer = Styled.div`
  border: solid;
  border-radius: 25px;
  border-color: #18232e;
  background-color: #18232e;
  text-align: center;
  margin: 5px 15px 5px 5px;
`;

const InnerContainer = Styled.div`
  display: flex;
  flex-direction: row;
  text-align: center;
  margin: 5px;
  padding: 5px;
`;

const LargeText = Styled.h3`
  color: white;
  font-size: 130%;
`;

const CurrentWeather = (props) => {
  const loadingAnimStyle = {
    border: "solid",
    borderRadius: "25px",
    borderColor: "#18232e",
    margin: "5px 15px 5px 5px",
    padding: "65px 70px 25px 105px",
    width: "162px",
    height: "244px",
    backgroundColor: "#18232e",
  };

  const loader = <Loader type={2} style={loadingAnimStyle} />;

  const currentWeatherComponents = (
    <OuterContainer>
      <LargeText>Current Conditions</LargeText>
      <InnerContainer>
        <CurrentWeatherMain
          weatherIconType={props.currentWeather.WeatherIcon}
          weatherText={props.currentWeather.WeatherText}
        />
        <CurrentWeatherDetails currentWeather={props.currentWeather} />
      </InnerContainer>
    </OuterContainer>
  );

  return Object.keys(props.currentWeather).length === 0
    ? loader
    : currentWeatherComponents;
};

export default CurrentWeather;
