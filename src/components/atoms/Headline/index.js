import React from "react";
import { string, number } from "prop-types";

import "./headline.m.css";
import ThemeConfigContext from "../../fixture/theme";

const Headline = ({ text, headlineType = 1, headerLevel = 1, headlineDesign = "", className = "" }) => {
  const HeaderTag = "h" + headerLevel;

  const crossLineDom = () => {
    return <span className="text">{text}</span>;
  };

  const withbackgroundDom = () => {
    return <span className="text">{text}</span>;
  };

  const simpleDom = () => {
    return text;
  };

  const headlineDom = () => {
    switch (headlineDesign) {
      case "crossline":
        return crossLineDom();
      case "withbackground":
        return withbackgroundDom();
      default:
        return simpleDom();
    }
  };

  return (
    <ThemeConfigContext.Consumer>
      {themeConfig => (
        <HeaderTag
          styleName={`headline headline-type-${headlineType} ${headlineDesign}`}
          className={`headline headline-type-${headlineType} ${headlineDesign} ${className}`}
        >
          {headlineDom()}
        </HeaderTag>
      )}
    </ThemeConfigContext.Consumer>
  );
};

export default Headline;

Headline.propTypes = {
  text: string.isRequired,
  headlineType: number,
  headerLevel: number,
  headlineDesign: string,
  className: string
};
