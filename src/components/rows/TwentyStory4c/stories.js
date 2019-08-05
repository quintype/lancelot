import React from "react";
import { withStore } from "../../../../storybook/index";
import produce from "immer";
import TwentyStory4C from "./index";

import collection from "./fixture";

withStore("Rows/Twenty Stories/20-story-4-collection", {
  qt: {
    config: {
      "cdn-image": "thumbor-stg.assettype.com"
    }
  }
})
  .add("default", () => <TwentyStory4C {...collection} />)
  .add("missing-collection-name", () => {
    const newProps = produce(collection, draft => {
      draft.collection.name = null;
    });
    return <TwentyStory4C {...newProps} />;
  });
