import React from "react";
import PropTypes from "prop-types";
import get from "lodash/get";

import StoryCardBig from "../../atoms/StoryCardBig";
import SmallStoryCard from "../../atoms/SmallStoryCard";
import SmallStoryCardDesktopVertical from "../../atoms/SmallStoryCardDesktopVertical";
import ReadMoreLink from "../../atoms/ReadMoreLink";

import "./sixStoryOneAdOneWidget.m.css";

const getStoryHeadline = story => {
  return get(story, ["alternative", "home", "default", "headline"]) || story.headline;
};

const SixStoryOneAdOneWidget = ({ collection, metadata, accentColor, showReadmore = true, pagetype = "", index }) => {
  const stories = collection.items
    .filter(item => item.type === "story")
    .slice(0, 4)
    .map(item => item.story);
  if (!collection) {
    return null;
  }

  const items = ([...collection.items] || []).filter(({ story = {} }) => getStoryHeadline(story) && story.url);
  if (!items.length) {
    return null;
  }

  return (
    <div styleName="base" style={accentColor && { "--accent-color": accentColor }}>
      <div className="row">
        <div styleName="main-content">
          <StoryCardBig story={items[0].story} className={"story-card story-card-big"} eager={index === 0} />
          {!!items[3] && (
            <SmallStoryCardDesktopVertical
              story={items[3].story}
              className={"story-card story-card-small story-card-small-scs"}
            />
          )}
          {!!items[4] && (
            <SmallStoryCardDesktopVertical
              story={items[4].story}
              className={"story-card story-card-small story-card-small-scs2"}
            />
          )}

          {stories &&
            stories
              .splice(0, 3)
              .map(
                (story, index) =>
                  story && <SmallStoryCard key={story.id} story={story} className={`story-card-item-${index + 1}`} />
              )}

          <div styleName="read-more-wrapper">
            {/* <h1>remove me</h1> */}
            {/* <ReadMoreLink href={getPagePath(collection)} text={metadata && metadata["read_more_text"]} /> */}
            {showReadmore && <ReadMoreLink href="#" text={metadata && metadata["read_more_text"]} />}
          </div>
        </div>
        <div styleName="sidebar">
          {/* <DfpAd className="hidden-mobile" adtype="Rectangle" placement={pagetype} /> */}
          {/* <DfpAd adtype="Vikatan_widget" placement={pagetype} /> */}
        </div>
      </div>
    </div>
  );
};

SixStoryOneAdOneWidget.propTypes = {
  metadata: PropTypes.shape({
    read_more_text: PropTypes.string
  }),
  accentColor: PropTypes.string,
  showReadmore: PropTypes.bool,
  collection: PropTypes.shape({
    items: PropTypes.arrayOf(PropTypes.shape(StoryCardBig.propTypes))
  }),
  pagetype: PropTypes.string,
  index: PropTypes.number
};

export default SixStoryOneAdOneWidget;
