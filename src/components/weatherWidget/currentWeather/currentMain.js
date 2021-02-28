/* React */
import React from "react";

/* Components */
import WeatherIcon from "../weatherIcon";

/* Styles */
import Styled from "styled-components";

const MainContainer = Styled.div`
  margin: 5px;
  padding: 5px;
  text-align: center;
  width: 128px;
`;

const LargeText = Styled.h3`
  color: white;
  font-size: 130%;
`;

const CurrentWeatherMain = (props) => {
  return (
    <MainContainer>
      <WeatherIcon weatherIconType={props.weatherIconType} />
      <LargeText>{props.weatherText}</LargeText>
    </MainContainer>
  );
};

export default CurrentWeatherMain;
