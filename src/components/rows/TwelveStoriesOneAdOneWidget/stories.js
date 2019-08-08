import React from "react";
import produce from "immer";

import { withStore } from "../../../../storybook";
import TwelveStoriesOneAdOneWidget from "./index";

import fixture from "./fixture";

withStore("Rows/Twelve Stories/TwelveStoriesOneAdOneWidget", {
  qt: {
    config: {
      "cdn-image": "thumbor-stg.assettype.com",
      iconSpritePath: "/sprite.svg"
    }
  }
})
  // .addDecorator(story => <div style={{ width: "360px" }}>{story()}</div>)
  .add("default", () => <TwelveStoriesOneAdOneWidget collection={fixture.collection} />)
  .add("If there are less stories", () => {
    const newCollection = produce(fixture.collection, draft => {
      let stories = draft.items.filter(item => item.type === "story").slice(0, 3);
      draft.items = draft.items.filter(item => item.type === "collection").concat(stories);
    });
    return <TwelveStoriesOneAdOneWidget collection={newCollection} />;
  })
  .add("If there is only 1 collection", () => {
    const newCollection = produce(fixture.collection, draft => {
      let collections = draft.items.filter(item => item.type === "collection").slice(0, 1);
      draft.items = draft.items.filter(item => item.type === "story").concat(collections);
    });
    return <TwelveStoriesOneAdOneWidget collection={newCollection} />;
  })
  .add("If collection have less stories", () => {
    const newCollection = produce(fixture.collection, draft => {
      let collections = draft.items.filter(item => item.type === "collection");
      collections[0].items = collections[0].items.slice(0, 3);
      draft.items = draft.items.filter(item => item.type === "story").concat(collections);
    });
    return <TwelveStoriesOneAdOneWidget collection={newCollection} />;
  });
