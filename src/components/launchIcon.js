/* React */
import React, { useState } from "react";
import Draggable from "react-draggable";

/* Styles */
import Styled from "styled-components";

const IconContainer = Styled.div`
  position: relative;
  z-index: ${(props) => props.zIndex};
  text-align: center;
  display: inline-block;
  margin: 5px;
`;

const LauncherIcon = Styled.img`
  display: block;
  padding: ${(props) => props.padding};
  -webkit-filter: ${(props) =>
    props.shadow
      ? "drop-shadow(6px 6px 3px rgba(0,0,0,0.5)); filter: drop-shadow(6px 6px 3px rgba(0,0,0,0.5))"
      : ""};
`;

const AppName = Styled.span`
  color: white;
  font-family: Raleway;
  font-size: 20px;
  text-shadow: 2px 2px 3px #000000;
`;

const LaunchIcon = (props) => {
  const [isIconOnTheTop, setIsIconOnTheTop] = useState(false);

  const toggleZIndex = (position) => {
    if (isIconOnTheTop) setIsIconOnTheTop(false);
    else setIsIconOnTheTop(true);
  };

  return (
    <Draggable
      onStart={toggleZIndex}
      onStop={(event, position) => toggleZIndex(position)}
      grid={[115, 130]}
      disabled={props.disabled}
      position={props.position}
    >
      <IconContainer
        onClick={props.onClick}
        onDoubleClick={props.onDoubleClick}
        zIndex={isIconOnTheTop ? 1 : 0}
      >
        <LauncherIcon
          src={props.iconPath}
          alt="launcher_icon"
          height={props.size.height}
          width={props.size.width}
          draggable={false}
          shadow={props.shadow}
          padding={props.padding}
        />
        <AppName>{props.iconText}</AppName>
      </IconContainer>
    </Draggable>
  );
};

export default LaunchIcon;
