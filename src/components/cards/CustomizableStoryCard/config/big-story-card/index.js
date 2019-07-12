export default {
  mobile: {
    image: {
      isVisible: true,
      aspectRatio: [3, 2]
    },
    direction: "horizontal",
    imageToHeadlineRatio: [1, 1],
    contributor: {
      fontStyle: "meta",
      position: "before"
    },
    headline: {
      fontStyle: "mobile-h3"
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
      fontStyle: "h5"
    }
  }
};
