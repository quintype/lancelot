import React from "react";
import PropTypes from "prop-types";
import { get } from "lodash";

import StoryCardBig from "../../atoms/story-card-responsive-same";
import SmallStoryCardDesktopMedium16x9 from "../../atoms/small-story-card-desktop-medium-16x9";
import SmallStoryCardDesktopVertical from "../../atoms/small-story-card-desktop-vertical";
// import { DfpAd } from "../../atoms/dfp-ad";
// import { getPagePath } from "../../../data/collection";
import ReadMoreLink from "../../atoms/read-more-link/index";

import "./styles.m.css";

const getStoryHeadline = story => {
  return get(story, ["alternative", "home", "default", "headline"]) || story.headline;
};

const FiveStoryOneAdOneWidget = ({ collection, metadata, accentColor, showReadmore = true, pagetype = "", index }) => {
  if (!collection) {
    return null;
  }

  const items = ([...collection.items] || []).filter(({ story = {} }) => getStoryHeadline(story) && story.url);
  if (!items.length) {
    return null;
  }

  return (
    <div styleName="base" style={accentColor && { "--accent-color": accentColor }}>
      <div className={`container`}>
        <div className="row">
          <div styleName="main-content">
            <StoryCardBig story={items[0].story} styleName="story-card story-card-big" eager={index === 0} />
            {!!items[1] && (
              <SmallStoryCardDesktopMedium16x9
                story={items[1].story}
                styleName="story-card story-card-medium story-card-medium-scm"
                eager={index === 0}
              />
            )}
            {!!items[2] && (
              <SmallStoryCardDesktopMedium16x9
                story={items[2].story}
                styleName="story-card story-card-medium story-card-medium-scm2"
                eager={index === 0}
              />
            )}
            {/* <DfpAd className="hidden-desktop" adtype="Rectangle" placement={pagetype} /> */}
            {!!items[3] && (
              <SmallStoryCardDesktopVertical
                story={items[3].story}
                styleName="story-card story-card-small story-card-small-scs"
              />
            )}
            {!!items[4] && (
              <SmallStoryCardDesktopVertical
                story={items[4].story}
                styleName="story-card story-card-small story-card-small-scs2"
              />
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
    </div>
  );
};

FiveStoryOneAdOneWidget.propTypes = {
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

export default FiveStoryOneAdOneWidget;
