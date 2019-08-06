import React from "react";
import PropTypes from "prop-types";
import CollectionLink from "../../utils/generate-collection-link";
import ReadMoreLink from "../../atoms/ReadMoreLink/index";
import StoryCardBig from "../../atoms/StoryCardBig";
import StoryCardDesktopHover from "../../atoms/StoryCardDesktopHover";

import styles from "./fourStoryPhotoGallery.m.css";
import { getStoryHeadline } from "../../utils/utils";

const FourStoryPhotoGallery = ({ collection, metadata, accentColor }) => {
  if (!collection) {
    return null;
  }

  const stories = ([...collection.items] || [])
    .filter(({ story = {} }) => getStoryHeadline(story) && story.url)
    .map(item => item.story);
  if (!stories.length) {
    return null;
  }

  return (
    <div className={`${styles["base"]}`} style={accentColor && { "--accent-color": accentColor }}>
      <div className={`container`}>
        <div className="row">
          {collection.name && (
            <CollectionLink collection={collection} className={styles["collection-name-wrap"]}>
              <h2 className={styles["collection-name"]}>{collection.name}</h2>
            </CollectionLink>
          )}
          {stories.splice(0, 1).map(story => (
            <StoryCardBig className={styles["main-story"]} key={story.id} story={story} />
          ))}
          <div className={styles["small-stories-wrapper"]}>
            {stories.splice(0, 3).map(story => (
              <StoryCardDesktopHover className={styles["small-story"]} key={story.id} story={story} />
            ))}
          </div>
          {collection.pagePath && (
            <ReadMoreLink
              className={styles["read-more"]}
              href={`/collection/${collection.slug}`}
              text={metadata && metadata["read_more_text"]}
            />
          )}
        </div>
      </div>
    </div>
  );
};

FourStoryPhotoGallery.propTypes = {
  accentColor: PropTypes.string,
  collection: PropTypes.shape({
    items: PropTypes.arrayOf(PropTypes.shape({ type: PropTypes.string, story: StoryCardBig.propTypes.story }))
  }),
  metadata: PropTypes.shape({
    read_more_text: PropTypes.string
  })
};

export default FourStoryPhotoGallery;
