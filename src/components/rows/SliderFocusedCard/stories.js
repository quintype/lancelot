import React from "react";
import produce from "immer";

import { withStore } from "../../../../storybook/index";
import SliderFocusedCard from "./index";

import fixture from "./fixture";

withStore("Rows/Four Stories/SliderFocusedCard", {
  qt: {
    config: {
      "cdn-image": "thumbor-stg.assettype.com"
    }
  }
})
  .add("default", () => <SliderFocusedCard collection={fixture} />)
  .add("collection name missing", () => {
    const newProps = produce(fixture, draft => {
      draft.name = null;
    });
    return <SliderFocusedCard collection={newProps} />;
  })
  .add("story headline missing", () => {
    const newProps = produce(fixture, draft => {
      draft.items[0].story.headline = null;
    });
    return <SliderFocusedCard collection={newProps} />;
  })
  .add("story slug missing", () => {
    const newProps = produce(fixture, draft => {
      draft.items[0].story.url = null;
    });
    return <SliderFocusedCard collection={newProps} />;
  })
  .add("contributor missing", () => {
    const newProps = produce(fixture, draft => {
      draft.items[0].story.contributors = null;
    });
    return <SliderFocusedCard collection={newProps} />;
  });
