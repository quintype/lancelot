
import Headline from "./index";
import story from "./fixture";

import React from "react";
import storiesOf from "../../../../storybook";
import { withKnobs, select, text } from "@storybook/addon-knobs";
import { withInfo } from '@storybook/addon-info';

function optionalSelect() {
  return select.apply(null, arguments) || undefined;
}

const headerTypeOptions = {
  "No Value": "",
  "type-1": 1,
  "type-2": 2,
  "type-3": 3,
  "type-4": 4,
  "type-5": 5,
  "type-6": 6,
  "type-7": 7,
  "type-8": 8
};

const headerLevelOptions = {
  "No Value": "",
  h1: 1,
  h2: 2,
  h3: 3,
  h4: 4,
  h5: 5,
  h6: 6
};

const headerDesigns = {
  "Default design": "",
  "Cross Line Design": "crossline"
};

const stories = storiesOf("Headline", module);
stories.addDecorator(withKnobs);
stories.add("default", () => (
  <Headline
    text={text("Headline Text", story.story.headline)}
    headerType={optionalSelect("Header Types", headerTypeOptions)}
    headerLevel={optionalSelect("Header Levels", headerLevelOptions)}
    headlineDesign={optionalSelect("Header Designs", headerDesigns)}
  />
));
