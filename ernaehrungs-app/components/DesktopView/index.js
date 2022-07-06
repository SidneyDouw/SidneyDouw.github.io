import * as __SNOWPACK_ENV__ from '../../_snowpack/env.js';
import.meta.env = __SNOWPACK_ENV__;

undefined /* [snowpack] import.meta.hot */ ;
import React from "../../_snowpack/pkg/react.js";
export default () => {
  console.log(__SNOWPACK_ENV__);
  return /* @__PURE__ */ React.createElement("div", {
    style: {textAlign: "center"}
  }, /* @__PURE__ */ React.createElement("div", {
    style: {padding: "25%"}
  }, /* @__PURE__ */ React.createElement("p", {
    style: {padding: "20px"}
  }, "Please view this website on your mobile device", " ", __SNOWPACK_ENV__.SNOWPACK_PUBLIC_SHOWCASE_MODE ? "or switch devices in your browsers developer console" : ""), /* @__PURE__ */ React.createElement("button", {
    style: {
      padding: "20px 50px",
      borderWidth: 0,
      borderRadius: "10px",
      backgroundColor: "#bbb"
    },
    onClick: () => window.location.reload()
  }, "Reload")));
};
