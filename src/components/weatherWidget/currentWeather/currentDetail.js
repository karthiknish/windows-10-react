/* React */
import React from "react";

/* Components */
import WeatherIcon from "../weatherIcon";

/* Styles */
import Styled from "styled-components";

const DetailContainer = Styled.div`
  height: 47px;
  line-height: 47px;
`;

const DetailText = Styled.span`
  color: white;
  font-weight: bold;
  font-size: 120%;
`;

const CurrentDetail = (props) => {
  const { weatherIconType, style, data, suffix } = props;

  return (
    <DetailContainer>
      <WeatherIcon weatherIconType={weatherIconType} style={style} />
      <DetailText>{data + " " + suffix}</DetailText>
    </DetailContainer>
  );
};

export default CurrentDetail;
