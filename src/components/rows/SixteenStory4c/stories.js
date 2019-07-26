import React from "react";
import { withStore } from "../../../../storybook/index";
import produce from "immer";
import SixteenStory4C from "./index";

import collection from "./fixture";

withStore("Rows/Sixteen Stories/16-story-4-collection", {
  qt: {
    config: {
      "cdn-image": "thumbor-stg.assettype.com",
      iconSpritePath: "/sprite.svg"
    }
  }
})
  .add("default", () => <SixteenStory4C {...collection} />)
  .add("missing-collection-name", () => {
    const newProps = produce(collection, draft => {
      draft.collection.name = null;
    });
    return <SixteenStory4C {...newProps} />;
  })
  .add("less-sub-collections", () => {
    const newProps = produce(collection, draft => {
      draft.collection.items = draft.collection.items.slice(0, 3);
    });
    return <SixteenStory4C {...newProps} />;
  })
  .add("missing-sub-collection-name", () => {
    const newProps = produce(collection, draft => {
      draft.collection.items[1].name = null;
    });
    return <SixteenStory4C {...newProps} />;
  })
  .add("missing-sub-collection-slug", () => {
    const newProps = produce(collection, draft => {
      draft.collection.items[2].slug = null;
    });
    return <SixteenStory4C {...newProps} />;
  })
  .add("stories instead of collection", () => {
    const newProps = produce(collection, draft => {
      draft.collection.items = draft.collection.items[0].items;
    });
    return <SixteenStory4C {...newProps} />;
  });
