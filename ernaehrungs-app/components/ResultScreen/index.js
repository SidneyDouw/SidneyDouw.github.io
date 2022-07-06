import React, {useEffect, useRef, useState} from "../../_snowpack/pkg/react.js";
import {Link, useHistory} from "../../_snowpack/pkg/react-router-dom.js";
import {getItem, reduceFontSize, sequence} from "../../functions/util.js";
import questionData from "../../data/questions.js";
import resultData from "../../data/results.js";
import styles from "./styles.module.css.proxy.js";
export default (props) => {
  const history = useHistory();
  const textElement = useRef(null);
  const [result, setResult] = useState();
  const [at1, setAt1] = useState(false);
  const [at2, setAt2] = useState(false);
  const [at3, setAt3] = useState(false);
  const [at4, setAt4] = useState(false);
  useEffect(() => {
    reduceFontSize(textElement.current);
    window.scrollTo(0, 0);
    setResult(calculateResult());
    enterSequence();
  }, []);
  const triggerShare = () => {
    if (navigator.share) {
      navigator.share({
        title: "Mein Ergebnis",
        text: `Mein Ergebnis:
"Du bist ${resultData[result].title}
${resultData[result].text.replace(/\[\[(.*)\]\]/gm, `$1`)}"`
      }).catch((err) => {
        console.error(err);
      });
    } else {
      alert("sharing is not available");
    }
  };
  const enterSequence = () => {
    sequence([() => setAt1(true), () => setAt2(true), () => setAt3(true), () => setAt4(true)], [250, 250], () => setTimeout(() => {
    }, 500));
  };
  const exitSequence = (callback) => {
    sequence([() => setAt1(false), () => setAt2(false), () => setAt3(false), () => setAt4(false)], 100, () => setTimeout(() => {
      callback();
    }, 500));
  };
  return /* @__PURE__ */ React.createElement("div", {
    className: styles.resultScreen
  }, /* @__PURE__ */ React.createElement("div", {
    className: `${styles.dottedBackground} dottedBackground ${at1 ? "" : styles.hidden}`
  }, /* @__PURE__ */ React.createElement("div", {
    className: `${styles.textbox} textbox boxshadow`
  }, /* @__PURE__ */ React.createElement("h2", {
    ref: textElement
  }, "Du bist ..."))), result !== void 0 ? /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    className: `${styles.listElement} boxshadow ${at2 ? "" : styles.hidden}`
  }, resultData[result].title), /* @__PURE__ */ React.createElement("div", {
    className: `${styles.textContainer} ${at3 ? "" : styles.hidden}`
  }, /* @__PURE__ */ React.createElement("p", {
    dangerouslySetInnerHTML: {
      __html: resultData[result].text.replace(/\[\[(.*)\]\]/gm, `<a href="https://$1" target="_blank">$1</a>`)
    }
  }))) : "", /* @__PURE__ */ React.createElement("div", {
    className: `${styles.buttonContainer} question_buttonContainer ${at4 ? "" : styles.hidden}`
  }, /* @__PURE__ */ React.createElement(Link, {
    to: "/",
    className: styles.ctaButton
  }, /* @__PURE__ */ React.createElement("button", {
    className: "ctaButton boxshadow",
    onClick: (evt) => {
      evt.preventDefault();
      exitSequence(() => {
        history.push("/");
      });
    }
  }, "<")), /* @__PURE__ */ React.createElement("button", {
    className: "ctaButton boxshadow",
    onClick: () => triggerShare()
  }, "Teilen")));
};
const mode = (array) => {
  let modeMap = {};
  let maxEl = array[0], maxCount = 1;
  for (let i = 0; i < array.length; i++) {
    let el = array[i];
    if (modeMap[el] == null) {
      modeMap[el] = 1;
    } else {
      modeMap[el]++;
    }
    if (modeMap[el] > maxCount) {
      maxEl = el;
      maxCount = modeMap[el];
    }
  }
  return maxEl;
};
const calculateResult = () => {
  let results = [];
  const questions = Object.keys(questionData).map((questionID, index) => {
    return {
      id: questionID,
      result: getItem(questionID)
    };
  });
  questions.forEach((question) => {
    question.result.split(",").forEach((result2) => {
      results.push(Math.round(parseFloat(result2)).toString());
    });
  });
  const result = parseInt(mode(results));
  return result;
};
