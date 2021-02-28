import React, { useContext } from "react";
import { ApplicationContext } from "./components/applicationContext";
import DesktopIcons from "./components/desktopIcons";
import TrayBar from "./components/trayAndStartMenu/tray";
import { createGlobalStyle } from "styled-components";
import BackgroundImage from "./img/xp_background.jpg";
import WindowsLogin from "./img/windows-10-login.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import WindowsAcc from "./img/Windows-10-user-icon.png";
import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";

const GlobalStyle = createGlobalStyle`h3{
  color:white;
}
body{
  background:url(${BackgroundImage}) no-repeat;
  background-size:cover;

}
`;

function App() {
  const { activeApps, power, setPower, setTray } = useContext(
    ApplicationContext
  );
  const Power = () => {
    return (
      <motion.div
        initial={{ opacity: 0.5 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        style={{ position: "absolute" }}
      >
        <div
          style={{
            position: "absolute",
            paddingTop: "20vh",
            backgroundColor: "rgba(0,0,0,0.6)",
            zIndex: 10,
            top: "0",
            right: "0",
            left: "0",
            bottom: "0",
            textAlign: "center",
          }}
        >
          <img style={{ width: "100px" }} src={WindowsAcc} alt="" />
          <h1
            style={{
              color: "white",
            }}
          >
            Hello admin
          </h1>
          <div>
            <input type="password" />
            <FontAwesomeIcon
              style={{ cursor: "pointer" }}
              onClick={() => {
                setPower(false);
                setTray(true);
              }}
              size="lg"
              color="white"
              icon={faArrowAltCircleRight}
            />
          </div>
        </div>
        <img
          src={WindowsLogin}
          className="login"
          style={{ width: "100vw", height: "99vh" }}
          alt=""
        />
      </motion.div>
    );
  };
  return (
    <>
      {power ? (
        <Power />
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <GlobalStyle />
          <DesktopIcons />
          {activeApps.map((app, index) => (
            <React.Fragment key={index}> {app}</React.Fragment>
          ))}
          <TrayBar />
        </motion.div>
      )}
    </>
  );
}

export default App;
