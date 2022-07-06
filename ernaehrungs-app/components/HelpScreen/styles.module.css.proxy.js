
export let code = "._helpScreen_thgbc_1 {\n  min-height: var(--app-height);\n  background-color: #a3d4d2;\n  display: grid;\n  grid-template-rows: auto 80px 80px;\n}\n._helpScreen_thgbc_1 ._textbox_thgbc_7 {\n  grid-column: 1;\n  grid-row: 1 / span 2;\n  margin: 60px auto;\n  text-align: center;\n  z-index: 2;\n  opacity: 1;\n  transform: translateY(0%);\n  transition: opacity 500ms ease, transform 500ms ease;\n}\n._helpScreen_thgbc_1 ._textbox_thgbc_7._hidden_thgbc_17 {\n  opacity: 0;\n  transform: translateY(5%);\n}\n._helpScreen_thgbc_1 ._textbox_thgbc_7 h2,\n._helpScreen_thgbc_1 ._textbox_thgbc_7 p {\n  margin: 10px;\n  margin-bottom: 20px;\n  text-align: left;\n}\n._helpScreen_thgbc_1 ._textbox_thgbc_7 img {\n  margin: 10px 0;\n  max-width: 60%;\n}\n._helpScreen_thgbc_1 ._dottedBackground_thgbc_31 {\n  grid-column: 1;\n  grid-row: 2 / span 2;\n  opacity: 1;\n  transition: opacity 500ms ease;\n}\n._helpScreen_thgbc_1 ._dottedBackground_thgbc_31._hidden_thgbc_17 {\n  opacity: 0;\n}\n._helpScreen_thgbc_1 button {\n  grid-column: 1;\n  grid-row: 3;\n  transform: translateY(-50%);\n  opacity: 1;\n  transition: opacity 500ms ease;\n}\n._helpScreen_thgbc_1 button._hidden_thgbc_17 {\n  opacity: 0;\n}\n";
let json = {"helpScreen":"_helpScreen_thgbc_1","textbox":"_textbox_thgbc_7","hidden":"_hidden_thgbc_17","dottedBackground":"_dottedBackground_thgbc_31"};
export default json;

// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';

  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}