import React from "react";
import { withStore } from "../../../../storybook/index";
import "../../../../assets/stylesheets/app.scss";
import produce from "immer";
import SliderFocusedCard from "./index";

import fixture from "./fixture";

withStore("Rows/SliderFocusedCard", {
  qt: {
    config: {
      "cdn-image": "thumbor-stg.assettype.com",
      iconSpritePath: "/sprite.svg"
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
