import React from "react";
import produce from "immer";

import { withStore } from "../../../../storybook";
import FourStoryHalfFeatured from ".";
import props from "./fixture.js";

withStore("Rows/FourStoryHalfFeatured", {
  qt: {
    config: {
      "cdn-image": "thumbor-stg.assettype.com",
      iconSpritePath: "/sprite.svg"
    }
  }
})
  .add("Default", () => <FourStoryHalfFeatured {...props} />)
  .add("when colleciton heading is not present, hide the heading", () => {
    const newProps = produce(props, draft => {
      draft.collection.name = null;
    });
    return <FourStoryHalfFeatured {...newProps} />;
  })
  .add("when number of stories less than 4", () => {
    const newProps = produce(props, draft => {
      draft.collection.items.pop();
    });
    return <FourStoryHalfFeatured {...newProps} />;
  })
  .add("when number of stories more than 4", () => {
    const newProps = produce(props, draft => {
      draft.collection.items.push(draft.collection.items[1]);
    });
    return <FourStoryHalfFeatured {...newProps} />;
  });
