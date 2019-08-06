import React from "react";

import { withStore } from "../../../../storybook";
import EightStoriesOneAd from "./index";

import fixture from "./fixture";

withStore("Rows/Eight Stories/EightStoriesOneAd", {
  qt: {
    config: {
      "cdn-image": "thumbor-stg.assettype.com"
    }
  }
}).add("default", () => <EightStoriesOneAd collection={fixture} />);
