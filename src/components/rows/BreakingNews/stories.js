import React from "react";

import { withStore, optionalSelect } from "../../../../storybook";
import { text } from "@storybook/addon-knobs";
import BreakingNews from "./index";
import breakingNews from "./fixture";

const breakingNewsOptions = {
  "No Value": "",
  "N Number of stories": breakingNews,
  "Less than 4 stories in desktop": breakingNews.slice(0, 3),
  "Less than 2 stories in mobile": breakingNews.slice(0, 1)
};

withStore("Rows/Three Stories/BreakingNews", {
  qt: {
    config: {
      "cdn-image": "thumbor-stg.assettype.com"
    }
  }
}).add("default", () => (
  <BreakingNews
    className={text("Breaking News Class", "")}
    breakingNews={optionalSelect("Breaking News Scenarios", breakingNewsOptions)}
  />
));
