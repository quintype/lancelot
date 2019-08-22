import React from "react";
import { Provider } from "react-redux";
import * as storybook from "@storybook/react";
import { action } from "@storybook/addon-actions";
import assetify from "@quintype/framework/assetify/client";
import "../assets/stylesheets/app.scss";
import { withInfo } from "@storybook/addon-info";
import { withKnobs, select } from "@storybook/addon-knobs";
import ThemeConfigContext, { themeConfig } from "../src/components/fixture/theme";

assetify();
global.userPromise = Promise.reject(new Error("no user in storybook"));

export function optionalSelect() {
  return select.apply(null, arguments) || undefined;
}

const storiesOf = componentName => {
  return storybook
    .storiesOf(componentName, module)
    .addDecorator(
      withInfo({
        inline: true,
        header: false,
        source: true,
        maxPropsIntoLine: 1,
        maxPropObjectKeys: Infinity,
        maxPropArrayLength: Infinity,
        maxPropStringLength: Infinity
      })
    )
    .addDecorator(withKnobs)
    .addDecorator(story => (
      <React.Fragment>
        <style>
          {
            // eslint-disable-next-line max-len
            "@font-face{font-family:'PT Serif';font-style:normal;font-weight:400;font-display:swap;src:local('PT Serif'),local('PTSerif-Regular'),url(https://fonts.gstatic.com/s/ptserif/v10/EJRVQgYoZZY2vCFuvAFWzrk.woff) format('woff')}@font-face{font-family:'PT Serif';font-style:normal;font-weight:700;font-display:swap;src:local('PT Serif Bold'),local('PTSerif-Bold'),url(https://fonts.gstatic.com/s/ptserif/v10/EJRSQgYoZZY2vCFuvAnt66qSVy0.woff) format('woff')}@font-face{font-family:Roboto;font-style:normal;font-weight:400;font-display:swap;src:local('Roboto'),local('Roboto-Regular'),url(https://fonts.gstatic.com/s/roboto/v19/KFOmCnqEu92Fr1Mu4mxM.woff) format('woff')}@font-face{font-family:Roboto;font-style:normal;font-weight:700;font-display:swap;src:local('Roboto Bold'),local('Roboto-Bold'),url(https://fonts.gstatic.com/s/roboto/v19/KFOlCnqEu92Fr1MmWUlfBBc-.woff) format('woff')}"
          }
          {`:root {--sansTypeface: 'Roboto', sans-serif;--serifTypeface: PT Serif, sans-serif;}`}
        </style>
        {story()}
      </React.Fragment>
    ));
};

export default storiesOf;

export function withStore(componentName, state) {
  const store = {
    getState: () =>
      state || {
        qt: {
          config: {
            "cdn-image": "thumbor-stg.assettype.com"
          }
        }
      },
    subscribe: () => 0,
    dispatch: action("some action")
  };

  return storiesOf(componentName).addDecorator(story => <Provider store={store}>{story()}</Provider>);
}
