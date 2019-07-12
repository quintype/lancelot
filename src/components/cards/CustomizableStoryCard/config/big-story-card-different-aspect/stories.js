import React from "react";
import produce from "immer";

import { withStore } from "../../../../../../storybook";

import "../../../../../../assets/stylesheets/app.scss";
import CustomizableStoryCard from "../../";

import fixture from "../../fixture";
import config from "./";

const story = { story: fixture.story };

withStore("CustomizableStoryCard/BigStoryCardDifferentAspect", {
  qt: {
    config: {
      "cdn-image": "thumbor-stg.assettype.com",
      iconSpritePath: "/sprite.svg"
    }
  }
})
  .addDecorator(story => (
    <div style={{ maxWidth: "360px", width: "100%", "--border-color": "var(--accent-color)" }}>{story()}</div>
  ))
  .add("default", () => <CustomizableStoryCard mobile={config.mobile} desktop={config.desktop} {...story} />)
  .add("premium story", () => {
    const newProps = produce(story, draft => {
      draft.story.access = "subscription";
    });
    return <CustomizableStoryCard mobile={config.mobile} desktop={config.desktop} {...newProps} />;
  })
  .add("missing hero image", () => {
    const newProps = produce(story, draft => {
      draft.story["hero-image-s3-key"] = undefined;
    });
    return <CustomizableStoryCard mobile={config.mobile} desktop={config.desktop} {...newProps} />;
  })
  .add("missing alternate image", () => {
    const newProps = produce(story, draft => {
      draft.story.alternative.home.default["hero-image"] = undefined;
    });
    return <CustomizableStoryCard mobile={config.mobile} desktop={config.desktop} {...newProps} />;
  })
  .add("missing hero image, alternate image", () => {
    const newProps = produce(story, draft => {
      draft.story["hero-image-s3-key"] = null;
      draft.story.alternative.home.default["hero-image"] = null;
    });
    return <CustomizableStoryCard mobile={config.mobile} desktop={config.desktop} {...newProps} />;
  })
  .add("missing headline", () => {
    const newProps = produce(story, draft => {
      draft.story.headline = null;
    });
    return <CustomizableStoryCard mobile={config.mobile} desktop={config.desktop} {...newProps} />;
  })
  .add("missing alternate headline", () => {
    const newProps = produce(story, draft => {
      draft.story.alternative = null;
    });
    return <CustomizableStoryCard mobile={config.mobile} desktop={config.desktop} {...newProps} />;
  })
  .add("missing both headline and alternate headline", () => {
    const newProps = produce(story, draft => {
      draft.story.alternative = null;
      draft.story.headline = null;
    });
    return <CustomizableStoryCard mobile={config.mobile} desktop={config.desktop} {...newProps} />;
  })
  .add("missing-slug", () => {
    const newProps = produce(story, draft => {
      draft.story.url = null;
    });
    return <CustomizableStoryCard mobile={config.mobile} desktop={config.desktop} {...newProps} />;
  })
  .add("long headline", () => {
    const newProps = produce(story, draft => {
      draft.story.alternative = null;
      draft.story.headline =
        "கமலே கவலைப்படும் அளவுக்கு இருக்கிறதா கமலே கவலைப்படும் அளவுக்கு இருக்கிறதா கமலே கவலைப்படும் அளவுக்கு இருக்கிறதா";
    });
    return <CustomizableStoryCard mobile={config.mobile} desktop={config.desktop} {...newProps} />;
  });
