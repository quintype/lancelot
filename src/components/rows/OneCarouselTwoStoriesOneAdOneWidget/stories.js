import React from "react";
import produce from "immer";
import { withStore } from "../../../../storybook/index";
import "../../../../assets/stylesheets/app.scss";
import OneCarouselTwoStoriesOneAdOneWidget from "./index";

import fixture from "./fixture";

withStore("Rows/OneCarouselTwoStoriesOneAdOneWidget", {
  qt: {
    config: {
      "cdn-image": "thumbor-stg.assettype.com",
      iconSpritePath: "/sprite.svg"
    }
  }
})
  .add("default", () => <OneCarouselTwoStoriesOneAdOneWidget collection={fixture.collection} />)
  .add("If there are less stories", () => {
    const newCollection = produce(fixture.collection, draft => {
      draft.items = draft.items.filter(item => item.type === "story").slice(0, 6);
    });
    return <OneCarouselTwoStoriesOneAdOneWidget collection={newCollection} />;
  })
  .add("If collection have 1 story", () => {
    const newCollection = produce(fixture.collection, draft => {
      draft.items = draft.items.filter(item => item.type === "story").slice(0, 1);
    });
    return <OneCarouselTwoStoriesOneAdOneWidget collection={newCollection} />;
  })
  .add("If collection have 0 story", () => {
    const newCollection = produce(fixture.collection, draft => {
      draft.items = [];
    });
    return <OneCarouselTwoStoriesOneAdOneWidget collection={newCollection} />;
  });
