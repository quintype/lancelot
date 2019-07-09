import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import get from "lodash/get";
import "./icon.m.css";

if (require.context) {
  const req = require.context("../../../../assets/icons/", true, /\.svg$/);
  req.keys().forEach(filename => req(filename));
}

const IconBase = ({ type, className, iconSpritePath }) => {
  if (!type) return null;
  return (
    <span styleName="base" className={`${className} ${type}`}>
      <svg>
        <use xlinkHref={`${iconSpritePath}#${String(type).toLowerCase()}`} />
      </svg>
    </span>
  );
};

const ZodiacIconBase = ({ type, className = "", hoverDefault = false, iconSpritePath }) => {
  return (
    <span styleName={`base ${className} ${hoverDefault ? "hover" : ""}`}>
      <svg styleName={"zodiac"}>
        <g>
          <use href={`${iconSpritePath}#hexbackground`} styleName={"background"} />
          <use href={`${iconSpritePath}#${type}`} styleName={"form"} />
        </g>
      </svg>
    </span>
  );
};

IconBase.propTypes = {
  type: PropTypes.string,
  className: PropTypes.string,
  iconSpritePath: PropTypes.string,
  hoverDefault: PropTypes.bool
};

ZodiacIconBase.propTypes = {
  ...IconBase.propTypes
};

function mapStateToProps(state) {
  return {
    iconSpritePath: get(state, ["qt", "config", "iconSpritePath"])
  };
}

export const Icon = connect(mapStateToProps)(IconBase);
export const ZodiacIcon = connect(mapStateToProps)(ZodiacIconBase);
export default Icon;
