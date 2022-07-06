import React, { Component } from "../../_snowpack/pkg/react.js";
import { sequence, clamp, reduceFontSize } from "../../functions/util.js";
import styles from "./styles.module.css.proxy.js";
export default class CalculatingScreen extends Component {
  constructor(props) {
    super(props);
    this.interval = 60;
    this.cooldown = 1e3;
    this.textElement = React.createRef();
    this.state = {
      progressPercent: 0,
      at1: false,
      at2: false,
      at3: false,
    };
  }
  componentDidMount() {
    reduceFontSize(this.textElement.current);
    this.enterSequence();
  }
  enterSequence() {
    sequence(
      [
        () => this.setState({ at1: true }),
        () => this.setState({ at2: true }),
        () => this.setState({ at3: true }),
      ],
      [250, 250],
      () => setTimeout(this.startLoading.bind(this), 500)
    );
  }
  exitSequence() {
    sequence(
      [
        () => this.setState({ at1: false }),
        () => this.setState({ at2: false }),
        () => this.setState({ at3: false }),
      ],
      100,
      () => setTimeout(this.props.onLoad.bind(this), 500)
    );
  }
  startLoading() {
    let remaining = this.props.loadingTime;
    let id = setInterval(() => {
      remaining -= this.interval;
      this.setState({
        progressPercent: clamp(
          Math.floor((1 - remaining / this.props.loadingTime) * 100),
          0,
          100
        ),
      });
      if (remaining <= 0) {
        clearInterval(id);
        this.exitSequence();
      }
    }, this.interval);
  }
  render() {
    return /* @__PURE__ */ React.createElement(
      "div",
      {
        className: `${styles.calculatingScreen}`,
      },
      /* @__PURE__ */ React.createElement("img", {
        src: "/ernaehrungs-app/img/BMEL_Logo.svg",
        className: `${styles.logo} ${styles.hidden}`,
      }),
      /* @__PURE__ */ React.createElement(
        "div",
        {
          className: `${styles.progressBar} ${
            this.state.at1 ? "" : styles.hidden
          }`,
        },
        /* @__PURE__ */ React.createElement(
          "div",
          {
            style: {
              top: this.state.progressPercent + "%",
              transition: `top ${this.interval}ms ease`,
            },
          },
          this.state.progressPercent,
          "%"
        )
      ),
      /* @__PURE__ */ React.createElement("img", {
        src: "/ernaehrungs-app/img/mixer.webp",
        className: `${styles.animation} ${this.state.at2 ? "" : styles.hidden}`,
      }),
      /* @__PURE__ */ React.createElement(
        "div",
        {
          className: `${styles.dottedBackground} ${
            this.state.at3 ? "" : styles.hidden
          } dottedBackground`,
        },
        /* @__PURE__ */ React.createElement(
          "div",
          {
            className: `textbox boxshadow ${
              this.state.at3 ? "" : styles.hidden
            }`,
          },
          /* @__PURE__ */ React.createElement(
            "h2",
            {
              ref: this.textElement,
            },
            "Wird berechnet ... "
          )
        )
      )
    );
  }
}
