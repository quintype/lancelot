import React from "react";
import { withStore } from "../../../../storybook";

import SmallStoryCard from "./index";
import produce from "immer";

import story from "./fixture";

withStore("Cards/SmallStoryCard", {
  qt: {
    config: {
      "cdn-image": "thumbor-stg.assettype.com",
      iconSpritePath: "/sprite.svg"
    }
  }
})
  .addDecorator(story => <div style={{ maxWidth: "360px" }}>{story()}</div>)
  .add("default", () => <SmallStoryCard {...story} />)
  .add("missing-author", () => {
    const newProps = produce(story, draft => {
      draft.story["authors"] = null;
    });
    return <SmallStoryCard {...newProps} />;
  })
  .add("missing hero image", () => {
    const newProps = produce(story, draft => {
      draft.story["hero-image-s3-key"] = undefined;
    });
    return <SmallStoryCard {...newProps} />;
  })
  .add("missing alternate image", () => {
    const newProps = produce(story, draft => {
      draft.story.alternative.home.default["hero-image"]["hero-image-s3-key"] = undefined;
    });
    return <SmallStoryCard {...newProps} />;
  })
  .add("missing hero image, alternate image", () => {
    const newProps = produce(story, draft => {
      draft.story["hero-image-s3-key"] = null;
      draft.story.alternative.home.default["hero-image"]["hero-image-s3-key"] = null;
    });
    return <SmallStoryCard {...newProps} />;
  })
  .add("missing alternate headline", () => {
    const newProps = produce(story, draft => {
      draft.story.alternative = null;
    });
    return <SmallStoryCard {...newProps} />;
  })
  .add("missing-headline", () => {
    const newProps = produce(story, draft => {
      draft.story.headline = null;
    });
    return <SmallStoryCard {...newProps} />;
  })
  .add("missing both headline and alternate headline", () => {
    const newProps = produce(story, draft => {
      draft.story.alternative = null;
      draft.story.headline = null;
    });
    return <SmallStoryCard {...newProps} />;
  })
  .add("missing-slug", () => {
    const newProps = produce(story, draft => {
      draft.story.url = null;
    });
    return <SmallStoryCard {...newProps} />;
  })
  .add("long headline", () => {
    const newProps = produce(story, draft => {
      draft.story.alternative = null;
      draft.story.headline = draft.story.headline + " " + draft.story.headline;
    });
    return <SmallStoryCard {...newProps} />;
  })
  .add("premium story", () => {
    const newProps = produce(story, draft => {
      draft.story.access = "subscription";
    });
    return <SmallStoryCard {...newProps} />;
  });
