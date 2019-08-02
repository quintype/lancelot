import React from "react";
import produce from "immer";

import { withStore } from "../../../../storybook";
import MainRow from "./index";

import fixture from "./fixture";

withStore("Rows/Seven Stories/MainRow2", {
  qt: {
    config: {
      "cdn-image": "thumbor-stg.assettype.com"
    }
  }
})
  .add("default", () => <MainRow collection={fixture} />)
  .add("when colleciton items empty", () => {
    const newProps = produce(fixture, draft => {
      draft.items = null;
    });
    return <MainRow collection={newProps} />;
  })
  .add("when there is one slider story", () => {
    const noSliderstory = true;
    return <MainRow collection={fixture} noSliderstory={noSliderstory} />;
  });
