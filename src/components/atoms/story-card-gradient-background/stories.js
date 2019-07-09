import React from "react";
import { withStore } from "../../../../storybook";
import produce from "immer";

import StoryCardGradientBackground from "./";
import props from "./fixture.js";

withStore("Cards/StoryCardGradientBackground", {
  qt: {
    config: {
      "cdn-image": "thumbor-stg.assettype.com",
      iconSpritePath: "/sprite.svg"
    }
  }
})
  .addDecorator(story => <div style={{ maxWidth: 300 }}>{story()}</div>)
  .add("Default", () => <StoryCardGradientBackground {...props} />)
  .add("when headline is not present", () => {
    const newProps = produce(props, draft => {
      draft.story.headline = null;
    });
    return <StoryCardGradientBackground {...newProps} />;
  })
  .add("when slug is not present", () => {
    const newProps = produce(props, draft => {
      draft.story.url = null;
    });
    return <StoryCardGradientBackground {...newProps} />;
  })
  .add("when missing-author dont show", () => {
    const newProps = produce(props, draft => {
      draft.story["authors"] = null;
    });
    return <StoryCardGradientBackground {...newProps} />;
  })
  .add("when background color is present", () => {
    const newProps = produce(props, draft => {
      draft.story["section-color"] = "#842121";
    });
    return <StoryCardGradientBackground {...newProps} />;
  })
  .add("missing hero image", () => {
    const newProps = produce(props, draft => {
      draft.story["hero-image-s3-key"] = undefined;
    });
    return <StoryCardGradientBackground {...newProps} />;
  })
  .add("missing alternate image", () => {
    const newProps = produce(props, draft => {
      draft.story.alternative.home.default["hero-image"]["hero-image-s3-key"] = undefined;
    });
    return <StoryCardGradientBackground {...newProps} />;
  })
  .add("missing hero image, alternate image", () => {
    const newProps = produce(props, draft => {
      draft.story["hero-image-s3-key"] = null;
      draft.story.alternative.home.default["hero-image"]["hero-image-s3-key"] = null;
    });
    return <StoryCardGradientBackground {...newProps} />;
  })
  .add("premium story", () => {
    const newProps = produce(props, draft => {
      draft.story.access = "subscription";
    });
    return <StoryCardGradientBackground {...newProps} />;
  });
