import React from "react";
import { withStore } from "../../../../storybook";
import produce from "immer";

import StoryCard from "./";
import props from "./fixture.js";

withStore("Cards/StoryCard", {
  qt: {
    config: {
      "cdn-image": "thumbor-stg.assettype.com"
    }
  }
})
  .addDecorator(story => <div style={{ maxWidth: 300 }}>{story()}</div>)
  .add("Default", () => <StoryCard {...props} />)
  .add("when headline is not present", () => {
    const newProps = produce(props, draft => {
      draft.story.headline = null;
    });
    return <StoryCard {...newProps} />;
  })
  .add("when slug is not present", () => {
    const newProps = produce(props, draft => {
      draft.story.url = null;
    });
    return <StoryCard {...newProps} />;
  })
  .add("missing-author", () => {
    const newProps = produce(props, draft => {
      draft.story["authors"] = null;
    });
    return <StoryCard {...newProps} />;
  })
  .add("missing hero image", () => {
    const newProps = produce(props, draft => {
      draft.story["hero-image-s3-key"] = undefined;
    });
    return <StoryCard {...newProps} />;
  })
  .add("missing alternate image", () => {
    const newProps = produce(props, draft => {
      draft.story.alternative.home.default["hero-image"]["hero-image-s3-key"] = undefined;
    });
    return <StoryCard {...newProps} />;
  })
  .add("missing hero image, alternate image", () => {
    const newProps = produce(props, draft => {
      draft.story["hero-image-s3-key"] = null;
      draft.story.alternative.home.default["hero-image"]["hero-image-s3-key"] = null;
    });
    return <StoryCard {...newProps} />;
  })
  .add("when engagement number is not present", () => {
    const newProps = produce(props, draft => {
      draft.story["engagement"]["total"] = null;
    });
    return <StoryCard {...newProps} />;
  })
  .add("when story template is anything other than photo or video", () => {
    const newProps = produce(props, draft => {
      draft.story["story-template"] = "text";
    });
    return <StoryCard {...newProps} />;
  })
  .add("When story template is video show video icon", () => {
    const newProps = produce(props, draft => {
      draft.story["story-template"] = "video";
    });
    return <StoryCard {...newProps} />;
  });
