
export let code = "._questionContainer_wocr0_1 {\n  min-height: var(--app-height);\n  display: grid;\n  grid-template-rows: fit-content(0) auto 100px;\n  gap: 10px 0;\n  background-color: #a3d4d2;\n  opacity: 1;\n  transition: opacity 500ms ease;\n}\n._questionContainer_wocr0_1._hidden_wocr0_10 {\n  opacity: 0;\n}\n._questionContainer_wocr0_1._image_picker_wocr0_13 {\n  grid-template-rows: fit-content(0) auto 100px 100px;\n}\n._dottedBackground_wocr0_16 {\n  opacity: 1;\n  transition: opacity 500ms ease;\n}\n._dottedBackground_wocr0_16._hidden_wocr0_10 {\n  opacity: 0;\n}\n._dottedBackground_wocr0_16 ._container_wocr0_23 {\n  transform: translateY(50%);\n  opacity: 1;\n  transition: transform 500ms ease, opacity 500ms ease;\n}\n._dottedBackground_wocr0_16 ._container_wocr0_23._hidden_wocr0_10 {\n  transform: translateY(40%);\n  opacity: 0;\n}\n._dottedBackground_wocr0_16 ._container_wocr0_23 div {\n  max-height: 80px;\n}\n._dottedBackground_wocr0_16 ._container_wocr0_23 ._hint_wocr0_35 {\n  margin-top: 10px;\n}\n._appearing_wocr0_38 {\n  opacity: 1;\n  transition: opacity 500ms ease;\n}\n._appearing_wocr0_38._hidden_wocr0_10 {\n  opacity: 0;\n}\n";
let json = {"questionContainer":"_questionContainer_wocr0_1","hidden":"_hidden_wocr0_10","image_picker":"_image_picker_wocr0_13","dottedBackground":"_dottedBackground_wocr0_16","container":"_container_wocr0_23","hint":"_hint_wocr0_35","appearing":"_appearing_wocr0_38"};
export default json;

// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';

  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}