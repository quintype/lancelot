import React from "react";
import { storiesOf } from '@storybook/react';
import Headline from "./index";
import { generateStory } from "../fixture/index";

const { story } = generateStory();

storiesOf("Atoms/Headline")
  .add("default", () => <Headline text={story.headline} headerType={1} headerLevel={2} />)
  .add("Collection Name", () => <Headline text={story.headline} headerType={8} headerLevel={1} />);
