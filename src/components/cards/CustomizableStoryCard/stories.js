import React from "react";
import { withStore } from "../../../../storybook";
import produce from "immer";
import "../../../../assets/stylesheets/app.scss";

import CustomizableStoryCard from "./index";

import props from "./fixture";

withStore("Cards/CustomizableStoryCard", {
  qt: {
    config: {
      "cdn-image": "thumbor-stg.assettype.com",
      iconSpritePath: "/sprite.svg"
    }
  }
})
  .addDecorator(story => <div style={{ width: "360px" }}>{story()}</div>)
  .add("mobile [4,3] horizontal, desktop [2,1] vertical", () => <CustomizableStoryCard {...props} />)
  .add("mobile [4,3] horizontal, desktop [3,2] horizontal", () => {
    const newProps = produce(props, draft => {
      draft.mobile.direction = "horizontal";
      draft.desktop.direction = "horizontal";
      draft.desktop.imageToHeadlineRatio = [1, 1];
      draft.desktop.image.aspectRatio = [3, 2];
    });
    return <CustomizableStoryCard {...newProps} />;
  })
  .add("mobile [4,3] vertical, desktop [3,2] vertical", () => {
    const newProps = produce(props, draft => {
      draft.mobile.direction = "vertical";
      draft.desktop.direction = "vertical";
      draft.desktop.image.aspectRatio = [3, 2];
      draft.desktop.headline.fontStyle = "h5";
    });
    return <CustomizableStoryCard {...newProps} />;
  })
  .add("mobile [2,1] vertical, desktop [3,2] horizontal", () => {
    const newProps = produce(props, draft => {
      draft.mobile.image.aspectRatio = [2, 1];
      draft.mobile.direction = "vertical";
      draft.desktop.direction = "horizontal";
      draft.desktop.image.aspectRatio = [3, 2];
      draft.desktop.headline.fontStyle = "h5";
    });
    return <CustomizableStoryCard {...newProps} />;
  })
  .add("mobile [2,1] vertical, desktop [3,2] horizontal contributor after", () => {
    const newProps = produce(props, draft => {
      draft.mobile.image.aspectRatio = [2, 1];
      draft.mobile.direction = "vertical";
      draft.desktop.direction = "horizontal";
      draft.desktop.image.aspectRatio = [3, 2];
      draft.desktop.headline.fontStyle = "h5";
      draft.desktop.contributor.position = "after";
    });
    return <CustomizableStoryCard {...newProps} />;
  })
  .add("mobile no image, desktop [3,2] horizontal", () => {
    const newProps = produce(props, draft => {
      draft.mobile.image.isVisible = false;
      draft.desktop.direction = "horizontal";
      draft.desktop.image.aspectRatio = [3, 2];
      draft.desktop.headline.fontStyle = "h5";
    });
    return <CustomizableStoryCard {...newProps} />;
  })
  .add("mobile [2,1] vertical, desktop no image", () => {
    const newProps = produce(props, draft => {
      draft.mobile.image.aspectRatio = [2, 1];
      draft.mobile.direction = "vertical";
      draft.desktop.image.isVisible = false;
    });
    return <CustomizableStoryCard {...newProps} />;
  })
  .add("missing-author", () => {
    const newProps = produce(props, draft => {
      draft.story["contributors"] = null;
    });
    return <CustomizableStoryCard {...newProps} />;
  })
  .add("missing-image", () => {
    const newProps = produce(props, draft => {
      draft.story["hero-image-s3-key"] = null;
    });
    return <CustomizableStoryCard {...newProps} />;
  })
  .add("missing headline", () => {
    const newProps = produce(props, draft => {
      draft.story.headline = null;
    });
    return <CustomizableStoryCard {...newProps} />;
  })
  .add("missing alternate headline", () => {
    const newProps = produce(props, draft => {
      draft.story.alternative = null;
    });
    return <CustomizableStoryCard {...newProps} />;
  })
  .add("missing both headline and alternate headline", () => {
    const newProps = produce(props, draft => {
      draft.story.alternative = null;
      draft.story.headline = null;
    });
    return <CustomizableStoryCard {...newProps} />;
  })
  .add("missing-slug", () => {
    const newProps = produce(props, draft => {
      draft.story.url = null;
    });
    return <CustomizableStoryCard {...newProps} />;
  })
  .add("long headline", () => {
    const newProps = produce(props, draft => {
      draft.story.alternative = null;
      draft.story.headline =
        "கமலே கவலைப்படும் அளவுக்கு இருக்கிறதா கமலே கவலைப்படும் அளவுக்கு இருக்கிறதா கமலே கவலைப்படும் அளவுக்கு இருக்கிறதா";
    });
    return <CustomizableStoryCard {...newProps} />;
  })
  .add("premium story", () => {
    const newProps = produce(props, draft => {
      draft.story.access = "subscription";
    });
    return <CustomizableStoryCard {...newProps} />;
  });
