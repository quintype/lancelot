import React from "react";
import PropTypes from "prop-types";

import "./collectionTitleWithCrossLine.m.css";

const CollectionTitleWithCrossLine = ({ title, className = "", placement = "1fr auto 1fr", opacity }) => {
  if (!title) {
    return null;
  }

  return (
    <h2
      styleName={`title customised-alignment`}
      className={className}
      style={{ "--custom-offset": placement, "--opacity": opacity || "1" }}
    >
      <span styleName="text">{title}</span>
    </h2>
  );
};

CollectionTitleWithCrossLine.propTypes = {
  title: PropTypes.string.isRequired,
  className: PropTypes.string,
  placement: PropTypes.string,
  opacity: PropTypes.number
};

export default CollectionTitleWithCrossLine;
