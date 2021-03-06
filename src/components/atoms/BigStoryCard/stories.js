import React from "react";
import { withStore } from "../../../../storybook";
import produce from "immer";

import BigStoryCard from "./index";

import story from "./fixture";

withStore("Cards/BigStoryCard", {
  qt: {
    config: {
      "cdn-image": "thumbor-stg.assettype.com"
    }
  }
})
  .addDecorator(story => <div style={{ maxWidth: "360px" }}>{story()}</div>)
  .add("default", () => <BigStoryCard {...story} />)
  .add("missing-author", () => {
    const newProps = produce(story, draft => {
      draft.story["authors"] = null;
    });
    return <BigStoryCard {...newProps} />;
  })
  .add("missing hero image", () => {
    const newProps = produce(story, draft => {
      draft.story["hero-image-s3-key"] = null;
    });
    return <BigStoryCard {...newProps} />;
  })
  .add("missing alt image", () => {
    const newProps = produce(story, draft => {
      draft.story.alternative.home.default["hero-image"]["hero-image-s3-key"] = undefined;
    });
    return <BigStoryCard {...newProps} />;
  })
  .add("missing hero image and alt image", () => {
    const newProps = produce(story, draft => {
      draft.story["hero-image-s3-key"] = null;
      draft.story.alternative.home.default["hero-image"]["hero-image-s3-key"] = null;
    });
    return <BigStoryCard {...newProps} />;
  })
  .add("missing headline", () => {
    const newProps = produce(story, draft => {
      draft.story.headline = null;
    });
    return <BigStoryCard {...newProps} />;
  })
  .add("missing alternate headline", () => {
    const newProps = produce(story, draft => {
      draft.story.alternative = null;
    });
    return <BigStoryCard {...newProps} />;
  })
  .add("missing both headline and alternate headline", () => {
    const newProps = produce(story, draft => {
      draft.story.alternative = null;
      draft.story.headline = null;
    });
    return <BigStoryCard {...newProps} />;
  })
  .add("missing-slug", () => {
    const newProps = produce(story, draft => {
      draft.story.url = null;
    });
    return <BigStoryCard {...newProps} />;
  })
  .add("long headline", () => {
    const newProps = produce(story, draft => {
      draft.story.alternative = null;
      draft.story.headline = "Lorem Ipsum is simply dummy text of the printing and typesetting industry";
    });
    return <BigStoryCard {...newProps} />;
  })
  .add("premium story", () => {
    const newProps = produce(story, draft => {
      draft.story.access = "subscription";
    });
    return <BigStoryCard {...newProps} />;
  });
