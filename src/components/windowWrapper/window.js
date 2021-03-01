/* React */
import React, { useContext } from "react";
import Draggable from "react-draggable";

/* Component */
import HandlerButton from "./handlerButton";

/* Contexts */
import { ApplicationContext } from "../applicationContext";

/* Sytles */
import Styled from "styled-components";

const Frame = Styled.div`
  padding: 8px;
  display: inline-block;
  position: absolute;
  z-index: ${(props) => props.zindex};
  
  /* Border */
  border-radius: 15px;
  -webkit-background-clip: padding-box;          /* for Safari */
  background-clip: padding-box;                 /* for IE9+, Firefox 4+, Opera, Chrome */
  background: rgba(0, 0, 0, .6);

  /* Shadow */
  -webkit-box-shadow: 14px 18px 19px -2px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 14px 18px 19px -2px rgba(0, 0, 0, 0.75);
  box-shadow: 14px 18px 19px -2px rgba(0, 0, 0, 0.75);
`;

const TitleBar = Styled.div`
  height: 40px;
  line-height: 40px;
  text-align:left;
  border-radius:7px 7px 0px 0px;
`;

const TitleBarText = Styled.span`
  color: white;
  font-family: Raleway;
  font-size: 20px;
  text-shadow: 2px 4px 3px #000000;
`;

const HandlerButtonsContainer = Styled.div`
  margin: 0px 5px 0px 0px;
`;

const Window = (props) => {
  const {
    minimizeApp,
    closeApp,
    setAppOnTheTop,
    saveAppPosition,
    positionOfApps,
    orderOfApps,
  } = useContext(ApplicationContext);

  // const appName = props.children._owner.type.name;

  return (
    <Draggable
      handle="strong"
      // position={positionOfApps[appName]}
      onStop={(event, position) => saveAppPosition(position, props.children)}
      onStart={() => setAppOnTheTop(props.children)}
    >
      <Frame
        // zindex={orderOfApps[appName]}
        onClick={() => setAppOnTheTop(props.children)}
      >
        <strong>
          <TitleBar>
            <HandlerButtonsContainer>
              <HandlerButton
                onClick={() => closeApp(props.children)}
                color="rgba(199, 0, 57);"
                type="closing"
              />
              <HandlerButton color="rgba(68,199,103);" type="maximizing" />
              <HandlerButton
                color="rgba(247, 190, 0);"
                type="minimizing"
                onClick={() => minimizeApp(props.children)}
              />
            </HandlerButtonsContainer>
            {/* <TitleBarText>{props.appName}</TitleBarText> */}
          </TitleBar>
        </strong>
        {/* {console.log(appName)} */}
        {props.children}
      </Frame>
    </Draggable>
  );
};

export default Window;
