import React from "react";
import { Provider } from "react-redux";
import * as storybook from "@storybook/react";
import { action } from "@storybook/addon-actions";
import assetify from "@quintype/framework/assetify/client";
import "../assets/stylesheets/app.scss";

assetify();
global.userPromise = Promise.reject(new Error("no user in storybook"));

export default function storiesOf(componentName) {
  return storybook.storiesOf(componentName, module).addDecorator(story => <React.Fragment>{story()}</React.Fragment>);
}

export function withStore(componentName, state) {
  const store = {
    getState: () => state || { qt: { config: { iconSpritePath: "/sprite.svg" } } },
    subscribe: () => 0,
    dispatch: action("some action")
  };

  return storiesOf(componentName).addDecorator(story => <Provider store={store}>{story()}</Provider>);
}
