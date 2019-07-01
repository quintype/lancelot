import React from "react";
import "./headline.m.css";
import PropTypes from "prop-types";

const Headline = ({ text, headerType = 1, headerLevel = 1 }) => {
  const HeaderTag = "h" + headerLevel;

  return <HeaderTag styleName="headline">{text}</HeaderTag>;
};

export { Headline };

Headline.propTypes = {
  text: PropTypes.string,
  headerType: PropTypes.number,
  headerLevel: PropTypes.number
};
