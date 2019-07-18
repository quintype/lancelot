import React from "react";
import { withStore } from "../../../../storybook/index";
import "../../../../assets/stylesheets/app.scss";

import story from "./fixture";

import BigStoryCardAutoSlider from "./index";
import produce from "immer";

withStore("Cards/BigStoryCardAutoSlider", {
  qt: {
    config: {
      "cdn-image": "thumbor-stg.assettype.com",
      iconSpritePath: "/sprite.svg"
    }
  }
})
  .add("default", () => <BigStoryCardAutoSlider {...story} />)
  .add("missing hero image", () => {
    const newProps = produce(story, draft => {
      draft.story["hero-image-s3-key"] = undefined;
    });
    return <BigStoryCardAutoSlider {...newProps} />;
  })
  .add("missing alternate image", () => {
    const newProps = produce(story, draft => {
      draft.story.alternative.home.default["hero-image"]["hero-image-s3-key"] = undefined;
    });
    return <BigStoryCardAutoSlider {...newProps} />;
  })
  .add("missing hero image, alternate image", () => {
    const newProps = produce(story, draft => {
      draft.story["hero-image-s3-key"] = null;
      draft.story.alternative.home.default["hero-image"]["hero-image-s3-key"] = null;
    });
    return <BigStoryCardAutoSlider {...newProps} />;
  })
  .add("missing author", () => {
    const newProps = produce(story, draft => {
      draft.story.authors = null;
    });
    return <BigStoryCardAutoSlider {...newProps} />;
  })
  .add("missing sub-headline", () => {
    const newProps = produce(story, draft => {
      draft.story.subheadline = null;
    });
    return <BigStoryCardAutoSlider {...newProps} />;
  })
  .add("missing alternate headline", () => {
    const newProps = produce(story, draft => {
      draft.story.alternative.home.default.headline = null;
    });
    return <BigStoryCardAutoSlider {...newProps} />;
  })
  .add("missing both headline", () => {
    const newProps = produce(story, draft => {
      draft.story.alternative = null;
      draft.story.headline = null;
    });
    return <BigStoryCardAutoSlider {...newProps} />;
  })
  .add("missing slug", () => {
    const newProps = produce(story, draft => {
      draft.story.url = null;
    });
    return <BigStoryCardAutoSlider {...newProps} />;
  })
  .add("missing section color", () => {
    const newProps = produce(story, draft => {
      draft.story.sections = null;
    });
    return <BigStoryCardAutoSlider {...newProps} />;
  })
  .add("long sub-headline", () => {
    const newProps = produce(story, draft => {
      draft.story.subheadline += " " + draft.story.subheadline;
    });
    return <BigStoryCardAutoSlider {...newProps} />;
  })
  .add("long headline", () => {
    const newProps = produce(story, draft => {
      draft.story.alternative = null;
      draft.story.headline =
        "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit";
    });
    return <BigStoryCardAutoSlider {...newProps} />;
  })
  .add("premium story", () => {
    const newProps = produce(story, draft => {
      draft.story.access = "subscription";
    });
    return <BigStoryCardAutoSlider {...newProps} />;
  });
