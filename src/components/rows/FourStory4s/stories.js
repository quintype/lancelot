import React from "react";
import produce from "immer";

import { withStore } from "../../../../storybook";
import FourStory4s from "./";
import FourStory4sProps from "./fixture.js";

withStore("Rows/Four Stories/FourStory4s", {
  qt: {
    config: {
      "cdn-image": "thumbor-stg.assettype.com",
      iconSpritePath: "/sprite.svg"
    }
  }
})
  .add("Default", () => <FourStory4s {...FourStory4sProps} />)
  .add("when colleciton heading is not present, hide the heading", () => {
    const newProps = produce(FourStory4sProps, draft => {
      draft.collection.name = null;
    });
    return <FourStory4s {...newProps} />;
  })
  .add("when number of stories is less than 4, it should center align it", () => {
    const newProps = produce(FourStory4sProps, draft => {
      draft.collection.items.pop();
    });
    return <FourStory4s {...newProps} />;
  });
