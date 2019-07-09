import React from "react";
import PropTypes from "prop-types";

import "./collectionTitleWithCrossLine.m.css";

const CollectionTitleWithCrossLine = ({ title, className = "" }) => {
  if (!title) {
    return null;
  }

  return (
    <h2 styleName={`title ${className}`} className={className}>
      <span styleName="text">{title}</span>
    </h2>
  );
};

CollectionTitleWithCrossLine.propTypes = {
  title: PropTypes.string.isRequired,
  className: PropTypes.string
};

export default CollectionTitleWithCrossLine;
