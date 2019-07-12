export default {
  mobile: {
    image: {
      isVisible: true,
      aspectRatio: [4, 3]
    },
    direction: "horizontal",
    imageToHeadlineRatio: [1, 2],
    contributor: {
      fontStyle: "meta",
      position: "before"
    },
    headline: {
      fontStyle: "mobile-h4"
    }
  },
  desktop: {
    image: {
      isVisible: true,
      aspectRatio: [3, 2]
    },
    direction: "vertical",
    containerWidthCoverage: 0.25,
    contributor: {
      fontStyle: "meta",
      position: "before"
    },
    headline: {
      fontStyle: "mobile-h3"
    }
  }
};
