import React from "react";
import "../../../../assets/stylesheets/app.scss";
import Contributor from "./index";
import { withStore } from "../../../../storybook/index";
import iconsArray from "./fixture";
import produce from "immer";

const displayIcons = icons =>
  icons.map((iconProps, idx) => (
    <div style={{ padding: "25px" }} key={"icon_" + idx}>
      <Contributor {...iconProps} />
    </div>
  ));

withStore("Atoms/Contributor", {
  qt: { config: { iconSpritePath: "/sprite.svg" } }
})
  .add("default", () => {
    return displayIcons(iconsArray);
  })
  .add("when no matching icon for a type found, show author icon", () => {
    const newIconsArray = produce(iconsArray, draft => {
      for (let idx in draft) {
        if (parseInt(idx) === 2) {
          draft[idx]["role"] = "xyz";
        }
      }
    });
    return displayIcons(newIconsArray);
  })
  .add("when no name passed, dont show component", () => {
    const newIconsArray = produce(iconsArray, draft => {
      for (let idx in draft) {
        if (parseInt(idx) === 2) {
          draft[idx]["role"] = "xyz";
        }
      }
    });
    return displayIcons(newIconsArray);
  });
