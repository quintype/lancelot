import React from "react";
import { withStore } from "../../../../storybook";
import produce from "immer";

import StoryCardML5x4DP4x3 from "./index";
import story from "./fixture.js";

withStore("Cards/StoryCardML5x4DP4x3", {
  qt: {
    config: {
      "cdn-image": "thumbor-stg.assettype.com",
      iconSpritePath: "/sprite.svg"
    }
  }
})
  .addDecorator(story => <div style={{ maxWidth: "460px" }}>{story()}</div>)
  .add("Default", () => <StoryCardML5x4DP4x3 {...story} />)
  .add("missing hero image", () => {
    const newProps = produce(story, draft => {
      draft.story["hero-image-s3-key"] = undefined;
    });
    return <StoryCardML5x4DP4x3 {...newProps} />;
  })
  .add("missing alternate image", () => {
    const newProps = produce(story, draft => {
      draft.story.alternative.home.default["hero-image"]["hero-image-s3-key"] = undefined;
    });
    return <StoryCardML5x4DP4x3 {...newProps} />;
  })
  .add("missing hero image, alternate image", () => {
    const newProps = produce(story, draft => {
      draft.story["hero-image-s3-key"] = null;
      draft.story.alternative.home.default["hero-image"]["hero-image-s3-key"] = null;
    });
    return <StoryCardML5x4DP4x3 {...newProps} />;
  })
  .add("missing author", () => {
    const newProps = produce(story, draft => {
      draft.story.authors = null;
    });
    return <StoryCardML5x4DP4x3 {...newProps} />;
  })
  .add("missing sub-headline", () => {
    const newProps = produce(story, draft => {
      draft.story.subheadline = null;
    });
    return <StoryCardML5x4DP4x3 {...newProps} />;
  })
  .add("missing alternate headline", () => {
    const newProps = produce(story, draft => {
      draft.story.alternative.home.default.headline = null;
    });
    return <StoryCardML5x4DP4x3 {...newProps} />;
  })
  .add("missing both headline", () => {
    const newProps = produce(story, draft => {
      draft.story.alternative = null;
      draft.story.headline = null;
    });
    return <StoryCardML5x4DP4x3 {...newProps} />;
  })
  .add("missing slug", () => {
    const newProps = produce(story, draft => {
      draft.story.url = null;
    });
    return <StoryCardML5x4DP4x3 {...newProps} />;
  })
  .add("missing section color", () => {
    const newProps = produce(story, draft => {
      draft.story.sections = null;
    });
    return <StoryCardML5x4DP4x3 {...newProps} />;
  })
  .add("long sub-headline", () => {
    const newProps = produce(story, draft => {
      draft.story.subheadline += " " + draft.subheadline;
    });
    return <StoryCardML5x4DP4x3 {...newProps} />;
  })
  .add("long headline", () => {
    const newProps = produce(story, draft => {
      draft.story.alternative = null;
      draft.story.headline = "போன்ற திரைப்படங்களுக்கு ஒளிப்பதிவு செய்ததன் மூலம் தமிழ் சினிமாவில் கவித்துவமான";
    });
    return <StoryCardML5x4DP4x3 {...newProps} />;
  })
  .add("premium story", () => {
    const newProps = produce(story, draft => {
      draft.story.access = "subscription";
    });
    return <StoryCardML5x4DP4x3 {...newProps} />;
  });
