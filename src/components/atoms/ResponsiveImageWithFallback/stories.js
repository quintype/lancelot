import React from "react";
import { withStore } from "../../../../storybook/index";

import fixture from "./fixture";

import ResponsiveImageWithFallback from "./index";
import produce from "immer";

withStore("Atoms/ResponsiveImageWithFallback", {
  qt: {
    config: {
      "cdn-image": "thumbor-stg.assettype.com",
      iconSpritePath: "/sprite.svg"
    }
  }
})
  .addDecorator(story => (
    <div>
      <style>{".figure-storybook {padding-top: 100%}"}</style>
      <div style={{ maxWidth: "360px" }}>{story()}</div>
    </div>
  ))
  .add("default", () => (
    <ResponsiveImageWithFallback slug={fixture.slug} sources={[fixture]} className="figure-storybook" />
  ))
  .add("missing image", () => {
    const newProps = produce(fixture, draft => {
      draft.slug = null;
    });
    return <ResponsiveImageWithFallback sources={[newProps]} className="figure-storybook" />;
  });
