import React from "react";
import PropTypes from "prop-types";
import get from "lodash/get";
import { Link } from "@quintype/components";

import Contributor from "../Contributor";
import ResponsiveImageWithFallback from "../ResponsiveImageWithFallback";
import Headline from "../Headline";

import { getStoryData, generateImageSources } from "../../utils/utils";

import "./storyCardML4x3DP2x1WithLabel.m.css";

export const StoryCardML4x3DP2x1 = ({ story, className = "", cardWithImageZoom = true }) => {
  const storyData = getStoryData(story);
  const headline = storyData.headline;

  if (!(headline && story.url)) {
    return null;
  }

  const contributorName = get(story, ["authors", 0, "name"], null);
  const contributorRole = get(story, ["authors", 0, "contributor-role", "name"], "");
  const externalLink = get(story, ["metadata", "reference-url"]);

  return (
    <Link
      aria-label={`${"Read full story: "} ${storyData.headline}`}
      href={externalLink || story.url}
      externalLink={externalLink}
      styleName="base"
      className={`${className} ${cardWithImageZoom ? "card-with-image-zoom" : ""}`}
    >
      <div className="image-container">
        <ResponsiveImageWithFallback
          styleName="image-wrapper"
          className="image-wrapper"
          slug={storyData.imageS3Key}
          metadata={storyData.imageMetadata}
          alt={storyData.imageCaption}
          imgParams={{ auto: ["format", "compress"] }}
          sources={generateImageSources(
            { aspectRatio: [4, 3], screenWidthCoverage: 0.25 },
            { aspectRatio: [2, 1], screenWidthCoverage: 0.17 }
          )}
        />
      </div>
      <div className="text-wrapper">
        <Headline text={story.headline} headlineType={4} headerLevel={3} className="headline" />
        {contributorName && (
          <Contributor name={contributorName} contributorType={3} type={contributorRole} className="contributor" />
        )}
      </div>
    </Link>
  );
};

export const StoryCardML4x3DP2x1WithLabel = ({ story, className, defaultLabel = "Others" }) => {
  if (story.label === "null" || story.label === null) {
    story.label = defaultLabel;
  }
  return (
    <div className={`${className}`} styleName={`story-card-with-label-wrapper`}>
      {story.label && (
        <div styleName="headline-wrapper">
          <span styleName="bullet-icon">»</span>
          <Headline text={story.label} headlineType={3} headerLevel={2} className={"headline-label"} />
        </div>
      )}
      <StoryCardML4x3DP2x1 story={story} styleName="card" />
    </div>
  );
};

StoryCardML4x3DP2x1.propTypes = {
  className: PropTypes.string,
  cardWithImageZoom: PropTypes.bool,
  story: PropTypes.shape({
    id: PropTypes.string,
    contributors: PropTypes.arrayOf(
      PropTypes.shape({
        "role-name": PropTypes.string,
        authors: PropTypes.arrayOf(
          PropTypes.shape({
            name: PropTypes.string
          })
        )
      })
    ),
    headline: PropTypes.string.isRequired,
    metadata: PropTypes.shape({
      "reference-url": PropTypes.string
    }),
    alternative: PropTypes.shape({
      home: PropTypes.shape({
        default: PropTypes.shape({
          headline: PropTypes.string
        })
      })
    }),
    slug: PropTypes.string.isRequired,
    "hero-image-metadata": PropTypes.shape({
      height: PropTypes.number,
      width: PropTypes.number,
      "aspect-ratio": PropTypes.arrayOf(PropTypes.number)
    }),
    "hero-image-s3-key": PropTypes.string,
    "hero-image-caption": PropTypes.string
  })
};

StoryCardML4x3DP2x1WithLabel.propTypes = {
  defaultLabel: PropTypes.string,
  story: StoryCardML4x3DP2x1.propTypes.story,
  className: PropTypes.string
};

export default StoryCardML4x3DP2x1;
