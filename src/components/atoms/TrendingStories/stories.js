import React from "react";
import { withStore } from "../../../../storybook";
import produce from "immer";

import TrendingStories from "./";
import props from "./fixture.js";

withStore("Components/TrendingStories", {
  qt: {
    config: {
      "cdn-image": "thumbor-stg.assettype.com"
    }
  }
})
  .addDecorator(story => <div style={{ maxWidth: 360, border: `1px solid #ccc` }}>{story()}</div>)
  .add("Default", () => <TrendingStories collection={props} />)
  .add("when collection title or slug is not present hide heading", () => {
    const newProps = produce(props, draft => {
      draft.name = null;
      draft.slug = null;
    });
    return <TrendingStories collection={newProps} />;
  })
  .add("when story headline not present hide story", () => {
    const newProps = produce(props, draft => {
      draft.items[0].headline = null;
    });
    return <TrendingStories collection={newProps} />;
  })
  .add("when story slug is not present hide story", () => {
    const newProps = produce(props, draft => {
      draft.items[0].slug = null;
    });
    return <TrendingStories collection={newProps} />;
  })
  .add("when number of stories passed to component is more than 4", () => {
    const newProps = produce(props, draft => {
      draft.items.push(draft.items[0]);
    });
    return <TrendingStories collection={newProps} />;
  })
  .add("when number of stories passed to component is less than 4", () => {
    const newProps = produce(props, draft => {
      draft.items.pop();
    });
    return <TrendingStories collection={newProps} />;
  })
  .add("when number of stories passed to component is more than 5", () => {
    const newProps = produce(props, draft => {
      draft.items.push(draft.items[0], draft.items[1], draft.items[0]);
    });
    return <TrendingStories numberOfStories={7} collection={newProps} />;
  });
