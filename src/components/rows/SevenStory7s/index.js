import React from "react";
import PropTypes from "prop-types";
import CollectionLink from "../../utils/generate-collection-link";
import StoryCardFullWidth from "../../atoms/StoryCardFullWidth";
import StoryCard from "../../atoms/StoryCard";
import Headline from "../../atoms/Headline";
import "./sevenStory7s.m.css";
export const SevenStory7s = ({ collection, Icon }) => {
  const { name, items } = collection;
  const MaxNumberOfThumbnailStories = 6;
  return (
    <div styleName="seven-story-7s">
      <CollectionLink collection={collection}>
        <Headline headerLevel={1} headlineType={2} headlineDesign={"crossline"} text={name} />
      </CollectionLink>
      <div className="row">
        {items && items.length > 0 && (
          <StoryCardFullWidth styleName="story-card-full-width" key={items[0].id} story={items[0].story} />
        )}
        <div styleName="gradient-container">
          <div styleName="thumb-story-container">
            {items &&
              items.length > 1 &&
              items
                .slice(1, MaxNumberOfThumbnailStories + 1)
                .map(item => <StoryCard styleName="story-card" key={item.id} story={item.story} />)}
          </div>
        </div>
      </div>
    </div>
  );
};

SevenStory7s.propTypes = {
  collection: PropTypes.shape({
    name: PropTypes.string,
    id: PropTypes.number,
    slug: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape(StoryCardFullWidth.propTypes))
  }),
  Icon: PropTypes.func,
  BgPattern: PropTypes.string
};

export default SevenStory7s;
