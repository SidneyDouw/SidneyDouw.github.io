import React, {useState} from "../../_snowpack/pkg/react.js";
import LoadingScreen from "../../components/LoadingScreen/index.js";
import StartScreen from "../../components/StartScreen/index.js";
import HelpScreen from "../../components/HelpScreen/index.js";
import QuestionNavigation from "../../components/QuestionNavigation/index.js";
export default (props) => {
  const [loadingScreen, setLoadingScreen] = useState(!props.userHasVisited);
  const [startScreen, setStartScreen] = useState(!props.userHasVisited);
  const [helpScreen, setHelpScreen] = useState(!props.userHasVisited);
  return loadingScreen ? /* @__PURE__ */ React.createElement(LoadingScreen, {
    loadingTime: 5e3,
    onLoad: () => {
      setLoadingScreen(false);
    }
  }) : startScreen ? /* @__PURE__ */ React.createElement(StartScreen, {
    onButtonClick: () => {
      setStartScreen(false);
    }
  }) : helpScreen ? /* @__PURE__ */ React.createElement(HelpScreen, {
    onButtonClick: () => {
      props.onIntroductionComplete();
      setHelpScreen(false);
    }
  }) : /* @__PURE__ */ React.createElement(QuestionNavigation, null);
};
