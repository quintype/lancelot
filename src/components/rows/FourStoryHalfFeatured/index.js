import React from "react";
import PropTypes from "prop-types";
import CollectionLink from "../../utils/generate-collection-link";
import StoryCardFeaturedBig from "../../atoms/StoryCardFeaturedBig";
import StoryCardFeaturedSmall from "../../atoms/StoryCardFeaturedSmall";
import CollectionTitleWithCrossLine from "../../atoms/CollectionTitleWithCrossLine";
import "./fourStoryHalfFeatured.m.css";

const FourStoryHalfFeatured = ({ collection, accentColor }) => {
  const { name, items } = collection;
  return (
    <div styleName="four-story-half-featured" style={accentColor && { "--accent-color": accentColor }}>
      <div className={`container`}>
        <CollectionLink collection={collection}>
          <CollectionTitleWithCrossLine className={"title"} title={name} />
        </CollectionLink>
        <div className="row">
          {items && items.length > 0 && (
            <StoryCardFeaturedBig className={"story-card-featured-big"} key={items[0].id} story={items[0].story} />
          )}
          {items &&
            items.length > 1 &&
            items
              .slice(1, 4)
              .map(item => (
                <StoryCardFeaturedSmall className={"story-card-featured-small"} key={item.id} story={item.story} />
              ))}
        </div>
      </div>
    </div>
  );
};

FourStoryHalfFeatured.propTypes = {
  accentColor: PropTypes.string,
  collection: PropTypes.shape({
    name: PropTypes.string,
    id: PropTypes.number,
    slug: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape(StoryCardFeaturedBig.propTypes)),
    accentColor: PropTypes.string
  })
};

export default FourStoryHalfFeatured;
