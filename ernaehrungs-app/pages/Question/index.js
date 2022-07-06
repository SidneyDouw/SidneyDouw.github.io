import React, {useState} from "../../_snowpack/pkg/react.js";
import {useParams} from "../../_snowpack/pkg/react-router.js";
import {Redirect, useHistory} from "../../_snowpack/pkg/react-router-dom.js";
import BaseQuestion from "../../components/BaseQuestion/index.js";
import SingleChoice from "../../components/answerGenerators/SingleChoice/index.js";
import Slider from "../../components/answerGenerators/Slider/index.js";
import ImagePicker from "../../components/answerGenerators/ImagePicker/index.js";
import Sort from "../../components/answerGenerators/Sort/index.js";
import questions from "../../data/questions.js";
import {saveItems} from "../../functions/util.js";
const answerComponents = {
  single_choice: SingleChoice,
  slider: Slider,
  image_picker: ImagePicker,
  sort: Sort
};
export default () => {
  const history = useHistory();
  const [codeEntered, setCodeEntered] = useState(false);
  let {id} = useParams();
  if (!Object.keys(questions).includes(id)) {
    return /* @__PURE__ */ React.createElement(Redirect, {
      to: "/"
    });
  }
  const onSubmit = (answers) => {
    let answerObj = {};
    answerObj[id] = answers.join(",");
    saveItems(answerObj);
    history.push("/");
  };
  const onCancel = () => {
    history.push("/");
  };
  return /* @__PURE__ */ React.createElement(BaseQuestion, {
    questionData: questions[id].data,
    questionIndex: id,
    questionType: questions[id].type,
    onSubmit,
    onCancel,
    answerComponent: answerComponents[questions[id].type]
  });
};
