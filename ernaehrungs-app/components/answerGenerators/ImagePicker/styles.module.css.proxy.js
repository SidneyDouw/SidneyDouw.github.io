
export let code = "._imageContainer_1su35_1 {\n  width: 80%;\n  margin: 0px auto;\n  margin-top: 90px;\n  display: grid;\n  grid-template-columns: 50% 50%;\n  gap: 6px 10px;\n}\n._imageContainer_1su35_1._small_1su35_9 {\n  grid-template-columns: 80%;\n  justify-content: center;\n}\n._imageContainer_1su35_1 div {\n  opacity: 1;\n  transition: opacity 500ms ease;\n}\n._imageContainer_1su35_1 div._hidden_1su35_17 {\n  opacity: 0;\n}\n._imageContainer_1su35_1 div img {\n  border: 5px solid transparent;\n  box-sizing: border-box;\n  width: 100%;\n  margin-bottom: -5px;\n  cursor: pointer;\n  transition: border 0.3s ease;\n}\n._imageContainer_1su35_1 div._active_1su35_28 img {\n  border: 5px solid #d10339;\n}\n._imageAnswerText_1su35_31 {\n  position: relative;\n  width: calc(90%);\n  margin: 0 auto;\n  margin-top: 10px;\n  font-size: 16px;\n}\n";
let json = {"imageContainer":"_imageContainer_1su35_1","small":"_small_1su35_9","hidden":"_hidden_1su35_17","active":"_active_1su35_28","imageAnswerText":"_imageAnswerText_1su35_31"};
export default json;

// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';

  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}