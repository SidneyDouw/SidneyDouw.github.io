
export let code = "._sliderContainer_1yq4g_1 {\n  width: 80%;\n  margin: 90px auto;\n  display: grid;\n  grid-template-columns: 40% auto 40%;\n  line-height: 20px;\n  opacity: 1;\n  transition: opacity 500ms ease;\n}\n._sliderContainer_1yq4g_1._hidden_1yq4g_10 {\n  opacity: 0;\n}\n._sliderContainer_1yq4g_1 img {\n  width: 80%;\n  justify-self: center;\n  grid-column: 1 / span 3;\n}\n._sliderContainer_1yq4g_1 span {\n  margin-top: 30px;\n  margin-bottom: 60px;\n  font-weight: bold;\n}\n._sliderContainer_1yq4g_1 span:last-of-type {\n  grid-column: 3;\n  text-align: right;\n}\n._sliderContainer_1yq4g_1 input {\n  grid-column: 1 / span 3;\n  -webkit-appearance: none;\n  appearance: none;\n  height: 4px;\n  border-radius: 2px;\n  background: #a30339;\n  outline: none;\n}\n._sliderContainer_1yq4g_1 input::before,\n._sliderContainer_1yq4g_1 input::after {\n  content: '';\n  display: block;\n  width: 8px;\n  height: 8px;\n  margin-top: -6px;\n  margin-left: -8px;\n  border-radius: 50%;\n  border: 4px solid #a30339;\n  background-color: #a3d4d2;\n}\n._sliderContainer_1yq4g_1 input::after {\n  margin-left: 0;\n  margin-right: -8px;\n}\n._sliderContainer_1yq4g_1 input::-webkit-slider-thumb {\n  -webkit-appearance: none;\n  appearance: none;\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  background: white;\n  cursor: pointer;\n  /* Cursor on hover */\n}\n._sliderContainer_1yq4g_1 input::-moz-range-thumb {\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  background: white;\n  cursor: pointer;\n  /* Cursor on hover */\n}\n";
let json = {"sliderContainer":"_sliderContainer_1yq4g_1","hidden":"_hidden_1yq4g_10"};
export default json;

// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';

  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}