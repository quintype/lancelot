import React from "react";
import { string, number } from "prop-types";

import "./headline.m.css";

const Headline = ({ text, headerType = 1, headerLevel = 1, headlineDesign = "", className = "" }) => {
  const HeaderTag = "h" + headerLevel;

  const crossLineDom = () => {
    return <span className="text">{text}</span>;
  };

  const simpleDom = () => {
    return text;
  };

  const headlineDom = () => {
    switch (headlineDesign) {
      case "crossline":
        return crossLineDom();
      default:
        return simpleDom();
    }
  };

  return (
    <React.Fragment>
      <HeaderTag
        styleName={`headline headline-type-${headerType} ${headlineDesign}`}
        className={`headline headline-type-${headerType} ${headlineDesign} ${className}`}
      >
        {headlineDom()}
      </HeaderTag>
    </React.Fragment>
  );
};

export default Headline;

Headline.propTypes = {
  text: string,
  headerType: number,
  headerLevel: number,
  headlineDesign: string,
  className: string
};
