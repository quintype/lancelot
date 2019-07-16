import React from "react";
import produce from "immer";

import { withStore } from "../../../../storybook";
import props from "./fixture.js";

import NineteenStoriesOneAd from ".";

withStore("Rows/NineteenStoriesOneAd", {
  qt: {
    config: {
      "cdn-image": "thumbor-stg.assettype.com",
      iconSpritePath: "/sprite.svg"
    }
  }
})
  .add("Default", () => <NineteenStoriesOneAd {...props} />)
  .add("when less stories(14) are present", () => {
    const newProps = produce(props, draft => {
      draft.collection.items = draft.collection.items.slice(0, 14);
    });
    return <NineteenStoriesOneAd {...newProps} />;
  })
  .add("when story headline is missing", () => {
    const newProps = produce(props, draft => {
      draft.collection.items[0].story.headline = null;
      draft.collection.items[0].story.alternative = null;
      draft.collection.items[1].story.headline = null;
      draft.collection.items[1].story.alternative = null;
    });
    return <NineteenStoriesOneAd {...newProps} />;
  })
  .add("when story slug is missing", () => {
    const newProps = produce(props, draft => {
      draft.collection.items[0].story.url = null;
      draft.collection.items[1].story.url = null;
    });
    return <NineteenStoriesOneAd {...newProps} />;
  });
