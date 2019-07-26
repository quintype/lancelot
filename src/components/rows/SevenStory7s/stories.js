import React from "react";
import produce from "immer";

import { withStore } from "../../../../storybook";

import SevenStory7s, { VikatanTV } from "./";
import SevenStory7sProps from "./fixture.js";
import "../../../../assets/stylesheets/app.scss";
withStore("Rows/Seven Stories/SevenStory7s", {
  qt: {
    config: {
      "cdn-image": "thumbor-stg.assettype.com"
    }
  }
})
  .add("Default", () => <SevenStory7s {...SevenStory7sProps} />)
  .add("when colleciton heading is not present, hide the heading", () => {
    const newProps = produce(SevenStory7sProps, draft => {
      draft.collection.name = null;
    });
    return <SevenStory7s {...newProps} />;
  })
  .add("when number of stories less than 7", () => {
    const newProps = produce(SevenStory7sProps, draft => {
      draft.collection.items.pop();
    });
    return <SevenStory7s {...newProps} />;
  })
  .add("when number of stories more than 7", () => {
    const newProps = produce(SevenStory7sProps, draft => {
      draft.collection.items.push(draft.collection.items[1]);
    });
    return <SevenStory7s {...newProps} />;
  })
  .add("Vikatan TV", () => {
    return <VikatanTV {...SevenStory7sProps} BgPattern="bg-diamond-dark" />;
  });
