import React from "react";
import PropTypes from "prop-types";
import { Link } from "@quintype/components";

import Icon from "../Icon";
import "./readMoreLink.m.css";

export const ReadMoreLink = ({ className = "", href, text = "Read More" }) => {
  if (!href) {
    return null;
  }

  return (
    <Link aria-label="Read More" className={`${className} read-more-link`} href={href}>
      <span styleName="text">{text}</span>
      <Icon type={"arrow-right"} className={"arrow-right"} />
    </Link>
  );
};

ReadMoreLink.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string,
  href: PropTypes.string
};

export default ReadMoreLink;

export const LoadMoreButton = ({ className = "", text = "Load More", onClick, disabled }) => {
  if (!onClick) {
    return null;
  }

  return (
    <button
      title="load More"
      aria-label="load More"
      role="button"
      styleName={`${className} read-more-link}`}
      onClick={onClick}
      disabled={disabled}
    >
      <span styleName="text">{text}</span>
      <Icon type={"arrow-right"} className={"arrow-right"} />
    </button>
  );
};

LoadMoreButton.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool
};
