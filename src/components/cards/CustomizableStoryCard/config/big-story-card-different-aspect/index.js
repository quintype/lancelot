export default {
  mobile: {
    image: {
      isVisible: true,
      aspectRatio: [3, 2]
    },
    direction: "vertical",
    contributor: {
      fontStyle: "meta",
      position: "before"
    },
    headline: {
      fontStyle: "mobile-h3"
    },
    textWrapperPadding: "0 var(--space1_5) var(--space2)"
  },
  desktop: {
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
      fontStyle: "h4"
    },
    textWrapperPadding: "0 var(--space2) var(--space4)",
    borderBottom: "2px solid var(--border-color)"
  }
};
