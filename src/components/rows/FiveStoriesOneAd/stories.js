import React from "react";
import produce from "immer";
import { withStore } from "../../../../storybook";
import FiveStoryOneAd from "./index";

import collection from "./fixture";

withStore("Rows/Five Stories/FiveStoryOneAd", {
  qt: {
    config: {
      "cdn-image": "thumbor-stg.assettype.com"
    }
  }
})
  .add("default", () => <FiveStoryOneAd collection={collection} />)
  .add("when headline is not present for a story", () => {
    const newCollection = produce(collection, draft => {
      draft.items[0].story.headline = null;
    });
    return <FiveStoryOneAd collection={newCollection} />;
  })
  .add("when slug is not present for a story", () => {
    const newCollection = produce(collection, draft => {
      draft.items[0].story.url = null;
    });
    return <FiveStoryOneAd collection={newCollection} />;
  });
