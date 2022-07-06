import React, {useEffect, useState} from "../../_snowpack/pkg/react.js";
import {BrowserRouter as Router, Switch, Route, Redirect, useHistory} from "../../_snowpack/pkg/react-router-dom.js";
import {saveItems, getItem, clearStorage} from "../../functions/util.js";
import Home from "../../pages/Home/index.js";
import Question from "../../pages/Question/index.js";
import Result from "../../pages/Result/index.js";
export default (props) => {
  const [userHasVisited, setUserHasVisited] = useState(getItem("userHasVisited") === "true" ? true : false);
  return /* @__PURE__ */ React.createElement(Router, null, /* @__PURE__ */ React.createElement(Switch, null, /* @__PURE__ */ React.createElement(Route, {
    path: "/question/:id"
  }, /* @__PURE__ */ React.createElement(Question, null)), /* @__PURE__ */ React.createElement(Route, {
    path: "/result"
  }, /* @__PURE__ */ React.createElement(Result, null)), /* @__PURE__ */ React.createElement(Route, {
    path: "/reset"
  }, /* @__PURE__ */ React.createElement(Reset, null)), /* @__PURE__ */ React.createElement(Route, {
    path: "/:nomatch"
  }, /* @__PURE__ */ React.createElement(Redirect, {
    to: "/"
  })), /* @__PURE__ */ React.createElement(Route, {
    path: "/"
  }, /* @__PURE__ */ React.createElement(Home, {
    userHasVisited,
    onIntroductionComplete: () => {
      saveItems({userHasVisited: "true"});
      setUserHasVisited(true);
    }
  }))));
};
const Reset = () => {
  const history = useHistory();
  useEffect(() => {
    clearStorage();
    history.push("/");
    history.go(0);
  }, []);
  return /* @__PURE__ */ React.createElement(React.Fragment, null);
};
