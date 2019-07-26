import React from "react";
import produce from "immer";

import { withStore } from "../../../../storybook";
import TwoCollectionFourStories from ".";
import TwoCollectionFourStoriesProps from "./fixture.js";

withStore("Rows/Four Stories/TwoCollectionFourStories", {
  qt: {
    config: {
      "cdn-image": "thumbor-stg.assettype.com",
      iconSpritePath: "/sprite.svg"
    }
  }
})
  .add("Default", () => <TwoCollectionFourStories {...TwoCollectionFourStoriesProps} />)
  .add("when colleciton heading is not present, hide the heading", () => {
    const newProps = produce(TwoCollectionFourStoriesProps, draft => {
      draft.collection.items[0].name = null;
    });
    return <TwoCollectionFourStories {...newProps} />;
  })
  .add("when number of stories in any 1 is less than 4, it should maintain the placeholder", () => {
    const newProps = produce(TwoCollectionFourStoriesProps, draft => {
      draft.collection.items[0].items = draft.collection.items[0].items.slice(0, 1);
    });
    return <TwoCollectionFourStories {...newProps} />;
  })
  .add("when number of stories in any 1 is 0, then skip it", () => {
    const newProps = produce(TwoCollectionFourStoriesProps, draft => {
      draft.collection.items[0].items = [];
    });
    return <TwoCollectionFourStories {...newProps} />;
  })
  .add("when number of stories in both collections is less than 4, it should maintain the placeholder", () => {
    const newProps = produce(TwoCollectionFourStoriesProps, draft => {
      draft.collection.items[0].items = draft.collection.items[0].items.slice(0, 1);
      draft.collection.items[1].items = draft.collection.items[1].items.slice(0, 1);
    });
    return <TwoCollectionFourStories {...newProps} />;
  });
