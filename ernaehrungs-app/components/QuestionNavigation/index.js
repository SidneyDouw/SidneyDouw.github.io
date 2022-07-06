import * as __SNOWPACK_ENV__ from '../../_snowpack/env.js';
import.meta.env = __SNOWPACK_ENV__;

undefined /* [snowpack] import.meta.hot */ ;
import React, {Component} from "../../_snowpack/pkg/react.js";
import {Link, Redirect} from "../../_snowpack/pkg/react-router-dom.js";
import {clamp, getItem, reduceFontSize, sequence} from "../../functions/util.js";
import questionData from "../../data/questions.js";
import styles from "./styles.module.css.proxy.js";
export default class QuestionNavigation extends Component {
  constructor(props) {
    super(props);
    this.textElement = React.createRef();
    this.questionContainer = React.createRef();
    let colors = ["#a3d4d2", "#c0d8a3", "#fee061"];
    this.state = {
      progressPercent: 0,
      questions: Object.keys(questionData).map((questionID, index) => {
        return {
          id: questionID,
          answered: getItem(questionID) ? true : false,
          result: getItem(questionID),
          imagePath: questionData[questionID].imagePath
        };
      }),
      everythingAnswered: false,
      backgroundColor: colors[Object.keys(questionData).filter((questionID, index) => {
        return getItem(questionID);
      }).length % 3],
      at1: false,
      at2: false,
      at3: false,
      atL1: Object.keys(questionData).map(() => false)
    };
    const doc = document.documentElement;
    doc.style.setProperty("--current-background-color", this.state.backgroundColor);
  }
  enterSequence(callback) {
    let atL1 = [...this.state.atL1];
    sequence([
      () => this.setState({at1: true}),
      () => sequence(atL1.map((val, index) => {
        return () => {
          atL1[index] = true;
          this.setState({atL1});
        };
      }), [0, (250 + 250) / atL1.length]),
      () => this.setState({at2: true}),
      () => this.animateProgressBar(),
      () => this.setState({at3: true})
    ], [250, 250], () => callback ? callback() : "");
  }
  exitSequence(callback) {
    let atL1 = [...this.state.atL1];
    sequence([
      () => this.setState({at1: false}),
      () => sequence(atL1.map((val, index) => {
        return () => {
          atL1[index] = false;
          this.setState({atL1});
        };
      }), [0, (150 + 250) / atL1.length]),
      () => this.setState({at2: false}),
      () => this.setState({at3: false})
    ], 150, () => setTimeout(() => {
      if (callback)
        callback();
    }, 500));
  }
  componentDidMount() {
    reduceFontSize(this.textElement.current);
    const currentQuestionIndex = this.state.questions.findIndex((question) => !question.answered);
    this.enterSequence(() => {
      if (currentQuestionIndex > -1) {
        const currentQuestionEl = this.questionContainer.current.children[currentQuestionIndex];
        const dims = currentQuestionEl.getBoundingClientRect();
        const targetY = dims.top + dims.height / 2 - window.innerHeight / 2;
        const maxY = document.body.clientHeight - window.outerHeight;
        doScrolling(Math.min(targetY, maxY), 1e3);
      } else {
        doScrolling(document.body.clientHeight - window.outerHeight, 1e3);
      }
    });
  }
  componentWillUnmount() {
  }
  checkAnswerAmount() {
    this.setState({
      everythingAnswered: this.state.questions.filter((o) => o.answered).length == this.state.questions.length
    });
  }
  animateProgressBar() {
    let end = this.state.questions.filter((o) => o.answered).length / this.state.questions.length;
    let time = 2e3;
    let interval = 100 / 3;
    let remaining = time;
    let id = setInterval(() => {
      remaining -= interval;
      this.setState({
        progressPercent: clamp((1 - remaining / time) * end * 100, 0, 100 * end)
      });
      if (remaining <= 0) {
        clearInterval(id);
        this.checkAnswerAmount();
      }
    }, interval);
  }
  render() {
    let navigation = this.state.questions.map((question, index) => {
      const prevQuestion = this.state.questions[index - 1];
      return /* @__PURE__ */ React.createElement("li", {
        key: index,
        className: `${this.state.atL1[index] ? "" : styles.hidden}`
      }, /* @__PURE__ */ React.createElement(Link, {
        to: `question/${question.id}`,
        className: `boxshadow ${question.answered ? styles.active : ""}`,
        onClick: (evt) => {
          evt.preventDefault();
          if (!question.answered) {
            if (prevQuestion === void 0 || prevQuestion !== void 0 && prevQuestion.answered) {
              this.exitSequence(() => {
                this.setState({redirect: `question/${question.id}`});
              });
            } else {
              alert("Beantworte die Fragen der Reihe nach.");
            }
          } else {
            alert("Du hast diese Frage schon beantwortet.");
          }
        }
      }, /* @__PURE__ */ React.createElement("img", {
        src: question.imagePath
      })));
    });
    if (this.state.redirect) {
      return /* @__PURE__ */ React.createElement(Redirect, {
        to: this.state.redirect
      });
    }
    return /* @__PURE__ */ React.createElement("div", {
      className: styles.mainMenu,
      style: {backgroundColor: this.state.backgroundColor}
    }, /* @__PURE__ */ React.createElement("div", {
      className: `${styles.dottedBackground} dottedBackground ${this.state.at1 ? "" : styles.hidden}`
    }, !this.state.questions.every((question) => question.answered) ? /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
      className: `${styles.textbox} textbox boxshadow`
    }, /* @__PURE__ */ React.createElement("h2", {
      ref: this.textElement
    }, "Klicke der Reihe nach auf die Symbole und beantworte die zwölf Fragen.")), this.state.progressPercent > 0 ? /* @__PURE__ */ React.createElement("p", {
      className: `hint ${styles.hint}`
    }, "Wenn du alle Fragen beantwortet hast, erhältst du dein persönliches Ergebnis.") : "") : /* @__PURE__ */ React.createElement("div", {
      className: `${styles.textbox} textbox boxshadow`
    }, /* @__PURE__ */ React.createElement("h2", {
      ref: this.textElement
    }, "Wenn du alle Fragen beantwortet hast, erhältst du dein persönliches Ergebnis."))), /* @__PURE__ */ React.createElement("ul", {
      ref: this.questionContainer,
      className: styles.questionList
    }, navigation), /* @__PURE__ */ React.createElement("div", {
      className: `${styles.progressBar} ${this.state.at2 ? "" : styles.hidden}`
    }, /* @__PURE__ */ React.createElement("div", {
      style: {
        top: this.state.progressPercent + "%"
      }
    }, this.state.progressPercent.toFixed(0), "%")), /* @__PURE__ */ React.createElement(Link, {
      to: "/result",
      className: `${styles.ctaButton} ${this.state.everythingAnswered ? "" : ""} ${this.state.at3 ? "" : styles.hidden}`,
      onClick: (evt) => {
        evt.preventDefault();
        if (this.state.everythingAnswered !== true) {
          alert("Du musst zuerst alle Fragen beantworten, um dein Ergebnis zu sehen!");
        }
      }
    }, /* @__PURE__ */ React.createElement("button", {
      className: `ctaButton boxshadow ${this.state.everythingAnswered ? "" : "disabled"}`,
      onClick: (evt) => {
        evt.preventDefault();
        this.exitSequence(() => {
          this.setState({redirect: "/result"});
        });
      }
    }, "Mein Ergebnis")), __SNOWPACK_ENV__.SNOWPACK_PUBLIC_SHOWCASE_MODE ? /* @__PURE__ */ React.createElement("button", {
      className: `${styles.ctaButton} ctaButton boxshadow ${this.state.at3 ? "" : styles.hidden}`,
      onClick: () => {
        localStorage.clear();
        document.location.reload();
      }
    }, "Restart") : /* @__PURE__ */ React.createElement(React.Fragment, null));
  }
}
const doScrolling = (elementY, duration) => {
  let startingY = window.pageYOffset;
  let diff = elementY - startingY;
  let easing = (t) => {
    return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
  };
  let start;
  if (!diff)
    return;
  window.requestAnimationFrame(function step(timestamp) {
    if (!start)
      start = timestamp;
    let time = timestamp - start;
    let percent = easing(Math.min(time / duration, 1));
    window.scrollTo(0, startingY + diff * percent);
    if (time < duration) {
      window.requestAnimationFrame(step);
    }
  });
};
