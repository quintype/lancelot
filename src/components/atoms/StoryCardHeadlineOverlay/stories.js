import React from "react";
import { withStore } from "../../../../storybook";
import "../../../../assets/stylesheets/app.scss";

import StoryCardHeadlineOverlay from "./index";
import produce from "immer";

import story from "./fixture";

withStore("Cards/StoryCardHeadlineOverlay", {
  qt: {
    config: {
      "cdn-image": "thumbor-stg.assettype.com",
      iconSpritePath: "/sprite.svg"
    }
  }
})
  .addDecorator(story => <div style={{ maxWidth: "360px" }}>{story()}</div>)
  .add("default", () => <StoryCardHeadlineOverlay {...story} />)
  .add("missing-author", () => {
    const newProps = produce(story, draft => {
      draft.story["authors"] = null;
    });
    return <StoryCardHeadlineOverlay {...newProps} />;
  })
  .add("missing hero image", () => {
    const newProps = produce(story, draft => {
      draft.story["hero-image-s3-key"] = undefined;
    });
    return <StoryCardHeadlineOverlay {...newProps} />;
  })
  .add("missing alternate image", () => {
    const newProps = produce(story, draft => {
      draft.story.alternative.home.default["hero-image"]["hero-image-s3-key"] = undefined;
    });
    return <StoryCardHeadlineOverlay {...newProps} />;
  })
  .add("missing hero image, alternate image", () => {
    const newProps = produce(story, draft => {
      draft.story["hero-image-s3-key"] = null;
      draft.story.alternative.home.default["hero-image"]["hero-image-s3-key"] = null;
    });
    return <StoryCardHeadlineOverlay {...newProps} />;
  })
  .add("missing alternate headline", () => {
    const newProps = produce(story, draft => {
      draft.story.alternative = null;
    });
    return <StoryCardHeadlineOverlay {...newProps} />;
  })
  .add("missing-headline", () => {
    const newProps = produce(story, draft => {
      draft.story.headline = null;
    });
    return <StoryCardHeadlineOverlay {...newProps} />;
  })
  .add("missing both headline and alternate headline", () => {
    const newProps = produce(story, draft => {
      draft.story.alternative = null;
      draft.story.headline = null;
    });
    return <StoryCardHeadlineOverlay {...newProps} />;
  })
  .add("missing-slug", () => {
    const newProps = produce(story, draft => {
      draft.story.url = null;
    });
    return <StoryCardHeadlineOverlay {...newProps} />;
  })
  .add("long headline", () => {
    const newProps = produce(story, draft => {
      draft.story.alternative = null;
      draft.story.headline = draft.story.headline + " " + draft.story.headline;
    });
    return <StoryCardHeadlineOverlay {...newProps} />;
  })
  .add("premium story", () => {
    const newProps = produce(story, draft => {
      draft.story.access = "subscription";
    });
    return <StoryCardHeadlineOverlay {...newProps} />;
  });
