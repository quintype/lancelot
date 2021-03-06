import React from "react";
import PropTypes from "prop-types";
import get from "lodash/get";
import { Link } from "@quintype/components";
import Contributor from "../Contributor";
import ResponsiveImageWithFallback from "../ResponsiveImageWithFallback";

import { getStoryData, generateImageSources } from "../../utils/utils";

import "./storyCardML9x5DP9x5.m.css";
import Headline from "../Headline";

const StoryCardML9x5DP9x5 = ({ story, className = "", cardWithImageZoom = true }) => {
  const storyData = getStoryData(story);

  if (!storyData.headline || !story["url"]) {
    return null;
  }

  const contributor = get(story, ["authors", 0]);
  const contributorRole = get(story, ["authors", 0, "contributor-role", "name"], "");
  const externalLink = get(story, ["metadata", "reference-url"]);

  return (
    <div styleName="base" className={`${className} ${cardWithImageZoom ? "card-with-image-zoom" : ""}`}>
      <Link
        aria-label={`${"Read full story: "} ${storyData.headline}`}
        className="link"
        href={externalLink || story.url}
        externalLink={externalLink}
      >
        <div className="image-container" styleName="image-container">
          <ResponsiveImageWithFallback
            styleName="image-wrapper"
            slug={storyData.imageS3Key}
            metadata={storyData.imageMetadata}
            alt={storyData.imageCaption}
            imgParams={{ auto: ["format", "compress"] }}
            sources={generateImageSources(
              { aspectRatio: [9, 5], screenWidthCoverage: 1 },
              { aspectRatio: [9, 5], screenWidthCoverage: 0.25 }
            )}
          />
        </div>
        <div className="text-wrapper">
          <Headline text={storyData.headline} headlineType={4} headerLevel={3} className="headline" />
          {contributor && (
            <Contributor
              name={contributor["name"]}
              type={contributorRole}
              iconColor="#4a4a4a"
              className="contributor"
              contributorType={3}
            />
          )}
        </div>
      </Link>
    </div>
  );
};

StoryCardML9x5DP9x5.propTypes = {
  className: PropTypes.string,
  cardWithImageZoom: PropTypes.bool,
  story: PropTypes.shape({
    authors: PropTypes.arrayOf(
      PropTypes.shape({
        "contributor-role": PropTypes.shape({
          name: PropTypes.string
        }),
        name: PropTypes.string
      })
    ),
    headline: PropTypes.string.isRequired,
    metadata: PropTypes.shape({
      "reference-url": PropTypes.string
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

export default StoryCardML9x5DP9x5;
