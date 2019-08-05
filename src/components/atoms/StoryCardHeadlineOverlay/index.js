import React from "react";
import PropTypes from "prop-types";
import { get } from "lodash";
import { Link } from "@quintype/components";

import Contributor from "../Contributor";
import ResponsiveImageWithFallback from "../ResponsiveImageWithFallback";
import Headline from "../Headline";

import { getStoryData, generateImageSources } from "../../utils/utils";

import "./storyCardHeadlineOverlay.m.css";

const StoryCardHeadlineOverlay = ({ story, className = "", cardWithImageZoom = true, hasTruncatedHeadline = true }) => {
  const storyData = getStoryData(story);

  if (!(storyData.headline && story.url)) {
    return null;
  }

  const contributor = get(story, ["authors", 0]);
  const contributorRole = get(story, ["authors", 0, "contributor-role", "name"], "");
  const externalLink = get(story, ["metadata", "reference-url"]);

  return (
    <Link
      aria-label={`${"Read full story: "} ${storyData.headline}`}
      href={externalLink || story.url}
      externalLink={externalLink}
      styleName="base"
      className={`base ${className} ${cardWithImageZoom ? "card-with-image-zoom" : ""}`}
    >
      <div styleName="image-container">
        <ResponsiveImageWithFallback
          styleName="image-wrapper"
          slug={storyData.imageS3Key}
          metadata={storyData.imageMetadata}
          alt={storyData.imageCaption}
          imgParams={{ auto: ["format", "compress"] }}
          sources={generateImageSources(
            { aspectRatio: [8, 5], screenWidthCoverage: 1 },
            { aspectRatio: [7, 5], screenWidthCoverage: 0.36 }
          )}
        />
      </div>
      <div styleName="text-wrapper">
        {contributor && (
          <Contributor
            name={contributor["name"]}
            type={contributorRole}
            contributorType={3}
            iconColor="#4a4a4a"
            className={"contributor"}
          />
        )}
        <Headline
          text={storyData.headline}
          headlineType={3}
          headerLevel={3}
          className={`headline ${hasTruncatedHeadline ? "truncated" : ""}`}
        />
      </div>
    </Link>
  );
};

StoryCardHeadlineOverlay.propTypes = {
  className: PropTypes.string,
  cardWithImageZoom: PropTypes.bool,
  hasTruncatedHeadline: PropTypes.bool,
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

export default StoryCardHeadlineOverlay;
