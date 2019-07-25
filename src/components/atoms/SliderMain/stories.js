import React from "react";
import { withStore } from "../../../../storybook";
import produce from "immer";
import SliderMain from "./index";

import fixture from "./fixture";

withStore("Components/SliderMain", {
  qt: {
    config: {
      "cdn-image": "thumbor-stg.assettype.com"
    }
  }
})
  .addDecorator(story => <div style={{ maxWidth: 460 }}>{story()}</div>)
  .add("default", () => <SliderMain stories={fixture.stories} />)
  .add("0 stories", () => {
    return <SliderMain stories={[]} />;
  })
  .add("1 story", () => {
    return <SliderMain stories={fixture.stories.slice(0, 1)} />;
  })
  .add("story missing slug", () => {
    const newProps = produce(fixture.stories, draft => {
      draft[0].slug = null;
    });
    return <SliderMain stories={newProps} />;
  });
