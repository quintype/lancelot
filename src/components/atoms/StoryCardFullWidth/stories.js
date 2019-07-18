import React from "react";
import { withStore } from "../../../../storybook";
import produce from "immer";

import StoryCardFullWidth from "./";
import props from "./fixture.js";

withStore("Cards/StoryCardFullWidth", {
  qt: {
    config: {
      "cdn-image": "thumbor-stg.assettype.com"
    }
  }
})
  .add("Default", () => <StoryCardFullWidth {...props} />)
  .add("when headline is not present", () => {
    const newProps = produce(props, draft => {
      draft.story.headline = null;
    });
    return <StoryCardFullWidth {...newProps} />;
  })
  .add("when slug is not present", () => {
    const newProps = produce(props, draft => {
      draft.story.url = null;
    });
    return <StoryCardFullWidth {...newProps} />;
  })
  .add("when author name is not present", () => {
    const newProps = produce(props, draft => {
      draft.story["authors"] = null;
    });
    return <StoryCardFullWidth {...newProps} />;
  })
  .add("missing hero image", () => {
    const newProps = produce(props, draft => {
      draft.story["hero-image-s3-key"] = undefined;
    });
    return <StoryCardFullWidth {...newProps} />;
  })
  .add("missing alternate image", () => {
    const newProps = produce(props, draft => {
      draft.story.alternative.home.default["hero-image"]["hero-image-s3-key"] = undefined;
    });
    return <StoryCardFullWidth {...newProps} />;
  })
  .add("missing hero image, alternate image", () => {
    const newProps = produce(props, draft => {
      draft.story["hero-image-s3-key"] = null;
      draft.story.alternative.home.default["hero-image"]["hero-image-s3-key"] = null;
    });
    return <StoryCardFullWidth {...newProps} />;
  })
  .add("when engagement number is not present", () => {
    const newProps = produce(props, draft => {
      draft.story["engagement"]["total"] = null;
    });
    return <StoryCardFullWidth {...newProps} />;
  })
  .add("when story template is anything other than photo or video", () => {
    const newProps = produce(props, draft => {
      draft.story["story-template"] = "text";
    });
    return <StoryCardFullWidth {...newProps} />;
  })
  .add("When story template is video show video icon", () => {
    const newProps = produce(props, draft => {
      draft.story["story-template"] = "video";
    });
    return <StoryCardFullWidth {...newProps} />;
  });
