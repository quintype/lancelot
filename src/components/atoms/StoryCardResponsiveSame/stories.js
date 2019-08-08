import React from "react";
import { withStore } from "../../../../storybook/index";
import produce from "immer";

import StoryCardResponsiveSame from "./index";

import props from "./fixture";

const { story } = props;

withStore("Cards/StoryCardResponsiveSame", {
  qt: {
    config: {
      "cdn-image": "thumbor-stg.assettype.com",
      iconSpritePath: "/sprite.svg"
    }
  }
})
  .addDecorator(story => <div style={{ maxWidth: "360px" }}>{story()}</div>)
  .add("default", () => <StoryCardResponsiveSame story={story} />)
  .add("missing-contributor", () => {
    const newStory = produce(story, draft => {
      draft["authors"] = null;
    });
    return <StoryCardResponsiveSame story={newStory} />;
  })
  .add("missing hero image", () => {
    const newStory = produce(story, draft => {
      draft["hero-image-s3-key"] = undefined;
    });
    return <StoryCardResponsiveSame story={newStory} />;
  })
  .add("missing alternate image", () => {
    const newStory = produce(story, draft => {
      draft.alternative.home.default["hero-image"]["hero-image-s3-key"] = undefined;
    });
    return <StoryCardResponsiveSame story={newStory} />;
  })
  .add("missing hero image, alternate image", () => {
    const newStory = produce(story, draft => {
      draft["hero-image-s3-key"] = null;
      draft.alternative.home.default["hero-image"]["hero-image-s3-key"] = null;
    });
    return <StoryCardResponsiveSame story={newStory} />;
  })
  .add("missing headline", () => {
    const newStory = produce(story, draft => {
      draft.headline = null;
    });
    return <StoryCardResponsiveSame story={newStory} />;
  })
  .add("missing alternate headline", () => {
    const newStory = produce(story, draft => {
      draft.alternative = null;
    });
    return <StoryCardResponsiveSame story={newStory} />;
  })
  .add("missing both headline and alternate headline", () => {
    const newStory = produce(story, draft => {
      draft.headline = null;
      draft.alternative = null;
    });
    return <StoryCardResponsiveSame story={newStory} />;
  })
  .add("missing-slug", () => {
    const newStory = produce(story, draft => {
      draft.slug = null;
    });
    return <StoryCardResponsiveSame story={newStory} />;
  })
  .add("long headline", () => {
    const newStory = produce(story, draft => {
      draft.alternative = null;
      draft.headline =
        "கமலே கவலைப்படும் அளவுக்கு இருக்கிறதா கமலே கவலைப்படும் அளவுக்கு இருக்கிறதா கமலே கவலைப்படும் அளவுக்கு இருக்கிறதா";
    });
    return <StoryCardResponsiveSame story={newStory} />;
  })
  .add("premium story", () => {
    const newStory = produce(story, draft => {
      draft.access = "subscription";
    });
    return <StoryCardResponsiveSame story={newStory} />;
  });
