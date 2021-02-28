/* React */
import React from "react";

/* FontAwesome */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowMaximize } from "@fortawesome/free-solid-svg-icons";
import { faWindowMinimize } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

/* Styles */
import Styled from "styled-components";

const Button = Styled.button`
  float: right;
  background-color: rgba(0, 0, 0, 0.0);
  border-radius:5px;
  border:1px solid white;
  width: 30px
  cursor:pointer;
  font-size:20px;
  padding:3px;
  margin: 0px 0px 8px 8px

  &:hover {
    background-color: ${(props) => props.color};
  }
`;

const Icon = Styled(FontAwesomeIcon)`
  filter:drop-shadow(1px 1px 1px black);
`;

const HandlerButton = (props) => {
  switch (props.type) {
    case "minimizing":
      return (
        <Button onClick={props.onClick} color={props.color}>
          <Icon color="white" icon={faWindowMinimize} />
        </Button>
      );
    case "maximizing":
      return (
        <Button onClick={props.onClick} color={props.color}>
          <Icon color="white" icon={faWindowMaximize} />
        </Button>
      );
    case "closing":
      return (
        <Button onClick={props.onClick} color={props.color}>
          <Icon color="white" icon={faTimes} />
        </Button>
      );
    default:
      return (
        <Button>
          <Icon color="white" icon={faTimes} />
        </Button>
      );
  }
};

export default HandlerButton;
