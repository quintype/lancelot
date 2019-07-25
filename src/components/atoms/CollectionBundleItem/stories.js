import React from "react";
import { withStore } from "../../../../storybook";

import CollectionBundleItem from "./";
import produce from "immer";

import collection from "./fixture";

withStore("Cards/CollectionBundleItem", {
  qt: {
    config: {
      "cdn-image": "thumbor-stg.assettype.com"
    }
  }
})
  .addDecorator(collection => <div style={{ maxWidth: "360px" }}>{collection()}</div>)
  .add("default", () => <CollectionBundleItem collection={collection} />)
  .add("missing title", () => {
    const newProps = produce(collection, draft => {
      draft.name = null;
    });
    return <CollectionBundleItem collection={newProps} />;
  })
  .add("missing summary", () => {
    const newProps = produce(collection, draft => {
      draft.summary = null;
    });
    return <CollectionBundleItem collection={newProps} />;
  })
  .add("missing image", () => {
    const newProps = produce(collection, draft => {
      draft.metadata["cover-image"]["cover-image-s3-key"] = null;
    });
    return <CollectionBundleItem collection={newProps} />;
  });
