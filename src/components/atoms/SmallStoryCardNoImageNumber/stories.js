import React from "react";
import { withStore } from "../../../../storybook/index";
import "../../../../assets/stylesheets/app.scss";

import SmallStoryCardNoImageNumber from "./index";
import produce from "immer";

import story from "./fixture";

withStore("Cards/SmallStoryCardNoImageNumber", {
  qt: {
    config: {
      "cdn-image": "thumbor-stg.assettype.com",
      iconSpritePath: "/sprite.svg"
    }
  }
})
  .addDecorator(story => <div>{story()}</div>)
  .add("default", () => <SmallStoryCardNoImageNumber {...story} index={1} />)
  .add("premium story", () => {
    const newProps = produce(story, draft => {
      draft.story.access = "subscription";
    });
    return <SmallStoryCardNoImageNumber {...newProps} index={1} />;
  })
  .add("missing-author", () => {
    const newProps = produce(story, draft => {
      draft.story["authors"] = null;
    });
    return <SmallStoryCardNoImageNumber {...newProps} index={1} />;
  })
  .add("missing alternate headline", () => {
    const newProps = produce(story, draft => {
      draft.story.alternative = null;
    });
    return <SmallStoryCardNoImageNumber {...newProps} index={1} />;
  })
  .add("missing-headline", () => {
    const newProps = produce(story, draft => {
      draft.story.headline = null;
    });
    return <SmallStoryCardNoImageNumber {...newProps} index={1} />;
  })
  .add("missing both headline and alternate headline", () => {
    const newProps = produce(story, draft => {
      draft.story.alternative = null;
      draft.story.headline = null;
    });
    return <SmallStoryCardNoImageNumber {...newProps} index={1} />;
  })
  .add("missing-slug", () => {
    const newProps = produce(story, draft => {
      draft.story.url = null;
    });
    return <SmallStoryCardNoImageNumber {...newProps} index={1} />;
  })
  .add("long headline", () => {
    const newProps = produce(story, draft => {
      draft.story.alternative = null;
      draft.story.headline = draft.story.headline + " " + draft.story.headline;
    });
    return <SmallStoryCardNoImageNumber {...newProps} index={1} />;
  });
