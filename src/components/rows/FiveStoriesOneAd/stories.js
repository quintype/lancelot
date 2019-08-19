import React from "react";
import produce from "immer";
import { withStore } from "../../../../storybook";
import FiveStoryOneAd from "./index";

import collection from "./fixture";
import ThemeConfigContext, { themeConfig } from "../../fixture/theme";

// When calling the component in the app, if the component is to be used as is with the existing config, the context provider is not required.
// TODO: Add context with the help of the addon.

withStore("Rows/Five Stories/FiveStoryOneAd", {
  qt: {
    config: {
      "cdn-image": "thumbor-stg.assettype.com"
    }
  }
})
  .add("default", () => (
    <ThemeConfigContext.Provider value={themeConfig}>
      <FiveStoryOneAd collection={collection} />
    </ThemeConfigContext.Provider>
  ))
  .add("when headline is not present for a story", () => {
    const newCollection = produce(collection, draft => {
      draft.items[0].story.headline = null;
    });
    return <FiveStoryOneAd collection={newCollection} />;
  })
  .add("when slug is not present for a story", () => {
    const newCollection = produce(collection, draft => {
      draft.items[0].story.url = null;
    });
    return <FiveStoryOneAd collection={newCollection} />;
  });
