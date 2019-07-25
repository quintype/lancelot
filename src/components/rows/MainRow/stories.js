import React from "react";
import produce from "immer";

import { withStore } from "../../../../storybook";
import MainRow from "./index";

import fixture from "./fixture";

withStore("Rows/MainRow", {
  qt: {
    config: {
      "cdn-image": "thumbor-stg.assettype.com",
      iconSpritePath: "/sprite.svg"
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
  .add("when collection bundle not present", () => {
    const newProps = produce(fixture, draft => {
      draft.items[0].items = null;
    });
    return <MainRow collection={newProps} />;
  })
  .add("when trending collection not present", () => {
    const newProps = produce(fixture, draft => {
      draft.items[1] = null;
    });
    return <MainRow collection={newProps} />;
  })
  .add("when collection widget not present", () => {
    const newProps = produce(fixture, draft => {
      draft.items[2] = null;
    });
    return <MainRow collection={newProps} />;
  })
  .add("when stories less than 12", () => {
    const newProps = produce(fixture, draft => {
      draft.items = draft.items
        .filter(item => item.type === "collection")
        .concat(draft.items.filter(item => item.type === "story").slice(0, 10));
    });
    return <MainRow collection={newProps} />;
  });
