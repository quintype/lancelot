import React from "react";
import PropTypes from "prop-types";
import get from "lodash/get";
import { Link } from "@quintype/components";

import Contributor from "../Contributor";
import ResponsiveImageWithFallback from "../ResponsiveImageWithFallback";
import { getStoryData, generateImageSources } from "../../utils/utils";

import "./storyCardML4x3DP7x5HeadlineOverlay.m.css";
import Headline from "../Headline";

export const StoryCardML4x3DP7x5HeadlineOverlay = ({ story, className = "", cardWithImageZoom = true }) => {
  const storyData = getStoryData(story);

  if (!(storyData.headline && story.url)) {
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
      <div styleName="image-container">
        <ResponsiveImageWithFallback
          styleName="image-wrapper"
          slug={storyData.imageS3Key}
          metadata={storyData.imageMetadata}
          alt={storyData.imageCaption}
          imgParams={{ auto: ["format", "compress"] }}
          sources={generateImageSources(
            {
              aspectRatio: [4, 3],
              screenWidthCoverage: 0.3
            },
            {
              aspectRatio: [7, 5],
              screenWidthCoverage: 0.4
            }
          )}
        />
      </div>
      <div styleName="text-wrapper">
        <Headline text={storyData.headline} headlineType={3} headerLevel={3} styleName="headline" />
        {contributorName && (
          <Contributor name={contributorName} contributorType={3} type={contributorRole} className="contributor" />
        )}
      </div>
    </Link>
  );
};

StoryCardML4x3DP7x5HeadlineOverlay.propTypes = {
  className: PropTypes.string,
  cardWithImageZoom: PropTypes.bool,
  story: PropTypes.shape({
    id: PropTypes.string,
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

export default StoryCardML4x3DP7x5HeadlineOverlay;
