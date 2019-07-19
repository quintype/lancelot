import React from "react";
import produce from "immer";
import { withStore } from "../../../../storybook";
import ThreeStoryAutoSlider from "./index";

import collection from "./fixture";

withStore("Rows/ThreeStoryAutoSlider", {
  qt: {
    config: {
      "cdn-image": "thumbor-stg.assettype.com",
      iconSpritePath: "/sprite.svg"
    }
  }
})
  .add("default", () => <ThreeStoryAutoSlider collection={collection} slide_count={3} interval={2000} />)
  .add("when headline not present, remove story", () => {
    const newCollection = produce(collection, draft => {
      draft.items[0].story.headline = null;
    });
    return <ThreeStoryAutoSlider collection={newCollection} slide_count={3} interval={2000} />;
  })
  .add("when slug not present, remove story", () => {
    const newCollection = produce(collection, draft => {
      draft.items[0].story.url = null;
    });
    return <ThreeStoryAutoSlider collection={newCollection} slide_count={3} interval={2000} />;
  })
  .add("when only one story present", () => {
    const newCollection = produce(collection, draft => {
      draft.items = draft.items.slice(0, 1);
    });
    return <ThreeStoryAutoSlider collection={newCollection} slide_count={3} interval={2000} />;
  });
