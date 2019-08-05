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
  .add("center fixed width", () => <CollectionTitleWithCrossLine title={props.title} placement={"1fr 1fr 1fr"} />)
  .add("left aligned", () => <CollectionTitleWithCrossLine title={props.title} placement={"1fr 1fr 5fr"} />)
  .add("left aligned zero offset auto text width", () => (
    <CollectionTitleWithCrossLine title={props.title} placement={"0 auto 5fr"} />
  ))
  .add("right aligned", () => <CollectionTitleWithCrossLine title={props.title} placement={"5fr 1fr 1fr"} />)
  .add("right aligned zero offset fixed text width", () => (
    <CollectionTitleWithCrossLine title={props.title} placement={"5fr 1fr 0"} />
  ))
  .add("when title is not present, dont show the component", () => <CollectionTitleWithCrossLine />);
