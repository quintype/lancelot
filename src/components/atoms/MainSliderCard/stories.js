import React from "react";
import { withStore } from "../../../../storybook";
import produce from "immer";
import MainSliderCard from "./";
import props from "./fixture.js";

withStore("Cards/MainSliderCard", {
  qt: {
    config: {
      "cdn-image": "thumbor-stg.assettype.com"
    }
  }
})
  .addDecorator(story => <div style={{ maxWidth: "460px" }}>{story()}</div>)
  .add("Default", () => <MainSliderCard {...props} />)
  .add("when headline is not present", () => {
    const newProps = produce(props, draft => {
      draft.story.headline = null;
    });
    return <MainSliderCard {...newProps} />;
  })
  .add("when url is not present", () => {
    const newProps = produce(props, draft => {
      draft.story.url = null;
    });
    return <MainSliderCard {...newProps} />;
  })
  .add("when author name is not present", () => {
    const newProps = produce(props, draft => {
      draft.story["contributors"] = null;
    });
    return <MainSliderCard {...newProps} />;
  })
  .add("missing hero image", () => {
    const newProps = produce(props, draft => {
      draft.story["hero-image-s3-key"] = undefined;
    });
    return <MainSliderCard {...newProps} />;
  })
  .add("missing alternate image", () => {
    const newProps = produce(props, draft => {
      draft.story.alternative.home.default["hero-image"]["hero-image-s3-key"] = undefined;
    });
    return <MainSliderCard {...newProps} />;
  })
  .add("missing hero image, alternate image", () => {
    const newProps = produce(props, draft => {
      draft.story["hero-image-s3-key"] = null;
      draft.story.alternative.home.default["hero-image"]["hero-image-s3-key"] = null;
    });
    return <MainSliderCard {...newProps} />;
  })
  .add("when engagement total number is not present", () => {
    const newProps = produce(props, draft => {
      draft.story["engagement"]["total"] = null;
    });
    return <MainSliderCard {...newProps} />;
  })
  .add("when engagement comments number is not present", () => {
    const newProps = produce(props, draft => {
      draft.story["engagement"]["comments"] = null;
    });
    return <MainSliderCard {...newProps} />;
  })
  .add("when engagement shares number is not present", () => {
    const newProps = produce(props, draft => {
      draft.story["engagement"]["shares"] = null;
    });
    return <MainSliderCard {...newProps} />;
  })
  .add("premium story", () => {
    const newProps = produce(props, draft => {
      draft.story.access = "subscription";
    });
    return <MainSliderCard {...newProps} />;
  });
