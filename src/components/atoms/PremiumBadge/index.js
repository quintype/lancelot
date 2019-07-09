import React from "react";
import PropTypes from "prop-types";
import { Icon } from "../Icon";

import "./premiumBadge.m.css";

const PremiumBadge = ({ isPremium = false, className = "", positionClass = "bottomRight" }) => {
  if (!isPremium) {
    return null;
  } else {
    return (
      <span styleName={`premium ${positionClass} ${className} premium-badge`}>
        <Icon className={"premium-icon"} type="premium" />
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
    <span styleName={`premium-headline-wrap ${className}`}>
      {isPremium && <Icon className={"headline-premium-icon"} type="premium" />}
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
