import React from "react";
import PropTypes from "prop-types";
import CollectionLink from "../../utils/generate-collection-link";
import ReadMoreLink from "../../atoms/ReadMoreLink";
import StoryCardFeaturedBigHalfImg from "../../atoms/StoryCardFeaturedBigHalfImg";
import StoryCardFeaturedSmall from "../../atoms/StoryCardFeaturedSmall";
import Headline from "../../atoms/Headline";

import "./invertedFourStoryHalfFeatured.m.css";

const InvertedFourStoryHalfFeatured = ({ collection, metadata, accentColor }) => {
  const { name, items } = collection;

  let stories = items.filter(item => item.type === "story").map(item => item.story) || [];

  return (
    <div styleName="four-story-half-featured" style={accentColor && { "--accent-color": accentColor }}>
      <div className={`container`}>
        <CollectionLink collection={collection}>
          <Headline
            text={name}
            headlineType={1}
            headerLevel={2}
            headlineDesign={"crossline"}
            className={"collection-title"}
          />
        </CollectionLink>
        <div styleName="row" className="row">
          {stories.splice(0, 1).map(story => (
            <StoryCardFeaturedBigHalfImg className={"story-card-featured-big"} key={story.id} story={story} />
          ))}
          {stories.splice(0, 3).map((story, index) => (
            <StoryCardFeaturedSmall
              className={`story-card-featured-small ${"small-story-" + (index + 1)}`}
              key={story.id}
              story={story}
            />
          ))}
          {collection.pagePath && (
            <ReadMoreLink
              className={`hidden-desktop read-more`}
              href={collection.pagePath}
              text={metadata && metadata["read_more_text"]}
            />
          )}
        </div>
      </div>
    </div>
  );
};

InvertedFourStoryHalfFeatured.propTypes = {
  accentColor: PropTypes.string,
  collection: PropTypes.shape({
    name: PropTypes.string,
    id: PropTypes.number,
    slug: PropTypes.string,
    items: PropTypes.arrayOf(
      PropTypes.shape({
        type: PropTypes.string,
        story: StoryCardFeaturedBigHalfImg.propTypes.story
      })
    )
  }),
  metadata: PropTypes.shape({
    read_more_text: PropTypes.string
  })
};

export default InvertedFourStoryHalfFeatured;
