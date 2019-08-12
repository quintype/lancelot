import React from "react";
import { withStore } from "../../../../storybook";
import produce from "immer";

import SmallStoryCardDesktopBig from "./index";

import story from "./fixture";

withStore("Cards/SmallStoryCardDesktopBig", {
  qt: {
    config: {
      "cdn-image": "thumbor-stg.assettype.com",
      iconSpritePath: "/sprite.svg"
    }
  }
})
  .addDecorator(story => <div style={{ maxWidth: "360px" }}>{story()}</div>)
  .add("default", () => <SmallStoryCardDesktopBig {...story} />)
  .add("missing-author", () => {
    const newProps = produce(story, draft => {
      draft.story["authors"] = null;
    });
    return <SmallStoryCardDesktopBig {...newProps} />;
  })
  .add("missing hero image", () => {
    const newProps = produce(story, draft => {
      draft.story["hero-image-s3-key"] = undefined;
    });
    return <SmallStoryCardDesktopBig {...newProps} />;
  })
  .add("missing alternate image", () => {
    const newProps = produce(story, draft => {
      draft.story.alternative.home.default["hero-image"]["hero-image-s3-key"] = undefined;
    });
    return <SmallStoryCardDesktopBig {...newProps} />;
  })
  .add("missing hero image, alternate image", () => {
    const newProps = produce(story, draft => {
      draft.story["hero-image-s3-key"] = null;
      draft.story.alternative.home.default["hero-image"]["hero-image-s3-key"] = null;
    });
    return <SmallStoryCardDesktopBig {...newProps} />;
  })
  .add("missing headline", () => {
    const newProps = produce(story, draft => {
      draft.story.headline = null;
    });
    return <SmallStoryCardDesktopBig {...newProps} />;
  })
  .add("missing alternate headline", () => {
    const newProps = produce(story, draft => {
      draft.story.alternative = null;
    });
    return <SmallStoryCardDesktopBig {...newProps} />;
  })
  .add("missing both headline and alternate headline", () => {
    const newProps = produce(story, draft => {
      draft.story.alternative = null;
      draft.story.headline = null;
    });
    return <SmallStoryCardDesktopBig {...newProps} />;
  })
  .add("missing-slug", () => {
    const newProps = produce(story, draft => {
      draft.story.url = null;
    });
    return <SmallStoryCardDesktopBig {...newProps} />;
  })
  .add("long headline", () => {
    const newProps = produce(story, draft => {
      draft.story.alternative = null;
      draft.story.headline =
        "கமலே கவலைப்படும் அளவுக்கு இருக்கிறதா கமலே கவலைப்படும் அளவுக்கு இருக்கிறதா கமலே கவலைப்படும் அளவுக்கு இருக்கிறதா";
    });
    return <SmallStoryCardDesktopBig {...newProps} />;
  })
  .add("premium story", () => {
    const newProps = produce(story, draft => {
      draft.story.access = "subscription";
    });
    return <SmallStoryCardDesktopBig {...newProps} />;
  });
