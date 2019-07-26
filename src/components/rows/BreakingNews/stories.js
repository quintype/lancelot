import React from "react";

import { withStore } from "../../../../storybook";
import BreakingNews from "./index";
import breakingNews from "./fixture";

withStore("Rows/Three Stories/BreakingNews", {
  qt: {
    config: {
      "cdn-image": "thumbor-stg.assettype.com"
    }
  }
})
  .add("default", () => <BreakingNews breakingNews={breakingNews} />)
  .add("When number of breakingNews is less than 4 in desktop", () => (
    <BreakingNews breakingNews={breakingNews.slice(0, 3)} />
  ))
  .add("When number of breakingNews is less than 2 in mobile", () => (
    <BreakingNews breakingNews={breakingNews.slice(0, 1)} />
  ));
