import React, {useEffect, useState} from "../../../_snowpack/pkg/react.js";
import {sequence} from "../../../functions/util.js";
import styles from "./styles.module.css.proxy.js";
const SingleChoice = (props) => {
  const [activeAnswers, setActiveAnswers] = useState(new Array(Object.keys(props.questionData.answers).length).fill(false));
  const [atL1, setAtL1] = useState(Object.keys(props.questionData.answers).map(() => false));
  useEffect(() => {
    enterSequence();
  }, []);
  useEffect(() => {
    if (props.shouldExit) {
      exitSequence();
    }
  }, [props.shouldExit]);
  const enterSequence = () => {
    sequence([
      () => sequence(atL1.map((val, index) => () => {
        atL1[index] = true;
        setAtL1([...atL1]);
      }), [0, (250 + 250) / atL1.length])
    ], 100);
  };
  const exitSequence = () => {
    sequence([
      () => sequence(atL1.map((val, index) => () => {
        atL1[index] = false;
        setAtL1([...atL1]);
      }), [0, (150 + 250) / atL1.length])
    ], 100, () => setTimeout(props.exitCallback, 500));
  };
  let answers = Object.entries(props.questionData.answers).map((answer, index) => {
    return /* @__PURE__ */ React.createElement("li", {
      key: index,
      className: `${atL1[index] ? "" : styles.hidden}`
    }, /* @__PURE__ */ React.createElement("label", {
      className: `boxshadow ${activeAnswers[index] ? styles.active : ""}`
    }, /* @__PURE__ */ React.createElement("input", {
      type: "radio",
      name: "single_choice",
      onChange: (evt) => {
        let updatedAnswers = [...activeAnswers].map(() => false);
        updatedAnswers[index] = true;
        setActiveAnswers(updatedAnswers);
        props.callback(answer[0]);
      }
    }), /* @__PURE__ */ React.createElement("div", {
      className: styles.customRadio
    }), answer[1]));
  });
  return /* @__PURE__ */ React.createElement("ul", {
    className: `${styles.answers}`
  }, answers);
};
export default SingleChoice;
