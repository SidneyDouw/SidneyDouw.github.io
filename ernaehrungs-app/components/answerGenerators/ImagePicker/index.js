import React, { useEffect, useState } from "../../../_snowpack/pkg/react.js";
import { sequence } from "../../../functions/util.js";
import styles from "./styles.module.css.proxy.js";
const ImagePicker = (props) => {
  const [activeAnswers, setActiveAnswers] = useState(
    new Array(Object.keys(props.questionData.answers).length).fill(false)
  );
  const [answerText, setAnswerText] = useState("");
  const [atL1, setAtL1] = useState(
    Object.keys(props.questionData.answers).map(() => false)
  );
  useEffect(() => {
    enterSequence();
  }, []);
  useEffect(() => {
    if (props.shouldExit) {
      exitSequence();
    }
  }, [props.shouldExit]);
  const enterSequence = () => {
    sequence(
      [
        () =>
          sequence(
            atL1.map((val, index) => () => {
              atL1[index] = true;
              setAtL1([...atL1]);
            }),
            [0, (250 + 250) / atL1.length]
          ),
      ],
      100
    );
  };
  const exitSequence = () => {
    sequence(
      [
        () =>
          sequence(
            atL1.map((val, index) => () => {
              atL1[index] = false;
              setAtL1([...atL1]);
            }),
            [0, (150 + 250) / atL1.length]
          ),
      ],
      100,
      () => setTimeout(props.exitCallback, 500)
    );
  };
  let answers = Object.entries(props.questionData.answers)
    .sort()
    .map((answer, index) => {
      return /* @__PURE__ */ React.createElement(
        "div",
        {
          key: index,
          className: `${activeAnswers[index] ? styles.active : ""} ${
            atL1[index] ? "" : styles.hidden
          }`,
          onClick: (evt) => {
            let updatedAnswers = [...activeAnswers].map(() => false);
            updatedAnswers[index] = true;
            setActiveAnswers(updatedAnswers);
            setAnswerText(answer[1]);
            let t = evt.target;
            props.callback(answer[0]);
          },
        },
        /* @__PURE__ */ React.createElement("img", {
          src: `/ernaehrungs-app/img/questions/${props.questionIndex}/${index}.jpg`,
        }),
        activeAnswers[index]
          ? /* @__PURE__ */ React.createElement(
              "p",
              {
                className: styles.imageAnswerText,
              },
              answerText
            )
          : ""
      );
    });
  return /* @__PURE__ */ React.createElement(
    React.Fragment,
    null,
    /* @__PURE__ */ React.createElement(
      "div",
      {
        className: `${styles.imageContainer} ${
          answers.length < 4 ? styles.small : ""
        }`,
      },
      answers
    )
  );
};
export default ImagePicker;
