import React from "react";
import PropTypes from "prop-types";
// import StoryCardBig from "../../atoms/story-card-responsive-same";
import StoryCardML5x4DP1x1 from "../../atoms/StoryCardML5x4DP1x1";
import StoryCardML3x2DP9x5 from "../../atoms/StoryCardML3x2DP9x5";
import StoryCardML9x5DP9x5 from "../../atoms/StoryCardML9x5DP9x5";
import StoryCardML5x4DP4x3 from "../../atoms/StoryCardML5x4DP4x3";
// import { DfpAd } from "../../atoms/dfp-ad";

import "./fiveStoryOneAd.m.css";
import { getStoryHeadline } from "../../utils/utils";

const FiveStoryOneAd = ({ collection, accentColor, pagetype = "" }) => {
  if (!collection) {
    return null;
  }

  const items = ([...collection.items] || []).filter(({ story = {} }) => getStoryHeadline(story) && story.url);
  if (!items.length) {
    return null;
  }

  return (
    <div styleName="base" style={accentColor && { "--accent-color": accentColor }}>
      <div className="container">
        <div styleName="row">
          <div className="main-content">
            <StoryCardML3x2DP9x5 story={items[0].story} />
          </div>
          <div styleName="second-column">
            {!!items[1] && <StoryCardML9x5DP9x5 story={items[1].story} />}
            {!!items[2] && <StoryCardML5x4DP4x3 story={items[2].story} />}
            {!!items[3] && <StoryCardML5x4DP4x3 story={items[3].story} />}
          </div>
          <div styleName="third-column">
            {/* <DfpAd adtype="Rectangle" placement={pagetype} /> */}
            <div styleName="bottom-aligned">{!!items[4] && <StoryCardML5x4DP1x1 story={items[4].story} />}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

FiveStoryOneAd.propTypes = {
  accentColor: PropTypes.string,
  collection: PropTypes.object,
  pagetype: PropTypes.string
};

export default FiveStoryOneAd;
