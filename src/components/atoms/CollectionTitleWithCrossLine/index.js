import React from "react";
import PropTypes from "prop-types";

import "./collectionTitleWithCrossLine.m.css";

const CollectionTitleWithCrossLine = ({ title, className = "", placement = "middle", opacity }) => {
  if (!title) {
    return null;
  }

  return (
    <h2
      styleName={`title ${placement === "middle" ? "aligned-center" : "customised-offset"}`}
      className={className}
      style={{ "--left-offset": placement, "--opacity": opacity || "1" }}
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
