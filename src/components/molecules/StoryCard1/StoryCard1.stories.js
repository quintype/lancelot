import React from "react";
import { storiesOf } from "@storybook/react";
import { StoryCard1 } from "./StoryCard1";
import { generateStory } from "../../fixture/index";
import { action } from "@storybook/addon-actions";
import { Provider } from "react-redux";

const { story } = generateStory();
const storyData = storiesOf("Molecules/StoryCard");

const store = {
  getState: () => ({ qt: { config: { "cdn-image": "thumbor-stg.assettype.com" } } }),
  subscribe: () => 0,
  dispatch: action("some action")
};

storyData.addDecorator(story => <Provider store={store}>{story()}</Provider>);

storyData.add("default", () => (
  <div style={{ maxWidth: "330px" }}>
    <StoryCard1 story={story} />
  </div>
));
