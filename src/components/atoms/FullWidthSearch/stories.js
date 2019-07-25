import React from "react";
import FullWidthSearch from "./";
import { withStore } from "../../../../storybook";
import "../../../../assets/stylesheets/app.scss";

withStore("Rows/FullWidthSearch", {
  qt: {
    config: {
      "cdn-image": "thumbor-stg.assettype.com",
      iconSpritePath: "/sprite.svg"
    }
  }
}).add("default", () => <FullWidthSearch isOpen={true} />);
