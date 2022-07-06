import React, { Component } from "../../_snowpack/pkg/react.js";
import { reduceFontSize, sequence } from "../../functions/util.js";
import styles from "./styles.module.css.proxy.js";
export default class StartScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      at1: false,
      at2: false,
    };
    this.textElement = React.createRef();
  }
  componentDidMount() {
    reduceFontSize(this.textElement.current);
    this.enterSequence();
  }
  enterSequence() {
    sequence(
      [() => this.setState({ at1: true }), () => this.setState({ at2: true })],
      100,
      () => setTimeout(() => {}, 500)
    );
  }
  exitSequence() {
    sequence(
      [
        () => this.setState({ at1: false }),
        () => this.setState({ at2: false }),
      ],
      100,
      () => setTimeout(this.props.onButtonClick.bind(this), 500)
    );
  }
  render() {
    return /* @__PURE__ */ React.createElement(
      "div",
      {
        className: styles.startScreen,
      },
      /* @__PURE__ */ React.createElement(
        "div",
        {
          className: `${styles.animation} ${
            this.state.at1 ? "" : styles.hidden
          }`,
        },
        /* @__PURE__ */ React.createElement("img", {
          className: styles.center,
          src: "/ernaehrungs-app/img/splash_screen/center.svg",
        }),
        /* @__PURE__ */ React.createElement("img", {
          className: styles.outer,
          src: "/ernaehrungs-app/img/splash_screen/outer_01.svg",
        }),
        /* @__PURE__ */ React.createElement("img", {
          className: styles.outer,
          src: "/ernaehrungs-app/img/splash_screen/outer_02.svg",
        }),
        /* @__PURE__ */ React.createElement("img", {
          className: styles.outer,
          src: "/ernaehrungs-app/img/splash_screen/outer_03.svg",
        }),
        /* @__PURE__ */ React.createElement("img", {
          className: styles.outer,
          src: "/ernaehrungs-app/img/splash_screen/outer_04.svg",
        }),
        /* @__PURE__ */ React.createElement("img", {
          className: styles.outer,
          src: "/ernaehrungs-app/img/splash_screen/outer_05.svg",
        }),
        /* @__PURE__ */ React.createElement("img", {
          className: styles.outer,
          src: "/ernaehrungs-app/img/splash_screen/outer_06.svg",
        }),
        /* @__PURE__ */ React.createElement("img", {
          className: styles.outer,
          src: "/ernaehrungs-app/img/splash_screen/outer_07.svg",
        })
      ),
      /* @__PURE__ */ React.createElement(
        "div",
        {
          className: `${styles.dottedBackground} dottedBackground ${
            this.state.at2 ? "" : styles.hidden
          }`,
        },
        /* @__PURE__ */ React.createElement(
          "div",
          {
            className: "textbox boxshadow",
          },
          /* @__PURE__ */ React.createElement(
            "h2",
            {
              ref: this.textElement,
            },
            " Welcher Ernährungstyp bist du? "
          )
        ),
        /* @__PURE__ */ React.createElement(
          "button",
          {
            className: "ctaButton boxshadow",
            onClick: this.exitSequence.bind(this),
          },
          "Start"
        )
      )
    );
  }
}
