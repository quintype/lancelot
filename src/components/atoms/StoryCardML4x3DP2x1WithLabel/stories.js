import React from "react";
import { withStore } from "../../../../storybook";

import { StoryCardML4x3DP2x1WithLabel } from "./index";
import produce, { setAutoFreeze } from "immer";

import story from "./fixture";

setAutoFreeze(false);

withStore("Cards/StoryCardML4x3DP2x1WithLabel", {
  qt: {
    config: {
      "cdn-image": "thumbor-stg.assettype.com",
      iconSpritePath: "/sprite.svg"
    }
  }
})
  .addDecorator(story => (
    <div style={{ maxWidth: "360px", backgroundColor: "aliceblue", padding: "10px" }}>{story()}</div>
  ))
  .add("default", () => <StoryCardML4x3DP2x1WithLabel {...story} />)
  .add("missing-label", () => {
    const newProps = produce(story, draft => {
      draft.story["label"] = null;
    });
    return <StoryCardML4x3DP2x1WithLabel {...newProps} />;
  })
  .add("missing-author", () => {
    const newProps = produce(story, draft => {
      draft.story["authors"] = null;
    });
    return <StoryCardML4x3DP2x1WithLabel {...newProps} />;
  })
  .add("missing hero image", () => {
    const newProps = produce(story, draft => {
      draft.story["hero-image-s3-key"] = undefined;
    });
    return <StoryCardML4x3DP2x1WithLabel {...newProps} />;
  })
  .add("missing alternate image", () => {
    const newProps = produce(story, draft => {
      draft.story.alternative.home.default["hero-image"]["hero-image-s3-key"] = undefined;
    });
    return <StoryCardML4x3DP2x1WithLabel {...newProps} />;
  })
  .add("missing hero image, alternate image", () => {
    const newProps = produce(story, draft => {
      draft.story["hero-image-s3-key"] = null;
      draft.story.alternative.home.default["hero-image"]["hero-image-s3-key"] = null;
    });
    return <StoryCardML4x3DP2x1WithLabel {...newProps} />;
  })
  .add("missing alternate headline", () => {
    const newProps = produce(story, draft => {
      draft.story.alternative = null;
    });
    return <StoryCardML4x3DP2x1WithLabel {...newProps} />;
  })
  .add("missing-headline", () => {
    const newProps = produce(story, draft => {
      draft.story.headline = null;
    });
    return <StoryCardML4x3DP2x1WithLabel {...newProps} />;
  })
  .add("missing both headline and alternate headline", () => {
    const newProps = produce(story, draft => {
      draft.story.alternative = null;
      draft.story.headline = null;
    });
    return <StoryCardML4x3DP2x1WithLabel {...newProps} />;
  })
  .add("missing-slug", () => {
    const newProps = produce(story, draft => {
      draft.story.url = null;
    });
    return <StoryCardML4x3DP2x1WithLabel {...newProps} />;
  })
  .add("long headline", () => {
    const newProps = produce(story, draft => {
      draft.story.alternative = null;
      draft.story.headline = draft.story.headline + " " + draft.story.headline;
    });
    return <StoryCardML4x3DP2x1WithLabel {...newProps} />;
  })
  .add("premium story", () => {
    const newProps = produce(story, draft => {
      draft.story.access = "subscription";
    });
    return <StoryCardML4x3DP2x1WithLabel {...newProps} />;
  });
