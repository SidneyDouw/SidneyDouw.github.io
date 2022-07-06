import React, {useState} from "../../_snowpack/pkg/react.js";
import {useHistory} from "../../_snowpack/pkg/react-router-dom.js";
import CalculatingScreen from "../../components/CalculatingScreen/index.js";
import ResultScreen from "../../components/ResultScreen/index.js";
import questionData from "../../data/questions.js";
import {getItem} from "../../functions/util.js";
export default (props) => {
  const history = useHistory();
  const [loadingScreen, setLoadingScreen] = useState(true);
  if (!Object.keys(questionData).every((questionID) => getItem(questionID) ? true : false)) {
    history.push("/");
  }
  return loadingScreen ? /* @__PURE__ */ React.createElement(CalculatingScreen, {
    loadingTime: 5e3,
    onLoad: () => {
      setLoadingScreen(false);
    }
  }) : /* @__PURE__ */ React.createElement(ResultScreen, null);
};
