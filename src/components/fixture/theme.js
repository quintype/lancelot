import React from "react";

const themeConfig = {
  fiveStoryOneAd: {
    columnAd: false,
    columnForAd: "",
    collectionNameRequired: false,
    collectionNameDesign: "default",
    theme: "dark",
    defaultAd: true
  },
  storyCardML3x2DP9x5: {
    headerLevel: 1,
    headlineType: 1,
    dateRequired: false,
    authorRequired: true,
    borderRequired: false,
    truncationRequired: false,
    truncationLimit: ""
  },
  storyCardML9x5DP9x5: {
    headerLevel: 1,
    headlineType: 1,
    dateRequired: false,
    authorRequired: true,
    borderRequired: false,
    truncationRequired: false,
    truncationLimit: ""
  },
  smallStoryCard: {
    headerLevel: 1,
    headlineType: 1,
    dateRequired: false,
    authorRequired: true,
    borderRequired: false,
    truncationRequired: false,
    truncationLimit: ""
  },
  storyCardML5x4DP1x1: {
    headerLevel: 1,
    headlineType: 1,
    dateRequired: false,
    authorRequired: true,
    borderRequired: false,
    truncationRequired: false,
    truncationLimit: ""
  }
};

export { themeConfig };

const ThemeConfigContext = React.createContext(themeConfig);
export default ThemeConfigContext;
