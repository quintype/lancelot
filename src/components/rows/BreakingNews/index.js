import React from "react";
import PropTypes from "prop-types";
import get from "lodash/get";
import { Link } from "@quintype/components";
import Icon from "../../atoms/Icon";

import "./breakingNews.m.css";

const renderBreakingNewsMarquee = breakingNews => {
  const items = breakingNews.map(story => {
    const linkedStorySlug = get(story, ["metadata", "linked-story-slug"]);
    if (linkedStorySlug) {
      return (
        <Link
          aria-label={`${"Read full story: "} ${story.headline}`}
          key={story.id}
          styleName="item"
          href={`/${linkedStorySlug}`}
        >
          {story.headline}
        </Link>
      );
    }

    return (
      <div key={story.id} styleName="item">
        {story.headline}
      </div>
    );
  });

  let className = items.length <= 3 ? "no-animation-desktop " : "";
  className += items.length <= 1 ? "no-animation-mobile" : "";

  return (
    <div styleName={`marquee-wrapper ${className}`} style={{ "--items": breakingNews.length }}>
      <div styleName="marquee-container">{items}</div>
      <div styleName="marquee-container clone">{items}</div>
    </div>
  );
};

const BreakingNews = ({ className = "", breakingNews = [] }) => {
  if (!breakingNews.length) {
    return null;
  }

  return (
    <div styleName="base" className={`base ${className} container`}>
      <Icon type={"breaking-news"} styleName="icon" />
      {renderBreakingNewsMarquee(breakingNews)}
    </div>
  );
};

BreakingNews.propTypes = {
  breakingNews: PropTypes.array.isRequired,
  className: PropTypes.string
};

export default BreakingNews;
