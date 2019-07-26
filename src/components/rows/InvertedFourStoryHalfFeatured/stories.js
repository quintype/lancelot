import React from "react";
import produce from "immer";

import { withStore } from "../../../../storybook";
import InvertedFourStoryHalfFeatured from ".";
import props from "./fixture.js";

withStore("Rows/Four Stories/InvertedFourStoryHalfFeatured", {
  qt: {
    config: {
      "cdn-image": "thumbor-stg.assettype.com",
      iconSpritePath: "/sprite.svg"
    }
  }
})
  .add("Default", () => <InvertedFourStoryHalfFeatured {...props} />)
  .add("when colleciton heading is not present, hide the heading", () => {
    const newProps = produce(props, draft => {
      draft.collection.name = null;
    });
    return <InvertedFourStoryHalfFeatured {...newProps} />;
  })
  .add("when colleciton slug is not present, hide the read-more", () => {
    const newProps = produce(props, draft => {
      draft.collection.slug = null;
    });
    return <InvertedFourStoryHalfFeatured {...newProps} />;
  })
  .add("when number of stories less than 4", () => {
    const newProps = produce(props, draft => {
      draft.collection.items = draft.collection.items.slice(0, 3);
    });
    return <InvertedFourStoryHalfFeatured {...newProps} />;
  })
  .add("when number of stories more than 4", () => {
    const newProps = produce(props, draft => {
      draft.collection.items.push(draft.collection.items[1]);
    });
    return <InvertedFourStoryHalfFeatured {...newProps} />;
  });
