import React from "react";

import "../../../../assets/stylesheets/app.scss";
import ReadMoreLink from "./index";
import { withStore } from "../../../../storybook/index";

const LinkText = " மேலும் படிக்க";

withStore("Atoms/ReadMoreLink")
  .add("default", () => <ReadMoreLink text={LinkText} href="#" />)
  .add("when href is not present, dont show the link", () => <ReadMoreLink text={LinkText} />);
