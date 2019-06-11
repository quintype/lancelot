import React from "react";
import "./headline.m.css";
import { string, number, func } from "prop-types";

const Headline = ({ text, headerType = 1, headerLevel = 1, onClick, active = "", headlineLimit = 140 }) => {
  const HeaderTag = "h" + headerLevel;

  return (
    <HeaderTag
      onClick={onClick}
      styleName={`headline headline-type-${headerType}`}
      className={`headline headline-type-${headerType} ${active}`}
    >
      {text}
    </HeaderTag>
  );
};

export default Headline;

Headline.propTypes = {
  text: string,
  headerType: number,
  headerLevel: number,
  onClick: func,
  active: string,
  headlineLimit: number
};
