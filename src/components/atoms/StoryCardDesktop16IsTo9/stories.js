import React from "react";
import { withStore } from "../../../../storybook";
import produce from "immer";

import StoryCardDesktop16IsTo9 from "./";
import props from "./fixture.js";

withStore("Cards/StoryCardDesktop16IsTo9", {
  qt: {
    config: {
      "cdn-image": "thumbor-stg.assettype.com"
    }
  }
})
  .addDecorator(story => <div style={{ maxWidth: 300 }}>{story()}</div>)
  .add("Default", () => <StoryCardDesktop16IsTo9 {...props} />)
  .add("when headline is not present", () => {
    const newProps = produce(props, draft => {
      draft.story.headline = null;
    });
    return <StoryCardDesktop16IsTo9 {...newProps} />;
  })
  .add("when slug is not present", () => {
    const newProps = produce(props, draft => {
      draft.story.url = null;
    });
    return <StoryCardDesktop16IsTo9 {...newProps} />;
  })
  .add("missing-author", () => {
    const newProps = produce(props, draft => {
      draft.story["authors"] = null;
    });
    return <StoryCardDesktop16IsTo9 {...newProps} />;
  })
  .add("missing hero image", () => {
    const newProps = produce(props, draft => {
      draft.story["hero-image-s3-key"] = undefined;
    });
    return <StoryCardDesktop16IsTo9 {...newProps} />;
  })
  .add("missing alternate image", () => {
    const newProps = produce(props, draft => {
      draft.story.alternative.home.default["hero-image"]["hero-image-s3-key"] = undefined;
    });
    return <StoryCardDesktop16IsTo9 {...newProps} />;
  })
  .add("missing hero image, alternate image", () => {
    const newProps = produce(props, draft => {
      draft.story["hero-image-s3-key"] = null;
      draft.story.alternative.home.default["hero-image"]["hero-image-s3-key"] = null;
    });
    return <StoryCardDesktop16IsTo9 {...newProps} />;
  });
