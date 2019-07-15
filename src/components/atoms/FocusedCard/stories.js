import React from "react";
import { withStore } from "../../../../storybook/index";
import produce from "immer";
import "../../../../assets/stylesheets/app.scss";

import FocusedCard from "./index";

import item from "./fixture";

withStore("Cards/FocusedCard", {
  qt: {
    config: {
      "cdn-image": "thumbor-stg.assettype.com",
      iconSpritePath: "/sprite.svg"
    }
  }
})
  .addDecorator(story => <div style={{ width: "360px" }}>{story()}</div>)
  .add("default", () => <FocusedCard {...item} />)
  .add("missing-author", () => {
    const newProps = produce(item, draft => {
      draft.story["authors"] = null;
    });
    return <FocusedCard {...newProps} />;
  })
  .add("missing hero image", () => {
    const newProps = produce(item, draft => {
      draft.story["hero-image-s3-key"] = null;
    });
    return <FocusedCard {...newProps} />;
  })
  .add("missing alt image", () => {
    const newProps = produce(item, draft => {
      draft.story.alternative.home.default["hero-image"]["hero-image-s3-key"] = undefined;
    });
    return <FocusedCard {...newProps} />;
  })
  .add("missing hero image and alt image", () => {
    const newProps = produce(item, draft => {
      draft.story["hero-image-s3-key"] = null;
      draft.story.alternative.home.default["hero-image"]["hero-image-s3-key"] = null;
    });
    return <FocusedCard {...newProps} />;
  })
  .add("missing headline", () => {
    const newProps = produce(item, draft => {
      draft.story.headline = null;
    });
    return <FocusedCard {...newProps} />;
  })
  .add("missing alternate headline", () => {
    const newProps = produce(item, draft => {
      draft.story.alternative = null;
    });
    return <FocusedCard {...newProps} />;
  })
  .add("missing both headline and alternate headline", () => {
    const newProps = produce(item, draft => {
      draft.story.alternative = null;
      draft.story.headline = null;
    });
    return <FocusedCard {...newProps} />;
  })
  .add("missing-slug", () => {
    const newProps = produce(item, draft => {
      draft.story.url = null;
    });
    return <FocusedCard {...newProps} />;
  })
  .add("long headline", () => {
    const newProps = produce(item, draft => {
      draft.story.alternative = null;
      draft.story.headline =
        "கமலே கவலைப்படும் அளவுக்கு இருக்கிறதா கமலே கவலைப்படும் அளவுக்கு இருக்கிறதா கமலே கவலைப்படும் அளவுக்கு இருக்கிறதா";
    });
    return <FocusedCard {...newProps} />;
  })
  .add("premium story", () => {
    const newProps = produce(item, draft => {
      draft.story.access = "subscription";
    });
    return <FocusedCard {...newProps} />;
  });
