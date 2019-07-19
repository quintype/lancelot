import React from "react";
import PropTypes from "prop-types";
import get from "lodash/get";
import CollectionLink from "../../utils/generate-collection-link";
import { StoryCardML4x3DP1x1 } from "../../atoms/StoryCardML4x3DP1x1";
import { StoryCardML4x3DP7x5HeadlineOverlay } from "../../atoms/StoryCardML4x3DP7x5HeadlineOverlay";
import { StoryCardML8x5DP7x5HeadlineOverlay } from "../../atoms/StoryCardML8x5DP7x5HeadlineOverlay";

import ResponsiveImageWithFallback from "../../atoms/ResponsiveImageWithFallback";
import Headline from "../../atoms/Headline";

import styles from "./fiveStoriesOneAdBundle.m.css";
import { generateImageSources, getStoryHeadline } from "../../utils/utils";

export const FiveStoriesOneAdBundle = ({ collection, accentColor, pagetype = "" }) => {
  const numberOfStories = get(collection, ["total-count"], 0);
  const stories = collection.items
    .filter(({ story = {} }) => getStoryHeadline(story) && story.url)
    .slice(0, 5)
    .map(({ story }) => story);
  return (
    <div styleName="base" style={accentColor && { "--accent-color": accentColor }}>
      <div styleName="row" className="container row">
        <div styleName="bundle-header" className="row">
          <CollectionLink collection={collection} className={styles["bundle-header"]}>
            <Headline
              text={collection.name}
              headerType={10}
              headerLevel={2}
              headlineDesign={"crossline"}
              className={"collection-title"}
            />
          </CollectionLink>
          <div styleName="bundle-summary-wrap">
            {numberOfStories && <span styleName="total-count"> {numberOfStories + " அளவுக்கு"}</span>}
            <p styleName="bundle-summary">{collection.summary}</p>
          </div>
        </div>
        <div styleName="col-3">
          <CollectionMeta collection={collection} />
        </div>
        <div styleName="col-3">
          {stories.splice(0, 1).map(story => (
            <StoryCardML8x5DP7x5HeadlineOverlay key={story.id} story={story} className="story-1" />
          ))}
          {stories.splice(0, 1).map(story => (
            <StoryCardML4x3DP7x5HeadlineOverlay key={story.id} story={story} styleName="story-2" />
          ))}
        </div>
        <div styleName="col-3">
          {stories.splice(0, 3).map(story => (
            <StoryCardML4x3DP1x1 key={story.id} story={story} styleName="story-3" />
          ))}
        </div>
      </div>
    </div>
  );
};

const CollectionMeta = ({ collection, className }) => {
  const collectionCoverImageS3Key = get(collection, ["metadata", "cover-image", "cover-image-s3-key"], "");
  const collectionCoverImageMetaData = get(collection, ["metadata", "cover-image", "cover-image-metadata"], "");
  const collectionCoverImageCaption = get(collection, ["metadata", "cover-image", "caption"], collection.name);

  const snapshot = get(collection, ["metadata", "snapshot", "body"], "")
    .split("</p>")
    .map(str => str.replace("<p>", ""))
    .filter(str => str.trim().length);

  return (
    <div className={`${className}`}>
      <ResponsiveImageWithFallback
        styleName="cover-image-wrapper"
        slug={collectionCoverImageS3Key}
        metadata={collectionCoverImageMetaData}
        alt={collectionCoverImageCaption}
        imgParams={{ auto: ["format", "compress"] }}
        sources={generateImageSources(
          {
            aspectRatio: [3, 1],
            screenWidthCoverage: 1
          },
          {
            aspectRatio: [9, 5],
            screenWidthCoverage: 0.4
          }
        )}
      />
      <div styleName="meta-text-wrapper">
        <Headline text={snapshot[0]} headerType={4} headerLevel={3} styleName="meta-headline" />
        <ul>
          {snapshot.slice(1).map((text, index) => (
            <li key={index} styleName="meta-list-item">
              {text}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

CollectionMeta.propTypes = {
  collection: PropTypes.shape({
    name: PropTypes.string,
    metadata: PropTypes.shape({
      "cover-image": PropTypes.shape({
        "cover-image-s3-key": PropTypes.string,
        "cover-image-metadata": PropTypes.shape({
          height: PropTypes.number,
          width: PropTypes.number,
          "mime-type": PropTypes.string,
          "focus-point": PropTypes.arrayOf(PropTypes.number)
        }),
        caption: PropTypes.string
      })
    })
  }),
  className: PropTypes.string
};

FiveStoriesOneAdBundle.propTypes = {
  collection: CollectionMeta.propTypes.collection,
  metadata: PropTypes.shape({
    read_more_text: PropTypes.string
  }),
  accentColor: PropTypes.string,
  pagetype: PropTypes.string
};

export default FiveStoriesOneAdBundle;
