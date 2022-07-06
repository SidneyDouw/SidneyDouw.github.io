import React, {
  useEffect,
  useRef,
  useState,
} from "../../_snowpack/pkg/react.js";
import { sequence, clamp, reduceFontSize } from "../../functions/util.js";
import styles from "./styles.module.css.proxy.js";
let timerDone = false;
let assetsLoaded = false;
export default (props) => {
  const interval = 100 / 3;
  const textElement = useRef(null);
  const [progressPercent, setProgressPercent] = useState(0);
  const [at1, setAt1] = useState(false);
  const [at2, setAt2] = useState(false);
  const [at3, setAt3] = useState(false);
  const [at4, setAt4] = useState(false);
  useEffect(() => {
    reduceFontSize(textElement.current);
    loadAssets();
    enterSequence();
  }, []);
  const enterSequence = () => {
    sequence(
      [
        () => setAt1(true),
        () => setAt2(true),
        () => setAt3(true),
        () => setAt4(true),
      ],
      [250, 250],
      () => setTimeout(() => startLoading(), 500)
    );
  };
  const exitSequence = () => {
    sequence(
      [
        () => setAt1(false),
        () => setAt2(false),
        () => setAt3(false),
        () => setAt4(false),
      ],
      100,
      () => setTimeout(() => props.onLoad(), 500)
    );
  };
  const startLoading = () => {
    let remaining = props.loadingTime;
    let id = setInterval(() => {
      remaining -= interval;
      setProgressPercent(
        clamp(Math.floor((1 - remaining / props.loadingTime) * 100), 0, 100)
      );
      if (remaining <= 0) {
        clearInterval(id);
        timerDone = true;
        if (assetsLoaded) {
          exitSequence();
        }
      }
    }, interval);
  };
  const loadAssets = () => {
    const assetPaths = [
      "/ernaehrungs-app/img/BMEL_Logo.svg",
      "/ernaehrungs-app/img/intro.png",
      "/ernaehrungs-app/img/menu.png",
      "/ernaehrungs-app/img/mixer.webp",
      "/ernaehrungs-app/img/mouth_static.png",
      "/ernaehrungs-app/img/placeholder.svg",
      "/ernaehrungs-app/img/splash_screen/center.svg",
      "/ernaehrungs-app/img/splash_screen/outer_01.svg",
      "/ernaehrungs-app/img/splash_screen/outer_02.svg",
      "/ernaehrungs-app/img/splash_screen/outer_03.svg",
      "/ernaehrungs-app/img/splash_screen/outer_04.svg",
      "/ernaehrungs-app/img/splash_screen/outer_05.svg",
      "/ernaehrungs-app/img/splash_screen/outer_06.svg",
      "/ernaehrungs-app/img/splash_screen/outer_07.svg",
      "/ernaehrungs-app/img/questions/3/0.jpg",
      "/ernaehrungs-app/img/questions/3/1.jpg",
      "/ernaehrungs-app/img/questions/3/2.jpg",
      "/ernaehrungs-app/img/questions/3/3.jpg",
      "/ernaehrungs-app/img/questions/3/4.jpg",
      "/ernaehrungs-app/img/questions/3/5.jpg",
      "/ernaehrungs-app/img/questions/6/0.jpg",
      "/ernaehrungs-app/img/questions/6/1.jpg",
      "/ernaehrungs-app/img/questions/6/2.jpg",
      "/ernaehrungs-app/img/questions/6/3.jpg",
      "/ernaehrungs-app/img/questions/6/4.jpg",
      "/ernaehrungs-app/img/questions/6/5.jpg",
      "/ernaehrungs-app/img/questions/8/0.jpg",
      "/ernaehrungs-app/img/questions/8/1.jpg",
      "/ernaehrungs-app/img/questions/8/2.jpg",
    ];
    Promise.all(
      assetPaths.map((path) => {
        return new Promise((resolve, reject) => {
          let img = new Image();
          img.src = path;
          img.onload = () => resolve();
        });
      })
    ).then(() => {
      assetsLoaded = true;
      if (timerDone) {
        exitSequence();
      }
    });
  };
  return /* @__PURE__ */ React.createElement(
    "div",
    {
      className: `${styles.loadingScreen}`,
    },
    /* @__PURE__ */ React.createElement("img", {
      src: "/ernaehrungs-app/img/BMEL_Logo.svg",
      className: `${styles.logo} ${at1 ? "" : styles.hidden}`,
    }),
    /* @__PURE__ */ React.createElement(
      "div",
      {
        className: `${styles.progressBar} ${at2 ? "" : styles.hidden}`,
      },
      /* @__PURE__ */ React.createElement(
        "div",
        {
          style: {
            top: progressPercent + "%",
            transition: `top ${interval}ms ease`,
          },
        },
        progressPercent,
        "%"
      )
    ),
    /* @__PURE__ */ React.createElement("img", {
      src: "/ernaehrungs-app/img/mouth_static.png",
      className: `${styles.animation} ${at3 ? "" : styles.hidden}`,
    }),
    /* @__PURE__ */ React.createElement(
      "div",
      {
        className: `${styles.dottedBackground} ${
          at4 ? "" : styles.hidden
        } dottedBackground`,
      },
      /* @__PURE__ */ React.createElement(
        "div",
        {
          className: `textbox boxshadow ${at4 ? "" : styles.hidden}`,
        },
        /* @__PURE__ */ React.createElement(
          "h2",
          {
            ref: textElement,
          },
          "Wird geladen..."
        )
      )
    )
  );
};
