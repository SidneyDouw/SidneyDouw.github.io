
export let code = "._resultScreen_1bb5i_1 {\n  min-height: var(--app-height);\n  display: grid;\n  grid-template-rows: fit-content(0) fit-content(0) auto 100px;\n  gap: 40px;\n  background-color: #fee061;\n}\n._dottedBackground_1bb5i_8 {\n  transition: opacity 500ms ease;\n}\n._dottedBackground_1bb5i_8 ._textbox_1bb5i_11 {\n  transform: translateY(50%);\n  max-height: 40px;\n}\n._dottedBackground_1bb5i_8._hidden_1bb5i_15 {\n  opacity: 0;\n}\n._listElement_1bb5i_18 {\n  justify-self: left;\n  max-width: 80%;\n  border-top-right-radius: 50px;\n  border-bottom-right-radius: 50px;\n  padding: 20px 40px 20px 40px;\n  margin-top: 20px;\n  background-color: #fff;\n  font-size: 30px;\n  font-weight: bold;\n  transition: transform 500ms ease, opacity 500ms ease;\n}\n._listElement_1bb5i_18._hidden_1bb5i_15 {\n  opacity: 0;\n  transform: translateX(-10%);\n}\n._textContainer_1bb5i_34 {\n  display: grid;\n  gap: 20px;\n  justify-items: center;\n  transition: transform 500ms ease, opacity 500ms ease;\n}\n._textContainer_1bb5i_34._hidden_1bb5i_15 {\n  opacity: 0;\n  transform: translateY(5%);\n}\n._textContainer_1bb5i_34 img {\n  width: 60%;\n}\n._textContainer_1bb5i_34 p {\n  width: 80%;\n}\n._buttonContainer_1bb5i_50 {\n  transition: transform 500ms ease, opacity 500ms ease;\n}\n._buttonContainer_1bb5i_50 ._ctaButton_1bb5i_53 {\n  text-decoration: none;\n}\n._buttonContainer_1bb5i_50._hidden_1bb5i_15 {\n  opacity: 0;\n  transform: translateY(20%);\n}\n";
let json = {"resultScreen":"_resultScreen_1bb5i_1","dottedBackground":"_dottedBackground_1bb5i_8","textbox":"_textbox_1bb5i_11","hidden":"_hidden_1bb5i_15","listElement":"_listElement_1bb5i_18","textContainer":"_textContainer_1bb5i_34","buttonContainer":"_buttonContainer_1bb5i_50","ctaButton":"_ctaButton_1bb5i_53"};
export default json;

// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';

  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}