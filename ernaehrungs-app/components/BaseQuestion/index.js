import React, {Component} from "../../_snowpack/pkg/react.js";
import {reduceFontSize, sequence} from "../../functions/util.js";
import styles from "./styles.module.css.proxy.js";
export default class BaseQuestion extends Component {
  constructor(props) {
    super(props);
    this.textElement = React.createRef();
    this.state = {
      currentPageId: 0,
      answers: new Array(this.props.questionData.length).fill(""),
      at1: false,
      at2: false,
      shouldExit: false
    };
  }
  enterSequence(callback) {
    sequence([() => this.setState({at1: true}), () => this.setState({at2: true})], [0, 400], () => callback ? callback() : "");
  }
  exitSequence(callback) {
    sequence([() => this.setState({at1: false}), () => this.setState({at2: false})], 150, () => setTimeout(() => {
      if (callback)
        callback();
    }, 500));
  }
  incrementPageId() {
    if (this.state.answers[this.state.currentPageId] !== "") {
      window.scrollTo(0, 0);
      this.setState((state) => {
        return {
          currentPageId: state.currentPageId + 1
        };
      });
    } else {
    }
  }
  submit() {
    if (this.state.answers[this.state.currentPageId] !== "") {
      this.props.onSubmit(this.state.answers);
    } else {
    }
  }
  updateAnswers(answer) {
    let answers = [...this.state.answers];
    answers[this.state.currentPageId] = Math.round(parseFloat(answer)).toFixed(0);
    this.setState({answers});
  }
  componentDidMount() {
    reduceFontSize(this.textElement.current);
    window.scrollTo(0, 0);
    this.enterSequence();
  }
  render() {
    let currentData = this.props.questionData[this.state.currentPageId];
    let AnswerElement = this.props.answerComponent;
    const questionDisplay = this.props.questionData.length > 1 ? `Frage ${this.state.currentPageId + 1} von ${this.props.questionData.length}: ` : "";
    return /* @__PURE__ */ React.createElement("div", {
      className: `${styles.questionContainer + " " + styles[this.props.questionType]}`
    }, /* @__PURE__ */ React.createElement("div", {
      className: `${styles.dottedBackground} dottedBackground ${this.state.at1 ? "" : styles.hidden}`
    }, /* @__PURE__ */ React.createElement("div", {
      className: `${styles.container} ${this.state.at1 ? "" : styles.hidden}`
    }, /* @__PURE__ */ React.createElement("div", {
      className: `textbox boxshadow`
    }, /* @__PURE__ */ React.createElement("h2", {
      ref: this.textElement
    }, currentData.question)), /* @__PURE__ */ React.createElement("p", {
      className: `hint ${styles.hint}`
    }, questionDisplay, currentData.info))), /* @__PURE__ */ React.createElement(AnswerElement, {
      questionIndex: this.props.questionIndex,
      questionData: currentData,
      currentPageId: this.state.currentPageId,
      callback: this.updateAnswers.bind(this),
      shouldExit: this.state.shouldExit,
      exitCallback: () => {
      }
    }), /* @__PURE__ */ React.createElement("div", {
      className: `question_buttonContainer ${styles.appearing} ${this.state.at2 ? "" : styles.hidden}`
    }, /* @__PURE__ */ React.createElement("button", {
      className: "ctaButton boxshadow",
      onClick: () => {
        this.setState({shouldExit: true});
        this.exitSequence(() => this.props.onCancel());
      }
    }, "<"), this.state.currentPageId < this.props.questionData.length - 1 ? /* @__PURE__ */ React.createElement("button", {
      className: `ctaButton boxshadow ${this.state.answers[this.state.currentPageId] !== "" ? "" : "disabled"}`,
      onClick: this.incrementPageId.bind(this)
    }, "Weiter") : /* @__PURE__ */ React.createElement("button", {
      className: `ctaButton boxshadow ${this.state.answers[this.state.currentPageId] !== "" ? "" : "disabled"}`,
      onClick: () => {
        this.setState({shouldExit: true});
        this.exitSequence(this.submit.bind(this));
      }
    }, "Einloggen")));
  }
}
