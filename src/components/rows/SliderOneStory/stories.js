import React from "react";
import { withStore } from "../../../../storybook";
import produce from "immer";
import SliderOneStory from "./index";
import fixture from "./fixture";

withStore("Rows/One Story/SliderOneStory", {
  qt: {
    config: {
      "cdn-image": "thumbor-stg.assettype.com"
    }
  }
})
  .add("default", () => <SliderOneStory stories={fixture.stories} />)
  .add("0 stories", () => {
    return <SliderOneStory stories={[]} />;
  })
  .add("1 story", () => {
    return <SliderOneStory stories={fixture.stories.slice(0, 1)} />;
  })
  .add("story missing slug", () => {
    const newProps = produce(fixture.stories, draft => {
      draft[0].slug = null;
    });
    return <SliderOneStory stories={newProps} />;
  });
