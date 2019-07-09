import React from "react";
import produce from "immer";
import { withStore } from "../../../../storybook/index";

import "../../../../assets/stylesheets/app.scss";
import FiveStoryOneAdOneWidget from "./index";

import collection from "./fixture";

withStore("Rows/FiveStoryOneAdOneWidget", {
  qt: {
    config: {
      "cdn-image": "thumbor-stg.assettype.com",
      iconSpritePath: "/sprite.svg"
    }
  }
})
  .add("default", () => <FiveStoryOneAdOneWidget collection={collection} />)
  .add("when headline is not present for a story", () => {
    const newCollection = produce(collection, draft => {
      draft.items[0].story.headline = null;
    });
    return <FiveStoryOneAdOneWidget collection={newCollection} />;
  })
  .add("when slug is not present for a story", () => {
    const newCollection = produce(collection, draft => {
      draft.items[0].story.url = null;
    });
    return <FiveStoryOneAdOneWidget collection={newCollection} />;
  });
