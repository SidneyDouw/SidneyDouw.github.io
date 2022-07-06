
export let code = "._answers_51u4q_1 {\n  width: 90vw;\n  margin-left: 10vw;\n  margin-top: 90px;\n  list-style: none;\n  line-height: 20px;\n  color: black;\n  font-weight: bold;\n}\n._answers_51u4q_1 li {\n  opacity: 1;\n  transition: opacity 500ms ease;\n}\n._answers_51u4q_1 li._hidden_51u4q_14 {\n  opacity: 0;\n}\n._answers_51u4q_1 li label {\n  display: grid;\n  grid-template-columns: 25px auto;\n  gap: 10px;\n  padding: 15px 10px;\n  margin: 10px 0;\n  background-color: white;\n  border-top-left-radius: 200px;\n  border-bottom-left-radius: 200px;\n  align-items: center;\n  transition: background-color 0.3s ease, -color 0.3s ease;\n}\n._answers_51u4q_1 li label input {\n  margin: 0;\n  justify-self: center;\n  position: absolute;\n  opacity: 0;\n  cursor: pointer;\n  height: 0;\n  width: 0;\n}\n._answers_51u4q_1 li label input:checked ~ ._customRadio_51u4q_38 {\n  border-width: 8px;\n}\n._answers_51u4q_1 li label ._customRadio_51u4q_38 {\n  content: '';\n  box-sizing: border-box;\n  display: block;\n  height: 25px;\n  width: 25px;\n  border-radius: 50%;\n  border: 2px solid #d10339;\n  transition: border 0.2s ease;\n}\n";
let json = {"answers":"_answers_51u4q_1","hidden":"_hidden_51u4q_14","customRadio":"_customRadio_51u4q_38"};
export default json;

// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';

  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}