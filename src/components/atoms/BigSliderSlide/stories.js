import React from "react";
import { withStore } from "../../../../storybook";
import story from "./fixture";
import BigSliderSlide from "./index";
import produce from "immer";

withStore("Cards/BigSliderSlide", {
  qt: {
    config: {
      "cdn-image": "thumbor-stg.assettype.com"
    }
  }
})
  .add("default", () => <BigSliderSlide {...story} />)
  .add("missing hero image", () => {
    const newProps = produce(story, draft => {
      draft.story["hero-image-s3-key"] = undefined;
    });
    return <BigSliderSlide {...newProps} />;
  })
  .add("missing alternate image", () => {
    const newProps = produce(story, draft => {
      draft.story.alternative.home.default["hero-image"]["hero-image-s3-key"] = undefined;
    });
    return <BigSliderSlide {...newProps} />;
  })
  .add("missing hero image, alternate image", () => {
    const newProps = produce(story, draft => {
      draft.story["hero-image-s3-key"] = null;
      draft.story.alternative.home.default["hero-image"]["hero-image-s3-key"] = null;
    });
    return <BigSliderSlide {...newProps} />;
  })
  .add("missing author", () => {
    const newProps = produce(story, draft => {
      draft.story.authors = null;
    });
    return <BigSliderSlide {...newProps} />;
  })
  .add("missing sub-headline", () => {
    const newProps = produce(story, draft => {
      draft.story.subheadline = null;
    });
    return <BigSliderSlide {...newProps} />;
  })
  .add("missing alternate headline", () => {
    const newProps = produce(story, draft => {
      draft.story.alternative.home.default.headline = null;
    });
    return <BigSliderSlide {...newProps} />;
  })
  .add("missing both headline", () => {
    const newProps = produce(story, draft => {
      draft.story.alternative = null;
      draft.story.headline = null;
    });
    return <BigSliderSlide {...newProps} />;
  })
  .add("missing slug", () => {
    const newProps = produce(story, draft => {
      draft.story.url = null;
    });
    return <BigSliderSlide {...newProps} />;
  })
  .add("missing section color", () => {
    const newProps = produce(story, draft => {
      draft.story.sections = null;
    });
    return <BigSliderSlide {...newProps} />;
  })
  .add("long sub-headline", () => {
    const newProps = produce(story, draft => {
      draft.story.subheadline += " " + draft.story.subheadline;
    });
    return <BigSliderSlide {...newProps} />;
  })
  .add("long headline", () => {
    const newProps = produce(story, draft => {
      draft.story.alternative = null;
      draft.story.headline =
        "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit";
    });
    return <BigSliderSlide {...newProps} />;
  })
  .add("premium story", () => {
    const newProps = produce(story, draft => {
      draft.story.access = "subscription";
    });
    return <BigSliderSlide {...newProps} />;
  });
