import React from "react";
import PropTypes from "prop-types";

const Badge = ({ className, text, style }) => {
  return (
    <span className={className} style={style}>
      <span>{text}</span>
    </span>
  );
};

Badge.propTypes = {
  type: PropTypes.string,
  className: PropTypes.string,
  text: PropTypes.string,
  style: PropTypes.string
};

export default Badge;
