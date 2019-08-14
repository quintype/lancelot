import React from "react";
import produce from "immer";
import props from "./fixture.js";

import StoryCardFeaturedBigHalfImg from "./";
import { withStore } from "../../../../storybook";

withStore("Cards/StoryCardFeaturedBigHalfImg", {
  qt: {
    config: {
      "cdn-image": "thumbor-stg.assettype.com"
    }
  }
})
  .addDecorator(story => <div style={{ maxWidth: "700px" }}>{story()}</div>)
  .add("Default", () => <StoryCardFeaturedBigHalfImg {...props} />)
  .add("when headline is not present", () => {
    const newProps = produce(props, draft => {
      draft.story.headline = null;
    });
    return <StoryCardFeaturedBigHalfImg {...newProps} />;
  })
  .add("when slug is not present", () => {
    const newProps = produce(props, draft => {
      draft.story.url = null;
    });
    return <StoryCardFeaturedBigHalfImg {...newProps} />;
  })
  .add("when author name is not present", () => {
    const newProps = produce(props, draft => {
      draft.story["authors"] = null;
    });
    return <StoryCardFeaturedBigHalfImg {...newProps} />;
  })
  .add("when section color is not present", () => {
    const newProps = produce(props, draft => {
      draft.story.sections[0].color = null;
    });
    return <StoryCardFeaturedBigHalfImg {...newProps} />;
  })
  .add("missing hero image", () => {
    const newProps = produce(props, draft => {
      draft.story["hero-image-s3-key"] = undefined;
    });
    return <StoryCardFeaturedBigHalfImg {...newProps} />;
  })
  .add("missing alternate image", () => {
    const newProps = produce(props, draft => {
      draft.story.alternative.home.default["hero-image"]["hero-image-s3-key"] = undefined;
    });
    return <StoryCardFeaturedBigHalfImg {...newProps} />;
  })
  .add("missing hero image, alternate image", () => {
    const newProps = produce(props, draft => {
      draft.story["hero-image-s3-key"] = null;
      draft.story.alternative.home.default["hero-image"]["hero-image-s3-key"] = null;
    });
    return <StoryCardFeaturedBigHalfImg {...newProps} />;
  })
  .add("should not show section if not present", () => {
    const newProps = produce(props, draft => {
      draft.story["sections"] = null;
    });
    return <StoryCardFeaturedBigHalfImg {...newProps} />;
  })
  .add("premium story", () => {
    const newProps = produce(props, draft => {
      draft.story.access = "subscription";
    });
    return <StoryCardFeaturedBigHalfImg {...newProps} />;
  });
