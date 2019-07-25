import React from "react";
import { withStore } from "../../../../storybook";
import produce from "immer";

import StoryCardML3x2DP9x5 from ".";
import story from "./fixture.js";

withStore("Cards/StoryCardML3x2DP9x5", {
  qt: {
    config: {
      "cdn-image": "thumbor-stg.assettype.com"
    }
  }
})
  .addDecorator(story => <div style={{ maxWidth: "460px" }}>{story()}</div>)
  .add("Default", () => <StoryCardML3x2DP9x5 {...story} />)
  .add("missing hero image", () => {
    const newProps = produce(story, draft => {
      draft.story["hero-image-s3-key"] = undefined;
    });
    return <StoryCardML3x2DP9x5 {...newProps} />;
  })
  .add("missing alternate image", () => {
    const newProps = produce(story, draft => {
      draft.story.alternative.home.default["hero-image"]["hero-image-s3-key"] = undefined;
    });
    return <StoryCardML3x2DP9x5 {...newProps} />;
  })
  .add("missing hero image, alternate image", () => {
    const newProps = produce(story, draft => {
      draft.story["hero-image-s3-key"] = null;
      draft.story.alternative.home.default["hero-image"]["hero-image-s3-key"] = null;
    });
    return <StoryCardML3x2DP9x5 {...newProps} />;
  })
  .add("missing author", () => {
    const newProps = produce(story, draft => {
      draft.story.authors = null;
    });
    return <StoryCardML3x2DP9x5 {...newProps} />;
  })
  .add("missing sub-headline", () => {
    const newProps = produce(story, draft => {
      draft.story.subheadline = null;
    });
    return <StoryCardML3x2DP9x5 {...newProps} />;
  })
  .add("missing alternate headline", () => {
    const newProps = produce(story, draft => {
      draft.story.alternative.home.default.headline = null;
    });
    return <StoryCardML3x2DP9x5 {...newProps} />;
  })
  .add("missing both headline", () => {
    const newProps = produce(story, draft => {
      draft.story.alternative = null;
      draft.story.headline = null;
    });
    return <StoryCardML3x2DP9x5 {...newProps} />;
  })
  .add("missing slug", () => {
    const newProps = produce(story, draft => {
      draft.story.url = null;
    });
    return <StoryCardML3x2DP9x5 {...newProps} />;
  })
  .add("missing section color", () => {
    const newProps = produce(story, draft => {
      draft.story.sections = null;
    });
    return <StoryCardML3x2DP9x5 {...newProps} />;
  })
  .add("long sub-headline", () => {
    const newProps = produce(story, draft => {
      draft.story.subheadline += " " + draft.subheadline;
    });
    return <StoryCardML3x2DP9x5 {...newProps} />;
  })
  .add("long headline", () => {
    const newProps = produce(story, draft => {
      draft.story.alternative = null;
      draft.story.headline =
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua";
    });
    return <StoryCardML3x2DP9x5 {...newProps} />;
  })
  .add("premium story", () => {
    const newProps = produce(story, draft => {
      draft.story.access = "subscription";
    });
    return <StoryCardML3x2DP9x5 {...newProps} />;
  });
