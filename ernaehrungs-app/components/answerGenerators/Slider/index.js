import React, {useEffect, useRef, useState} from "../../../_snowpack/pkg/react.js";
import {sequence} from "../../../functions/util.js";
import styles from "./styles.module.css.proxy.js";
const Slider = (props) => {
  const inputRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(props.currentPageId);
  const [at1, setAt1] = useState(false);
  useEffect(() => {
    enterSequence();
    props.callback("1");
  }, []);
  useEffect(() => {
    if (props.shouldExit) {
      exitSequence();
    }
  }, [props.shouldExit]);
  useEffect(() => {
    if (currentPage !== props.currentPageId) {
      setCurrentPage(props.currentPageId);
      inputRef.current.value = "1";
      props.callback("1");
    }
  }, [props.currentPageId]);
  const enterSequence = () => {
    sequence([() => setAt1(true)], 100);
  };
  const exitSequence = () => {
    sequence([() => setAt1(false)], 100, () => setTimeout(props.exitCallback, 500));
  };
  let answerArray = props.questionData.answers;
  let answers = /* @__PURE__ */ React.createElement("div", {
    className: `${styles.sliderContainer} ${at1 ? "" : styles.hidden}`
  }, /* @__PURE__ */ React.createElement("span", null, answerArray[0][0]), /* @__PURE__ */ React.createElement("span", null, answerArray[0][1]), /* @__PURE__ */ React.createElement("input", {
    ref: inputRef,
    type: "range",
    name: `slider`,
    min: "0",
    max: "2",
    step: ".01",
    defaultValue: "1",
    onChange: (evt) => {
      props.callback(evt.target.value);
    }
  }));
  return /* @__PURE__ */ React.createElement("div", null, " ", answers, " ");
};
export default Slider;
