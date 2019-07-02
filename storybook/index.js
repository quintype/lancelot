import React from "react";
import { Provider } from "react-redux";
import * as storybook from "@storybook/react";
import { action } from "@storybook/addon-actions";
import assetify from "@quintype/framework/assetify/client";
// import taunFontWoff2 from "../app/assets/fonts/taun-tamil.woff2";
import "../assets/stylesheets/app.scss";

assetify();
global.userPromise = Promise.reject(new Error("no user in storybook"));

export default function storiesOf(componentName) {
  return storybook.storiesOf(componentName, module).addDecorator(story => (
    <React.Fragment>
      <svg style={{ width: 0, height: 0, position: "absolute" }}>
        <linearGradient id="linearGradientA" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#FB9540" />
          <stop offset="100%" stopColor="#F65C1E" />
        </linearGradient>
        <linearGradient id="linearGradientB" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#FE7000" />
          <stop offset="100%" stopColor="#EE1421" />
        </linearGradient>
      </svg>
      <style>
        {
          "@font-face{font-family:'Noto Sans Tamil';font-style:normal;font-weight:400;src:url(//fonts.gstatic.com/ea/notosanstamil/v3/NotoSansTamil-Regular.eot);src:url(//fonts.gstatic.com/ea/notosanstamil/v3/NotoSansTamil-Regular.eot?#iefix) format('embedded-opentype'),url(//fonts.gstatic.com/ea/notosanstamil/v3/NotoSansTamil-Regular.woff2) format('woff2'),url(//fonts.gstatic.com/ea/notosanstamil/v3/NotoSansTamil-Regular.woff) format('woff'),url(//fonts.gstatic.com/ea/notosanstamil/v3/NotoSansTamil-Regular.ttf) format('truetype')}@font-face{font-family:'Noto Sans Tamil';font-style:normal;font-weight:700;src:url(//fonts.gstatic.com/ea/notosanstamil/v3/NotoSansTamil-Bold.eot);src:url(//fonts.gstatic.com/ea/notosanstamil/v3/NotoSansTamil-Bold.eot?#iefix) format('embedded-opentype'),url(//fonts.gstatic.com/ea/notosanstamil/v3/NotoSansTamil-Bold.woff2) format('woff2'),url(//fonts.gstatic.com/ea/notosanstamil/v3/NotoSansTamil-Bold.woff) format('woff'),url(//fonts.gstatic.com/ea/notosanstamil/v3/NotoSansTamil-Bold.ttf) format('truetype')}"
        }

        {/* {`@font-face{font-family:taun-tamil;font-style:normal;src:url(${taunFontWoff2}) format('woff2')}`} */}
        {`:root {--font1: 'Noto Sans Tamil', sans-serif;--font2: taun-tamil, sans-serif;}`}
      </style>
      {story()}
    </React.Fragment>
  ));
}

export function withStore(componentName, state) {
  const store = {
    getState: () => state || { qt: { config: { iconSpritePath: "/sprite.svg" } } },
    subscribe: () => 0,
    dispatch: action("some action")
  };

  return storiesOf(componentName).addDecorator(story => <Provider store={store}>{story()}</Provider>);
}
