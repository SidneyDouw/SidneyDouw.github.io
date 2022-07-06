import React, {Component} from "../../_snowpack/pkg/react.js";
import {sequence} from "../../functions/util.js";
import styles from "./styles.module.css.proxy.js";
export default class HelpDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      at1: false,
      at2: false,
      at3: false
    };
  }
  componentDidMount() {
    this.enterSequence();
  }
  enterSequence() {
    sequence([
      () => this.setState({at1: true}),
      () => this.setState({at2: true}),
      () => this.setState({at3: true})
    ], 100);
  }
  exitSequence() {
    sequence([
      () => this.setState({at1: false}),
      () => this.setState({at2: false}),
      () => this.setState({at3: false})
    ], 100, () => setTimeout(this.props.onButtonClick, 500));
  }
  render() {
    return /* @__PURE__ */ React.createElement("div", {
      className: styles.helpScreen
    }, /* @__PURE__ */ React.createElement("div", {
      className: `${styles.textbox} textbox boxshadow ${this.state.at1 ? "" : styles.hidden}`
    }, /* @__PURE__ */ React.createElement("h2", null, " Hallo! "), /* @__PURE__ */ React.createElement("p", null, "Finde heraus, welcher Ernährungstyp du bist: pragmatisch, genussvoll oder engagiert? Beantworte dazu die folgenden zwölf Fragen der Reihe nach. Deine Auswahl kannst du nachträglich nicht mehr ändern. Nachdem du alle Fragen beantwortet hast, erhältst du dein ganz persönliches Ergebnis. Viel Spaß!")), /* @__PURE__ */ React.createElement("div", {
      className: `${styles.dottedBackground} dottedBackground ${this.state.at2 ? "" : styles.hidden}`
    }), /* @__PURE__ */ React.createElement("button", {
      className: `ctaButton boxshadow ${this.state.at3 ? "" : styles.hidden}`,
      onClick: this.exitSequence.bind(this)
    }, "Einverstanden"));
  }
}
