import React from "./_snowpack/pkg/react.js";
import ReactDOM from "./_snowpack/pkg/react-dom.js";
import {isMobile} from "./_snowpack/pkg/is-mobile.js";
import App from "./components/App/index.js";
import DesktopView from "./components/DesktopView/index.js";
import "./styles/index.css.proxy.js";
const setAppHeight = () => {
  const doc = document.documentElement;
  doc.style.setProperty("--app-height", `${window.innerHeight}px`);
};
document.fonts.load("bold italic 0px BundesSerif").then(() => {
  if (isMobile()) {
    setAppHeight();
    ReactDOM.render(/* @__PURE__ */ React.createElement(App, null), document.getElementById("root"));
  } else {
    ReactDOM.render(/* @__PURE__ */ React.createElement(DesktopView, null), document.getElementById("root"));
  }
});
