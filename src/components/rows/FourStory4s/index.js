import React from "react";
import PropTypes from "prop-types";
import CollectionLink from "../../utils/generate-collection-link";
import CollectionTitleWithCrossLine from "../../atoms/CollectionTitleWithCrossLine";
import StoryCard from "../../atoms/story-card-gradient-background";
import "./styles.m.css";
import { getStoryHeadline } from "../../utils/utils";

const FourStory4s = ({ collection, accentColor }) => {
  const { name, items } = collection;
  const stories =
    items
      .filter(({ story = {} }) => getStoryHeadline(story) && story.url)
      .slice(0, 4)
      .map(({ story }) => <StoryCard styleName="story-card" key={story.id} story={story} />) || [];

  if (!stories.length) {
    return null;
  }

  return (
    <div styleName="four-story-4s" style={accentColor && { "--accent-color": accentColor }}>
      <div className="container">
        <CollectionLink collection={collection}>
          <CollectionTitleWithCrossLine className="title" title={name} />
        </CollectionLink>
        <div styleName="story-container">{stories}</div>
      </div>
    </div>
  );
};

FourStory4s.propTypes = {
  accentColor: PropTypes.string,
  collection: PropTypes.shape({
    name: PropTypes.string,
    id: PropTypes.number,
    slug: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape(StoryCard.propTypes))
  })
};

export default FourStory4s;