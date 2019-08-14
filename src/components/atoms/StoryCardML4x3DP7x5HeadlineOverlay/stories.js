import React from "react";
import { withStore } from "../../../../storybook";

import StoryCardML4x3DP7x5HeadlineOverlay from "./index";
import produce from "immer";

import story from "./fixture";

withStore("Cards/StoryCardML4x3DP7x5HeadlineOverlay", {
  qt: {
    config: {
      "cdn-image": "thumbor-stg.assettype.com"
    }
  }
})
  .addDecorator(story => <div style={{ maxWidth: "360px" }}>{story()}</div>)
  .add("default", () => <StoryCardML4x3DP7x5HeadlineOverlay {...story} />)
  .add("missing-author", () => {
    const newProps = produce(story, draft => {
      draft.story["authors"] = null;
    });
    return <StoryCardML4x3DP7x5HeadlineOverlay {...newProps} />;
  })
  .add("missing hero image", () => {
    const newProps = produce(story, draft => {
      draft.story["hero-image-s3-key"] = undefined;
    });
    return <StoryCardML4x3DP7x5HeadlineOverlay {...newProps} />;
  })
  .add("missing alternate image", () => {
    const newProps = produce(story, draft => {
      draft.story.alternative.home.default["hero-image"]["hero-image-s3-key"] = undefined;
    });
    return <StoryCardML4x3DP7x5HeadlineOverlay {...newProps} />;
  })
  .add("missing hero image, alternate image", () => {
    const newProps = produce(story, draft => {
      draft.story["hero-image-s3-key"] = null;
      draft.story.alternative.home.default["hero-image"]["hero-image-s3-key"] = null;
    });
    return <StoryCardML4x3DP7x5HeadlineOverlay {...newProps} />;
  })
  .add("missing alternate headline", () => {
    const newProps = produce(story, draft => {
      draft.story.alternative = null;
    });
    return <StoryCardML4x3DP7x5HeadlineOverlay {...newProps} />;
  })
  .add("missing-headline", () => {
    const newProps = produce(story, draft => {
      draft.story.headline = null;
    });
    return <StoryCardML4x3DP7x5HeadlineOverlay {...newProps} />;
  })
  .add("missing both headline and alternate headline", () => {
    const newProps = produce(story, draft => {
      draft.story.alternative = null;
      draft.story.headline = null;
    });
    return <StoryCardML4x3DP7x5HeadlineOverlay {...newProps} />;
  })
  .add("missing-slug", () => {
    const newProps = produce(story, draft => {
      draft.story.url = null;
    });
    return <StoryCardML4x3DP7x5HeadlineOverlay {...newProps} />;
  })
  .add("long headline", () => {
    const newProps = produce(story, draft => {
      draft.story.alternative = null;
      draft.story.headline = draft.story.headline + " " + draft.story.headline;
    });
    return <StoryCardML4x3DP7x5HeadlineOverlay {...newProps} />;
  })
  .add("premium story", () => {
    const newProps = produce(story, draft => {
      draft.story.access = "subscription";
    });
    return <StoryCardML4x3DP7x5HeadlineOverlay {...newProps} />;
  });
