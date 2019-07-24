import React from "react";
import { withStore } from "../../../../storybook/index";
import "../../../../assets/stylesheets/app.scss";
import produce from "immer";
import TenStoriesOneAdOneWidget from "./index";

import collection from "./fixture";

withStore("Rows/10-stories-collection", {
  qt: {
    config: {
      "cdn-image": "thumbor-stg.assettype.com",
      iconSpritePath: "/sprite.svg"
    }
  }
})
  .add("default", () => <TenStoriesOneAdOneWidget {...collection} />)
  .add("missing-collection-name", () => {
    const newProps = produce(collection, draft => {
      draft.name = null;
    });
    return <TenStoriesOneAdOneWidget {...newProps} />;
  })

  .add("7 stories", () => {
    const newProps = produce(collection, draft => {
      draft.items = draft.items.slice(0, 7);
    });
    return <TenStoriesOneAdOneWidget {...newProps} />;
  })
  .add("9 stories", () => {
    const newProps = produce(collection, draft => {
      draft.items = draft.items.slice(0, 9);
    });
    return <TenStoriesOneAdOneWidget {...newProps} />;
  });
