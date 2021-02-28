import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ApplicationProvider } from "./components/applicationContext";
import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`body{
  margin: 0;font-family:--apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  -webkit-font-smoothing: antialiased;-mos-osx-font-smoothing:grayscale;
}
code{
  font-family:source-code-pro,Menlo,Monaco,Consolas,'Courier New',monospace;
}`;
ReactDOM.render(
  <ApplicationProvider>
    <GlobalStyle />
    <App />
  </ApplicationProvider>,
  document.getElementById("root")
);
