import React from "react";
import produce from "immer";
import { withStore } from "../../../../storybook/index";
import "../../../../assets/stylesheets/app.scss";
import FourStoryPhotoGallery from "./index";

import collection from "./fixture";

withStore("Rows/FourStoryPhotoGallery", {
  qt: {
    config: {
      "cdn-image": "thumbor-stg.assettype.com",
      iconSpritePath: "/sprite.svg"
    }
  }
})
  .add("default", () => <FourStoryPhotoGallery collection={collection} />)
  .add("when collection name is not present hide collectio name", () => {
    const newCollection = produce(collection, draft => {
      draft.name = null;
    });
    return <FourStoryPhotoGallery collection={newCollection} />;
  })
  .add("when collection slug is not present hide read more link", () => {
    const newCollection = produce(collection, draft => {
      draft.slug = null;
    });
    return <FourStoryPhotoGallery collection={newCollection} />;
  })
  .add("when less then 4 stories are there", () => {
    const newCollection = produce(collection, draft => {
      draft.items = draft.items.slice(0, 3);
    });
    return <FourStoryPhotoGallery collection={newCollection} />;
  });
