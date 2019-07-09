import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import get from "lodash/get";
import styles from "./icon.m.css";

if (require.context) {
  const req = require.context("../../../../assets/icons/", true, /\.svg$/);
  req.keys().forEach(filename => req(filename));
}

const IconBase = ({ type, className, iconSpritePath }) => {
  if (!type) return null;
  return (
    <span className={`${styles.base} ${className} ${styles[type]}`}>
      <svg>
        <use xlinkHref={`${iconSpritePath}#${String(type).toLowerCase()}`} />
      </svg>
    </span>
  );
};

const ZodiacIconBase = ({ type, className = "", hoverDefault = false, iconSpritePath }) => {
  return (
    <span className={`${styles.base} ${className} ${hoverDefault ? styles["hover"] : ""}`}>
      <svg className={styles["zodiac"]}>
        <g>
          <use href={`${iconSpritePath}#hexbackground`} className={styles["background"]} />
          <use href={`${iconSpritePath}#${type}`} className={styles["form"]} />
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
