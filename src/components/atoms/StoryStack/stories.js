import React from "react";
import { withStore } from "../../../../storybook";
import produce from "immer";

import StoryStack from "./index";

import collection from "./fixture";

withStore("Components/StoryStack", {
  qt: {
    config: {
      "cdn-image": "thumbor-stg.assettype.com",
      iconSpritePath: "/sprite.svg"
    }
  }
})
  .addDecorator(story => <div style={{ maxWidth: "360px" }}>{story()}</div>)
  .add("default", () => <StoryStack {...collection} />)
  .add("show 5 small stories in desktop and 3 mobile", () => (
    <StoryStack
      {...Object.assign({}, collection, {
        bigStory: false,
        mobileStoryCount: 3,
        stories: collection.stories.slice(0, 5)
      })}
    />
  ))
  .add("show 1 big story and 2 small", () => (
    <StoryStack
      {...Object.assign({}, collection, {
        bigStory: true,
        mobileStoryCount: 3,
        stories: collection.stories.slice(0, 3)
      })}
    />
  ))
  .add("less-stories", () => (
    <StoryStack
      {...Object.assign({}, collection, {
        bigStory: false,
        mobileStoryCount: 3,
        stories: collection.stories.slice(0, 2)
      })}
    />
  ))
  .add("story-missing-slug", () => {
    const newProps = produce(collection, draft => {
      draft.bigStory = false;
      draft.mobileStoryCount = 3;
      draft.stories.forEach((story, index) => {
        if (index % 2 === 0) story.url = null;
      });
    });
    return <StoryStack {...newProps} />;
  });
