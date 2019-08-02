import React from "react";
import PropTypes from "prop-types";

import SliderMain from "../../atoms/SliderMain";
import SmallStoryCard from "../../atoms/SmallStoryCard";
import CollectionBundleItem from "../../atoms/CollectionBundleItem";

import "./mainRow2.m.css";

const SliderCollectionStoriesBundle = ({ stories, noSliderstory }) => {
  return (
    <div styleName="slider-collection-stories-bundle">
      <div styleName="slider-stories-wrap">
        {noSliderstory ? <SliderMain stories={stories.splice(0, 1)} /> : <SliderMain stories={stories.splice(0, 5)} />}
      </div>
      <div styleName="four-stories-wrap">
        {stories &&
          stories
            .splice(0, 4)
            .map(story => story && <SmallStoryCard key={story.id} story={story} styleName="story-card" />)}
      </div>

      <div>
        <div styleName="two-stories">
          {stories &&
            stories
              .splice(0, 2)
              .map(story => story && <SmallStoryCard key={story.id} story={story} styleName="story-card" />)}
        </div>
        <div className="widget300xauto">DFPAD</div>
      </div>
    </div>
  );
};

SliderCollectionStoriesBundle.propTypes = {
  stories: SliderMain.propTypes.stories,
  collections: PropTypes.arrayOf(CollectionBundleItem.propTypes.collection),
  noSliderstory: PropTypes.bool
};

const MainRow = ({ collection, accentColor, pagetype = "", noSliderstory }) => {
  if (!collection.items) {
    return null;
  }
  const stories = collection.items.filter(item => item && item.type === "story").map(item => item.story);

  return (
    <div styleName="main-row" style={accentColor && { "--accent-color": accentColor }}>
      <div className="row">
        {stories && stories.length > 0 && (
          <SliderCollectionStoriesBundle stories={stories.splice(0, 15)} noSliderstory={noSliderstory} />
        )}
      </div>
    </div>
  );
};

MainRow.propTypes = {
  accentColor: PropTypes.string,
  collection: CollectionBundleItem.propTypes.collection,
  pagetype: PropTypes.string,
  noSliderstory: PropTypes.bool
};

export default MainRow;
