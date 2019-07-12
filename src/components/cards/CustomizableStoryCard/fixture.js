import { generateStory } from "../../fixture";

export default {
  story: generateStory(),
  mobile: {
    image: {
      isVisible: true,
      aspectRatio: [4, 3]
    },
    direction: "horizontal",
    imageToHeadlineRatio: [1, 2],
    contributor: {
      fontStyle: "body"
    },
    headline: {
      fontStyle: "mobile-h4"
    }
  },
  desktop: {
    image: {
      isVisible: true,
      aspectRatio: [2, 1]
    },
    direction: "vertical",
    containerWidthCoverage: 0.34,
    imageToHeadlineRatio: [1, 3],
    contributor: {
      fontStyle: "body",
      position: "before"
    },
    headline: {
      fontStyle: "h4"
    }
  }
};
