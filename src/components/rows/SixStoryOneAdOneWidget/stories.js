import React from "react";
import produce from "immer";
import { withStore } from "../../../../storybook/index";

import SixStoryOneAdOneWidget from "./index";

import collection from "./fixture";

withStore("Rows/Six Stories/SixStoryOneAdOneWidget", {
  qt: {
    config: {
      "cdn-image": "thumbor-stg.assettype.com",
      iconSpritePath: "/sprite.svg"
    }
  }
})
  .add("default", () => <SixStoryOneAdOneWidget collection={collection} />)
  .add("when headline is not present for a story", () => {
    const newCollection = produce(collection, draft => {
      draft.items[0].story.headline = null;
    });
    return <SixStoryOneAdOneWidget collection={newCollection} />;
  })
  .add("when slug is not present for a story", () => {
    const newCollection = produce(collection, draft => {
      draft.items[0].story.url = null;
    });
    return <SixStoryOneAdOneWidget collection={newCollection} />;
  });
