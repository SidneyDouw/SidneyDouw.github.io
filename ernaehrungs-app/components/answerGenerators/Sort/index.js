import React, { useEffect, useState } from "../../../_snowpack/pkg/react.js";
import {
  DragDropContext,
  Droppable,
  Draggable,
} from "../../../_snowpack/pkg/react-beautiful-dnd.js";
import { sequence } from "../../../functions/util.js";
import styles from "./styles.module.css.proxy.js";
const Sort = (props) => {
  const [answerData, setAnswerData] = useState(
    Object.entries(props.questionData.answers)
  );
  const [atL1, setAtL1] = useState(answerData.map(() => false));
  useEffect(() => {
    enterSequence();
    props.callback(answerData[0][0]);
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
  const onDragEnd = (result, provided) => {
    if (!result.destination) {
      return;
    }
    let updatedAnswers = [...answerData];
    const [removed] = updatedAnswers.splice(result.source.index, 1);
    updatedAnswers.splice(result.destination.index, 0, removed);
    setAnswerData(updatedAnswers);
    props.callback(updatedAnswers[0][0]);
  };
  const answers = answerData.map((answer, index) => {
    return /* @__PURE__ */ React.createElement(
      Draggable,
      {
        key: `item-${index + 1}`,
        draggableId: `item-${index + 1}`,
        index,
      },
      (provided, snapshot) =>
        /* @__PURE__ */ React.createElement(
          "div",
          {
            ref: provided.innerRef,
            ...provided.draggableProps,
            ...provided.dragHandleProps,
            style: {
              ...provided.draggableProps.style,
              boxShadow: snapshot.isDragging ? "0px 0px 5px #d10339" : "none",
            },
            className: `${atL1[index] ? "" : styles.hidden} ${
              styles.answerItemContainer
            } boxshadow`,
          },
          /* @__PURE__ */ React.createElement("span", null, answer[1]),
          /* @__PURE__ */ React.createElement("img", {
            src: "/ernaehrungs-app/img/menu.png",
          })
        )
    );
  });
  return /* @__PURE__ */ React.createElement(
    DragDropContext,
    {
      onDragEnd: (result, provided) => {
        onDragEnd(result, provided);
      },
    },
    /* @__PURE__ */ React.createElement(
      Droppable,
      {
        droppableId: "droppable",
      },
      (provided, snapshot) =>
        /* @__PURE__ */ React.createElement(
          "div",
          {
            ref: provided.innerRef,
            ...provided.droppableProps,
            className: styles.answerContainer,
          },
          answers,
          provided.placeholder
        )
    )
  );
};
export default Sort;
