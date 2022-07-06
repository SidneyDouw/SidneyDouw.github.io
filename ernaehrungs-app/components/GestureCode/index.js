import React, {Component} from "../../_snowpack/pkg/react.js";
import {reduceFontSize, sequence} from "../../functions/util.js";
import styles from "./styles.module.css.proxy.js";
export default class GestureCode extends Component {
  constructor(props) {
    super(props);
    this.textElement = React.createRef();
    this.gestureGridEl = React.createRef();
    this.codeSequence = [];
    this.state = {
      gridElements: this.initializeGridElements()
    };
  }
  initializeGridElements() {
    return new Array(9).fill(0).map((_, index) => {
      let x = index % 3;
      let y = Math.floor(index / 3);
      let neighbors = {};
      let directions = ["t", "b", "l", "r", "tl", "tr", "bl", "br"];
      [
        y != 0 ? (y - 1) * 3 + x : -1,
        y != 2 ? (y + 1) * 3 + x : -1,
        x != 0 ? y * 3 + (x - 1) : -1,
        x != 2 ? y * 3 + (x + 1) : -1,
        y != 0 && x != 0 ? (y - 1) * 3 + (x - 1) : -1,
        y != 0 && x != 2 ? (y - 1) * 3 + (x + 1) : -1,
        y != 2 && x != 0 ? (y + 1) * 3 + (x - 1) : -1,
        y != 2 && x != 2 ? (y + 1) * 3 + (x + 1) : -1
      ].filter((neigborIndex, index2) => {
        if (neigborIndex >= 0) {
          neighbors[neigborIndex] = directions[index2];
          return true;
        }
      });
      return {
        active: false,
        connected: false,
        direction: "",
        neighbors
      };
    });
  }
  resetGridElements() {
    let gridElements = [...this.state.gridElements];
    sequence([
      () => {
        gridElements.forEach((element) => {
          element.connected = false;
        });
        this.setState({gridElements});
      },
      () => {
        gridElements.forEach((element) => {
          element.connected = false;
          element.active = false;
          element.direction = "";
        });
        this.setState({gridElements});
      }
    ], 300);
  }
  componentDidMount() {
    reduceFontSize(this.textElement.current);
    window.scrollTo(0, 0);
    let touchActive = false;
    let lastElement = null;
    let lastIndex = -1;
    Array.from(this.gestureGridEl.current.children).forEach((child, index) => {
      let c = child;
      c.ontouchstart = (evt) => {
        evt.preventDefault();
        touchActive = true;
        lastElement = evt.currentTarget;
        let gridElements = [...this.state.gridElements];
        let gridElement = gridElements[index];
        gridElement.active = true;
        gridElements[index] = gridElement;
        this.setState({gridElements});
      };
    });
    this.gestureGridEl.current.ontouchend = () => {
      touchActive = false;
      if (this.props.codeSequence.length === this.codeSequence.length && (this.props.codeSequence.every((val, index) => {
        return val === this.codeSequence[index];
      }) || this.props.codeSequence.reverse().every((val, index) => {
        return val === this.codeSequence[index];
      }))) {
        this.props.onSuccess();
        return;
      }
      this.codeSequence = [];
      this.resetGridElements();
    };
    this.gestureGridEl.current.ontouchmove = (evt) => {
      if (touchActive) {
        let x = evt.touches[0].clientX;
        let y = evt.touches[0].clientY;
        let element = document.elementFromPoint(x, y);
        if (element && element !== lastElement && element.className.includes(styles.gestureGridElement)) {
          let newIndex = parseInt(element.getAttribute("data-index"));
          lastIndex = parseInt(lastElement.getAttribute("data-index"));
          let gridElements = [...this.state.gridElements];
          let newGridElement = {...gridElements[newIndex]};
          let lastGridElement = {...gridElements[lastIndex]};
          if (Object.keys(lastGridElement.neighbors).includes(`${newIndex}`) && !newGridElement.active) {
            newGridElement.active = true;
            gridElements[newIndex] = newGridElement;
            lastGridElement.connected = true;
            lastGridElement.direction = styles[lastGridElement.neighbors[newIndex]];
            gridElements[lastIndex] = lastGridElement;
            this.setState({gridElements});
            if (this.codeSequence.length <= 0) {
              this.codeSequence.push(lastIndex);
            }
            this.codeSequence.push(newIndex);
            lastElement = element;
          }
        }
      }
    };
  }
  render() {
    let gridElements = this.state.gridElements.map((element, index) => {
      let activeClass = element.active ? styles.active : "";
      let directionClass = element.direction;
      let connectedClass = element.connected ? element.direction : "";
      return /* @__PURE__ */ React.createElement("div", {
        key: index,
        "data-index": index,
        className: `${styles.gestureGridElement} ${activeClass}`
      }, /* @__PURE__ */ React.createElement("div", {
        className: `${styles.lineRot} ${directionClass}`
      }, /* @__PURE__ */ React.createElement("div", {
        className: `${styles.lineScale} ${connectedClass}`
      })));
    });
    return /* @__PURE__ */ React.createElement("div", {
      className: `${styles.gestureCode}`
    }, /* @__PURE__ */ React.createElement("div", {
      className: `${styles.dottedBackground} dottedBackground`
    }, /* @__PURE__ */ React.createElement("div", {
      className: `textbox boxshadow`
    }, /* @__PURE__ */ React.createElement("h2", {
      ref: this.textElement
    }, " Zeichne das Muster nach "))), /* @__PURE__ */ React.createElement("p", {
      className: `hint ${styles.hint}`
    }, "Das Muster befindet sich vor der Wand auf dem Boden."), /* @__PURE__ */ React.createElement("div", {
      ref: this.gestureGridEl,
      className: `${styles.gestureGrid}`
    }, gridElements), /* @__PURE__ */ React.createElement("div", {
      className: `${styles.buttonContainer} question_buttonContainer`
    }, /* @__PURE__ */ React.createElement("button", {
      className: "ctaButton boxshadow",
      onClick: this.props.onCancel
    }, "<"), /* @__PURE__ */ React.createElement("div", {
      className: `${styles.listElement}`
    }, /* @__PURE__ */ React.createElement("img", {
      src: this.props.imagePath
    }))));
  }
}
