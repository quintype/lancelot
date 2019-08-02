import React from "react";
import FullWidthSearch from "./";
import { withStore } from "../../../../storybook";

withStore("Rows/FullWidthSearch", {}).add("default", () => <FullWidthSearch isOpen={true} />);
