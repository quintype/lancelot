import React from "react";
import { withStore } from "../../../../storybook/index";
import Badge from "./index";

withStore("Atoms/Badge", {}).add("default", () => {
  return <Badge />;
});
