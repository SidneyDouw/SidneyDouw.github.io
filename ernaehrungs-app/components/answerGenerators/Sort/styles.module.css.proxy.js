
export let code = "._answerContainer_t8bju_1 {\n  width: 80%;\n  margin: 0 auto;\n  margin-top: 90px;\n}\n._answerItemContainer_t8bju_6 {\n  display: grid;\n  grid-template-columns: auto 30px;\n  line-height: 20px;\n  font-weight: bold;\n  background-color: white;\n  user-select: none;\n  border-radius: 100px;\n  margin-bottom: 10px;\n  padding: 20px 30px;\n  align-items: center;\n  opacity: 1;\n  transition: opacity 500ms ease;\n}\n._answerItemContainer_t8bju_6._hidden_t8bju_20 {\n  opacity: 0;\n}\n._answerItemContainer_t8bju_6 img {\n  width: 100%;\n  margin: 10px;\n}\n";
let json = {"answerContainer":"_answerContainer_t8bju_1","answerItemContainer":"_answerItemContainer_t8bju_6","hidden":"_hidden_t8bju_20"};
export default json;

// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';

  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}