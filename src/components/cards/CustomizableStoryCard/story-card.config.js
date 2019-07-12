// add common configs here and use them across rows
// you can override some row specific properties in row itself instead of adding a new config here

// <screen-size>_<aspect>_<direction>_<headline>

// mobile vertical
export const mobile9by5VerticalMobileh3 = {
  image: {
    isVisible: true,
    aspectRatio: [9, 5]
  },
  direction: "vertical",
  contributor: {
    fontStyle: "meta",
    position: "before"
  },
  headline: {
    fontStyle: "mobile-h3"
  }
};

export const mobileNoimgVerticalMobileh4 = {
  image: {
    isVisible: false
  },
  direction: "vertical",
  contributor: {
    fontStyle: "meta",
    position: "before"
  },
  headline: {
    fontStyle: "mobile-h4"
  }
};

// mobile horizontal
export const mobile4by3HorizontalMobileh4 = {
  image: {
    isVisible: true,
    aspectRatio: [4, 3]
  },
  direction: "horizontal",
  imageToHeadlineRatio: [1, 3],
  contributor: {
    fontStyle: "meta",
    position: "before"
  },
  headline: {
    fontStyle: "mobile-h4"
  }
};

// desktop vertical
export const desktop9by5VerticalH5 = {
  image: {
    isVisible: true,
    aspectRatio: [9, 5]
  },
  direction: "vertical",
  containerWidthCoverage: 0.34,
  contributor: {
    fontStyle: "meta",
    position: "before"
  },
  headline: {
    fontStyle: "h5"
  }
};

export const desktop2by1VerticalH5 = {
  image: {
    isVisible: true,
    aspectRatio: [2, 1]
  },
  direction: "vertical",
  containerWidthCoverage: 0.34,
  contributor: {
    fontStyle: "meta",
    position: "before"
  },
  headline: {
    fontStyle: "h5"
  }
};

export const desktopNoimgVerticalH5 = {
  image: {
    isVisible: false
  },
  direction: "vertical",
  contributor: {
    fontStyle: "meta",
    position: "before"
  },
  headline: {
    fontStyle: "h5"
  }
};

// desktop horizontal
export const desktop4by3HorizontalH5 = {
  image: {
    isVisible: true,
    aspectRatio: [4, 3]
  },
  direction: "horizontal",
  containerWidthCoverage: 0.34,
  imageToHeadlineRatio: [1, 2],
  contributor: {
    fontStyle: "meta",
    position: "before"
  },
  headline: {
    fontStyle: "h5"
  }
};

export const desktop1by1HorizontalH5 = {
  image: {
    isVisible: true,
    aspectRatio: [1, 1]
  },
  direction: "horizontal",
  containerWidthCoverage: 0.34,
  imageToHeadlineRatio: [1, 3],
  contributor: {
    fontStyle: "meta",
    position: "before"
  },
  headline: {
    fontStyle: "h5"
  }
};
