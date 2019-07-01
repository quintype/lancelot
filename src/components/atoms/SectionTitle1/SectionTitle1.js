import React from "react";
import PropTypes from "prop-types";

import "./sectionTitle1.m.css";

export const SectionTitle1 = ({ story }) => {
  const sectionName = story.sections[0]["display-name"];
  return <h3 styleName="section-title">{sectionName}</h3>;
};

SectionTitle1.propTypes = {
  story: PropTypes.object
};
