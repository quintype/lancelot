import React from "react";
import PropTypes from "prop-types";
import { StoryCardML4x3DP1x1 } from "../../atoms/StoryCardML4x3DP1x1";
import { StoryCardML8x5DP7x5HeadlineOverlay } from "../../atoms/StoryCardML8x5DP7x5HeadlineOverlay";

import "./sevenStoriesOneAd.m.css";

export const SevenStoriesOneAd = ({ collection, accentColor, pagetype = "" }) => {
  // const numberOfStories = get(collection, ["total-count"], 0);
  const stories = collection.items.slice(0, 8).map(({ story }) => story);
  return (
    <div styleName="base" style={accentColor && { "--accent-color": accentColor }}>
      <div styleName="row" className="row">
        <div styleName="col-3">
          {stories.splice(0, 2).map(story => (
            <StoryCardML8x5DP7x5HeadlineOverlay key={story.id} story={story} className="story-1" />
          ))}
        </div>
        <div styleName="col-3">
          {stories.splice(0, 2).map(story => (
            <StoryCardML8x5DP7x5HeadlineOverlay key={story.id} story={story} className="story-1" />
          ))}
        </div>
        <div styleName="col-3">
          {stories.splice(0, 3).map(story => (
            <StoryCardML4x3DP1x1 key={story.id} story={story} styleName="story-3" />
          ))}
          <div styleName="ad">DFPAD</div>
        </div>
      </div>
    </div>
  );
};

SevenStoriesOneAd.propTypes = {
  collection: PropTypes.object,
  metadata: PropTypes.shape({
    read_more_text: PropTypes.string
  }),
  accentColor: PropTypes.string,
  pagetype: PropTypes.string
};

export default SevenStoriesOneAd;
