import React from "react";

import CollectionTitleWithCrossLine from "./";
import props from "./fixture.js";
import { withStore } from "../../../../storybook";

const storeState = {
  qt: {
    config: {
      "cdn-image": "thumbor-stg.assettype.com",
      iconSpritePath: "/sprite.svg"
    }
  }
};

withStore("Atoms/CollectionTitleWithCrossLine", storeState)
  .add("default", () => <CollectionTitleWithCrossLine title={props.title} />)
  .add("left-offset", () => <CollectionTitleWithCrossLine title={props.title} placement={"1fr 1fr 5fr"} />)
  .add("when title is not present, dont show the component", () => <CollectionTitleWithCrossLine />);
