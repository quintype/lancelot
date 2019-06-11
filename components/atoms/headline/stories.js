import React from "react";
import { storiesOf } from '@storybook/react';
import Headline from "./index";
import { generateStory } from "../fixture/index";
import { withKnobs, boolean } from "@storybook/addon-knobs";

const { story } = generateStory();
const storyData = storiesOf("Atoms/Headline");
storyData.addDecorator(withKnobs);

storyData.add("default", () => {
  const rowData = {
    background: boolean("Background dark", false)
  };

  return <Headline text={story.headline} headerType={1} headerLevel={2} {...rowData}/>
})
  .add("Collection Name", () => <Headline text={story.headline} headerType={8} headerLevel={1} />);

