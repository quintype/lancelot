import React from "react";

import { withStore } from "../../../../storybook";
import SixColumnGrid from ".";
import props from "./fixture.js";

withStore("Rows/SixColumnGrid", {
  qt: {
    config: {
      "cdn-image": "thumbor-stg.assettype.com",
      iconSpritePath: "/sprite.svg"
    }
  }
}).add("Default", () => <SixColumnGrid {...props} />);
