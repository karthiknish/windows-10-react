/* React */
import React, { useState, useContext } from "react";
import moment from "moment";
import "react-calendar/dist/Calendar.css";
/* Context */

import { ApplicationContext } from "../applicationContext";
import { motion } from "framer-motion";
/* Comps */

/* import TrayBarIcon from "./trayBarIcon"; */
import StartMenu from "./startMenu";
import LaunchIcon from "../launchIcon";

/* FontAwesome */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";

/* Images */
import { ReactComponent as WinLogo } from "../../svg/windows.svg";

/* Styles */
import Styled from "styled-components";
import Calendar from "react-calendar";

const Tray = Styled.div`
  width: 100%;
  height: 45px;
  position: fixed;
  bottom: 0;
  z-index: 5000000;
  background: rgba(0, 0, 0, 0.6);
`;

const LeftIcons = Styled.div`
  height: 43px;
  display: flex;
  flex-direction: row;
  float: left;
`;

const StartButton = Styled.div`
  height: 40px;
  width: 64px;
  margin: 0px 10px 0px 0px
  display: flex;
  flex-direction: column;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  background-color: ${(props) =>
    props.active ? "rgba(0, 0, 0, 0.6)" : "rgba(0, 0, 0, 0)"};

  &:hover {
    background-color: rgba(255, 255, 255, 0.1) !important
  };
`;

const WindowsLogo = Styled.div`
  margin-left:25%;
  margin-top:20%;
  height: 20px;
  width: 20px;
  `;

const SearchBar = Styled.input`
  color: white;
  height: 33px;
  width: 200px;
  border: 0.5px solid white;
  padding-left: 5px;
  margin: 3px 0px 0px 0px;
  background-color: rgba(255, 255, 255, 0.0);

  &::-webkit-input-placeholder {
    color: white;
  }

  &:hover{
    color: black;
    &::-webkit-input-placeholder {
      color: gray;
    };
    background-color: rgba(255, 255, 255, 1.0)
  }
`;

const ActiveApps = Styled.div`
  height: 43px;
  margin: 0px 20px 0px 20px;
  float: left;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const AppContainer = Styled.div`
  height: 38px;
  margin: 0px 5px 0px 5px;
  float: left;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-bottom: 4px solid #ff6700;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1) !important
  };
`;

const RightIcons = Styled.div`
  height: 43px;
  float: right;
`;

const Datetime = Styled.div`
  display: table-cell;
  width: 70px !important;
  cursor: pointer;
  padding-top: 3px;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1) !important
  };
`;

const DatetimeElem = Styled.span`
  display: block;
  text-align: center;
  margin-top: 5px;
  font-size: 11.3px;
  color: white;
`;

const NotificationArea = Styled.span`
  height: 43px;
  width: 43px;
  position: relative;
  display: table-cell;
  cursor: pointer;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1) !important
  }
`;

/* TODO: Replace the position settings to flexbox solution */
const NotificationIcon = Styled(FontAwesomeIcon)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 17px;
  color: white;

  &:hover {
    color: #ff6700
  }
`;

const ShowDesktopButton = Styled.span`
  width: 8px;
  position: relative;
  display: table-cell;
  border-left: 1px solid grey;

  &: hover{
    background-color: rgba(199, 0, 57, 0.8)
  }
`;

function TrayBar() {
  const [searchedExpression, setSearchedExpression] = useState("");

  const [calendar, setCalendar] = useState(false);
  const [notification, setNotification] = useState(false);
  const context = useContext(ApplicationContext);
  const { toggleStartMenu, startMenuIsActive, tray } = useContext(
    ApplicationContext
  );
  const handleCalendar = () => {
    setCalendar(!calendar);
  };
  const handleNotification = () => {
    setNotification(!notification);
  };
  const handleChange = (e) => {
    setSearchedExpression(e.target.value);
  };

  return (
    <>
      {startMenuIsActive && <StartMenu />} {notification && <Notification />}
      {calendar && <CalendarMenu />}
      {tray ? (
        <Tray>
          <LeftIcons>
            <StartButton onClick={toggleStartMenu} active={startMenuIsActive}>
              <WindowsLogo>
                <WinLogo />
              </WindowsLogo>
            </StartButton>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                window.open(
                  "https://www.google.com/search?q=" + searchedExpression,
                  "_blank"
                );
              }}
            >
              <SearchBar
                type="text"
                placeholder="Type here to search on Google"
                onChange={handleChange}
                value={searchedExpression}
                name="searchBar"
              />
            </form>
          </LeftIcons>
          <ActiveApps>
            {context.elementsOfTrayBar.map((app, index) => (
              <AppContainer key={index}>
                <LaunchIcon
                  disabled={true}
                  iconPath={app.icon}
                  size={{ height: "30px", width: "30px" }}
                  padding="5px"
                  onClick={() => context.handleAppFromTrayBar(app.app)}
                />
              </AppContainer>
            ))}
          </ActiveApps>
          <RightIcons>
            <Datetime onClick={handleCalendar}>
              <DatetimeElem>{moment().format("HH:mm")}</DatetimeElem>
              <DatetimeElem>{moment().format("YYYY-MM-DD")}</DatetimeElem>
            </Datetime>
            <NotificationArea onClick={handleNotification}>
              <NotificationIcon icon={faBell} />
            </NotificationArea>
            <ShowDesktopButton />
          </RightIcons>
        </Tray>
      ) : (
        ""
      )}
    </>
  );
}
export default TrayBar;
const Notification = () => {
  return (
    <motion.div
      animate={{ y: -5 }}
      style={{
        position: "absolute",
        bottom: 43,
        right: 10,
        backgroundColor: "rgba(0,0,0,0.6)",
        padding: "5px",
        color: "white",
      }}
      transition={{ ease: "easeOut", duration: 0.5 }}
    >
      <h4>No new notifications</h4>
    </motion.div>
  );
};
const CalendarMenu = () => {
  const [value, onChange] = useState(new Date());

  return (
    <motion.div
      animate={{ y: -5 }}
      transition={{ ease: "easeOut", duration: 0.5 }}
      style={{ position: "absolute", bottom: 43, right: 0 }}
    >
      <Calendar onChange={onChange} value={value} />
    </motion.div>
  );
};
// TrayBar.contextType = ApplicationContext;
