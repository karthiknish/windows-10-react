/* React */
import React from "react";

/* Styles */
import Styled from "styled-components";

const Temp = Styled.div`
  color: ${(props) => {
    switch (props.color) {
      case "red":
        return "#ed5a54";
      case "blue":
        return "#3f88c5";
      default:
        return "white";
    }
  }}
  font-weight: bold;
  font-size: ${(props) => (props.size === "large" ? "300%" : "120%")};
  margin: 19.2px 0px 20px 0px;
`;

const Temperature = (props) => {
  return (
    <Temp color={props.color} size={props.size}>
      {props.value} {props.unit === "C" ? "°C" : "°F"}
    </Temp>
  );
};

export default Temperature;
