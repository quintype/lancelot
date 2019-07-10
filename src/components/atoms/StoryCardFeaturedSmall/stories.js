import React from "react";
import { withStore } from "../../../../storybook";
import produce from "immer";

import StoryCardFeaturedSmall from "./";
import props from "./fixture.js";

withStore("Cards/StoryCardFeaturedSmall", {
  qt: {
    config: {
      "cdn-image": "thumbor-stg.assettype.com",
      iconSpritePath: "/sprite.svg"
    }
  }
})
  .addDecorator(story => <div style={{ maxWidth: 360 }}>{story()}</div>)
  .add("Default", () => <StoryCardFeaturedSmall {...props} />)
  .add("when headline is not present", () => {
    const newProps = produce(props, draft => {
      draft.story.headline = null;
    });
    return <StoryCardFeaturedSmall {...newProps} />;
  })
  .add("when slug is not present", () => {
    const newProps = produce(props, draft => {
      draft.story.url = null;
    });
    return <StoryCardFeaturedSmall {...newProps} />;
  })
  .add("when section color is not present", () => {
    const newProps = produce(props, draft => {
      draft.story.sections[0].color = null;
    });
    return <StoryCardFeaturedSmall {...newProps} />;
  })
  .add("when author name is not present", () => {
    const newProps = produce(props, draft => {
      draft.story["contributors"] = null;
    });
    return <StoryCardFeaturedSmall {...newProps} />;
  })
  .add("missing hero image", () => {
    const newProps = produce(props, draft => {
      draft.story["hero-image-s3-key"] = undefined;
    });
    return <StoryCardFeaturedSmall {...newProps} />;
  })
  .add("missing alternate image", () => {
    const newProps = produce(props, draft => {
      draft.story.alternative.home.default["hero-image"]["hero-image-s3-key"] = undefined;
    });
    return <StoryCardFeaturedSmall {...newProps} />;
  })
  .add("missing hero image, alternate image", () => {
    const newProps = produce(props, draft => {
      draft.story["hero-image-s3-key"] = null;
      draft.story.alternative.home.default["hero-image"]["hero-image-s3-key"] = null;
    });
    return <StoryCardFeaturedSmall {...newProps} />;
  })
  .add("should not show section if not present", () => {
    const newProps = produce(props, draft => {
      draft.story["sections"] = null;
    });
    return <StoryCardFeaturedSmall {...newProps} />;
  })
  .add("premium story", () => {
    const newProps = produce(props, draft => {
      draft.story.access = "subscription";
    });
    return <StoryCardFeaturedSmall {...newProps} />;
  });
