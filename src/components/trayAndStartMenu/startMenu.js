/* React */
import React, { useContext } from "react";

/* Context */
import { ApplicationContext } from "../applicationContext";

/* FontAwesome*/
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPowerOff } from "@fortawesome/free-solid-svg-icons";
import { faCog } from "@fortawesome/free-solid-svg-icons";

/* Comps */
import MenuItem from "./menuItem";
import WeatherWidget from "../weatherWidget/weatherWidget";
import Calc from "../dummies/calc";
import Todo from "../dummies/todo";
import DummyDiv from "../dummies/dummyDiv";

/* Start Menu Icons */
import WeatherLaunchIcon from "../../img/desktopIcons/weather-app.png";
import CalculatorLaunchIcon from "../../img/desktopIcons/calc-app.png";
import TodoLaunchIcon from "../../img/desktopIcons/todo-app.png";
import DummyLaunchIcon from "../../img/desktopIcons/dummy-app.png";

/* Styles & Animations*/
import Styled, { keyframes } from "styled-components";

const ControlBarAnim = keyframes`
    0% {
      height: 0px;
      background: rgba(0, 0, 0, 0.1);
    }
    100% {
      height: 600px;
      background: rgba(0, 0, 0, 0.6);
    } 
`;

const MainContainerAnim = keyframes`
    0% {
      height: 0px;
      background: rgba(0, 0, 0, 0.1);
      width: 64px;
    }
    50% {
      height: 600px;
      width: 64px;
      background: rgba(0, 0, 0, 0.4);
    }
    100% {
      height: 600px;
      width: 400px;
      background: rgba(0, 0, 0, 0.4);
    } 
`;

const MainContainer = Styled.div`
  position: absolute;
  left: 0px;
  bottom: 43px;
  z-index: 999998;
  cursor: default;
  color: white;
  
  -webkit-box-shadow: 14px 18px 19px -2px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 14px 18px 19px -2px rgba(0, 0, 0, 0.75);
  box-shadow: 14px 18px 19px -2px rgba(0, 0, 0, 0.75);

  animation-name: ${MainContainerAnim}
  animation-duration: 1s;
  animation-fill-mode: forwards;
`;

const ControlBar = Styled.div`
  position: absolute;
  left: 0;
  bottom: 43px;
  z-index: 999999;
  width: 64px;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  animation-name: ${ControlBarAnim}
  animation-duration: 0.5s;
  animation-fill-mode: forwards;
`;

const Icon = Styled(FontAwesomeIcon)`
    color: white;
    position: relative;
    z-index: 1000000;
    font-size: 20px;
   
`;

const ControlButton = Styled.div`
  height: 45px;
  width: 65px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background-color: rgba(0,0,0,0);

  &:hover {
    background-color: rgba(255, 255, 255, 0.1) !important;
`;

const StartMenu = () => {
  const { startApp, handleClick } = useContext(ApplicationContext);

  return (
    <>
      <ControlBar>
        <ControlButton>
          <Icon icon={faCog} />
        </ControlButton>
        <ControlButton onClick={handleClick}>
          <Icon icon={faPowerOff} />
        </ControlButton>
      </ControlBar>

      <MainContainer>
        <MenuItem
          onClick={() => startApp(<WeatherWidget />, WeatherLaunchIcon)}
          iconPath={WeatherLaunchIcon}
          itemName={"Weather Forecasts"}
        />
        <MenuItem
          onClick={() => startApp(<Calc />, CalculatorLaunchIcon)}
          iconPath={CalculatorLaunchIcon}
          itemName={"Calculator"}
        />
        <MenuItem
          onClick={() => startApp(<Todo />, TodoLaunchIcon)}
          iconPath={TodoLaunchIcon}
          itemName={"To-Do List App"}
        />
        <MenuItem
          onClick={() => startApp(<DummyDiv />, DummyLaunchIcon)}
          iconPath={DummyLaunchIcon}
          itemName={"Dummy Application"}
        />
      </MainContainer>
    </>
  );
};

export default StartMenu;
