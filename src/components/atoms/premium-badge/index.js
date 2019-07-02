import React from "react";
import PropTypes from "prop-types";
import { Icon } from "../../atoms/icon";

import styles from "./styles.m.css";

const PremiumBadge = ({ isPremium = false, className = "", positionClass = "bottomRight" }) => {
  if (!isPremium) {
    return null;
  } else {
    return (
      <span className={`${styles.premium} ${positionClass} ${className} ${"premium-badge"}`}>
        <Icon className={styles["premium-icon"]} type="premium" />
      </span>
    );
  }
};

PremiumBadge.propTypes = {
  isPremium: PropTypes.bool,
  className: PropTypes.string
};

const PremiumBadgeHeadline = ({ isPremium = false, className = "", headline = "" }) => {
  return (
    <span className={`${styles["premium-headline-wrap"]} ${className}`}>
      {isPremium && <Icon className={styles["headline-premium-icon"]} type="premium" />}
      {headline || null}
    </span>
  );
};

PremiumBadgeHeadline.propTypes = {
  isPremium: PropTypes.bool,
  className: PropTypes.string,
  headline: PropTypes.string
};

export { PremiumBadgeHeadline, PremiumBadge };
