import React from "react";
import produce from "immer";
import { withStore } from "../../../../storybook";
import ThreeStorySliderRound from "./index";

import collection from "./fixture";

withStore("Rows/Four Stories/ThreeStorySliderRound", {
  qt: {
    config: {
      "cdn-image": "thumbor-stg.assettype.com"
    }
  }
})
  .add("default", () => {
    const newCollection = produce(collection, draft => {
      draft.items = draft.items.slice(0, 6);
    });
    return <ThreeStorySliderRound collection={newCollection} />;
  })
  .add("when headline not present, remove story", () => {
    const newCollection = produce(collection, draft => {
      draft.items[0].story.headline = null;
      draft.items = draft.items.slice(0, 6);
    });
    return <ThreeStorySliderRound collection={newCollection} />;
  })
  .add("when slug not present, remove story", () => {
    const newCollection = produce(collection, draft => {
      draft.items[0].story.url = null;
      draft.items = draft.items.slice(0, 6);
    });
    return <ThreeStorySliderRound collection={newCollection} />;
  })
  .add("when color present", () => {
    const newCollection = produce(collection, draft => {
      draft.items = draft.items.slice(0, 6);
    });
    return <ThreeStorySliderRound collection={newCollection} color="#208e51" />;
  })
  .add("when only one story present", () => {
    const newCollection = produce(collection, draft => {
      draft.items = draft.items.slice(0, 1);
    });
    return <ThreeStorySliderRound collection={newCollection} />;
  })
  .add("too many stories", () => {
    return <ThreeStorySliderRound collection={collection} />;
  });
